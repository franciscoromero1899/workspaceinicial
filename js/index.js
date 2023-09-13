document.addEventListener("DOMContentLoaded", function(){
    //desafiate
    //si el usuario no inició sesión previamente, se lo enviará directo a login.html
    const logueado = localStorage.getItem('logueado');
    if (logueado === 'false' || logueado === null) {
        window.location.href = './login.html';
    }
    // desafiate
    //se coloca el nombre del usuario en el nav
    document.getElementById('perfil-a').textContent = localStorage.getItem('nombreUsuario');

    // sin esto las categorías del index no redireccionan a los productos.
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});
