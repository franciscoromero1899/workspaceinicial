//  SPDX-License-Identifier: LGPL-2.1-or-later
//  Copyright (c) 2015-2023 MariaDB Corporation Ab

// noinspection SpellCheckingInspection

'use strict';

let charsets = [];
let defaultCharsets = [];

class Collation {
  constructor(index, name, charset, maxLength) {
    this.index = index;
    this.name = name;
    this.charset = charset;
    this.maxLength = maxLength;
  }

  static fromCharset(charset) {
    return defaultCharsets[charset === 'utf8mb3' ? 'utf8' : charset];
  }

  static fromIndex(index) {
    if (index >= charsets.length) return undefined;
    return charsets[index];
  }

  static fromName(name) {
    for (let i = 0; i < charsets.length; i++) {
      let collation = charsets[i];
      if (collation && collation.name === name) {
        return collation;
      }
    }
    return undefined;
  }
}

// generated with query :
// SELECT CONCAT('charsets[', CAST(co.ID as char), '] = new Collation(', CAST(co.ID as char), ', \'',
// UPPER(co.COLLATION_NAME), '\', \'', co.CHARACTER_SET_NAME, '\', ', CAST(ca.MAXLEN as char), ');\n')
// FROM information_schema.COLLATIONS co
//   LEFT OUTER JOIN information_schema.CHARACTER_SETS ca ON ca.character_set_name = co.character_set_name
// ORDER BY co.ID ASC;
//then replace "utf8mb4" by "utf8"

