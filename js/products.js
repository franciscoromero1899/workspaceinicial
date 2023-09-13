document.addEventListener('DOMContentLoaded', () => {
    const logueado = localStorage.getItem('logueado');
    if (logueado === 'false') {
        window.location.href = '../login.html';
    }
    document.getElementById('perfil-a').textContent = localStorage.getItem('nombreUsuario');
  // catID se guarda al dar click en una categoría.
  let endPoint = localStorage.getItem('catID');
  const url = `https://japceibal.github.io/emercado-api/cats_products/${endPoint}.json`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const productsList = document.getElementById('container');
    const productNames = [];
    const productDescriptions = [];
    //si no hay datos se crea un modal indicando que no hay stock;
    if(data.products.length == 0) {
      let noStockH1 = document.createElement('h1');
      noStockH1.textContent = 'No hay stock brodeell';
      noStockH1.className = 'no-stock-h1'
      productsList.appendChild(noStockH1);
    }
    /*en caso de que se encuentren datos, se crea una lista y
    se coloca dentro los datos, luego esa lista se muestra en el 
    DOM.
    */
    data.products.forEach(product => {
      const li = document.createElement('li');
      li.className = 'product-list';
      li.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="info-container">
          <div class="name-and-price">
            <h2 class="product-info product-name">${product.name}</h2>
            <h2 class="product-cost">${product.cost} ${product.currency}</h2>
          </div>
          
          <p class="product-info product-description">${product.description}</p>
          

          <div id = 'sold-and-btn-container'> 
          <p> sold : </p>
          <p class = 'sold-count'>${product.soldCount}</p>
          <button class="cart">
            <span class="material-symbols-outlined">
              add_shopping_cart
            </span>
          </button>
          </div>
        </div>
      `;
      
      productsList.appendChild(li);

      productNames.push(product.name.toLowerCase());
      productDescriptions.push(product.description.toLowerCase());
      

      //redirección a la info del producto 
      let productId = product.id;
      li.addEventListener('click',()=>{
        localStorage.setItem('productID',productId);
        console.log(productId)
        window.location = 'product-info.html'
      })
      //BUSCADOR

      /* Con cada cambio en el buscador se verifica si el valor concuerda
      con los valores del nombre o descripción de cada lista, las listas cuyo 
      valores no concuerdan se las oculta mediante un cambio de clase.
    */
      document.getElementById('search-input').addEventListener('keyup', () => {
        const inputValue = document.getElementById('search-input').value.toLowerCase();
        const productList = Array.from(document.querySelectorAll('.product-list'));
      
        productList.forEach(matchedProduct => {
            // se toma el nombre y descriptción de los productos.
            const productName = Array.from(matchedProduct.querySelectorAll('.product-name'));
            const productDescription = Array.from(matchedProduct.querySelectorAll('.product-description'));
            // se verifica si el valor del input concuerda con el nombre o descripción de algún producto.
            const productMatches = productName.some(name => name.textContent.toLowerCase().includes(inputValue)) ||
              productDescription.some(description => description.textContent.toLowerCase().includes(inputValue));
            //si el producto concuerda con el buscador se lo mantiene.
            if (productMatches) {
              matchedProduct.classList.remove('hidden');
            } else { // si no concuerda se lo oculta.
              matchedProduct.classList.add('hidden');
            }
          });
      });

      //FILTROS 
      //limpiar pantalla cada vez que se filtra, para no repetir objetos.
      function clearScreen (product) {
        productsList.innerHTML = '';
        product.forEach(product => {
        productsList.appendChild(product);
      });
      }
      
      const sortProducts = (selector, ascending) => {
        const productList = document.querySelectorAll('.product-list');
        const sortedProducts = Array.from(productList).sort((a, b) => {
          const valueA = parseInt(a.querySelector(selector).textContent);
          const valueB = parseInt(b.querySelector(selector).textContent);
          return ascending ? valueA - valueB : valueB - valueA;
        });
      
        clearScreen(sortedProducts);
      };
      
      document.getElementById("sort-sales-asc-btn").addEventListener("click", () => {
        sortProducts('.sold-count', true);
      });
      document.getElementById("sort-sales-desc-btn").addEventListener("click", () => {
        sortProducts('.sold-count', false);
      });
      document.getElementById("sort-price-asc").addEventListener("click", () => {
        sortProducts('.product-cost', true);
      });
      document.getElementById("sort-price-desc").addEventListener("click", () => {
        sortProducts('.product-cost', false);
      });
});
})
.catch(error => console.error('Error fetching data:', error));

    //FILTRO POR RANGO DE PRECIO.
    document.getElementById("filter-btn").addEventListener("click", function(){
        let productPrices = document.querySelectorAll('.product-cost');
        let minPrice = document.getElementById("rangeFilterPriceMin").value;
        let maxPrice = document.getElementById("rangeFilterPriceMax").value;
    
        productPrices.forEach(product => {
            let productCost = parseFloat(product.textContent);
            let productItem = product.closest('.product-list');
            /*si un campo se mantiene vacío se le asigna un valor predeterminado,
            ya sea 0, para el minimo o infinito para el maximo*/ 
            if(minPrice === '' || minPrice === undefined) {
                minPrice = 0;
            }
            if(maxPrice === '' || maxPrice === undefined) {
                maxPrice = Infinity;
            }
            /*si el precio del producto está entre los valores de los inputs se
            mantiene la lista en pantalla*/
            if (productCost >= minPrice && productCost <= maxPrice) {
                productItem.classList.remove('hidden');
            } else {
                productItem.classList.add('hidden');
            }
        });
    });
});