charsets[1] = new Collation(1, 'BIG5_CHINESE_CI', 'big5', 2);
charsets[2] = new Collation(2, 'LATIN2_CZECH_CS', 'latin2', 1);
charsets[3] = new Collation(3, 'DEC8_SWEDISH_CI', 'dec8', 1);
charsets[4] = new Collation(4, 'CP850_GENERAL_CI', 'cp850', 1);
charsets[5] = new Collation(5, 'LATIN1_GERMAN1_CI', 'latin1', 1);
charsets[6] = new Collation(6, 'HP8_ENGLISH_CI', 'hp8', 1);
charsets[7] = new Collation(7, 'KOI8R_GENERAL_CI', 'koi8r', 1);
charsets[8] = new Collation(8, 'LATIN1_SWEDISH_CI', 'latin1', 1);
charsets[9] = new Collation(9, 'LATIN2_GENERAL_CI', 'latin2', 1);
charsets[10] = new Collation(10, 'SWE7_SWEDISH_CI', 'swe7', 1);
charsets[11] = new Collation(11, 'ASCII_GENERAL_CI', 'ascii', 1);
charsets[12] = new Collation(12, 'UJIS_JAPANESE_CI', 'ujis', 3);
charsets[13] = new Collation(13, 'SJIS_JAPANESE_CI', 'sjis', 2);
charsets[14] = new Collation(14, 'CP1251_BULGARIAN_CI', 'cp1251', 1);
charsets[15] = new Collation(15, 'LATIN1_DANISH_CI', 'latin1', 1);
charsets[16] = new Collation(16, 'HEBREW_GENERAL_CI', 'hebrew', 1);
charsets[18] = new Collation(18, 'TIS620_THAI_CI', 'tis620', 1);
charsets[19] = new Collation(19, 'EUCKR_KOREAN_CI', 'euckr', 2);
charsets[20] = new Collation(20, 'LATIN7_ESTONIAN_CS', 'latin7', 1);
charsets[21] = new Collation(21, 'LATIN2_HUNGARIAN_CI', 'latin2', 1);
charsets[22] = new Collation(22, 'KOI8U_GENERAL_CI', 'koi8u', 1);
charsets[23] = new Collation(23, 'CP1251_UKRAINIAN_CI', 'cp1251', 1);
charsets[24] = new Collation(24, 'GB2312_CHINESE_CI', 'gb2312', 2);
charsets[25] = new Collation(25, 'GREEK_GENERAL_CI', 'greek', 1);
charsets[26] = new Collation(26, 'CP1250_GENERAL_CI', 'cp1250', 1);
charsets[27] = new Collation(27, 'LATIN2_CROATIAN_CI', 'latin2', 1);
charsets[28] = new Collation(28, 'GBK_CHINESE_CI', 'gbk', 2);
charsets[29] = new Collation(29, 'CP1257_LITHUANIAN_CI', 'cp1257', 1);
charsets[30] = new Collation(30, 'LATIN5_TURKISH_CI', 'latin5', 1);
charsets[31] = new Collation(31, 'LATIN1_GERMAN2_CI', 'latin1', 1);
charsets[32] = new Collation(32, 'ARMSCII8_GENERAL_CI', 'armscii8', 1);
charsets[33] = new Collation(33, 'UTF8_GENERAL_CI', 'utf8', 3);
charsets[34] = new Collation(34, 'CP1250_CZECH_CS', 'cp1250', 1);
charsets[35] = new Collation(35, 'UCS2_GENERAL_CI', 'ucs2', 2);
charsets[36] = new Collation(36, 'CP866_GENERAL_CI', 'cp866', 1);
charsets[37] = new Collation(37, 'KEYBCS2_GENERAL_CI', 'keybcs2', 1);
charsets[38] = new Collation(38, 'MACCE_GENERAL_CI', 'macce', 1);
charsets[39] = new Collation(39, 'MACROMAN_GENERAL_CI', 'macroman', 1);
charsets[40] = new Collation(40, 'CP852_GENERAL_CI', 'cp852', 1);
charsets[41] = new Collation(41, 'LATIN7_GENERAL_CI', 'latin7', 1);
charsets[42] = new Collation(42, 'LATIN7_GENERAL_CS', 'latin7', 1);
charsets[43] = new Collation(43, 'MACCE_BIN', 'macce', 1);
charsets[44] = new Collation(44, 'CP1250_CROATIAN_CI', 'cp1250', 1);
charsets[45] = new Collation(45, 'UTF8MB4_GENERAL_CI', 'utf8', 4);
charsets[46] = new Collation(46, 'UTF8MB4_BIN', 'utf8', 4);
charsets[47] = new Collation(47, 'LATIN1_BIN', 'latin1', 1);
charsets[48] = new Collation(48, 'LATIN1_GENERAL_CI', 'latin1', 1);
charsets[49] = new Collation(49, 'LATIN1_GENERAL_CS', 'latin1', 1);
charsets[50] = new Collation(50, 'CP1251_BIN', 'cp1251', 1);
charsets[51] = new Collation(51, 'CP1251_GENERAL_CI', 'cp1251', 1);
charsets[52] = new Collation(52, 'CP1251_GENERAL_CS', 'cp1251', 1);
charsets[53] = new Collation(53, 'MACROMAN_BIN', 'macroman', 1);
charsets[54] = new Collation(54, 'UTF16_GENERAL_CI', 'utf16', 4);
charsets[55] = new Collation(55, 'UTF16_BIN', 'utf16', 4);
charsets[56] = new Collation(56, 'UTF16LE_GENERAL_CI', 'utf16le', 4);
charsets[57] = new Collation(57, 'CP1256_GENERAL_CI', 'cp1256', 1);
charsets[58] = new Collation(58, 'CP1257_BIN', 'cp1257', 1);
charsets[59] = new Collation(59, 'CP1257_GENERAL_CI', 'cp1257', 1);
charsets[60] = new Collation(60, 'UTF32_GENERAL_CI', 'utf32', 4);
charsets[61] = new Collation(61, 'UTF32_BIN', 'utf32', 4);
charsets[62] = new Collation(62, 'UTF16LE_BIN', 'utf16le', 4);
charsets[63] = new Collation(63, 'BINARY', 'binary', 1);
charsets[64] = new Collation(64, 'ARMSCII8_BIN', 'armscii8', 1);
charsets[65] = new Collation(65, 'ASCII_BIN', 'ascii', 1);
charsets[66] = new Collation(66, 'CP1250_BIN', 'cp1250', 1);
charsets[67] = new Collation(67, 'CP1256_BIN', 'cp1256', 1);
charsets[68] = new Collation(68, 'CP866_BIN', 'cp866', 1);
charsets[69] = new Collation(69, 'DEC8_BIN', 'dec8', 1);
charsets[70] = new Collation(70, 'GREEK_BIN', 'greek', 1);
charsets[71] = new Collation(71, 'HEBREW_BIN', 'hebrew', 1);
charsets[72] = new Collation(72, 'HP8_BIN', 'hp8', 1);
charsets[73] = new Collation(73, 'KEYBCS2_BIN', 'keybcs2', 1);
charsets[74] = new Collation(74, 'KOI8R_BIN', 'koi8r', 1);
charsets[75] = new Collation(75, 'KOI8U_BIN', 'koi8u', 1);
charsets[76] = new Collation(76, 'UTF8_TOLOWER_CI', 'utf8', 3);
charsets[77] = new Collation(77, 'LATIN2_BIN', 'latin2', 1);
charsets[78] = new Collation(78, 'LATIN5_BIN', 'latin5', 1);
charsets[79] = new Collation(79, 'LATIN7_BIN', 'latin7', 1);
charsets[80] = new Collation(80, 'CP850_BIN', 'cp850', 1);
charsets[81] = new Collation(81, 'CP852_BIN', 'cp852', 1);
charsets[82] = new Collation(82, 'SWE7_BIN', 'swe7', 1);
charsets[83] = new Collation(83, 'UTF8_BIN', 'utf8', 3);
charsets[84] = new Collation(84, 'BIG5_BIN', 'big5', 2);
charsets[85] = new Collation(85, 'EUCKR_BIN', 'euckr', 2);
charsets[86] = new Collation(86, 'GB2312_BIN', 'gb2312', 2);
charsets[87] = new Collation(87, 'GBK_BIN', 'gbk', 2);
charsets[88] = new Collation(88, 'SJIS_BIN', 'sjis', 2);
charsets[89] = new Collation(89, 'TIS620_BIN', 'tis620', 1);
charsets[90] = new Collation(90, 'UCS2_BIN', 'ucs2', 2);
charsets[91] = new Collation(91, 'UJIS_BIN', 'ujis', 3);
charsets[92] = new Collation(92, 'GEOSTD8_GENERAL_CI', 'geostd8', 1);
charsets[93] = new Collation(93, 'GEOSTD8_BIN', 'geostd8', 1);
charsets[94] = new Collation(94, 'LATIN1_SPANISH_CI', 'latin1', 1);
charsets[95] = new Collation(95, 'CP932_JAPANESE_CI', 'cp932', 2);
charsets[96] = new Collation(96, 'CP932_BIN', 'cp932', 2);
charsets[97] = new Collation(97, 'EUCJPMS_JAPANESE_CI', 'eucjpms', 3);
charsets[98] = new Collation(98, 'EUCJPMS_BIN', 'eucjpms', 3);
charsets[99] = new Collation(99, 'CP1250_POLISH_CI', 'cp1250', 1);
charsets[101] = new Collation(101, 'UTF16_UNICODE_CI', 'utf16', 4);
charsets[102] = new Collation(102, 'UTF16_ICELANDIC_CI', 'utf16', 4);
charsets[103] = new Collation(103, 'UTF16_LATVIAN_CI', 'utf16', 4);
charsets[104] = new Collation(104, 'UTF16_ROMANIAN_CI', 'utf16', 4);
charsets[105] = new Collation(105, 'UTF16_SLOVENIAN_CI', 'utf16', 4);
charsets[106] = new Collation(106, 'UTF16_POLISH_CI', 'utf16', 4);
charsets[107] = new Collation(107, 'UTF16_ESTONIAN_CI', 'utf16', 4);
charsets[108] = new Collation(108, 'UTF16_SPANISH_CI', 'utf16', 4);
charsets[109] = new Collation(109, 'UTF16_SWEDISH_CI', 'utf16', 4);
charsets[110] = new Collation(110, 'UTF16_TURKISH_CI', 'utf16', 4);
charsets[111] = new Collation(111, 'UTF16_CZECH_CI', 'utf16', 4);
charsets[112] = new Collation(112, 'UTF16_DANISH_CI', 'utf16', 4);
charsets[113] = new Collation(113, 'UTF16_LITHUANIAN_CI', 'utf16', 4);
charsets[114] = new Collation(114, 'UTF16_SLOVAK_CI', 'utf16', 4);
charsets[115] = new Collation(115, 'UTF16_SPANISH2_CI', 'utf16', 4);
charsets[116] = new Collation(116, 'UTF16_ROMAN_CI', 'utf16', 4);
charsets[117] = new Collation(117, 'UTF16_PERSIAN_CI', 'utf16', 4);
charsets[118] = new Collation(118, 'UTF16_ESPERANTO_CI', 'utf16', 4);
charsets[119] = new Collation(119, 'UTF16_HUNGARIAN_CI', 'utf16', 4);
charsets[120] = new Collation(120, 'UTF16_SINHALA_CI', 'utf16', 4);
charsets[121] = new Collation(121, 'UTF16_GERMAN2_CI', 'utf16', 4);
charsets[122] = new Collation(122, 'UTF16_CROATIAN_MYSQL561_CI', 'utf16', 4);
charsets[123] = new Collation(123, 'UTF16_UNICODE_520_CI', 'utf16', 4);
charsets[124] = new Collation(124, 'UTF16_VIETNAMESE_CI', 'utf16', 4);
charsets[128] = new Collation(128, 'UCS2_UNICODE_CI', 'ucs2', 2);
charsets[129] = new Collation(129, 'UCS2_ICELANDIC_CI', 'ucs2', 2);
charsets[130] = new Collation(130, 'UCS2_LATVIAN_CI', 'ucs2', 2);
charsets[131] = new Collation(131, 'UCS2_ROMANIAN_CI', 'ucs2', 2);
charsets[132] = new Collation(132, 'UCS2_SLOVENIAN_CI', 'ucs2', 2);
charsets[133] = new Collation(133, 'UCS2_POLISH_CI', 'ucs2', 2);
charsets[134] = new Collation(134, 'UCS2_ESTONIAN_CI', 'ucs2', 2);
charsets[135] = new Collation(135, 'UCS2_SPANISH_CI', 'ucs2', 2);
charsets[136] = new Collation(136, 'UCS2_SWEDISH_CI', 'ucs2', 2);
charsets[137] = new Collation(137, 'UCS2_TURKISH_CI', 'ucs2', 2);
charsets[138] = new Collation(138, 'UCS2_CZECH_CI', 'ucs2', 2);
charsets[139] = new Collation(139, 'UCS2_DANISH_CI', 'ucs2', 2);
charsets[140] = new Collation(140, 'UCS2_LITHUANIAN_CI', 'ucs2', 2);
charsets[141] = new Collation(141, 'UCS2_SLOVAK_CI', 'ucs2', 2);
charsets[142] = new Collation(142, 'UCS2_SPANISH2_CI', 'ucs2', 2);
charsets[143] = new Collation(143, 'UCS2_ROMAN_CI', 'ucs2', 2);
charsets[144] = new Collation(144, 'UCS2_PERSIAN_CI', 'ucs2', 2);
charsets[145] = new Collation(145, 'UCS2_ESPERANTO_CI', 'ucs2', 2);
charsets[146] = new Collation(146, 'UCS2_HUNGARIAN_CI', 'ucs2', 2);
charsets[147] = new Collation(147, 'UCS2_SINHALA_CI', 'ucs2', 2);
charsets[148] = new Collation(148, 'UCS2_GERMAN2_CI', 'ucs2', 2);
charsets[149] = new Collation(149, 'UCS2_CROATIAN_MYSQL561_CI', 'ucs2', 2);
charsets[150] = new Collation(150, 'UCS2_UNICODE_520_CI', 'ucs2', 2);
charsets[151] = new Collation(151, 'UCS2_VIETNAMESE_CI', 'ucs2', 2);
charsets[159] = new Collation(159, 'UCS2_GENERAL_MYSQL500_CI', 'ucs2', 2);
charsets[160] = new Collation(160, 'UTF32_UNICODE_CI', 'utf32', 4);
charsets[161] = new Collation(161, 'UTF32_ICELANDIC_CI', 'utf32', 4);
charsets[162] = new Collation(162, 'UTF32_LATVIAN_CI', 'utf32', 4);
charsets[163] = new Collation(163, 'UTF32_ROMANIAN_CI', 'utf32', 4);
charsets[164] = new Collation(164, 'UTF32_SLOVENIAN_CI', 'utf32', 4);
charsets[165] = new Collation(165, 'UTF32_POLISH_CI', 'utf32', 4);
charsets[166] = new Collation(166, 'UTF32_ESTONIAN_CI', 'utf32', 4);
charsets[167] = new Collation(167, 'UTF32_SPANISH_CI', 'utf32', 4);
charsets[168] = new Collation(168, 'UTF32_SWEDISH_CI', 'utf32', 4);
charsets[169] = new Collation(169, 'UTF32_TURKISH_CI', 'utf32', 4);
charsets[170] = new Collation(170, 'UTF32_CZECH_CI', 'utf32', 4);
charsets[171] = new Collation(171, 'UTF32_DANISH_CI', 'utf32', 4);
charsets[172] = new Collation(172, 'UTF32_LITHUANIAN_CI', 'utf32', 4);
charsets[173] = new Collation(173, 'UTF32_SLOVAK_CI', 'utf32', 4);
charsets[174] = new Collation(174, 'UTF32_SPANISH2_CI', 'utf32', 4);
charsets[175] = new Collation(175, 'UTF32_ROMAN_CI', 'utf32', 4);
charsets[176] = new Collation(176, 'UTF32_PERSIAN_CI', 'utf32', 4);
charsets[177] = new Collation(177, 'UTF32_ESPERANTO_CI', 'utf32', 4);
charsets[178] = new Collation(178, 'UTF32_HUNGARIAN_CI', 'utf32', 4);
charsets[179] = new Collation(179, 'UTF32_SINHALA_CI', 'utf32', 4);
charsets[180] = new Collation(180, 'UTF32_GERMAN2_CI', 'utf32', 4);
charsets[181] = new Collation(181, 'UTF32_CROATIAN_MYSQL561_CI', 'utf32', 4);
charsets[182] = new Collation(182, 'UTF32_UNICODE_520_CI', 'utf32', 4);
charsets[183] = new Collation(183, 'UTF32_VIETNAMESE_CI', 'utf32', 4);
charsets[192] = new Collation(192, 'UTF8_UNICODE_CI', 'utf8', 3);
charsets[193] = new Collation(193, 'UTF8_ICELANDIC_CI', 'utf8', 3);
charsets[194] = new Collation(194, 'UTF8_LATVIAN_CI', 'utf8', 3);
charsets[195] = new Collation(195, 'UTF8_ROMANIAN_CI', 'utf8', 3);
charsets[196] = new Collation(196, 'UTF8_SLOVENIAN_CI', 'utf8', 3);
charsets[197] = new Collation(197, 'UTF8_POLISH_CI', 'utf8', 3);
charsets[198] = new Collation(198, 'UTF8_ESTONIAN_CI', 'utf8', 3);
charsets[199] = new Collation(199, 'UTF8_SPANISH_CI', 'utf8', 3);
charsets[200] = new Collation(200, 'UTF8_SWEDISH_CI', 'utf8', 3);
charsets[201] = new Collation(201, 'UTF8_TURKISH_CI', 'utf8', 3);
charsets[202] = new Collation(202, 'UTF8_CZECH_CI', 'utf8', 3);
charsets[203] = new Collation(203, 'UTF8_DANISH_CI', 'utf8', 3);
charsets[204] = new Collation(204, 'UTF8_LITHUANIAN_CI', 'utf8', 3);
charsets[205] = new Collation(205, 'UTF8_SLOVAK_CI', 'utf8', 3);
charsets[206] = new Collation(206, 'UTF8_SPANISH2_CI', 'utf8', 3);
charsets[207] = new Collation(207, 'UTF8_ROMAN_CI', 'utf8', 3);
charsets[208] = new Collation(208, 'UTF8_PERSIAN_CI', 'utf8', 3);
charsets[209] = new Collation(209, 'UTF8_ESPERANTO_CI', 'utf8', 3);
charsets[210] = new Collation(210, 'UTF8_HUNGARIAN_CI', 'utf8', 3);
charsets[211] = new Collation(211, 'UTF8_SINHALA_CI', 'utf8', 3);
charsets[212] = new Collation(212, 'UTF8_GERMAN2_CI', 'utf8', 3);
charsets[213] = new Collation(213, 'UTF8_CROATIAN_MYSQL561_CI', 'utf8', 3);
charsets[214] = new Collation(214, 'UTF8_UNICODE_520_CI', 'utf8', 3);
charsets[215] = new Collation(215, 'UTF8_VIETNAMESE_CI', 'utf8', 3);
charsets[223] = new Collation(223, 'UTF8_GENERAL_MYSQL500_CI', 'utf8', 3);
charsets[224] = new Collation(224, 'UTF8MB4_UNICODE_CI', 'utf8', 4);
charsets[225] = new Collation(225, 'UTF8MB4_ICELANDIC_CI', 'utf8', 4);
charsets[226] = new Collation(226, 'UTF8MB4_LATVIAN_CI', 'utf8', 4);
charsets[227] = new Collation(227, 'UTF8MB4_ROMANIAN_CI', 'utf8', 4);
charsets[228] = new Collation(228, 'UTF8MB4_SLOVENIAN_CI', 'utf8', 4);
charsets[229] = new Collation(229, 'UTF8MB4_POLISH_CI', 'utf8', 4);
charsets[230] = new Collation(230, 'UTF8MB4_ESTONIAN_CI', 'utf8', 4);
charsets[231] = new Collation(231, 'UTF8MB4_SPANISH_CI', 'utf8', 4);
charsets[232] = new Collation(232, 'UTF8MB4_SWEDISH_CI', 'utf8', 4);
charsets[233] = new Collation(233, 'UTF8MB4_TURKISH_CI', 'utf8', 4);
charsets[234] = new Collation(234, 'UTF8MB4_CZECH_CI', 'utf8', 4);
charsets[235] = new Collation(235, 'UTF8MB4_DANISH_CI', 'utf8', 4);
charsets[236] = new Collation(236, 'UTF8MB4_LITHUANIAN_CI', 'utf8', 4);
charsets[237] = new Collation(237, 'UTF8MB4_SLOVAK_CI', 'utf8', 4);
charsets[238] = new Collation(238, 'UTF8MB4_SPANISH2_CI', 'utf8', 4);
charsets[239] = new Collation(239, 'UTF8MB4_ROMAN_CI', 'utf8', 4);
charsets[240] = new Collation(240, 'UTF8MB4_PERSIAN_CI', 'utf8', 4);
charsets[241] = new Collation(241, 'UTF8MB4_ESPERANTO_CI', 'utf8', 4);
charsets[242] = new Collation(242, 'UTF8MB4_HUNGARIAN_CI', 'utf8', 4);
charsets[243] = new Collation(243, 'UTF8MB4_SINHALA_CI', 'utf8', 4);
charsets[244] = new Collation(244, 'UTF8MB4_GERMAN2_CI', 'utf8', 4);
charsets[245] = new Collation(245, 'UTF8MB4_CROATIAN_MYSQL561_CI', 'utf8', 4);
charsets[246] = new Collation(246, 'UTF8MB4_UNICODE_520_CI', 'utf8', 4);
charsets[247] = new Collation(247, 'UTF8MB4_VIETNAMESE_CI', 'utf8', 4);
charsets[248] = new Collation(248, 'GB18030_CHINESE_CI', 'gb18030', 4);
charsets[249] = new Collation(249, 'GB18030_BIN', 'gb18030', 4);
charsets[250] = new Collation(250, 'GB18030_UNICODE_520_CI', 'gb18030', 4);
charsets[255] = new Collation(255, 'UTF8MB4_0900_AI_CI', 'utf8', 4);
charsets[256] = new Collation(256, 'UTF8MB4_DE_PB_0900_AI_CI', 'utf8', 4);
charsets[257] = new Collation(257, 'UTF8MB4_IS_0900_AI_CI', 'utf8', 4);
charsets[258] = new Collation(258, 'UTF8MB4_LV_0900_AI_CI', 'utf8', 4);
charsets[259] = new Collation(259, 'UTF8MB4_RO_0900_AI_CI', 'utf8', 4);
charsets[260] = new Collation(260, 'UTF8MB4_SL_0900_AI_CI', 'utf8', 4);
charsets[261] = new Collation(261, 'UTF8MB4_PL_0900_AI_CI', 'utf8', 4);
charsets[262] = new Collation(262, 'UTF8MB4_ET_0900_AI_CI', 'utf8', 4);
charsets[263] = new Collation(263, 'UTF8MB4_ES_0900_AI_CI', 'utf8', 4);
charsets[264] = new Collation(264, 'UTF8MB4_SV_0900_AI_CI', 'utf8', 4);
charsets[265] = new Collation(265, 'UTF8MB4_TR_0900_AI_CI', 'utf8', 4);
charsets[266] = new Collation(266, 'UTF8MB4_CS_0900_AI_CI', 'utf8', 4);
charsets[267] = new Collation(267, 'UTF8MB4_DA_0900_AI_CI', 'utf8', 4);
charsets[268] = new Collation(268, 'UTF8MB4_LT_0900_AI_CI', 'utf8', 4);
charsets[269] = new Collation(269, 'UTF8MB4_SK_0900_AI_CI', 'utf8', 4);
charsets[270] = new Collation(270, 'UTF8MB4_ES_TRAD_0900_AI_CI', 'utf8', 4);
charsets[271] = new Collation(271, 'UTF8MB4_LA_0900_AI_CI', 'utf8', 4);
charsets[273] = new Collation(273, 'UTF8MB4_EO_0900_AI_CI', 'utf8', 4);
charsets[274] = new Collation(274, 'UTF8MB4_HU_0900_AI_CI', 'utf8', 4);
charsets[275] = new Collation(275, 'UTF8MB4_HR_0900_AI_CI', 'utf8', 4);
charsets[277] = new Collation(277, 'UTF8MB4_VI_0900_AI_CI', 'utf8', 4);
charsets[278] = new Collation(278, 'UTF8MB4_0900_AS_CS', 'utf8', 4);
charsets[279] = new Collation(279, 'UTF8MB4_DE_PB_0900_AS_CS', 'utf8', 4);
charsets[280] = new Collation(280, 'UTF8MB4_IS_0900_AS_CS', 'utf8', 4);
charsets[281] = new Collation(281, 'UTF8MB4_LV_0900_AS_CS', 'utf8', 4);
charsets[282] = new Collation(282, 'UTF8MB4_RO_0900_AS_CS', 'utf8', 4);
charsets[283] = new Collation(283, 'UTF8MB4_SL_0900_AS_CS', 'utf8', 4);
charsets[284] = new Collation(284, 'UTF8MB4_PL_0900_AS_CS', 'utf8', 4);
charsets[285] = new Collation(285, 'UTF8MB4_ET_0900_AS_CS', 'utf8', 4);
charsets[286] = new Collation(286, 'UTF8MB4_ES_0900_AS_CS', 'utf8', 4);
charsets[287] = new Collation(287, 'UTF8MB4_SV_0900_AS_CS', 'utf8', 4);
charsets[288] = new Collation(288, 'UTF8MB4_TR_0900_AS_CS', 'utf8', 4);
charsets[289] = new Collation(289, 'UTF8MB4_CS_0900_AS_CS', 'utf8', 4);
charsets[290] = new Collation(290, 'UTF8MB4_DA_0900_AS_CS', 'utf8', 4);
charsets[291] = new Collation(291, 'UTF8MB4_LT_0900_AS_CS', 'utf8', 4);
charsets[292] = new Collation(292, 'UTF8MB4_SK_0900_AS_CS', 'utf8', 4);
charsets[293] = new Collation(293, 'UTF8MB4_ES_TRAD_0900_AS_CS', 'utf8', 4);
charsets[294] = new Collation(294, 'UTF8MB4_LA_0900_AS_CS', 'utf8', 4);
charsets[296] = new Collation(296, 'UTF8MB4_EO_0900_AS_CS', 'utf8', 4);
charsets[297] = new Collation(297, 'UTF8MB4_HU_0900_AS_CS', 'utf8', 4);
charsets[298] = new Collation(298, 'UTF8MB4_HR_0900_AS_CS', 'utf8', 4);
charsets[300] = new Collation(300, 'UTF8MB4_VI_0900_AS_CS', 'utf8', 4);
charsets[303] = new Collation(303, 'UTF8MB4_JA_0900_AS_CS', 'utf8', 4);
charsets[304] = new Collation(304, 'UTF8MB4_JA_0900_AS_CS_KS', 'utf8', 4);
charsets[305] = new Collation(305, 'UTF8MB4_0900_AS_CI', 'utf8', 4);
charsets[306] = new Collation(306, 'UTF8MB4_RU_0900_AI_CI', 'utf8', 4);
charsets[307] = new Collation(307, 'UTF8MB4_RU_0900_AS_CS', 'utf8', 4);
charsets[308] = new Collation(308, 'UTF8MB4_ZH_0900_AS_CS', 'utf8', 4);
charsets[309] = new Collation(309, 'UTF8MB4_0900_BIN', 'utf8', 4);
charsets[576] = new Collation(576, 'UTF8_CROATIAN_CI', 'utf8', 3);
charsets[577] = new Collation(577, 'UTF8_MYANMAR_CI', 'utf8', 3);
charsets[578] = new Collation(578, 'UTF8_THAI_520_W2', 'utf8', 3);
charsets[608] = new Collation(608, 'UTF8MB4_CROATIAN_CI', 'utf8', 4);
charsets[609] = new Collation(609, 'UTF8MB4_MYANMAR_CI', 'utf8', 4);
charsets[610] = new Collation(610, 'UTF8MB4_THAI_520_W2', 'utf8', 4);
charsets[640] = new Collation(640, 'UCS2_CROATIAN_CI', 'ucs2', 2);
charsets[641] = new Collation(641, 'UCS2_MYANMAR_CI', 'ucs2', 2);
charsets[642] = new Collation(642, 'UCS2_THAI_520_W2', 'ucs2', 2);
charsets[672] = new Collation(672, 'UTF16_CROATIAN_CI', 'utf16', 4);
charsets[673] = new Collation(673, 'UTF16_MYANMAR_CI', 'utf16', 4);
charsets[674] = new Collation(674, 'UTF16_THAI_520_W2', 'utf16', 4);
charsets[736] = new Collation(736, 'UTF32_CROATIAN_CI', 'utf32', 4);
charsets[737] = new Collation(737, 'UTF32_MYANMAR_CI', 'utf32', 4);
charsets[738] = new Collation(738, 'UTF32_THAI_520_W2', 'utf32', 4);
charsets[1025] = new Collation(1025, 'BIG5_CHINESE_NOPAD_CI', 'big5', 2);
charsets[1027] = new Collation(1027, 'DEC8_SWEDISH_NOPAD_CI', 'dec8', 1);
charsets[1028] = new Collation(1028, 'CP850_GENERAL_NOPAD_CI', 'cp850', 1);
charsets[1030] = new Collation(1030, 'HP8_ENGLISH_NOPAD_CI', 'hp8', 1);
charsets[1031] = new Collation(1031, 'KOI8R_GENERAL_NOPAD_CI', 'koi8r', 1);
charsets[1032] = new Collation(1032, 'LATIN1_SWEDISH_NOPAD_CI', 'latin1', 1);
charsets[1033] = new Collation(1033, 'LATIN2_GENERAL_NOPAD_CI', 'latin2', 1);
charsets[1034] = new Collation(1034, 'SWE7_SWEDISH_NOPAD_CI', 'swe7', 1);
charsets[1035] = new Collation(1035, 'ASCII_GENERAL_NOPAD_CI', 'ascii', 1);
charsets[1036] = new Collation(1036, 'UJIS_JAPANESE_NOPAD_CI', 'ujis', 3);
charsets[1037] = new Collation(1037, 'SJIS_JAPANESE_NOPAD_CI', 'sjis', 2);
charsets[1040] = new Collation(1040, 'HEBREW_GENERAL_NOPAD_CI', 'hebrew', 1);
charsets[1042] = new Collation(1042, 'TIS620_THAI_NOPAD_CI', 'tis620', 1);
charsets[1043] = new Collation(1043, 'EUCKR_KOREAN_NOPAD_CI', 'euckr', 2);
charsets[1046] = new Collation(1046, 'KOI8U_GENERAL_NOPAD_CI', 'koi8u', 1);
charsets[1048] = new Collation(1048, 'GB2312_CHINESE_NOPAD_CI', 'gb2312', 2);
charsets[1049] = new Collation(1049, 'GREEK_GENERAL_NOPAD_CI', 'greek', 1);
charsets[1050] = new Collation(1050, 'CP1250_GENERAL_NOPAD_CI', 'cp1250', 1);
charsets[1052] = new Collation(1052, 'GBK_CHINESE_NOPAD_CI', 'gbk', 2);
charsets[1054] = new Collation(1054, 'LATIN5_TURKISH_NOPAD_CI', 'latin5', 1);
charsets[1056] = new Collation(1056, 'ARMSCII8_GENERAL_NOPAD_CI', 'armscii8', 1);
charsets[1057] = new Collation(1057, 'UTF8_GENERAL_NOPAD_CI', 'utf8', 3);
charsets[1059] = new Collation(1059, 'UCS2_GENERAL_NOPAD_CI', 'ucs2', 2);
charsets[1060] = new Collation(1060, 'CP866_GENERAL_NOPAD_CI', 'cp866', 1);
charsets[1061] = new Collation(1061, 'KEYBCS2_GENERAL_NOPAD_CI', 'keybcs2', 1);
charsets[1062] = new Collation(1062, 'MACCE_GENERAL_NOPAD_CI', 'macce', 1);
charsets[1063] = new Collation(1063, 'MACROMAN_GENERAL_NOPAD_CI', 'macroman', 1);
charsets[1064] = new Collation(1064, 'CP852_GENERAL_NOPAD_CI', 'cp852', 1);
charsets[1065] = new Collation(1065, 'LATIN7_GENERAL_NOPAD_CI', 'latin7', 1);
charsets[1067] = new Collation(1067, 'MACCE_NOPAD_BIN', 'macce', 1);
charsets[1069] = new Collation(1069, 'UTF8MB4_GENERAL_NOPAD_CI', 'utf8', 4);
charsets[1070] = new Collation(1070, 'UTF8MB4_NOPAD_BIN', 'utf8', 4);
charsets[1071] = new Collation(1071, 'LATIN1_NOPAD_BIN', 'latin1', 1);
charsets[1074] = new Collation(1074, 'CP1251_NOPAD_BIN', 'cp1251', 1);
charsets[1075] = new Collation(1075, 'CP1251_GENERAL_NOPAD_CI', 'cp1251', 1);
charsets[1077] = new Collation(1077, 'MACROMAN_NOPAD_BIN', 'macroman', 1);
charsets[1078] = new Collation(1078, 'UTF16_GENERAL_NOPAD_CI', 'utf16', 4);
charsets[1079] = new Collation(1079, 'UTF16_NOPAD_BIN', 'utf16', 4);
charsets[1080] = new Collation(1080, 'UTF16LE_GENERAL_NOPAD_CI', 'utf16le', 4);
charsets[1081] = new Collation(1081, 'CP1256_GENERAL_NOPAD_CI', 'cp1256', 1);
charsets[1082] = new Collation(1082, 'CP1257_NOPAD_BIN', 'cp1257', 1);
charsets[1083] = new Collation(1083, 'CP1257_GENERAL_NOPAD_CI', 'cp1257', 1);
charsets[1084] = new Collation(1084, 'UTF32_GENERAL_NOPAD_CI', 'utf32', 4);
charsets[1085] = new Collation(1085, 'UTF32_NOPAD_BIN', 'utf32', 4);
charsets[1086] = new Collation(1086, 'UTF16LE_NOPAD_BIN', 'utf16le', 4);
charsets[1088] = new Collation(1088, 'ARMSCII8_NOPAD_BIN', 'armscii8', 1);
charsets[1089] = new Collation(1089, 'ASCII_NOPAD_BIN', 'ascii', 1);
charsets[1090] = new Collation(1090, 'CP1250_NOPAD_BIN', 'cp1250', 1);
charsets[1091] = new Collation(1091, 'CP1256_NOPAD_BIN', 'cp1256', 1);
charsets[1092] = new Collation(1092, 'CP866_NOPAD_BIN', 'cp866', 1);
charsets[1093] = new Collation(1093, 'DEC8_NOPAD_BIN', 'dec8', 1);
charsets[1094] = new Collation(1094, 'GREEK_NOPAD_BIN', 'greek', 1);
charsets[1095] = new Collation(1095, 'HEBREW_NOPAD_BIN', 'hebrew', 1);
charsets[1096] = new Collation(1096, 'HP8_NOPAD_BIN', 'hp8', 1);
charsets[1097] = new Collation(1097, 'KEYBCS2_NOPAD_BIN', 'keybcs2', 1);
charsets[1098] = new Collation(1098, 'KOI8R_NOPAD_BIN', 'koi8r', 1);
charsets[1099] = new Collation(1099, 'KOI8U_NOPAD_BIN', 'koi8u', 1);
charsets[1101] = new Collation(1101, 'LATIN2_NOPAD_BIN', 'latin2', 1);
charsets[1102] = new Collation(1102, 'LATIN5_NOPAD_BIN', 'latin5', 1);
charsets[1103] = new Collation(1103, 'LATIN7_NOPAD_BIN', 'latin7', 1);
charsets[1104] = new Collation(1104, 'CP850_NOPAD_BIN', 'cp850', 1);
charsets[1105] = new Collation(1105, 'CP852_NOPAD_BIN', 'cp852', 1);
charsets[1106] = new Collation(1106, 'SWE7_NOPAD_BIN', 'swe7', 1);
charsets[1107] = new Collation(1107, 'UTF8_NOPAD_BIN', 'utf8', 3);
charsets[1108] = new Collation(1108, 'BIG5_NOPAD_BIN', 'big5', 2);
charsets[1109] = new Collation(1109, 'EUCKR_NOPAD_BIN', 'euckr', 2);
charsets[1110] = new Collation(1110, 'GB2312_NOPAD_BIN', 'gb2312', 2);
charsets[1111] = new Collation(1111, 'GBK_NOPAD_BIN', 'gbk', 2);
charsets[1112] = new Collation(1112, 'SJIS_NOPAD_BIN', 'sjis', 2);
charsets[1113] = new Collation(1113, 'TIS620_NOPAD_BIN', 'tis620', 1);
charsets[1114] = new Collation(1114, 'UCS2_NOPAD_BIN', 'ucs2', 2);
charsets[1115] = new Collation(1115, 'UJIS_NOPAD_BIN', 'ujis', 3);
charsets[1116] = new Collation(1116, 'GEOSTD8_GENERAL_NOPAD_CI', 'geostd8', 1);
charsets[1117] = new Collation(1117, 'GEOSTD8_NOPAD_BIN', 'geostd8', 1);
charsets[1119] = new Collation(1119, 'CP932_JAPANESE_NOPAD_CI', 'cp932', 2);
charsets[1120] = new Collation(1120, 'CP932_NOPAD_BIN', 'cp932', 2);
charsets[1121] = new Collation(1121, 'EUCJPMS_JAPANESE_NOPAD_CI', 'eucjpms', 3);
charsets[1122] = new Collation(1122, 'EUCJPMS_NOPAD_BIN', 'eucjpms', 3);
charsets[1125] = new Collation(1125, 'UTF16_UNICODE_NOPAD_CI', 'utf16', 4);
charsets[1147] = new Collation(1147, 'UTF16_UNICODE_520_NOPAD_CI', 'utf16', 4);
charsets[1152] = new Collation(1152, 'UCS2_UNICODE_NOPAD_CI', 'ucs2', 2);
charsets[1174] = new Collation(1174, 'UCS2_UNICODE_520_NOPAD_CI', 'ucs2', 2);
charsets[1184] = new Collation(1184, 'UTF32_UNICODE_NOPAD_CI', 'utf32', 4);
charsets[1206] = new Collation(1206, 'UTF32_UNICODE_520_NOPAD_CI', 'utf32', 4);
charsets[1216] = new Collation(1216, 'UTF8_UNICODE_NOPAD_CI', 'utf8', 3);
charsets[1238] = new Collation(1238, 'UTF8_UNICODE_520_NOPAD_CI', 'utf8', 3);
charsets[1248] = new Collation(1248, 'UTF8MB4_UNICODE_NOPAD_CI', 'utf8', 4);
charsets[1270] = new Collation(1270, 'UTF8MB4_UNICODE_520_NOPAD_CI', 'utf8', 4);

for (let i = 0; i < charsets.length; i++) {
  let collation = charsets[i];
  if (collation) {
    Collation.prototype[collation.name] = collation;
  }
}

/**
 * Map charset to default collation
 *
 * created with query:
 *  SELECT CONCAT(' defaultCharsets[\'',  co.character_set_name , '\'] = charsets[', CAST(co.ID as char), '];')
 *  FROM information_schema.COLLATIONS co WHERE co.IS_DEFAULT = 'Yes' ORDER BY co.ID ASC;
 */
defaultCharsets['big5'] = charsets[1];
defaultCharsets['dec8'] = charsets[3];
defaultCharsets['cp850'] = charsets[4];
defaultCharsets['hp8'] = charsets[6];
defaultCharsets['koi8r'] = charsets[7];
defaultCharsets['latin1'] = charsets[8];
defaultCharsets['latin2'] = charsets[9];
defaultCharsets['swe7'] = charsets[10];
defaultCharsets['ascii'] = charsets[11];
defaultCharsets['ujis'] = charsets[12];
defaultCharsets['sjis'] = charsets[13];
defaultCharsets['hebrew'] = charsets[16];
defaultCharsets['tis620'] = charsets[18];
defaultCharsets['euckr'] = charsets[19];
defaultCharsets['koi8u'] = charsets[22];
defaultCharsets['gb2312'] = charsets[24];
defaultCharsets['greek'] = charsets[25];
defaultCharsets['cp1250'] = charsets[26];
defaultCharsets['gbk'] = charsets[28];
defaultCharsets['latin5'] = charsets[30];
defaultCharsets['armscii8'] = charsets[32];
defaultCharsets['utf8'] = charsets[33];
defaultCharsets['ucs2'] = charsets[35];
defaultCharsets['cp866'] = charsets[36];
defaultCharsets['keybcs2'] = charsets[37];
defaultCharsets['macce'] = charsets[38];
defaultCharsets['macroman'] = charsets[39];
defaultCharsets['cp852'] = charsets[40];
defaultCharsets['latin7'] = charsets[41];
defaultCharsets['utf8mb4'] = charsets[45];
defaultCharsets['cp1251'] = charsets[51];
defaultCharsets['utf16'] = charsets[54];
defaultCharsets['utf16le'] = charsets[56];
defaultCharsets['cp1256'] = charsets[57];
defaultCharsets['cp1257'] = charsets[59];
defaultCharsets['utf32'] = charsets[60];
defaultCharsets['binary'] = charsets[63];
defaultCharsets['geostd8'] = charsets[92];
defaultCharsets['cp932'] = charsets[95];
defaultCharsets['eucjpms'] = charsets[97];
defaultCharsets['gb18030'] = charsets[248];

module.exports = Collation;
