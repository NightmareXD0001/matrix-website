!(function (e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : (("undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this
      ).p5 = e());
})(function () {
  var define, module, exports;
  return (function n(o, i, s) {
    function a(r, e) {
      if (!i[r]) {
        if (!o[r]) {
          var t = "function" == typeof require && require;
          if (!e && t) return t(r, !0);
          if (h) return h(r, !0);
          t = new Error("Cannot find module '" + r + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        t = i[r] = { exports: {} };
        o[r][0].call(
          t.exports,
          function (e) {
            var t = o[r][1][e];
            return a(t || e);
          },
          t,
          t.exports,
          n,
          o,
          i,
          s
        );
      }
      return i[r].exports;
    }
    for (
      var h = "function" == typeof require && require, e = 0;
      e < s.length;
      e++
    )
      a(s[e]);
    return a;
  })(
    {
      1: [function (e, t, r) {}, {}],
      2: [
        function (e, t, r) {
          "use strict";
          (r.argument = function (e, t) {
            if (!e) throw new Error(t);
          }),
            (r.assert = r.argument);
        },
        {},
      ],
      3: [
        function (e, t, r) {
          "use strict";
          r.line = function (e, t, r, n, o) {
            e.beginPath(), e.moveTo(t, r), e.lineTo(n, o), e.stroke();
          };
        },
        {},
      ],
      4: [
        function (e, t, r) {
          "use strict";
          function n(e) {
            this.font = e;
          }
          function o(e) {
            this.cmap = e;
          }
          function i(e, t) {
            (this.encoding = e), (this.charset = t);
          }
          function s(e) {
            var t;
            switch (e.version) {
              case 1:
                this.names = r.standardNames.slice();
                break;
              case 2:
                for (
                  this.names = new Array(e.numberOfGlyphs), t = 0;
                  t < e.numberOfGlyphs;
                  t++
                )
                  e.glyphNameIndex[t] < r.standardNames.length
                    ? (this.names[t] = r.standardNames[e.glyphNameIndex[t]])
                    : (this.names[t] =
                        e.names[e.glyphNameIndex[t] - r.standardNames.length]);
                break;
              case 2.5:
                for (
                  this.names = new Array(e.numberOfGlyphs), t = 0;
                  t < e.numberOfGlyphs;
                  t++
                )
                  this.names[t] = r.standardNames[t + e.glyphNameIndex[t]];
                break;
              case 3:
                this.names = [];
            }
          }
          (n.prototype.charToGlyphIndex = function (e) {
            var t = e.charCodeAt(0),
              r = this.font.glyphs;
            if (!r) return null;
            for (var n = 0; n < r.length; n += 1)
              for (var o = r.get(n), i = 0; i < o.unicodes.length; i += 1)
                if (o.unicodes[i] === t) return n;
          }),
            (o.prototype.charToGlyphIndex = function (e) {
              return this.cmap.glyphIndexMap[e.charCodeAt(0)] || 0;
            }),
            (i.prototype.charToGlyphIndex = function (e) {
              (e = e.charCodeAt(0)), (e = this.encoding[e]);
              return this.charset.indexOf(e);
            }),
            (s.prototype.nameToGlyphIndex = function (e) {
              return this.names.indexOf(e);
            }),
            (s.prototype.glyphIndexToName = function (e) {
              return this.names[e];
            }),
            (r.cffStandardStrings = [
              ".notdef",
              "space",
              "exclam",
              "quotedbl",
              "numbersign",
              "dollar",
              "percent",
              "ampersand",
              "quoteright",
              "parenleft",
              "parenright",
              "asterisk",
              "plus",
              "comma",
              "hyphen",
              "period",
              "slash",
              "zero",
              "one",
              "two",
              "three",
              "four",
              "five",
              "six",
              "seven",
              "eight",
              "nine",
              "colon",
              "semicolon",
              "less",
              "equal",
              "greater",
              "question",
              "at",
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
              "K",
              "L",
              "M",
              "N",
              "O",
              "P",
              "Q",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z",
              "bracketleft",
              "backslash",
              "bracketright",
              "asciicircum",
              "underscore",
              "quoteleft",
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
              "braceleft",
              "bar",
              "braceright",
              "asciitilde",
              "exclamdown",
              "cent",
              "sterling",
              "fraction",
              "yen",
              "florin",
              "section",
              "currency",
              "quotesingle",
              "quotedblleft",
              "guillemotleft",
              "guilsinglleft",
              "guilsinglright",
              "fi",
              "fl",
              "endash",
              "dagger",
              "daggerdbl",
              "periodcentered",
              "paragraph",
              "bullet",
              "quotesinglbase",
              "quotedblbase",
              "quotedblright",
              "guillemotright",
              "ellipsis",
              "perthousand",
              "questiondown",
              "grave",
              "acute",
              "circumflex",
              "tilde",
              "macron",
              "breve",
              "dotaccent",
              "dieresis",
              "ring",
              "cedilla",
              "hungarumlaut",
              "ogonek",
              "caron",
              "emdash",
              "AE",
              "ordfeminine",
              "Lslash",
              "Oslash",
              "OE",
              "ordmasculine",
              "ae",
              "dotlessi",
              "lslash",
              "oslash",
              "oe",
              "germandbls",
              "onesuperior",
              "logicalnot",
              "mu",
              "trademark",
              "Eth",
              "onehalf",
              "plusminus",
              "Thorn",
              "onequarter",
              "divide",
              "brokenbar",
              "degree",
              "thorn",
              "threequarters",
              "twosuperior",
              "registered",
              "minus",
              "eth",
              "multiply",
              "threesuperior",
              "copyright",
              "Aacute",
              "Acircumflex",
              "Adieresis",
              "Agrave",
              "Aring",
              "Atilde",
              "Ccedilla",
              "Eacute",
              "Ecircumflex",
              "Edieresis",
              "Egrave",
              "Iacute",
              "Icircumflex",
              "Idieresis",
              "Igrave",
              "Ntilde",
              "Oacute",
              "Ocircumflex",
              "Odieresis",
              "Ograve",
              "Otilde",
              "Scaron",
              "Uacute",
              "Ucircumflex",
              "Udieresis",
              "Ugrave",
              "Yacute",
              "Ydieresis",
              "Zcaron",
              "aacute",
              "acircumflex",
              "adieresis",
              "agrave",
              "aring",
              "atilde",
              "ccedilla",
              "eacute",
              "ecircumflex",
              "edieresis",
              "egrave",
              "iacute",
              "icircumflex",
              "idieresis",
              "igrave",
              "ntilde",
              "oacute",
              "ocircumflex",
              "odieresis",
              "ograve",
              "otilde",
              "scaron",
              "uacute",
              "ucircumflex",
              "udieresis",
              "ugrave",
              "yacute",
              "ydieresis",
              "zcaron",
              "exclamsmall",
              "Hungarumlautsmall",
              "dollaroldstyle",
              "dollarsuperior",
              "ampersandsmall",
              "Acutesmall",
              "parenleftsuperior",
              "parenrightsuperior",
              "266 ff",
              "onedotenleader",
              "zerooldstyle",
              "oneoldstyle",
              "twooldstyle",
              "threeoldstyle",
              "fouroldstyle",
              "fiveoldstyle",
              "sixoldstyle",
              "sevenoldstyle",
              "eightoldstyle",
              "nineoldstyle",
              "commasuperior",
              "threequartersemdash",
              "periodsuperior",
              "questionsmall",
              "asuperior",
              "bsuperior",
              "centsuperior",
              "dsuperior",
              "esuperior",
              "isuperior",
              "lsuperior",
              "msuperior",
              "nsuperior",
              "osuperior",
              "rsuperior",
              "ssuperior",
              "tsuperior",
              "ff",
              "ffi",
              "ffl",
              "parenleftinferior",
              "parenrightinferior",
              "Circumflexsmall",
              "hyphensuperior",
              "Gravesmall",
              "Asmall",
              "Bsmall",
              "Csmall",
              "Dsmall",
              "Esmall",
              "Fsmall",
              "Gsmall",
              "Hsmall",
              "Ismall",
              "Jsmall",
              "Ksmall",
              "Lsmall",
              "Msmall",
              "Nsmall",
              "Osmall",
              "Psmall",
              "Qsmall",
              "Rsmall",
              "Ssmall",
              "Tsmall",
              "Usmall",
              "Vsmall",
              "Wsmall",
              "Xsmall",
              "Ysmall",
              "Zsmall",
              "colonmonetary",
              "onefitted",
              "rupiah",
              "Tildesmall",
              "exclamdownsmall",
              "centoldstyle",
              "Lslashsmall",
              "Scaronsmall",
              "Zcaronsmall",
              "Dieresissmall",
              "Brevesmall",
              "Caronsmall",
              "Dotaccentsmall",
              "Macronsmall",
              "figuredash",
              "hypheninferior",
              "Ogoneksmall",
              "Ringsmall",
              "Cedillasmall",
              "questiondownsmall",
              "oneeighth",
              "threeeighths",
              "fiveeighths",
              "seveneighths",
              "onethird",
              "twothirds",
              "zerosuperior",
              "foursuperior",
              "fivesuperior",
              "sixsuperior",
              "sevensuperior",
              "eightsuperior",
              "ninesuperior",
              "zeroinferior",
              "oneinferior",
              "twoinferior",
              "threeinferior",
              "fourinferior",
              "fiveinferior",
              "sixinferior",
              "seveninferior",
              "eightinferior",
              "nineinferior",
              "centinferior",
              "dollarinferior",
              "periodinferior",
              "commainferior",
              "Agravesmall",
              "Aacutesmall",
              "Acircumflexsmall",
              "Atildesmall",
              "Adieresissmall",
              "Aringsmall",
              "AEsmall",
              "Ccedillasmall",
              "Egravesmall",
              "Eacutesmall",
              "Ecircumflexsmall",
              "Edieresissmall",
              "Igravesmall",
              "Iacutesmall",
              "Icircumflexsmall",
              "Idieresissmall",
              "Ethsmall",
              "Ntildesmall",
              "Ogravesmall",
              "Oacutesmall",
              "Ocircumflexsmall",
              "Otildesmall",
              "Odieresissmall",
              "OEsmall",
              "Oslashsmall",
              "Ugravesmall",
              "Uacutesmall",
              "Ucircumflexsmall",
              "Udieresissmall",
              "Yacutesmall",
              "Thornsmall",
              "Ydieresissmall",
              "001.000",
              "001.001",
              "001.002",
              "001.003",
              "Black",
              "Bold",
              "Book",
              "Light",
              "Medium",
              "Regular",
              "Roman",
              "Semibold",
            ]),
            (r.cffStandardEncoding = [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "space",
              "exclam",
              "quotedbl",
              "numbersign",
              "dollar",
              "percent",
              "ampersand",
              "quoteright",
              "parenleft",
              "parenright",
              "asterisk",
              "plus",
              "comma",
              "hyphen",
              "period",
              "slash",
              "zero",
              "one",
              "two",
              "three",
              "four",
              "five",
              "six",
              "seven",
              "eight",
              "nine",
              "colon",
              "semicolon",
              "less",
              "equal",
              "greater",
              "question",
              "at",
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
              "K",
              "L",
              "M",
              "N",
              "O",
              "P",
              "Q",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z",
              "bracketleft",
              "backslash",
              "bracketright",
              "asciicircum",
              "underscore",
              "quoteleft",
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
              "braceleft",
              "bar",
              "braceright",
              "asciitilde",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "exclamdown",
              "cent",
              "sterling",
              "fraction",
              "yen",
              "florin",
              "section",
              "currency",
              "quotesingle",
              "quotedblleft",
              "guillemotleft",
              "guilsinglleft",
              "guilsinglright",
              "fi",
              "fl",
              "",
              "endash",
              "dagger",
              "daggerdbl",
              "periodcentered",
              "",
              "paragraph",
              "bullet",
              "quotesinglbase",
              "quotedblbase",
              "quotedblright",
              "guillemotright",
              "ellipsis",
              "perthousand",
              "",
              "questiondown",
              "",
              "grave",
              "acute",
              "circumflex",
              "tilde",
              "macron",
              "breve",
              "dotaccent",
              "dieresis",
              "",
              "ring",
              "cedilla",
              "",
              "hungarumlaut",
              "ogonek",
              "caron",
              "emdash",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "AE",
              "",
              "ordfeminine",
              "",
              "",
              "",
              "",
              "Lslash",
              "Oslash",
              "OE",
              "ordmasculine",
              "",
              "",
              "",
              "",
              "",
              "ae",
              "",
              "",
              "",
              "dotlessi",
              "",
              "",
              "lslash",
              "oslash",
              "oe",
              "germandbls",
            ]),
            (r.cffExpertEncoding = [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "space",
              "exclamsmall",
              "Hungarumlautsmall",
              "",
              "dollaroldstyle",
              "dollarsuperior",
              "ampersandsmall",
              "Acutesmall",
              "parenleftsuperior",
              "parenrightsuperior",
              "twodotenleader",
              "onedotenleader",
              "comma",
              "hyphen",
              "period",
              "fraction",
              "zerooldstyle",
              "oneoldstyle",
              "twooldstyle",
              "threeoldstyle",
              "fouroldstyle",
              "fiveoldstyle",
              "sixoldstyle",
              "sevenoldstyle",
              "eightoldstyle",
              "nineoldstyle",
              "colon",
              "semicolon",
              "commasuperior",
              "threequartersemdash",
              "periodsuperior",
              "questionsmall",
              "",
              "asuperior",
              "bsuperior",
              "centsuperior",
              "dsuperior",
              "esuperior",
              "",
              "",
              "isuperior",
              "",
              "",
              "lsuperior",
              "msuperior",
              "nsuperior",
              "osuperior",
              "",
              "",
              "rsuperior",
              "ssuperior",
              "tsuperior",
              "",
              "ff",
              "fi",
              "fl",
              "ffi",
              "ffl",
              "parenleftinferior",
              "",
              "parenrightinferior",
              "Circumflexsmall",
              "hyphensuperior",
              "Gravesmall",
              "Asmall",
              "Bsmall",
              "Csmall",
              "Dsmall",
              "Esmall",
              "Fsmall",
              "Gsmall",
              "Hsmall",
              "Ismall",
              "Jsmall",
              "Ksmall",
              "Lsmall",
              "Msmall",
              "Nsmall",
              "Osmall",
              "Psmall",
              "Qsmall",
              "Rsmall",
              "Ssmall",
              "Tsmall",
              "Usmall",
              "Vsmall",
              "Wsmall",
              "Xsmall",
              "Ysmall",
              "Zsmall",
              "colonmonetary",
              "onefitted",
              "rupiah",
              "Tildesmall",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "exclamdownsmall",
              "centoldstyle",
              "Lslashsmall",
              "",
              "",
              "Scaronsmall",
              "Zcaronsmall",
              "Dieresissmall",
              "Brevesmall",
              "Caronsmall",
              "",
              "Dotaccentsmall",
              "",
              "",
              "Macronsmall",
              "",
              "",
              "figuredash",
              "hypheninferior",
              "",
              "",
              "Ogoneksmall",
              "Ringsmall",
              "Cedillasmall",
              "",
              "",
              "",
              "onequarter",
              "onehalf",
              "threequarters",
              "questiondownsmall",
              "oneeighth",
              "threeeighths",
              "fiveeighths",
              "seveneighths",
              "onethird",
              "twothirds",
              "",
              "",
              "zerosuperior",
              "onesuperior",
              "twosuperior",
              "threesuperior",
              "foursuperior",
              "fivesuperior",
              "sixsuperior",
              "sevensuperior",
              "eightsuperior",
              "ninesuperior",
              "zeroinferior",
              "oneinferior",
              "twoinferior",
              "threeinferior",
              "fourinferior",
              "fiveinferior",
              "sixinferior",
              "seveninferior",
              "eightinferior",
              "nineinferior",
              "centinferior",
              "dollarinferior",
              "periodinferior",
              "commainferior",
              "Agravesmall",
              "Aacutesmall",
              "Acircumflexsmall",
              "Atildesmall",
              "Adieresissmall",
              "Aringsmall",
              "AEsmall",
              "Ccedillasmall",
              "Egravesmall",
              "Eacutesmall",
              "Ecircumflexsmall",
              "Edieresissmall",
              "Igravesmall",
              "Iacutesmall",
              "Icircumflexsmall",
              "Idieresissmall",
              "Ethsmall",
              "Ntildesmall",
              "Ogravesmall",
              "Oacutesmall",
              "Ocircumflexsmall",
              "Otildesmall",
              "Odieresissmall",
              "OEsmall",
              "Oslashsmall",
              "Ugravesmall",
              "Uacutesmall",
              "Ucircumflexsmall",
              "Udieresissmall",
              "Yacutesmall",
              "Thornsmall",
              "Ydieresissmall",
            ]),
            (r.standardNames = [
              ".notdef",
              ".null",
              "nonmarkingreturn",
              "space",
              "exclam",
              "quotedbl",
              "numbersign",
              "dollar",
              "percent",
              "ampersand",
              "quotesingle",
              "parenleft",
              "parenright",
              "asterisk",
              "plus",
              "comma",
              "hyphen",
              "period",
              "slash",
              "zero",
              "one",
              "two",
              "three",
              "four",
              "five",
              "six",
              "seven",
              "eight",
              "nine",
              "colon",
              "semicolon",
              "less",
              "equal",
              "greater",
              "question",
              "at",
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J",
              "K",
              "L",
              "M",
              "N",
              "O",
              "P",
              "Q",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z",
              "bracketleft",
              "backslash",
              "bracketright",
              "asciicircum",
              "underscore",
              "grave",
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
              "braceleft",
              "bar",
              "braceright",
              "asciitilde",
              "Adieresis",
              "Aring",
              "Ccedilla",
              "Eacute",
              "Ntilde",
              "Odieresis",
              "Udieresis",
              "aacute",
              "agrave",
              "acircumflex",
              "adieresis",
              "atilde",
              "aring",
              "ccedilla",
              "eacute",
              "egrave",
              "ecircumflex",
              "edieresis",
              "iacute",
              "igrave",
              "icircumflex",
              "idieresis",
              "ntilde",
              "oacute",
              "ograve",
              "ocircumflex",
              "odieresis",
              "otilde",
              "uacute",
              "ugrave",
              "ucircumflex",
              "udieresis",
              "dagger",
              "degree",
              "cent",
              "sterling",
              "section",
              "bullet",
              "paragraph",
              "germandbls",
              "registered",
              "copyright",
              "trademark",
              "acute",
              "dieresis",
              "notequal",
              "AE",
              "Oslash",
              "infinity",
              "plusminus",
              "lessequal",
              "greaterequal",
              "yen",
              "mu",
              "partialdiff",
              "summation",
              "product",
              "pi",
              "integral",
              "ordfeminine",
              "ordmasculine",
              "Omega",
              "ae",
              "oslash",
              "questiondown",
              "exclamdown",
              "logicalnot",
              "radical",
              "florin",
              "approxequal",
              "Delta",
              "guillemotleft",
              "guillemotright",
              "ellipsis",
              "nonbreakingspace",
              "Agrave",
              "Atilde",
              "Otilde",
              "OE",
              "oe",
              "endash",
              "emdash",
              "quotedblleft",
              "quotedblright",
              "quoteleft",
              "quoteright",
              "divide",
              "lozenge",
              "ydieresis",
              "Ydieresis",
              "fraction",
              "currency",
              "guilsinglleft",
              "guilsinglright",
              "fi",
              "fl",
              "daggerdbl",
              "periodcentered",
              "quotesinglbase",
              "quotedblbase",
              "perthousand",
              "Acircumflex",
              "Ecircumflex",
              "Aacute",
              "Edieresis",
              "Egrave",
              "Iacute",
              "Icircumflex",
              "Idieresis",
              "Igrave",
              "Oacute",
              "Ocircumflex",
              "apple",
              "Ograve",
              "Uacute",
              "Ucircumflex",
              "Ugrave",
              "dotlessi",
              "circumflex",
              "tilde",
              "macron",
              "breve",
              "dotaccent",
              "ring",
              "cedilla",
              "hungarumlaut",
              "ogonek",
              "caron",
              "Lslash",
              "lslash",
              "Scaron",
              "scaron",
              "Zcaron",
              "zcaron",
              "brokenbar",
              "Eth",
              "eth",
              "Yacute",
              "yacute",
              "Thorn",
              "thorn",
              "minus",
              "multiply",
              "onesuperior",
              "twosuperior",
              "threesuperior",
              "onehalf",
              "onequarter",
              "threequarters",
              "franc",
              "Gbreve",
              "gbreve",
              "Idotaccent",
              "Scedilla",
              "scedilla",
              "Cacute",
              "cacute",
              "Ccaron",
              "ccaron",
              "dcroat",
            ]),
            (r.DefaultEncoding = n),
            (r.CmapEncoding = o),
            (r.CffEncoding = i),
            (r.GlyphNames = s),
            (r.addGlyphNames = function (e) {
              for (
                var t = e.tables.cmap.glyphIndexMap, r = Object.keys(t), n = 0;
                n < r.length;
                n += 1
              ) {
                var o,
                  i = r[n],
                  s = t[i];
                (o = e.glyphs.get(s)).addUnicode(parseInt(i));
              }
              for (n = 0; n < e.glyphs.length; n += 1)
                (o = e.glyphs.get(n)),
                  e.cffEncoding
                    ? (o.name = e.cffEncoding.charset[n])
                    : (o.name = e.glyphNames.glyphIndexToName(n));
            });
        },
        {},
      ],
      5: [
        function (e, t, r) {
          "use strict";
          var s = e("./path"),
            n = e("./tables/sfnt"),
            o = e("./encoding"),
            i = e("./glyphset");
          function a(e) {
            (e = e || {}),
              (this.familyName = e.familyName || " "),
              (this.styleName = e.styleName || " "),
              (this.designer = e.designer || " "),
              (this.designerURL = e.designerURL || " "),
              (this.manufacturer = e.manufacturer || " "),
              (this.manufacturerURL = e.manufacturerURL || " "),
              (this.license = e.license || " "),
              (this.licenseURL = e.licenseURL || " "),
              (this.version = e.version || "Version 0.1"),
              (this.description = e.description || " "),
              (this.copyright = e.copyright || " "),
              (this.trademark = e.trademark || " "),
              (this.unitsPerEm = e.unitsPerEm || 1e3),
              (this.ascender = e.ascender),
              (this.descender = e.descender),
              (this.supported = !0),
              (this.glyphs = new i.GlyphSet(this, e.glyphs || [])),
              (this.encoding = new o.DefaultEncoding(this)),
              (this.tables = {});
          }
          (a.prototype.hasChar = function (e) {
            return null !== this.encoding.charToGlyphIndex(e);
          }),
            (a.prototype.charToGlyphIndex = function (e) {
              return this.encoding.charToGlyphIndex(e);
            }),
            (a.prototype.charToGlyph = function (e) {
              e = this.charToGlyphIndex(e);
              return this.glyphs.get(e) || this.glyphs.get(0);
            }),
            (a.prototype.stringToGlyphs = function (e) {
              for (var t = [], r = 0; r < e.length; r += 1) {
                var n = e[r];
                t.push(this.charToGlyph(n));
              }
              return t;
            }),
            (a.prototype.nameToGlyphIndex = function (e) {
              return this.glyphNames.nameToGlyphIndex(e);
            }),
            (a.prototype.nameToGlyph = function (e) {
              e = this.nametoGlyphIndex(e);
              return this.glyphs.get(e) || this.glyphs.get(0);
            }),
            (a.prototype.glyphIndexToName = function (e) {
              return this.glyphNames.glyphIndexToName
                ? this.glyphNames.glyphIndexToName(e)
                : "";
            }),
            (a.prototype.getKerningValue = function (e, t) {
              (e = e.index || e), (t = t.index || t);
              var r = this.getGposKerningValue;
              return r ? r(e, t) : this.kerningPairs[e + "," + t] || 0;
            }),
            (a.prototype.forEachGlyph = function (e, t, r, n, o, i) {
              if (this.supported) {
                (t = void 0 !== t ? t : 0),
                  (r = void 0 !== r ? r : 0),
                  (n = void 0 !== n ? n : 72);
                for (
                  var s = void 0 === (o = o || {}).kerning || o.kerning,
                    a = (1 / this.unitsPerEm) * n,
                    h = this.stringToGlyphs(e),
                    l = 0;
                  l < h.length;
                  l += 1
                ) {
                  var p = h[l];
                  i(p, t, r, n, o),
                    p.advanceWidth && (t += p.advanceWidth * a),
                    s &&
                      l < h.length - 1 &&
                      (t += this.getKerningValue(p, h[l + 1]) * a);
                }
              }
            }),
            (a.prototype.getPath = function (e, t, r, n, o) {
              var i = new s.Path();
              return (
                this.forEachGlyph(e, t, r, n, o, function (e, t, r, n) {
                  n = e.getPath(t, r, n);
                  i.extend(n);
                }),
                i
              );
            }),
            (a.prototype.draw = function (e, t, r, n, o, i) {
              this.getPath(t, r, n, o, i).draw(e);
            }),
            (a.prototype.drawPoints = function (o, e, t, r, n, i) {
              this.forEachGlyph(e, t, r, n, i, function (e, t, r, n) {
                e.drawPoints(o, t, r, n);
              });
            }),
            (a.prototype.drawMetrics = function (o, e, t, r, n, i) {
              this.forEachGlyph(e, t, r, n, i, function (e, t, r, n) {
                e.drawMetrics(o, t, r, n);
              });
            }),
            (a.prototype.validate = function () {
              var r = [],
                t = this;
              function n(e, t) {
                e || r.push(t);
              }
              function e(e) {
                n(t[e] && 0 < t[e].trim().length, "No " + e + " specified.");
              }
              e("familyName"),
                e("weightName"),
                e("manufacturer"),
                e("copyright"),
                e("version"),
                n(0 < this.unitsPerEm, "No unitsPerEm specified.");
            }),
            (a.prototype.toTables = function () {
              return n.fontToTable(this);
            }),
            (a.prototype.toBuffer = function () {
              for (
                var e = this.toTables().encode(),
                  t = new ArrayBuffer(e.length),
                  r = new Uint8Array(t),
                  n = 0;
                n < e.length;
                n++
              )
                r[n] = e[n];
              return t;
            }),
            (a.prototype.download = function () {
              var t =
                  this.familyName.replace(/\s/g, "") +
                  "-" +
                  this.styleName +
                  ".otf",
                n = this.toBuffer();
              (window.requestFileSystem =
                window.requestFileSystem || window.webkitRequestFileSystem),
                window.requestFileSystem(
                  window.TEMPORARY,
                  n.byteLength,
                  function (e) {
                    e.root.getFile(t, { create: !0 }, function (r) {
                      r.createWriter(function (e) {
                        var t = new DataView(n),
                          t = new Blob([t], { type: "font/opentype" });
                        e.write(t),
                          e.addEventListener(
                            "writeend",
                            function () {
                              location.href = r.toURL();
                            },
                            !1
                          );
                      });
                    });
                  },
                  function (e) {
                    throw e;
                  }
                );
            }),
            (r.Font = a);
        },
        { "./encoding": 4, "./glyphset": 7, "./path": 10, "./tables/sfnt": 25 },
      ],
      6: [
        function (e, t, r) {
          "use strict";
          var o = e("./check"),
            l = e("./draw"),
            h = e("./path");
          function n(e) {
            this.bindConstructorValues(e);
          }
          (n.prototype.bindConstructorValues = function (e) {
            var t;
            (this.index = e.index || 0),
              (this.name = e.name || null),
              (this.unicode = e.unicode || void 0),
              (this.unicodes =
                e.unicodes || void 0 !== e.unicode ? [e.unicode] : []),
              e.xMin && (this.xMin = e.xMin),
              e.yMin && (this.yMin = e.yMin),
              e.xMax && (this.xMax = e.xMax),
              e.yMax && (this.yMax = e.yMax),
              e.advanceWidth && (this.advanceWidth = e.advanceWidth),
              Object.defineProperty(
                this,
                "path",
                ((e = e.path),
                (t = e || { commands: [] }),
                {
                  configurable: !0,
                  get: function () {
                    return "function" == typeof t && (t = t()), t;
                  },
                  set: function (e) {
                    t = e;
                  },
                })
              );
          }),
            (n.prototype.addUnicode = function (e) {
              0 === this.unicodes.length && (this.unicode = e),
                this.unicodes.push(e);
            }),
            (n.prototype.getPath = function (e, t, r) {
              (e = void 0 !== e ? e : 0),
                (t = void 0 !== t ? t : 0),
                (r = void 0 !== r ? r : 72);
              for (
                var n = (1 / this.path.unitsPerEm) * r,
                  o = new h.Path(),
                  i = this.path.commands,
                  s = 0;
                s < i.length;
                s += 1
              ) {
                var a = i[s];
                "M" === a.type
                  ? o.moveTo(e + a.x * n, t + -a.y * n)
                  : "L" === a.type
                  ? o.lineTo(e + a.x * n, t + -a.y * n)
                  : "Q" === a.type
                  ? o.quadraticCurveTo(
                      e + a.x1 * n,
                      t + -a.y1 * n,
                      e + a.x * n,
                      t + -a.y * n
                    )
                  : "C" === a.type
                  ? o.curveTo(
                      e + a.x1 * n,
                      t + -a.y1 * n,
                      e + a.x2 * n,
                      t + -a.y2 * n,
                      e + a.x * n,
                      t + -a.y * n
                    )
                  : "Z" === a.type && o.closePath();
              }
              return o;
            }),
            (n.prototype.getContours = function () {
              if (void 0 === this.points) return [];
              for (var e = [], t = [], r = 0; r < this.points.length; r += 1) {
                var n = this.points[r];
                t.push(n), n.lastPointOfContour && (e.push(t), (t = []));
              }
              return (
                o.argument(
                  0 === t.length,
                  "There are still points left in the current contour."
                ),
                e
              );
            }),
            (n.prototype.getMetrics = function () {
              for (
                var e = this.path.commands, t = [], r = [], n = 0;
                n < e.length;
                n += 1
              ) {
                var o = e[n];
                "Z" !== o.type && (t.push(o.x), r.push(o.y)),
                  ("Q" !== o.type && "C" !== o.type) ||
                    (t.push(o.x1), r.push(o.y1)),
                  "C" === o.type && (t.push(o.x2), r.push(o.y2));
              }
              var i = {
                xMin: Math.min.apply(null, t),
                yMin: Math.min.apply(null, r),
                xMax: Math.max.apply(null, t),
                yMax: Math.max.apply(null, r),
                leftSideBearing: 0,
              };
              return (
                (i.rightSideBearing =
                  this.advanceWidth - i.leftSideBearing - (i.xMax - i.xMin)),
                i
              );
            }),
            (n.prototype.draw = function (e, t, r, n) {
              this.getPath(t, r, n).draw(e);
            }),
            (n.prototype.drawPoints = function (s, e, t, r) {
              function n(e, t, r, n) {
                var o = 2 * Math.PI;
                s.beginPath();
                for (var i = 0; i < e.length; i += 1)
                  s.moveTo(t + e[i].x * n, r + e[i].y * n),
                    s.arc(t + e[i].x * n, r + e[i].y * n, 2, 0, o, !1);
                s.closePath(), s.fill();
              }
              (e = void 0 !== e ? e : 0),
                (t = void 0 !== t ? t : 0),
                (r = void 0 !== r ? r : 24);
              for (
                var r = (1 / this.path.unitsPerEm) * r,
                  o = [],
                  i = [],
                  a = this.path,
                  h = 0;
                h < a.commands.length;
                h += 1
              ) {
                var l = a.commands[h];
                void 0 !== l.x && o.push({ x: l.x, y: -l.y }),
                  void 0 !== l.x1 && i.push({ x: l.x1, y: -l.y1 }),
                  void 0 !== l.x2 && i.push({ x: l.x2, y: -l.y2 });
              }
              (s.fillStyle = "blue"),
                n(o, e, t, r),
                (s.fillStyle = "red"),
                n(i, e, t, r);
            }),
            (n.prototype.drawMetrics = function (e, t, r, n) {
              var o;
              (t = void 0 !== t ? t : 0),
                (r = void 0 !== r ? r : 0),
                (n = void 0 !== n ? n : 24),
                (o = (1 / this.path.unitsPerEm) * n),
                (e.lineWidth = 1),
                (e.strokeStyle = "black"),
                l.line(e, t, -1e4, t, 1e4),
                l.line(e, -1e4, r, 1e4, r);
              var i = this.xMin || 0,
                s = this.yMin || 0,
                a = this.xMax || 0,
                h = this.yMax || 0,
                n = this.advanceWidth || 0;
              (e.strokeStyle = "blue"),
                l.line(e, t + i * o, -1e4, t + i * o, 1e4),
                l.line(e, t + a * o, -1e4, t + a * o, 1e4),
                l.line(e, -1e4, r + -s * o, 1e4, r + -s * o),
                l.line(e, -1e4, r + -h * o, 1e4, r + -h * o),
                (e.strokeStyle = "green"),
                l.line(e, t + n * o, -1e4, t + n * o, 1e4);
            }),
            (r.Glyph = n);
        },
        { "./check": 2, "./draw": 3, "./path": 10 },
      ],
      7: [
        function (e, t, r) {
          "use strict";
          var a = e("./glyph");
          function n(e, t) {
            if (((this.font = e), (this.glyphs = {}), Array.isArray(t)))
              for (var r = 0; r < t.length; r++) this.glyphs[r] = t[r];
            this.length = (t && t.length) || 0;
          }
          (n.prototype.get = function (e) {
            return (
              "function" == typeof this.glyphs[e] &&
                (this.glyphs[e] = this.glyphs[e]()),
              this.glyphs[e]
            );
          }),
            (n.prototype.push = function (e, t) {
              (this.glyphs[e] = t), this.length++;
            }),
            (r.GlyphSet = n),
            (r.glyphLoader = function (e, t) {
              return new a.Glyph({ index: t, font: e });
            }),
            (r.ttfGlyphLoader = function (r, e, n, o, i, s) {
              return function () {
                var t = new a.Glyph({ index: e, font: r });
                return (
                  (t.path = function () {
                    n(t, o, i);
                    var e = s(r.glyphs, t);
                    return (e.unitsPerEm = r.unitsPerEm), e;
                  }),
                  t
                );
              };
            }),
            (r.cffGlyphLoader = function (r, e, n, o) {
              return function () {
                var t = new a.Glyph({ index: e, font: r });
                return (
                  (t.path = function () {
                    var e = n(r, t, o);
                    return (e.unitsPerEm = r.unitsPerEm), e;
                  }),
                  t
                );
              };
            });
        },
        { "./glyph": 6 },
      ],
      8: [
        function (t, e, r) {
          "use strict";
          var m = t("./encoding"),
            g = t("./font"),
            n = t("./glyph"),
            y = t("./parse"),
            o = t("./path"),
            v = t("./tables/cmap"),
            x = t("./tables/cff"),
            _ = t("./tables/glyf"),
            w = t("./tables/gpos"),
            b = t("./tables/head"),
            S = t("./tables/hhea"),
            M = t("./tables/hmtx"),
            T = t("./tables/kern"),
            C = t("./tables/loca"),
            R = t("./tables/maxp"),
            E = t("./tables/name"),
            A = t("./tables/os2"),
            L = t("./tables/post");
          function i(e, r) {
            t("fs").readFile(e, function (e, t) {
              return e
                ? r(e.message)
                : void r(
                    null,
                    (function (e) {
                      for (
                        var t = new ArrayBuffer(e.length),
                          r = new Uint8Array(t),
                          n = 0;
                        n < e.length;
                        n += 1
                      )
                        r[n] = e[n];
                      return t;
                    })(t)
                  );
            });
          }
          function s(e, t) {
            var r = new XMLHttpRequest();
            r.open("get", e, !0),
              (r.responseType = "arraybuffer"),
              (r.onload = function () {
                return 200 !== r.status
                  ? t("Font could not be loaded: " + r.statusText)
                  : t(null, r.response);
              }),
              r.send();
          }
          function a(e) {
            var t,
              r,
              n,
              o,
              i,
              s,
              a,
              h = new g.Font(),
              l = new DataView(e, 0),
              e = y.getFixed(l, 0);
            if (1 === e) h.outlinesFormat = "truetype";
            else {
              if ("OTTO" !== (e = y.getTag(l, 0)))
                throw new Error("Unsupported OpenType version " + e);
              h.outlinesFormat = "cff";
            }
            for (var p = y.getUShort(l, 4), u = 12, c = 0; c < p; c += 1) {
              var d = y.getTag(l, u),
                f = y.getULong(l, u + 8);
              switch (d) {
                case "cmap":
                  (h.tables.cmap = v.parse(l, f)),
                    (h.encoding = new m.CmapEncoding(h.tables.cmap)),
                    h.encoding || (h.supported = !1);
                  break;
                case "head":
                  (h.tables.head = b.parse(l, f)),
                    (h.unitsPerEm = h.tables.head.unitsPerEm),
                    (t = h.tables.head.indexToLocFormat);
                  break;
                case "hhea":
                  (h.tables.hhea = S.parse(l, f)),
                    (h.ascender = h.tables.hhea.ascender),
                    (h.descender = h.tables.hhea.descender),
                    (h.numberOfHMetrics = h.tables.hhea.numberOfHMetrics);
                  break;
                case "hmtx":
                  r = f;
                  break;
                case "maxp":
                  (h.tables.maxp = R.parse(l, f)),
                    (h.numGlyphs = h.tables.maxp.numGlyphs);
                  break;
                case "name":
                  (h.tables.name = E.parse(l, f)),
                    (h.familyName = h.tables.name.fontFamily),
                    (h.styleName = h.tables.name.fontSubfamily);
                  break;
                case "OS/2":
                  h.tables.os2 = A.parse(l, f);
                  break;
                case "post":
                  (h.tables.post = L.parse(l, f)),
                    (h.glyphNames = new m.GlyphNames(h.tables.post));
                  break;
                case "glyf":
                  n = f;
                  break;
                case "loca":
                  o = f;
                  break;
                case "CFF ":
                  i = f;
                  break;
                case "kern":
                  s = f;
                  break;
                case "GPOS":
                  a = f;
              }
              u += 16;
            }
            return (
              n && o
                ? ((e = 0 === t),
                  (e = C.parse(l, o, h.numGlyphs, e)),
                  (h.glyphs = _.parse(l, n, e, h)),
                  M.parse(l, r, h.numberOfHMetrics, h.numGlyphs, h.glyphs),
                  m.addGlyphNames(h))
                : i
                ? (x.parse(l, i, h), m.addGlyphNames(h))
                : (h.supported = !1),
              h.supported &&
                ((h.kerningPairs = s ? T.parse(l, s) : {}),
                a && w.parse(l, a, h)),
              h
            );
          }
          (r._parse = y),
            (r.Font = g.Font),
            (r.Glyph = n.Glyph),
            (r.Path = o.Path),
            (r.parse = a),
            (r.load = function (e, r) {
              ("undefined" == typeof window ? i : s)(e, function (e, t) {
                if (e) return r(e);
                t = a(t);
                return t.supported
                  ? r(null, t)
                  : r("Font is not supported (is this a Postscript font?)");
              });
            });
        },
        {
          "./encoding": 4,
          "./font": 5,
          "./glyph": 6,
          "./parse": 9,
          "./path": 10,
          "./tables/cff": 12,
          "./tables/cmap": 13,
          "./tables/glyf": 14,
          "./tables/gpos": 15,
          "./tables/head": 16,
          "./tables/hhea": 17,
          "./tables/hmtx": 18,
          "./tables/kern": 19,
          "./tables/loca": 20,
          "./tables/maxp": 21,
          "./tables/name": 22,
          "./tables/os2": 23,
          "./tables/post": 24,
          fs: 1,
        },
      ],
      9: [
        function (e, t, i) {
          "use strict";
          (i.getByte = function (e, t) {
            return e.getUint8(t);
          }),
            (i.getCard8 = i.getByte),
            (i.getUShort = function (e, t) {
              return e.getUint16(t, !1);
            }),
            (i.getCard16 = i.getUShort),
            (i.getShort = function (e, t) {
              return e.getInt16(t, !1);
            }),
            (i.getULong = function (e, t) {
              return e.getUint32(t, !1);
            }),
            (i.getFixed = function (e, t) {
              return e.getInt16(t, !1) + e.getUint16(t + 2, !1) / 65535;
            }),
            (i.getTag = function (e, t) {
              for (var r = "", n = t; n < t + 4; n += 1)
                r += String.fromCharCode(e.getInt8(n));
              return r;
            }),
            (i.getOffset = function (e, t, r) {
              for (var n = 0, o = 0; o < r; o += 1)
                (n <<= 8), (n += e.getUint8(t + o));
              return n;
            }),
            (i.getBytes = function (e, t, r) {
              for (var n = [], o = t; o < r; o += 1) n.push(e.getUint8(o));
              return n;
            }),
            (i.bytesToString = function (e) {
              for (var t = "", r = 0; r < e.length; r += 1)
                t += String.fromCharCode(e[r]);
              return t;
            });
          var r = {
            byte: 1,
            uShort: 2,
            short: 2,
            uLong: 4,
            fixed: 4,
            longDateTime: 8,
            tag: 4,
          };
          function n(e, t) {
            (this.data = e), (this.offset = t), (this.relativeOffset = 0);
          }
          (n.prototype.parseByte = function () {
            var e = this.data.getUint8(this.offset + this.relativeOffset);
            return (this.relativeOffset += 1), e;
          }),
            (n.prototype.parseChar = function () {
              var e = this.data.getInt8(this.offset + this.relativeOffset);
              return (this.relativeOffset += 1), e;
            }),
            (n.prototype.parseCard8 = n.prototype.parseByte),
            (n.prototype.parseCard16 = n.prototype.parseUShort =
              function () {
                var e = this.data.getUint16(this.offset + this.relativeOffset);
                return (this.relativeOffset += 2), e;
              }),
            (n.prototype.parseSID = n.prototype.parseUShort),
            (n.prototype.parseOffset16 = n.prototype.parseUShort),
            (n.prototype.parseShort = function () {
              var e = this.data.getInt16(this.offset + this.relativeOffset);
              return (this.relativeOffset += 2), e;
            }),
            (n.prototype.parseF2Dot14 = function () {
              var e =
                this.data.getInt16(this.offset + this.relativeOffset) / 16384;
              return (this.relativeOffset += 2), e;
            }),
            (n.prototype.parseULong = function () {
              var e = i.getULong(this.data, this.offset + this.relativeOffset);
              return (this.relativeOffset += 4), e;
            }),
            (n.prototype.parseFixed = function () {
              var e = i.getFixed(this.data, this.offset + this.relativeOffset);
              return (this.relativeOffset += 4), e;
            }),
            (n.prototype.parseOffset16List = n.prototype.parseUShortList =
              function (e) {
                for (
                  var t = new Array(e),
                    r = this.data,
                    n = this.offset + this.relativeOffset,
                    o = 0;
                  o < e;
                  o++
                )
                  (t[o] = i.getUShort(r, n)), (n += 2);
                return (this.relativeOffset += 2 * e), t;
              }),
            (n.prototype.parseString = function (e) {
              var t = this.data,
                r = this.offset + this.relativeOffset,
                n = "";
              this.relativeOffset += e;
              for (var o = 0; o < e; o++)
                n += String.fromCharCode(t.getUint8(r + o));
              return n;
            }),
            (n.prototype.parseTag = function () {
              return this.parseString(4);
            }),
            (n.prototype.parseLongDateTime = function () {
              var e = i.getULong(
                this.data,
                this.offset + this.relativeOffset + 4
              );
              return (this.relativeOffset += 8), e;
            }),
            (n.prototype.parseFixed = function () {
              var e = i.getULong(this.data, this.offset + this.relativeOffset);
              return (this.relativeOffset += 4), e / 65536;
            }),
            (n.prototype.parseVersion = function () {
              var e = i.getUShort(this.data, this.offset + this.relativeOffset),
                t = i.getUShort(
                  this.data,
                  this.offset + this.relativeOffset + 2
                );
              return (this.relativeOffset += 4), e + t / 4096 / 10;
            }),
            (n.prototype.skip = function (e, t) {
              void 0 === t && (t = 1), (this.relativeOffset += r[e] * t);
            }),
            (i.Parser = n);
        },
        {},
      ],
      10: [
        function (e, t, r) {
          "use strict";
          function n() {
            (this.commands = []),
              (this.fill = "black"),
              (this.stroke = null),
              (this.strokeWidth = 1);
          }
          (n.prototype.moveTo = function (e, t) {
            this.commands.push({ type: "M", x: e, y: t });
          }),
            (n.prototype.lineTo = function (e, t) {
              this.commands.push({ type: "L", x: e, y: t });
            }),
            (n.prototype.curveTo = n.prototype.bezierCurveTo =
              function (e, t, r, n, o, i) {
                this.commands.push({
                  type: "C",
                  x1: e,
                  y1: t,
                  x2: r,
                  y2: n,
                  x: o,
                  y: i,
                });
              }),
            (n.prototype.quadTo = n.prototype.quadraticCurveTo =
              function (e, t, r, n) {
                this.commands.push({ type: "Q", x1: e, y1: t, x: r, y: n });
              }),
            (n.prototype.close = n.prototype.closePath =
              function () {
                this.commands.push({ type: "Z" });
              }),
            (n.prototype.extend = function (e) {
              e.commands && (e = e.commands),
                Array.prototype.push.apply(this.commands, e);
            }),
            (n.prototype.draw = function (e) {
              e.beginPath();
              for (var t = 0; t < this.commands.length; t += 1) {
                var r = this.commands[t];
                "M" === r.type
                  ? e.moveTo(r.x, r.y)
                  : "L" === r.type
                  ? e.lineTo(r.x, r.y)
                  : "C" === r.type
                  ? e.bezierCurveTo(r.x1, r.y1, r.x2, r.y2, r.x, r.y)
                  : "Q" === r.type
                  ? e.quadraticCurveTo(r.x1, r.y1, r.x, r.y)
                  : "Z" === r.type && e.closePath();
              }
              this.fill && ((e.fillStyle = this.fill), e.fill()),
                this.stroke &&
                  ((e.strokeStyle = this.stroke),
                  (e.lineWidth = this.strokeWidth),
                  e.stroke());
            }),
            (n.prototype.toPathData = function (n) {
              function e() {
                for (var e = "", t = 0; t < arguments.length; t += 1) {
                  var r = arguments[t];
                  0 <= r && 0 < t && (e += " "),
                    (e +=
                      ((r = r),
                      Math.round(r) === r ? "" + Math.round(r) : r.toFixed(n)));
                }
                return e;
              }
              n = void 0 !== n ? n : 2;
              for (var t = "", r = 0; r < this.commands.length; r += 1) {
                var o = this.commands[r];
                "M" === o.type
                  ? (t += "M" + e(o.x, o.y))
                  : "L" === o.type
                  ? (t += "L" + e(o.x, o.y))
                  : "C" === o.type
                  ? (t += "C" + e(o.x1, o.y1, o.x2, o.y2, o.x, o.y))
                  : "Q" === o.type
                  ? (t += "Q" + e(o.x1, o.y1, o.x, o.y))
                  : "Z" === o.type && (t += "Z");
              }
              return t;
            }),
            (n.prototype.toSVG = function (e) {
              var t = '<path d="';
              return (
                (t += this.toPathData(e)),
                (t += '"'),
                this.fill & ("black" !== this.fill) &&
                  (null === this.fill
                    ? (t += ' fill="none"')
                    : (t += ' fill="' + this.fill + '"')),
                this.stroke &&
                  (t +=
                    ' stroke="' +
                    this.stroke +
                    '" stroke-width="' +
                    this.strokeWidth +
                    '"'),
                (t += "/>")
              );
            }),
            (r.Path = n);
        },
        {},
      ],
      11: [
        function (e, t, r) {
          "use strict";
          var i = e("./check"),
            n = e("./types").encode,
            s = e("./types").sizeOf;
          function o(e, t, r) {
            for (i = 0; i < t.length; i += 1) {
              var n = t[i];
              this[n.name] = n.value;
            }
            if (((this.tableName = e), (this.fields = t), r))
              for (var o = Object.keys(r), i = 0; i < o.length; i += 1) {
                var s = o[i],
                  a = r[s];
                void 0 !== this[s] && (this[s] = a);
              }
          }
          (o.prototype.sizeOf = function () {
            for (var e = 0, t = 0; t < this.fields.length; t += 1) {
              var r,
                n = this.fields[t],
                o = this[n.name];
              void 0 === o && (o = n.value),
                "function" == typeof o.sizeOf
                  ? (e += o.sizeOf())
                  : ((r = s[n.type]),
                    i.assert(
                      "function" == typeof r,
                      "Could not find sizeOf function for field" + n.name
                    ),
                    (e += r(o)));
            }
            return e;
          }),
            (o.prototype.encode = function () {
              return n.TABLE(this);
            }),
            (r.Table = o);
        },
        { "./check": 2, "./types": 26 },
      ],
      12: [
        function (e, t, r) {
          "use strict";
          var d = e("../encoding"),
            f = e("../glyphset"),
            m = e("../parse"),
            n = e("../path"),
            u = e("../table");
          function g(e, t, r) {
            var n,
              o = [],
              i = [],
              s = m.getCard16(e, t);
            if (0 !== s) {
              for (
                var a = m.getByte(e, t + 2),
                  h = t + (s + 1) * a + 2,
                  l = t + 3,
                  p = 0;
                p < s + 1;
                p += 1
              )
                o.push(m.getOffset(e, l, a)), (l += a);
              n = h + o[s];
            } else n = t + 2;
            for (p = 0; p < o.length - 1; p += 1) {
              var u = m.getBytes(e, h + o[p], h + o[p + 1]);
              r && (u = r(u)), i.push(u);
            }
            return { objects: i, startOffset: t, endOffset: n };
          }
          function a(e, t) {
            if (28 === t) return (e.parseByte() << 8) | e.parseByte();
            if (29 === t)
              return (
                (e.parseByte() << 24) |
                (e.parseByte() << 16) |
                (e.parseByte() << 8) |
                e.parseByte()
              );
            if (30 === t)
              return (function (e) {
                for (
                  var t = "",
                    r = [
                      "0",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      ".",
                      "E",
                      "E-",
                      null,
                      "-",
                    ];
                  ;

                ) {
                  var n = e.parseByte(),
                    o = n >> 4,
                    n = 15 & n;
                  if (15 == o) break;
                  if (((t += r[o]), 15 == n)) break;
                  t += r[n];
                }
                return parseFloat(t);
              })(e);
            if (32 <= t && t <= 246) return t - 139;
            if (247 <= t && t <= 250)
              return 256 * (t - 247) + e.parseByte() + 108;
            if (251 <= t && t <= 254)
              return 256 * -(t - 251) - e.parseByte() - 108;
            throw new Error("Invalid b0 " + t);
          }
          function y(e, t, r) {
            t = void 0 !== t ? t : 0;
            var n = new m.Parser(e, t),
              o = [],
              i = [];
            for (r = void 0 !== r ? r : e.length; n.relativeOffset < r; ) {
              var s = n.parseByte();
              s <= 21
                ? (12 === s && (s = 1200 + n.parseByte()),
                  o.push([s, i]),
                  (i = []))
                : i.push(a(n, s));
            }
            return (function (e) {
              for (var t = {}, r = 0; r < e.length; r += 1) {
                var n = e[r][0],
                  o = e[r][1],
                  o = 1 === o.length ? o[0] : o;
                if (t.hasOwnProperty(n))
                  throw new Error("Object " + t + " already has key " + n);
                t[n] = o;
              }
              return t;
            })(o);
          }
          function v(e, t) {
            return (t = t <= 390 ? d.cffStandardStrings[t] : e[t - 391]);
          }
          function x(e, t, r) {
            for (var n = {}, o = 0; o < t.length; o += 1) {
              var i = t[o],
                s = e[i.op];
              void 0 === s && (s = void 0 !== i.value ? i.value : null),
                "SID" === i.type && (s = v(r, s)),
                (n[i.name] = s);
            }
            return n;
          }
          var _ = [
              { name: "version", op: 0, type: "SID" },
              { name: "notice", op: 1, type: "SID" },
              { name: "copyright", op: 1200, type: "SID" },
              { name: "fullName", op: 2, type: "SID" },
              { name: "familyName", op: 3, type: "SID" },
              { name: "weight", op: 4, type: "SID" },
              { name: "isFixedPitch", op: 1201, type: "number", value: 0 },
              { name: "italicAngle", op: 1202, type: "number", value: 0 },
              {
                name: "underlinePosition",
                op: 1203,
                type: "number",
                value: -100,
              },
              {
                name: "underlineThickness",
                op: 1204,
                type: "number",
                value: 50,
              },
              { name: "paintType", op: 1205, type: "number", value: 0 },
              { name: "charstringType", op: 1206, type: "number", value: 2 },
              {
                name: "fontMatrix",
                op: 1207,
                type: ["real", "real", "real", "real", "real", "real"],
                value: [0.001, 0, 0, 0.001, 0, 0],
              },
              { name: "uniqueId", op: 13, type: "number" },
              {
                name: "fontBBox",
                op: 5,
                type: ["number", "number", "number", "number"],
                value: [0, 0, 0, 0],
              },
              { name: "strokeWidth", op: 1208, type: "number", value: 0 },
              { name: "xuid", op: 14, type: [], value: null },
              { name: "charset", op: 15, type: "offset", value: 0 },
              { name: "encoding", op: 16, type: "offset", value: 0 },
              { name: "charStrings", op: 17, type: "offset", value: 0 },
              {
                name: "private",
                op: 18,
                type: ["number", "offset"],
                value: [0, 0],
              },
            ],
            w = [
              { name: "subrs", op: 19, type: "offset", value: 0 },
              { name: "defaultWidthX", op: 20, type: "number", value: 0 },
              { name: "nominalWidthX", op: 21, type: "number", value: 0 },
            ];
          function b(g, y, e) {
            var v,
              x,
              _,
              w,
              b = new n.Path(),
              S = [],
              M = 0,
              T = !1,
              C = g.defaultWidthX,
              R = !1,
              E = 0,
              A = 0;
            function L(e, t) {
              R && b.closePath(), b.moveTo(e, t), (R = !0);
            }
            function I() {
              S.length % 2 == 0 || T || (C = S.shift() + g.nominalWidthX),
                (M += S.length >> 1),
                (S.length = 0),
                (T = !0);
            }
            return (
              (function e(t) {
                for (
                  var r, n, o, i, s, a, h, l, p, u, c, d, f = 0;
                  f < t.length;

                ) {
                  var m = t[f];
                  switch (((f += 1), m)) {
                    case 1:
                    case 3:
                      I();
                      break;
                    case 4:
                      1 < S.length &&
                        !T &&
                        ((C = S.shift() + g.nominalWidthX), (T = !0)),
                        (A += S.pop()),
                        L(E, A);
                      break;
                    case 5:
                      for (; 0 < S.length; )
                        (E += S.shift()), (A += S.shift()), b.lineTo(E, A);
                      break;
                    case 6:
                      for (
                        ;
                        0 < S.length &&
                        ((E += S.shift()), b.lineTo(E, A), 0 !== S.length);

                      )
                        (A += S.shift()), b.lineTo(E, A);
                      break;
                    case 7:
                      for (
                        ;
                        0 < S.length &&
                        ((A += S.shift()), b.lineTo(E, A), 0 !== S.length);

                      )
                        (E += S.shift()), b.lineTo(E, A);
                      break;
                    case 8:
                      for (; 0 < S.length; )
                        (v = E + S.shift()),
                          (x = A + S.shift()),
                          (_ = v + S.shift()),
                          (w = x + S.shift()),
                          (E = _ + S.shift()),
                          (A = w + S.shift()),
                          b.curveTo(v, x, _, w, E, A);
                      break;
                    case 10:
                      (s = S.pop() + g.subrsBias), (a = g.subrs[s]) && e(a);
                      break;
                    case 11:
                      return;
                    case 12:
                      switch (((m = t[f]), (f += 1), m)) {
                        case 35:
                          (v = E + S.shift()),
                            (x = A + S.shift()),
                            (_ = v + S.shift()),
                            (w = x + S.shift()),
                            (h = _ + S.shift()),
                            (l = w + S.shift()),
                            (p = h + S.shift()),
                            (u = l + S.shift()),
                            (c = p + S.shift()),
                            (d = u + S.shift()),
                            (E = c + S.shift()),
                            (A = d + S.shift()),
                            S.shift(),
                            b.curveTo(v, x, _, w, h, l),
                            b.curveTo(p, u, c, d, E, A);
                          break;
                        case 34:
                          (v = E + S.shift()),
                            (x = A),
                            (_ = v + S.shift()),
                            (w = x + S.shift()),
                            (h = _ + S.shift()),
                            (l = w),
                            (p = h + S.shift()),
                            (u = w),
                            (c = p + S.shift()),
                            (d = A),
                            (E = c + S.shift()),
                            b.curveTo(v, x, _, w, h, l),
                            b.curveTo(p, u, c, d, E, A);
                          break;
                        case 36:
                          (v = E + S.shift()),
                            (x = A + S.shift()),
                            (_ = v + S.shift()),
                            (w = x + S.shift()),
                            (h = _ + S.shift()),
                            (l = w),
                            (p = h + S.shift()),
                            (u = w),
                            (c = p + S.shift()),
                            (d = u + S.shift()),
                            (E = c + S.shift()),
                            b.curveTo(v, x, _, w, h, l),
                            b.curveTo(p, u, c, d, E, A);
                          break;
                        case 37:
                          (v = E + S.shift()),
                            (x = A + S.shift()),
                            (_ = v + S.shift()),
                            (w = x + S.shift()),
                            (h = _ + S.shift()),
                            (l = w + S.shift()),
                            (p = h + S.shift()),
                            (u = l + S.shift()),
                            (c = p + S.shift()),
                            (d = u + S.shift()),
                            Math.abs(c - E) > Math.abs(d - A)
                              ? (E = c + S.shift())
                              : (A = d + S.shift()),
                            b.curveTo(v, x, _, w, h, l),
                            b.curveTo(p, u, c, d, E, A);
                          break;
                        default:
                          console.log(
                            "Glyph " + y.index + ": unknown operator 1200" + m
                          ),
                            (S.length = 0);
                      }
                      break;
                    case 14:
                      0 < S.length &&
                        !T &&
                        ((C = S.shift() + g.nominalWidthX), (T = !0)),
                        R && (b.closePath(), (R = !1));
                      break;
                    case 18:
                      I();
                      break;
                    case 19:
                    case 20:
                      I(), (f += (M + 7) >> 3);
                      break;
                    case 21:
                      2 < S.length &&
                        !T &&
                        ((C = S.shift() + g.nominalWidthX), (T = !0)),
                        (A += S.pop()),
                        L((E += S.pop()), A);
                      break;
                    case 22:
                      1 < S.length &&
                        !T &&
                        ((C = S.shift() + g.nominalWidthX), (T = !0)),
                        L((E += S.pop()), A);
                      break;
                    case 23:
                      I();
                      break;
                    case 24:
                      for (; 2 < S.length; )
                        (v = E + S.shift()),
                          (x = A + S.shift()),
                          (_ = v + S.shift()),
                          (w = x + S.shift()),
                          (E = _ + S.shift()),
                          (A = w + S.shift()),
                          b.curveTo(v, x, _, w, E, A);
                      (E += S.shift()), (A += S.shift()), b.lineTo(E, A);
                      break;
                    case 25:
                      for (; 6 < S.length; )
                        (E += S.shift()), (A += S.shift()), b.lineTo(E, A);
                      (v = E + S.shift()),
                        (x = A + S.shift()),
                        (_ = v + S.shift()),
                        (w = x + S.shift()),
                        (E = _ + S.shift()),
                        (A = w + S.shift()),
                        b.curveTo(v, x, _, w, E, A);
                      break;
                    case 26:
                      for (S.length % 2 && (E += S.shift()); 0 < S.length; )
                        (v = E),
                          (x = A + S.shift()),
                          (_ = v + S.shift()),
                          (w = x + S.shift()),
                          (E = _),
                          (A = w + S.shift()),
                          b.curveTo(v, x, _, w, E, A);
                      break;
                    case 27:
                      for (S.length % 2 && (A += S.shift()); 0 < S.length; )
                        (v = E + S.shift()),
                          (x = A),
                          (_ = v + S.shift()),
                          (w = x + S.shift()),
                          (E = _ + S.shift()),
                          (A = w),
                          b.curveTo(v, x, _, w, E, A);
                      break;
                    case 28:
                      (r = t[f]),
                        (n = t[f + 1]),
                        S.push(((r << 24) | (n << 16)) >> 16),
                        (f += 2);
                      break;
                    case 29:
                      (s = S.pop() + g.gsubrsBias), (a = g.gsubrs[s]) && e(a);
                      break;
                    case 30:
                      for (
                        ;
                        0 < S.length &&
                        ((v = E),
                        (x = A + S.shift()),
                        (_ = v + S.shift()),
                        (w = x + S.shift()),
                        (E = _ + S.shift()),
                        (A = w + (1 === S.length ? S.shift() : 0)),
                        b.curveTo(v, x, _, w, E, A),
                        0 !== S.length);

                      )
                        (v = E + S.shift()),
                          (x = A),
                          (_ = v + S.shift()),
                          (w = x + S.shift()),
                          (A = w + S.shift()),
                          (E = _ + (1 === S.length ? S.shift() : 0)),
                          b.curveTo(v, x, _, w, E, A);
                      break;
                    case 31:
                      for (
                        ;
                        0 < S.length &&
                        ((v = E + S.shift()),
                        (x = A),
                        (_ = v + S.shift()),
                        (w = x + S.shift()),
                        (A = w + S.shift()),
                        (E = _ + (1 === S.length ? S.shift() : 0)),
                        b.curveTo(v, x, _, w, E, A),
                        0 !== S.length);

                      )
                        (v = E),
                          (x = A + S.shift()),
                          (_ = v + S.shift()),
                          (w = x + S.shift()),
                          (E = _ + S.shift()),
                          (A = w + (1 === S.length ? S.shift() : 0)),
                          b.curveTo(v, x, _, w, E, A);
                      break;
                    default:
                      m < 32
                        ? console.log(
                            "Glyph " + y.index + ": unknown operator " + m
                          )
                        : m < 247
                        ? S.push(m - 139)
                        : m < 251
                        ? ((r = t[f]),
                          (f += 1),
                          S.push(256 * (m - 247) + r + 108))
                        : m < 255
                        ? ((r = t[f]),
                          (f += 1),
                          S.push(256 * -(m - 251) - r - 108))
                        : ((r = t[f]),
                          (n = t[f + 1]),
                          (o = t[f + 2]),
                          (i = t[f + 3]),
                          (f += 4),
                          S.push(
                            ((r << 24) | (n << 16) | (o << 8) | i) / 65536
                          ));
                  }
                }
              })(e),
              (y.advanceWidth = C),
              b
            );
          }
          function S(e) {
            e = e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768;
            return e;
          }
          function c(e, t) {
            var r,
              n = d.cffStandardStrings.indexOf(e);
            return (
              0 <= n && (r = n),
              0 <= (n = t.indexOf(e))
                ? (r = n + d.cffStandardStrings.length)
                : ((r = d.cffStandardStrings.length + t.length), t.push(e)),
              r
            );
          }
          function M(e, t, r) {
            for (var n = {}, o = 0; o < e.length; o += 1) {
              var i = e[o],
                s = t[i.name];
              void 0 === s ||
                (function e(t, r) {
                  if (t === r) return 1;
                  if (
                    Array.isArray(t) &&
                    Array.isArray(r) &&
                    t.length === r.length
                  ) {
                    for (var n = 0; n < t.length; n += 1)
                      if (!e(t[n], r[n])) return;
                    return 1;
                  }
                })(s, i.value) ||
                ("SID" === i.type && (s = c(s, r)),
                (n[i.op] = { name: i.name, type: i.type, value: s }));
            }
            return n;
          }
          function T(e, t) {
            var r = new u.Table("Top DICT", [
              { name: "dict", type: "DICT", value: {} },
            ]);
            return (r.dict = M(_, e, t)), r;
          }
          function C(e) {
            var t = new u.Table("Top DICT INDEX", [
              { name: "topDicts", type: "INDEX", value: [] },
            ]);
            return (
              (t.topDicts = [{ name: "topDict_0", type: "TABLE", value: e }]), t
            );
          }
          function R(e) {
            for (
              var t = new u.Table("CharStrings INDEX", [
                  { name: "charStrings", type: "INDEX", value: [] },
                ]),
                r = 0;
              r < e.length;
              r += 1
            ) {
              var n = e.get(r),
                o = (function (e) {
                  var t = [],
                    r = e.path;
                  t.push({
                    name: "width",
                    type: "NUMBER",
                    value: e.advanceWidth,
                  });
                  for (var n = 0, o = 0, i = 0; i < r.commands.length; i += 1) {
                    var s,
                      a,
                      h,
                      l,
                      p,
                      u,
                      c = r.commands[i];
                    "Q" === c.type &&
                      (c = {
                        type: "C",
                        x: c.x,
                        y: c.y,
                        x1: (1 / 3) * n + (2 / 3) * c.x1,
                        y1: (1 / 3) * o + (2 / 3) * c.y1,
                        x2: (1 / 3) * c.x + (2 / 3) * c.x1,
                        y2: (1 / 3) * c.y + (2 / 3) * c.y1,
                      }),
                      "M" === c.type
                        ? ((p = Math.round(c.x - n)),
                          (u = Math.round(c.y - o)),
                          t.push({ name: "dx", type: "NUMBER", value: p }),
                          t.push({ name: "dy", type: "NUMBER", value: u }),
                          t.push({ name: "rmoveto", type: "OP", value: 21 }),
                          (n = Math.round(c.x)),
                          (o = Math.round(c.y)))
                        : "L" === c.type
                        ? ((p = Math.round(c.x - n)),
                          (u = Math.round(c.y - o)),
                          t.push({ name: "dx", type: "NUMBER", value: p }),
                          t.push({ name: "dy", type: "NUMBER", value: u }),
                          t.push({ name: "rlineto", type: "OP", value: 5 }),
                          (n = Math.round(c.x)),
                          (o = Math.round(c.y)))
                        : "C" === c.type &&
                          ((s = Math.round(c.x1 - n)),
                          (a = Math.round(c.y1 - o)),
                          (h = Math.round(c.x2 - c.x1)),
                          (l = Math.round(c.y2 - c.y1)),
                          (p = Math.round(c.x - c.x2)),
                          (u = Math.round(c.y - c.y2)),
                          t.push({ name: "dx1", type: "NUMBER", value: s }),
                          t.push({ name: "dy1", type: "NUMBER", value: a }),
                          t.push({ name: "dx2", type: "NUMBER", value: h }),
                          t.push({ name: "dy2", type: "NUMBER", value: l }),
                          t.push({ name: "dx", type: "NUMBER", value: p }),
                          t.push({ name: "dy", type: "NUMBER", value: u }),
                          t.push({ name: "rrcurveto", type: "OP", value: 8 }),
                          (n = Math.round(c.x)),
                          (o = Math.round(c.y)));
                  }
                  return t.push({ name: "endchar", type: "OP", value: 14 }), t;
                })(n);
              t.charStrings.push({
                name: n.name,
                type: "CHARSTRING",
                value: o,
              });
            }
            return t;
          }
          (r.parse = function (e, t, r) {
            r.tables.cff = {};
            var n = g(
                e,
                ((h = e),
                (a = t),
                ((l = {}).formatMajor = m.getCard8(h, a)),
                (l.formatMinor = m.getCard8(h, a + 1)),
                (l.size = m.getCard8(h, a + 2)),
                (l.offsetSize = m.getCard8(h, a + 3)),
                (l.startOffset = a),
                (l.endOffset = a + 4),
                l).endOffset,
                m.bytesToString
              ),
              o = g(e, n.endOffset),
              i = g(e, o.endOffset, m.bytesToString),
              s = g(e, i.endOffset);
            (r.gsubrs = s.objects), (r.gsubrsBias = S(r.gsubrs));
            var a,
              h = new DataView(new Uint8Array(o.objects[0]).buffer),
              n = ((a = h), (l = i.objects), x(y(a, 0, a.byteLength), _, l)),
              s = t + (r.tables.cff.topDict = n).private[1],
              l =
                ((o = e),
                (h = s),
                (a = n.private[0]),
                (l = i.objects),
                x(y(o, h, a), w, l));
            (r.defaultWidthX = l.defaultWidthX),
              (r.nominalWidthX = l.nominalWidthX),
              0 !== l.subrs
                ? ((l = g(e, s + l.subrs)),
                  (r.subrs = l.objects),
                  (r.subrsBias = S(r.subrs)))
                : ((r.subrs = []), (r.subrsBias = 0));
            var p = g(e, t + n.charStrings);
            (r.nGlyphs = p.objects.length),
              (i = (function (e, t, r, n) {
                var o,
                  i,
                  s,
                  a = new m.Parser(e, t);
                --r;
                var h = [".notdef"];
                if (0 === (t = a.parseCard8()))
                  for (o = 0; o < r; o += 1)
                    (i = a.parseSID()), h.push(v(n, i));
                else if (1 === t)
                  for (; h.length <= r; )
                    for (
                      i = a.parseSID(), s = a.parseCard8(), o = 0;
                      o <= s;
                      o += 1
                    )
                      h.push(v(n, i)), (i += 1);
                else {
                  if (2 !== t) throw new Error("Unknown charset format " + t);
                  for (; h.length <= r; )
                    for (
                      i = a.parseSID(), s = a.parseCard16(), o = 0;
                      o <= s;
                      o += 1
                    )
                      h.push(v(n, i)), (i += 1);
                }
                return h;
              })(e, t + n.charset, r.nGlyphs, i.objects)),
              0 === n.encoding
                ? (r.cffEncoding = new d.CffEncoding(d.cffStandardEncoding, i))
                : 1 === n.encoding
                ? (r.cffEncoding = new d.CffEncoding(d.cffExpertEncoding, i))
                : (r.cffEncoding = (function (e, t, r) {
                    var n = {},
                      o = new m.Parser(e, t);
                    if (0 === (t = o.parseCard8()))
                      for (var i = o.parseCard8(), s = 0; s < i; s += 1)
                        n[(h = o.parseCard8())] = s;
                    else {
                      if (1 !== t)
                        throw new Error("Unknown encoding format " + t);
                      var a = o.parseCard8(),
                        h = 1;
                      for (s = 0; s < a; s += 1)
                        for (
                          var l = o.parseCard8(), p = o.parseCard8(), u = l;
                          u <= l + p;
                          u += 1
                        )
                          (n[u] = h), (h += 1);
                    }
                    return new d.CffEncoding(n, r);
                  })(e, t + n.encoding, i)),
              (r.encoding = r.encoding || r.cffEncoding),
              (r.glyphs = new f.GlyphSet(r));
            for (var u = 0; u < r.nGlyphs; u += 1) {
              var c = p.objects[u];
              r.glyphs.push(u, f.cffGlyphLoader(r, u, b, c));
            }
          }),
            (r.make = function (e, t) {
              for (
                var r,
                  n = new u.Table("CFF ", [
                    { name: "header", type: "TABLE" },
                    { name: "nameIndex", type: "TABLE" },
                    { name: "topDictIndex", type: "TABLE" },
                    { name: "stringIndex", type: "TABLE" },
                    { name: "globalSubrIndex", type: "TABLE" },
                    { name: "charsets", type: "TABLE" },
                    { name: "charStringsIndex", type: "TABLE" },
                    { name: "privateDictIndex", type: "TABLE" },
                  ]),
                  o = 1 / t.unitsPerEm,
                  i = {
                    version: t.version,
                    fullName: t.fullName,
                    familyName: t.familyName,
                    weight: t.weightName,
                    fontMatrix: [o, 0, 0, o, 0, 0],
                    charset: 999,
                    encoding: 0,
                    charStrings: 999,
                    private: [0, 999],
                  },
                  s = [],
                  a = 1;
                a < e.length;
                a += 1
              )
                (r = e.get(a)), s.push(r.name);
              var h = [];
              (n.header = new u.Table("Header", [
                { name: "major", type: "Card8", value: 1 },
                { name: "minor", type: "Card8", value: 0 },
                { name: "hdrSize", type: "Card8", value: 4 },
                { name: "major", type: "Card8", value: 1 },
              ])),
                (n.nameIndex = (function (e) {
                  var t = new u.Table("Name INDEX", [
                    { name: "names", type: "INDEX", value: [] },
                  ]);
                  t.names = [];
                  for (var r = 0; r < e.length; r += 1)
                    t.names.push({
                      name: "name_" + r,
                      type: "NAME",
                      value: e[r],
                    });
                  return t;
                })([t.postScriptName]));
              var l = T(i, h);
              (n.topDictIndex = C(l)),
                (n.globalSubrIndex = new u.Table("Global Subr INDEX", [
                  { name: "subrs", type: "INDEX", value: [] },
                ])),
                (n.charsets = (function (e, t) {
                  for (
                    var r = new u.Table("Charsets", [
                        { name: "format", type: "Card8", value: 0 },
                      ]),
                      n = 0;
                    n < e.length;
                    n += 1
                  ) {
                    var o = c(e[n], t);
                    r.fields.push({
                      name: "glyph_" + n,
                      type: "SID",
                      value: o,
                    });
                  }
                  return r;
                })(s, h)),
                (n.charStringsIndex = R(e));
              var p,
                o =
                  ((p = {}),
                  (o = h),
                  ((t = new u.Table("Private DICT", [
                    { name: "dict", type: "DICT", value: {} },
                  ])).dict = M(w, p, o)),
                  t);
              return (
                (n.privateDictIndex =
                  ((t = o),
                  ((o = new u.Table("Private DICT INDEX", [
                    { name: "privateDicts", type: "INDEX", value: [] },
                  ])).privateDicts = [
                    { name: "privateDict_0", type: "TABLE", value: t },
                  ]),
                  o)),
                (n.stringIndex = (function (e) {
                  var t = new u.Table("String INDEX", [
                    { name: "strings", type: "INDEX", value: [] },
                  ]);
                  t.strings = [];
                  for (var r = 0; r < e.length; r += 1)
                    t.strings.push({
                      name: "string_" + r,
                      type: "STRING",
                      value: e[r],
                    });
                  return t;
                })(h)),
                (o =
                  n.header.sizeOf() +
                  n.nameIndex.sizeOf() +
                  n.topDictIndex.sizeOf() +
                  n.stringIndex.sizeOf() +
                  n.globalSubrIndex.sizeOf()),
                (i.charset = o),
                (i.encoding = 0),
                (i.charStrings = i.charset + n.charsets.sizeOf()),
                (i.private[1] = i.charStrings + n.charStringsIndex.sizeOf()),
                (l = T(i, h)),
                (n.topDictIndex = C(l)),
                n
              );
            });
        },
        {
          "../encoding": 4,
          "../glyphset": 7,
          "../parse": 9,
          "../path": 10,
          "../table": 11,
        },
      ],
      13: [
        function (e, t, r) {
          "use strict";
          var x = e("../check"),
            _ = e("../parse"),
            m = e("../table");
          (r.parse = function (e, t) {
            var r = {};
            (r.version = _.getUShort(e, t)),
              x.argument(0 === r.version, "cmap table version should be 0."),
              (r.numTables = _.getUShort(e, t + 2));
            for (var n = -1, o = 0; o < r.numTables; o += 1) {
              var i = _.getUShort(e, t + 4 + 8 * o),
                s = _.getUShort(e, t + 4 + 8 * o + 2);
              if (3 === i && (1 === s || 0 === s)) {
                n = _.getULong(e, t + 4 + 8 * o + 4);
                break;
              }
            }
            if (-1 === n) return null;
            var a,
              h = new _.Parser(e, t + n);
            (r.format = h.parseUShort()),
              x.argument(
                4 === r.format,
                "Only format 4 cmap tables are supported."
              ),
              (r.length = h.parseUShort()),
              (r.language = h.parseUShort()),
              (r.segCount = a = h.parseUShort() >> 1),
              h.skip("uShort", 3),
              (r.glyphIndexMap = {});
            var l = new _.Parser(e, t + n + 14),
              p = new _.Parser(e, t + n + 16 + 2 * a),
              u = new _.Parser(e, t + n + 16 + 4 * a),
              c = new _.Parser(e, t + n + 16 + 6 * a);
            for (o = 0; o < a - 1; o += 1)
              for (
                var d,
                  f = l.parseUShort(),
                  m = p.parseUShort(),
                  g = u.parseShort(),
                  y = c.parseUShort(),
                  v = m;
                v <= f;
                v += 1
              )
                0 !== y
                  ? ((d = c.offset + c.relativeOffset - 2),
                    (d += y),
                    (d += 2 * (v - m)),
                    0 !== (d = _.getUShort(e, d)) && (d = (d + g) & 65535))
                  : (d = (v + g) & 65535),
                  (r.glyphIndexMap[v] = d);
            return r;
          }),
            (r.make = function (e) {
              var t,
                r,
                n,
                o,
                i = new m.Table("cmap", [
                  { name: "version", type: "USHORT", value: 0 },
                  { name: "numTables", type: "USHORT", value: 1 },
                  { name: "platformID", type: "USHORT", value: 3 },
                  { name: "encodingID", type: "USHORT", value: 1 },
                  { name: "offset", type: "ULONG", value: 12 },
                  { name: "format", type: "USHORT", value: 4 },
                  { name: "length", type: "USHORT", value: 0 },
                  { name: "language", type: "USHORT", value: 0 },
                  { name: "segCountX2", type: "USHORT", value: 0 },
                  { name: "searchRange", type: "USHORT", value: 0 },
                  { name: "entrySelector", type: "USHORT", value: 0 },
                  { name: "rangeShift", type: "USHORT", value: 0 },
                ]);
              for (i.segments = [], d = 0; d < e.length; d += 1) {
                for (var s = e.get(d), a = 0; a < s.unicodes.length; a += 1)
                  (t = i),
                    (r = s.unicodes[a]),
                    (n = d),
                    t.segments.push({
                      end: r,
                      start: r,
                      delta: -(r - n),
                      offset: 0,
                    });
                i.segments = i.segments.sort(function (e, t) {
                  return e.start - t.start;
                });
              }
              i.segments.push({
                end: 65535,
                start: 65535,
                delta: 1,
                offset: 0,
              }),
                (o = i.segments.length),
                (i.segCountX2 = 2 * o),
                (i.searchRange =
                  2 * Math.pow(2, Math.floor(Math.log(o) / Math.log(2)))),
                (i.entrySelector = Math.log(i.searchRange / 2) / Math.log(2)),
                (i.rangeShift = i.segCountX2 - i.searchRange);
              for (
                var h = [], l = [], p = [], u = [], c = [], d = 0;
                d < o;
                d += 1
              ) {
                var f = i.segments[d],
                  h = h.concat({
                    name: "end_" + d,
                    type: "USHORT",
                    value: f.end,
                  }),
                  l = l.concat({
                    name: "start_" + d,
                    type: "USHORT",
                    value: f.start,
                  }),
                  p = p.concat({
                    name: "idDelta_" + d,
                    type: "SHORT",
                    value: f.delta,
                  }),
                  u = u.concat({
                    name: "idRangeOffset_" + d,
                    type: "USHORT",
                    value: f.offset,
                  });
                void 0 !== f.glyphId &&
                  (c = c.concat({
                    name: "glyph_" + d,
                    type: "USHORT",
                    value: f.glyphId,
                  }));
              }
              return (
                (i.fields = i.fields.concat(h)),
                i.fields.push({
                  name: "reservedPad",
                  type: "USHORT",
                  value: 0,
                }),
                (i.fields = i.fields.concat(l)),
                (i.fields = i.fields.concat(p)),
                (i.fields = i.fields.concat(u)),
                (i.fields = i.fields.concat(c)),
                (i.length =
                  14 +
                  2 * h.length +
                  2 +
                  2 * l.length +
                  2 * p.length +
                  2 * u.length +
                  2 * c.length),
                i
              );
            });
        },
        { "../check": 2, "../parse": 9, "../table": 11 },
      ],
      14: [
        function (e, t, r) {
          "use strict";
          var y = e("../check"),
            a = e("../glyphset"),
            v = e("../parse"),
            d = e("../path");
          function x(e, t, r, n, o) {
            var i =
              0 < (t & n)
                ? ((i = e.parseByte()), 0 == (t & o) && (i = -i), r + i)
                : 0 < (t & o)
                ? r
                : r + e.parseShort();
            return i;
          }
          function h(e, t, r) {
            var n,
              o = new v.Parser(t, r);
            if (
              ((e.numberOfContours = o.parseShort()),
              (e.xMin = o.parseShort()),
              (e.yMin = o.parseShort()),
              (e.xMax = o.parseShort()),
              (e.yMax = o.parseShort()),
              0 < e.numberOfContours)
            ) {
              var i = (e.endPointIndices = []);
              for (d = 0; d < e.numberOfContours; d += 1)
                i.push(o.parseUShort());
              for (
                e.instructionLength = o.parseUShort(),
                  e.instructions = [],
                  d = 0;
                d < e.instructionLength;
                d += 1
              )
                e.instructions.push(o.parseByte());
              var s = i[i.length - 1] + 1,
                a = [];
              for (d = 0; d < s; d += 1)
                if (((n = o.parseByte()), a.push(n), 0 < (8 & n)))
                  for (var h = o.parseByte(), l = 0; l < h; l += 1)
                    a.push(n), (d += 1);
              if ((y.argument(a.length === s, "Bad flags."), 0 < i.length)) {
                var p,
                  u = [];
                if (0 < s) {
                  for (d = 0; d < s; d += 1)
                    (n = a[d]),
                      ((p = {}).onCurve = !!(1 & n)),
                      (p.lastPointOfContour = 0 <= i.indexOf(d)),
                      u.push(p);
                  for (var c = 0, d = 0; d < s; d += 1)
                    (n = a[d]), ((p = u[d]).x = x(o, n, c, 2, 16)), (c = p.x);
                  var f = 0;
                  for (d = 0; d < s; d += 1)
                    (n = a[d]), ((p = u[d]).y = x(o, n, f, 4, 32)), (f = p.y);
                }
                e.points = u;
              } else e.points = [];
            } else if (0 === e.numberOfContours) e.points = [];
            else {
              (e.isComposite = !0), (e.points = []), (e.components = []);
              for (var m = !0; m; ) {
                a = o.parseUShort();
                var g = {
                  glyphIndex: o.parseUShort(),
                  xScale: 1,
                  scale01: 0,
                  scale10: 0,
                  yScale: 1,
                  dx: 0,
                  dy: 0,
                };
                0 < (1 & a)
                  ? ((g.dx = o.parseShort()), (g.dy = o.parseShort()))
                  : ((g.dx = o.parseChar()), (g.dy = o.parseChar())),
                  0 < (8 & a)
                    ? (g.xScale = g.yScale = o.parseF2Dot14())
                    : 0 < (64 & a)
                    ? ((g.xScale = o.parseF2Dot14()),
                      (g.yScale = o.parseF2Dot14()))
                    : 0 < (128 & a) &&
                      ((g.xScale = o.parseF2Dot14()),
                      (g.scale01 = o.parseF2Dot14()),
                      (g.scale10 = o.parseF2Dot14()),
                      (g.yScale = o.parseF2Dot14())),
                  e.components.push(g),
                  (m = !!(32 & a));
              }
            }
          }
          function i(e) {
            var t = new d.Path();
            if (!e) return t;
            for (
              var r = (function (e) {
                  for (var t = [], r = [], n = 0; n < e.length; n += 1) {
                    var o = e[n];
                    r.push(o), o.lastPointOfContour && (t.push(r), (r = []));
                  }
                  return (
                    y.argument(
                      0 === r.length,
                      "There are still points left in the current contour."
                    ),
                    t
                  );
                })(e),
                n = 0;
              n < r.length;
              n += 1
            ) {
              var o,
                i = r[n],
                s = i[0],
                a = i[i.length - 1],
                h = s.onCurve
                  ? !(o = null)
                  : ((o = s =
                      a.onCurve
                        ? a
                        : { x: (s.x + a.x) / 2, y: (s.y + a.y) / 2 }),
                    !1);
              t.moveTo(s.x, s.y);
              for (var l = h ? 1 : 0; l < i.length; l += 1) {
                var p = i[l],
                  u = 0 === l ? s : i[l - 1];
                if (u.onCurve && p.onCurve) t.lineTo(p.x, p.y);
                else if (u.onCurve && !p.onCurve) o = p;
                else if (u.onCurve || p.onCurve) {
                  if (u.onCurve || !p.onCurve)
                    throw new Error("Invalid state.");
                  t.quadraticCurveTo(o.x, o.y, p.x, p.y), (o = null);
                } else {
                  var c = { x: (u.x + p.x) / 2, y: (u.y + p.y) / 2 };
                  t.quadraticCurveTo(u.x, u.y, c.x, c.y), (o = p);
                }
              }
              s !== a &&
                (o
                  ? t.quadraticCurveTo(o.x, o.y, s.x, s.y)
                  : t.lineTo(s.x, s.y));
            }
            return t.closePath(), t;
          }
          function l(e, t) {
            if (t.isComposite)
              for (var r = 0; r < t.components.length; r += 1) {
                var n = t.components[r],
                  o = e.get(n.glyphIndex);
                o.points &&
                  ((n = (function (e, t) {
                    for (var r = [], n = 0; n < e.length; n += 1) {
                      var o = e[n],
                        o = {
                          x: t.xScale * o.x + t.scale01 * o.y + t.dx,
                          y: t.scale10 * o.x + t.yScale * o.y + t.dy,
                          onCurve: o.onCurve,
                          lastPointOfContour: o.lastPointOfContour,
                        };
                      r.push(o);
                    }
                    return r;
                  })(o.points, n)),
                  (t.points = t.points.concat(n)));
              }
            return i(t.points);
          }
          r.parse = function (e, t, r, n) {
            for (var o = new a.GlyphSet(n), i = 0; i < r.length - 1; i += 1) {
              var s = r[i];
              s !== r[i + 1]
                ? o.push(i, a.ttfGlyphLoader(n, i, h, e, t + s, l))
                : o.push(i, a.glyphLoader(n, i));
            }
            return o;
          };
        },
        { "../check": 2, "../glyphset": 7, "../parse": 9, "../path": 10 },
      ],
      15: [
        function (e, t, r) {
          "use strict";
          var p = e("../check"),
            R = e("../parse");
          function u(e, t) {
            for (
              var r = new R.Parser(e, t), n = r.parseUShort(), o = [], i = 0;
              i < n;
              i++
            )
              o[r.parseTag()] = { offset: r.parseUShort() };
            return o;
          }
          function E(e, t) {
            var r = new R.Parser(e, t),
              e = r.parseUShort();
            if (1 === e) {
              var n = r.parseUShort(),
                t = r.parseUShort(),
                o = r.parseUShortList(t);
              return function (e) {
                return o[e - n] || 0;
              };
            }
            if (2 === e) {
              for (
                var i = r.parseUShort(), s = [], a = [], h = [], l = 0;
                l < i;
                l++
              )
                (s[l] = r.parseUShort()),
                  (a[l] = r.parseUShort()),
                  (h[l] = r.parseUShort());
              return function (e) {
                for (var t = 0, r = s.length - 1; t < r; ) {
                  var n = (t + r + 1) >> 1;
                  e < s[n] ? (r = n - 1) : (t = n);
                }
                return (s[t] <= e && e <= a[t] && h[t]) || 0;
              };
            }
          }
          function c(e, t) {
            var r,
              n = new R.Parser(e, t),
              o = n.parseUShort(),
              i = (function (e, t) {
                var r = new R.Parser(e, t),
                  t = r.parseUShort(),
                  n = r.parseUShort();
                if (1 === t) return r.parseUShortList(n);
                if (2 === t) {
                  for (var o = []; n--; )
                    for (
                      var i = r.parseUShort(),
                        s = r.parseUShort(),
                        a = r.parseUShort(),
                        h = i;
                      h <= s;
                      h++
                    )
                      o[a++] = h;
                  return o;
                }
              })(e, t + n.parseUShort()),
              s = n.parseUShort(),
              a = n.parseUShort();
            if (4 === s && 0 === a) {
              var h = {};
              if (1 === o) {
                for (
                  var l = n.parseUShort(),
                    p = [],
                    u = n.parseOffset16List(l),
                    c = 0;
                  c < l;
                  c++
                ) {
                  var d = u[c],
                    f = h[d];
                  if (!f) {
                    (f = {}), (n.relativeOffset = d);
                    for (var m = n.parseUShort(); m--; ) {
                      var g = n.parseUShort();
                      s && (r = n.parseShort()),
                        a && n.parseShort(),
                        (f[g] = r);
                    }
                  }
                  p[i[c]] = f;
                }
                return function (e, t) {
                  e = p[e];
                  if (e) return e[t];
                };
              }
              if (2 === o) {
                for (
                  var y = n.parseUShort(),
                    o = n.parseUShort(),
                    v = n.parseUShort(),
                    x = n.parseUShort(),
                    _ = E(e, t + y),
                    w = E(e, t + o),
                    b = [],
                    S = 0;
                  S < v;
                  S++
                )
                  for (var M = (b[S] = []), T = 0; T < x; T++)
                    s && (r = n.parseShort()), a && n.parseShort(), (M[T] = r);
                for (var C = {}, S = 0; S < i.length; S++) C[i[S]] = 1;
                return function (e, t) {
                  if (C[e]) {
                    (e = _(e)), (t = w(t)), (e = b[e]);
                    return e ? e[t] : void 0;
                  }
                };
              }
            }
          }
          r.parse = function (e, t, r) {
            var n = new R.Parser(e, t),
              o = n.parseFixed();
            p.argument(1 === o, "Unsupported GPOS table version."),
              u(e, t + n.parseUShort()),
              u(e, t + n.parseUShort()),
              (o = n.parseUShort()),
              (n.relativeOffset = o);
            for (
              var i = n.parseUShort(),
                s = n.parseOffset16List(i),
                a = t + o,
                h = 0;
              h < i;
              h++
            ) {
              var l = (function (e, t) {
                var r = (a = new R.Parser(e, t)).parseUShort(),
                  n = a.parseUShort(),
                  o = 16 & n,
                  i = a.parseUShort(),
                  s = a.parseOffset16List(i),
                  a = {
                    lookupType: r,
                    lookupFlag: n,
                    markFilteringSet: o ? a.parseUShort() : -1,
                  };
                if (2 === r) {
                  for (var h = [], l = 0; l < i; l++) h.push(c(e, t + s[l]));
                  a.getKerningValue = function (e, t) {
                    for (var r = h.length; r--; ) {
                      var n = h[r](e, t);
                      if (void 0 !== n) return n;
                    }
                    return 0;
                  };
                }
                return a;
              })(e, a + s[h]);
              2 !== l.lookupType ||
                r.getGposKerningValue ||
                (r.getGposKerningValue = l.getKerningValue);
            }
          };
        },
        { "../check": 2, "../parse": 9 },
      ],
      16: [
        function (e, t, r) {
          "use strict";
          var n = e("../check"),
            o = e("../parse"),
            i = e("../table");
          (r.parse = function (e, t) {
            var r = {},
              t = new o.Parser(e, t);
            return (
              (r.version = t.parseVersion()),
              (r.fontRevision = Math.round(1e3 * t.parseFixed()) / 1e3),
              (r.checkSumAdjustment = t.parseULong()),
              (r.magicNumber = t.parseULong()),
              n.argument(
                1594834165 === r.magicNumber,
                "Font header has wrong magic number."
              ),
              (r.flags = t.parseUShort()),
              (r.unitsPerEm = t.parseUShort()),
              (r.created = t.parseLongDateTime()),
              (r.modified = t.parseLongDateTime()),
              (r.xMin = t.parseShort()),
              (r.yMin = t.parseShort()),
              (r.xMax = t.parseShort()),
              (r.yMax = t.parseShort()),
              (r.macStyle = t.parseUShort()),
              (r.lowestRecPPEM = t.parseUShort()),
              (r.fontDirectionHint = t.parseShort()),
              (r.indexToLocFormat = t.parseShort()),
              (r.glyphDataFormat = t.parseShort()),
              r
            );
          }),
            (r.make = function (e) {
              return new i.Table(
                "head",
                [
                  { name: "version", type: "FIXED", value: 65536 },
                  { name: "fontRevision", type: "FIXED", value: 65536 },
                  { name: "checkSumAdjustment", type: "ULONG", value: 0 },
                  { name: "magicNumber", type: "ULONG", value: 1594834165 },
                  { name: "flags", type: "USHORT", value: 0 },
                  { name: "unitsPerEm", type: "USHORT", value: 1e3 },
                  { name: "created", type: "LONGDATETIME", value: 0 },
                  { name: "modified", type: "LONGDATETIME", value: 0 },
                  { name: "xMin", type: "SHORT", value: 0 },
                  { name: "yMin", type: "SHORT", value: 0 },
                  { name: "xMax", type: "SHORT", value: 0 },
                  { name: "yMax", type: "SHORT", value: 0 },
                  { name: "macStyle", type: "USHORT", value: 0 },
                  { name: "lowestRecPPEM", type: "USHORT", value: 0 },
                  { name: "fontDirectionHint", type: "SHORT", value: 2 },
                  { name: "indexToLocFormat", type: "SHORT", value: 0 },
                  { name: "glyphDataFormat", type: "SHORT", value: 0 },
                ],
                e
              );
            });
        },
        { "../check": 2, "../parse": 9, "../table": 11 },
      ],
      17: [
        function (e, t, r) {
          "use strict";
          var n = e("../parse"),
            o = e("../table");
          (r.parse = function (e, t) {
            var r = {},
              t = new n.Parser(e, t);
            return (
              (r.version = t.parseVersion()),
              (r.ascender = t.parseShort()),
              (r.descender = t.parseShort()),
              (r.lineGap = t.parseShort()),
              (r.advanceWidthMax = t.parseUShort()),
              (r.minLeftSideBearing = t.parseShort()),
              (r.minRightSideBearing = t.parseShort()),
              (r.xMaxExtent = t.parseShort()),
              (r.caretSlopeRise = t.parseShort()),
              (r.caretSlopeRun = t.parseShort()),
              (r.caretOffset = t.parseShort()),
              (t.relativeOffset += 8),
              (r.metricDataFormat = t.parseShort()),
              (r.numberOfHMetrics = t.parseUShort()),
              r
            );
          }),
            (r.make = function (e) {
              return new o.Table(
                "hhea",
                [
                  { name: "version", type: "FIXED", value: 65536 },
                  { name: "ascender", type: "FWORD", value: 0 },
                  { name: "descender", type: "FWORD", value: 0 },
                  { name: "lineGap", type: "FWORD", value: 0 },
                  { name: "advanceWidthMax", type: "UFWORD", value: 0 },
                  { name: "minLeftSideBearing", type: "FWORD", value: 0 },
                  { name: "minRightSideBearing", type: "FWORD", value: 0 },
                  { name: "xMaxExtent", type: "FWORD", value: 0 },
                  { name: "caretSlopeRise", type: "SHORT", value: 1 },
                  { name: "caretSlopeRun", type: "SHORT", value: 0 },
                  { name: "caretOffset", type: "SHORT", value: 0 },
                  { name: "reserved1", type: "SHORT", value: 0 },
                  { name: "reserved2", type: "SHORT", value: 0 },
                  { name: "reserved3", type: "SHORT", value: 0 },
                  { name: "reserved4", type: "SHORT", value: 0 },
                  { name: "metricDataFormat", type: "SHORT", value: 0 },
                  { name: "numberOfHMetrics", type: "USHORT", value: 0 },
                ],
                e
              );
            });
        },
        { "../parse": 9, "../table": 11 },
      ],
      18: [
        function (e, t, r) {
          "use strict";
          var p = e("../parse"),
            i = e("../table");
          (r.parse = function (e, t, r, n, o) {
            for (var i, s, a = new p.Parser(e, t), h = 0; h < n; h += 1) {
              h < r && ((i = a.parseUShort()), (s = a.parseShort()));
              var l = o.get(h);
              (l.advanceWidth = i), (l.leftSideBearing = s);
            }
          }),
            (r.make = function (e) {
              for (
                var t = new i.Table("hmtx", []), r = 0;
                r < e.length;
                r += 1
              ) {
                var n = e.get(r),
                  o = n.advanceWidth || 0,
                  n = n.leftSideBearing || 0;
                t.fields.push({
                  name: "advanceWidth_" + r,
                  type: "USHORT",
                  value: o,
                }),
                  t.fields.push({
                    name: "leftSideBearing_" + r,
                    type: "SHORT",
                    value: n,
                  });
              }
              return t;
            });
        },
        { "../parse": 9, "../table": 11 },
      ],
      19: [
        function (e, t, r) {
          "use strict";
          var l = e("../check"),
            p = e("../parse");
          r.parse = function (e, t) {
            var r = {},
              n = new p.Parser(e, t),
              t = n.parseUShort();
            l.argument(0 === t, "Unsupported kern table version."),
              n.skip("uShort", 1),
              (t = n.parseUShort()),
              l.argument(0 === t, "Unsupported kern sub-table version."),
              n.skip("uShort", 2);
            var o = n.parseUShort();
            n.skip("uShort", 3);
            for (var i = 0; i < o; i += 1) {
              var s = n.parseUShort(),
                a = n.parseUShort(),
                h = n.parseShort();
              r[s + "," + a] = h;
            }
            return r;
          };
        },
        { "../check": 2, "../parse": 9 },
      ],
      20: [
        function (e, t, r) {
          "use strict";
          var l = e("../parse");
          r.parse = function (e, t, r, n) {
            for (
              var o = new l.Parser(e, t),
                i = n ? o.parseUShort : o.parseULong,
                s = [],
                a = 0;
              a < r + 1;
              a += 1
            ) {
              var h = i.call(o);
              n && (h *= 2), s.push(h);
            }
            return s;
          };
        },
        { "../parse": 9 },
      ],
      21: [
        function (e, t, r) {
          "use strict";
          var n = e("../parse"),
            o = e("../table");
          (r.parse = function (e, t) {
            var r = {},
              t = new n.Parser(e, t);
            return (
              (r.version = t.parseVersion()),
              (r.numGlyphs = t.parseUShort()),
              1 === r.version &&
                ((r.maxPoints = t.parseUShort()),
                (r.maxContours = t.parseUShort()),
                (r.maxCompositePoints = t.parseUShort()),
                (r.maxCompositeContours = t.parseUShort()),
                (r.maxZones = t.parseUShort()),
                (r.maxTwilightPoints = t.parseUShort()),
                (r.maxStorage = t.parseUShort()),
                (r.maxFunctionDefs = t.parseUShort()),
                (r.maxInstructionDefs = t.parseUShort()),
                (r.maxStackElements = t.parseUShort()),
                (r.maxSizeOfInstructions = t.parseUShort()),
                (r.maxComponentElements = t.parseUShort()),
                (r.maxComponentDepth = t.parseUShort())),
              r
            );
          }),
            (r.make = function (e) {
              return new o.Table("maxp", [
                { name: "version", type: "FIXED", value: 20480 },
                { name: "numGlyphs", type: "USHORT", value: e },
              ]);
            });
        },
        { "../parse": 9, "../table": 11 },
      ],
      22: [
        function (e, t, r) {
          "use strict";
          var d = e("../types").encode,
            y = e("../parse"),
            f = e("../table"),
            v = [
              "copyright",
              "fontFamily",
              "fontSubfamily",
              "uniqueID",
              "fullName",
              "version",
              "postScriptName",
              "trademark",
              "manufacturer",
              "designer",
              "description",
              "manufacturerURL",
              "designerURL",
              "licence",
              "licenceURL",
              "reserved",
              "preferredFamily",
              "preferredSubfamily",
              "compatibleFullName",
              "sampleText",
              "postScriptFindFontName",
              "wwsFamily",
              "wwsSubfamily",
            ];
          function m(e, t, r, n, o, i) {
            return new f.Table("NameRecord", [
              { name: "platformID", type: "USHORT", value: e },
              { name: "encodingID", type: "USHORT", value: t },
              { name: "languageID", type: "USHORT", value: r },
              { name: "nameID", type: "USHORT", value: n },
              { name: "length", type: "USHORT", value: o },
              { name: "offset", type: "USHORT", value: i },
            ]);
          }
          (r.parse = function (e, t) {
            var r = {},
              n = new y.Parser(e, t);
            r.format = n.parseUShort();
            for (
              var o = n.parseUShort(),
                i = n.offset + n.parseUShort(),
                s = 0,
                a = 0;
              a < o;
              a++
            ) {
              var h = n.parseUShort(),
                l = n.parseUShort(),
                p = n.parseUShort(),
                u = n.parseUShort(),
                c = v[u],
                u = n.parseUShort(),
                d = n.parseUShort();
              if (3 === h && 1 === l && 1033 === p) {
                for (var f = [], m = u / 2, g = 0; g < m; g++, d += 2)
                  f[g] = y.getShort(e, i + d);
                u = String.fromCharCode.apply(null, f);
                c ? (r[c] = u) : (r["unknown" + ++s] = u);
              }
            }
            return 1 === r.format && (r.langTagCount = n.parseUShort()), r;
          }),
            (r.make = function (e) {
              var t = new f.Table("name", [
                { name: "format", type: "USHORT", value: 0 },
                { name: "count", type: "USHORT", value: 0 },
                { name: "stringOffset", type: "USHORT", value: 0 },
              ]);
              (t.records = []), (t.strings = []);
              for (
                var r, n, o, i, s, a, h, l, p, u = 0, c = 0;
                c < v.length;
                c += 1
              )
                void 0 !== e[v[c]] &&
                  ((r = e[v[c]]),
                  (n = t),
                  (o = c),
                  (i = r),
                  (s = u),
                  (i = d.STRING(i)),
                  n.records.push(m(1, 0, 0, o, i.length, s)),
                  n.strings.push(i),
                  (u = s += i.length));
              for (c = 0; c < v.length; c += 1)
                void 0 !== e[v[c]] &&
                  ((r = e[v[c]]),
                  (a = t),
                  (h = c),
                  (l = r),
                  (p = u),
                  (l = d.UTF16(l)),
                  a.records.push(m(3, 1, 1033, h, l.length, p)),
                  a.strings.push(l),
                  (u = p += l.length));
              for (
                t.count = t.records.length,
                  t.stringOffset = 6 + 12 * t.count,
                  c = 0;
                c < t.records.length;
                c += 1
              )
                t.fields.push({
                  name: "record_" + c,
                  type: "TABLE",
                  value: t.records[c],
                });
              for (c = 0; c < t.strings.length; c += 1)
                t.fields.push({
                  name: "string_" + c,
                  type: "LITERAL",
                  value: t.strings[c],
                });
              return t;
            });
        },
        { "../parse": 9, "../table": 11, "../types": 26 },
      ],
      23: [
        function (e, t, r) {
          "use strict";
          var i = e("../parse"),
            n = e("../table"),
            o = [
              { begin: 0, end: 127 },
              { begin: 128, end: 255 },
              { begin: 256, end: 383 },
              { begin: 384, end: 591 },
              { begin: 592, end: 687 },
              { begin: 688, end: 767 },
              { begin: 768, end: 879 },
              { begin: 880, end: 1023 },
              { begin: 11392, end: 11519 },
              { begin: 1024, end: 1279 },
              { begin: 1328, end: 1423 },
              { begin: 1424, end: 1535 },
              { begin: 42240, end: 42559 },
              { begin: 1536, end: 1791 },
              { begin: 1984, end: 2047 },
              { begin: 2304, end: 2431 },
              { begin: 2432, end: 2559 },
              { begin: 2560, end: 2687 },
              { begin: 2688, end: 2815 },
              { begin: 2816, end: 2943 },
              { begin: 2944, end: 3071 },
              { begin: 3072, end: 3199 },
              { begin: 3200, end: 3327 },
              { begin: 3328, end: 3455 },
              { begin: 3584, end: 3711 },
              { begin: 3712, end: 3839 },
              { begin: 4256, end: 4351 },
              { begin: 6912, end: 7039 },
              { begin: 4352, end: 4607 },
              { begin: 7680, end: 7935 },
              { begin: 7936, end: 8191 },
              { begin: 8192, end: 8303 },
              { begin: 8304, end: 8351 },
              { begin: 8352, end: 8399 },
              { begin: 8400, end: 8447 },
              { begin: 8448, end: 8527 },
              { begin: 8528, end: 8591 },
              { begin: 8592, end: 8703 },
              { begin: 8704, end: 8959 },
              { begin: 8960, end: 9215 },
              { begin: 9216, end: 9279 },
              { begin: 9280, end: 9311 },
              { begin: 9312, end: 9471 },
              { begin: 9472, end: 9599 },
              { begin: 9600, end: 9631 },
              { begin: 9632, end: 9727 },
              { begin: 9728, end: 9983 },
              { begin: 9984, end: 10175 },
              { begin: 12288, end: 12351 },
              { begin: 12352, end: 12447 },
              { begin: 12448, end: 12543 },
              { begin: 12544, end: 12591 },
              { begin: 12592, end: 12687 },
              { begin: 43072, end: 43135 },
              { begin: 12800, end: 13055 },
              { begin: 13056, end: 13311 },
              { begin: 44032, end: 55215 },
              { begin: 55296, end: 57343 },
              { begin: 67840, end: 67871 },
              { begin: 19968, end: 40959 },
              { begin: 57344, end: 63743 },
              { begin: 12736, end: 12783 },
              { begin: 64256, end: 64335 },
              { begin: 64336, end: 65023 },
              { begin: 65056, end: 65071 },
              { begin: 65040, end: 65055 },
              { begin: 65104, end: 65135 },
              { begin: 65136, end: 65279 },
              { begin: 65280, end: 65519 },
              { begin: 65520, end: 65535 },
              { begin: 3840, end: 4095 },
              { begin: 1792, end: 1871 },
              { begin: 1920, end: 1983 },
              { begin: 3456, end: 3583 },
              { begin: 4096, end: 4255 },
              { begin: 4608, end: 4991 },
              { begin: 5024, end: 5119 },
              { begin: 5120, end: 5759 },
              { begin: 5760, end: 5791 },
              { begin: 5792, end: 5887 },
              { begin: 6016, end: 6143 },
              { begin: 6144, end: 6319 },
              { begin: 10240, end: 10495 },
              { begin: 40960, end: 42127 },
              { begin: 5888, end: 5919 },
              { begin: 66304, end: 66351 },
              { begin: 66352, end: 66383 },
              { begin: 66560, end: 66639 },
              { begin: 118784, end: 119039 },
              { begin: 119808, end: 120831 },
              { begin: 1044480, end: 1048573 },
              { begin: 65024, end: 65039 },
              { begin: 917504, end: 917631 },
              { begin: 6400, end: 6479 },
              { begin: 6480, end: 6527 },
              { begin: 6528, end: 6623 },
              { begin: 6656, end: 6687 },
              { begin: 11264, end: 11359 },
              { begin: 11568, end: 11647 },
              { begin: 19904, end: 19967 },
              { begin: 43008, end: 43055 },
              { begin: 65536, end: 65663 },
              { begin: 65856, end: 65935 },
              { begin: 66432, end: 66463 },
              { begin: 66464, end: 66527 },
              { begin: 66640, end: 66687 },
              { begin: 66688, end: 66735 },
              { begin: 67584, end: 67647 },
              { begin: 68096, end: 68191 },
              { begin: 119552, end: 119647 },
              { begin: 73728, end: 74751 },
              { begin: 119648, end: 119679 },
              { begin: 7040, end: 7103 },
              { begin: 7168, end: 7247 },
              { begin: 7248, end: 7295 },
              { begin: 43136, end: 43231 },
              { begin: 43264, end: 43311 },
              { begin: 43312, end: 43359 },
              { begin: 43520, end: 43615 },
              { begin: 65936, end: 65999 },
              { begin: 66e3, end: 66047 },
              { begin: 66208, end: 66271 },
              { begin: 127024, end: 127135 },
            ];
          (r.unicodeRanges = o),
            (r.getUnicodeRange = function (e) {
              for (var t = 0; t < o.length; t += 1) {
                var r = o[t];
                if (e >= r.begin && e < r.end) return t;
              }
              return -1;
            }),
            (r.parse = function (e, t) {
              var r = {},
                n = new i.Parser(e, t);
              (r.version = n.parseUShort()),
                (r.xAvgCharWidth = n.parseShort()),
                (r.usWeightClass = n.parseUShort()),
                (r.usWidthClass = n.parseUShort()),
                (r.fsType = n.parseUShort()),
                (r.ySubscriptXSize = n.parseShort()),
                (r.ySubscriptYSize = n.parseShort()),
                (r.ySubscriptXOffset = n.parseShort()),
                (r.ySubscriptYOffset = n.parseShort()),
                (r.ySuperscriptXSize = n.parseShort()),
                (r.ySuperscriptYSize = n.parseShort()),
                (r.ySuperscriptXOffset = n.parseShort()),
                (r.ySuperscriptYOffset = n.parseShort()),
                (r.yStrikeoutSize = n.parseShort()),
                (r.yStrikeoutPosition = n.parseShort()),
                (r.sFamilyClass = n.parseShort()),
                (r.panose = []);
              for (var o = 0; o < 10; o++) r.panose[o] = n.parseByte();
              return (
                (r.ulUnicodeRange1 = n.parseULong()),
                (r.ulUnicodeRange2 = n.parseULong()),
                (r.ulUnicodeRange3 = n.parseULong()),
                (r.ulUnicodeRange4 = n.parseULong()),
                (r.achVendID = String.fromCharCode(
                  n.parseByte(),
                  n.parseByte(),
                  n.parseByte(),
                  n.parseByte()
                )),
                (r.fsSelection = n.parseUShort()),
                (r.usFirstCharIndex = n.parseUShort()),
                (r.usLastCharIndex = n.parseUShort()),
                (r.sTypoAscender = n.parseShort()),
                (r.sTypoDescender = n.parseShort()),
                (r.sTypoLineGap = n.parseShort()),
                (r.usWinAscent = n.parseUShort()),
                (r.usWinDescent = n.parseUShort()),
                1 <= r.version &&
                  ((r.ulCodePageRange1 = n.parseULong()),
                  (r.ulCodePageRange2 = n.parseULong())),
                2 <= r.version &&
                  ((r.sxHeight = n.parseShort()),
                  (r.sCapHeight = n.parseShort()),
                  (r.usDefaultChar = n.parseUShort()),
                  (r.usBreakChar = n.parseUShort()),
                  (r.usMaxContent = n.parseUShort())),
                r
              );
            }),
            (r.make = function (e) {
              return new n.Table(
                "OS/2",
                [
                  { name: "version", type: "USHORT", value: 3 },
                  { name: "xAvgCharWidth", type: "SHORT", value: 0 },
                  { name: "usWeightClass", type: "USHORT", value: 0 },
                  { name: "usWidthClass", type: "USHORT", value: 0 },
                  { name: "fsType", type: "USHORT", value: 0 },
                  { name: "ySubscriptXSize", type: "SHORT", value: 650 },
                  { name: "ySubscriptYSize", type: "SHORT", value: 699 },
                  { name: "ySubscriptXOffset", type: "SHORT", value: 0 },
                  { name: "ySubscriptYOffset", type: "SHORT", value: 140 },
                  { name: "ySuperscriptXSize", type: "SHORT", value: 650 },
                  { name: "ySuperscriptYSize", type: "SHORT", value: 699 },
                  { name: "ySuperscriptXOffset", type: "SHORT", value: 0 },
                  { name: "ySuperscriptYOffset", type: "SHORT", value: 479 },
                  { name: "yStrikeoutSize", type: "SHORT", value: 49 },
                  { name: "yStrikeoutPosition", type: "SHORT", value: 258 },
                  { name: "sFamilyClass", type: "SHORT", value: 0 },
                  { name: "bFamilyType", type: "BYTE", value: 0 },
                  { name: "bSerifStyle", type: "BYTE", value: 0 },
                  { name: "bWeight", type: "BYTE", value: 0 },
                  { name: "bProportion", type: "BYTE", value: 0 },
                  { name: "bContrast", type: "BYTE", value: 0 },
                  { name: "bStrokeVariation", type: "BYTE", value: 0 },
                  { name: "bArmStyle", type: "BYTE", value: 0 },
                  { name: "bLetterform", type: "BYTE", value: 0 },
                  { name: "bMidline", type: "BYTE", value: 0 },
                  { name: "bXHeight", type: "BYTE", value: 0 },
                  { name: "ulUnicodeRange1", type: "ULONG", value: 0 },
                  { name: "ulUnicodeRange2", type: "ULONG", value: 0 },
                  { name: "ulUnicodeRange3", type: "ULONG", value: 0 },
                  { name: "ulUnicodeRange4", type: "ULONG", value: 0 },
                  { name: "achVendID", type: "CHARARRAY", value: "XXXX" },
                  { name: "fsSelection", type: "USHORT", value: 0 },
                  { name: "usFirstCharIndex", type: "USHORT", value: 0 },
                  { name: "usLastCharIndex", type: "USHORT", value: 0 },
                  { name: "sTypoAscender", type: "SHORT", value: 0 },
                  { name: "sTypoDescender", type: "SHORT", value: 0 },
                  { name: "sTypoLineGap", type: "SHORT", value: 0 },
                  { name: "usWinAscent", type: "USHORT", value: 0 },
                  { name: "usWinDescent", type: "USHORT", value: 0 },
                  { name: "ulCodePageRange1", type: "ULONG", value: 0 },
                  { name: "ulCodePageRange2", type: "ULONG", value: 0 },
                  { name: "sxHeight", type: "SHORT", value: 0 },
                  { name: "sCapHeight", type: "SHORT", value: 0 },
                  { name: "usDefaultChar", type: "USHORT", value: 0 },
                  { name: "usBreakChar", type: "USHORT", value: 0 },
                  { name: "usMaxContext", type: "USHORT", value: 0 },
                ],
                e
              );
            });
        },
        { "../parse": 9, "../table": 11 },
      ],
      24: [
        function (e, t, r) {
          "use strict";
          var s = e("../encoding"),
            a = e("../parse"),
            n = e("../table");
          (r.parse = function (e, t) {
            var r,
              n,
              o = {},
              i = new a.Parser(e, t);
            switch (
              ((o.version = i.parseVersion()),
              (o.italicAngle = i.parseFixed()),
              (o.underlinePosition = i.parseShort()),
              (o.underlineThickness = i.parseShort()),
              (o.isFixedPitch = i.parseULong()),
              (o.minMemType42 = i.parseULong()),
              (o.maxMemType42 = i.parseULong()),
              (o.minMemType1 = i.parseULong()),
              (o.maxMemType1 = i.parseULong()),
              o.version)
            ) {
              case 1:
                o.names = s.standardNames.slice();
                break;
              case 2:
                for (
                  o.numberOfGlyphs = i.parseUShort(),
                    o.glyphNameIndex = new Array(o.numberOfGlyphs),
                    r = 0;
                  r < o.numberOfGlyphs;
                  r++
                )
                  o.glyphNameIndex[r] = i.parseUShort();
                for (o.names = [], r = 0; r < o.numberOfGlyphs; r++)
                  o.glyphNameIndex[r] >= s.standardNames.length &&
                    ((n = i.parseChar()), o.names.push(i.parseString(n)));
                break;
              case 2.5:
                for (
                  o.numberOfGlyphs = i.parseUShort(),
                    o.offset = new Array(o.numberOfGlyphs),
                    r = 0;
                  r < o.numberOfGlyphs;
                  r++
                )
                  o.offset[r] = i.parseChar();
            }
            return o;
          }),
            (r.make = function () {
              return new n.Table("post", [
                { name: "version", type: "FIXED", value: 196608 },
                { name: "italicAngle", type: "FIXED", value: 0 },
                { name: "underlinePosition", type: "FWORD", value: 0 },
                { name: "underlineThickness", type: "FWORD", value: 0 },
                { name: "isFixedPitch", type: "ULONG", value: 0 },
                { name: "minMemType42", type: "ULONG", value: 0 },
                { name: "maxMemType42", type: "ULONG", value: 0 },
                { name: "minMemType1", type: "ULONG", value: 0 },
                { name: "maxMemType1", type: "ULONG", value: 0 },
              ]);
            });
        },
        { "../encoding": 4, "../parse": 9, "../table": 11 },
      ],
      25: [
        function (e, t, r) {
          "use strict";
          var p = e("../check"),
            u = e("../table"),
            E = e("./cmap"),
            A = e("./cff"),
            L = e("./head"),
            I = e("./hhea"),
            P = e("./hmtx"),
            D = e("./maxp"),
            O = e("./name"),
            k = e("./os2"),
            U = e("./post");
          function c(e) {
            return (Math.log(e) / Math.log(2)) | 0;
          }
          function N(e) {
            for (; e.length % 4 != 0; ) e.push(0);
            for (var t = 0, r = 0; r < e.length; r += 4)
              t += (e[r] << 24) + (e[r + 1] << 16) + (e[r + 2] << 8) + e[r + 3];
            return (t %= Math.pow(2, 32));
          }
          function d(e, t, r, n) {
            return new u.Table("Table Record", [
              { name: "tag", type: "TAG", value: void 0 !== e ? e : "" },
              { name: "checkSum", type: "ULONG", value: void 0 !== t ? t : 0 },
              { name: "offset", type: "ULONG", value: void 0 !== r ? r : 0 },
              { name: "length", type: "ULONG", value: void 0 !== n ? n : 0 },
            ]);
          }
          function F(e) {
            var t = new u.Table("sfnt", [
              { name: "version", type: "TAG", value: "OTTO" },
              { name: "numTables", type: "USHORT", value: 0 },
              { name: "searchRange", type: "USHORT", value: 0 },
              { name: "entrySelector", type: "USHORT", value: 0 },
              { name: "rangeShift", type: "USHORT", value: 0 },
            ]);
            (t.tables = e), (t.numTables = e.length);
            var r = Math.pow(2, c(t.numTables));
            (t.searchRange = 16 * r),
              (t.entrySelector = c(r)),
              (t.rangeShift = 16 * t.numTables - t.searchRange);
            for (
              var n = [], o = [], i = t.sizeOf() + d().sizeOf() * t.numTables;
              i % 4 != 0;

            )
              (i += 1), o.push({ name: "padding", type: "BYTE", value: 0 });
            for (var s = 0; s < e.length; s += 1) {
              var a = e[s];
              p.argument(
                4 === a.tableName.length,
                "Table name" + a.tableName + " is invalid."
              );
              var h = a.sizeOf(),
                l = d(a.tableName, N(a.encode()), i, h);
              for (
                n.push({
                  name: l.tag + " Table Record",
                  type: "TABLE",
                  value: l,
                }),
                  o.push({
                    name: a.tableName + " table",
                    type: "TABLE",
                    value: a,
                  }),
                  i += h,
                  p.argument(
                    !isNaN(i),
                    "Something went wrong calculating the offset."
                  );
                i % 4 != 0;

              )
                (i += 1), o.push({ name: "padding", type: "BYTE", value: 0 });
            }
            return (
              n.sort(function (e, t) {
                return e.value.tag > t.value.tag ? 1 : -1;
              }),
              (t.fields = t.fields.concat(n)),
              (t.fields = t.fields.concat(o)),
              t
            );
          }
          function B(e, t, r) {
            for (var n = 0; n < t.length; n += 1) {
              var o = e.charToGlyphIndex(t[n]);
              if (0 < o) return e.glyphs.get(o).getMetrics();
            }
            return r;
          }
          (r.computeCheckSum = N),
            (r.make = F),
            (r.fontToTable = function (e) {
              for (
                var t,
                  r = [],
                  n = [],
                  o = [],
                  i = [],
                  s = [],
                  a = [],
                  h = [],
                  l = 0,
                  p = 0,
                  u = 0,
                  c = 0,
                  d = 0,
                  f = 0;
                f < e.glyphs.length;
                f += 1
              ) {
                var m = e.glyphs.get(f),
                  g = 0 | m.unicode;
                (g < t || null === t) && (t = g), l < g && (l = g);
                g = k.getUnicodeRange(g);
                if (g < 32) p |= 1 << g;
                else if (g < 64) u |= 1 << (g - 32);
                else if (g < 96) c |= 1 << (g - 64);
                else {
                  if (!(g < 123))
                    throw new Error(
                      "Unicode ranges bits > 123 are reserved for internal usage"
                    );
                  d |= 1 << (g - 96);
                }
                ".notdef" !== m.name &&
                  ((g = m.getMetrics()),
                  r.push(g.xMin),
                  n.push(g.yMin),
                  o.push(g.xMax),
                  i.push(g.yMax),
                  a.push(g.leftSideBearing),
                  h.push(g.rightSideBearing),
                  s.push(m.advanceWidth));
              }
              ((M = {
                xMin: Math.min.apply(null, r),
                yMin: Math.min.apply(null, n),
                xMax: Math.max.apply(null, o),
                yMax: Math.max.apply(null, i),
                advanceWidthMax: Math.max.apply(null, s),
                advanceWidthAvg: (function (e) {
                  for (var t = 0, r = 0; r < e.length; r += 1) t += e[r];
                  return t / e.length;
                })(s),
                minLeftSideBearing: Math.min.apply(null, a),
                maxLeftSideBearing: Math.max.apply(null, a),
                minRightSideBearing: Math.min.apply(null, h),
              }).ascender = void 0 !== e.ascender ? e.ascender : M.yMax),
                (M.descender = void 0 !== e.descender ? e.descender : M.yMin);
              for (
                var y = L.make({
                    unitsPerEm: e.unitsPerEm,
                    xMin: M.xMin,
                    yMin: M.yMin,
                    xMax: M.xMax,
                    yMax: M.yMax,
                  }),
                  v = I.make({
                    ascender: M.ascender,
                    descender: M.descender,
                    advanceWidthMax: M.advanceWidthMax,
                    minLeftSideBearing: M.minLeftSideBearing,
                    minRightSideBearing: M.minRightSideBearing,
                    xMaxExtent: M.maxLeftSideBearing + (M.xMax - M.xMin),
                    numberOfHMetrics: e.glyphs.length,
                  }),
                  x = D.make(e.glyphs.length),
                  _ = k.make({
                    xAvgCharWidth: Math.round(M.advanceWidthAvg),
                    usWeightClass: 500,
                    usWidthClass: 5,
                    usFirstCharIndex: t,
                    usLastCharIndex: l,
                    ulUnicodeRange1: p,
                    ulUnicodeRange2: u,
                    ulUnicodeRange3: c,
                    ulUnicodeRange4: d,
                    sTypoAscender: M.ascender,
                    sTypoDescender: M.descender,
                    sTypoLineGap: 0,
                    usWinAscent: M.ascender,
                    usWinDescent: -M.descender,
                    sxHeight: B(e, "xyvw", { yMax: 0 }).yMax,
                    sCapHeight: B(e, "HIKLEFJMNTZBDPRAGOQSUVWXY", M).yMax,
                    usBreakChar: e.hasChar(" ") ? 32 : 0,
                  }),
                  w = P.make(e.glyphs),
                  b = E.make(e.glyphs),
                  S = e.familyName + " " + e.styleName,
                  M = e.familyName.replace(/\s/g, "") + "-" + e.styleName,
                  T = N(
                    (w = F([
                      y,
                      v,
                      x,
                      _,
                      O.make({
                        copyright: e.copyright,
                        fontFamily: e.familyName,
                        fontSubfamily: e.styleName,
                        uniqueID: e.manufacturer + ":" + S,
                        fullName: S,
                        version: e.version,
                        postScriptName: M,
                        trademark: e.trademark,
                        manufacturer: e.manufacturer,
                        designer: e.designer,
                        description: e.description,
                        manufacturerURL: e.manufacturerURL,
                        designerURL: e.designerURL,
                        license: e.license,
                        licenseURL: e.licenseURL,
                        preferredFamily: e.familyName,
                        preferredSubfamily: e.styleName,
                      }),
                      b,
                      U.make(),
                      A.make(e.glyphs, {
                        version: e.version,
                        fullName: S,
                        familyName: e.familyName,
                        weightName: e.styleName,
                        postScriptName: M,
                        unitsPerEm: e.unitsPerEm,
                      }),
                      w,
                    ])).encode()
                  ),
                  C = w.fields,
                  R = !1,
                  f = 0;
                f < C.length;
                f += 1
              )
                if ("head table" === C[f].name) {
                  (C[f].value.checkSumAdjustment = 2981146554 - T), (R = !0);
                  break;
                }
              if (!R)
                throw new Error(
                  "Could not find head table with checkSum to adjust."
                );
              return w;
            });
        },
        {
          "../check": 2,
          "../table": 11,
          "./cff": 12,
          "./cmap": 13,
          "./head": 16,
          "./hhea": 17,
          "./hmtx": 18,
          "./maxp": 21,
          "./name": 22,
          "./os2": 23,
          "./post": 24,
        },
      ],
      26: [
        function (e, t, r) {
          "use strict";
          var a = e("./check"),
            n = 2147483648,
            u = {},
            e = {};
          function o(e) {
            return function () {
              return e;
            };
          }
          (u.BYTE = function (e) {
            return (
              a.argument(
                0 <= e && e <= 255,
                "Byte value should be between 0 and 255."
              ),
              [e]
            );
          }),
            (e.BYTE = o(1)),
            (u.CHAR = function (e) {
              return [e.charCodeAt(0)];
            }),
            (e.BYTE = o(1)),
            (u.CHARARRAY = function (e) {
              for (var t = [], r = 0; r < e.length; r += 1)
                t.push(e.charCodeAt(r));
              return t;
            }),
            (e.CHARARRAY = function (e) {
              return e.length;
            }),
            (u.USHORT = function (e) {
              return [(e >> 8) & 255, 255 & e];
            }),
            (e.USHORT = o(2)),
            (u.SHORT = function (e) {
              return (
                32768 <= e && (e = -(65536 - e)), [(e >> 8) & 255, 255 & e]
              );
            }),
            (e.SHORT = o(2)),
            (u.UINT24 = function (e) {
              return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
            }),
            (e.UINT24 = o(3)),
            (u.ULONG = function (e) {
              return [
                (e >> 24) & 255,
                (e >> 16) & 255,
                (e >> 8) & 255,
                255 & e,
              ];
            }),
            (e.ULONG = o(4)),
            (u.LONG = function (e) {
              return (
                n <= e && (e = -(2 * n - e)),
                [(e >> 24) & 255, (e >> 16) & 255, (e >> 8) & 255, 255 & e]
              );
            }),
            (e.LONG = o(4)),
            (u.FIXED = u.ULONG),
            (e.FIXED = e.ULONG),
            (u.FWORD = u.SHORT),
            (e.FWORD = e.SHORT),
            (u.UFWORD = u.USHORT),
            (e.UFWORD = e.USHORT),
            (u.LONGDATETIME = function () {
              return [0, 0, 0, 0, 0, 0, 0, 0];
            }),
            (e.LONGDATETIME = o(8)),
            (u.TAG = function (e) {
              return (
                a.argument(
                  4 === e.length,
                  "Tag should be exactly 4 ASCII characters."
                ),
                [
                  e.charCodeAt(0),
                  e.charCodeAt(1),
                  e.charCodeAt(2),
                  e.charCodeAt(3),
                ]
              );
            }),
            (e.TAG = o(4)),
            (u.Card8 = u.BYTE),
            (e.Card8 = e.BYTE),
            (u.Card16 = u.USHORT),
            (e.Card16 = e.USHORT),
            (u.OffSize = u.BYTE),
            (e.OffSize = e.BYTE),
            (u.SID = u.USHORT),
            (e.SID = e.USHORT),
            (u.NUMBER = function (e) {
              return -107 <= e && e <= 107
                ? [e + 139]
                : 108 <= e && e <= 1131
                ? [247 + ((e -= 108) >> 8), 255 & e]
                : -1131 <= e && e <= -108
                ? [251 + ((e = -e - 108) >> 8), 255 & e]
                : -32768 <= e && e <= 32767
                ? u.NUMBER16(e)
                : u.NUMBER32(e);
            }),
            (e.NUMBER = function (e) {
              return u.NUMBER(e).length;
            }),
            (u.NUMBER16 = function (e) {
              return [28, (e >> 8) & 255, 255 & e];
            }),
            (e.NUMBER16 = o(2)),
            (u.NUMBER32 = function (e) {
              return [
                29,
                (e >> 24) & 255,
                (e >> 16) & 255,
                (e >> 8) & 255,
                255 & e,
              ];
            }),
            (e.NUMBER32 = o(4)),
            (u.REAL = function (e) {
              var t = e.toString(),
                r = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);
              r &&
                ((r = parseFloat("1e" + ((r[2] ? +r[2] : 0) + r[1].length))),
                (t = (Math.round(e * r) / r).toString()));
              for (var n = "", o = 0, i = t.length; o < i; o += 1) {
                var s = t[o];
                n +=
                  "e" === s
                    ? "-" === t[++o]
                      ? "c"
                      : "b"
                    : "." === s
                    ? "a"
                    : "-" === s
                    ? "e"
                    : s;
              }
              var a = [30];
              for (
                o = 0, i = (n += 1 & n.length ? "f" : "ff").length;
                o < i;
                o += 2
              )
                a.push(parseInt(n.substr(o, 2), 16));
              return a;
            }),
            (e.REAL = function (e) {
              return u.REAL(e).length;
            }),
            (u.NAME = u.CHARARRAY),
            (e.NAME = e.CHARARRAY),
            (u.STRING = u.CHARARRAY),
            (e.STRING = e.CHARARRAY),
            (u.UTF16 = function (e) {
              for (var t = [], r = 0; r < e.length; r += 1)
                t.push(0), t.push(e.charCodeAt(r));
              return t;
            }),
            (e.UTF16 = function (e) {
              return 2 * e.length;
            }),
            (u.INDEX = function (e) {
              for (
                var t = 1, r = [t], n = [], o = 0, i = 0;
                i < e.length;
                i += 1
              ) {
                var s = u.OBJECT(e[i]);
                Array.prototype.push.apply(n, s),
                  (o += s.length),
                  (t += s.length),
                  r.push(t);
              }
              if (0 === n.length) return [0, 0];
              var a = [],
                h = (1 + Math.floor(Math.log(o) / Math.log(2)) / 8) | 0,
                l = [void 0, u.BYTE, u.USHORT, u.UINT24, u.ULONG][h];
              for (i = 0; i < r.length; i += 1) {
                var p = l(r[i]);
                Array.prototype.push.apply(a, p);
              }
              return Array.prototype.concat(
                u.Card16(e.length),
                u.OffSize(h),
                a,
                n
              );
            }),
            (e.INDEX = function (e) {
              return u.INDEX(e).length;
            }),
            (u.DICT = function (e) {
              for (
                var t = [], r = Object.keys(e), n = r.length, o = 0;
                o < n;
                o += 1
              ) {
                var i = parseInt(r[o], 0),
                  s = e[i];
                t = (t = t.concat(u.OPERAND(s.value, s.type))).concat(
                  u.OPERATOR(i)
                );
              }
              return t;
            }),
            (e.DICT = function (e) {
              return u.DICT(e).length;
            }),
            (u.OPERATOR = function (e) {
              return e < 1200 ? [e] : [12, e - 1200];
            }),
            (u.OPERAND = function (e, t) {
              var r = [];
              if (Array.isArray(t))
                for (var n = 0; n < t.length; n += 1)
                  a.argument(
                    e.length === t.length,
                    "Not enough arguments given for type" + t
                  ),
                    (r = r.concat(u.OPERAND(e[n], t[n])));
              else if ("SID" === t) r = r.concat(u.NUMBER(e));
              else if ("offset" === t) r = r.concat(u.NUMBER32(e));
              else if ("number" === t) r = r.concat(u.NUMBER(e));
              else {
                if ("real" !== t) throw new Error("Unknown operand type " + t);
                r = r.concat(u.REAL(e));
              }
              return r;
            }),
            (u.OP = u.BYTE),
            (e.OP = e.BYTE);
          var i = "function" == typeof WeakMap && new WeakMap();
          (u.CHARSTRING = function (e) {
            if (i && i.has(e)) return i.get(e);
            for (var t = [], r = e.length, n = 0; n < r; n += 1)
              var o = e[n], t = t.concat(u[o.type](o.value));
            return i && i.set(e, t), t;
          }),
            (e.CHARSTRING = function (e) {
              return u.CHARSTRING(e).length;
            }),
            (u.OBJECT = function (e) {
              var t = u[e.type];
              return (
                a.argument(
                  void 0 !== t,
                  "No encoding function for type " + e.type
                ),
                t(e.value)
              );
            }),
            (u.TABLE = function (e) {
              for (var t = [], r = e.fields.length, n = 0; n < r; n += 1) {
                var o = e.fields[n],
                  i = u[o.type];
                a.argument(
                  void 0 !== i,
                  "No encoding function for field type " + o.type
                );
                var s = e[o.name];
                void 0 === s && (s = o.value);
                (s = i(s)), (t = t.concat(s));
              }
              return t;
            }),
            (u.LITERAL = function (e) {
              return e;
            }),
            (e.LITERAL = function (e) {
              return e.length;
            }),
            (r.decode = {}),
            (r.encode = u),
            (r.sizeOf = e);
        },
        { "./check": 2 },
      ],
      27: [
        function (_dereq_, module, exports) {
          var Aw, Bw;
          (Aw = this),
            (Bw = function () {
              var win = window,
                doc = document,
                httpsRe = /^http/,
                protocolRe = /(^\w+):\/\//,
                twoHundo = /^(20\d|1223)$/,
                byTag = "getElementsByTagName",
                readyState = "readyState",
                contentType = "Content-Type",
                requestedWith = "X-Requested-With",
                head = doc[byTag]("head")[0],
                uniqid = 0,
                callbackPrefix = "reqwest_" + +new Date(),
                lastValue,
                xmlHttpRequest = "XMLHttpRequest",
                xDomainRequest = "XDomainRequest",
                noop = function () {},
                isArray =
                  "function" == typeof Array.isArray
                    ? Array.isArray
                    : function (e) {
                        return e instanceof Array;
                      },
                defaultHeaders = {
                  contentType: "application/x-www-form-urlencoded",
                  requestedWith: xmlHttpRequest,
                  accept: {
                    "*": "text/javascript, text/html, application/xml, text/xml, */*",
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    js: "application/javascript, text/javascript",
                  },
                },
                xhr = function (e) {
                  if (!0 !== e.crossOrigin)
                    return win[xmlHttpRequest]
                      ? new XMLHttpRequest()
                      : new ActiveXObject("Microsoft.XMLHTTP");
                  e = win[xmlHttpRequest] ? new XMLHttpRequest() : null;
                  if (e && "withCredentials" in e) return e;
                  if (win[xDomainRequest]) return new XDomainRequest();
                  throw new Error(
                    "Browser does not support cross-origin requests"
                  );
                },
                globalSetupOptions = {
                  dataFilter: function (e) {
                    return e;
                  },
                };
              function succeed(e) {
                var t =
                  ((t = protocolRe.exec(e.url)) && t[1]) ||
                  window.location.protocol;
                return httpsRe.test(t)
                  ? twoHundo.test(e.request.status)
                  : e.request.response;
              }
              function handleReadyState(e, t, r) {
                return function () {
                  return e._aborted
                    ? r(e.request)
                    : e._timedOut
                    ? r(e.request, "Request is aborted: timeout")
                    : void (
                        e.request &&
                        4 == e.request[readyState] &&
                        ((e.request.onreadystatechange = noop),
                        (succeed(e) ? t : r)(e.request))
                      );
                };
              }
              function setHeaders(e, t) {
                var r,
                  n = t.headers || {};
                n.Accept =
                  n.Accept ||
                  defaultHeaders.accept[t.type] ||
                  defaultHeaders.accept["*"];
                var o =
                  "function" == typeof FormData && t.data instanceof FormData;
                for (r in (t.crossOrigin ||
                  n[requestedWith] ||
                  (n[requestedWith] = defaultHeaders.requestedWith),
                n[contentType] ||
                  o ||
                  (n[contentType] =
                    t.contentType || defaultHeaders.contentType),
                n))
                  n.hasOwnProperty(r) &&
                    "setRequestHeader" in e &&
                    e.setRequestHeader(r, n[r]);
              }
              function setCredentials(e, t) {
                void 0 !== t.withCredentials &&
                  void 0 !== e.withCredentials &&
                  (e.withCredentials = !!t.withCredentials);
              }
              function generalCallback(e) {
                lastValue = e;
              }
              function urlappend(e, t) {
                return e + (/\?/.test(e) ? "&" : "?") + t;
              }
              function handleJsonp(e, t, r, n) {
                var o = uniqid++,
                  i = e.jsonpCallback || "callback",
                  s = e.jsonpCallbackName || reqwest.getcallbackPrefix(o),
                  a = new RegExp("((^|\\?|&)" + i + ")=([^&]+)"),
                  h = n.match(a),
                  l = doc.createElement("script"),
                  p = 0,
                  e = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
                return (
                  h
                    ? "?" === h[3]
                      ? (n = n.replace(a, "$1=" + s))
                      : (s = h[3])
                    : (n = urlappend(n, i + "=" + s)),
                  (win[s] = generalCallback),
                  (l.type = "text/javascript"),
                  (l.src = n),
                  (l.async = !0),
                  void 0 === l.onreadystatechange ||
                    e ||
                    (l.htmlFor = l.id = "_reqwest_" + o),
                  (l.onload = l.onreadystatechange =
                    function () {
                      if (
                        (l[readyState] &&
                          "complete" !== l[readyState] &&
                          "loaded" !== l[readyState]) ||
                        p
                      )
                        return !1;
                      (l.onload = l.onreadystatechange = null),
                        l.onclick && l.onclick(),
                        t(lastValue),
                        (lastValue = void 0),
                        head.removeChild(l),
                        (p = 1);
                    }),
                  head.appendChild(l),
                  {
                    abort: function () {
                      (l.onload = l.onreadystatechange = null),
                        r({}, "Request is aborted: timeout", {}),
                        (lastValue = void 0),
                        head.removeChild(l),
                        (p = 1);
                    },
                  }
                );
              }
              function getRequest(e, t) {
                var r,
                  n = this.o,
                  o = (n.method || "GET").toUpperCase(),
                  i = "string" == typeof n ? n : n.url,
                  s =
                    !1 !== n.processData && n.data && "string" != typeof n.data
                      ? reqwest.toQueryString(n.data)
                      : n.data || null,
                  a = !1;
                return (
                  ("jsonp" != n.type && "GET" != o) ||
                    !s ||
                    ((i = urlappend(i, s)), (s = null)),
                  "jsonp" == n.type
                    ? handleJsonp(n, e, t, i)
                    : ((r = (n.xhr && n.xhr(n)) || xhr(n)).open(
                        o,
                        i,
                        !1 !== n.async
                      ),
                      setHeaders(r, n),
                      setCredentials(r, n),
                      win[xDomainRequest] && r instanceof win[xDomainRequest]
                        ? ((r.onload = e),
                          (r.onerror = t),
                          (r.onprogress = function () {}),
                          (a = !0))
                        : (r.onreadystatechange = handleReadyState(this, e, t)),
                      n.before && n.before(r),
                      a
                        ? setTimeout(function () {
                            r.send(s);
                          }, 200)
                        : r.send(s),
                      r)
                );
              }
              function Reqwest(e, t) {
                (this.o = e), (this.fn = t), init.apply(this, arguments);
              }
              function setType(e) {
                return e.match("json")
                  ? "json"
                  : e.match("javascript")
                  ? "js"
                  : e.match("text")
                  ? "html"
                  : e.match("xml")
                  ? "xml"
                  : void 0;
              }
              function init(o, fn) {
                (this.url = "string" == typeof o ? o : o.url),
                  (this.timeout = null),
                  (this._fulfilled = !1),
                  (this._successHandler = function () {}),
                  (this._fulfillmentHandlers = []),
                  (this._errorHandlers = []),
                  (this._completeHandlers = []),
                  (this._erred = !1),
                  (this._responseArgs = {});
                var self = this;
                function complete(e) {
                  for (
                    o.timeout && clearTimeout(self.timeout),
                      self.timeout = null;
                    0 < self._completeHandlers.length;

                  )
                    self._completeHandlers.shift()(e);
                }
                function success(resp) {
                  var type =
                    o.type ||
                    (resp && setType(resp.getResponseHeader("Content-Type")));
                  resp = "jsonp" !== type ? self.request : resp;
                  var filteredResponse = globalSetupOptions.dataFilter(
                      resp.responseText,
                      type
                    ),
                    r = filteredResponse;
                  try {
                    resp.responseText = r;
                  } catch (e) {}
                  if (r)
                    switch (type) {
                      case "json":
                        try {
                          resp = win.JSON
                            ? win.JSON.parse(r)
                            : eval("(" + r + ")");
                        } catch (err) {
                          return error(
                            resp,
                            "Could not parse JSON in response",
                            err
                          );
                        }
                        break;
                      case "js":
                        resp = eval(r);
                        break;
                      case "html":
                        resp = r;
                        break;
                      case "xml":
                        resp =
                          resp.responseXML &&
                          resp.responseXML.parseError &&
                          resp.responseXML.parseError.errorCode &&
                          resp.responseXML.parseError.reason
                            ? null
                            : resp.responseXML;
                    }
                  for (
                    self._responseArgs.resp = resp,
                      self._fulfilled = !0,
                      fn(resp),
                      self._successHandler(resp);
                    0 < self._fulfillmentHandlers.length;

                  )
                    resp = self._fulfillmentHandlers.shift()(resp);
                  complete(resp);
                }
                function timedOut() {
                  (self._timedOut = !0), self.request.abort();
                }
                function error(e, t, r) {
                  for (
                    e = self.request,
                      self._responseArgs.resp = e,
                      self._responseArgs.msg = t,
                      self._responseArgs.t = r,
                      self._erred = !0;
                    0 < self._errorHandlers.length;

                  )
                    self._errorHandlers.shift()(e, t, r);
                  complete(e);
                }
                (fn = fn || function () {}),
                  o.timeout &&
                    (this.timeout = setTimeout(function () {
                      timedOut();
                    }, o.timeout)),
                  o.success &&
                    (this._successHandler = function () {
                      o.success.apply(o, arguments);
                    }),
                  o.error &&
                    this._errorHandlers.push(function () {
                      o.error.apply(o, arguments);
                    }),
                  o.complete &&
                    this._completeHandlers.push(function () {
                      o.complete.apply(o, arguments);
                    }),
                  (this.request = getRequest.call(this, success, error));
              }
              function reqwest(e, t) {
                return new Reqwest(e, t);
              }
              function normalize(e) {
                return e ? e.replace(/\r?\n/g, "\r\n") : "";
              }
              function serial(e, t) {
                function r(e) {
                  e &&
                    !e.disabled &&
                    t(
                      a,
                      normalize(
                        e.attributes.value && e.attributes.value.specified
                          ? e.value
                          : e.text
                      )
                    );
                }
                var n,
                  o,
                  i,
                  s,
                  a = e.name,
                  h = e.tagName.toLowerCase();
                if (!e.disabled && a)
                  switch (h) {
                    case "input":
                      /reset|button|image|file/i.test(e.type) ||
                        ((n = /checkbox/i.test(e.type)),
                        (o = /radio/i.test(e.type)),
                        (i = e.value),
                        ((n || o) && !e.checked) ||
                          t(a, normalize(n && "" === i ? "on" : i)));
                      break;
                    case "textarea":
                      t(a, normalize(e.value));
                      break;
                    case "select":
                      if ("select-one" === e.type.toLowerCase())
                        r(
                          0 <= e.selectedIndex
                            ? e.options[e.selectedIndex]
                            : null
                        );
                      else
                        for (s = 0; e.length && s < e.length; s++)
                          e.options[s].selected && r(e.options[s]);
                  }
              }
              function eachFormElement() {
                for (var e, i = this, t = 0; t < arguments.length; t++)
                  /input|select|textarea/i.test((e = arguments[t]).tagName) &&
                    serial(e, i),
                    (function (e, t) {
                      for (var r, n, o = 0; o < t.length; o++)
                        for (n = e[byTag](t[o]), r = 0; r < n.length; r++)
                          serial(n[r], i);
                    })(e, ["input", "select", "textarea"]);
              }
              function serializeQueryString() {
                return reqwest.toQueryString(
                  reqwest.serializeArray.apply(null, arguments)
                );
              }
              function serializeHash() {
                var r = {};
                return (
                  eachFormElement.apply(function (e, t) {
                    e in r
                      ? (r[e] && !isArray(r[e]) && (r[e] = [r[e]]),
                        r[e].push(t))
                      : (r[e] = t);
                  }, arguments),
                  r
                );
              }
              function buildParams(e, t, r, n) {
                var o,
                  i,
                  s,
                  a = /\[\]$/;
                if (isArray(t))
                  for (i = 0; t && i < t.length; i++)
                    (s = t[i]),
                      r || a.test(e)
                        ? n(e, s)
                        : buildParams(
                            e + "[" + ("object" == typeof s ? i : "") + "]",
                            s,
                            r,
                            n
                          );
                else if (t && "[object Object]" === t.toString())
                  for (o in t) buildParams(e + "[" + o + "]", t[o], r, n);
                else n(e, t);
              }
              return (
                (Reqwest.prototype = {
                  abort: function () {
                    (this._aborted = !0), this.request.abort();
                  },
                  retry: function () {
                    init.call(this, this.o, this.fn);
                  },
                  then: function (e, t) {
                    return (
                      (e = e || function () {}),
                      (t = t || function () {}),
                      this._fulfilled
                        ? (this._responseArgs.resp = e(this._responseArgs.resp))
                        : this._erred
                        ? t(
                            this._responseArgs.resp,
                            this._responseArgs.msg,
                            this._responseArgs.t
                          )
                        : (this._fulfillmentHandlers.push(e),
                          this._errorHandlers.push(t)),
                      this
                    );
                  },
                  always: function (e) {
                    return (
                      this._fulfilled || this._erred
                        ? e(this._responseArgs.resp)
                        : this._completeHandlers.push(e),
                      this
                    );
                  },
                  fail: function (e) {
                    return (
                      this._erred
                        ? e(
                            this._responseArgs.resp,
                            this._responseArgs.msg,
                            this._responseArgs.t
                          )
                        : this._errorHandlers.push(e),
                      this
                    );
                  },
                  catch: function (e) {
                    return this.fail(e);
                  },
                }),
                (reqwest.serializeArray = function () {
                  var r = [];
                  return (
                    eachFormElement.apply(function (e, t) {
                      r.push({ name: e, value: t });
                    }, arguments),
                    r
                  );
                }),
                (reqwest.serialize = function () {
                  if (0 === arguments.length) return "";
                  var e = Array.prototype.slice.call(arguments, 0),
                    t = e.pop();
                  return (
                    t && t.nodeType && e.push(t) && (t = null),
                    ("map" == (t = t && t.type)
                      ? serializeHash
                      : "array" == t
                      ? reqwest.serializeArray
                      : serializeQueryString
                    ).apply(null, e)
                  );
                }),
                (reqwest.toQueryString = function (e, t) {
                  function r(e, t) {
                    (t = "function" == typeof t ? t() : null == t ? "" : t),
                      (s[s.length] = a(e) + "=" + a(t));
                  }
                  var n,
                    o,
                    i = t || !1,
                    s = [],
                    a = encodeURIComponent;
                  if (isArray(e))
                    for (o = 0; e && o < e.length; o++)
                      r(e[o].name, e[o].value);
                  else
                    for (n in e)
                      e.hasOwnProperty(n) && buildParams(n, e[n], i, r);
                  return s.join("&").replace(/%20/g, "+");
                }),
                (reqwest.getcallbackPrefix = function () {
                  return callbackPrefix;
                }),
                (reqwest.compat = function (e, t) {
                  return (
                    e &&
                      (e.type && (e.method = e.type) && delete e.type,
                      e.dataType && (e.type = e.dataType),
                      e.jsonpCallback &&
                        (e.jsonpCallbackName = e.jsonpCallback) &&
                        delete e.jsonpCallback,
                      e.jsonp && (e.jsonpCallback = e.jsonp)),
                    new Reqwest(e, t)
                  );
                }),
                (reqwest.ajaxSetup = function (e) {
                  for (var t in (e = e || {})) globalSetupOptions[t] = e[t];
                }),
                reqwest
              );
            }),
            void 0 !== module && module.exports
              ? (module.exports = Bw())
              : "function" == typeof define && define.amd
              ? define(Bw)
              : (Aw.reqwest = Bw());
        },
        {},
      ],
      28: [
        function (e, t, r) {
          "use strict";
          var n = e("./core/core");
          e("./color/p5.Color"),
            e("./core/p5.Element"),
            e("./typography/p5.Font"),
            e("./core/p5.Graphics"),
            e("./core/p5.Renderer2D"),
            e("./image/p5.Image"),
            e("./math/p5.Vector"),
            e("./io/p5.TableRow"),
            e("./io/p5.Table"),
            e("./io/p5.XML"),
            e("./color/creating_reading"),
            e("./color/setting"),
            e("./core/constants"),
            e("./utilities/conversion"),
            e("./utilities/array_functions"),
            e("./utilities/string_functions"),
            e("./core/environment"),
            e("./image/image"),
            e("./image/loading_displaying"),
            e("./image/pixels"),
            e("./io/files"),
            e("./events/keyboard"),
            e("./events/acceleration"),
            e("./events/mouse"),
            e("./utilities/time_date"),
            e("./events/touch"),
            e("./math/math"),
            e("./math/calculation"),
            e("./math/random"),
            e("./math/noise"),
            e("./math/trigonometry"),
            e("./core/rendering"),
            e("./core/2d_primitives"),
            e("./core/attributes"),
            e("./core/curves"),
            e("./core/vertex"),
            e("./core/structure"),
            e("./core/transform"),
            e("./typography/attributes"),
            e("./typography/loading_displaying"),
            e("./webgl/p5.RendererGL"),
            e("./webgl/p5.Geometry"),
            e("./webgl/p5.RendererGL.Retained"),
            e("./webgl/p5.RendererGL.Immediate"),
            e("./webgl/primitives"),
            e("./webgl/loading"),
            e("./webgl/p5.Matrix"),
            e("./webgl/material"),
            e("./webgl/light"),
            e("./webgl/shader"),
            e("./webgl/camera"),
            e("./webgl/interaction");
          e = function () {
            window.PHANTOMJS ||
              window.mocha ||
              (((window.setup && "function" == typeof window.setup) ||
                (window.draw && "function" == typeof window.draw)) &&
                !n.instance &&
                new n());
          };
          "complete" === document.readyState
            ? e()
            : window.addEventListener("load", e, !1),
            (t.exports = n);
        },
        {
          "./color/creating_reading": 30,
          "./color/p5.Color": 31,
          "./color/setting": 32,
          "./core/2d_primitives": 33,
          "./core/attributes": 34,
          "./core/constants": 36,
          "./core/core": 37,
          "./core/curves": 38,
          "./core/environment": 39,
          "./core/p5.Element": 41,
          "./core/p5.Graphics": 42,
          "./core/p5.Renderer2D": 44,
          "./core/rendering": 45,
          "./core/structure": 47,
          "./core/transform": 48,
          "./core/vertex": 49,
          "./events/acceleration": 50,
          "./events/keyboard": 51,
          "./events/mouse": 52,
          "./events/touch": 53,
          "./image/image": 55,
          "./image/loading_displaying": 56,
          "./image/p5.Image": 57,
          "./image/pixels": 58,
          "./io/files": 59,
          "./io/p5.Table": 60,
          "./io/p5.TableRow": 61,
          "./io/p5.XML": 62,
          "./math/calculation": 63,
          "./math/math": 64,
          "./math/noise": 65,
          "./math/p5.Vector": 66,
          "./math/random": 68,
          "./math/trigonometry": 69,
          "./typography/attributes": 70,
          "./typography/loading_displaying": 71,
          "./typography/p5.Font": 72,
          "./utilities/array_functions": 73,
          "./utilities/conversion": 74,
          "./utilities/string_functions": 75,
          "./utilities/time_date": 76,
          "./webgl/camera": 77,
          "./webgl/interaction": 78,
          "./webgl/light": 79,
          "./webgl/loading": 80,
          "./webgl/material": 81,
          "./webgl/p5.Geometry": 82,
          "./webgl/p5.Matrix": 83,
          "./webgl/p5.RendererGL": 86,
          "./webgl/p5.RendererGL.Immediate": 84,
          "./webgl/p5.RendererGL.Retained": 85,
          "./webgl/primitives": 87,
          "./webgl/shader": 88,
        },
      ],
      29: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          (e.ColorConversion = {}),
            (e.ColorConversion._hsbaToHSLA = function (e) {
              var t = e[0],
                r = e[1],
                n = e[2],
                o = ((2 - r) * n) / 2;
              return (
                0 != o &&
                  (1 == o
                    ? (r = 0)
                    : o < 0.5
                    ? (r /= 2 - r)
                    : (r = (r * n) / (2 - 2 * o))),
                [t, r, o, e[3]]
              );
            }),
            (e.ColorConversion._hsbaToRGBA = function (e) {
              var t,
                r,
                n,
                o,
                i,
                s = 6 * e[0],
                a = e[1],
                h = e[2];
              return 0 === a
                ? [h, h, h, e[3]]
                : ((i = h * (1 - a)),
                  (r = h * (1 - a * (s - (t = Math.floor(s))))),
                  (s = h * (1 - a * (1 + t - s))),
                  (i =
                    1 === t
                      ? ((n = r), (o = h), i)
                      : 2 === t
                      ? ((n = i), (o = h), s)
                      : 3 === t
                      ? ((n = i), (o = r), h)
                      : 4 === t
                      ? ((n = s), (o = i), h)
                      : 5 === t
                      ? ((n = h), (o = i), r)
                      : ((n = h), (o = s), i)),
                  [n, o, i, e[3]]);
            }),
            (e.ColorConversion._hslaToHSBA = function (e) {
              var t = e[0],
                r = e[1],
                n = e[2],
                o = n < 0.5 ? (1 + r) * n : n + r - n * r;
              return [t, (r = (2 * (o - n)) / o), o, e[3]];
            }),
            (e.ColorConversion._hslaToRGBA = function (e) {
              var t,
                r = 6 * e[0],
                n = e[1],
                o = e[2];
              return 0 === n
                ? [o, o, o, e[3]]
                : [
                    (t = function (e, t, r) {
                      return (
                        e < 0 ? (e += 6) : 6 <= e && (e -= 6),
                        e < 1
                          ? t + (r - t) * e
                          : e < 3
                          ? r
                          : e < 4
                          ? t + (r - t) * (4 - e)
                          : t
                      );
                    })(
                      2 + r,
                      (n = 2 * o - (o = o < 0.5 ? (1 + n) * o : o + n - o * n)),
                      o
                    ),
                    t(r, n, o),
                    t(r - 2, n, o),
                    e[3],
                  ];
            }),
            (e.ColorConversion._rgbaToHSBA = function (e) {
              var t,
                r,
                n = e[0],
                o = e[1],
                i = e[2],
                s = Math.max(n, o, i),
                a = s - Math.min(n, o, i);
              return (
                0 == a
                  ? (r = t = 0)
                  : ((r = a / s),
                    n === s
                      ? (t = (o - i) / a)
                      : o === s
                      ? (t = 2 + (i - n) / a)
                      : i === s && (t = 4 + (n - o) / a),
                    t < 0 ? (t += 6) : 6 <= t && (t -= 6)),
                [t / 6, r, s, e[3]]
              );
            }),
            (e.ColorConversion._rgbaToHSLA = function (e) {
              var t,
                r,
                n = e[0],
                o = e[1],
                i = e[2],
                s = Math.max(n, o, i),
                a = Math.min(n, o, i),
                h = s + a,
                a = s - a;
              return (
                0 == a
                  ? (r = t = 0)
                  : ((r = h < 1 ? a / h : a / (2 - h)),
                    n === s
                      ? (t = (o - i) / a)
                      : o === s
                      ? (t = 2 + (i - n) / a)
                      : i === s && (t = 4 + (n - o) / a),
                    t < 0 ? (t += 6) : 6 <= t && (t -= 6)),
                [t / 6, r, h / 2, e[3]]
              );
            }),
            (t.exports = e.ColorConversion);
        },
        { "../core/core": 37 },
      ],
      30: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core"),
            h = e("../core/constants");
          e("./p5.Color"),
            (n.prototype.alpha = function (e) {
              if (e instanceof n.Color || e instanceof Array)
                return this.color(e)._getAlpha();
              throw new Error("Needs p5.Color or pixel array as argument.");
            }),
            (n.prototype.blue = function (e) {
              if (e instanceof n.Color || e instanceof Array)
                return this.color(e)._getBlue();
              throw new Error("Needs p5.Color or pixel array as argument.");
            }),
            (n.prototype.brightness = function (e) {
              if (e instanceof n.Color || e instanceof Array)
                return this.color(e)._getBrightness();
              throw new Error("Needs p5.Color or pixel array as argument.");
            }),
            (n.prototype.color = function () {
              return arguments[0] instanceof n.Color
                ? arguments[0]
                : arguments[0] instanceof Array
                ? this instanceof n.Renderer
                  ? new n.Color(this, arguments[0])
                  : new n.Color(this._renderer, arguments[0])
                : this instanceof n.Renderer
                ? new n.Color(this, arguments)
                : new n.Color(this._renderer, arguments);
            }),
            (n.prototype.green = function (e) {
              if (e instanceof n.Color || e instanceof Array)
                return this.color(e)._getGreen();
              throw new Error("Needs p5.Color or pixel array as argument.");
            }),
            (n.prototype.hue = function (e) {
              if (e instanceof n.Color || e instanceof Array)
                return this.color(e)._getHue();
              throw new Error("Needs p5.Color or pixel array as argument.");
            }),
            (n.prototype.lerpColor = function (e, t, r) {
              var n,
                o,
                i,
                s = this._renderer._colorMode,
                a = this._renderer._colorMaxes;
              if (s === h.RGB)
                (o = e.levels.map(function (e) {
                  return e / 255;
                })),
                  (i = t.levels.map(function (e) {
                    return e / 255;
                  }));
              else if (s === h.HSB)
                e._getBrightness(),
                  t._getBrightness(),
                  (o = e.hsba),
                  (i = t.hsba);
              else {
                if (s !== h.HSL)
                  throw new Error(s + "cannot be used for interpolation.");
                e._getLightness(),
                  t._getLightness(),
                  (o = e.hsla),
                  (i = t.hsla);
              }
              return (
                (r = Math.max(Math.min(r, 1), 0)),
                (n = this.lerp(o[0], i[0], r)),
                (e = this.lerp(o[1], i[1], r)),
                (t = this.lerp(o[2], i[2], r)),
                (r = this.lerp(o[3], i[3], r)),
                (n *= a[s][0]),
                (e *= a[s][1]),
                (t *= a[s][2]),
                (r *= a[s][3]),
                this.color(n, e, t, r)
              );
            }),
            (n.prototype.lightness = function (e) {
              if (e instanceof n.Color || e instanceof Array)
                return this.color(e)._getLightness();
              throw new Error("Needs p5.Color or pixel array as argument.");
            }),
            (n.prototype.red = function (e) {
              if (e instanceof n.Color || e instanceof Array)
                return this.color(e)._getRed();
              throw new Error("Needs p5.Color or pixel array as argument.");
            }),
            (n.prototype.saturation = function (e) {
              if (e instanceof n.Color || e instanceof Array)
                return this.color(e)._getSaturation();
              throw new Error("Needs p5.Color or pixel array as argument.");
            }),
            (t.exports = n);
        },
        { "../core/constants": 36, "../core/core": 37, "./p5.Color": 31 },
      ],
      31: [
        function (e, t, r) {
          var i = e("../core/core"),
            s = e("../core/constants"),
            a = e("./color_conversion");
          (i.Color = function (e, t) {
            if (
              ((this.mode = e._colorMode),
              (this.maxes = e._colorMaxes),
              this.mode !== s.RGB && this.mode !== s.HSL && this.mode !== s.HSB)
            )
              throw new Error(this.mode + " is an invalid colorMode.");
            return (
              (this._array = i.Color._parseInputs.apply(e, t)),
              (this.levels = this._array.map(function (e) {
                return Math.round(255 * e);
              })),
              this
            );
          }),
            (i.Color.prototype.toString = function () {
              var e = this.levels,
                t = this._array[3];
              return "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + t + ")";
            }),
            (i.Color.prototype._getAlpha = function () {
              return this._array[3] * this.maxes[this.mode][3];
            }),
            (i.Color.prototype._getBlue = function () {
              return this._array[2] * this.maxes[s.RGB][2];
            }),
            (i.Color.prototype._getBrightness = function () {
              return (
                this.hsba || (this.hsba = a._rgbaToHSBA(this._array)),
                this.hsba[2] * this.maxes[s.HSB][2]
              );
            }),
            (i.Color.prototype._getGreen = function () {
              return this._array[1] * this.maxes[s.RGB][1];
            }),
            (i.Color.prototype._getHue = function () {
              return this.mode === s.HSB
                ? (this.hsba || (this.hsba = a._rgbaToHSBA(this._array)),
                  this.hsba[0] * this.maxes[s.HSB][0])
                : (this.hsla || (this.hsla = a._rgbaToHSLA(this._array)),
                  this.hsla[0] * this.maxes[s.HSL][0]);
            }),
            (i.Color.prototype._getLightness = function () {
              return (
                this.hsla || (this.hsla = a._rgbaToHSLA(this._array)),
                this.hsla[2] * this.maxes[s.HSL][2]
              );
            }),
            (i.Color.prototype._getRed = function () {
              return this._array[0] * this.maxes[s.RGB][0];
            }),
            (i.Color.prototype._getSaturation = function () {
              return this.mode === s.HSB
                ? (this.hsba || (this.hsba = a._rgbaToHSBA(this._array)),
                  this.hsba[1] * this.maxes[s.HSB][1])
                : (this.hsla || (this.hsla = a._rgbaToHSLA(this._array)),
                  this.hsla[1] * this.maxes[s.HSL][1]);
            });
          var h = {
              aliceblue: "#f0f8ff",
              antiquewhite: "#faebd7",
              aqua: "#00ffff",
              aquamarine: "#7fffd4",
              azure: "#f0ffff",
              beige: "#f5f5dc",
              bisque: "#ffe4c4",
              black: "#000000",
              blanchedalmond: "#ffebcd",
              blue: "#0000ff",
              blueviolet: "#8a2be2",
              brown: "#a52a2a",
              burlywood: "#deb887",
              cadetblue: "#5f9ea0",
              chartreuse: "#7fff00",
              chocolate: "#d2691e",
              coral: "#ff7f50",
              cornflowerblue: "#6495ed",
              cornsilk: "#fff8dc",
              crimson: "#dc143c",
              cyan: "#00ffff",
              darkblue: "#00008b",
              darkcyan: "#008b8b",
              darkgoldenrod: "#b8860b",
              darkgray: "#a9a9a9",
              darkgreen: "#006400",
              darkgrey: "#a9a9a9",
              darkkhaki: "#bdb76b",
              darkmagenta: "#8b008b",
              darkolivegreen: "#556b2f",
              darkorange: "#ff8c00",
              darkorchid: "#9932cc",
              darkred: "#8b0000",
              darksalmon: "#e9967a",
              darkseagreen: "#8fbc8f",
              darkslateblue: "#483d8b",
              darkslategray: "#2f4f4f",
              darkslategrey: "#2f4f4f",
              darkturquoise: "#00ced1",
              darkviolet: "#9400d3",
              deeppink: "#ff1493",
              deepskyblue: "#00bfff",
              dimgray: "#696969",
              dimgrey: "#696969",
              dodgerblue: "#1e90ff",
              firebrick: "#b22222",
              floralwhite: "#fffaf0",
              forestgreen: "#228b22",
              fuchsia: "#ff00ff",
              gainsboro: "#dcdcdc",
              ghostwhite: "#f8f8ff",
              gold: "#ffd700",
              goldenrod: "#daa520",
              gray: "#808080",
              green: "#008000",
              greenyellow: "#adff2f",
              grey: "#808080",
              honeydew: "#f0fff0",
              hotpink: "#ff69b4",
              indianred: "#cd5c5c",
              indigo: "#4b0082",
              ivory: "#fffff0",
              khaki: "#f0e68c",
              lavender: "#e6e6fa",
              lavenderblush: "#fff0f5",
              lawngreen: "#7cfc00",
              lemonchiffon: "#fffacd",
              lightblue: "#add8e6",
              lightcoral: "#f08080",
              lightcyan: "#e0ffff",
              lightgoldenrodyellow: "#fafad2",
              lightgray: "#d3d3d3",
              lightgreen: "#90ee90",
              lightgrey: "#d3d3d3",
              lightpink: "#ffb6c1",
              lightsalmon: "#ffa07a",
              lightseagreen: "#20b2aa",
              lightskyblue: "#87cefa",
              lightslategray: "#778899",
              lightslategrey: "#778899",
              lightsteelblue: "#b0c4de",
              lightyellow: "#ffffe0",
              lime: "#00ff00",
              limegreen: "#32cd32",
              linen: "#faf0e6",
              magenta: "#ff00ff",
              maroon: "#800000",
              mediumaquamarine: "#66cdaa",
              mediumblue: "#0000cd",
              mediumorchid: "#ba55d3",
              mediumpurple: "#9370db",
              mediumseagreen: "#3cb371",
              mediumslateblue: "#7b68ee",
              mediumspringgreen: "#00fa9a",
              mediumturquoise: "#48d1cc",
              mediumvioletred: "#c71585",
              midnightblue: "#191970",
              mintcream: "#f5fffa",
              mistyrose: "#ffe4e1",
              moccasin: "#ffe4b5",
              navajowhite: "#ffdead",
              navy: "#000080",
              oldlace: "#fdf5e6",
              olive: "#808000",
              olivedrab: "#6b8e23",
              orange: "#ffa500",
              orangered: "#ff4500",
              orchid: "#da70d6",
              palegoldenrod: "#eee8aa",
              palegreen: "#98fb98",
              paleturquoise: "#afeeee",
              palevioletred: "#db7093",
              papayawhip: "#ffefd5",
              peachpuff: "#ffdab9",
              peru: "#cd853f",
              pink: "#ffc0cb",
              plum: "#dda0dd",
              powderblue: "#b0e0e6",
              purple: "#800080",
              red: "#ff0000",
              rosybrown: "#bc8f8f",
              royalblue: "#4169e1",
              saddlebrown: "#8b4513",
              salmon: "#fa8072",
              sandybrown: "#f4a460",
              seagreen: "#2e8b57",
              seashell: "#fff5ee",
              sienna: "#a0522d",
              silver: "#c0c0c0",
              skyblue: "#87ceeb",
              slateblue: "#6a5acd",
              slategray: "#708090",
              slategrey: "#708090",
              snow: "#fffafa",
              springgreen: "#00ff7f",
              steelblue: "#4682b4",
              tan: "#d2b48c",
              teal: "#008080",
              thistle: "#d8bfd8",
              tomato: "#ff6347",
              turquoise: "#40e0d0",
              violet: "#ee82ee",
              wheat: "#f5deb3",
              white: "#ffffff",
              whitesmoke: "#f5f5f5",
              yellow: "#ffff00",
              yellowgreen: "#9acd32",
            },
            n = /\s*/,
            o = /(\d{1,3})/,
            l = /((?:\d+(?:\.\d+)?)|(?:\.\d+))/,
            e = new RegExp(l.source + "%"),
            p = {
              HEX3: /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,
              HEX6: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
              RGB: new RegExp(
                [
                  "^rgb\\(",
                  o.source,
                  ",",
                  o.source,
                  ",",
                  o.source,
                  "\\)$",
                ].join(n.source),
                "i"
              ),
              RGB_PERCENT: new RegExp(
                [
                  "^rgb\\(",
                  e.source,
                  ",",
                  e.source,
                  ",",
                  e.source,
                  "\\)$",
                ].join(n.source),
                "i"
              ),
              RGBA: new RegExp(
                [
                  "^rgba\\(",
                  o.source,
                  ",",
                  o.source,
                  ",",
                  o.source,
                  ",",
                  l.source,
                  "\\)$",
                ].join(n.source),
                "i"
              ),
              RGBA_PERCENT: new RegExp(
                [
                  "^rgba\\(",
                  e.source,
                  ",",
                  e.source,
                  ",",
                  e.source,
                  ",",
                  l.source,
                  "\\)$",
                ].join(n.source),
                "i"
              ),
              HSL: new RegExp(
                [
                  "^hsl\\(",
                  o.source,
                  ",",
                  e.source,
                  ",",
                  e.source,
                  "\\)$",
                ].join(n.source),
                "i"
              ),
              HSLA: new RegExp(
                [
                  "^hsla\\(",
                  o.source,
                  ",",
                  e.source,
                  ",",
                  e.source,
                  ",",
                  l.source,
                  "\\)$",
                ].join(n.source),
                "i"
              ),
              HSB: new RegExp(
                [
                  "^hsb\\(",
                  o.source,
                  ",",
                  e.source,
                  ",",
                  e.source,
                  "\\)$",
                ].join(n.source),
                "i"
              ),
              HSBA: new RegExp(
                [
                  "^hsba\\(",
                  o.source,
                  ",",
                  e.source,
                  ",",
                  e.source,
                  ",",
                  l.source,
                  "\\)$",
                ].join(n.source),
                "i"
              ),
            };
          (i.Color._parseInputs = function () {
            var e = arguments.length,
              t = this._colorMode,
              r = this._colorMaxes,
              n = [];
            if (3 <= e)
              return (
                (n[0] = arguments[0] / r[t][0]),
                (n[1] = arguments[1] / r[t][1]),
                (n[2] = arguments[2] / r[t][2]),
                (n[3] =
                  "number" == typeof arguments[3] ? arguments[3] / r[t][3] : 1),
                (n = n.map(function (e) {
                  return Math.max(Math.min(e, 1), 0);
                })),
                t === s.HSL
                  ? a._hslaToRGBA(n)
                  : t === s.HSB
                  ? a._hsbaToRGBA(n)
                  : n
              );
            if (1 === e && "string" == typeof arguments[0]) {
              var o = arguments[0].trim().toLowerCase();
              if (h[o]) return i.Color._parseInputs.apply(this, [h[o]]);
              if (p.HEX3.test(o))
                return (
                  ((n = p.HEX3.exec(o)
                    .slice(1)
                    .map(function (e) {
                      return parseInt(e + e, 16) / 255;
                    }))[3] = 1),
                  n
                );
              if (p.HEX6.test(o))
                return (
                  ((n = p.HEX6.exec(o)
                    .slice(1)
                    .map(function (e) {
                      return parseInt(e, 16) / 255;
                    }))[3] = 1),
                  n
                );
              if (p.RGB.test(o))
                return (
                  ((n = p.RGB.exec(o)
                    .slice(1)
                    .map(function (e) {
                      return e / 255;
                    }))[3] = 1),
                  n
                );
              if (p.RGB_PERCENT.test(o))
                return (
                  ((n = p.RGB_PERCENT.exec(o)
                    .slice(1)
                    .map(function (e) {
                      return parseFloat(e) / 100;
                    }))[3] = 1),
                  n
                );
              if (p.RGBA.test(o))
                return (n = p.RGBA.exec(o)
                  .slice(1)
                  .map(function (e, t) {
                    return 3 === t ? parseFloat(e) : e / 255;
                  }));
              if (p.RGBA_PERCENT.test(o))
                return (n = p.RGBA_PERCENT.exec(o)
                  .slice(1)
                  .map(function (e, t) {
                    return 3 === t ? parseFloat(e) : parseFloat(e) / 100;
                  }));
              if (
                (p.HSL.test(o)
                  ? ((n = p.HSL.exec(o)
                      .slice(1)
                      .map(function (e, t) {
                        return 0 === t
                          ? parseInt(e, 10) / 360
                          : parseInt(e, 10) / 100;
                      }))[3] = 1)
                  : p.HSLA.test(o) &&
                    (n = p.HSLA.exec(o)
                      .slice(1)
                      .map(function (e, t) {
                        return 0 === t
                          ? parseInt(e, 10) / 360
                          : 3 === t
                          ? parseFloat(e)
                          : parseInt(e, 10) / 100;
                      })),
                n.length)
              )
                return a._hslaToRGBA(n);
              if (
                (p.HSB.test(o)
                  ? ((n = p.HSB.exec(o)
                      .slice(1)
                      .map(function (e, t) {
                        return 0 === t
                          ? parseInt(e, 10) / 360
                          : parseInt(e, 10) / 100;
                      }))[3] = 1)
                  : p.HSBA.test(o) &&
                    (n = p.HSBA.exec(o)
                      .slice(1)
                      .map(function (e, t) {
                        return 0 === t
                          ? parseInt(e, 10) / 360
                          : 3 === t
                          ? parseFloat(e)
                          : parseInt(e, 10) / 100;
                      })),
                n.length)
              )
                return a._hsbaToRGBA(n);
              n = [1, 1, 1, 1];
            } else {
              if ((1 !== e && 2 !== e) || "number" != typeof arguments[0])
                throw new Error(
                  arguments + "is not a valid color representation."
                );
              (n[0] = arguments[0] / r[t][2]),
                (n[1] = arguments[0] / r[t][2]),
                (n[2] = arguments[0] / r[t][2]),
                (n[3] =
                  "number" == typeof arguments[1] ? arguments[1] / r[t][3] : 1),
                (n = n.map(function (e) {
                  return Math.max(Math.min(e, 1), 0);
                }));
            }
            return n;
          }),
            (t.exports = i.Color);
        },
        {
          "../core/constants": 36,
          "../core/core": 37,
          "./color_conversion": 29,
        },
      ],
      32: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core"),
            o = e("../core/constants");
          e("./p5.Color"),
            (n.prototype.background = function () {
              return (
                arguments[0] instanceof n.Image
                  ? this.image(arguments[0], 0, 0, this.width, this.height)
                  : this._renderer.background.apply(this._renderer, arguments),
                this
              );
            }),
            (n.prototype.clear = function () {
              return this._renderer.clear(), this;
            }),
            (n.prototype.colorMode = function () {
              var e;
              return (
                (arguments[0] !== o.RGB &&
                  arguments[0] !== o.HSB &&
                  arguments[0] !== o.HSL) ||
                  ((this._renderer._colorMode = arguments[0]),
                  (e = this._renderer._colorMaxes[this._renderer._colorMode]),
                  2 === arguments.length
                    ? ((e[0] = arguments[1]),
                      (e[1] = arguments[1]),
                      (e[2] = arguments[1]),
                      (e[3] = arguments[1]))
                    : 4 === arguments.length
                    ? ((e[0] = arguments[1]),
                      (e[1] = arguments[2]),
                      (e[2] = arguments[3]))
                    : 5 === arguments.length &&
                      ((e[0] = arguments[1]),
                      (e[1] = arguments[2]),
                      (e[2] = arguments[3]),
                      (e[3] = arguments[4]))),
                this
              );
            }),
            (n.prototype.fill = function () {
              return (
                this._renderer._setProperty("_fillSet", !0),
                this._renderer._setProperty("_doFill", !0),
                this._renderer.fill.apply(this._renderer, arguments),
                this
              );
            }),
            (n.prototype.noFill = function () {
              return this._renderer._setProperty("_doFill", !1), this;
            }),
            (n.prototype.noStroke = function () {
              return this._renderer._setProperty("_doStroke", !1), this;
            }),
            (n.prototype.stroke = function () {
              return (
                this._renderer._setProperty("_strokeSet", !0),
                this._renderer._setProperty("_doStroke", !0),
                this._renderer.stroke.apply(this._renderer, arguments),
                this
              );
            }),
            (t.exports = n);
        },
        { "../core/constants": 36, "../core/core": 37, "./p5.Color": 31 },
      ],
      33: [
        function (e, t, r) {
          "use strict";
          var n = e("./core"),
            l = e("./constants"),
            o = e("./canvas");
          e("./error_helpers"),
            (n.prototype.arc = function (e, t, r, n, o, i, s) {
              for (
                var a = new Array(arguments.length), h = 0;
                h < a.length;
                ++h
              )
                a[h] = arguments[h];
              if (!this._renderer._doStroke && !this._renderer._doFill)
                return this;
              for (
                this._angleMode === l.DEGREES &&
                ((o = this.radians(o)), (i = this.radians(i)));
                o < 0;

              )
                o += l.TWO_PI;
              for (; i < 0; ) i += l.TWO_PI;
              return (
                (o %= l.TWO_PI),
                (i %= l.TWO_PI) === o && (i += l.TWO_PI),
                (o =
                  o <= l.HALF_PI
                    ? Math.atan((r / n) * Math.tan(o))
                    : o > l.HALF_PI && o <= 3 * l.HALF_PI
                    ? Math.atan((r / n) * Math.tan(o)) + l.PI
                    : Math.atan((r / n) * Math.tan(o)) + l.TWO_PI),
                (i =
                  i <= l.HALF_PI
                    ? Math.atan((r / n) * Math.tan(i))
                    : i > l.HALF_PI && i <= 3 * l.HALF_PI
                    ? Math.atan((r / n) * Math.tan(i)) + l.PI
                    : Math.atan((r / n) * Math.tan(i)) + l.TWO_PI) < o &&
                  (i += l.TWO_PI),
                (r = Math.abs(r)),
                (n = Math.abs(n)),
                this._renderer.arc(e, t, r, n, o, i, s),
                this
              );
            }),
            (n.prototype.ellipse = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              if (
                (3 === e.length && e.push(e[2]),
                e[2] < 0 && (e[2] = Math.abs(e[2])),
                e[3] < 0 && (e[3] = Math.abs(e[3])),
                !this._renderer._doStroke && !this._renderer._doFill)
              )
                return this;
              var r = o.modeAdjust(
                e[0],
                e[1],
                e[2],
                e[3],
                this._renderer._ellipseMode
              );
              return (
                (e[0] = r.x),
                (e[1] = r.y),
                (e[2] = r.w),
                (e[3] = r.h),
                this._renderer.ellipse(e),
                this
              );
            }),
            (n.prototype.line = function () {
              if (!this._renderer._doStroke) return this;
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              return (
                this._renderer.isP3D
                  ? this._renderer.line(e[0], e[1], e[2], e[3], e[4], e[5])
                  : this._renderer.line(e[0], e[1], e[2], e[3]),
                this
              );
            }),
            (n.prototype.point = function () {
              if (!this._renderer._doStroke) return this;
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              return (
                this._renderer.isP3D
                  ? this._renderer.point(e[0], e[1], e[2])
                  : this._renderer.point(e[0], e[1]),
                this
              );
            }),
            (n.prototype.quad = function () {
              if (!this._renderer._doStroke && !this._renderer._doFill)
                return this;
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              return (
                this._renderer.isP3D
                  ? this._renderer.quad(
                      e[0],
                      e[1],
                      e[2],
                      e[3],
                      e[4],
                      e[5],
                      e[6],
                      e[7],
                      e[8],
                      e[9],
                      e[10],
                      e[11]
                    )
                  : this._renderer.quad(
                      e[0],
                      e[1],
                      e[2],
                      e[3],
                      e[4],
                      e[5],
                      e[6],
                      e[7]
                    ),
                this
              );
            }),
            (n.prototype.rect = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              if (this._renderer._doStroke || this._renderer._doFill) {
                var r = o.modeAdjust(
                  e[0],
                  e[1],
                  e[2],
                  e[3],
                  this._renderer._rectMode
                );
                return (
                  (e[0] = r.x),
                  (e[1] = r.y),
                  (e[2] = r.w),
                  (e[3] = r.h),
                  this._renderer.rect(e),
                  this
                );
              }
            }),
            (n.prototype.triangle = function () {
              if (!this._renderer._doStroke && !this._renderer._doFill)
                return this;
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              return this._renderer.triangle(e), this;
            }),
            (t.exports = n);
        },
        {
          "./canvas": 35,
          "./constants": 36,
          "./core": 37,
          "./error_helpers": 40,
        },
      ],
      34: [
        function (e, t, r) {
          "use strict";
          var n = e("./core"),
            o = e("./constants");
          (n.prototype.ellipseMode = function (e) {
            return (
              (e !== o.CORNER &&
                e !== o.CORNERS &&
                e !== o.RADIUS &&
                e !== o.CENTER) ||
                (this._renderer._ellipseMode = e),
              this
            );
          }),
            (n.prototype.noSmooth = function () {
              return this._renderer.noSmooth(), this;
            }),
            (n.prototype.rectMode = function (e) {
              return (
                (e !== o.CORNER &&
                  e !== o.CORNERS &&
                  e !== o.RADIUS &&
                  e !== o.CENTER) ||
                  (this._renderer._rectMode = e),
                this
              );
            }),
            (n.prototype.smooth = function () {
              return this._renderer.smooth(), this;
            }),
            (n.prototype.strokeCap = function (e) {
              return (
                (e !== o.ROUND && e !== o.SQUARE && e !== o.PROJECT) ||
                  this._renderer.strokeCap(e),
                this
              );
            }),
            (n.prototype.strokeJoin = function (e) {
              return (
                (e !== o.ROUND && e !== o.BEVEL && e !== o.MITER) ||
                  this._renderer.strokeJoin(e),
                this
              );
            }),
            (n.prototype.strokeWeight = function (e) {
              return this._renderer.strokeWeight(e), this;
            }),
            (t.exports = n);
        },
        { "./constants": 36, "./core": 37 },
      ],
      35: [
        function (e, t, r) {
          var i = e("./constants");
          t.exports = {
            modeAdjust: function (e, t, r, n, o) {
              return o === i.CORNER
                ? { x: e, y: t, w: r, h: n }
                : o === i.CORNERS
                ? { x: e, y: t, w: r - e, h: n - t }
                : o === i.RADIUS
                ? { x: e - r, y: t - n, w: 2 * r, h: 2 * n }
                : o === i.CENTER
                ? { x: e - 0.5 * r, y: t - 0.5 * n, w: r, h: n }
                : void 0;
            },
            arcModeAdjust: function (e, t, r, n, o) {
              return o === i.CORNER
                ? { x: e + 0.5 * r, y: t + 0.5 * n, w: r, h: n }
                : o === i.CORNERS
                ? { x: e, y: t, w: r + e, h: n + t }
                : o === i.RADIUS
                ? { x: e, y: t, w: 2 * r, h: 2 * n }
                : o === i.CENTER
                ? { x: e, y: t, w: r, h: n }
                : void 0;
            },
          };
        },
        { "./constants": 36 },
      ],
      36: [
        function (e, t, r) {
          var n = Math.PI;
          t.exports = {
            P2D: "p2d",
            WEBGL: "webgl",
            ARROW: "default",
            CROSS: "crosshair",
            HAND: "pointer",
            MOVE: "move",
            TEXT: "text",
            WAIT: "wait",
            HALF_PI: n / 2,
            PI: n,
            QUARTER_PI: n / 4,
            TAU: 2 * n,
            TWO_PI: 2 * n,
            DEGREES: "degrees",
            RADIANS: "radians",
            CORNER: "corner",
            CORNERS: "corners",
            RADIUS: "radius",
            RIGHT: "right",
            LEFT: "left",
            CENTER: "center",
            TOP: "top",
            BOTTOM: "bottom",
            BASELINE: "alphabetic",
            POINTS: 0,
            LINES: 1,
            LINE_STRIP: 3,
            LINE_LOOP: 2,
            TRIANGLES: 4,
            TRIANGLE_FAN: 6,
            TRIANGLE_STRIP: 5,
            QUADS: "quads",
            QUAD_STRIP: "quad_strip",
            CLOSE: "close",
            OPEN: "open",
            CHORD: "chord",
            PIE: "pie",
            PROJECT: "square",
            SQUARE: "butt",
            ROUND: "round",
            BEVEL: "bevel",
            MITER: "miter",
            RGB: "rgb",
            HSB: "hsb",
            HSL: "hsl",
            AUTO: "auto",
            ALT: 18,
            BACKSPACE: 8,
            CONTROL: 17,
            DELETE: 46,
            DOWN_ARROW: 40,
            ENTER: 13,
            ESCAPE: 27,
            LEFT_ARROW: 37,
            OPTION: 18,
            RETURN: 13,
            RIGHT_ARROW: 39,
            SHIFT: 16,
            TAB: 9,
            UP_ARROW: 38,
            BLEND: "normal",
            ADD: "lighter",
            DARKEST: "darken",
            LIGHTEST: "lighten",
            DIFFERENCE: "difference",
            EXCLUSION: "exclusion",
            MULTIPLY: "multiply",
            SCREEN: "screen",
            REPLACE: "source-over",
            OVERLAY: "overlay",
            HARD_LIGHT: "hard-light",
            SOFT_LIGHT: "soft-light",
            DODGE: "color-dodge",
            BURN: "color-burn",
            THRESHOLD: "threshold",
            GRAY: "gray",
            OPAQUE: "opaque",
            INVERT: "invert",
            POSTERIZE: "posterize",
            DILATE: "dilate",
            ERODE: "erode",
            BLUR: "blur",
            NORMAL: "normal",
            ITALIC: "italic",
            BOLD: "bold",
            _DEFAULT_TEXT_FILL: "#000000",
            _DEFAULT_LEADMULT: 1.25,
            _CTX_MIDDLE: "middle",
            LINEAR: "linear",
            QUADRATIC: "quadratic",
            BEZIER: "bezier",
            CURVE: "curve",
            _DEFAULT_STROKE: "#000000",
            _DEFAULT_FILL: "#FFFFFF",
          };
        },
        {},
      ],
      37: [
        function (e, t, r) {
          "use strict";
          e("./shim");
          var n,
            o = e("./constants"),
            u = function (e, t, r) {
              2 === arguments.length &&
                "boolean" == typeof t &&
                ((r = t), (t = void 0)),
                (this._setupDone = !1),
                (this._pixelDensity = Math.ceil(window.devicePixelRatio) || 1),
                (this._userNode = t),
                (this._curElement = null),
                (this._elements = []),
                (this._requestAnimId = 0),
                (this._preloadCount = 0),
                (this._isGlobal = !1),
                (this._loop = !0),
                (this._styles = []),
                (this._defaultCanvasSize = { width: 100, height: 100 }),
                (this._events = {
                  mousemove: null,
                  mousedown: null,
                  mouseup: null,
                  dragend: null,
                  dragover: null,
                  click: null,
                  mouseover: null,
                  mouseout: null,
                  keydown: null,
                  keyup: null,
                  keypress: null,
                  touchstart: null,
                  touchmove: null,
                  touchend: null,
                  resize: null,
                  blur: null,
                }),
                (this._events.wheel = null),
                (this._loadingScreenId = "p5_loading"),
                window.DeviceOrientationEvent &&
                  (this._events.deviceorientation = null),
                window.DeviceMotionEvent &&
                  !window._isNodeWebkit &&
                  (this._events.devicemotion = null),
                (this._start = function () {
                  this._userNode &&
                    "string" == typeof this._userNode &&
                    (this._userNode = document.getElementById(this._userNode));
                  var e = this.preload || window.preload;
                  if (e) {
                    var t,
                      r = document.getElementById(this._loadingScreenId);
                    for (t in (r ||
                      (((r = document.createElement("div")).innerHTML =
                        "Loading..."),
                      (r.style.position = "absolute"),
                      (r.id = this._loadingScreenId),
                      (this._userNode || document.body).appendChild(r)),
                    this._preloadMethods)) {
                      this._preloadMethods[t] = this._preloadMethods[t] || u;
                      var n = this._preloadMethods[t];
                      (n !== u.prototype && n !== u) ||
                        (n = this._isGlobal ? window : this),
                        (this._registeredPreloadMethods[t] = n[t]),
                        (n[t] = this._wrapPreload(n, t));
                    }
                    e(), this._runIfPreloadsAreDone();
                  } else this._setup(), this._runFrames(), this._draw();
                }.bind(this)),
                (this._runIfPreloadsAreDone = function () {
                  var e,
                    t = this._isGlobal ? window : this;
                  0 === t._preloadCount &&
                    ((e = document.getElementById(t._loadingScreenId)) &&
                      e.parentNode.removeChild(e),
                    t._setup(),
                    t._runFrames(),
                    t._draw());
                }),
                (this._decrementPreload = function () {
                  var e = this._isGlobal ? window : this;
                  e._setProperty("_preloadCount", e._preloadCount - 1),
                    e._runIfPreloadsAreDone();
                }),
                (this._wrapPreload = function (r, n) {
                  return function () {
                    this._incrementPreload();
                    for (
                      var e = new Array(arguments.length), t = 0;
                      t < e.length;
                      ++t
                    )
                      e[t] = arguments[t];
                    return (
                      e.push(this._decrementPreload.bind(this)),
                      this._registeredPreloadMethods[n].apply(r, e)
                    );
                  }.bind(this);
                }),
                (this._incrementPreload = function () {
                  var e = this._isGlobal ? window : this;
                  e._setProperty("_preloadCount", e._preloadCount + 1);
                }),
                (this._setup = function () {
                  this.createCanvas(
                    this._defaultCanvasSize.width,
                    this._defaultCanvasSize.height,
                    "p2d",
                    !0
                  );
                  var e = this._isGlobal ? window : this;
                  if ("function" == typeof e.preload)
                    for (var t in this._preloadMethods)
                      (e[t] = this._preloadMethods[t][t]),
                        e[t] && this && (e[t] = e[t].bind(this));
                  "function" == typeof e.setup && e.setup();
                  for (
                    var r = document.getElementsByTagName("canvas"), n = 0;
                    n < r.length;
                    n++
                  ) {
                    var o = r[n];
                    "true" === o.dataset.hidden &&
                      ((o.style.visibility = ""), delete o.dataset.hidden);
                  }
                  this._setupDone = !0;
                }.bind(this)),
                (this._draw = function () {
                  var e = window.performance.now(),
                    t = e - this._lastFrameTime,
                    r = 1e3 / this._targetFrameRate;
                  (!this._loop || r - 5 <= t) &&
                    (this._setProperty("frameCount", this.frameCount + 1),
                    this.redraw(),
                    this._updateMouseCoords(),
                    (this._frameRate = 1e3 / (e - this._lastFrameTime)),
                    (this._lastFrameTime = e)),
                    this._loop &&
                      (this._requestAnimId = window.requestAnimationFrame(
                        this._draw
                      ));
                }.bind(this)),
                (this._runFrames = function () {
                  this._updateInterval && clearInterval(this._updateInterval);
                }.bind(this)),
                (this._setProperty = function (e, t) {
                  (this[e] = t), this._isGlobal && (window[e] = t);
                }.bind(this)),
                (this.remove = function () {
                  if (this._curElement) {
                    for (var e in ((this._loop = !1),
                    this._requestAnimId &&
                      window.cancelAnimationFrame(this._requestAnimId),
                    this._events))
                      window.removeEventListener(e, this._events[e]);
                    for (var t = 0; t < this._elements.length; t++) {
                      var r,
                        n = this._elements[t];
                      for (r in (n.elt.parentNode &&
                        n.elt.parentNode.removeChild(n.elt),
                      n._events))
                        n.elt.removeEventListener(r, n._events[r]);
                    }
                    var o = this;
                    if (
                      (this._registeredMethods.remove.forEach(function (e) {
                        void 0 !== e && e.call(o);
                      }),
                      this._isGlobal)
                    ) {
                      for (var i in u.prototype)
                        try {
                          delete window[i];
                        } catch (e) {
                          window[i] = void 0;
                        }
                      for (var s in this)
                        if (this.hasOwnProperty(s))
                          try {
                            delete window[s];
                          } catch (e) {
                            window[s] = void 0;
                          }
                    }
                  }
                }.bind(this)),
                this._registeredMethods.init.forEach(function (e) {
                  void 0 !== e && e.call(this);
                }, this);
              var n,
                o,
                i = this._createFriendlyGlobalFunctionBinder();
              if (e) e(this);
              else {
                for (var s in ((this._isGlobal = !0),
                (u.instance = this),
                u.prototype))
                  "function" == typeof u.prototype[s]
                    ? ((n = s.substring(2)),
                      this._events.hasOwnProperty(n) ||
                        (Math.hasOwnProperty(s) && Math[s] === u.prototype[s]
                          ? i(s, u.prototype[s])
                          : i(s, u.prototype[s].bind(this))))
                    : i(s, u.prototype[s]);
                for (var a in this) this.hasOwnProperty(a) && i(a, this[a]);
              }
              for (o in this._events) {
                var h = this["_on" + o];
                h &&
                  ((h = h.bind(this)),
                  window.addEventListener(o, h),
                  (this._events[o] = h));
              }
              var l = function () {
                  this._setProperty("focused", !0);
                }.bind(this),
                p = function () {
                  this._setProperty("focused", !1);
                }.bind(this);
              window.addEventListener("focus", l),
                window.addEventListener("blur", p),
                this.registerMethod("remove", function () {
                  window.removeEventListener("focus", l),
                    window.removeEventListener("blur", p);
                }),
                r || "complete" === document.readyState
                  ? this._start()
                  : window.addEventListener("load", this._start.bind(this), !1);
            };
          for (n in ((u.instance = null), (u.disableFriendlyErrors = !1), o))
            u.prototype[n] = o[n];
          (u.prototype._preloadMethods = {
            loadJSON: u.prototype,
            loadImage: u.prototype,
            loadStrings: u.prototype,
            loadXML: u.prototype,
            loadShape: u.prototype,
            loadTable: u.prototype,
            loadFont: u.prototype,
            loadModel: u.prototype,
          }),
            (u.prototype._registeredMethods = {
              init: [],
              pre: [],
              post: [],
              remove: [],
            }),
            (u.prototype._registeredPreloadMethods = {}),
            (u.prototype.registerPreloadMethod = function (e, t) {
              u.prototype._preloadMethods.hasOwnProperty(e) ||
                (u.prototype._preloadMethods[e] = t);
            }),
            (u.prototype.registerMethod = function (e, t) {
              u.prototype._registeredMethods.hasOwnProperty(e) ||
                (u.prototype._registeredMethods[e] = []),
                u.prototype._registeredMethods[e].push(t);
            }),
            (u.prototype._createFriendlyGlobalFunctionBinder = function (e) {
              var n = (e = e || {}).globalObject || window,
                o = e.log || console.log.bind(console),
                i = { print: !0 };
              return function (t, r) {
                if (
                  u.disableFriendlyErrors ||
                  "undefined" != typeof IS_MINIFIED ||
                  "function" != typeof r ||
                  t in u.prototype._preloadMethods
                )
                  n[t] = r;
                else
                  try {
                    if (t in n && !(t in i))
                      throw new Error('global "' + t + '" already exists');
                    Object.defineProperty(n, t, {
                      configurable: !0,
                      enumerable: !0,
                      get: function () {
                        return r;
                      },
                      set: function (e) {
                        Object.defineProperty(n, t, {
                          configurable: !0,
                          enumerable: !0,
                          value: e,
                          writable: !0,
                        }),
                          o(
                            'You just changed the value of "' +
                              t +
                              "\", which was a p5 function. This could cause problems later if you're not careful."
                          );
                      },
                    });
                  } catch (e) {
                    o(
                      'p5 had problems creating the global function "' +
                        t +
                        '", possibly because your code is already using that name as a variable. You may want to rename your variable to something else.'
                    ),
                      (n[t] = r);
                  }
              };
            }),
            (t.exports = u);
        },
        { "./constants": 36, "./shim": 46 },
      ],
      38: [
        function (e, t, r) {
          "use strict";
          var n = e("./core");
          e("./error_helpers");
          var o = 20,
            i = 20;
          (n.prototype.bezier = function () {
            for (var e = new Array(arguments.length), t = 0; t < e.length; ++t)
              e[t] = arguments[t];
            return (
              (this._renderer._doStroke || this._renderer._doFill) &&
                (this._renderer.isP3D
                  ? (e.push(o), this._renderer.bezier(e))
                  : this._renderer.bezier(
                      e[0],
                      e[1],
                      e[2],
                      e[3],
                      e[4],
                      e[5],
                      e[6],
                      e[7]
                    )),
              this
            );
          }),
            (n.prototype.bezierDetail = function (e) {
              return (o = e), this;
            }),
            (n.prototype.bezierPoint = function (e, t, r, n, o) {
              var i = 1 - o;
              return (
                Math.pow(i, 3) * e +
                3 * Math.pow(i, 2) * o * t +
                3 * i * Math.pow(o, 2) * r +
                Math.pow(o, 3) * n
              );
            }),
            (n.prototype.bezierTangent = function (e, t, r, n, o) {
              var i = 1 - o;
              return (
                3 * n * Math.pow(o, 2) -
                3 * r * Math.pow(o, 2) +
                6 * r * i * o -
                6 * t * i * o +
                3 * t * Math.pow(i, 2) -
                3 * e * Math.pow(i, 2)
              );
            }),
            (n.prototype.curve = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              return (
                this._renderer._doStroke &&
                  (this._renderer.isP3D
                    ? (e.push(i), this._renderer.curve(e))
                    : this._renderer.curve(
                        e[0],
                        e[1],
                        e[2],
                        e[3],
                        e[4],
                        e[5],
                        e[6],
                        e[7]
                      )),
                this
              );
            }),
            (n.prototype.curveDetail = function (e) {
              return (i = e), this;
            }),
            (n.prototype.curveTightness = function (e) {
              this._renderer._curveTightness = e;
            }),
            (n.prototype.curvePoint = function (e, t, r, n, o) {
              var i = o * o * o,
                s = o * o;
              return (
                e * (-0.5 * i + s - 0.5 * o) +
                t * (1.5 * i - 2.5 * s + 1) +
                r * (-1.5 * i + 2 * s + 0.5 * o) +
                n * (0.5 * i - 0.5 * s)
              );
            }),
            (n.prototype.curveTangent = function (e, t, r, n, o) {
              var i = o * o;
              return (
                e * ((-3 * i) / 2 + 2 * o - 0.5) +
                t * ((9 * i) / 2 - 5 * o) +
                r * ((-9 * i) / 2 + 4 * o + 0.5) +
                n * ((3 * i) / 2 - o)
              );
            }),
            (t.exports = n);
        },
        { "./core": 37, "./error_helpers": 40 },
      ],
      39: [
        function (e, t, r) {
          "use strict";
          var n = e("./core"),
            e = e("./constants"),
            i = [e.ARROW, e.CROSS, e.HAND, e.MOVE, e.TEXT, e.WAIT];
          (n.prototype._frameRate = 0),
            (n.prototype._lastFrameTime = window.performance.now()),
            (n.prototype._targetFrameRate = 60);
          var o = window.print;
          function s() {
            return (
              window.innerWidth ||
              (document.documentElement &&
                document.documentElement.clientWidth) ||
              (document.body && document.body.clientWidth) ||
              0
            );
          }
          function a() {
            return (
              window.innerHeight ||
              (document.documentElement &&
                document.documentElement.clientHeight) ||
              (document.body && document.body.clientHeight) ||
              0
            );
          }
          window.console && console.log
            ? (n.prototype.print = function (t) {
                try {
                  var e;
                  0 === arguments.length
                    ? o()
                    : 1 < arguments.length
                    ? console.log.apply(console, arguments)
                    : ((e = JSON.parse(JSON.stringify(t))), console.log(e));
                } catch (e) {
                  console.log(t);
                }
              })
            : (n.prototype.print = function () {}),
            (n.prototype.frameCount = 0),
            (n.prototype.focused = document.hasFocus()),
            (n.prototype.cursor = function (e, t, r) {
              var n = "auto",
                o = this._curElement.elt;
              -1 < i.indexOf(e)
                ? (n = e)
                : "string" == typeof e &&
                  ((r =
                    t && r && "number" == typeof t && "number" == typeof r
                      ? t + " " + r
                      : ""),
                  (n =
                    "http://" === e.substring(0, 7) ||
                    "https://" === e.substring(0, 8) ||
                    /\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(e)
                      ? "url(" + e + ") " + r + ", auto"
                      : e)),
                (o.style.cursor = n);
            }),
            (n.prototype.frameRate = function (e) {
              return "number" != typeof e || e <= 0
                ? this._frameRate
                : (this._setProperty("_targetFrameRate", e),
                  this._runFrames(),
                  this);
            }),
            (n.prototype.getFrameRate = function () {
              return this.frameRate();
            }),
            (n.prototype.setFrameRate = function (e) {
              return this.frameRate(e);
            }),
            (n.prototype.noCursor = function () {
              this._curElement.elt.style.cursor = "none";
            }),
            (n.prototype.displayWidth = screen.width),
            (n.prototype.displayHeight = screen.height),
            (n.prototype.windowWidth = s()),
            (n.prototype.windowHeight = a()),
            (n.prototype._onresize = function (e) {
              this._setProperty("windowWidth", s()),
                this._setProperty("windowHeight", a());
              var t = this._isGlobal ? window : this;
              "function" == typeof t.windowResized &&
                (void 0 === (t = t.windowResized(e)) ||
                  t ||
                  e.preventDefault());
            }),
            (n.prototype.width = 0),
            (n.prototype.height = 0),
            (n.prototype.fullscreen = function (e) {
              if (void 0 === e)
                return (
                  document.fullscreenElement ||
                  document.webkitFullscreenElement ||
                  document.mozFullScreenElement ||
                  document.msFullscreenElement
                );
              e
                ? (function (e) {
                    if (
                      !(
                        document.fullscreenEnabled ||
                        document.webkitFullscreenEnabled ||
                        document.mozFullScreenEnabled ||
                        document.msFullscreenEnabled
                      )
                    )
                      throw new Error(
                        "Fullscreen not enabled in this browser."
                      );
                    e.requestFullscreen
                      ? e.requestFullscreen()
                      : e.mozRequestFullScreen
                      ? e.mozRequestFullScreen()
                      : e.webkitRequestFullscreen
                      ? e.webkitRequestFullscreen()
                      : e.msRequestFullscreen && e.msRequestFullscreen();
                  })(document.documentElement)
                : document.exitFullscreen
                ? document.exitFullscreen()
                : document.mozCancelFullScreen
                ? document.mozCancelFullScreen()
                : document.webkitExitFullscreen
                ? document.webkitExitFullscreen()
                : document.msExitFullscreen && document.msExitFullscreen();
            }),
            (n.prototype.pixelDensity = function (e) {
              if ("number" != typeof e) return this._pixelDensity;
              (this._pixelDensity = e),
                this.resizeCanvas(this.width, this.height, !0);
            }),
            (n.prototype.displayDensity = function () {
              return window.devicePixelRatio;
            }),
            (n.prototype.getURL = function () {
              return location.href;
            }),
            (n.prototype.getURLPath = function () {
              return location.pathname.split("/").filter(function (e) {
                return "" !== e;
              });
            }),
            (n.prototype.getURLParams = function () {
              for (
                var e, t = /[?&]([^&=]+)(?:[&=])([^&=]+)/gim, r = {};
                null != (e = t.exec(location.search));

              )
                e.index === t.lastIndex && t.lastIndex++, (r[e[1]] = e[2]);
              return r;
            }),
            (t.exports = n);
        },
        { "./constants": 36, "./core": 37 },
      ],
      40: [
        function (r, e, t) {
          "use strict";
          for (
            var n = r("./core"),
              o = !1,
              i = {},
              s = i.toString,
              a = [
                "Boolean",
                "Number",
                "String",
                "Function",
                "Array",
                "Date",
                "RegExp",
                "Object",
                "Error",
              ],
              h = 0;
            h < a.length;
            h++
          )
            i["[object " + a[h] + "]"] = a[h].toLowerCase();
          function l(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? i[s.call(e)] || "object"
              : typeof e;
          }
          var p = ["#2D7BB6", "#EE9900", "#4DB200", "#C83C00"];
          function u(e, t, r) {
            o &&
              (console.log(
                "%c    _ \n /\\| |/\\ \n \\ ` ' /  \n / , . \\  \n \\/|_|\\/ \n\n%c> p5.js says: Welcome! This is your friendly debugger. To turn me off switch to using “p5.min.js”.",
                "background-color:transparent;color:#ED225D;",
                "background-color:#ED225D;color:white;"
              ),
              (o = !1)),
              "undefined" === l(r)
                ? (r = "#B40033")
                : "number" === l(r) && (r = p[r]);
          }
          var c = {
            0: {
              fileType: "image",
              method: "loadImage",
              message: " hosting the image online,",
            },
            1: { fileType: "XML file", method: "loadXML" },
            2: { fileType: "table file", method: "loadTable" },
            3: { fileType: "text file", method: "loadStrings" },
            4: {
              fileType: "font",
              method: "loadFont",
              message: " hosting the font online,",
            },
          };
          n._friendlyFileLoadError = function (e, t) {
            (e = c[e]), e.fileType, e.message;
            u(0, e.method, 3);
          };
          var d = null;
          function f() {
            function e(r) {
              return Object.getOwnPropertyNames(r)
                .filter(function (e) {
                  return "_" !== e[0] && !(e in t) && (t[e] = !0);
                })
                .map(function (e) {
                  var t =
                    "function" == typeof r[e]
                      ? "function"
                      : e === e.toUpperCase()
                      ? "constant"
                      : "variable";
                  return { name: e, type: t };
                });
            }
            var t = {};
            (d = [].concat(e(n.prototype), e(r("./constants")))).sort(function (
              e,
              t
            ) {
              return t.name.length - e.name.length;
            });
          }
          function m(t, r) {
            (r = r || console.log.bind(console)),
              d || f(),
              d.some(function (e) {
                if (
                  t.message &&
                  null !== t.message.match("\\W?" + e.name + "\\W")
                )
                  return (
                    r(
                      "%cDid you just try to use p5.js's " +
                        e.name +
                        ("function" === e.type ? "() " : " ") +
                        e.type +
                        "? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup",
                      "color: #B40033"
                    ),
                    !0
                  );
              });
          }
          (n.prototype._helpForMisusedAtTopLevelCode = m),
            "complete" !== document.readyState &&
              (window.addEventListener("error", m, !1),
              window.addEventListener("load", function () {
                window.removeEventListener("error", m, !1);
              })),
            (e.exports = n);
        },
        { "./constants": 36, "./core": 37 },
      ],
      41: [
        function (e, t, r) {
          var s = e("./core");
          function n(e, t, r) {
            t = t.bind(r);
            r.elt.addEventListener(e, t, !1), (r._events[e] = t);
          }
          (s.Element = function (e, t) {
            (this.elt = e),
              (this._pInst = t),
              (this._events = {}),
              (this.width = this.elt.offsetWidth),
              (this.height = this.elt.offsetHeight);
          }),
            (s.Element.prototype.parent = function (e) {
              return 0 === arguments.length
                ? this.elt.parentNode
                : ("string" == typeof e
                    ? ("#" === e[0] && (e = e.substring(1)),
                      (e = document.getElementById(e)))
                    : e instanceof s.Element && (e = e.elt),
                  e.appendChild(this.elt),
                  this);
            }),
            (s.Element.prototype.id = function (e) {
              return 0 === arguments.length
                ? this.elt.id
                : ((this.elt.id = e),
                  (this.width = this.elt.offsetWidth),
                  (this.height = this.elt.offsetHeight),
                  this);
            }),
            (s.Element.prototype.class = function (e) {
              return 0 === arguments.length
                ? this.elt.className
                : ((this.elt.className = e), this);
            }),
            (s.Element.prototype.mousePressed = function (e) {
              return n("mousedown", e, this), n("touchstart", e, this), this;
            }),
            (s.Element.prototype.mouseWheel = function (e) {
              return n("wheel", e, this), this;
            }),
            (s.Element.prototype.mouseReleased = function (e) {
              return n("mouseup", e, this), n("touchend", e, this), this;
            }),
            (s.Element.prototype.mouseClicked = function (e) {
              return n("click", e, this), this;
            }),
            (s.Element.prototype.mouseMoved = function (e) {
              return n("mousemove", e, this), n("touchmove", e, this), this;
            }),
            (s.Element.prototype.mouseOver = function (e) {
              return n("mouseover", e, this), this;
            }),
            (s.Element.prototype.changed = function (e) {
              return n("change", e, this), this;
            }),
            (s.Element.prototype.input = function (e) {
              return n("input", e, this), this;
            }),
            (s.Element.prototype.mouseOut = function (e) {
              return n("mouseout", e, this), this;
            }),
            (s.Element.prototype.touchStarted = function (e) {
              return n("touchstart", e, this), n("mousedown", e, this), this;
            }),
            (s.Element.prototype.touchMoved = function (e) {
              return n("touchmove", e, this), n("mousemove", e, this), this;
            }),
            (s.Element.prototype.touchEnded = function (e) {
              return n("touchend", e, this), n("mouseup", e, this), this;
            }),
            (s.Element.prototype.dragOver = function (e) {
              return n("dragover", e, this), this;
            }),
            (s.Element.prototype.dragLeave = function (e) {
              return n("dragleave", e, this), this;
            }),
            (s.Element.prototype.drop = function (i, e) {
              return (
                window.File &&
                window.FileReader &&
                window.FileList &&
                window.Blob
                  ? (n(
                      "dragover",
                      function (e) {
                        e.stopPropagation(), e.preventDefault();
                      },
                      this
                    ),
                    n(
                      "dragleave",
                      function (e) {
                        e.stopPropagation(), e.preventDefault();
                      },
                      this
                    ),
                    1 < arguments.length && n("drop", e, this),
                    n(
                      "drop",
                      function (e) {
                        e.stopPropagation(), e.preventDefault();
                        for (
                          var t = e.dataTransfer.files, r = 0;
                          r < t.length;
                          r++
                        ) {
                          var n = t[r],
                            o = new FileReader();
                          (o.onload = (function (e) {
                            var t = new s.File(e);
                            return function (e) {
                              (t.data = e.target.result), i(t);
                            };
                          })(n)),
                            -1 < n.type.indexOf("text")
                              ? o.readAsText(n)
                              : o.readAsDataURL(n);
                        }
                      },
                      this
                    ))
                  : console.log(
                      "The File APIs are not fully supported in this browser."
                    ),
                this
              );
            }),
            (s.Element.prototype._setProperty = function (e, t) {
              this[e] = t;
            }),
            (t.exports = s.Element);
        },
        { "./core": 37 },
      ],
      42: [
        function (e, t, r) {
          var s = e("./core"),
            a = e("./constants");
          (s.Graphics = function (e, t, r, n) {
            var o,
              i = r || a.P2D,
              r = document.createElement("canvas");
            for (o in ((this._userNode || document.body).appendChild(r),
            s.Element.call(this, r, n, !1),
            (this._styles = []),
            (this.width = e),
            (this.height = t),
            (this._pixelDensity = n._pixelDensity),
            i === a.WEBGL
              ? (this._renderer = new s.RendererGL(r, this, !1))
              : (this._renderer = new s.Renderer2D(r, this, !1)),
            this._renderer.resize(e, t),
            this._renderer._applyDefaults(),
            n._elements.push(this),
            s.prototype))
              this[o] ||
                ("function" == typeof s.prototype[o]
                  ? (this[o] = s.prototype[o].bind(this))
                  : (this[o] = s.prototype[o]));
            return this;
          }),
            (s.Graphics.prototype = Object.create(s.Element.prototype)),
            (s.Graphics.prototype.remove = function () {
              for (var e in (this.elt.parentNode &&
                this.elt.parentNode.removeChild(this.elt),
              this._events))
                this.elt.removeEventListener(e, this._events[e]);
            }),
            (t.exports = s.Graphics);
        },
        { "./constants": 36, "./core": 37 },
      ],
      43: [
        function (e, t, r) {
          var n = e("./core"),
            o = e("../core/constants");
          function s(e) {
            var t = 0,
              r = 0;
            if (e.offsetParent)
              for (
                ;
                (t += e.offsetLeft), (r += e.offsetTop), (e = e.offsetParent);

              );
            else (t += e.offsetLeft), (r += e.offsetTop);
            return [t, r];
          }
          (n.Renderer = function (e, t, r) {
            n.Element.call(this, e, t),
              (this.canvas = e),
              (this._pInst = t),
              r
                ? ((this._isMainCanvas = !0),
                  this._pInst._setProperty("_curElement", this),
                  this._pInst._setProperty("canvas", this.canvas),
                  this._pInst._setProperty("width", this.width),
                  this._pInst._setProperty("height", this.height))
                : ((this.canvas.style.display = "none"), (this._styles = [])),
              (this._textSize = 12),
              (this._textLeading = 15),
              (this._textFont = "sans-serif"),
              (this._textStyle = o.NORMAL),
              (this._textAscent = null),
              (this._textDescent = null),
              (this._rectMode = o.CORNER),
              (this._ellipseMode = o.CENTER),
              (this._curveTightness = 0),
              (this._imageMode = o.CORNER),
              (this._tint = null),
              (this._doStroke = !0),
              (this._doFill = !0),
              (this._strokeSet = !1),
              (this._fillSet = !1),
              (this._colorMode = o.RGB),
              (this._colorMaxes = {
                rgb: [255, 255, 255, 255],
                hsb: [360, 100, 100, 1],
                hsl: [360, 100, 100, 1],
              });
          }),
            (n.Renderer.prototype = Object.create(n.Element.prototype)),
            (n.Renderer.prototype.resize = function (e, t) {
              (this.width = e),
                (this.height = t),
                (this.elt.width = e * this._pInst._pixelDensity),
                (this.elt.height = t * this._pInst._pixelDensity),
                (this.elt.style.width = e + "px"),
                (this.elt.style.height = t + "px"),
                this._isMainCanvas &&
                  (this._pInst._setProperty("width", this.width),
                  this._pInst._setProperty("height", this.height));
            }),
            (n.Renderer.prototype.textLeading = function (e) {
              return arguments.length && e
                ? (this._setProperty("_textLeading", e), this)
                : this._textLeading;
            }),
            (n.Renderer.prototype.textSize = function (e) {
              return arguments.length && e
                ? (this._setProperty("_textSize", e),
                  this._setProperty("_textLeading", e * o._DEFAULT_LEADMULT),
                  this._applyTextProperties())
                : this._textSize;
            }),
            (n.Renderer.prototype.textStyle = function (e) {
              return arguments.length && e
                ? ((e !== o.NORMAL && e !== o.ITALIC && e !== o.BOLD) ||
                    this._setProperty("_textStyle", e),
                  this._applyTextProperties())
                : this._textStyle;
            }),
            (n.Renderer.prototype.textAscent = function () {
              return (
                null === this._textAscent && this._updateTextMetrics(),
                this._textAscent
              );
            }),
            (n.Renderer.prototype.textDescent = function () {
              return (
                null === this._textDescent && this._updateTextMetrics(),
                this._textDescent
              );
            }),
            (n.Renderer.prototype._applyDefaults = function () {
              return this;
            }),
            (n.Renderer.prototype._isOpenType = function (e) {
              return (
                "object" == typeof (e = e || this._textFont) &&
                e.font &&
                e.font.supported
              );
            }),
            (n.Renderer.prototype._updateTextMetrics = function () {
              if (this._isOpenType())
                return (
                  this._setProperty(
                    "_textAscent",
                    this._textFont._textAscent()
                  ),
                  this._setProperty(
                    "_textDescent",
                    this._textFont._textDescent()
                  ),
                  this
                );
              var e = document.createElement("span");
              (e.style.fontFamily = this._textFont),
                (e.style.fontSize = this._textSize + "px"),
                (e.innerHTML = "ABCjgq|");
              var t = document.createElement("div");
              (t.style.display = "inline-block"),
                (t.style.width = "1px"),
                (t.style.height = "0px");
              var r = document.createElement("div");
              r.appendChild(e),
                r.appendChild(t),
                (r.style.height = "0px"),
                (r.style.overflow = "hidden"),
                document.body.appendChild(r),
                (t.style.verticalAlign = "baseline");
              var n = s(t),
                o = s(e),
                i = n[1] - o[1];
              (t.style.verticalAlign = "bottom"), (n = s(t)), (o = s(e));
              o = n[1] - o[1] - i;
              return (
                document.body.removeChild(r),
                this._setProperty("_textAscent", i),
                this._setProperty("_textDescent", o),
                this
              );
            }),
            (t.exports = n.Renderer);
        },
        { "../core/constants": 36, "./core": 37 },
      ],
      44: [
        function (e, t, r) {
          var u = e("./core"),
            d = e("./canvas"),
            y = e("./constants"),
            p = e("../image/filters");
          e("./p5.Renderer");
          var c = "rgba(0,0,0,0)";
          (u.Renderer2D = function (e, t, r) {
            return (
              u.Renderer.call(this, e, t, r),
              (this.drawingContext = this.canvas.getContext("2d")),
              this._pInst._setProperty("drawingContext", this.drawingContext),
              this
            );
          }),
            (u.Renderer2D.prototype = Object.create(u.Renderer.prototype)),
            (u.Renderer2D.prototype._applyDefaults = function () {
              (this.drawingContext.fillStyle = y._DEFAULT_FILL),
                (this.drawingContext.strokeStyle = y._DEFAULT_STROKE),
                (this.drawingContext.lineCap = y.ROUND),
                (this.drawingContext.font = "normal 12px sans-serif");
            }),
            (u.Renderer2D.prototype.resize = function (e, t) {
              u.Renderer.prototype.resize.call(this, e, t),
                this.drawingContext.scale(
                  this._pInst._pixelDensity,
                  this._pInst._pixelDensity
                );
            }),
            (u.Renderer2D.prototype.background = function () {
              var e, t;
              this.drawingContext.save(),
                this.drawingContext.setTransform(1, 0, 0, 1, 0, 0),
                this.drawingContext.scale(
                  this._pInst._pixelDensity,
                  this._pInst._pixelDensity
                ),
                arguments[0] instanceof u.Image
                  ? this._pInst.image(
                      arguments[0],
                      0,
                      0,
                      this.width,
                      this.height
                    )
                  : ((e = this.drawingContext.fillStyle),
                    (t = this._pInst.color.apply(this, arguments).toString()),
                    (this.drawingContext.fillStyle = t),
                    this.drawingContext.fillRect(0, 0, this.width, this.height),
                    (this.drawingContext.fillStyle = e)),
                this.drawingContext.restore();
            }),
            (u.Renderer2D.prototype.clear = function () {
              this.drawingContext.clearRect(0, 0, this.width, this.height);
            }),
            (u.Renderer2D.prototype.fill = function () {
              var e = this.drawingContext,
                t = this._pInst.color.apply(this, arguments);
              e.fillStyle = t.toString();
            }),
            (u.Renderer2D.prototype.stroke = function () {
              var e = this.drawingContext,
                t = this._pInst.color.apply(this, arguments);
              e.strokeStyle = t.toString();
            }),
            (u.Renderer2D.prototype.image = function (
              e,
              t,
              r,
              n,
              o,
              i,
              s,
              a,
              h
            ) {
              var l;
              try {
                this._tint &&
                  (u.MediaElement &&
                    e instanceof u.MediaElement &&
                    e.loadPixels(),
                  e.canvas && (l = this._getTintedImageCanvas(e))),
                  (l = l || e.canvas || e.elt),
                  this.drawingContext.drawImage(l, t, r, n, o, i, s, a, h);
              } catch (e) {
                if ("NS_ERROR_NOT_AVAILABLE" !== e.name) throw e;
              }
            }),
            (u.Renderer2D.prototype._getTintedImageCanvas = function (e) {
              if (!e.canvas) return e;
              var t = p._toPixels(e.canvas),
                r = document.createElement("canvas");
              (r.width = e.canvas.width), (r.height = e.canvas.height);
              for (
                var n = r.getContext("2d"),
                  e = n.createImageData(e.canvas.width, e.canvas.height),
                  o = e.data,
                  i = 0;
                i < t.length;
                i += 4
              ) {
                var s = t[i],
                  a = t[i + 1],
                  h = t[i + 2],
                  l = t[i + 3];
                (o[i] = (s * this._tint[0]) / 255),
                  (o[i + 1] = (a * this._tint[1]) / 255),
                  (o[i + 2] = (h * this._tint[2]) / 255),
                  (o[i + 3] = (l * this._tint[3]) / 255);
              }
              return n.putImageData(e, 0, 0), r;
            }),
            (u.Renderer2D.prototype.blendMode = function (e) {
              this.drawingContext.globalCompositeOperation = e;
            }),
            (u.Renderer2D.prototype.blend = function () {
              var e = this.drawingContext.globalCompositeOperation,
                t = arguments[arguments.length - 1],
                r = Array.prototype.slice.call(
                  arguments,
                  0,
                  arguments.length - 1
                );
              (this.drawingContext.globalCompositeOperation = t),
                this._pInst
                  ? this._pInst.copy.apply(this._pInst, r)
                  : this.copy.apply(this, r),
                (this.drawingContext.globalCompositeOperation = e);
            }),
            (u.Renderer2D.prototype.copy = function () {
              var e, t, r, n, o, i, s, a, h;
              if (9 === arguments.length)
                (e = arguments[0]),
                  (t = arguments[1]),
                  (r = arguments[2]),
                  (n = arguments[3]),
                  (o = arguments[4]),
                  (i = arguments[5]),
                  (s = arguments[6]),
                  (a = arguments[7]),
                  (h = arguments[8]);
              else {
                if (8 !== arguments.length)
                  throw new Error("Signature not supported");
                (e = this._pInst),
                  (t = arguments[0]),
                  (r = arguments[1]),
                  (n = arguments[2]),
                  (o = arguments[3]),
                  (i = arguments[4]),
                  (s = arguments[5]),
                  (a = arguments[6]),
                  (h = arguments[7]);
              }
              u.Renderer2D._copyHelper(e, t, r, n, o, i, s, a, h);
            }),
            (u.Renderer2D._copyHelper = function (e, t, r, n, o, i, s, a, h) {
              e.loadPixels();
              var l = e.canvas.width / e.width;
              this.drawingContext.drawImage(
                e.canvas,
                l * t,
                l * r,
                l * n,
                l * o,
                i,
                s,
                a,
                h
              );
            }),
            (u.Renderer2D.prototype.get = function (e, t, r, n) {
              if (
                (void 0 === e && void 0 === t && void 0 === r && void 0 === n
                  ? ((t = e = 0), (r = this.width), (n = this.height))
                  : void 0 === r && void 0 === n && (n = r = 1),
                e + r < 0 || t + n < 0 || e > this.width || t > this.height)
              )
                return [0, 0, 0, 255];
              var o = this._pInst || this;
              o.loadPixels();
              var i = o._pixelDensity;
              (e = Math.floor(e)),
                (t = Math.floor(t)),
                (r = Math.floor(r)),
                (n = Math.floor(n));
              (e *= i), (t *= i);
              if (1 === r && 1 === n) {
                var s = this.drawingContext.getImageData(e, t, 1, 1).data;
                return [s[0], s[1], s[2], s[3]];
              }
              (s = Math.min(r, o.width)),
                (r = Math.min(n, o.height)),
                (n = s * i),
                (o = r * i),
                (i = new u.Image(s, r));
              return (
                i.canvas
                  .getContext("2d")
                  .drawImage(this.canvas, e, t, n, o, 0, 0, s, r),
                i
              );
            }),
            (u.Renderer2D.prototype.loadPixels = function () {
              var e = this._pixelDensity || this._pInst._pixelDensity,
                t = this.width * e,
                e = this.height * e,
                e = this.drawingContext.getImageData(0, 0, t, e);
              this._pInst
                ? (this._pInst._setProperty("imageData", e),
                  this._pInst._setProperty("pixels", e.data))
                : (this._setProperty("imageData", e),
                  this._setProperty("pixels", e.data));
            }),
            (u.Renderer2D.prototype.set = function (e, t, r) {
              if (
                ((e = Math.floor(e)), (t = Math.floor(t)), r instanceof u.Image)
              )
                this.drawingContext.save(),
                  this.drawingContext.setTransform(1, 0, 0, 1, 0, 0),
                  this.drawingContext.scale(
                    this._pInst._pixelDensity,
                    this._pInst._pixelDensity
                  ),
                  this.drawingContext.drawImage(r.canvas, e, t),
                  this.loadPixels.call(this._pInst),
                  this.drawingContext.restore();
              else {
                var n = this._pInst || this,
                  o = 0,
                  i = 0,
                  s = 0,
                  a = 0,
                  h =
                    4 *
                    (t * n._pixelDensity * (this.width * n._pixelDensity) +
                      e * n._pixelDensity);
                if ((n.imageData || n.loadPixels.call(n), "number" == typeof r))
                  h < n.pixels.length && ((s = i = o = r), (a = 255));
                else if (r instanceof Array) {
                  if (r.length < 4)
                    throw new Error(
                      "pixel array must be of the form [R, G, B, A]"
                    );
                  h < n.pixels.length &&
                    ((o = r[0]), (i = r[1]), (s = r[2]), (a = r[3]));
                } else
                  r instanceof u.Color &&
                    h < n.pixels.length &&
                    ((o = r.levels[0]),
                    (i = r.levels[1]),
                    (s = r.levels[2]),
                    (a = r.levels[3]));
                for (var l = 0; l < n._pixelDensity; l++)
                  for (var p = 0; p < n._pixelDensity; p++)
                    (h =
                      4 *
                      ((t * n._pixelDensity + p) *
                        this.width *
                        n._pixelDensity +
                        (e * n._pixelDensity + l))),
                      (n.pixels[h] = o),
                      (n.pixels[h + 1] = i),
                      (n.pixels[h + 2] = s),
                      (n.pixels[h + 3] = a);
              }
            }),
            (u.Renderer2D.prototype.updatePixels = function (e, t, r, n) {
              var o = this._pixelDensity || this._pInst._pixelDensity;
              void 0 === e &&
                void 0 === t &&
                void 0 === r &&
                void 0 === n &&
                ((t = e = 0), (r = this.width), (n = this.height)),
                (r *= o),
                (n *= o),
                this._pInst
                  ? this.drawingContext.putImageData(
                      this._pInst.imageData,
                      e,
                      t,
                      0,
                      0,
                      r,
                      n
                    )
                  : this.drawingContext.putImageData(
                      this.imageData,
                      e,
                      t,
                      0,
                      0,
                      r,
                      n
                    );
            }),
            (u.Renderer2D.prototype._acuteArcToBezier = function (e, t) {
              var r = t / 2,
                n = Math.cos(r),
                o = Math.sin(r),
                i = 1 / Math.tan(r),
                s = e + r,
                a = Math.cos(s),
                r = Math.sin(s),
                s = (4 - n) / 3,
                i = o + (n - s) * i;
              return {
                ax: Math.cos(e),
                ay: Math.sin(e),
                bx: s * a + i * r,
                by: s * r - i * a,
                cx: s * a - i * r,
                cy: s * r + i * a,
                dx: Math.cos(e + t),
                dy: Math.sin(e + t),
              };
            }),
            (u.Renderer2D.prototype.arc = function (e, t, r, n, o, i, s) {
              for (
                var a,
                  h = this.drawingContext,
                  l = d.arcModeAdjust(e, t, r, n, this._ellipseMode),
                  p = l.w / 2,
                  u = l.h / 2,
                  c = [];
                1e-5 < i - o;

              )
                (a = Math.min(i - o, y.HALF_PI)),
                  c.push(this._acuteArcToBezier(o, a)),
                  (o += a);
              return (
                this._doFill &&
                  (h.beginPath(),
                  c.forEach(function (e, t) {
                    0 === t && h.moveTo(l.x + e.ax * p, l.y + e.ay * u),
                      h.bezierCurveTo(
                        l.x + e.bx * p,
                        l.y + e.by * u,
                        l.x + e.cx * p,
                        l.y + e.cy * u,
                        l.x + e.dx * p,
                        l.y + e.dy * u
                      );
                  }),
                  (s !== y.PIE && null != s) || h.lineTo(l.x, l.y),
                  h.closePath(),
                  h.fill()),
                this._doStroke &&
                  (h.beginPath(),
                  c.forEach(function (e, t) {
                    0 === t && h.moveTo(l.x + e.ax * p, l.y + e.ay * u),
                      h.bezierCurveTo(
                        l.x + e.bx * p,
                        l.y + e.by * u,
                        l.x + e.cx * p,
                        l.y + e.cy * u,
                        l.x + e.dx * p,
                        l.y + e.dy * u
                      );
                  }),
                  s === y.PIE
                    ? (h.lineTo(l.x, l.y), h.closePath())
                    : s === y.CHORD && h.closePath(),
                  h.stroke()),
                this
              );
            }),
            (u.Renderer2D.prototype.ellipse = function (e) {
              var t = this.drawingContext,
                r = this._doFill,
                n = this._doStroke,
                o = e[0],
                i = e[1],
                s = e[2],
                a = e[3];
              if (r && !n) {
                if (t.fillStyle === c) return this;
              } else if (!r && n && t.strokeStyle === c) return this;
              var h = 0.5522847498,
                l = (s / 2) * h,
                p = (a / 2) * h,
                e = o + s,
                h = i + a,
                s = o + s / 2,
                a = i + a / 2;
              t.beginPath(),
                t.moveTo(o, a),
                t.bezierCurveTo(o, a - p, s - l, i, s, i),
                t.bezierCurveTo(s + l, i, e, a - p, e, a),
                t.bezierCurveTo(e, a + p, s + l, h, s, h),
                t.bezierCurveTo(s - l, h, o, a + p, o, a),
                t.closePath(),
                r && t.fill(),
                n && t.stroke();
            }),
            (u.Renderer2D.prototype.line = function (e, t, r, n) {
              var o = this.drawingContext;
              return (
                this._doStroke &&
                  (o.strokeStyle === c ||
                    (o.lineWidth % 2 == 1 && o.translate(0.5, 0.5),
                    o.beginPath(),
                    o.moveTo(e, t),
                    o.lineTo(r, n),
                    o.stroke(),
                    o.lineWidth % 2 == 1 && o.translate(-0.5, -0.5))),
                this
              );
            }),
            (u.Renderer2D.prototype.point = function (e, t) {
              var r = this.drawingContext,
                n = r.strokeStyle,
                o = r.fillStyle;
              return !this._doStroke || r.strokeStyle === c
                ? this
                : ((e = Math.round(e)),
                  (t = Math.round(t)),
                  (r.fillStyle = n),
                  1 < r.lineWidth
                    ? (r.beginPath(),
                      r.arc(e, t, r.lineWidth / 2, 0, y.TWO_PI, !1),
                      r.fill())
                    : r.fillRect(e, t, 1, 1),
                  void (r.fillStyle = o));
            }),
            (u.Renderer2D.prototype.quad = function (e, t, r, n, o, i, s, a) {
              var h = this.drawingContext,
                l = this._doFill,
                p = this._doStroke;
              if (l && !p) {
                if (h.fillStyle === c) return this;
              } else if (!l && p && h.strokeStyle === c) return this;
              return (
                h.beginPath(),
                h.moveTo(e, t),
                h.lineTo(r, n),
                h.lineTo(o, i),
                h.lineTo(s, a),
                h.closePath(),
                l && h.fill(),
                p && h.stroke(),
                this
              );
            }),
            (u.Renderer2D.prototype.rect = function (e) {
              var t = e[0],
                r = e[1],
                n = e[2],
                o = e[3],
                i = e[4],
                s = e[5],
                a = e[6],
                h = e[7],
                l = this.drawingContext,
                p = this._doFill,
                e = this._doStroke;
              if (p && !e) {
                if (l.fillStyle === c) return this;
              } else if (!p && e && l.strokeStyle === c) return this;
              return (
                this._doStroke && l.lineWidth % 2 == 1 && l.translate(0.5, 0.5),
                l.beginPath(),
                void 0 === i
                  ? l.rect(t, r, n, o)
                  : (void 0 === s && (s = i),
                    void 0 === a && (a = s),
                    void 0 === h && (h = a),
                    (p = n / 2),
                    (e = o / 2),
                    n < 2 * i && (i = p),
                    o < 2 * i && (i = e),
                    n < 2 * s && (s = p),
                    o < 2 * s && (s = e),
                    n < 2 * a && (a = p),
                    o < 2 * a && (a = e),
                    n < 2 * h && (h = p),
                    o < 2 * h && (h = e),
                    l.beginPath(),
                    l.moveTo(t + i, r),
                    l.arcTo(t + n, r, t + n, r + o, s),
                    l.arcTo(t + n, r + o, t, r + o, a),
                    l.arcTo(t, r + o, t, r, h),
                    l.arcTo(t, r, t + n, r, i),
                    l.closePath()),
                this._doFill && l.fill(),
                this._doStroke && l.stroke(),
                this._doStroke &&
                  l.lineWidth % 2 == 1 &&
                  l.translate(-0.5, -0.5),
                this
              );
            }),
            (u.Renderer2D.prototype.triangle = function (e) {
              var t = this.drawingContext,
                r = this._doFill,
                n = this._doStroke,
                o = e[0],
                i = e[1],
                s = e[2],
                a = e[3],
                h = e[4],
                e = e[5];
              if (r && !n) {
                if (t.fillStyle === c) return this;
              } else if (!r && n && t.strokeStyle === c) return this;
              t.beginPath(),
                t.moveTo(o, i),
                t.lineTo(s, a),
                t.lineTo(h, e),
                t.closePath(),
                r && t.fill(),
                n && t.stroke();
            }),
            (u.Renderer2D.prototype.endShape = function (e, t, r, n, o, i, s) {
              if (0 === t.length) return this;
              if (!this._doStroke && !this._doFill) return this;
              var a,
                h,
                l,
                e = e === y.CLOSE;
              e && !i && t.push(t[0]);
              var p = t.length;
              if (!r || (s !== y.POLYGON && null !== s))
                if (!n || (s !== y.POLYGON && null !== s))
                  if (!o || (s !== y.POLYGON && null !== s))
                    if (s === y.POINTS)
                      for (h = 0; h < p; h++)
                        (a = t[h]),
                          this._doStroke && this._pInst.stroke(a[6]),
                          this._pInst.point(a[0], a[1]);
                    else if (s === y.LINES)
                      for (h = 0; h + 1 < p; h += 2)
                        (a = t[h]),
                          this._doStroke && this._pInst.stroke(t[h + 1][6]),
                          this._pInst.line(
                            a[0],
                            a[1],
                            t[h + 1][0],
                            t[h + 1][1]
                          );
                    else if (s === y.TRIANGLES)
                      for (h = 0; h + 2 < p; h += 3)
                        (a = t[h]),
                          this.drawingContext.beginPath(),
                          this.drawingContext.moveTo(a[0], a[1]),
                          this.drawingContext.lineTo(t[h + 1][0], t[h + 1][1]),
                          this.drawingContext.lineTo(t[h + 2][0], t[h + 2][1]),
                          this.drawingContext.lineTo(a[0], a[1]),
                          this._doFill &&
                            (this._pInst.fill(t[h + 2][5]),
                            this.drawingContext.fill()),
                          this._doStroke &&
                            (this._pInst.stroke(t[h + 2][6]),
                            this.drawingContext.stroke()),
                          this.drawingContext.closePath();
                    else if (s === y.TRIANGLE_STRIP)
                      for (h = 0; h + 1 < p; h++)
                        (a = t[h]),
                          this.drawingContext.beginPath(),
                          this.drawingContext.moveTo(t[h + 1][0], t[h + 1][1]),
                          this.drawingContext.lineTo(a[0], a[1]),
                          this._doStroke && this._pInst.stroke(t[h + 1][6]),
                          this._doFill && this._pInst.fill(t[h + 1][5]),
                          h + 2 < p &&
                            (this.drawingContext.lineTo(
                              t[h + 2][0],
                              t[h + 2][1]
                            ),
                            this._doStroke && this._pInst.stroke(t[h + 2][6]),
                            this._doFill && this._pInst.fill(t[h + 2][5])),
                          this._doFillStrokeClose();
                    else if (s === y.TRIANGLE_FAN) {
                      if (2 < p)
                        for (
                          this.drawingContext.beginPath(),
                            this.drawingContext.moveTo(t[0][0], t[0][1]),
                            this.drawingContext.lineTo(t[1][0], t[1][1]),
                            this.drawingContext.lineTo(t[2][0], t[2][1]),
                            this._doFill && this._pInst.fill(t[2][5]),
                            this._doStroke && this._pInst.stroke(t[2][6]),
                            this._doFillStrokeClose(),
                            h = 3;
                          h < p;
                          h++
                        )
                          (a = t[h]),
                            this.drawingContext.beginPath(),
                            this.drawingContext.moveTo(t[0][0], t[0][1]),
                            this.drawingContext.lineTo(
                              t[h - 1][0],
                              t[h - 1][1]
                            ),
                            this.drawingContext.lineTo(a[0], a[1]),
                            this._doFill && this._pInst.fill(a[5]),
                            this._doStroke && this._pInst.stroke(a[6]),
                            this._doFillStrokeClose();
                    } else if (s === y.QUADS)
                      for (h = 0; h + 3 < p; h += 4) {
                        for (
                          a = t[h],
                            this.drawingContext.beginPath(),
                            this.drawingContext.moveTo(a[0], a[1]),
                            l = 1;
                          l < 4;
                          l++
                        )
                          this.drawingContext.lineTo(t[h + l][0], t[h + l][1]);
                        this.drawingContext.lineTo(a[0], a[1]),
                          this._doFill && this._pInst.fill(t[h + 3][5]),
                          this._doStroke && this._pInst.stroke(t[h + 3][6]),
                          this._doFillStrokeClose();
                      }
                    else if (s === y.QUAD_STRIP) {
                      if (3 < p)
                        for (h = 0; h + 1 < p; h += 2)
                          (a = t[h]),
                            this.drawingContext.beginPath(),
                            h + 3 < p
                              ? (this.drawingContext.moveTo(
                                  t[h + 2][0],
                                  t[h + 2][1]
                                ),
                                this.drawingContext.lineTo(a[0], a[1]),
                                this.drawingContext.lineTo(
                                  t[h + 1][0],
                                  t[h + 1][1]
                                ),
                                this.drawingContext.lineTo(
                                  t[h + 3][0],
                                  t[h + 3][1]
                                ),
                                this._doFill && this._pInst.fill(t[h + 3][5]),
                                this._doStroke &&
                                  this._pInst.stroke(t[h + 3][6]))
                              : (this.drawingContext.moveTo(a[0], a[1]),
                                this.drawingContext.lineTo(
                                  t[h + 1][0],
                                  t[h + 1][1]
                                )),
                            this._doFillStrokeClose();
                    } else {
                      for (
                        this.drawingContext.beginPath(),
                          this.drawingContext.moveTo(t[0][0], t[0][1]),
                          h = 1;
                        h < p;
                        h++
                      )
                        (a = t[h]).isVert &&
                          (a.moveTo
                            ? this.drawingContext.moveTo(a[0], a[1])
                            : this.drawingContext.lineTo(a[0], a[1]));
                      this._doFillStrokeClose();
                    }
                  else {
                    for (this.drawingContext.beginPath(), h = 0; h < p; h++)
                      t[h].isVert
                        ? t[h].moveTo
                          ? this.drawingContext.moveTo([0], t[h][1])
                          : this.drawingContext.lineTo(t[h][0], t[h][1])
                        : this.drawingContext.quadraticCurveTo(
                            t[h][0],
                            t[h][1],
                            t[h][2],
                            t[h][3]
                          );
                    this._doFillStrokeClose();
                  }
                else {
                  for (this.drawingContext.beginPath(), h = 0; h < p; h++)
                    t[h].isVert
                      ? t[h].moveTo
                        ? this.drawingContext.moveTo(t[h][0], t[h][1])
                        : this.drawingContext.lineTo(t[h][0], t[h][1])
                      : this.drawingContext.bezierCurveTo(
                          t[h][0],
                          t[h][1],
                          t[h][2],
                          t[h][3],
                          t[h][4],
                          t[h][5]
                        );
                  this._doFillStrokeClose();
                }
              else if (3 < p) {
                var u = [],
                  c = 1 - this._curveTightness;
                for (
                  this.drawingContext.beginPath(),
                    this.drawingContext.moveTo(t[1][0], t[1][1]),
                    h = 1;
                  h + 2 < p;
                  h++
                )
                  (a = t[h]),
                    (u[0] = [a[0], a[1]]),
                    (u[1] = [
                      a[0] + (c * t[h + 1][0] - c * t[h - 1][0]) / 6,
                      a[1] + (c * t[h + 1][1] - c * t[h - 1][1]) / 6,
                    ]),
                    (u[2] = [
                      t[h + 1][0] + (c * t[h][0] - c * t[h + 2][0]) / 6,
                      t[h + 1][1] + (c * t[h][1] - c * t[h + 2][1]) / 6,
                    ]),
                    (u[3] = [t[h + 1][0], t[h + 1][1]]),
                    this.drawingContext.bezierCurveTo(
                      u[1][0],
                      u[1][1],
                      u[2][0],
                      u[2][1],
                      u[3][0],
                      u[3][1]
                    );
                e && this.drawingContext.lineTo(t[h + 1][0], t[h + 1][1]),
                  this._doFillStrokeClose();
              }
              return (i = o = n = r = !1), e && t.pop(), this;
            }),
            (u.Renderer2D.prototype.noSmooth = function () {
              return (
                "imageSmoothingEnabled" in this.drawingContext
                  ? (this.drawingContext.imageSmoothingEnabled = !1)
                  : "mozImageSmoothingEnabled" in this.drawingContext
                  ? (this.drawingContext.mozImageSmoothingEnabled = !1)
                  : "webkitImageSmoothingEnabled" in this.drawingContext
                  ? (this.drawingContext.webkitImageSmoothingEnabled = !1)
                  : "msImageSmoothingEnabled" in this.drawingContext &&
                    (this.drawingContext.msImageSmoothingEnabled = !1),
                this
              );
            }),
            (u.Renderer2D.prototype.smooth = function () {
              return (
                "imageSmoothingEnabled" in this.drawingContext
                  ? (this.drawingContext.imageSmoothingEnabled = !0)
                  : "mozImageSmoothingEnabled" in this.drawingContext
                  ? (this.drawingContext.mozImageSmoothingEnabled = !0)
                  : "webkitImageSmoothingEnabled" in this.drawingContext
                  ? (this.drawingContext.webkitImageSmoothingEnabled = !0)
                  : "msImageSmoothingEnabled" in this.drawingContext &&
                    (this.drawingContext.msImageSmoothingEnabled = !0),
                this
              );
            }),
            (u.Renderer2D.prototype.strokeCap = function (e) {
              return (
                (e !== y.ROUND && e !== y.SQUARE && e !== y.PROJECT) ||
                  (this.drawingContext.lineCap = e),
                this
              );
            }),
            (u.Renderer2D.prototype.strokeJoin = function (e) {
              return (
                (e !== y.ROUND && e !== y.BEVEL && e !== y.MITER) ||
                  (this.drawingContext.lineJoin = e),
                this
              );
            }),
            (u.Renderer2D.prototype.strokeWeight = function (e) {
              return (
                (this.drawingContext.lineWidth =
                  void 0 === e || 0 === e ? 1e-4 : e),
                this
              );
            }),
            (u.Renderer2D.prototype._getFill = function () {
              return this.drawingContext.fillStyle;
            }),
            (u.Renderer2D.prototype._getStroke = function () {
              return this.drawingContext.strokeStyle;
            }),
            (u.Renderer2D.prototype.bezier = function (e, t, r, n, o, i, s, a) {
              return (
                this._pInst.beginShape(),
                this._pInst.vertex(e, t),
                this._pInst.bezierVertex(r, n, o, i, s, a),
                this._pInst.endShape(),
                this
              );
            }),
            (u.Renderer2D.prototype.curve = function (e, t, r, n, o, i, s, a) {
              return (
                this._pInst.beginShape(),
                this._pInst.curveVertex(e, t),
                this._pInst.curveVertex(r, n),
                this._pInst.curveVertex(o, i),
                this._pInst.curveVertex(s, a),
                this._pInst.endShape(),
                this
              );
            }),
            (u.Renderer2D.prototype._doFillStrokeClose = function () {
              this._doFill && this.drawingContext.fill(),
                this._doStroke && this.drawingContext.stroke(),
                this.drawingContext.closePath();
            }),
            (u.Renderer2D.prototype.applyMatrix = function (e, t, r, n, o, i) {
              this.drawingContext.transform(e, t, r, n, o, i);
            }),
            (u.Renderer2D.prototype.resetMatrix = function () {
              return (
                this.drawingContext.setTransform(1, 0, 0, 1, 0, 0),
                this.drawingContext.scale(
                  this._pInst._pixelDensity,
                  this._pInst._pixelDensity
                ),
                this
              );
            }),
            (u.Renderer2D.prototype.rotate = function (e) {
              this.drawingContext.rotate(e);
            }),
            (u.Renderer2D.prototype.scale = function (e, t) {
              return this.drawingContext.scale(e, t), this;
            }),
            (u.Renderer2D.prototype.shearX = function (e) {
              return (
                this._pInst._angleMode === y.DEGREES &&
                  (e = this._pInst.degrees(e)),
                this.drawingContext.transform(
                  1,
                  0,
                  this._pInst.tan(e),
                  1,
                  0,
                  0
                ),
                this
              );
            }),
            (u.Renderer2D.prototype.shearY = function (e) {
              return (
                this._pInst._angleMode === y.DEGREES &&
                  (e = this._pInst.degrees(e)),
                this.drawingContext.transform(
                  1,
                  this._pInst.tan(e),
                  0,
                  1,
                  0,
                  0
                ),
                this
              );
            }),
            (u.Renderer2D.prototype.translate = function (e, t) {
              return this.drawingContext.translate(e, t), this;
            }),
            (u.Renderer2D.prototype.text = function (e, t, r, n, o) {
              var i,
                s,
                a,
                h,
                l,
                p,
                u,
                c,
                d,
                f = this._pInst,
                m = Number.MAX_VALUE;
              if (this._doFill || this._doStroke) {
                if (
                  ("string" != typeof e && (e = e.toString()),
                  (i = (e = e.replace(/(\t)/g, "  ")).split("\n")),
                  void 0 !== n)
                ) {
                  for (a = c = 0; a < i.length; a++)
                    for (l = "", u = i[a].split(" "), s = 0; s < u.length; s++)
                      (p = l + u[s] + " "),
                        n < this.textWidth(p)
                          ? ((l = u[s] + " "), (c += f.textLeading()))
                          : (l = p);
                  switch (
                    (this._rectMode === y.CENTER &&
                      ((t -= n / 2), (r -= o / 2)),
                    this.drawingContext.textAlign)
                  ) {
                    case y.CENTER:
                      t += n / 2;
                      break;
                    case y.RIGHT:
                      t += n;
                  }
                  if (void 0 !== o) {
                    switch (this.drawingContext.textBaseline) {
                      case y.BOTTOM:
                        r += o - c;
                        break;
                      case y._CTX_MIDDLE:
                        r += (o - c) / 2;
                        break;
                      case y.BASELINE:
                        (d = !0), (this.drawingContext.textBaseline = y.TOP);
                    }
                    m = r + o - f.textAscent();
                  }
                  for (a = 0; a < i.length; a++) {
                    for (l = "", u = i[a].split(" "), s = 0; s < u.length; s++)
                      (p = l + u[s] + " "),
                        n < this.textWidth(p) && 0 < l.length
                          ? (this._renderText(f, l, t, r, m),
                            (l = u[s] + " "),
                            (r += f.textLeading()))
                          : (l = p);
                    this._renderText(f, l, t, r, m), (r += f.textLeading());
                  }
                } else {
                  var g = 0,
                    e = f.textAlign().vertical;
                  for (
                    e === y.CENTER
                      ? (g = ((i.length - 1) * f.textLeading()) / 2)
                      : e === y.BOTTOM &&
                        (g = (i.length - 1) * f.textLeading()),
                      h = 0;
                    h < i.length;
                    h++
                  )
                    this._renderText(f, i[h], t, r - g, m),
                      (r += f.textLeading());
                }
                return d && (this.drawingContext.textBaseline = y.BASELINE), f;
              }
            }),
            (u.Renderer2D.prototype._renderText = function (e, t, r, n, o) {
              if (!(o <= n))
                return (
                  e.push(),
                  this._isOpenType()
                    ? this._textFont._renderPath(t, r, n, { renderer: this })
                    : (this._doStroke &&
                        this._strokeSet &&
                        this.drawingContext.strokeText(t, r, n),
                      this._doFill &&
                        ((this.drawingContext.fillStyle = this._fillSet
                          ? this.drawingContext.fillStyle
                          : y._DEFAULT_TEXT_FILL),
                        this.drawingContext.fillText(t, r, n))),
                  e.pop(),
                  e
                );
            }),
            (u.Renderer2D.prototype.textWidth = function (e) {
              return this._isOpenType()
                ? this._textFont._textWidth(e, this._textSize)
                : this.drawingContext.measureText(e).width;
            }),
            (u.Renderer2D.prototype.textAlign = function (e, t) {
              if (arguments.length)
                return (
                  (e !== y.LEFT && e !== y.RIGHT && e !== y.CENTER) ||
                    (this.drawingContext.textAlign = e),
                  (t !== y.TOP &&
                    t !== y.BOTTOM &&
                    t !== y.CENTER &&
                    t !== y.BASELINE) ||
                    (t === y.CENTER
                      ? (this.drawingContext.textBaseline = y._CTX_MIDDLE)
                      : (this.drawingContext.textBaseline = t)),
                  this._pInst
                );
              var r = this.drawingContext.textBaseline;
              return (
                r === y._CTX_MIDDLE && (r = y.CENTER),
                { horizontal: this.drawingContext.textAlign, vertical: r }
              );
            }),
            (u.Renderer2D.prototype._applyTextProperties = function () {
              var e,
                t = this._pInst;
              return (
                this._setProperty("_textAscent", null),
                this._setProperty("_textDescent", null),
                (e = this._textFont),
                this._isOpenType() &&
                  ((e = this._textFont.font.familyName),
                  this._setProperty(
                    "_textStyle",
                    this._textFont.font.styleName
                  )),
                (this.drawingContext.font =
                  this._textStyle + " " + this._textSize + "px " + e),
                t
              );
            }),
            (u.Renderer2D.prototype.push = function () {
              this.drawingContext.save();
            }),
            (u.Renderer2D.prototype.pop = function () {
              this.drawingContext.restore();
            }),
            (t.exports = u.Renderer2D);
        },
        {
          "../image/filters": 54,
          "./canvas": 35,
          "./constants": 36,
          "./core": 37,
          "./p5.Renderer": 43,
        },
      ],
      45: [
        function (e, t, r) {
          var a = e("./core"),
            h = e("./constants");
          e("./p5.Graphics"), e("./p5.Renderer2D"), e("../webgl/p5.RendererGL");
          var l = "defaultCanvas0";
          (a.prototype.createCanvas = function (e, t, r) {
            var n,
              o,
              i = r || h.P2D;
            if (
              (arguments[3] &&
                (n = "boolean" == typeof arguments[3] && arguments[3]),
              i === h.WEBGL)
            )
              (o = document.getElementById(l)) && o.parentNode.removeChild(o),
                ((o = document.createElement("canvas")).id = l);
            else if (n) {
              o = document.createElement("canvas");
              for (var s = 0; document.getElementById("defaultCanvas" + s); )
                s++;
              (l = "defaultCanvas" + s), (o.id = l);
            } else o = this.canvas;
            return (
              this._setupDone ||
                ((o.dataset.hidden = !0), (o.style.visibility = "hidden")),
              (this._userNode || document.body).appendChild(o),
              i === h.WEBGL
                ? (this._setProperty(
                    "_renderer",
                    new a.RendererGL(o, this, !0)
                  ),
                  (this._isdefaultGraphics = !0))
                : this._isdefaultGraphics ||
                  (this._setProperty(
                    "_renderer",
                    new a.Renderer2D(o, this, !0)
                  ),
                  (this._isdefaultGraphics = !0)),
              this._renderer.resize(e, t),
              this._renderer._applyDefaults(),
              n && this._elements.push(this._renderer),
              this._renderer
            );
          }),
            (a.prototype.resizeCanvas = function (e, t, r) {
              if (this._renderer) {
                var n,
                  o,
                  i = {};
                for (n in this.drawingContext) {
                  var s = this.drawingContext[n];
                  "object" != typeof s && "function" != typeof s && (i[n] = s);
                }
                for (o in (this._renderer.resize(e, t), i))
                  this.drawingContext[o] = i[o];
                r || this.redraw();
              }
            }),
            (a.prototype.noCanvas = function () {
              this.canvas && this.canvas.parentNode.removeChild(this.canvas);
            }),
            (a.prototype.createGraphics = function (e, t, r) {
              return new a.Graphics(e, t, r, this);
            }),
            (a.prototype.blendMode = function (e) {
              if (
                e !== h.BLEND &&
                e !== h.DARKEST &&
                e !== h.LIGHTEST &&
                e !== h.DIFFERENCE &&
                e !== h.MULTIPLY &&
                e !== h.EXCLUSION &&
                e !== h.SCREEN &&
                e !== h.REPLACE &&
                e !== h.OVERLAY &&
                e !== h.HARD_LIGHT &&
                e !== h.SOFT_LIGHT &&
                e !== h.DODGE &&
                e !== h.BURN &&
                e !== h.ADD &&
                e !== h.NORMAL
              )
                throw new Error("Mode " + e + " not recognized.");
              this._renderer.blendMode(e);
            }),
            (t.exports = a);
        },
        {
          "../webgl/p5.RendererGL": 86,
          "./constants": 36,
          "./core": 37,
          "./p5.Graphics": 42,
          "./p5.Renderer2D": 44,
        },
      ],
      46: [
        function (e, t, r) {
          var n;
          (window.requestAnimationFrame =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (e, t) {
              window.setTimeout(e, 1e3 / 60);
            }),
            (window.performance = window.performance || {}),
            (window.performance.now =
              ((n = Date.now()),
              window.performance.now ||
                window.performance.mozNow ||
                window.performance.msNow ||
                window.performance.oNow ||
                window.performance.webkitNow ||
                function () {
                  return Date.now() - n;
                })),
            (function () {
              "use strict";
              "undefined" == typeof Uint8ClampedArray ||
                Uint8ClampedArray.prototype.slice ||
                Object.defineProperty(Uint8ClampedArray.prototype, "slice", {
                  value: Array.prototype.slice,
                  writable: !0,
                  configurable: !0,
                  enumerable: !1,
                });
            })();
        },
        {},
      ],
      47: [
        function (e, t, r) {
          "use strict";
          e = e("./core");
          (e.prototype.exit = function () {
            throw "exit() not implemented, see remove()";
          }),
            (e.prototype.noLoop = function () {
              this._loop = !1;
            }),
            (e.prototype.loop = function () {
              (this._loop = !0), this._draw();
            }),
            (e.prototype.push = function () {
              this._renderer.push(),
                this._styles.push({
                  _doStroke: this._renderer._doStroke,
                  _strokeSet: this._renderer._strokeSet,
                  _doFill: this._renderer._doFill,
                  _fillSet: this._renderer._fillSet,
                  _tint: this._renderer._tint,
                  _imageMode: this._renderer._imageMode,
                  _rectMode: this._renderer._rectMode,
                  _ellipseMode: this._renderer._ellipseMode,
                  _colorMode: this._renderer._colorMode,
                  _textFont: this._renderer._textFont,
                  _textLeading: this._renderer._textLeading,
                  _textSize: this._renderer._textSize,
                  _textStyle: this._renderer._textStyle,
                });
            }),
            (e.prototype.pop = function () {
              this._renderer.pop();
              var e,
                t = this._styles.pop();
              for (e in t) this._renderer[e] = t[e];
            }),
            (e.prototype.pushStyle = function () {
              throw new Error("pushStyle() not used, see push()");
            }),
            (e.prototype.popStyle = function () {
              throw new Error("popStyle() not used, see pop()");
            }),
            (e.prototype.redraw = function () {
              this.resetMatrix(),
                this._renderer.isP3D && this._renderer._update();
              var e = 1;
              if (1 === arguments.length)
                try {
                  1 < parseInt(arguments[0]) && (e = parseInt(arguments[0]));
                } catch (e) {}
              var t = this.setup || window.setup,
                r = this.draw || window.draw;
              if ("function" == typeof r) {
                void 0 === t &&
                  this.scale(this._pixelDensity, this._pixelDensity);
                for (
                  var n = this,
                    o = function (e) {
                      e.call(n);
                    },
                    i = 0;
                  i < e;
                  i++
                )
                  this._registeredMethods.pre.forEach(o),
                    r(),
                    this._registeredMethods.post.forEach(o);
              }
            }),
            (e.prototype.size = function () {
              throw "size() is not a valid p5 function, to set the size of the drawing canvas, please use createCanvas() instead";
            }),
            (t.exports = e);
        },
        { "./core": 37 },
      ],
      48: [
        function (e, t, r) {
          "use strict";
          var i = e("./core"),
            n = e("./constants");
          (i.prototype.applyMatrix = function (e, t, r, n, o, i) {
            return this._renderer.applyMatrix(e, t, r, n, o, i), this;
          }),
            (i.prototype.popMatrix = function () {
              throw new Error("popMatrix() not used, see pop()");
            }),
            (i.prototype.printMatrix = function () {
              throw new Error("printMatrix() not implemented");
            }),
            (i.prototype.pushMatrix = function () {
              throw new Error("pushMatrix() not used, see push()");
            }),
            (i.prototype.resetMatrix = function () {
              return this._renderer.resetMatrix(), this;
            }),
            (i.prototype.rotate = function () {
              for (
                var e, t = new Array(arguments.length), r = 0;
                r < t.length;
                ++r
              )
                t[r] = arguments[r];
              return (
                this._angleMode === n.DEGREES
                  ? (e = this.radians(t[0]))
                  : this._angleMode === n.RADIANS && (e = t[0]),
                1 < t.length
                  ? this._renderer.rotate(e, t[1])
                  : this._renderer.rotate(e),
                this
              );
            }),
            (i.prototype.rotateX = function (e) {
              if (!this._renderer.isP3D)
                throw "not supported in p2d. Please use webgl mode";
              return this._renderer.rotateX(e), this;
            }),
            (i.prototype.rotateY = function (e) {
              if (!this._renderer.isP3D)
                throw "not supported in p2d. Please use webgl mode";
              return this._renderer.rotateY(e), this;
            }),
            (i.prototype.rotateZ = function (e) {
              if (!this._renderer.isP3D)
                throw "not supported in p2d. Please use webgl mode";
              return this._renderer.rotateZ(e), this;
            }),
            (i.prototype.scale = function () {
              for (
                var e, t, r, n = new Array(arguments.length), o = 0;
                o < n.length;
                o++
              )
                n[o] = arguments[o];
              return (
                n[0] instanceof i.Vector
                  ? ((e = n[0].x), (t = n[0].y), (r = n[0].z))
                  : n[0] instanceof Array
                  ? ((e = n[0][0]), (t = n[0][1]), (r = n[0][2] || 1))
                  : 1 === n.length
                  ? (e = t = r = n[0])
                  : ((e = n[0]), (t = n[1]), (r = n[2] || 1)),
                this._renderer.isP3D
                  ? this._renderer.scale.call(this._renderer, e, t, r)
                  : this._renderer.scale.call(this._renderer, e, t),
                this
              );
            }),
            (i.prototype.shearX = function (e) {
              return (
                this._angleMode === n.DEGREES && (e = this.radians(e)),
                this._renderer.shearX(e),
                this
              );
            }),
            (i.prototype.shearY = function (e) {
              return (
                this._angleMode === n.DEGREES && (e = this.radians(e)),
                this._renderer.shearY(e),
                this
              );
            }),
            (i.prototype.translate = function (e, t, r) {
              return (
                this._renderer.isP3D
                  ? this._renderer.translate(e, t, r)
                  : this._renderer.translate(e, t),
                this
              );
            }),
            (t.exports = i);
        },
        { "./constants": 36, "./core": 37 },
      ],
      49: [
        function (e, t, r) {
          "use strict";
          var n = e("./core"),
            a = e("./constants"),
            o = null,
            h = [],
            l = [],
            p = !1,
            i = !1,
            u = !1,
            c = !1,
            s = !0;
          (n.prototype.beginContour = function () {
            return (l = []), (c = !0), this;
          }),
            (n.prototype.beginShape = function (e) {
              return (
                (o =
                  e === a.POINTS ||
                  e === a.LINES ||
                  e === a.TRIANGLES ||
                  e === a.TRIANGLE_FAN ||
                  e === a.TRIANGLE_STRIP ||
                  e === a.QUADS ||
                  e === a.QUAD_STRIP
                    ? e
                    : null),
                this._renderer.isP3D
                  ? this._renderer.beginShape(e)
                  : ((h = []), (l = [])),
                this
              );
            }),
            (n.prototype.bezierVertex = function (e, t, r, n, o, i) {
              if (0 === h.length)
                throw "vertex() must be used once before calling bezierVertex()";
              p = !0;
              for (var s = [], a = 0; a < arguments.length; a++)
                s[a] = arguments[a];
              return (s.isVert = !1), (c ? l : h).push(s), this;
            }),
            (n.prototype.curveVertex = function (e, t) {
              return (i = !0), this.vertex(e, t), this;
            }),
            (n.prototype.endContour = function () {
              var e = l[0].slice();
              (e.isVert = l[0].isVert),
                (e.moveTo = !1),
                l.push(e),
                s && (h.push(h[0]), (s = !1));
              for (var t = 0; t < l.length; t++) h.push(l[t]);
              return this;
            }),
            (n.prototype.endShape = function (e) {
              if (this._renderer.isP3D)
                this._renderer.endShape(e, i, p, u, c, o);
              else {
                if (0 === h.length) return this;
                if (!this._renderer._doStroke && !this._renderer._doFill)
                  return this;
                var t = e === a.CLOSE;
                t && !c && h.push(h[0]),
                  this._renderer.endShape(e, h, i, p, u, c, o),
                  (s = !(c = u = p = i = !1)),
                  t && h.pop();
              }
              return this;
            }),
            (n.prototype.quadraticVertex = function (e, t, r, n) {
              if (this._contourInited) {
                var o = {};
                return (
                  (o.x = e),
                  (o.y = t),
                  (o.x3 = r),
                  (o.y3 = n),
                  (o.type = a.QUADRATIC),
                  this._contourVertices.push(o),
                  this
                );
              }
              if (!(0 < h.length))
                throw "vertex() must be used once before calling quadraticVertex()";
              u = !0;
              for (var i = [], s = 0; s < arguments.length; s++)
                i[s] = arguments[s];
              return (i.isVert = !1), (c ? l : h).push(i), this;
            }),
            (n.prototype.vertex = function (e, t, r) {
              var n;
              return (
                this._renderer.isP3D
                  ? this._renderer.vertex(e, t, r)
                  : (((n = []).isVert = !0),
                    (n[0] = e),
                    (n[1] = t),
                    (n[2] = 0),
                    (n[3] = 0),
                    (n[4] = 0),
                    (n[5] = this._renderer._getFill()),
                    (n[6] = this._renderer._getStroke()),
                    r && (n.moveTo = r),
                    c
                      ? (0 === l.length && (n.moveTo = !0), l.push(n))
                      : h.push(n)),
                this
              );
            }),
            (t.exports = n);
        },
        { "./constants": 36, "./core": 37 },
      ],
      50: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          (e.prototype.deviceOrientation = void 0),
            (e.prototype.accelerationX = 0),
            (e.prototype.accelerationY = 0),
            (e.prototype.accelerationZ = 0),
            (e.prototype.pAccelerationX = 0),
            (e.prototype.pAccelerationY = 0),
            (e.prototype.pAccelerationZ = 0),
            (e.prototype._updatePAccelerations = function () {
              this._setProperty("pAccelerationX", this.accelerationX),
                this._setProperty("pAccelerationY", this.accelerationY),
                this._setProperty("pAccelerationZ", this.accelerationZ);
            }),
            (e.prototype.rotationX = 0),
            (e.prototype.rotationY = 0),
            (e.prototype.rotationZ = 0),
            (e.prototype.pRotationX = 0),
            (e.prototype.pRotationY = 0);
          var s,
            a,
            h,
            l = (e.prototype.pRotationZ = 0),
            p = 0,
            u = 0,
            c = "clockwise",
            d = "clockwise",
            f = "clockwise";
          (e.prototype._updatePRotations = function () {
            this._setProperty("pRotationX", this.rotationX),
              this._setProperty("pRotationY", this.rotationY),
              this._setProperty("pRotationZ", this.rotationZ);
          }),
            (e.prototype.turnAxis = void 0);
          var m = 0.5,
            g = 30;
          (e.prototype.setMoveThreshold = function (e) {
            "number" == typeof e && (m = e);
          }),
            (e.prototype.setShakeThreshold = function (e) {
              "number" == typeof e && (g = e);
            }),
            (e.prototype._ondeviceorientation = function (e) {
              this._updatePRotations(),
                this._setProperty("rotationX", e.beta),
                this._setProperty("rotationY", e.gamma),
                this._setProperty("rotationZ", e.alpha),
                this._handleMotion();
            }),
            (e.prototype._ondevicemotion = function (e) {
              this._updatePAccelerations(),
                this._setProperty("accelerationX", 2 * e.acceleration.x),
                this._setProperty("accelerationY", 2 * e.acceleration.y),
                this._setProperty("accelerationZ", 2 * e.acceleration.z),
                this._handleMotion();
            }),
            (e.prototype._handleMotion = function () {
              90 === window.orientation || -90 === window.orientation
                ? this._setProperty("deviceOrientation", "landscape")
                : 0 === window.orientation
                ? this._setProperty("deviceOrientation", "portrait")
                : void 0 === window.orientation &&
                  this._setProperty("deviceOrientation", "undefined");
              var e = this.deviceMoved || window.deviceMoved;
              "function" == typeof e &&
                (Math.abs(this.accelerationX - this.pAccelerationX) > m ||
                  Math.abs(this.accelerationY - this.pAccelerationY) > m ||
                  Math.abs(this.accelerationZ - this.pAccelerationZ) > m) &&
                e();
              var t,
                r,
                n = this.deviceTurned || window.deviceTurned;
              "function" == typeof n &&
                ((r = this.rotationX + 180),
                (t = this.pRotationX + 180),
                (e = l + 180),
                (0 < r - t && r - t < 270) || r - t < -270
                  ? (c = "clockwise")
                  : (r - t < 0 || 270 < r - t) && (c = "counter-clockwise"),
                c !== s && (e = r),
                90 < Math.abs(r - e) &&
                  Math.abs(r - e) < 270 &&
                  ((e = r), this._setProperty("turnAxis", "X"), n()),
                (s = c),
                (l = e - 180),
                (t = this.rotationY + 180),
                (r = this.pRotationY + 180),
                (e = p + 180),
                (0 < t - r && t - r < 270) || t - r < -270
                  ? (d = "clockwise")
                  : (t - r < 0 || 270 < t - this.pRotationY) &&
                    (d = "counter-clockwise"),
                d !== a && (e = t),
                90 < Math.abs(t - e) &&
                  Math.abs(t - e) < 270 &&
                  ((e = t), this._setProperty("turnAxis", "Y"), n()),
                (a = d),
                (p = e - 180),
                (0 < this.rotationZ - this.pRotationZ &&
                  this.rotationZ - this.pRotationZ < 270) ||
                this.rotationZ - this.pRotationZ < -270
                  ? (f = "clockwise")
                  : (this.rotationZ - this.pRotationZ < 0 ||
                      270 < this.rotationZ - this.pRotationZ) &&
                    (f = "counter-clockwise"),
                f !== h && (u = this.rotationZ),
                90 < Math.abs(this.rotationZ - u) &&
                  Math.abs(this.rotationZ - u) < 270 &&
                  ((u = this.rotationZ),
                  this._setProperty("turnAxis", "Z"),
                  n()),
                (h = f),
                this._setProperty("turnAxis", void 0));
              var o,
                i,
                n = this.deviceShaken || window.deviceShaken;
              "function" == typeof n &&
                (null !== this.pAccelerationX &&
                  ((o = Math.abs(this.accelerationX - this.pAccelerationX)),
                  (i = Math.abs(this.accelerationY - this.pAccelerationY))),
                g < o + i && n());
            }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      51: [
        function (e, t, r) {
          "use strict";
          var e = e("../core/core"),
            n = {};
          (e.prototype.isKeyPressed = !1),
            (e.prototype.keyIsPressed = !1),
            (e.prototype.key = ""),
            (e.prototype.keyCode = 0),
            (e.prototype._onkeydown = function (e) {
              var t;
              n[e.which] ||
                (this._setProperty("isKeyPressed", !0),
                this._setProperty("keyIsPressed", !0),
                this._setProperty("keyCode", e.which),
                (n[e.which] = !0),
                (t = (t = String.fromCharCode(e.which)) || e.which),
                this._setProperty("key", t),
                "function" !=
                  typeof (t = this.keyPressed || window.keyPressed) ||
                  e.charCode ||
                  (!1 === t(e) && e.preventDefault()));
            }),
            (e.prototype._onkeyup = function (e) {
              var t = this.keyReleased || window.keyReleased;
              n[e.which] = !1;
              var r = String.fromCharCode(e.which);
              !(function () {
                for (var e in n) if (!0 === n[e]) return !0;
                return !1;
              })() ||
                (this._setProperty("isKeyPressed", !1),
                this._setProperty("keyIsPressed", !1)),
                this._setProperty("_lastKeyCodeTyped", null),
                (r = r || e.which),
                this._setProperty("key", r),
                this._setProperty("keyCode", e.which),
                "function" == typeof t && !1 === t(e) && e.preventDefault();
            }),
            (e.prototype._onkeypress = function (e) {
              var t;
              e.which !== this._lastKeyCodeTyped &&
                (this._setProperty("keyCode", e.which),
                this._setProperty("_lastKeyCodeTyped", e.which),
                this._setProperty("key", String.fromCharCode(e.which)),
                "function" == typeof (t = this.keyTyped || window.keyTyped) &&
                  !1 === t(e) &&
                  e.preventDefault());
            }),
            (e.prototype._onblur = function (e) {
              n = {};
            }),
            (e.prototype.keyIsDown = function (e) {
              return n[e];
            }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      52: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core"),
            o = e("../core/constants");
          (n.prototype._hasMouseInteracted = !1),
            (n.prototype.mouseX = 0),
            (n.prototype.mouseY = 0),
            (n.prototype.pmouseX = 0),
            (n.prototype.pmouseY = 0),
            (n.prototype.winMouseX = 0),
            (n.prototype.winMouseY = 0),
            (n.prototype.pwinMouseX = 0),
            (n.prototype.pwinMouseY = 0),
            (n.prototype.mouseButton = 0),
            (n.prototype.mouseIsPressed = !1),
            (n.prototype.isMousePressed = !1),
            (n.prototype._updateNextMouseCoords = function (e) {
              null !== this._curElement &&
                (!e.touches || 0 < e.touches.length) &&
                ((e = (function (e, t, r, n) {
                  n &&
                    !n.clientX &&
                    (n.touches
                      ? (n = n.touches[0])
                      : n.changedTouches && (n = n.changedTouches[0]));
                  var o = e.getBoundingClientRect(),
                    t = e.scrollWidth / t,
                    r = e.scrollHeight / r;
                  return {
                    x: (n.clientX - o.left) / t,
                    y: (n.clientY - o.top) / r,
                    winX: n.clientX,
                    winY: n.clientY,
                    id: n.identifier,
                  };
                })(this._curElement.elt, this.width, this.height, e)),
                this._setProperty("mouseX", e.x),
                this._setProperty("mouseY", e.y),
                this._setProperty("winMouseX", e.winX),
                this._setProperty("winMouseY", e.winY)),
                this._hasMouseInteracted ||
                  (this._updateMouseCoords(),
                  this._setProperty("_hasMouseInteracted", !0));
            }),
            (n.prototype._updateMouseCoords = function () {
              this._setProperty("pmouseX", this.mouseX),
                this._setProperty("pmouseY", this.mouseY),
                this._setProperty("pwinMouseX", this.winMouseX),
                this._setProperty("pwinMouseY", this.winMouseY);
            }),
            (n.prototype._setMouseButton = function (e) {
              1 === e.button
                ? this._setProperty("mouseButton", o.CENTER)
                : 2 === e.button
                ? this._setProperty("mouseButton", o.RIGHT)
                : this._setProperty("mouseButton", o.LEFT);
            }),
            (n.prototype._onmousemove = function (e) {
              var t = this._isGlobal ? window : this;
              this._updateNextMouseCoords(e),
                this.isMousePressed
                  ? "function" == typeof t.mouseDragged
                    ? !1 === t.mouseDragged(e) && e.preventDefault()
                    : "function" == typeof t.touchMoved &&
                      !1 === t.touchMoved(e) &&
                      e.preventDefault()
                  : "function" == typeof t.mouseMoved &&
                    !1 === t.mouseMoved(e) &&
                    e.preventDefault();
            }),
            (n.prototype._onmousedown = function (e) {
              var t = this._isGlobal ? window : this;
              this._setProperty("isMousePressed", !0),
                this._setProperty("mouseIsPressed", !0),
                this._setMouseButton(e),
                this._updateNextMouseCoords(e),
                "function" == typeof t.mousePressed
                  ? !1 === t.mousePressed(e) && e.preventDefault()
                  : "function" == typeof t.touchStarted &&
                    !1 === t.touchStarted(e) &&
                    e.preventDefault();
            }),
            (n.prototype._onmouseup = function (e) {
              var t = this._isGlobal ? window : this;
              this._setProperty("isMousePressed", !1),
                this._setProperty("mouseIsPressed", !1),
                "function" == typeof t.mouseReleased
                  ? !1 === t.mouseReleased(e) && e.preventDefault()
                  : "function" == typeof t.touchEnded &&
                    !1 === t.touchEnded(e) &&
                    e.preventDefault();
            }),
            (n.prototype._ondragend = n.prototype._onmouseup),
            (n.prototype._ondragover = n.prototype._onmousemove),
            (n.prototype._onclick = function (e) {
              var t = this._isGlobal ? window : this;
              "function" == typeof t.mouseClicked &&
                !1 === t.mouseClicked(e) &&
                e.preventDefault();
            }),
            (n.prototype._onwheel = function (e) {
              var t = this._isGlobal ? window : this;
              "function" == typeof t.mouseWheel &&
                ((e.delta = e.deltaY),
                !1 === t.mouseWheel(e) && e.preventDefault());
            }),
            (t.exports = n);
        },
        { "../core/constants": 36, "../core/core": 37 },
      ],
      53: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          (e.prototype.touches = []),
            (e.prototype._updateTouchCoords = function (e) {
              if (null !== this._curElement) {
                for (var t = [], r = 0; r < e.touches.length; r++)
                  t[r] = (function (e, t, r, n, o) {
                    o = o || 0;
                    var i = e.getBoundingClientRect(),
                      t = e.scrollWidth / t,
                      r = e.scrollHeight / r,
                      o = n.touches[o] || n.changedTouches[o];
                    return {
                      x: (o.clientX - i.left) / t,
                      y: (o.clientY - i.top) / r,
                      winX: o.clientX,
                      winY: o.clientY,
                      id: o.identifier,
                    };
                  })(this._curElement.elt, this.width, this.height, e, r);
                this._setProperty("touches", t);
              }
            }),
            (e.prototype._ontouchstart = function (e) {
              var t = this._isGlobal ? window : this;
              this._updateTouchCoords(e),
                this._updateNextMouseCoords(e),
                "function" == typeof t.touchStarted
                  ? !1 === t.touchStarted(e) && e.preventDefault()
                  : "function" == typeof t.mousePressed &&
                    !1 === t.mousePressed(e) &&
                    e.preventDefault();
            }),
            (e.prototype._ontouchmove = function (e) {
              var t = this._isGlobal ? window : this;
              this._updateTouchCoords(e),
                this._updateNextMouseCoords(e),
                "function" == typeof t.touchMoved
                  ? !1 === t.touchMoved(e) && e.preventDefault()
                  : "function" == typeof t.mouseDragged &&
                    !1 === t.mouseDragged(e) &&
                    e.preventDefault();
            }),
            (e.prototype._ontouchend = function (e) {
              this._updateTouchCoords(e),
                this._updateNextMouseCoords(e),
                0 === this.touches.length &&
                  this._setProperty("touchIsDown", !1);
              var t = this._isGlobal ? window : this;
              "function" == typeof t.touchEnded
                ? !1 === t.touchEnded(e) && e.preventDefault()
                : "function" == typeof t.mouseReleased &&
                  !1 === t.mouseReleased(e) &&
                  e.preventDefault();
            }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      54: [
        function (e, t, r) {
          "use strict";
          var E,
            A,
            L,
            I,
            P = {};
          function n(e, p) {
            for (
              var t,
                r,
                n,
                o,
                i,
                s,
                a,
                h,
                l,
                u,
                c = P._toPixels(e),
                d = e.width,
                f = e.height,
                m = d * f,
                g = new Int32Array(m),
                y = 0;
              y < m;
              y++
            )
              g[y] = P._getARGB(c, y);
            var v,
              x,
              _,
              w = new Int32Array(m),
              b = new Int32Array(m),
              S = new Int32Array(m),
              M = new Int32Array(m),
              T = 0;
            for (
              !(function () {
                var e = (3.5 * p) | 0;
                if (E !== (e = e < 1 ? 1 : e < 248 ? e : 248)) {
                  (A = (1 + (E = e)) << 1),
                    (L = new Int32Array(A)),
                    (I = new Array(A));
                  for (var t, r, n, o, i = 0; i < A; i++)
                    I[i] = new Int32Array(256);
                  for (var s = 1, a = e - 1; s < e; s++) {
                    (L[e + s] = L[a] = r = a * a), (n = I[e + s]), (o = I[a--]);
                    for (var h = 0; h < 256; h++) n[h] = o[h] = r * h;
                  }
                  (t = L[e] = e * e), (n = I[e]);
                  for (var l = 0; l < 256; l++) n[l] = t * l;
                }
              })(),
                x = 0;
              x < f;
              x++
            ) {
              for (v = 0; v < d; v++) {
                if (((o = n = r = i = t = 0), (s = v - E) < 0))
                  (u = -s), (s = 0);
                else {
                  if (d <= s) break;
                  u = 0;
                }
                for (_ = u; _ < A && !(d <= s); _++) {
                  var C,
                    R = g[s + T];
                  (i += (C = I[_])[(-16777216 & R) >>> 24]),
                    (r += C[(16711680 & R) >> 16]),
                    (n += C[(65280 & R) >> 8]),
                    (o += C[255 & R]),
                    (t += L[_]),
                    s++;
                }
                (w[(a = T + v)] = i / t),
                  (b[a] = r / t),
                  (S[a] = n / t),
                  (M[a] = o / t);
              }
              T += d;
            }
            for (l = (h = -E) * d, x = T = 0; x < f; x++) {
              for (v = 0; v < d; v++) {
                if (h < (o = n = r = i = t = 0)) (u = a = -h), (s = v);
                else {
                  if (f <= h) break;
                  (u = 0), (a = h), (s = v + l);
                }
                for (_ = u; _ < A && !(f <= a); _++)
                  (i += (C = I[_])[w[s]]),
                    (r += C[b[s]]),
                    (n += C[S[s]]),
                    (o += C[M[s]]),
                    (t += L[_]),
                    a++,
                    (s += d);
                g[v + T] =
                  ((i / t) << 24) | ((r / t) << 16) | ((n / t) << 8) | (o / t);
              }
              (T += d), (l += d), h++;
            }
            P._setPixels(c, g);
          }
          (P._toPixels = function (e) {
            return (
              e instanceof ImageData
                ? e
                : e.getContext("2d").getImageData(0, 0, e.width, e.height)
            ).data;
          }),
            (P._getARGB = function (e, t) {
              t *= 4;
              return (
                ((e[3 + t] << 24) & 4278190080) |
                ((e[t] << 16) & 16711680) |
                ((e[1 + t] << 8) & 65280) |
                (255 & e[2 + t])
              );
            }),
            (P._setPixels = function (e, t) {
              for (var r, n = 0, o = e.length; n < o; n++)
                (e[0 + (r = 4 * n)] = (16711680 & t[n]) >>> 16),
                  (e[1 + r] = (65280 & t[n]) >>> 8),
                  (e[2 + r] = 255 & t[n]),
                  (e[3 + r] = (4278190080 & t[n]) >>> 24);
            }),
            (P._toImageData = function (e) {
              return e instanceof ImageData
                ? e
                : e.getContext("2d").getImageData(0, 0, e.width, e.height);
            }),
            (P._createImageData = function (e, t) {
              return (
                (P._tmpCanvas = document.createElement("canvas")),
                (P._tmpCtx = P._tmpCanvas.getContext("2d")),
                this._tmpCtx.createImageData(e, t)
              );
            }),
            (P.apply = function (e, t, r) {
              var n = e.getContext("2d"),
                o = n.getImageData(0, 0, e.width, e.height),
                r = t(o, r);
              r instanceof ImageData
                ? n.putImageData(r, 0, 0, 0, 0, e.width, e.height)
                : n.putImageData(o, 0, 0, 0, 0, e.width, e.height);
            }),
            (P.threshold = function (e, t) {
              var r = P._toPixels(e);
              void 0 === t && (t = 0.5);
              for (var n = Math.floor(255 * t), o = 0; o < r.length; o += 4) {
                var i =
                  n <= 0.2126 * r[o] + 0.7152 * r[o + 1] + 0.0722 * r[o + 2]
                    ? 255
                    : 0;
                r[o] = r[o + 1] = r[o + 2] = i;
              }
            }),
            (P.gray = function (e) {
              for (var t = P._toPixels(e), r = 0; r < t.length; r += 4) {
                var n = 0.2126 * t[r] + 0.7152 * t[r + 1] + 0.0722 * t[r + 2];
                t[r] = t[r + 1] = t[r + 2] = n;
              }
            }),
            (P.opaque = function (e) {
              for (var t = P._toPixels(e), r = 0; r < t.length; r += 4)
                t[r + 3] = 255;
              return t;
            }),
            (P.invert = function (e) {
              for (var t = P._toPixels(e), r = 0; r < t.length; r += 4)
                (t[r] = 255 - t[r]),
                  (t[r + 1] = 255 - t[r + 1]),
                  (t[r + 2] = 255 - t[r + 2]);
            }),
            (P.posterize = function (e, t) {
              var r = P._toPixels(e);
              if (t < 2 || 255 < t)
                throw new Error(
                  "Level must be greater than 2 and less than 255 for posterize"
                );
              for (var n = t - 1, o = 0; o < r.length; o += 4) {
                var i = r[o],
                  s = r[o + 1],
                  a = r[o + 2];
                (r[o] = (255 * ((i * t) >> 8)) / n),
                  (r[o + 1] = (255 * ((s * t) >> 8)) / n),
                  (r[o + 2] = (255 * ((a * t) >> 8)) / n);
              }
            }),
            (P.dilate = function (e) {
              for (
                var t,
                  r,
                  n,
                  o,
                  i,
                  s,
                  a,
                  h,
                  l,
                  p = P._toPixels(e),
                  u = 0,
                  c = p.length ? p.length / 4 : 0,
                  d = new Int32Array(c);
                u < c;

              )
                for (r = (t = u) + e.width; u < r; )
                  (h = n = P._getARGB(p, u)),
                    (a = u - 1) < t && (a = u),
                    r <= (l = u + 1) && (l = u),
                    (i = u - e.width) < 0 && (i = 0),
                    c <= (o = u + e.width) && (o = u),
                    (s = P._getARGB(p, i)),
                    (i = P._getARGB(p, a)),
                    (a = P._getARGB(p, o)),
                    (o =
                      77 * ((h >> 16) & 255) +
                      151 * ((h >> 8) & 255) +
                      28 * (255 & h)) <
                      (h =
                        77 * ((i >> 16) & 255) +
                        151 * ((i >> 8) & 255) +
                        28 * (255 & i)) && ((n = i), (o = h)),
                    o <
                      (l =
                        77 * (((h = P._getARGB(p, l)) >> 16) & 255) +
                        151 * ((h >> 8) & 255) +
                        28 * (255 & h)) && ((n = h), (o = l)),
                    o <
                      (l =
                        77 * ((s >> 16) & 255) +
                        151 * ((s >> 8) & 255) +
                        28 * (255 & s)) && ((n = s), (o = l)),
                    o <
                      (l =
                        77 * ((a >> 16) & 255) +
                        151 * ((a >> 8) & 255) +
                        28 * (255 & a)) && ((n = a), (o = l)),
                    (d[u++] = n);
              P._setPixels(p, d);
            }),
            (P.erode = function (e) {
              for (
                var t,
                  r,
                  n,
                  o,
                  i,
                  s,
                  a,
                  h,
                  l,
                  p = P._toPixels(e),
                  u = 0,
                  c = p.length ? p.length / 4 : 0,
                  d = new Int32Array(c);
                u < c;

              )
                for (r = (t = u) + e.width; u < r; )
                  (o = n = P._getARGB(p, u)),
                    (a = u - 1) < t && (a = u),
                    r <= (l = u + 1) && (l = u),
                    (i = u - e.width) < 0 && (i = 0),
                    c <= (h = u + e.width) && (h = u),
                    (s = P._getARGB(p, i)),
                    (i = P._getARGB(p, a)),
                    (a = P._getARGB(p, h)),
                    (h =
                      77 * ((i >> 16) & 255) +
                      151 * ((i >> 8) & 255) +
                      28 * (255 & i)) <
                      (o =
                        77 * ((o >> 16) & 255) +
                        151 * ((o >> 8) & 255) +
                        28 * (255 & o)) && ((n = i), (o = h)),
                    (l =
                      77 * (((h = P._getARGB(p, l)) >> 16) & 255) +
                      151 * ((h >> 8) & 255) +
                      28 * (255 & h)) < o && ((n = h), (o = l)),
                    (l =
                      77 * ((s >> 16) & 255) +
                      151 * ((s >> 8) & 255) +
                      28 * (255 & s)) < o && ((n = s), (o = l)),
                    (l =
                      77 * ((a >> 16) & 255) +
                      151 * ((a >> 8) & 255) +
                      28 * (255 & a)) < o && ((n = a), (o = l)),
                    (d[u++] = n);
              P._setPixels(p, d);
            }),
            (P.blur = function (e, t) {
              n(e, t);
            }),
            (t.exports = P);
        },
        {},
      ],
      55: [
        function (e, t, r) {
          "use strict";
          var l = e("../core/core"),
            p = [];
          (l.prototype.createImage = function (e, t) {
            return new l.Image(e, t);
          }),
            (l.prototype.saveCanvas = function () {
              var e, t, r;
              if (
                (3 === arguments.length
                  ? ((n = arguments[0]), (e = arguments[1]), (t = arguments[2]))
                  : 2 === arguments.length
                  ? "object" == typeof arguments[0]
                    ? ((n = arguments[0]), (e = arguments[1]))
                    : ((e = arguments[0]), (t = arguments[1]))
                  : 1 === arguments.length &&
                    ("object" == typeof arguments[0]
                      ? (n = arguments[0])
                      : (e = arguments[0])),
                n instanceof l.Element && (n = n.elt),
                n instanceof HTMLCanvasElement || (n = null),
                t ||
                  ("" === (t = l.prototype._checkFileExtension(e, t)[1]) &&
                    (t = "png")),
                n ||
                  (this._curElement &&
                    this._curElement.elt &&
                    (n = this._curElement.elt)),
                l.prototype._isSafari())
              )
                alert(
                  "Hello, Safari user!\nNow capturing a screenshot...\nTo save this image,\ngo to File --\x3e Save As.\n"
                ),
                  (window.location.href = n.toDataURL());
              else {
                if (void 0 === t) (t = "png"), (r = "image/png");
                else
                  switch (t) {
                    case "png":
                      r = "image/png";
                      break;
                    case "jpeg":
                    case "jpg":
                      r = "image/jpeg";
                      break;
                    default:
                      r = "image/png";
                  }
                var n = (n = n.toDataURL(r)).replace(r, "image/octet-stream");
                l.prototype.downloadFile(n, e, t);
              }
            }),
            (l.prototype.saveFrames = function (e, t, r, n, o) {
              (r = r || 3), (r = l.prototype.constrain(r, 0, 15));
              r *= 1e3;
              var n = n || 15,
                n = l.prototype.constrain(n, 0, 22),
                i = 0,
                s = l.prototype._makeFrame,
                a = this._curElement.elt,
                h = setInterval(function () {
                  s(e + i, t, a), i++;
                }, 1e3 / n);
              setTimeout(function () {
                if ((clearInterval(h), o)) o(p);
                else
                  for (var e = 0; e < p.length; e++) {
                    var t = p[e];
                    l.prototype.downloadFile(t.imageData, t.filename, t.ext);
                  }
                p = [];
              }, 0.01 + r);
            }),
            (l.prototype._makeFrame = function (e, t, r) {
              var n,
                o = this ? this._curElement.elt : r;
              if (t)
                switch (t.toLowerCase()) {
                  case "png":
                    n = "image/png";
                    break;
                  case "jpeg":
                  case "jpg":
                    n = "image/jpeg";
                    break;
                  default:
                    n = "image/png";
                }
              else (t = "png"), (n = "image/png");
              (r = (r = o.toDataURL(n)).replace(n, "image/octet-stream")),
                (o = {});
              (o.imageData = r), (o.filename = e), (o.ext = t), p.push(o);
            }),
            (t.exports = l);
        },
        { "../core/core": 37 },
      ],
      56: [
        function (e, t, r) {
          "use strict";
          var s = e("../core/core"),
            p = e("./filters"),
            d = e("../core/canvas"),
            n = e("../core/constants");
          function f(e, t) {
            return 0 < e && e < t ? e : t;
          }
          e("../core/error_helpers"),
            (s.prototype.loadImage = function (e, t, r) {
              var n = new Image(),
                o = new s.Image(1, 1, this),
                i = s._getDecrementPreload.apply(this, arguments);
              return (
                (n.onload = function () {
                  (o.width = o.canvas.width = n.width),
                    (o.height = o.canvas.height = n.height),
                    o.drawingContext.drawImage(n, 0, 0),
                    "function" == typeof t && t(o),
                    i && t !== i && i();
                }),
                (n.onerror = function (e) {
                  s._friendlyFileLoadError(0, n.src),
                    "function" == typeof r && r !== i && r(e);
                }),
                0 !== e.indexOf("data:image/") && (n.crossOrigin = "Anonymous"),
                (n.src = e),
                o
              );
            }),
            (s.prototype.image = function (e, t, r, n, o, i, s, a, h) {
              var l,
                p,
                u = e.width,
                c = e.height;
              e.elt &&
                e.elt.videoWidth &&
                !e.canvas &&
                ((l = e.elt.videoWidth),
                (p = e.elt.videoHeight),
                (u = e.elt.videoWidth),
                (c = (e.elt.width * p) / l));
              (n = n || u),
                (o = o || c),
                (i = i || 0),
                (s = s || 0),
                (a = f((a = a || u), u)),
                (h = f((h = h || c), c)),
                (c = 1);
              e.elt && e.elt.videoWidth && e.elt.style.width && !e.canvas
                ? (c = e.elt.videoWidth / parseInt(e.elt.style.width, 10))
                : e.elt &&
                  e.elt.width &&
                  e.elt.style.width &&
                  (c = e.elt.width / parseInt(e.elt.style.width, 10)),
                (i *= c),
                (s *= c),
                (h *= c),
                (a *= c);
              o = d.modeAdjust(t, r, n, o, this._renderer._imageMode);
              this._renderer.image(e, i, s, a, h, o.x, o.y, o.w, o.h);
            }),
            (s.prototype.tint = function () {
              var e = this.color.apply(this, arguments);
              this._renderer._tint = e.levels;
            }),
            (s.prototype.noTint = function () {
              this._renderer._tint = null;
            }),
            (s.prototype._getTintedImageCanvas = function (e) {
              if (!e.canvas) return e;
              var t = p._toPixels(e.canvas),
                r = document.createElement("canvas");
              (r.width = e.canvas.width), (r.height = e.canvas.height);
              for (
                var n = r.getContext("2d"),
                  e = n.createImageData(e.canvas.width, e.canvas.height),
                  o = e.data,
                  i = 0;
                i < t.length;
                i += 4
              ) {
                var s = t[i],
                  a = t[i + 1],
                  h = t[i + 2],
                  l = t[i + 3];
                (o[i] = (s * this._renderer._tint[0]) / 255),
                  (o[i + 1] = (a * this._renderer._tint[1]) / 255),
                  (o[i + 2] = (h * this._renderer._tint[2]) / 255),
                  (o[i + 3] = (l * this._renderer._tint[3]) / 255);
              }
              return n.putImageData(e, 0, 0), r;
            }),
            (s.prototype.imageMode = function (e) {
              (e !== n.CORNER && e !== n.CORNERS && e !== n.CENTER) ||
                (this._renderer._imageMode = e);
            }),
            (t.exports = s);
        },
        {
          "../core/canvas": 35,
          "../core/constants": 36,
          "../core/core": 37,
          "../core/error_helpers": 40,
          "./filters": 54,
        },
      ],
      57: [
        function (e, t, r) {
          "use strict";
          var o = e("../core/core"),
            n = e("./filters");
          (o.Image = function (e, t) {
            (this.width = e),
              (this.height = t),
              (this.canvas = document.createElement("canvas")),
              (this.canvas.width = this.width),
              (this.canvas.height = this.height),
              (this.drawingContext = this.canvas.getContext("2d")),
              (this._pixelDensity = 1),
              (this.isTexture = !1),
              (this.pixels = []);
          }),
            (o.Image.prototype._setProperty = function (e, t) {
              this[e] = t;
            }),
            (o.Image.prototype.loadPixels = function () {
              o.Renderer2D.prototype.loadPixels.call(this);
            }),
            (o.Image.prototype.updatePixels = function (e, t, r, n) {
              o.Renderer2D.prototype.updatePixels.call(this, e, t, r, n);
            }),
            (o.Image.prototype.get = function (e, t, r, n) {
              return o.Renderer2D.prototype.get.call(this, e, t, r, n);
            }),
            (o.Image.prototype.set = function (e, t, r) {
              o.Renderer2D.prototype.set.call(this, e, t, r);
            }),
            (o.Image.prototype.resize = function (e, t) {
              0 === e && 0 === t
                ? ((e = this.canvas.width), (t = this.canvas.height))
                : 0 === e
                ? (e = (this.canvas.width * t) / this.canvas.height)
                : 0 === t && (t = (this.canvas.height * e) / this.canvas.width),
                (e = Math.floor(e)),
                (t = Math.floor(t));
              var r = document.createElement("canvas");
              (r.width = e),
                (r.height = t),
                r
                  .getContext("2d")
                  .drawImage(
                    this.canvas,
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height,
                    0,
                    0,
                    r.width,
                    r.height
                  ),
                (this.canvas.width = this.width = e),
                (this.canvas.height = this.height = t),
                this.drawingContext.drawImage(r, 0, 0, e, t, 0, 0, e, t),
                0 < this.pixels.length && this.loadPixels();
            }),
            (o.Image.prototype.copy = function () {
              o.prototype.copy.apply(this, arguments);
            }),
            (o.Image.prototype.mask = function (e) {
              void 0 === e && (e = this);
              var t = this.drawingContext.globalCompositeOperation,
                r = 1;
              e instanceof o.Renderer && (r = e._pInst._pixelDensity);
              e = [
                e,
                0,
                0,
                r * e.width,
                r * e.height,
                0,
                0,
                this.width,
                this.height,
              ];
              (this.drawingContext.globalCompositeOperation = "destination-in"),
                o.Image.prototype.copy.apply(this, e),
                (this.drawingContext.globalCompositeOperation = t);
            }),
            (o.Image.prototype.filter = function (e, t) {
              n.apply(this.canvas, n[e.toLowerCase()], t);
            }),
            (o.Image.prototype.blend = function () {
              o.prototype.blend.apply(this, arguments);
            }),
            (o.Image.prototype.save = function (e, t) {
              var r;
              if (t)
                switch (t.toLowerCase()) {
                  case "png":
                    r = "image/png";
                    break;
                  case "jpeg":
                  case "jpg":
                    r = "image/jpeg";
                    break;
                  default:
                    r = "image/png";
                }
              else (t = "png"), (r = "image/png");
              var n = (n = this.canvas.toDataURL(r)).replace(
                r,
                "image/octet-stream"
              );
              o.prototype.downloadFile(n, e, t);
            }),
            (t.exports = o.Image);
        },
        { "../core/core": 37, "./filters": 54 },
      ],
      58: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core"),
            o = e("./filters");
          e("../color/p5.Color"),
            (n.prototype.pixels = []),
            (n.prototype.blend = function () {
              this._renderer
                ? this._renderer.blend.apply(this._renderer, arguments)
                : n.Renderer2D.prototype.blend.apply(this, arguments);
            }),
            (n.prototype.copy = function () {
              n.Renderer2D._copyHelper.apply(this, arguments);
            }),
            (n.prototype.filter = function (e, t) {
              void 0 !== this.canvas
                ? o.apply(this.canvas, o[e.toLowerCase()], t)
                : o.apply(this.elt, o[e.toLowerCase()], t);
            }),
            (n.prototype.get = function (e, t, r, n) {
              return this._renderer.get(e, t, r, n);
            }),
            (n.prototype.loadPixels = function () {
              this._renderer.loadPixels();
            }),
            (n.prototype.set = function (e, t, r) {
              this._renderer.set(e, t, r);
            }),
            (n.prototype.updatePixels = function (e, t, r, n) {
              0 !== this.pixels.length &&
                this._renderer.updatePixels(e, t, r, n);
            }),
            (t.exports = n);
        },
        { "../color/p5.Color": 31, "../core/core": 37, "./filters": 54 },
      ],
      59: [
        function (e, t, r) {
          "use strict";
          var g = e("../core/core"),
            h = e("reqwest"),
            l = e("opentype.js");
          function f(e) {
            return e
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
          }
          function i(e, t) {
            (t && !0 !== t && "true" !== t) || (t = "");
            var r = "";
            return (
              (e = e || "untitled") &&
                -1 < e.indexOf(".") &&
                (r = e.split(".").pop()),
              t && r !== t && (e = e + "." + (r = t)),
              [e, r]
            );
          }
          e("../core/error_helpers"),
            (g._getDecrementPreload = function () {
              var e = arguments[arguments.length - 1];
              return (window.preload || (this && this.preload)) &&
                "function" == typeof e
                ? e
                : null;
            }),
            (g.prototype.loadFont = function (n, o, i) {
              var s = new g.Font(this),
                a = g._getDecrementPreload.apply(this, arguments);
              return (
                l.load(n, function (e, t) {
                  if (e)
                    return void 0 !== i && i !== a
                      ? i(e)
                      : (g._friendlyFileLoadError(4, n),
                        void console.error(e, n));
                  (s.font = t), void 0 !== o && o(s), a && o !== a && a();
                  var r = n.split("\\").pop().split("/").pop(),
                    e = r.lastIndexOf("."),
                    t = e < 1 ? null : r.substr(e + 1);
                  -1 < ["ttf", "otf", "woff", "woff2"].indexOf(t) &&
                    ((r = r.substr(0, e)),
                    (e = document.createElement("style")).appendChild(
                      document.createTextNode(
                        "\n@font-face {\nfont-family: " +
                          r +
                          ";\nsrc: url(" +
                          n +
                          ");\n}\n"
                      )
                    ),
                    document.head.appendChild(e));
                }),
                s
              );
            }),
            (g.prototype.createInput = function () {
              throw "not yet implemented";
            }),
            (g.prototype.createReader = function () {
              throw "not yet implemented";
            }),
            (g.prototype.loadBytes = function () {
              throw "not yet implemented";
            }),
            (g.prototype.loadJSON = function () {
              for (
                var t,
                  e = arguments[0],
                  r = arguments[1],
                  n = g._getDecrementPreload.apply(this, arguments),
                  o = {},
                  i = "json",
                  s = 2;
                s < arguments.length;
                s++
              ) {
                var a = arguments[s];
                "string" == typeof a
                  ? ("jsonp" !== a && "json" !== a) || (i = a)
                  : "function" == typeof a && (t = a);
              }
              return (
                h({
                  url: e,
                  type: i,
                  crossOrigin: !0,
                  error: function (e) {
                    t ? t(e) : console.log(e.statusText);
                  },
                  success: function (e) {
                    for (var t in e) o[t] = e[t];
                    void 0 !== r && r(e), n && r !== n && n();
                  },
                }),
                o
              );
            }),
            (g.prototype.loadStrings = function (e, r, n) {
              var o = [],
                i = new XMLHttpRequest(),
                s = g._getDecrementPreload.apply(this, arguments);
              return (
                i.addEventListener("error", function (e) {
                  n ? n(e) : console.log(e.responseText);
                }),
                i.open("GET", e, !0),
                (i.onreadystatechange = function () {
                  if (4 === i.readyState)
                    if (200 === i.status) {
                      var e,
                        t = i.responseText.match(/[^\r\n]+/g);
                      for (e in t) o[e] = t[e];
                      void 0 !== r && r(o), s && r !== s && s();
                    } else n ? n(i) : console.log(i.statusText);
                }),
                i.send(null),
                o
              );
            }),
            (g.prototype.loadTable = function (r) {
              for (
                var p = null,
                  e = [],
                  u = !1,
                  c = ",",
                  t = !1,
                  d = g._getDecrementPreload.apply(this, arguments),
                  f = 1;
                f < arguments.length;
                f++
              )
                if ("function" == typeof arguments[f] && arguments[f] !== d)
                  p = arguments[f];
                else if ("string" == typeof arguments[f])
                  if (
                    (e.push(arguments[f]),
                    "header" === arguments[f] && (u = !0),
                    "csv" === arguments[f])
                  ) {
                    if (t)
                      throw new Error("Cannot set multiple separator types.");
                    (c = ","), (t = !0);
                  } else if ("tsv" === arguments[f]) {
                    if (t)
                      throw new Error("Cannot set multiple separator types.");
                    (c = "\t"), (t = !0);
                  }
              var m = new g.Table();
              return (
                h({ url: r, crossOrigin: !0, type: "csv" })
                  .then(function (e) {
                    e = e.responseText;
                    for (
                      var t,
                        r,
                        n = {},
                        o = [],
                        i = 0,
                        s = null,
                        a = function () {
                          (n.currentState = 4), o.push(s), (s = null);
                        },
                        h = function () {
                          (n.currentState = 0), (n.token = "");
                        },
                        l = function () {
                          s.push(n.token), h();
                        };
                      ;

                    ) {
                      if (null == (t = e[i++])) {
                        if (n.escaped)
                          throw new Error("Unclosed quote in file.");
                        if (s) {
                          l(), a();
                          break;
                        }
                      }
                      if (
                        (null === s && ((n.escaped = !1), (s = []), h()),
                        0 === n.currentState)
                      ) {
                        if ('"' === t) {
                          (n.escaped = !0), (n.currentState = 1);
                          continue;
                        }
                        n.currentState = 1;
                      }
                      1 === n.currentState && n.escaped
                        ? '"' === t
                          ? '"' === e[i]
                            ? ((n.token += '"'), i++)
                            : ((n.escaped = !1), (n.currentState = 2))
                          : (n.token += t)
                        : "\r" === t
                        ? ("\n" === e[i] && i++, l(), a())
                        : "\n" === t
                        ? (l(), a())
                        : t === c
                        ? l()
                        : 1 === n.currentState && (n.token += t);
                    }
                    if (u) m.columns = o.shift();
                    else
                      for (f = 0; f < o[0].length; f++) m.columns[f] = "null";
                    for (
                      f = 0;
                      f < o.length &&
                      (f !== o.length - 1 ||
                        1 !== o[f].length ||
                        "undefined" !== o[f][0]);
                      f++
                    )
                      ((r = new g.TableRow()).arr = o[f]),
                        (r.obj = (function (e, t) {
                          var r = {};
                          if (void 0 === (t = t || []))
                            for (var n = 0; n < e.length; n++)
                              t[n.toString()] = n;
                          for (var o = 0; o < t.length; o++) {
                            var i = t[o],
                              s = e[o];
                            r[i] = s;
                          }
                          return r;
                        })(o[f], m.columns)),
                        m.addRow(r);
                    null !== p && p(m), d && p !== d && d();
                  })
                  .fail(function (e, t) {
                    g._friendlyFileLoadError(2, r),
                      "function" == typeof p && p !== d && p(!1);
                  }),
                m
              );
            }),
            (g.prototype.parseXML = function (e) {
              var t,
                r = new g.XML();
              if (e.children.length) {
                for (t = 0; t < e.children.length; t++) {
                  var n = parseXML(e.children[t]);
                  r.addChild(n);
                }
                r.setName(e.nodeName),
                  r._setCont(e.textContent),
                  r._setAttributes(e);
                for (var o = 0; o < r.children.length; o++)
                  r.children[o].parent = r;
                return r;
              }
              return (
                r.setName(e.nodeName),
                r._setCont(e.textContent),
                r._setAttributes(e),
                r
              );
            }),
            (g.prototype.loadXML = function (e, n, t) {
              var o = {},
                i = g._getDecrementPreload.apply(this, arguments);
              return (
                h({
                  url: e,
                  type: "xml",
                  crossOrigin: !0,
                  error: function (e) {
                    t ? t(e) : console.log(e.statusText);
                  },
                }).then(function (e) {
                  var t,
                    r = parseXML(e.documentElement);
                  for (t in r) o[t] = r[t];
                  void 0 !== n && n(o), i && n !== i && i();
                }),
                o
              );
            }),
            (g.prototype.selectFolder = function () {
              throw "not yet implemented";
            }),
            (g.prototype.selectInput = function () {
              throw "not yet implemented";
            }),
            (g.prototype.httpGet = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              e.push("GET"), g.prototype.httpDo.apply(this, e);
            }),
            (g.prototype.httpPost = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              e.push("POST"), g.prototype.httpDo.apply(this, e);
            }),
            (g.prototype.httpDo = function () {
              if ("object" == typeof arguments[0]) h(arguments[0]);
              else {
                for (
                  var t, r, e = "GET", n = arguments[0], o = {}, i = "", s = 1;
                  s < arguments.length;
                  s++
                ) {
                  var a = arguments[s];
                  "string" == typeof a
                    ? "GET" === a ||
                      "POST" === a ||
                      "PUT" === a ||
                      "DELETE" === a
                      ? (e = a)
                      : (i = a)
                    : "object" == typeof a
                    ? (o = a)
                    : "function" == typeof a && (t ? (r = a) : (t = a));
                }
                "" === i &&
                  (i =
                    -1 !== n.indexOf("json")
                      ? "json"
                      : -1 !== n.indexOf("xml")
                      ? "xml"
                      : "text"),
                  h({
                    url: n,
                    method: e,
                    data: o,
                    type: i,
                    crossOrigin: !0,
                    success: function (e) {
                      void 0 !== t && t("text" === i ? e.response : e);
                    },
                    error: function (e) {
                      r ? r(e) : console.log(e.statusText);
                    },
                  });
              }
            }),
            (window.URL = window.URL || window.webkitURL),
            (g.prototype._pWriters = []),
            (g.prototype.beginRaw = function () {
              throw "not yet implemented";
            }),
            (g.prototype.beginRecord = function () {
              throw "not yet implemented";
            }),
            (g.prototype.createOutput = function () {
              throw "not yet implemented";
            }),
            (g.prototype.createWriter = function (e, t) {
              var r, n;
              for (n in g.prototype._pWriters)
                if (g.prototype._pWriters[n].name === e)
                  return (
                    (r = new g.PrintWriter(e + window.millis(), t)),
                    g.prototype._pWriters.push(r),
                    r
                  );
              return (
                (r = new g.PrintWriter(e, t)), g.prototype._pWriters.push(r), r
              );
            }),
            (g.prototype.endRaw = function () {
              throw "not yet implemented";
            }),
            (g.prototype.endRecord = function () {
              throw "not yet implemented";
            }),
            (g.PrintWriter = function (r, n) {
              var o = this;
              (this.name = r),
                (this.content = ""),
                (this.print = function (e) {
                  this.content += e;
                }),
                (this.print = function (e) {
                  this.content += e + "\n";
                }),
                (this.flush = function () {
                  this.content = "";
                }),
                (this.close = function () {
                  var e,
                    t = [];
                  for (e in (t.push(this.content),
                  g.prototype.writeFile(t, r, n),
                  g.prototype._pWriters))
                    g.prototype._pWriters[e].name === this.name &&
                      g.prototype._pWriters.splice(e, 1);
                  o.flush(), (o = {});
                });
            }),
            (g.prototype.saveBytes = function () {
              throw "not yet implemented";
            }),
            (g.prototype.save = function (e, t, r) {
              var n = arguments,
                o = this._curElement.elt;
              if (0 === n.length) g.prototype.saveCanvas(o);
              else if (n[0] instanceof g.Renderer || n[0] instanceof g.Graphics)
                g.prototype.saveCanvas(n[0].elt, n[1], n[2]);
              else if (1 === n.length && "string" == typeof n[0])
                g.prototype.saveCanvas(o, n[0]);
              else
                switch (i(n[1], n[2])[1]) {
                  case "json":
                    return void g.prototype.saveJSON(n[0], n[1], n[2]);
                  case "txt":
                    return void g.prototype.saveStrings(n[0], n[1], n[2]);
                  default:
                    n[0] instanceof Array
                      ? g.prototype.saveStrings(n[0], n[1], n[2])
                      : n[0] instanceof g.Table
                      ? g.prototype.saveTable(n[0], n[1], n[2], n[3])
                      : n[0] instanceof g.Image
                      ? g.prototype.saveCanvas(n[0].canvas, n[1])
                      : n[0] instanceof g.SoundFile &&
                        g.prototype.saveSound(n[0], n[1], n[2], n[3]);
                }
            }),
            (g.prototype.saveJSON = function (e, t, r) {
              e = r ? JSON.stringify(e) : JSON.stringify(e, void 0, 2);
              console.log(e), this.saveStrings(e.split("\n"), t, "json");
            }),
            (g.prototype.saveJSONObject = g.prototype.saveJSON),
            (g.prototype.saveJSONArray = g.prototype.saveJSON),
            (g.prototype.saveStream = function () {
              throw "not yet implemented";
            }),
            (g.prototype.saveStrings = function (e, t, r) {
              for (
                var r = r || "txt", n = this.createWriter(t, r), o = 0;
                o < e.length;
                o++
              )
                e.length, n.print(e[o]);
              n.close(), n.flush();
            }),
            (g.prototype.saveXML = function () {
              throw "not yet implemented";
            }),
            (g.prototype.selectOutput = function () {
              throw "not yet implemented";
            }),
            (g.prototype.saveTable = function (e, t, r) {
              var n = this.createWriter(t, r),
                o = e.columns,
                i = "tsv" === r ? "\t" : ",";
              if ("html" !== r) {
                if ("0" !== o[0])
                  for (var s = 0; s < o.length; s++)
                    s < o.length - 1 ? n.print(o[s] + i) : n.print(o[s]);
                for (var a = 0; a < e.rows.length; a++)
                  for (var h = 0; h < e.rows[a].arr.length; h++)
                    h < e.rows[a].arr.length - 1
                      ? n.print(e.rows[a].arr[h] + i)
                      : (e.rows.length, n.print(e.rows[a].arr[h]));
              } else {
                n.print("<html>"), n.print("<head>");
                r = '  <meta http-equiv="content-type" content';
                if (
                  ((r += '="text/html;charset=utf-8" />'),
                  n.print(
                    '  <meta http-equiv="content-type" content="text/html;charset=utf-8" />'
                  ),
                  n.print("</head>"),
                  n.print("<body>"),
                  n.print("  <table>"),
                  "0" !== o[0])
                ) {
                  n.print("    <tr>");
                  for (var l = 0; l < o.length; l++) {
                    var p = f(o[l]);
                    n.print("      <td>" + p), n.print("      </td>");
                  }
                  n.print("    </tr>");
                }
                for (var u = 0; u < e.rows.length; u++) {
                  n.print("    <tr>");
                  for (var c = 0; c < e.columns.length; c++) {
                    var d = f(e.rows[u].getString(c));
                    n.print("      <td>" + d), n.print("      </td>");
                  }
                  n.print("    </tr>");
                }
                n.print("  </table>"), n.print("</body>"), n.print("</html>");
              }
              n.close(), n.flush();
            }),
            (g.prototype.writeFile = function (e, t, r) {
              var n = "application/octet-stream";
              g.prototype._isSafari() && (n = "text/plain");
              (n = new Blob(e, { type: n })),
                (n = window.URL.createObjectURL(n));
              g.prototype.downloadFile(n, t, r);
            }),
            (g.prototype.downloadFile = function (e, t, r) {
              var n = i(t, r),
                t = n[0],
                r = n[1],
                n = document.createElement("a");
              (n.href = e),
                (n.download = t),
                (n.onclick = function (e) {
                  var t;
                  (t = e),
                    document.body.removeChild(t.target),
                    e.stopPropagation();
                }),
                (n.style.display = "none"),
                document.body.appendChild(n),
                g.prototype._isSafari() &&
                  ((t = "Hello, Safari user! To download this file...\n"),
                  (t += "1. Go to File --\x3e Save As.\n"),
                  (t += '2. Choose "Page Source" as the Format.\n'),
                  (t += '3. Name it with this extension: ."' + r + '"'),
                  alert(t)),
                n.click(),
                (e = null);
            }),
            (g.prototype._checkFileExtension = i),
            (g.prototype._isSafari = function () {
              return (
                0 <
                Object.prototype.toString
                  .call(window.HTMLElement)
                  .indexOf("Constructor")
              );
            }),
            (t.exports = g);
        },
        {
          "../core/core": 37,
          "../core/error_helpers": 40,
          "opentype.js": 8,
          reqwest: 27,
        },
      ],
      60: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core");
          (n.Table = function (e) {
            (this.columns = []), (this.rows = []);
          }),
            (n.Table.prototype.addRow = function (e) {
              e = e || new n.TableRow();
              if (void 0 === e.arr || void 0 === e.obj)
                throw "invalid TableRow: " + e;
              return (e.table = this).rows.push(e), e;
            }),
            (n.Table.prototype.removeRow = function (e) {
              this.rows[e].table = null;
              e = this.rows.splice(e + 1, this.rows.length);
              this.rows.pop(), (this.rows = this.rows.concat(e));
            }),
            (n.Table.prototype.getRow = function (e) {
              return this.rows[e];
            }),
            (n.Table.prototype.getRows = function () {
              return this.rows;
            }),
            (n.Table.prototype.findRow = function (e, t) {
              if ("string" == typeof t) {
                for (var r = 0; r < this.rows.length; r++)
                  if (this.rows[r].obj[t] === e) return this.rows[r];
              } else
                for (var n = 0; n < this.rows.length; n++)
                  if (this.rows[n].arr[t] === e) return this.rows[n];
              return null;
            }),
            (n.Table.prototype.findRows = function (e, t) {
              var r = [];
              if ("string" == typeof t)
                for (var n = 0; n < this.rows.length; n++)
                  this.rows[n].obj[t] === e && r.push(this.rows[n]);
              else
                for (var o = 0; o < this.rows.length; o++)
                  this.rows[o].arr[t] === e && r.push(this.rows[o]);
              return r;
            }),
            (n.Table.prototype.matchRow = function (e, t) {
              if ("number" == typeof t) {
                for (var r = 0; r < this.rows.length; r++)
                  if (this.rows[r].arr[t].match(e)) return this.rows[r];
              } else
                for (var n = 0; n < this.rows.length; n++)
                  if (this.rows[n].obj[t].match(e)) return this.rows[n];
              return null;
            }),
            (n.Table.prototype.matchRows = function (e, t) {
              var r = [];
              if ("number" == typeof t)
                for (var n = 0; n < this.rows.length; n++)
                  this.rows[n].arr[t].match(e) && r.push(this.rows[n]);
              else
                for (var o = 0; o < this.rows.length; o++)
                  this.rows[o].obj[t].match(e) && r.push(this.rows[o]);
              return r;
            }),
            (n.Table.prototype.getColumn = function (e) {
              var t = [];
              if ("string" == typeof e)
                for (var r = 0; r < this.rows.length; r++)
                  t.push(this.rows[r].obj[e]);
              else
                for (var n = 0; n < this.rows.length; n++)
                  t.push(this.rows[n].arr[e]);
              return t;
            }),
            (n.Table.prototype.clearRows = function () {
              delete this.rows, (this.rows = []);
            }),
            (n.Table.prototype.addColumn = function (e) {
              e = e || null;
              this.columns.push(e);
            }),
            (n.Table.prototype.getColumnCount = function () {
              return this.columns.length;
            }),
            (n.Table.prototype.getRowCount = function () {
              return this.rows.length;
            }),
            (n.Table.prototype.removeTokens = function (e, t) {
              for (var r = [], n = 0; n < e.length; n++)
                r.push(e.charAt(n).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
              var o = new RegExp(r.join("|"), "g");
              if (void 0 === t)
                for (var i = 0; i < this.columns.length; i++)
                  for (var s = 0; s < this.rows.length; s++) {
                    var a = (a = this.rows[s].arr[i]).replace(o, "");
                    (this.rows[s].arr[i] = a),
                      (this.rows[s].obj[this.columns[i]] = a);
                  }
              else if ("string" == typeof t)
                for (var h = 0; h < this.rows.length; h++) {
                  var l = (l = this.rows[h].obj[t]).replace(o, "");
                  this.rows[h].obj[t] = l;
                  var p = this.columns.indexOf(t);
                  this.rows[h].arr[p] = l;
                }
              else
                for (var u = 0; u < this.rows.length; u++) {
                  var c = (c = this.rows[u].arr[t]).replace(o, "");
                  (this.rows[u].arr[t] = c),
                    (this.rows[u].obj[this.columns[t]] = c);
                }
            }),
            (n.Table.prototype.trim = function (e) {
              var t = new RegExp(" ", "g");
              if (void 0 === e)
                for (var r = 0; r < this.columns.length; r++)
                  for (var n = 0; n < this.rows.length; n++) {
                    var o = (o = this.rows[n].arr[r]).replace(t, "");
                    (this.rows[n].arr[r] = o),
                      (this.rows[n].obj[this.columns[r]] = o);
                  }
              else if ("string" == typeof e)
                for (var i = 0; i < this.rows.length; i++) {
                  var s = (s = this.rows[i].obj[e]).replace(t, "");
                  this.rows[i].obj[e] = s;
                  var a = this.columns.indexOf(e);
                  this.rows[i].arr[a] = s;
                }
              else
                for (var h = 0; h < this.rows.length; h++) {
                  var l = (l = this.rows[h].arr[e]).replace(t, "");
                  (this.rows[h].arr[e] = l),
                    (this.rows[h].obj[this.columns[e]] = l);
                }
            }),
            (n.Table.prototype.removeColumn = function (e) {
              var t, r;
              "string" == typeof e
                ? ((t = e),
                  (r = this.columns.indexOf(e)),
                  console.log("string"))
                : ((r = e), (t = this.columns[e]));
              e = this.columns.splice(r + 1, this.columns.length);
              this.columns.pop(), (this.columns = this.columns.concat(e));
              for (var n = 0; n < this.rows.length; n++) {
                var o = this.rows[n].arr,
                  i = o.splice(r + 1, o.length);
                o.pop(),
                  (this.rows[n].arr = o.concat(i)),
                  delete this.rows[n].obj[t];
              }
            }),
            (n.Table.prototype.set = function (e, t, r) {
              this.rows[e].set(t, r);
            }),
            (n.Table.prototype.setNum = function (e, t, r) {
              this.rows[e].setNum(t, r);
            }),
            (n.Table.prototype.setString = function (e, t, r) {
              this.rows[e].setString(t, r);
            }),
            (n.Table.prototype.get = function (e, t) {
              return this.rows[e].get(t);
            }),
            (n.Table.prototype.getNum = function (e, t) {
              return this.rows[e].getNum(t);
            }),
            (n.Table.prototype.getString = function (e, t) {
              return this.rows[e].getString(t);
            }),
            (n.Table.prototype.getObject = function (e) {
              for (var t, r = {}, n = 0; n < this.rows.length; n++)
                if (((t = this.rows[n].obj), "string" == typeof e)) {
                  if (!(0 <= this.columns.indexOf(e)))
                    throw 'This table has no column named "' + e + '"';
                  r[t[e]] = t;
                } else r[n] = this.rows[n].obj;
              return r;
            }),
            (n.Table.prototype.getArray = function () {
              for (var e = [], t = 0; t < this.rows.length; t++)
                e.push(this.rows[t].arr);
              return e;
            }),
            (t.exports = n.Table);
        },
        { "../core/core": 37 },
      ],
      61: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          (e.TableRow = function (e, t) {
            var r = [],
              n = {};
            e && ((t = t || ","), (r = e.split(t)));
            for (var o = 0; o < r.length; o++) {
              var i = r[o];
              n[o] = i;
            }
            (this.arr = r), (this.obj = n), (this.table = null);
          }),
            (e.TableRow.prototype.set = function (e, t) {
              if ("string" == typeof e) {
                var r = this.table.columns.indexOf(e);
                if (!(0 <= r))
                  throw 'This table has no column named "' + e + '"';
                (this.obj[e] = t), (this.arr[r] = t);
              } else {
                if (!(e < this.table.columns.length))
                  throw "Column #" + e + " is out of the range of this table";
                this.arr[e] = t;
                e = this.table.columns[e];
                this.obj[e] = t;
              }
            }),
            (e.TableRow.prototype.setNum = function (e, t) {
              t = parseFloat(t, 10);
              this.set(e, t);
            }),
            (e.TableRow.prototype.setString = function (e, t) {
              t = t.toString();
              this.set(e, t);
            }),
            (e.TableRow.prototype.get = function (e) {
              return ("string" == typeof e ? this.obj : this.arr)[e];
            }),
            (e.TableRow.prototype.getNum = function (e) {
              var t =
                "string" == typeof e
                  ? parseFloat(this.obj[e], 10)
                  : parseFloat(this.arr[e], 10);
              if ("NaN" === t.toString())
                throw "Error: " + this.obj[e] + " is NaN (Not a Number)";
              return t;
            }),
            (e.TableRow.prototype.getString = function (e) {
              return ("string" == typeof e ? this.obj : this.arr)[e].toString();
            }),
            (t.exports = e.TableRow);
        },
        { "../core/core": 37 },
      ],
      62: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core");
          (n.XML = function () {
            (this.name = null),
              (this.attributes = {}),
              (this.children = []),
              (this.parent = null),
              (this.content = null);
          }),
            (n.XML.prototype.getParent = function () {
              return this.parent;
            }),
            (n.XML.prototype.getName = function () {
              return this.name;
            }),
            (n.XML.prototype.setName = function (e) {
              this.name = e;
            }),
            (n.XML.prototype.hasChildren = function () {
              return 0 < this.children.length;
            }),
            (n.XML.prototype.listChildren = function () {
              return this.children.map(function (e) {
                return e.name;
              });
            }),
            (n.XML.prototype.getChildren = function (t) {
              return t
                ? this.children.filter(function (e) {
                    return e.name === t;
                  })
                : this.children;
            }),
            (n.XML.prototype.getChild = function (t) {
              return "string" == typeof t
                ? this.children.find(function (e) {
                    return e.name === t;
                  })
                : this.children[t];
            }),
            (n.XML.prototype.addChild = function (e) {
              e instanceof n.XML && this.children.push(e);
            }),
            (n.XML.prototype.removeChild = function (e) {
              var t = -1;
              if ("string" == typeof e) {
                for (var r = 0; r < this.children.length; r++)
                  if (this.children[r].name === e) {
                    t = r;
                    break;
                  }
              } else t = e;
              -1 !== t && this.children.splice(t, 1);
            }),
            (n.XML.prototype.getAttributeCount = function () {
              return Object.keys(this.attributes).length;
            }),
            (n.XML.prototype.listAttributes = function () {
              return Object.keys(this.attributes);
            }),
            (n.XML.prototype.hasAttribute = function (e) {
              return !!this.attributes[e];
            }),
            (n.XML.prototype.getNumber = function (e, t) {
              return Number(this.attributes[e]) || t || 0;
            }),
            (n.XML.prototype.getString = function (e, t) {
              return String(this.attributes[e]) || t || null;
            }),
            (n.XML.prototype.setAttribute = function (e, t) {
              this.attributes[e] && (this.attributes[e] = t);
            }),
            (n.XML.prototype.getContent = function (e) {
              return this.content || e || null;
            }),
            (n.XML.prototype.setContent = function (e) {
              this.children.length || (this.content = e);
            }),
            (n.XML.prototype._setCont = function (e) {
              (e = e.replace(/\s\s+/g, ",")), (this.content = e);
            }),
            (n.XML.prototype._setAttributes = function (e) {
              for (var t = {}, r = 0; r < e.attributes.length; r++)
                t[e.attributes[r].nodeName] = e.attributes[r].nodeValue;
              this.attributes = t;
            }),
            (t.exports = n.XML);
        },
        { "../core/core": 37 },
      ],
      63: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          function s() {
            if ("function" == typeof Math.hypot)
              return Math.hypot.apply(null, arguments);
            for (var e = arguments.length, t = [], r = 0, n = 0; n < e; n++) {
              var o = arguments[n];
              if ((o = +o) === 1 / 0 || o === -1 / 0) return 1 / 0;
              r < (o = Math.abs(o)) && (r = o), (t[n] = o);
            }
            0 === r && (r = 1);
            for (var i = 0, s = 0, a = 0; a < e; a++)
              var h = t[a] / r, l = h * h - s, h = i + l, s = h - i - l, i = h;
            return Math.sqrt(i) * r;
          }
          (e.prototype.abs = Math.abs),
            (e.prototype.ceil = Math.ceil),
            (e.prototype.constrain = function (e, t, r) {
              return Math.max(Math.min(e, r), t);
            }),
            (e.prototype.dist = function (e, t, r, n, o, i) {
              return 4 === arguments.length
                ? s(r - e, n - t)
                : 6 === arguments.length
                ? s(n - e, o - t, i - r)
                : void 0;
            }),
            (e.prototype.exp = Math.exp),
            (e.prototype.floor = Math.floor),
            (e.prototype.lerp = function (e, t, r) {
              return r * (t - e) + e;
            }),
            (e.prototype.log = Math.log),
            (e.prototype.mag = function (e, t) {
              return s(e, t);
            }),
            (e.prototype.map = function (e, t, r, n, o) {
              return ((e - t) / (r - t)) * (o - n) + n;
            }),
            (e.prototype.max = function () {
              return arguments[0] instanceof Array
                ? Math.max.apply(null, arguments[0])
                : Math.max.apply(null, arguments);
            }),
            (e.prototype.min = function () {
              return arguments[0] instanceof Array
                ? Math.min.apply(null, arguments[0])
                : Math.min.apply(null, arguments);
            }),
            (e.prototype.norm = function (e, t, r) {
              return this.map(e, t, r, 0, 1);
            }),
            (e.prototype.pow = Math.pow),
            (e.prototype.round = Math.round),
            (e.prototype.sq = function (e) {
              return e * e;
            }),
            (e.prototype.sqrt = Math.sqrt),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      64: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core");
          (n.prototype.createVector = function (e, t, r) {
            return this instanceof n
              ? new n.Vector(this, arguments)
              : new n.Vector(e, t, r);
          }),
            (t.exports = n);
        },
        { "../core/core": 37 },
      ],
      65: [
        function (e, t, r) {
          "use strict";
          function x(e) {
            return 0.5 * (1 - Math.cos(e * Math.PI));
          }
          var _,
            e = e("../core/core"),
            w = 4095,
            b = 4,
            S = 0.5;
          (e.prototype.noise = function (e, t, r) {
            if (((t = t || 0), (r = r || 0), null == _)) {
              _ = new Array(4096);
              for (var n = 0; n < 4096; n++) _[n] = Math.random();
            }
            e < 0 && (e = -e), t < 0 && (t = -t), r < 0 && (r = -r);
            for (
              var o,
                i,
                s = Math.floor(e),
                a = Math.floor(t),
                h = Math.floor(r),
                l = e - s,
                p = t - a,
                u = r - h,
                c = 0,
                d = 0.5,
                f = 0;
              f < b;
              f++
            ) {
              var m = s + (a << 4) + (h << 8),
                g = x(l),
                y = x(p),
                v = _[m & w];
              (v += g * (_[(m + 1) & w] - v)),
                (o = _[(m + 16) & w]),
                (v += y * ((o += g * (_[(m + 16 + 1) & w] - o)) - v)),
                (o = _[(m += 256) & w]),
                (o += g * (_[(m + 1) & w] - o)),
                (i = _[(m + 16) & w]),
                (o += y * ((i += g * (_[(m + 16 + 1) & w] - i)) - o)),
                (c += (v += x(u) * (o - v)) * d),
                (d *= S),
                (s <<= 1),
                (a <<= 1),
                (h <<= 1),
                1 <= (l *= 2) && (s++, l--),
                1 <= (p *= 2) && (a++, p--),
                1 <= (u *= 2) && (h++, u--);
            }
            return c;
          }),
            (e.prototype.noiseDetail = function (e, t) {
              0 < e && (b = e), 0 < t && (S = t);
            }),
            (e.prototype.noiseSeed = function (e) {
              var t,
                r,
                n,
                o =
                  ((n = 4294967296),
                  {
                    setSeed: function (e) {
                      r = t = (null == e ? Math.random() * n : e) >>> 0;
                    },
                    getSeed: function () {
                      return t;
                    },
                    rand: function () {
                      return (r = (1664525 * r + 1013904223) % n) / n;
                    },
                  });
              o.setSeed(e), (_ = new Array(4096));
              for (var i = 0; i < 4096; i++) _[i] = o.rand();
            }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      66: [
        function (e, t, r) {
          "use strict";
          var i = e("../core/core"),
            n = e("./polargeometry"),
            o = e("../core/constants");
          (i.Vector = function () {
            var e,
              t,
              r =
                arguments[0] instanceof i
                  ? ((this.p5 = arguments[0]),
                    (e = arguments[1][0] || 0),
                    (t = arguments[1][1] || 0),
                    arguments[1][2] || 0)
                  : ((e = arguments[0] || 0),
                    (t = arguments[1] || 0),
                    arguments[2] || 0);
            (this.x = e), (this.y = t), (this.z = r);
          }),
            (i.Vector.prototype.toString = function () {
              return (
                "p5.Vector Object : [" +
                this.x +
                ", " +
                this.y +
                ", " +
                this.z +
                "]"
              );
            }),
            (i.Vector.prototype.set = function (e, t, r) {
              return (
                e instanceof i.Vector
                  ? ((this.x = e.x || 0),
                    (this.y = e.y || 0),
                    (this.z = e.z || 0))
                  : e instanceof Array
                  ? ((this.x = e[0] || 0),
                    (this.y = e[1] || 0),
                    (this.z = e[2] || 0))
                  : ((this.x = e || 0), (this.y = t || 0), (this.z = r || 0)),
                this
              );
            }),
            (i.Vector.prototype.copy = function () {
              return this.p5
                ? new i.Vector(this.p5, [this.x, this.y, this.z])
                : new i.Vector(this.x, this.y, this.z);
            }),
            (i.Vector.prototype.add = function (e, t, r) {
              return (
                e instanceof i.Vector
                  ? ((this.x += e.x || 0),
                    (this.y += e.y || 0),
                    (this.z += e.z || 0))
                  : e instanceof Array
                  ? ((this.x += e[0] || 0),
                    (this.y += e[1] || 0),
                    (this.z += e[2] || 0))
                  : ((this.x += e || 0),
                    (this.y += t || 0),
                    (this.z += r || 0)),
                this
              );
            }),
            (i.Vector.prototype.sub = function (e, t, r) {
              return (
                e instanceof i.Vector
                  ? ((this.x -= e.x || 0),
                    (this.y -= e.y || 0),
                    (this.z -= e.z || 0))
                  : e instanceof Array
                  ? ((this.x -= e[0] || 0),
                    (this.y -= e[1] || 0),
                    (this.z -= e[2] || 0))
                  : ((this.x -= e || 0),
                    (this.y -= t || 0),
                    (this.z -= r || 0)),
                this
              );
            }),
            (i.Vector.prototype.mult = function (e) {
              return (
                (this.x *= e || 0), (this.y *= e || 0), (this.z *= e || 0), this
              );
            }),
            (i.Vector.prototype.div = function (e) {
              return (this.x /= e), (this.y /= e), (this.z /= e), this;
            }),
            (i.Vector.prototype.mag = function () {
              return Math.sqrt(this.magSq());
            }),
            (i.Vector.prototype.magSq = function () {
              var e = this.x,
                t = this.y,
                r = this.z;
              return e * e + t * t + r * r;
            }),
            (i.Vector.prototype.dot = function (e, t, r) {
              return e instanceof i.Vector
                ? this.dot(e.x, e.y, e.z)
                : this.x * (e || 0) + this.y * (t || 0) + this.z * (r || 0);
            }),
            (i.Vector.prototype.cross = function (e) {
              var t = this.y * e.z - this.z * e.y,
                r = this.z * e.x - this.x * e.z,
                e = this.x * e.y - this.y * e.x;
              return this.p5
                ? new i.Vector(this.p5, [t, r, e])
                : new i.Vector(t, r, e);
            }),
            (i.Vector.prototype.dist = function (e) {
              return e.copy().sub(this).mag();
            }),
            (i.Vector.prototype.normalize = function () {
              return 0 === this.mag() ? this : this.div(this.mag());
            }),
            (i.Vector.prototype.limit = function (e) {
              var t = this.magSq();
              return e * e < t && (this.div(Math.sqrt(t)), this.mult(e)), this;
            }),
            (i.Vector.prototype.setMag = function (e) {
              return this.normalize().mult(e);
            }),
            (i.Vector.prototype.heading = function () {
              var e = Math.atan2(this.y, this.x);
              return !this.p5 || this.p5._angleMode === o.RADIANS
                ? e
                : n.radiansToDegrees(e);
            }),
            (i.Vector.prototype.rotate = function (e) {
              var t = this.heading() + e;
              this.p5 &&
                this.p5._angleMode === o.DEGREES &&
                (t = n.degreesToRadians(t));
              e = this.mag();
              return (
                (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e), this
              );
            }),
            (i.Vector.prototype.lerp = function (e, t, r, n) {
              return e instanceof i.Vector
                ? this.lerp(e.x, e.y, e.z, t)
                : ((this.x += (e - this.x) * n || 0),
                  (this.y += (t - this.y) * n || 0),
                  (this.z += (r - this.z) * n || 0),
                  this);
            }),
            (i.Vector.prototype.array = function () {
              return [this.x || 0, this.y || 0, this.z || 0];
            }),
            (i.Vector.prototype.equals = function (e, t, r) {
              var n,
                o,
                r =
                  e instanceof i.Vector
                    ? ((n = e.x || 0), (o = e.y || 0), e.z || 0)
                    : e instanceof Array
                    ? ((n = e[0] || 0), (o = e[1] || 0), e[2] || 0)
                    : ((n = e || 0), (o = t || 0), r || 0);
              return this.x === n && this.y === o && this.z === r;
            }),
            (i.Vector.fromAngle = function (e) {
              return (
                this.p5 &&
                  this.p5._angleMode === o.DEGREES &&
                  (e = n.degreesToRadians(e)),
                this.p5
                  ? new i.Vector(this.p5, [Math.cos(e), Math.sin(e), 0])
                  : new i.Vector(Math.cos(e), Math.sin(e), 0)
              );
            }),
            (i.Vector.random2D = function () {
              var e = this.p5
                ? this.p5._angleMode === o.DEGREES
                  ? this.p5.random(360)
                  : this.p5.random(o.TWO_PI)
                : Math.random() * Math.PI * 2;
              return this.fromAngle(e);
            }),
            (i.Vector.random3D = function () {
              var e = this.p5
                  ? ((r = this.p5.random(0, o.TWO_PI)), this.p5.random(-1, 1))
                  : ((r = Math.random() * Math.PI * 2), 2 * Math.random() - 1),
                t = Math.sqrt(1 - e * e) * Math.cos(r),
                r = Math.sqrt(1 - e * e) * Math.sin(r);
              return this.p5
                ? new i.Vector(this.p5, [t, r, e])
                : new i.Vector(t, r, e);
            }),
            (i.Vector.add = function (e, t, r) {
              return r ? r.set(e) : (r = e.copy()), r.add(t), r;
            }),
            (i.Vector.sub = function (e, t, r) {
              return r ? r.set(e) : (r = e.copy()), r.sub(t), r;
            }),
            (i.Vector.mult = function (e, t, r) {
              return r ? r.set(e) : (r = e.copy()), r.mult(t), r;
            }),
            (i.Vector.div = function (e, t, r) {
              return r ? r.set(e) : (r = e.copy()), r.div(t), r;
            }),
            (i.Vector.dot = function (e, t) {
              return e.dot(t);
            }),
            (i.Vector.cross = function (e, t) {
              return e.cross(t);
            }),
            (i.Vector.dist = function (e, t) {
              return e.dist(t);
            }),
            (i.Vector.lerp = function (e, t, r, n) {
              return n ? n.set(e) : (n = e.copy()), n.lerp(t, r), n;
            }),
            (i.Vector.angleBetween = function (e, t) {
              t = Math.acos(e.dot(t) / (e.mag() * t.mag()));
              return (
                this.p5 &&
                  this.p5._angleMode === o.DEGREES &&
                  (t = n.radiansToDegrees(t)),
                t
              );
            }),
            (i.Vector.mag = function (e) {
              var t = e.x,
                r = e.y,
                e = e.z,
                e = t * t + r * r + e * e;
              return Math.sqrt(e);
            }),
            (t.exports = i.Vector);
        },
        { "../core/constants": 36, "../core/core": 37, "./polargeometry": 67 },
      ],
      67: [
        function (e, t, r) {
          t.exports = {
            degreesToRadians: function (e) {
              return (2 * Math.PI * e) / 360;
            },
            radiansToDegrees: function (e) {
              return (360 * e) / (2 * Math.PI);
            },
          };
        },
        {},
      ],
      68: [
        function (e, t, r) {
          "use strict";
          var n,
            o,
            i,
            e = e("../core/core"),
            s = !1,
            a = !1,
            h = 0,
            l =
              ((i = 4294967296),
              {
                setSeed: function (e) {
                  o = n = (null == e ? Math.random() * i : e) >>> 0;
                },
                getSeed: function () {
                  return n;
                },
                rand: function () {
                  return (o = (1664525 * o + 1013904223) % i) / i;
                },
              });
          (e.prototype.randomSeed = function (e) {
            l.setSeed(e), (a = !(s = !0));
          }),
            (e.prototype.random = function (e, t) {
              var r,
                n = s ? l.rand() : Math.random();
              return void 0 === e
                ? n
                : void 0 === t
                ? e instanceof Array
                  ? e[Math.floor(n * e.length)]
                  : n * e
                : (t < e && ((r = e), (e = t), (t = r)), n * (t - e) + e);
            }),
            (e.prototype.randomGaussian = function (e, t) {
              var r, n, o, i;
              if (a) (r = h), (a = !1);
              else {
                for (
                  ;
                  (i =
                    (n = this.random(2) - 1) * n +
                    (o = this.random(2) - 1) * o),
                    1 <= i;

                );
                (r = n * (i = Math.sqrt((-2 * Math.log(i)) / i))),
                  (h = o * i),
                  (a = !0);
              }
              return r * (t || 1) + (e || 0);
            }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      69: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core"),
            o = e("./polargeometry"),
            i = e("../core/constants");
          (n.prototype._angleMode = i.RADIANS),
            (n.prototype.acos = function (e) {
              return this._angleMode === i.RADIANS
                ? Math.acos(e)
                : o.radiansToDegrees(Math.acos(e));
            }),
            (n.prototype.asin = function (e) {
              return this._angleMode === i.RADIANS
                ? Math.asin(e)
                : o.radiansToDegrees(Math.asin(e));
            }),
            (n.prototype.atan = function (e) {
              return this._angleMode === i.RADIANS
                ? Math.atan(e)
                : o.radiansToDegrees(Math.atan(e));
            }),
            (n.prototype.atan2 = function (e, t) {
              return this._angleMode === i.RADIANS
                ? Math.atan2(e, t)
                : o.radiansToDegrees(Math.atan2(e, t));
            }),
            (n.prototype.cos = function (e) {
              return this._angleMode === i.RADIANS
                ? Math.cos(e)
                : Math.cos(this.radians(e));
            }),
            (n.prototype.sin = function (e) {
              return this._angleMode === i.RADIANS
                ? Math.sin(e)
                : Math.sin(this.radians(e));
            }),
            (n.prototype.tan = function (e) {
              return this._angleMode === i.RADIANS
                ? Math.tan(e)
                : Math.tan(this.radians(e));
            }),
            (n.prototype.degrees = function (e) {
              return o.radiansToDegrees(e);
            }),
            (n.prototype.radians = function (e) {
              return o.degreesToRadians(e);
            }),
            (n.prototype.angleMode = function (e) {
              (e !== i.DEGREES && e !== i.RADIANS) || (this._angleMode = e);
            }),
            (t.exports = n);
        },
        { "../core/constants": 36, "../core/core": 37, "./polargeometry": 67 },
      ],
      70: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          (e.prototype.textAlign = function (e, t) {
            return this._renderer.textAlign.apply(this._renderer, arguments);
          }),
            (e.prototype.textLeading = function (e) {
              return this._renderer.textLeading.apply(
                this._renderer,
                arguments
              );
            }),
            (e.prototype.textSize = function (e) {
              return this._renderer.textSize.apply(this._renderer, arguments);
            }),
            (e.prototype.textStyle = function (e) {
              return this._renderer.textStyle.apply(this._renderer, arguments);
            }),
            (e.prototype.textWidth = function (e) {
              return 0 === e.length
                ? 0
                : this._renderer.textWidth.apply(this._renderer, arguments);
            }),
            (e.prototype.textAscent = function () {
              return this._renderer.textAscent();
            }),
            (e.prototype.textDescent = function () {
              return this._renderer.textDescent();
            }),
            (e.prototype._updateTextMetrics = function () {
              return this._renderer._updateTextMetrics();
            }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      71: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core"),
            o = e("../core/constants");
          e("../core/error_helpers"),
            (n.prototype.text = function (e, t, r, n, o) {
              return this._renderer._doFill || this._renderer._doStroke
                ? this._renderer.text.apply(this._renderer, arguments)
                : this;
            }),
            (n.prototype.textFont = function (e, t) {
              if (arguments.length) {
                if (!e) throw Error("null font passed to textFont");
                return (
                  this._renderer._setProperty("_textFont", e),
                  t &&
                    (this._renderer._setProperty("_textSize", t),
                    this._renderer._setProperty(
                      "_textLeading",
                      t * o._DEFAULT_LEADMULT
                    )),
                  this._renderer._applyTextProperties()
                );
              }
              return this;
            }),
            (t.exports = n);
        },
        {
          "../core/constants": 36,
          "../core/core": 37,
          "../core/error_helpers": 40,
        },
      ],
      72: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core"),
            g = e("../core/constants");
          function d(e, t) {
            var r = e.length;
            return e[t < 0 ? (t % r) + r : t % r];
          }
          function f(e, t, r, n) {
            if (!n)
              return (
                0 ==
                ((s = e),
                (o = r),
                ((i = t)[0] - s[0]) * (o[1] - s[1]) -
                  (o[0] - s[0]) * (i[1] - s[1]))
              );
            var o;
            void 0 === f.tmpPoint1 && ((f.tmpPoint1 = []), (f.tmpPoint2 = []));
            var i = f.tmpPoint1,
              s = f.tmpPoint2;
            (i.x = t.x - e.x),
              (i.y = t.y - e.y),
              (s.x = r.x - t.x),
              (s.y = r.y - t.y);
            (t = i.x * s.x + i.y * s.y),
              (i = Math.sqrt(i.x * i.x + i.y * i.y)),
              (s = Math.sqrt(s.x * s.x + s.y * s.y));
            return Math.acos(t / (i * s)) < n;
          }
          function u(e, t, r, n, o, i, s, a, h) {
            var l = 1 - h,
              p = Math.pow(l, 3),
              u = Math.pow(l, 2),
              c = h * h,
              d = c * h,
              f = p * e + 3 * u * h * r + 3 * l * h * h * o + d * s,
              m = p * t + 3 * u * h * n + 3 * l * h * h * i + d * a,
              p = e + 2 * h * (r - e) + c * (o - 2 * r + e),
              u = t + 2 * h * (n - t) + c * (i - 2 * n + t),
              d = r + 2 * h * (o - r) + c * (s - 2 * o + r),
              c = n + 2 * h * (i - n) + c * (a - 2 * i + n),
              r = l * e + h * r,
              n = l * t + h * n,
              s = l * o + h * s,
              h = l * i + h * a,
              a = 90 - (180 * Math.atan2(p - d, u - c)) / Math.PI;
            return (
              (d < p || u < c) && (a += 180),
              {
                x: f,
                y: m,
                m: { x: p, y: u },
                n: { x: d, y: c },
                start: { x: r, y: n },
                end: { x: s, y: h },
                alpha: a,
              }
            );
          }
          function c(e, t, r, n, o, i, s, a, h) {
            return null == h
              ? v(e, t, r, n, o, i, s, a)
              : u(
                  e,
                  t,
                  r,
                  n,
                  o,
                  i,
                  s,
                  a,
                  (function (e, t, r, n, o, i, s, a, h) {
                    if (h < 0 || v(e, t, r, n, o, i, s, a) < h) return;
                    var l,
                      p = 0.5,
                      u = 1 - p;
                    l = v(e, t, r, n, o, i, s, a, u);
                    for (; 0.01 < Math.abs(l - h); )
                      l = v(
                        e,
                        t,
                        r,
                        n,
                        o,
                        i,
                        s,
                        a,
                        (u += (l < h ? 1 : -1) * (p /= 2))
                      );
                    return u;
                  })(e, t, r, n, o, i, s, a, h)
                );
          }
          function m(e, t, r) {
            for (
              var n,
                o,
                i,
                s,
                a,
                h = 0,
                l = 0,
                p = (e = (function (e, t) {
                  for (
                    var i = x(e),
                      s = t && x(t),
                      r = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null,
                      },
                      n = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null,
                      },
                      o = function (e, t, r) {
                        var n, o;
                        if (!e) return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
                        switch (
                          ((e[0] in { T: 1, Q: 1 }) || (t.qx = t.qy = null),
                          e[0])
                        ) {
                          case "M":
                            (t.X = e[1]), (t.Y = e[2]);
                            break;
                          case "A":
                            e = ["C"].concat(
                              function e(t, r, n, o, i, s, a, h, l, p) {
                                var u = Math.PI,
                                  c = (120 * u) / 180,
                                  d = (u / 180) * (+i || 0),
                                  f = [],
                                  m = function (e, t, r) {
                                    var n = e * Math.cos(r) - t * Math.sin(r),
                                      r = e * Math.sin(r) + t * Math.cos(r);
                                    return { x: n, y: r };
                                  };
                                {
                                  var g;
                                  p
                                    ? ((b = p[0]),
                                      (S = p[1]),
                                      (_ = p[2]),
                                      (w = p[3]))
                                    : ((g = m(t, r, -d)),
                                      (t = g.x),
                                      (r = g.y),
                                      (g = m(h, l, -d)),
                                      (h = g.x),
                                      (l = g.y),
                                      1 <
                                        (v =
                                          ((x = (t - h) / 2) * x) / (n * n) +
                                          ((y = (r - l) / 2) * y) / (o * o)) &&
                                        ((v = Math.sqrt(v)),
                                        (n *= v),
                                        (o *= v)),
                                      (g = n * n),
                                      (v = o * o),
                                      (v =
                                        (s === a ? -1 : 1) *
                                        Math.sqrt(
                                          Math.abs(
                                            (g * v - g * y * y - v * x * x) /
                                              (g * y * y + v * x * x)
                                          )
                                        )),
                                      (_ = (v * n * y) / o + (t + h) / 2),
                                      (w = (v * -o * x) / n + (r + l) / 2),
                                      (b = Math.asin(((r - w) / o).toFixed(9))),
                                      (S = Math.asin(((l - w) / o).toFixed(9))),
                                      (b = t < _ ? u - b : b) < 0 &&
                                        (b = 2 * u + b),
                                      (S = h < _ ? u - S : S) < 0 &&
                                        (S = 2 * u + S),
                                      a && S < b && (b -= 2 * u),
                                      !a && b < S && (S -= 2 * u));
                                }
                                var y = S - b;
                                {
                                  var v, x;
                                  Math.abs(y) > c &&
                                    ((v = S),
                                    (x = h),
                                    (u = l),
                                    (S = b + c * (a && b < S ? 1 : -1)),
                                    (h = _ + n * Math.cos(S)),
                                    (l = w + o * Math.sin(S)),
                                    (f = e(h, l, n, o, i, 0, a, x, u, [
                                      S,
                                      v,
                                      _,
                                      w,
                                    ])));
                                }
                                y = S - b;
                                var _ = Math.cos(b),
                                  w = Math.sin(b),
                                  b = Math.cos(S),
                                  S = Math.sin(S),
                                  y = Math.tan(y / 4),
                                  n = (4 / 3) * n * y,
                                  o = (4 / 3) * o * y,
                                  y = [t, r],
                                  _ = [t + n * w, r - o * _],
                                  b = [h + n * S, l - o * b],
                                  l = [h, l];
                                _[0] = 2 * y[0] - _[0];
                                _[1] = 2 * y[1] - _[1];
                                {
                                  if (p) return [_, b, l].concat(f);
                                  f = [_, b, l].concat(f).join().split(",");
                                  for (
                                    var M = [], T = 0, C = f.length;
                                    T < C;
                                    T++
                                  )
                                    M[T] =
                                      T % 2
                                        ? m(f[T - 1], f[T], d).y
                                        : m(f[T], f[T + 1], d).x;
                                  return M;
                                }
                              }.apply(0, [t.x, t.y].concat(e.slice(1)))
                            );
                            break;
                          case "S":
                            (o =
                              "C" === r || "S" === r
                                ? ((n = 2 * t.x - t.bx), 2 * t.y - t.by)
                                : ((n = t.x), t.y)),
                              (e = ["C", n, o].concat(e.slice(1)));
                            break;
                          case "T":
                            "Q" === r || "T" === r
                              ? ((t.qx = 2 * t.x - t.qx),
                                (t.qy = 2 * t.y - t.qy))
                              : ((t.qx = t.x), (t.qy = t.y)),
                              (e = ["C"].concat(
                                w(t.x, t.y, t.qx, t.qy, e[1], e[2])
                              ));
                            break;
                          case "Q":
                            (t.qx = e[1]),
                              (t.qy = e[2]),
                              (e = ["C"].concat(
                                w(t.x, t.y, e[1], e[2], e[3], e[4])
                              ));
                            break;
                          case "L":
                            e = ["C"].concat(_(t.x, t.y, e[1], e[2]));
                            break;
                          case "H":
                            e = ["C"].concat(_(t.x, t.y, e[1], t.y));
                            break;
                          case "V":
                            e = ["C"].concat(_(t.x, t.y, t.x, e[1]));
                            break;
                          case "Z":
                            e = ["C"].concat(_(t.x, t.y, t.X, t.Y));
                        }
                        return e;
                      },
                      a = function (e, t) {
                        if (7 < e[t].length) {
                          e[t].shift();
                          for (var r = e[t]; r.length; )
                            (l[t] = "A"),
                              s && (p[t] = "A"),
                              e.splice(t++, 0, ["C"].concat(r.splice(0, 6)));
                          e.splice(t, 1),
                            (f = Math.max(i.length, (s && s.length) || 0));
                        }
                      },
                      h = function (e, t, r, n, o) {
                        e &&
                          t &&
                          "M" === e[o][0] &&
                          "M" !== t[o][0] &&
                          (t.splice(o, 0, ["M", n.x, n.y]),
                          (r.bx = 0),
                          (r.by = 0),
                          (r.x = e[o][1]),
                          (r.y = e[o][2]),
                          (f = Math.max(i.length, (s && s.length) || 0)));
                      },
                      l = [],
                      p = [],
                      u = "",
                      c = "",
                      d = 0,
                      f = Math.max(i.length, (s && s.length) || 0);
                    d < f;
                    d++
                  ) {
                    i[d] && (u = i[d][0]),
                      "C" !== u && ((l[d] = u), d && (c = l[d - 1])),
                      (i[d] = o(i[d], r, c)),
                      "A" !== l[d] && "C" === u && (l[d] = "C"),
                      a(i, d),
                      s &&
                        (s[d] && (u = s[d][0]),
                        "C" !== u && ((p[d] = u), d && (c = p[d - 1])),
                        (s[d] = o(s[d], n, c)),
                        "A" !== p[d] && "C" === u && (p[d] = "C"),
                        a(s, d)),
                      h(i, s, r, n, d),
                      h(s, i, n, r, d);
                    var m = i[d],
                      g = s && s[d],
                      y = m.length,
                      v = s && g.length;
                    (r.x = m[y - 2]),
                      (r.y = m[y - 1]),
                      (r.bx = parseFloat(m[y - 4]) || r.x),
                      (r.by = parseFloat(m[y - 3]) || r.y),
                      (n.bx = s && (parseFloat(g[v - 4]) || n.x)),
                      (n.by = s && (parseFloat(g[v - 3]) || n.y)),
                      (n.x = s && g[v - 2]),
                      (n.y = s && g[v - 1]);
                  }
                  return s ? [i, s] : i;
                })(e)).length;
              l < p;
              l++
            ) {
              if ("M" === (i = e[l])[0]) (n = +i[1]), (o = +i[2]);
              else {
                if (
                  ((s = c(n, o, i[1], i[2], i[3], i[4], i[5], i[6])),
                  t < h + s && !r)
                )
                  return {
                    x: (a = c(n, o, i[1], i[2], i[3], i[4], i[5], i[6], t - h))
                      .x,
                    y: a.y,
                    alpha: a.alpha,
                  };
                (h += s), (n = +i[5]), (o = +i[6]);
              }
              i.shift();
            }
            return (
              (a = r ? h : u(n, o, i[0], i[1], i[2], i[3], i[4], i[5], 1))
                .alpha && (a = { x: a.x, y: a.y, alpha: a.alpha }),
              a
            );
          }
          function x(e) {
            var t = [],
              r = 0,
              n = 0,
              o = 0,
              i = 0,
              s = 0;
            "M" === e[0][0] &&
              ((o = r = +e[0][1]),
              (i = n = +e[0][2]),
              s++,
              (t[0] = ["M", r, n]));
            for (
              var a,
                h,
                l,
                p =
                  3 === e.length &&
                  "M" === e[0][0] &&
                  "R" === e[1][0].toUpperCase() &&
                  "Z" === e[2][0].toUpperCase(),
                u = s,
                c = e.length;
              u < c;
              u++
            ) {
              if (
                (t.push((h = [])),
                (l = e[u])[0] !== String.prototype.toUpperCase.call(l[0]))
              )
                switch (
                  ((h[0] = String.prototype.toUpperCase.call(l[0])), h[0])
                ) {
                  case "A":
                    (h[1] = l[1]),
                      (h[2] = l[2]),
                      (h[3] = l[3]),
                      (h[4] = l[4]),
                      (h[5] = l[5]),
                      (h[6] = +(l[6] + r)),
                      (h[7] = +(l[7] + n));
                    break;
                  case "V":
                    h[1] = +l[1] + n;
                    break;
                  case "H":
                    h[1] = +l[1] + r;
                    break;
                  case "R":
                    for (
                      var d = 2, f = (a = [r, n].concat(l.slice(1))).length;
                      d < f;
                      d++
                    )
                      (a[d] = +a[d] + r), (a[++d] = +a[d] + n);
                    t.pop(), (t = t.concat(y(a, p)));
                    break;
                  case "M":
                    (o = +l[1] + r), (i = +l[2] + n);
                    break;
                  default:
                    for (d = 1, f = l.length; d < f; d++)
                      h[d] = +l[d] + (d % 2 ? r : n);
                }
              else if ("R" === l[0])
                (a = [r, n].concat(l.slice(1))),
                  t.pop(),
                  (t = t.concat(y(a, p))),
                  (h = ["R"].concat(l.slice(-2)));
              else for (var m = 0, g = l.length; m < g; m++) h[m] = l[m];
              switch (h[0]) {
                case "Z":
                  (r = o), (n = i);
                  break;
                case "H":
                  r = h[1];
                  break;
                case "V":
                  n = h[1];
                  break;
                case "M":
                  (o = h[h.length - 2]), (i = h[h.length - 1]);
                  break;
                default:
                  (r = h[h.length - 2]), (n = h[h.length - 1]);
              }
            }
            return t;
          }
          function y(e, t) {
            for (var r = [], n = 0, o = e.length; n < o - 2 * !t; n += 2) {
              var i = [
                { x: +e[n - 2], y: +e[n - 1] },
                { x: +e[n], y: +e[n + 1] },
                { x: +e[n + 2], y: +e[n + 3] },
                { x: +e[n + 4], y: +e[n + 5] },
              ];
              t
                ? n
                  ? o - 4 === n
                    ? (i[3] = { x: +e[0], y: +e[1] })
                    : o - 2 === n &&
                      ((i[2] = { x: +e[0], y: +e[1] }),
                      (i[3] = { x: +e[2], y: +e[3] }))
                  : (i[0] = { x: +e[o - 2], y: +e[o - 1] })
                : o - 4 === n
                ? (i[3] = i[2])
                : n || (i[0] = { x: +e[n], y: +e[n + 1] }),
                r.push([
                  "C",
                  (-i[0].x + 6 * i[1].x + i[2].x) / 6,
                  (-i[0].y + 6 * i[1].y + i[2].y) / 6,
                  (i[1].x + 6 * i[2].x - i[3].x) / 6,
                  (i[1].y + 6 * i[2].y - i[3].y) / 6,
                  i[2].x,
                  i[2].y,
                ]);
            }
            return r;
          }
          function _(e, t, r, n) {
            return [e, t, r, n, r, n];
          }
          function w(e, t, r, n, o, i) {
            return [
              (1 / 3) * e + (2 / 3) * r,
              (1 / 3) * t + (2 / 3) * n,
              (1 / 3) * o + (2 / 3) * r,
              (1 / 3) * i + (2 / 3) * n,
              o,
              i,
            ];
          }
          function v(e, t, r, n, o, i, s, a, h) {
            null == h && (h = 1);
            for (
              var l = (h = 1 < h ? 1 : h < 0 ? 0 : h) / 2,
                p = [
                  -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
                  0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
                ],
                u = 0,
                c = [
                  0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601,
                  0.1601, 0.1069, 0.1069, 0.0472, 0.0472,
                ],
                d = 0;
              d < 12;
              d++
            ) {
              var f = l * p[d] + l,
                m = b(f, e, r, o, s),
                f = b(f, t, n, i, a),
                f = m * m + f * f;
              u += c[d] * Math.sqrt(f);
            }
            return l * u;
          }
          function b(e, t, r, n, o) {
            return (
              e *
                (e * (-3 * t + 9 * r - 9 * n + 3 * o) +
                  6 * t -
                  12 * r +
                  6 * n) -
              3 * t +
              3 * r
            );
          }
          function S() {
            for (var e = new Array(arguments.length), t = 0; t < e.length; ++t)
              e[t] = arguments[t];
            t = e.length;
            for (var r = ""; t--; )
              r += e[t] === Object(e[t]) ? JSON.stringify(e[t]) : e[t];
            return r;
          }
          (n.Font = function (e) {
            (this.parent = e), (this.cache = {}), (this.font = void 0);
          }),
            (n.Font.prototype.list = function () {
              throw "not yet implemented";
            }),
            (n.Font.prototype.textBounds = function (e, t, r, i, n) {
              (t = void 0 !== t ? t : 0),
                (r = void 0 !== r ? r : 0),
                (i = i || this.parent._renderer._textSize);
              var s,
                a,
                h,
                l,
                o,
                p,
                u = (n && n.renderer && n.renderer._pInst) || this.parent,
                c = u._renderer.drawingContext,
                d = c.textAlign || g.LEFT,
                f = c.textBaseline || g.BASELINE,
                m = this.cache[S("textBounds", e, t, r, i, d, f)];
              return (
                m ||
                  ((s = []),
                  (a = []),
                  (l = (h = this)._scale(i)),
                  this.font.forEachGlyph(e, t, r, i, n, function (e, t, r, n) {
                    s.push(t), a.push(r);
                    var o = e.getMetrics();
                    "space" !== e.name && 32 !== e.unicode
                      ? (s.push(t + o.xMax * l),
                        a.push(r + -o.yMin * l),
                        a.push(r + -o.yMax * l))
                      : s.push(
                          t + h.font.charToGlyph(" ").advanceWidth * h._scale(i)
                        );
                  }),
                  (p = Math.min.apply(null, s)),
                  (o = Math.min.apply(null, a)),
                  (n = Math.max.apply(null, s)),
                  (p =
                    (m = {
                      x: p,
                      y: o,
                      h: Math.max.apply(null, a) - o,
                      w: n - p,
                      advance: p - t,
                    }).w + m.advance),
                  (p = this._handleAlignment(u, c, e, m.x, m.y, p)),
                  (m.x = p.x),
                  (m.y = p.y),
                  (this.cache[S("textBounds", e, t, r, i, d, f)] = m)),
                m
              );
            }),
            (n.Font.prototype.textToPoints = function (e, t, r, n, o) {
              var i = 0,
                s = [],
                a = this._getGlyphs(e);
              n = n || this.parent._renderer._textSize;
              for (var h = 0; h < a.length; h++) {
                for (
                  var l = (function (e) {
                      for (var t, r = [], n = 0; n < e.length; n++)
                        "M" === e[n].type && (t && r.push(t), (t = [])),
                          t.push(
                            (function (e) {
                              var t = [e.type];
                              "M" === e.type || "L" === e.type
                                ? t.push(e.x, e.y)
                                : "C" === e.type
                                ? t.push(e.x1, e.y1, e.x2, e.y2, e.x, e.y)
                                : "Q" === e.type &&
                                  t.push(e.x1, e.y1, e.x, e.y);
                              return t;
                            })(e[n])
                          );
                      return r.push(t), r;
                    })(a[h].getPath(t, r, n).commands),
                    p = 0;
                  p < l.length;
                  p++
                )
                  for (
                    var u = (function (e, t) {
                        for (
                          var t = (function (e, t) {
                              if ("object" != typeof e) e = t;
                              else
                                for (var r in t)
                                  void 0 === e[r] && (e[r] = t[r]);
                              return e;
                            })(t, { sampleFactor: 0.1, simplifyThreshold: 0 }),
                            r = m(e, 0, 1),
                            n = r / (r * t.sampleFactor),
                            o = [],
                            i = 0;
                          i < r;
                          i += n
                        )
                          o.push(m(e, i));
                        t.simplifyThreshold &&
                          (function (e, t) {
                            t = void 0 === t ? 0 : t;
                            for (
                              var r = e.length - 1;
                              3 < e.length && 0 <= r;
                              --r
                            )
                              f(d(e, r - 1), d(e, r), d(e, r + 1), t) &&
                                (e.splice(r % e.length, 1), 0);
                          })(o, t.simplifyThreshold);
                        return o;
                      })(l[p], o),
                      c = 0;
                    c < u.length;
                    c++
                  )
                    (u[c].x += i), s.push(u[c]);
                i += a[h].advanceWidth * this._scale(n);
              }
              return s;
            }),
            (n.Font.prototype._getGlyphs = function (e) {
              return this.font.stringToGlyphs(e);
            }),
            (n.Font.prototype._getPath = function (e, t, r, n) {
              var o = (n && n.renderer && n.renderer._pInst) || this.parent,
                i = o._renderer.drawingContext,
                r = this._handleAlignment(o, i, e, t, r);
              return this.font.getPath(e, r.x, r.y, o._renderer._textSize, n);
            }),
            (n.Font.prototype._getPathData = function (e, t, r, n) {
              var o = 3;
              return (
                "string" == typeof e && 2 < arguments.length
                  ? (e = this._getPath(e, t, r, n))
                  : "object" == typeof t && (n = t),
                n && "number" == typeof n.decimals && (o = n.decimals),
                e.toPathData(o)
              );
            }),
            (n.Font.prototype._getSVG = function (e, t, r, n) {
              var o = 3;
              return (
                "string" == typeof e && 2 < arguments.length
                  ? (e = this._getPath(e, t, r, n))
                  : "object" == typeof t && (n = t),
                n &&
                  ("number" == typeof n.decimals && (o = n.decimals),
                  "number" == typeof n.strokeWidth &&
                    (e.strokeWidth = n.strokeWidth),
                  void 0 !== n.fill && (e.fill = n.fill),
                  void 0 !== n.stroke && (e.stroke = n.stroke)),
                e.toSVG(o)
              );
            }),
            (n.Font.prototype._renderPath = function (e, t, r, n) {
              var o = (n && n.renderer) || this.parent._renderer,
                i = o.drawingContext,
                s = (
                  "object" == typeof e && e.commands
                    ? e
                    : this._getPath(e, t, r, n)
                ).commands;
              i.beginPath();
              for (var a = 0; a < s.length; a += 1) {
                var h = s[a];
                "M" === h.type
                  ? i.moveTo(h.x, h.y)
                  : "L" === h.type
                  ? i.lineTo(h.x, h.y)
                  : "C" === h.type
                  ? i.bezierCurveTo(h.x1, h.y1, h.x2, h.y2, h.x, h.y)
                  : "Q" === h.type
                  ? i.quadraticCurveTo(h.x1, h.y1, h.x, h.y)
                  : "Z" === h.type && i.closePath();
              }
              return (
                o._doStroke && o._strokeSet && i.stroke(),
                o._doFill &&
                  ((i.fillStyle = o._fillSet
                    ? i.fillStyle
                    : g._DEFAULT_TEXT_FILL),
                  i.fill()),
                this
              );
            }),
            (n.Font.prototype._textWidth = function (e, t) {
              if (" " === e)
                return this.font.charToGlyph(" ").advanceWidth * this._scale(t);
              t = this.textBounds(e, 0, 0, t);
              return t.w + t.advance;
            }),
            (n.Font.prototype._textAscent = function (e) {
              return this.font.ascender * this._scale(e);
            }),
            (n.Font.prototype._textDescent = function (e) {
              return -this.font.descender * this._scale(e);
            }),
            (n.Font.prototype._scale = function (e) {
              return (
                (1 / this.font.unitsPerEm) *
                (e || this.parent._renderer._textSize)
              );
            }),
            (n.Font.prototype._handleAlignment = function (e, t, r, n, o, i) {
              var s = e._renderer._textSize,
                a = this._textAscent(s),
                e = this._textDescent(s);
              return (
                (i = void 0 !== i ? i : this._textWidth(r, s)),
                t.textAlign === g.CENTER
                  ? (n -= i / 2)
                  : t.textAlign === g.RIGHT && (n -= i),
                t.textBaseline === g.TOP
                  ? (o += a)
                  : t.textBaseline === g._CTX_MIDDLE
                  ? (o += a / 2)
                  : t.textBaseline === g.BOTTOM && (o -= e),
                { x: n, y: o }
              );
            }),
            (t.exports = n.Font);
        },
        { "../core/constants": 36, "../core/core": 37 },
      ],
      73: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          (e.prototype.append = function (e, t) {
            return e.push(t), e;
          }),
            (e.prototype.arrayCopy = function (e, t, r, n, o) {
              var i, s;
              (e =
                void 0 !== o
                  ? ((s = Math.min(o, e.length)), (i = n), e.slice(t, s + t))
                  : ((s =
                      void 0 !== r
                        ? ((s = r), Math.min(s, e.length))
                        : e.length),
                    (i = 0),
                    (r = t),
                    e.slice(0, s))),
                Array.prototype.splice.apply(r, [i, s].concat(e));
            }),
            (e.prototype.concat = function (e, t) {
              return e.concat(t);
            }),
            (e.prototype.reverse = function (e) {
              return e.reverse();
            }),
            (e.prototype.shorten = function (e) {
              return e.pop(), e;
            }),
            (e.prototype.shuffle = function (e, t) {
              for (
                var r,
                  n,
                  o =
                    ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(e),
                  i = (e = t || o ? e : e.slice()).length;
                1 < i;

              )
                (r = (Math.random() * i) | 0),
                  (n = e[--i]),
                  (e[i] = e[r]),
                  (e[r] = n);
              return e;
            }),
            (e.prototype.sort = function (e, t) {
              var r = t ? e.slice(0, Math.min(t, e.length)) : e,
                e = t ? e.slice(Math.min(t, e.length)) : [];
              return (r =
                "string" == typeof r[0]
                  ? r.sort()
                  : r.sort(function (e, t) {
                      return e - t;
                    })).concat(e);
            }),
            (e.prototype.splice = function (e, t, r) {
              return Array.prototype.splice.apply(e, [r, 0].concat(t)), e;
            }),
            (e.prototype.subset = function (e, t, r) {
              return void 0 !== r ? e.slice(t, t + r) : e.slice(t, e.length);
            }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      74: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core");
          (n.prototype.float = function (e) {
            return e instanceof Array ? e.map(parseFloat) : parseFloat(e);
          }),
            (n.prototype.int = function (e, t) {
              return (
                (t = t || 10),
                "string" == typeof e
                  ? parseInt(e, t)
                  : "number" == typeof e
                  ? 0 | e
                  : "boolean" == typeof e
                  ? e
                    ? 1
                    : 0
                  : e instanceof Array
                  ? e.map(function (e) {
                      return n.prototype.int(e, t);
                    })
                  : void 0
              );
            }),
            (n.prototype.str = function (e) {
              return e instanceof Array ? e.map(n.prototype.str) : String(e);
            }),
            (n.prototype.boolean = function (e) {
              return "number" == typeof e
                ? 0 !== e
                : "string" == typeof e
                ? "true" === e.toLowerCase()
                : "boolean" == typeof e
                ? e
                : e instanceof Array
                ? e.map(n.prototype.boolean)
                : void 0;
            }),
            (n.prototype.byte = function (e) {
              e = n.prototype.int(e, 10);
              return "number" == typeof e
                ? ((e + 128) % 256) - 128
                : e instanceof Array
                ? e.map(n.prototype.byte)
                : void 0;
            }),
            (n.prototype.char = function (e) {
              return "number" != typeof e || isNaN(e)
                ? e instanceof Array
                  ? e.map(n.prototype.char)
                  : "string" == typeof e
                  ? n.prototype.char(parseInt(e, 10))
                  : void 0
                : String.fromCharCode(e);
            }),
            (n.prototype.unchar = function (e) {
              return "string" == typeof e && 1 === e.length
                ? e.charCodeAt(0)
                : e instanceof Array
                ? e.map(n.prototype.unchar)
                : void 0;
            }),
            (n.prototype.hex = function (e, t) {
              if (((t = null == t ? (t = 8) : t), e instanceof Array))
                return e.map(function (e) {
                  return n.prototype.hex(e, t);
                });
              if ("number" == typeof e) {
                e < 0 && (e = 4294967295 + e + 1);
                for (
                  var r = Number(e).toString(16).toUpperCase();
                  r.length < t;

                )
                  r = "0" + r;
                return (
                  r.length >= t && (r = r.substring(r.length - t, r.length)), r
                );
              }
            }),
            (n.prototype.unhex = function (e) {
              return e instanceof Array
                ? e.map(n.prototype.unhex)
                : parseInt("0x" + e, 16);
            }),
            (t.exports = n);
        },
        { "../core/core": 37 },
      ],
      75: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          function n() {
            var e = arguments[0],
              t = e < 0,
              r = t ? e.toString().substring(1) : e.toString(),
              e = r.indexOf("."),
              n = -1 !== e ? r.substring(0, e) : r,
              o = -1 !== e ? r.substring(e + 1) : "",
              i = t ? "-" : "";
            if (3 === arguments.length) {
              t = "";
              (-1 !== e || 0 < arguments[2] - o.length) && (t = "."),
                o.length > arguments[2] && (o = o.substring(0, arguments[2]));
              for (var s = 0; s < arguments[1] - n.length; s++) i += "0";
              (i += n), (i += t), (i += o);
              for (var a = 0; a < arguments[2] - o.length; a++) i += "0";
              return i;
            }
            for (var h = 0; h < Math.max(arguments[1] - n.length, 0); h++)
              i += "0";
            return (i += r);
          }
          function o() {
            var e = arguments[0].toString(),
              t = e.indexOf("."),
              r = -1 !== t ? e.substring(t) : "",
              e = (e = -1 !== t ? e.substring(0, t) : e)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (0 === arguments[1]) r = "";
            else if (void 0 !== arguments[1])
              if (arguments[1] > r.length) {
                r += -1 === t ? "." : "";
                for (var n = arguments[1] - r.length + 1, o = 0; o < n; o++)
                  r += "0";
              } else r = r.substring(0, arguments[1] + 1);
            return e + r;
          }
          function i() {
            return 0 < parseFloat(arguments[0])
              ? "+" + arguments[0].toString()
              : arguments[0].toString();
          }
          function s() {
            return 0 < parseFloat(arguments[0])
              ? " " + arguments[0].toString()
              : arguments[0].toString();
          }
          (e.prototype.join = function (e, t) {
            return e.join(t);
          }),
            (e.prototype.match = function (e, t) {
              return e.match(t);
            }),
            (e.prototype.matchAll = function (e, t) {
              for (
                var r = new RegExp(t, "g"), n = r.exec(e), o = [];
                null !== n;

              )
                o.push(n), (n = r.exec(e));
              return o;
            }),
            (e.prototype.nf = function () {
              if (arguments[0] instanceof Array) {
                var t = arguments[1],
                  r = arguments[2];
                return arguments[0].map(function (e) {
                  return n(e, t, r);
                });
              }
              return "[object Arguments]" ===
                Object.prototype.toString.call(arguments[0])
                ? 3 === arguments[0].length
                  ? this.nf(arguments[0][0], arguments[0][1], arguments[0][2])
                  : 2 === arguments[0].length
                  ? this.nf(arguments[0][0], arguments[0][1])
                  : this.nf(arguments[0][0])
                : n.apply(this, arguments);
            }),
            (e.prototype.nfc = function () {
              if (arguments[0] instanceof Array) {
                var t = arguments[1];
                return arguments[0].map(function (e) {
                  return o(e, t);
                });
              }
              return o.apply(this, arguments);
            }),
            (e.prototype.nfp = function () {
              var e = this.nf.apply(this, arguments);
              return e instanceof Array ? e.map(i) : i(e);
            }),
            (e.prototype.nfs = function () {
              var e = this.nf.apply(this, arguments);
              return e instanceof Array ? e.map(s) : s(e);
            }),
            (e.prototype.split = function (e, t) {
              return e.split(t);
            }),
            (e.prototype.splitTokens = function () {
              var e,
                t,
                r = arguments[1],
                r =
                  1 < arguments.length
                    ? ((t = /\]/g.exec(r)),
                      (e = /\[/g.exec(r)) && t
                        ? ((r = r.slice(0, t.index) + r.slice(t.index + 1)),
                          (e = /\[/g.exec(r)),
                          (r = r.slice(0, e.index) + r.slice(e.index + 1)),
                          new RegExp("[\\[" + r + "\\]]", "g"))
                        : t
                        ? ((r = r.slice(0, t.index) + r.slice(t.index + 1)),
                          new RegExp("[" + r + "\\]]", "g"))
                        : e
                        ? ((r = r.slice(0, e.index) + r.slice(e.index + 1)),
                          new RegExp("[" + r + "\\[]", "g"))
                        : new RegExp("[" + r + "]", "g"))
                    : /\s/g;
              return arguments[0].split(r).filter(function (e) {
                return e;
              });
            }),
            (e.prototype.trim = function (e) {
              return e instanceof Array ? e.map(this.trim) : e.trim();
            }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      76: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          (e.prototype.day = function () {
            return new Date().getDate();
          }),
            (e.prototype.hour = function () {
              return new Date().getHours();
            }),
            (e.prototype.minute = function () {
              return new Date().getMinutes();
            }),
            (e.prototype.millis = function () {
              return window.performance.now();
            }),
            (e.prototype.month = function () {
              return new Date().getMonth() + 1;
            }),
            (e.prototype.second = function () {
              return new Date().getSeconds();
            }),
            (e.prototype.year = function () {
              return new Date().getFullYear();
            }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      77: [
        function (e, t, r) {
          "use strict";
          var s = e("../core/core");
          (s.prototype.camera = function (e, t, r) {
            this._renderer.translate(-e, -t, -r);
          }),
            (s.prototype.perspective = function (e, t, r, n) {
              (e = e || (60 / 180) * this.PI),
                (t = t || this.width / this.height),
                (r = r || (this.height / 2 / this.tan(e / 2)) * 0.1),
                (n = n || (this.height / 2 / this.tan(e / 2)) * 10),
                (this._renderer.uPMatrix = s.Matrix.identity()),
                this._renderer.uPMatrix.perspective(e, t, r, n),
                (this._renderer._curCamera = "custom");
            }),
            (s.prototype.ortho = function (e, t, r, n, o, i) {
              (e = e || -this.width / 2),
                (t = t || this.width / 2),
                (r = r || -this.height / 2),
                (n = n || this.height / 2),
                (o = o || 0),
                (i = i || Math.max(this.width, this.height)),
                (this._renderer.uPMatrix = s.Matrix.identity()),
                this._renderer.uPMatrix.ortho(e, t, r, n, o, i),
                (this._renderer._curCamera = "custom");
            }),
            (t.exports = s);
        },
        { "../core/core": 37 },
      ],
      78: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          (e.prototype.orbitControl = function () {
            return (
              this.mouseIsPressed &&
                (this.rotateY(
                  (this.mouseX - this.width / 2) / (this.width / 2)
                ),
                this.rotateX(
                  (this.mouseY - this.height / 2) / (this.width / 2)
                )),
              this
            );
          }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      79: [
        function (e, t, r) {
          "use strict";
          e = e("../core/core");
          (e.prototype.ambientLight = function (e, t, r, n) {
            var o = this._renderer.GL,
              i = this._renderer._getShader("lightVert", "lightTextureFrag");
            o.useProgram(i),
              (i.uAmbientColor = o.getUniformLocation(
                i,
                "uAmbientColor[" + this._renderer.ambientLightCount + "]"
              ));
            var s = this._renderer._pInst.color.apply(
              this._renderer._pInst,
              arguments
            )._array;
            return (
              o.uniform3f(i.uAmbientColor, s[0], s[1], s[2]),
              (i.uMaterialColor = o.getUniformLocation(i, "uMaterialColor")),
              o.uniform4f(i.uMaterialColor, 1, 1, 1, 1),
              this._renderer.ambientLightCount++,
              (i.uAmbientLightCount = o.getUniformLocation(
                i,
                "uAmbientLightCount"
              )),
              o.uniform1i(
                i.uAmbientLightCount,
                this._renderer.ambientLightCount
              ),
              this
            );
          }),
            (e.prototype.directionalLight = function (e, t, r, n, o, i, s) {
              var a = this._renderer.GL,
                h = this._renderer._getShader("lightVert", "lightTextureFrag");
              a.useProgram(h),
                (h.uDirectionalColor = a.getUniformLocation(
                  h,
                  "uDirectionalColor[" +
                    this._renderer.directionalLightCount +
                    "]"
                ));
              var l,
                p,
                u,
                r = this._renderer._pInst.color.apply(this._renderer._pInst, [
                  e,
                  t,
                  r,
                ])._array;
              a.uniform3f(h.uDirectionalColor, r[0], r[1], r[2]);
              for (
                var c = new Array(arguments.length), d = 0;
                d < c.length;
                ++d
              )
                c[d] = arguments[d];
              if ("number" == typeof c[c.length - 1])
                (l = c[c.length - 3]),
                  (p = c[c.length - 2]),
                  (u = c[c.length - 1]);
              else
                try {
                  (l = c[c.length - 1].x),
                    (p = c[c.length - 1].y),
                    (u = c[c.length - 1].z);
                } catch (e) {
                  throw e;
                }
              return (
                (h.uLightingDirection = a.getUniformLocation(
                  h,
                  "uLightingDirection[" +
                    this._renderer.directionalLightCount +
                    "]"
                )),
                a.uniform3f(h.uLightingDirection, l, p, u),
                (h.uMaterialColor = a.getUniformLocation(h, "uMaterialColor")),
                a.uniform4f(h.uMaterialColor, 1, 1, 1, 1),
                this._renderer.directionalLightCount++,
                (h.uDirectionalLightCount = a.getUniformLocation(
                  h,
                  "uDirectionalLightCount"
                )),
                a.uniform1i(
                  h.uDirectionalLightCount,
                  this._renderer.directionalLightCount
                ),
                this
              );
            }),
            (e.prototype.pointLight = function (e, t, r, n, o, i, s) {
              var a = this._renderer.GL,
                h = this._renderer._getShader("lightVert", "lightTextureFrag");
              a.useProgram(h),
                (h.uPointLightColor = a.getUniformLocation(
                  h,
                  "uPointLightColor[" + this._renderer.pointLightCount + "]"
                ));
              var l,
                p,
                u,
                r = this._renderer._pInst.color.apply(this._renderer._pInst, [
                  e,
                  t,
                  r,
                ])._array;
              a.uniform3f(h.uPointLightColor, r[0], r[1], r[2]);
              for (
                var c = new Array(arguments.length), d = 0;
                d < c.length;
                ++d
              )
                c[d] = arguments[d];
              if ("number" == typeof c[c.length - 1])
                (l = c[c.length - 3]),
                  (p = c[c.length - 2]),
                  (u = c[c.length - 1]);
              else
                try {
                  (l = c[c.length - 1].x),
                    (p = c[c.length - 1].y),
                    (u = c[c.length - 1].z);
                } catch (e) {
                  throw e;
                }
              return (
                (h.uPointLightLocation = a.getUniformLocation(
                  h,
                  "uPointLightLocation[" + this._renderer.pointLightCount + "]"
                )),
                a.uniform3f(h.uPointLightLocation, l, p, u),
                (h.uMaterialColor = a.getUniformLocation(h, "uMaterialColor")),
                a.uniform4f(h.uMaterialColor, 1, 1, 1, 1),
                this._renderer.pointLightCount++,
                (h.uPointLightCount = a.getUniformLocation(
                  h,
                  "uPointLightCount"
                )),
                a.uniform1i(h.uPointLightCount, this._renderer.pointLightCount),
                this
              );
            }),
            (t.exports = e);
        },
        { "../core/core": 37 },
      ],
      80: [
        function (e, t, r) {
          "use strict";
          var m = e("../core/core");
          e("./p5.Geometry"),
            (m.prototype.loadModel = function () {
              var t,
                r,
                e = arguments[0],
                n =
                  "boolean" == typeof arguments[1]
                    ? ((t = arguments[1]), (r = arguments[2]), arguments[3])
                    : ((t = !1), (r = arguments[1]), arguments[2]),
                o = new m.Geometry();
              return (
                (o.gid = e + "|" + t),
                this.loadStrings(
                  e,
                  function (e) {
                    !(function (e, t) {
                      for (
                        var r = { v: [], vt: [], vn: [] }, n = {}, o = 0;
                        o < t.length;
                        ++o
                      ) {
                        var i = t[o].trim().split(/\b\s+/);
                        if (0 < i.length)
                          if ("v" === i[0] || "vn" === i[0]) {
                            var s = new m.Vector(
                              parseFloat(i[1]),
                              parseFloat(i[2]),
                              parseFloat(i[3])
                            );
                            r[i[0]].push(s);
                          } else if ("vt" === i[0]) {
                            s = [parseFloat(i[1]), parseFloat(i[2])];
                            r[i[0]].push(s);
                          } else if ("f" === i[0])
                            for (var a = 3; a < i.length; ++a) {
                              for (
                                var h = [], l = [1, a - 1, a], p = 0;
                                p < l.length;
                                ++p
                              ) {
                                var u = i[l[p]],
                                  c = 0;
                                if (void 0 !== n[u]) c = n[u];
                                else {
                                  for (
                                    var d = u.split("/"), f = 0;
                                    f < d.length;
                                    f++
                                  )
                                    d[f] = parseInt(d[f]) - 1;
                                  (c = n[u] = e.vertices.length),
                                    e.vertices.push(r.v[d[0]].copy()),
                                    r.vt[d[1]]
                                      ? e.uvs.push(r.vt[d[1]].slice())
                                      : e.uvs.push([0, 0]),
                                    r.vn[d[2]] &&
                                      e.vertexNormals.push(r.vn[d[2]].copy());
                                }
                                h.push(c);
                              }
                              e.faces.push(h);
                            }
                      }
                      0 === e.vertexNormals.length && e.computeNormals();
                    })(o, e),
                      t && o.normalize(),
                      "function" == typeof r && r(o);
                  }.bind(this),
                  n
                ),
                o
              );
            }),
            (m.prototype.model = function (e) {
              0 < e.vertices.length &&
                (this._renderer.geometryInHash(e.gid) ||
                  this._renderer.createBuffers(e.gid, e),
                this._renderer.drawBuffers(e.gid));
            }),
            (t.exports = m);
        },
        { "../core/core": 37, "./p5.Geometry": 82 },
      ],
      81: [
        function (e, t, r) {
          "use strict";
          var s = e("../core/core");
          (s.prototype.normalMaterial = function () {
            return this._renderer._getShader("normalVert", "normalFrag"), this;
          }),
            (s.prototype.texture = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              var r,
                n = this._renderer.GL,
                o = this._renderer._getShader("lightVert", "lightTextureFrag");
              if ((n.useProgram(o), e[0].isTexture))
                e[0] instanceof s.Graphics ||
                (void 0 !== s.MediaElement && e[0] instanceof s.MediaElement)
                  ? (r = e[0].elt)
                  : e[0] instanceof s.Image && (r = e[0].canvas),
                  this._renderer._bind.call(this, e[0].tex, r);
              else {
                if (e[0] instanceof s.Image) r = e[0].canvas;
                else if (
                  void 0 !== s.MediaElement &&
                  e[0] instanceof s.MediaElement
                ) {
                  if (!e[0].loadedmetadata) return;
                  r = e[0].elt;
                } else e[0] instanceof s.Graphics && (r = e[0].elt);
                var i = n.createTexture();
                e[0]._setProperty("tex", i),
                  e[0]._setProperty("isTexture", !0),
                  this._renderer._bind.call(this, i, r);
              }
              return (
                n.activeTexture(n.TEXTURE0),
                n.bindTexture(n.TEXTURE_2D, e[0].tex),
                n.uniform1i(n.getUniformLocation(o, "isTexture"), !0),
                n.uniform1i(n.getUniformLocation(o, "uSampler"), 0),
                this
              );
            }),
            (s.RendererGL.prototype._bind = function (e, t) {
              var r = this._renderer.GL;
              r.bindTexture(r.TEXTURE_2D, e),
                r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0),
                r.texImage2D(
                  r.TEXTURE_2D,
                  0,
                  r.RGBA,
                  r.RGBA,
                  r.UNSIGNED_BYTE,
                  t
                ),
                r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
                r.texParameteri(
                  r.TEXTURE_2D,
                  r.TEXTURE_WRAP_S,
                  r.CLAMP_TO_EDGE
                ),
                r.texParameteri(
                  r.TEXTURE_2D,
                  r.TEXTURE_WRAP_T,
                  r.CLAMP_TO_EDGE
                ),
                r.bindTexture(r.TEXTURE_2D, null);
            }),
            (s.prototype.ambientMaterial = function (e, t, r, n) {
              var o = this._renderer.GL,
                i = this._renderer._getShader("lightVert", "lightTextureFrag");
              o.useProgram(i),
                (i.uMaterialColor = o.getUniformLocation(i, "uMaterialColor"));
              var s = this._renderer._applyColorBlend.apply(
                this._renderer,
                arguments
              );
              return (
                o.uniform4f(i.uMaterialColor, s[0], s[1], s[2], s[3]),
                (i.uSpecular = o.getUniformLocation(i, "uSpecular")),
                o.uniform1i(i.uSpecular, !1),
                o.uniform1i(o.getUniformLocation(i, "isTexture"), !1),
                this
              );
            }),
            (s.prototype.specularMaterial = function (e, t, r, n) {
              var o = this._renderer.GL,
                i = this._renderer._getShader("lightVert", "lightTextureFrag");
              o.useProgram(i),
                o.uniform1i(o.getUniformLocation(i, "isTexture"), !1),
                (i.uMaterialColor = o.getUniformLocation(i, "uMaterialColor"));
              var s = this._renderer._applyColorBlend.apply(
                this._renderer,
                arguments
              );
              return (
                o.uniform4f(i.uMaterialColor, s[0], s[1], s[2], s[3]),
                (i.uSpecular = o.getUniformLocation(i, "uSpecular")),
                o.uniform1i(i.uSpecular, !0),
                this
              );
            }),
            (s.RendererGL.prototype._applyColorBlend = function (e, t, r, n) {
              var o = this.GL,
                i = this._pInst.color.apply(this._pInst, arguments)._array;
              return (
                i[i.length - 1] < 1
                  ? (o.depthMask(!1),
                    o.enable(o.BLEND),
                    o.blendEquation(o.FUNC_ADD),
                    o.blendFunc(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA))
                  : (o.depthMask(!0), o.disable(o.BLEND)),
                i
              );
            }),
            (t.exports = s);
        },
        { "../core/core": 37 },
      ],
      82: [
        function (e, t, r) {
          "use strict";
          var s = e("../core/core");
          (s.Geometry = function (e, t, r) {
            return (
              (this.vertices = []),
              (this.vertexNormals = []),
              (this.faces = []),
              (this.uvs = []),
              (this.detailX = void 0 !== e ? e : 1),
              (this.detailY = void 0 !== t ? t : 1),
              r instanceof Function && r.call(this),
              this
            );
          }),
            (s.Geometry.prototype.computeFaces = function () {
              for (
                var e, t, r, n, o = this.detailX + 1, i = 0;
                i < this.detailY;
                i++
              )
                for (var s = 0; s < this.detailX; s++)
                  (t = (e = i * o + s) + 1),
                    (r = (i + 1) * o + s + 1),
                    (n = (i + 1) * o + s),
                    this.faces.push([e, t, n]),
                    this.faces.push([n, t, r]);
              return this;
            }),
            (s.Geometry.prototype._getFaceNormal = function (e, t) {
              var r = this.faces[e],
                n = this.vertices[r[t % 3]],
                e = this.vertices[r[(t + 1) % 3]],
                r = this.vertices[r[(t + 2) % 3]],
                t = s.Vector.cross(s.Vector.sub(e, n), s.Vector.sub(r, n)),
                n =
                  s.Vector.mag(t) /
                  (s.Vector.mag(s.Vector.sub(e, n)) *
                    s.Vector.mag(s.Vector.sub(r, n)));
              return (t = t.normalize()).mult(Math.asin(n));
            }),
            (s.Geometry.prototype.computeNormals = function () {
              for (var e = 0; e < this.vertices.length; e++) {
                for (var t = new s.Vector(), r = 0; r < this.faces.length; r++)
                  (this.faces[r][0] !== e &&
                    this.faces[r][1] !== e &&
                    this.faces[r][2] !== e) ||
                    (t = t.add(this._getFaceNormal(r, e)));
                (t = t.normalize()), this.vertexNormals.push(t);
              }
              return this;
            }),
            (s.Geometry.prototype.averageNormals = function () {
              for (var e = 0; e <= this.detailY; e++) {
                var t = this.detailX + 1,
                  r = s.Vector.add(
                    this.vertexNormals[e * t],
                    this.vertexNormals[e * t + this.detailX]
                  ),
                  r = s.Vector.div(r, 2);
                (this.vertexNormals[e * t] = r),
                  (this.vertexNormals[e * t + this.detailX] = r);
              }
              return this;
            }),
            (s.Geometry.prototype.averagePoleNormals = function () {
              for (var e = new s.Vector(0, 0, 0), t = 0; t < this.detailX; t++)
                e.add(this.vertexNormals[t]);
              for (
                e = s.Vector.div(e, this.detailX), t = 0;
                t < this.detailX;
                t++
              )
                this.vertexNormals[t] = e;
              for (
                e = new s.Vector(0, 0, 0), t = this.vertices.length - 1;
                t > this.vertices.length - 1 - this.detailX;
                t--
              )
                e.add(this.vertexNormals[t]);
              for (
                e = s.Vector.div(e, this.detailX), t = this.vertices.length - 1;
                t > this.vertices.length - 1 - this.detailX;
                t--
              )
                this.vertexNormals[t] = e;
              return this;
            }),
            (s.Geometry.prototype.normalize = function () {
              if (0 < this.vertices.length) {
                for (
                  var e = this.vertices[0].copy(),
                    t = this.vertices[0].copy(),
                    r = 0;
                  r < this.vertices.length;
                  r++
                )
                  (e.x = Math.max(e.x, this.vertices[r].x)),
                    (t.x = Math.min(t.x, this.vertices[r].x)),
                    (e.y = Math.max(e.y, this.vertices[r].y)),
                    (t.y = Math.min(t.y, this.vertices[r].y)),
                    (e.z = Math.max(e.z, this.vertices[r].z)),
                    (t.z = Math.min(t.z, this.vertices[r].z));
                for (
                  var n = s.Vector.lerp(e, t, 0.5),
                    o = s.Vector.sub(e, t),
                    i = 200 / Math.max(Math.max(o.x, o.y), o.z),
                    r = 0;
                  r < this.vertices.length;
                  r++
                )
                  this.vertices[r].sub(n), this.vertices[r].mult(i);
              }
              return this;
            }),
            (t.exports = s.Geometry);
        },
        { "../core/core": 37 },
      ],
      83: [
        function (e, t, r) {
          "use strict";
          var A = e("../core/core"),
            T = e("../math/polargeometry"),
            C = e("../core/constants"),
            L = "undefined" != typeof Float32Array ? Float32Array : Array;
          (A.Matrix = function () {
            for (var e = new Array(arguments.length), t = 0; t < e.length; ++t)
              e[t] = arguments[t];
            return (
              e[0] instanceof A
                ? ((this.p5 = e[0]),
                  "mat3" === e[1]
                    ? (this.mat3 = e[2] || new L([1, 0, 0, 0, 1, 0, 0, 0, 1]))
                    : (this.mat4 =
                        e[1] ||
                        new L([
                          1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                        ])))
                : "mat3" === e[0]
                ? (this.mat3 = e[1] || new L([1, 0, 0, 0, 1, 0, 0, 0, 1]))
                : (this.mat4 =
                    e[0] ||
                    new L([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])),
              this
            );
          }),
            (A.Matrix.prototype.set = function (e) {
              return (
                e instanceof A.Matrix
                  ? (this.mat4 = e.mat4)
                  : e instanceof L && (this.mat4 = e),
                this
              );
            }),
            (A.Matrix.prototype.get = function () {
              return new A.Matrix(this.mat4);
            }),
            (A.Matrix.prototype.copy = function () {
              var e = new A.Matrix();
              return (
                (e.mat4[0] = this.mat4[0]),
                (e.mat4[1] = this.mat4[1]),
                (e.mat4[2] = this.mat4[2]),
                (e.mat4[3] = this.mat4[3]),
                (e.mat4[4] = this.mat4[4]),
                (e.mat4[5] = this.mat4[5]),
                (e.mat4[6] = this.mat4[6]),
                (e.mat4[7] = this.mat4[7]),
                (e.mat4[8] = this.mat4[8]),
                (e.mat4[9] = this.mat4[9]),
                (e.mat4[10] = this.mat4[10]),
                (e.mat4[11] = this.mat4[11]),
                (e.mat4[12] = this.mat4[12]),
                (e.mat4[13] = this.mat4[13]),
                (e.mat4[14] = this.mat4[14]),
                (e.mat4[15] = this.mat4[15]),
                e
              );
            }),
            (A.Matrix.identity = function () {
              return new A.Matrix();
            }),
            (A.Matrix.prototype.transpose = function (e) {
              var t, r, n, o, i, s;
              return (
                e instanceof A.Matrix
                  ? ((t = e.mat4[1]),
                    (r = e.mat4[2]),
                    (n = e.mat4[3]),
                    (o = e.mat4[6]),
                    (i = e.mat4[7]),
                    (s = e.mat4[11]),
                    (this.mat4[0] = e.mat4[0]),
                    (this.mat4[1] = e.mat4[4]),
                    (this.mat4[2] = e.mat4[8]),
                    (this.mat4[3] = e.mat4[12]),
                    (this.mat4[4] = t),
                    (this.mat4[5] = e.mat4[5]),
                    (this.mat4[6] = e.mat4[9]),
                    (this.mat4[7] = e.mat4[13]),
                    (this.mat4[8] = r),
                    (this.mat4[9] = o),
                    (this.mat4[10] = e.mat4[10]),
                    (this.mat4[11] = e.mat4[14]),
                    (this.mat4[12] = n),
                    (this.mat4[13] = i),
                    (this.mat4[14] = s),
                    (this.mat4[15] = e.mat4[15]))
                  : e instanceof L &&
                    ((t = e[1]),
                    (r = e[2]),
                    (n = e[3]),
                    (o = e[6]),
                    (i = e[7]),
                    (s = e[11]),
                    (this.mat4[0] = e[0]),
                    (this.mat4[1] = e[4]),
                    (this.mat4[2] = e[8]),
                    (this.mat4[3] = e[12]),
                    (this.mat4[4] = t),
                    (this.mat4[5] = e[5]),
                    (this.mat4[6] = e[9]),
                    (this.mat4[7] = e[13]),
                    (this.mat4[8] = r),
                    (this.mat4[9] = o),
                    (this.mat4[10] = e[10]),
                    (this.mat4[11] = e[14]),
                    (this.mat4[12] = n),
                    (this.mat4[13] = i),
                    (this.mat4[14] = s),
                    (this.mat4[15] = e[15])),
                this
              );
            }),
            (A.Matrix.prototype.invert = function (e) {
              var t, r, n, o, i, s, a, h, l, p, u, c, d, f, m, g;
              e instanceof A.Matrix
                ? ((t = e.mat4[0]),
                  (r = e.mat4[1]),
                  (n = e.mat4[2]),
                  (o = e.mat4[3]),
                  (i = e.mat4[4]),
                  (s = e.mat4[5]),
                  (a = e.mat4[6]),
                  (h = e.mat4[7]),
                  (l = e.mat4[8]),
                  (p = e.mat4[9]),
                  (u = e.mat4[10]),
                  (c = e.mat4[11]),
                  (d = e.mat4[12]),
                  (f = e.mat4[13]),
                  (m = e.mat4[14]),
                  (g = e.mat4[15]))
                : e instanceof L &&
                  ((t = e[0]),
                  (r = e[1]),
                  (n = e[2]),
                  (o = e[3]),
                  (i = e[4]),
                  (s = e[5]),
                  (a = e[6]),
                  (h = e[7]),
                  (l = e[8]),
                  (p = e[9]),
                  (u = e[10]),
                  (c = e[11]),
                  (d = e[12]),
                  (f = e[13]),
                  (m = e[14]),
                  (g = e[15]));
              var y = t * s - r * i,
                v = t * a - n * i,
                x = t * h - o * i,
                _ = r * a - n * s,
                w = r * h - o * s,
                b = n * h - o * a,
                S = l * f - p * d,
                M = l * m - u * d,
                T = l * g - c * d,
                C = p * m - u * f,
                R = p * g - c * f,
                E = u * g - c * m,
                e = y * E - v * R + x * C + _ * T - w * M + b * S;
              return e
                ? ((e = 1 / e),
                  (this.mat4[0] = (s * E - a * R + h * C) * e),
                  (this.mat4[1] = (n * R - r * E - o * C) * e),
                  (this.mat4[2] = (f * b - m * w + g * _) * e),
                  (this.mat4[3] = (u * w - p * b - c * _) * e),
                  (this.mat4[4] = (a * T - i * E - h * M) * e),
                  (this.mat4[5] = (t * E - n * T + o * M) * e),
                  (this.mat4[6] = (m * x - d * b - g * v) * e),
                  (this.mat4[7] = (l * b - u * x + c * v) * e),
                  (this.mat4[8] = (i * R - s * T + h * S) * e),
                  (this.mat4[9] = (r * T - t * R - o * S) * e),
                  (this.mat4[10] = (d * w - f * x + g * y) * e),
                  (this.mat4[11] = (p * x - l * w - c * y) * e),
                  (this.mat4[12] = (s * M - i * C - a * S) * e),
                  (this.mat4[13] = (t * C - r * M + n * S) * e),
                  (this.mat4[14] = (f * v - d * _ - m * y) * e),
                  (this.mat4[15] = (l * _ - p * v + u * y) * e),
                  this)
                : null;
            }),
            (A.Matrix.prototype.invert3x3 = function () {
              var e = this.mat3[0],
                t = this.mat3[1],
                r = this.mat3[2],
                n = this.mat3[3],
                o = this.mat3[4],
                i = this.mat3[5],
                s = this.mat3[6],
                a = this.mat3[7],
                h = this.mat3[8],
                l = h * o - i * a,
                p = -h * n + i * s,
                u = a * n - o * s,
                c = e * l + t * p + r * u;
              return c
                ? ((c = 1 / c),
                  (this.mat3[0] = l * c),
                  (this.mat3[1] = (-h * t + r * a) * c),
                  (this.mat3[2] = (i * t - r * o) * c),
                  (this.mat3[3] = p * c),
                  (this.mat3[4] = (h * e - r * s) * c),
                  (this.mat3[5] = (-i * e + r * n) * c),
                  (this.mat3[6] = u * c),
                  (this.mat3[7] = (-a * e + t * s) * c),
                  (this.mat3[8] = (o * e - t * n) * c),
                  this)
                : null;
            }),
            (A.Matrix.prototype.transpose3x3 = function (e) {
              var t = e[1],
                r = e[2],
                n = e[5];
              return (
                (this.mat3[1] = e[3]),
                (this.mat3[2] = e[6]),
                (this.mat3[3] = t),
                (this.mat3[5] = e[7]),
                (this.mat3[6] = r),
                (this.mat3[7] = n),
                this
              );
            }),
            (A.Matrix.prototype.inverseTranspose = function (e) {
              return (
                void 0 === this.mat3
                  ? console.error("sorry, this function only works with mat3")
                  : ((this.mat3[0] = e.mat4[0]),
                    (this.mat3[1] = e.mat4[1]),
                    (this.mat3[2] = e.mat4[2]),
                    (this.mat3[3] = e.mat4[4]),
                    (this.mat3[4] = e.mat4[5]),
                    (this.mat3[5] = e.mat4[6]),
                    (this.mat3[6] = e.mat4[8]),
                    (this.mat3[7] = e.mat4[9]),
                    (this.mat3[8] = e.mat4[10])),
                this.invert3x3().transpose3x3(this.mat3),
                this
              );
            }),
            (A.Matrix.prototype.determinant = function () {
              var e = this.mat4[0] * this.mat4[5] - this.mat4[1] * this.mat4[4],
                t = this.mat4[0] * this.mat4[6] - this.mat4[2] * this.mat4[4],
                r = this.mat4[0] * this.mat4[7] - this.mat4[3] * this.mat4[4],
                n = this.mat4[1] * this.mat4[6] - this.mat4[2] * this.mat4[5],
                o = this.mat4[1] * this.mat4[7] - this.mat4[3] * this.mat4[5],
                i = this.mat4[2] * this.mat4[7] - this.mat4[3] * this.mat4[6],
                s = this.mat4[8] * this.mat4[13] - this.mat4[9] * this.mat4[12],
                a =
                  this.mat4[8] * this.mat4[14] - this.mat4[10] * this.mat4[12],
                h =
                  this.mat4[8] * this.mat4[15] - this.mat4[11] * this.mat4[12],
                l =
                  this.mat4[9] * this.mat4[14] - this.mat4[10] * this.mat4[13],
                p =
                  this.mat4[9] * this.mat4[15] - this.mat4[11] * this.mat4[13];
              return (
                e *
                  (this.mat4[10] * this.mat4[15] -
                    this.mat4[11] * this.mat4[14]) -
                t * p +
                r * l +
                n * h -
                o * a +
                i * s
              );
            }),
            (A.Matrix.prototype.mult = function (e) {
              var t = new L(16),
                r = new L(16);
              e instanceof A.Matrix ? (r = e.mat4) : e instanceof L && (r = e);
              var n = this.mat4[0],
                o = this.mat4[1],
                i = this.mat4[2],
                e = this.mat4[3];
              return (
                (t[0] = n * r[0] + o * r[4] + i * r[8] + e * r[12]),
                (t[1] = n * r[1] + o * r[5] + i * r[9] + e * r[13]),
                (t[2] = n * r[2] + o * r[6] + i * r[10] + e * r[14]),
                (t[3] = n * r[3] + o * r[7] + i * r[11] + e * r[15]),
                (n = this.mat4[4]),
                (o = this.mat4[5]),
                (i = this.mat4[6]),
                (e = this.mat4[7]),
                (t[4] = n * r[0] + o * r[4] + i * r[8] + e * r[12]),
                (t[5] = n * r[1] + o * r[5] + i * r[9] + e * r[13]),
                (t[6] = n * r[2] + o * r[6] + i * r[10] + e * r[14]),
                (t[7] = n * r[3] + o * r[7] + i * r[11] + e * r[15]),
                (n = this.mat4[8]),
                (o = this.mat4[9]),
                (i = this.mat4[10]),
                (e = this.mat4[11]),
                (t[8] = n * r[0] + o * r[4] + i * r[8] + e * r[12]),
                (t[9] = n * r[1] + o * r[5] + i * r[9] + e * r[13]),
                (t[10] = n * r[2] + o * r[6] + i * r[10] + e * r[14]),
                (t[11] = n * r[3] + o * r[7] + i * r[11] + e * r[15]),
                (n = this.mat4[12]),
                (o = this.mat4[13]),
                (i = this.mat4[14]),
                (e = this.mat4[15]),
                (t[12] = n * r[0] + o * r[4] + i * r[8] + e * r[12]),
                (t[13] = n * r[1] + o * r[5] + i * r[9] + e * r[13]),
                (t[14] = n * r[2] + o * r[6] + i * r[10] + e * r[14]),
                (t[15] = n * r[3] + o * r[7] + i * r[11] + e * r[15]),
                (this.mat4 = t),
                this
              );
            }),
            (A.Matrix.prototype.scale = function () {
              for (
                var e, t, r, n = new Array(arguments.length), o = 0;
                o < n.length;
                ++o
              )
                n[o] = arguments[o];
              n[0] instanceof A.Vector
                ? ((e = n[0].x), (t = n[0].y), (r = n[0].z))
                : n[0] instanceof Array &&
                  ((e = n[0][0]), (t = n[0][1]), (r = n[0][2]));
              var i = new L(16);
              return (
                (i[0] = this.mat4[0] * e),
                (i[1] = this.mat4[1] * e),
                (i[2] = this.mat4[2] * e),
                (i[3] = this.mat4[3] * e),
                (i[4] = this.mat4[4] * t),
                (i[5] = this.mat4[5] * t),
                (i[6] = this.mat4[6] * t),
                (i[7] = this.mat4[7] * t),
                (i[8] = this.mat4[8] * r),
                (i[9] = this.mat4[9] * r),
                (i[10] = this.mat4[10] * r),
                (i[11] = this.mat4[11] * r),
                (i[12] = this.mat4[12]),
                (i[13] = this.mat4[13]),
                (i[14] = this.mat4[14]),
                (i[15] = this.mat4[15]),
                (this.mat4 = i),
                this
              );
            }),
            (A.Matrix.prototype.rotate = function (e, t) {
              var r, n, o;
              this.p5
                ? this.p5._angleMode === C.DEGREES &&
                  (M = T.degreesToRadians(e))
                : (M = e),
                t instanceof A.Vector
                  ? ((r = t.x), (n = t.y), (o = t.z))
                  : t instanceof Array && ((r = t[0]), (n = t[1]), (o = t[2])),
                (r *= 1 / (S = Math.sqrt(r * r + n * n + o * o))),
                (n *= 1 / S),
                (o *= 1 / S);
              var i = this.mat4[0],
                s = this.mat4[1],
                a = this.mat4[2],
                h = this.mat4[3],
                l = this.mat4[4],
                p = this.mat4[5],
                u = this.mat4[6],
                c = this.mat4[7],
                d = this.mat4[8],
                f = this.mat4[9],
                m = this.mat4[10],
                g = this.mat4[11],
                y = Math.sin(M),
                v = Math.cos(M),
                x = 1 - v,
                _ = r * r * x + v,
                w = n * r * x + o * y,
                b = o * r * x - n * y,
                e = r * n * x - o * y,
                t = n * n * x + v,
                S = o * n * x + r * y,
                M = r * o * x + n * y,
                y = n * o * x - r * y,
                v = o * o * x + v;
              return (
                (this.mat4[0] = i * _ + l * w + d * b),
                (this.mat4[1] = s * _ + p * w + f * b),
                (this.mat4[2] = a * _ + u * w + m * b),
                (this.mat4[3] = h * _ + c * w + g * b),
                (this.mat4[4] = i * e + l * t + d * S),
                (this.mat4[5] = s * e + p * t + f * S),
                (this.mat4[6] = a * e + u * t + m * S),
                (this.mat4[7] = h * e + c * t + g * S),
                (this.mat4[8] = i * M + l * y + d * v),
                (this.mat4[9] = s * M + p * y + f * v),
                (this.mat4[10] = a * M + u * y + m * v),
                (this.mat4[11] = h * M + c * y + g * v),
                this
              );
            }),
            (A.Matrix.prototype.translate = function (e) {
              var t = e[0],
                r = e[1],
                e = e[2] || 0;
              (this.mat4[12] =
                this.mat4[0] * t +
                this.mat4[4] * r +
                this.mat4[8] * e +
                this.mat4[12]),
                (this.mat4[13] =
                  this.mat4[1] * t +
                  this.mat4[5] * r +
                  this.mat4[9] * e +
                  this.mat4[13]),
                (this.mat4[14] =
                  this.mat4[2] * t +
                  this.mat4[6] * r +
                  this.mat4[10] * e +
                  this.mat4[14]),
                (this.mat4[15] =
                  this.mat4[3] * t +
                  this.mat4[7] * r +
                  this.mat4[11] * e +
                  this.mat4[15]);
            }),
            (A.Matrix.prototype.rotateX = function (e) {
              this.rotate(e, [1, 0, 0]);
            }),
            (A.Matrix.prototype.rotateY = function (e) {
              this.rotate(e, [0, 1, 0]);
            }),
            (A.Matrix.prototype.rotateZ = function (e) {
              this.rotate(e, [0, 0, 1]);
            }),
            (A.Matrix.prototype.perspective = function (e, t, r, n) {
              var o = 1 / Math.tan(e / 2),
                e = 1 / (r - n);
              return (
                (this.mat4[0] = o / t),
                (this.mat4[1] = 0),
                (this.mat4[2] = 0),
                (this.mat4[3] = 0),
                (this.mat4[4] = 0),
                (this.mat4[5] = o),
                (this.mat4[6] = 0),
                (this.mat4[7] = 0),
                (this.mat4[8] = 0),
                (this.mat4[9] = 0),
                (this.mat4[10] = (n + r) * e),
                (this.mat4[11] = -1),
                (this.mat4[12] = 0),
                (this.mat4[13] = 0),
                (this.mat4[14] = 2 * n * r * e),
                (this.mat4[15] = 0),
                this
              );
            }),
            (A.Matrix.prototype.ortho = function (e, t, r, n, o, i) {
              var s = 1 / (e - t),
                a = 1 / (r - n),
                h = 1 / (o - i);
              return (
                (this.mat4[0] = -2 * s),
                (this.mat4[1] = 0),
                (this.mat4[2] = 0),
                (this.mat4[3] = 0),
                (this.mat4[4] = 0),
                (this.mat4[5] = -2 * a),
                (this.mat4[6] = 0),
                (this.mat4[7] = 0),
                (this.mat4[8] = 0),
                (this.mat4[9] = 0),
                (this.mat4[10] = 2 * h),
                (this.mat4[11] = 0),
                (this.mat4[12] = (e + t) * s),
                (this.mat4[13] = (n + r) * a),
                (this.mat4[14] = (i + o) * h),
                (this.mat4[15] = 1),
                this
              );
            }),
            (t.exports = A.Matrix);
        },
        {
          "../core/constants": 36,
          "../core/core": 37,
          "../math/polargeometry": 67,
        },
      ],
      84: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core"),
            a = e("../core/constants");
          (n.RendererGL.prototype.beginShape = function (e) {
            return (
              (this.immediateMode.shapeMode = void 0 !== e ? e : a.LINE_STRIP),
              void 0 === this.immediateMode.vertexPositions
                ? ((this.immediateMode.vertexPositions = []),
                  (this.immediateMode.vertexColors = []),
                  (this.immediateMode.vertexBuffer = this.GL.createBuffer()),
                  (this.immediateMode.colorBuffer = this.GL.createBuffer()))
                : ((this.immediateMode.vertexPositions.length = 0),
                  (this.immediateMode.vertexColors.length = 0)),
              (this.isImmediateDrawing = !0),
              this
            );
          }),
            (n.RendererGL.prototype.vertex = function (e, t, r) {
              this.immediateMode.vertexPositions.push(e, t, r);
              r = this.curFillColor || [0.5, 0.5, 0.5, 1];
              return (
                this.immediateMode.vertexColors.push(r[0], r[1], r[2], r[3]),
                this
              );
            }),
            (n.RendererGL.prototype.endShape = function (e, t, r, n, o, i) {
              var s = this.GL;
              if (
                (this._bindImmediateBuffers(
                  this.immediateMode.vertexPositions,
                  this.immediateMode.vertexColors
                ),
                e)
              )
                if ("fill" === this.drawMode)
                  switch (this.immediateMode.shapeMode) {
                    case a.LINE_STRIP:
                    case a.LINES:
                    case a.TRIANGLES:
                      this.immediateMode.shapeMode = a.TRIANGLE_FAN;
                  }
                else
                  switch (this.immediateMode.shapeMode) {
                    case a.LINE_STRIP:
                    case a.LINES:
                      this.immediateMode.shapeMode = a.LINE_LOOP;
                  }
              if (
                this.immediateMode.shapeMode === a.QUADS ||
                this.immediateMode.shapeMode === a.QUAD_STRIP
              )
                throw new Error(
                  "sorry, " +
                    this.immediateMode.shapeMode +
                    " not yet implemented in webgl mode."
                );
              return (
                s.enable(s.BLEND),
                s.drawArrays(
                  this.immediateMode.shapeMode,
                  0,
                  this.immediateMode.vertexPositions.length / 3
                ),
                (this.immediateMode.vertexPositions.length = 0),
                (this.immediateMode.vertexColors.length = 0),
                (this.isImmediateDrawing = !1),
                this
              );
            }),
            (n.RendererGL.prototype._bindImmediateBuffers = function (e, t) {
              this._setDefaultCamera();
              var r = this.GL,
                n = this._getCurShaderId(),
                o = this.mHash[n];
              return (
                (o.vertexPositionAttribute = r.getAttribLocation(
                  o,
                  "aPosition"
                )),
                r.enableVertexAttribArray(o.vertexPositionAttribute),
                r.bindBuffer(r.ARRAY_BUFFER, this.immediateMode.vertexBuffer),
                r.bufferData(
                  r.ARRAY_BUFFER,
                  new Float32Array(e),
                  r.DYNAMIC_DRAW
                ),
                r.vertexAttribPointer(
                  o.vertexPositionAttribute,
                  3,
                  r.FLOAT,
                  !1,
                  0,
                  0
                ),
                (o.vertexColorAttribute = r.getAttribLocation(
                  o,
                  "aVertexColor"
                )),
                r.enableVertexAttribArray(o.vertexColorAttribute),
                r.bindBuffer(r.ARRAY_BUFFER, this.immediateMode.colorBuffer),
                r.bufferData(
                  r.ARRAY_BUFFER,
                  new Float32Array(t),
                  r.DYNAMIC_DRAW
                ),
                r.vertexAttribPointer(
                  o.vertexColorAttribute,
                  4,
                  r.FLOAT,
                  !1,
                  0,
                  0
                ),
                this._setMatrixUniforms(n),
                this
              );
            }),
            (n.RendererGL.prototype._getColorVertexShader = function () {
              var e,
                t = this.GL,
                r = "immediateVert|vertexColorFrag";
              return (
                this.materialInHash(r)
                  ? (e = this.mHash[r])
                  : ((e = this._initShaders(
                      "immediateVert",
                      "vertexColorFrag",
                      !0
                    )),
                    ((this.mHash[r] = e).vertexColorAttribute =
                      t.getAttribLocation(e, "aVertexColor")),
                    t.enableVertexAttribArray(e.vertexColorAttribute)),
                e
              );
            }),
            (t.exports = n.RendererGL);
        },
        { "../core/constants": 36, "../core/core": 37 },
      ],
      85: [
        function (e, t, r) {
          "use strict";
          var e = e("../core/core"),
            n = 0;
          function o(e) {
            return 0 < e.length
              ? e.reduce(function (e, t) {
                  return e.concat(t);
                })
              : [];
          }
          function i(e) {
            return o(
              e.map(function (e) {
                return [e.x, e.y, e.z];
              })
            );
          }
          (e.RendererGL.prototype._initBufferDefaults = function (e) {
            1e3 < ++n &&
              ((t = Object.keys(this.gHash)[0]), delete this.gHash[t], n--);
            var t = this.GL;
            (this.gHash[e] = {}),
              (this.gHash[e].vertexBuffer = t.createBuffer()),
              (this.gHash[e].normalBuffer = t.createBuffer()),
              (this.gHash[e].uvBuffer = t.createBuffer()),
              (this.gHash[e].indexBuffer = t.createBuffer());
          }),
            (e.RendererGL.prototype.createBuffers = function (e, t) {
              var r = this.GL;
              this._setDefaultCamera(), this._initBufferDefaults(e);
              var n = this.mHash[this._getCurShaderId()];
              (this.gHash[e].numberOfItems = 3 * t.faces.length),
                r.bindBuffer(r.ARRAY_BUFFER, this.gHash[e].vertexBuffer),
                r.bufferData(
                  r.ARRAY_BUFFER,
                  new Float32Array(i(t.vertices)),
                  r.STATIC_DRAW
                ),
                (n.vertexPositionAttribute = r.getAttribLocation(
                  n,
                  "aPosition"
                )),
                r.enableVertexAttribArray(n.vertexPositionAttribute),
                r.vertexAttribPointer(
                  n.vertexPositionAttribute,
                  3,
                  r.FLOAT,
                  !1,
                  0,
                  0
                ),
                r.bindBuffer(r.ARRAY_BUFFER, this.gHash[e].normalBuffer),
                r.bufferData(
                  r.ARRAY_BUFFER,
                  new Float32Array(i(t.vertexNormals)),
                  r.STATIC_DRAW
                ),
                (n.vertexNormalAttribute = r.getAttribLocation(n, "aNormal")),
                r.enableVertexAttribArray(n.vertexNormalAttribute),
                r.vertexAttribPointer(
                  n.vertexNormalAttribute,
                  3,
                  r.FLOAT,
                  !1,
                  0,
                  0
                ),
                r.bindBuffer(r.ARRAY_BUFFER, this.gHash[e].uvBuffer),
                r.bufferData(
                  r.ARRAY_BUFFER,
                  new Float32Array(o(t.uvs)),
                  r.STATIC_DRAW
                ),
                (n.textureCoordAttribute = r.getAttribLocation(n, "aTexCoord")),
                r.enableVertexAttribArray(n.textureCoordAttribute),
                r.vertexAttribPointer(
                  n.textureCoordAttribute,
                  2,
                  r.FLOAT,
                  !1,
                  0,
                  0
                ),
                r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.gHash[e].indexBuffer),
                r.bufferData(
                  r.ELEMENT_ARRAY_BUFFER,
                  new Uint16Array(o(t.faces)),
                  r.STATIC_DRAW
                );
            }),
            (e.RendererGL.prototype.drawBuffers = function (e) {
              this._setDefaultCamera();
              var t = this.GL,
                r = this._getCurShaderId(),
                n = this.mHash[r];
              return (
                t.bindBuffer(t.ARRAY_BUFFER, this.gHash[e].vertexBuffer),
                t.vertexAttribPointer(
                  n.vertexPositionAttribute,
                  3,
                  t.FLOAT,
                  !1,
                  0,
                  0
                ),
                t.bindBuffer(t.ARRAY_BUFFER, this.gHash[e].normalBuffer),
                t.vertexAttribPointer(
                  n.vertexNormalAttribute,
                  3,
                  t.FLOAT,
                  !1,
                  0,
                  0
                ),
                t.bindBuffer(t.ARRAY_BUFFER, this.gHash[e].uvBuffer),
                t.vertexAttribPointer(
                  n.textureCoordAttribute,
                  2,
                  t.FLOAT,
                  !1,
                  0,
                  0
                ),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.gHash[e].indexBuffer),
                this._setMatrixUniforms(r),
                t.drawElements(
                  t.TRIANGLES,
                  this.gHash[e].numberOfItems,
                  t.UNSIGNED_SHORT,
                  0
                ),
                this
              );
            }),
            (t.exports = e.RendererGL);
        },
        { "../core/core": 37 },
      ],
      86: [
        function (e, t, r) {
          "use strict";
          var n = e("../core/core"),
            i = e("./shader");
          e("../core/p5.Renderer"), e("./p5.Matrix");
          var o = [],
            s = {
              alpha: !0,
              depth: !0,
              stencil: !0,
              antialias: !1,
              premultipliedAlpha: !1,
              preserveDrawingBuffer: !1,
            };
          (n.RendererGL = function (e, t, r) {
            return (
              n.Renderer.call(this, e, t, r),
              this._initContext(),
              (this.isP3D = !0),
              (this.GL = this.drawingContext),
              (this.ambientLightCount = 0),
              (this.directionalLightCount = 0),
              (this.pointLightCount = 0),
              (this._curCamera = null),
              (this.uMVMatrix = new n.Matrix()),
              (this.uPMatrix = new n.Matrix()),
              (this.uNMatrix = new n.Matrix("mat3")),
              (this.gHash = {}),
              (this.mHash = {}),
              (this.isImmediateDrawing = !1),
              (this.immediateMode = {}),
              (this.curFillColor = [0.5, 0.5, 0.5, 1]),
              (this.curStrokeColor = [0.5, 0.5, 0.5, 1]),
              (this.pointSize = 5),
              this
            );
          }),
            (n.RendererGL.prototype = Object.create(n.Renderer.prototype)),
            (n.RendererGL.prototype._initContext = function () {
              try {
                if (
                  ((this.drawingContext =
                    this.canvas.getContext("webgl", s) ||
                    this.canvas.getContext("experimental-webgl", s)),
                  null === this.drawingContext)
                )
                  throw new Error("Error creating webgl context");
                console.log("p5.RendererGL: enabled webgl context");
                var e = this.drawingContext;
                e.enable(e.DEPTH_TEST),
                  e.depthFunc(e.LEQUAL),
                  e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight);
              } catch (e) {
                throw new Error(e);
              }
            }),
            (n.RendererGL.prototype._setDefaultCamera = function () {
              var e, t, r;
              null === this._curCamera &&
                ((e = this.width),
                (t = this.height),
                (this.uPMatrix = n.Matrix.identity()),
                (r = this.height / 2 / Math.tan((30 * Math.PI) / 180)),
                this.uPMatrix.perspective(
                  (60 / 180) * Math.PI,
                  e / t,
                  0.1 * r,
                  10 * r
                ),
                (this._curCamera = "default"));
            }),
            (n.RendererGL.prototype._update = function () {
              (this.uMVMatrix = n.Matrix.identity()),
                this.translate(
                  0,
                  0,
                  -this.height / 2 / Math.tan((30 * Math.PI) / 180)
                ),
                (this.ambientLightCount = 0),
                (this.directionalLightCount = 0),
                (this.pointLightCount = 0);
            }),
            (n.RendererGL.prototype.background = function () {
              var e = this.GL,
                t = this._pInst.color.apply(this._pInst, arguments),
                r = t.levels[0] / 255,
                n = t.levels[1] / 255,
                o = t.levels[2] / 255,
                t = t.levels[3] / 255;
              e.clearColor(r, n, o, t),
                e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
            }),
            (n.RendererGL.prototype._initShaders = function (e, t, r) {
              var n = this.GL,
                o = n.createShader(n.VERTEX_SHADER);
              if (
                (n.shaderSource(o, i[e]),
                n.compileShader(o),
                !n.getShaderParameter(o, n.COMPILE_STATUS))
              )
                return (
                  alert(
                    "Yikes! An error occurred compiling the shaders:" +
                      n.getShaderInfoLog(o)
                  ),
                  null
                );
              e = n.createShader(n.FRAGMENT_SHADER);
              if (
                (n.shaderSource(e, i[t]),
                n.compileShader(e),
                !n.getShaderParameter(e, n.COMPILE_STATUS))
              )
                return (
                  alert(
                    "Darn! An error occurred compiling the shaders:" +
                      n.getShaderInfoLog(e)
                  ),
                  null
                );
              t = n.createProgram();
              return (
                n.attachShader(t, o),
                n.attachShader(t, e),
                n.linkProgram(t),
                n.getProgramParameter(t, n.LINK_STATUS) ||
                  alert("Snap! Error linking shader program"),
                this._getLocation(t, r),
                t
              );
            }),
            (n.RendererGL.prototype._getLocation = function (e, t) {
              var r = this.GL;
              r.useProgram(e),
                (e.uPMatrixUniform = r.getUniformLocation(
                  e,
                  "uProjectionMatrix"
                )),
                (e.uMVMatrixUniform = r.getUniformLocation(
                  e,
                  "uModelViewMatrix"
                )),
                void 0 === t &&
                  ((e.uNMatrixUniform = r.getUniformLocation(
                    e,
                    "uNormalMatrix"
                  )),
                  (e.samplerUniform = r.getUniformLocation(e, "uSampler")));
            }),
            (n.RendererGL.prototype._setUniform1f = function (e, t, r) {
              var n = this.GL,
                e = this.mHash[e];
              return (
                n.useProgram(e),
                (e[t] = n.getUniformLocation(e, t)),
                n.uniform1f(e[t], r),
                this
              );
            }),
            (n.RendererGL.prototype._setMatrixUniforms = function (e) {
              var t = this.GL,
                e = this.mHash[e];
              t.useProgram(e),
                t.uniformMatrix4fv(e.uPMatrixUniform, !1, this.uPMatrix.mat4),
                t.uniformMatrix4fv(e.uMVMatrixUniform, !1, this.uMVMatrix.mat4),
                this.uNMatrix.inverseTranspose(this.uMVMatrix),
                t.uniformMatrix3fv(e.uNMatrixUniform, !1, this.uNMatrix.mat3);
            }),
            (n.RendererGL.prototype._getShader = function (e, t, r) {
              var n = e + "|" + t;
              return (
                this.materialInHash(n) ||
                  ((r = this._initShaders(e, t, r)), (this.mHash[n] = r)),
                (this.curShaderId = n),
                this.mHash[this.curShaderId]
              );
            }),
            (n.RendererGL.prototype._getCurShaderId = function () {
              var e, t;
              return (
                "fill" !== this.drawMode && void 0 === this.curShaderId
                  ? ((e = "normalVert|normalFrag"),
                    (t = this._initShaders("normalVert", "normalFrag")),
                    (this.mHash[e] = t),
                    (this.curShaderId = e))
                  : this.isImmediateDrawing &&
                    "fill" === this.drawMode &&
                    ((e = "immediateVert|vertexColorFrag"),
                    (t = this._initShaders("immediateVert", "vertexColorFrag")),
                    (this.mHash[e] = t),
                    (this.curShaderId = e)),
                this.curShaderId
              );
            }),
            (n.RendererGL.prototype.fill = function (e, t, r, n) {
              var o,
                i = this.GL,
                s = this._applyColorBlend.apply(this, arguments);
              return (
                (this.curFillColor = s),
                (this.drawMode = "fill"),
                this.isImmediateDrawing
                  ? ((o = this._getShader("immediateVert", "vertexColorFrag")),
                    i.useProgram(o))
                  : ((o = this._getShader("normalVert", "basicFrag")),
                    i.useProgram(o),
                    (o.uMaterialColor = i.getUniformLocation(
                      o,
                      "uMaterialColor"
                    )),
                    i.uniform4f(o.uMaterialColor, s[0], s[1], s[2], s[3])),
                this
              );
            }),
            (n.RendererGL.prototype.stroke = function (e, t, r, n) {
              var o = this._pInst.color.apply(this._pInst, arguments)._array;
              return (
                (this.curStrokeColor = o), (this.drawMode = "stroke"), this
              );
            }),
            (n.RendererGL.prototype._strokeCheck = function () {
              if ("stroke" === this.drawMode)
                throw new Error(
                  "stroke for shapes in 3D not yet implemented, use fill for now :("
                );
            }),
            (n.RendererGL.prototype.strokeWeight = function (e) {
              return (this.pointSize = e), this;
            }),
            (n.RendererGL.prototype.geometryInHash = function (e) {
              return void 0 !== this.gHash[e];
            }),
            (n.RendererGL.prototype.materialInHash = function (e) {
              return void 0 !== this.mHash[e];
            }),
            (n.RendererGL.prototype.resize = function (e, t) {
              var r = this.GL;
              n.Renderer.prototype.resize.call(this, e, t),
                r.viewport(0, 0, r.drawingBufferWidth, r.drawingBufferHeight),
                "default" === this._curCamera &&
                  ((this._curCamera = null), this._setDefaultCamera());
            }),
            (n.RendererGL.prototype.clear = function () {
              var e = this.GL;
              e.clearColor(
                arguments[0],
                arguments[1],
                arguments[2],
                arguments[3]
              ),
                e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
            }),
            (n.RendererGL.prototype.translate = function (e, t, r) {
              return this.uMVMatrix.translate([e, -t, r]), this;
            }),
            (n.RendererGL.prototype.scale = function (e, t, r) {
              return this.uMVMatrix.scale([e, t, r]), this;
            }),
            (n.RendererGL.prototype.rotate = function (e, t) {
              return this.uMVMatrix.rotate(e, t), this;
            }),
            (n.RendererGL.prototype.rotateX = function (e) {
              return this.rotate(e, [1, 0, 0]), this;
            }),
            (n.RendererGL.prototype.rotateY = function (e) {
              return this.rotate(e, [0, 1, 0]), this;
            }),
            (n.RendererGL.prototype.rotateZ = function (e) {
              return this.rotate(e, [0, 0, 1]), this;
            }),
            (n.RendererGL.prototype.push = function () {
              o.push(this.uMVMatrix.copy());
            }),
            (n.RendererGL.prototype.pop = function () {
              if (0 === o.length) throw new Error("Invalid popMatrix!");
              this.uMVMatrix = o.pop();
            }),
            (n.RendererGL.prototype.resetMatrix = function () {
              return (
                (this.uMVMatrix = n.Matrix.identity()),
                this.translate(0, 0, -800),
                this
              );
            }),
            (n.RendererGL.prototype._applyTextProperties = function () {
              console.error("text commands not yet implemented in webgl");
            }),
            (t.exports = n.RendererGL);
        },
        {
          "../core/core": 37,
          "../core/p5.Renderer": 43,
          "./p5.Matrix": 83,
          "./shader": 88,
        },
      ],
      87: [
        function (e, t, r) {
          "use strict";
          var g = e("../core/core");
          e("./p5.Geometry"),
            (g.prototype.plane = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              var i = e[0] || 50,
                s = e[1] || i,
                r = "number" == typeof e[2] ? e[2] : 1,
                n = "number" == typeof e[3] ? e[3] : 1,
                o = "plane|" + i + "|" + s + "|" + r + "|" + n;
              this._renderer.geometryInHash(o) ||
                ((n = new g.Geometry(r, n, function () {
                  for (var e, t, r, n = 0; n <= this.detailY; n++) {
                    t = n / this.detailY;
                    for (var o = 0; o <= this.detailX; o++)
                      (e = o / this.detailX),
                        (r = new g.Vector(i * e - i / 2, s * t - s / 2, 0)),
                        this.vertices.push(r),
                        this.uvs.push([e, t]);
                  }
                }))
                  .computeFaces()
                  .computeNormals(),
                this._renderer.createBuffers(o, n)),
                this._renderer.drawBuffers(o);
            }),
            (g.prototype.box = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              var s = e[0] || 50,
                a = e[1] || s,
                h = e[2] || s,
                r = "number" == typeof e[3] ? e[3] : 4,
                n = "number" == typeof e[4] ? e[4] : 4,
                o = "box|" + s + "|" + a + "|" + h + "|" + r + "|" + n;
              return (
                this._renderer.geometryInHash(o) ||
                  ((n = new g.Geometry(r, n, function () {
                    for (
                      var e = [
                          [0, 4, 2, 6],
                          [1, 3, 5, 7],
                          [0, 1, 4, 5],
                          [2, 6, 3, 7],
                          [0, 2, 1, 3],
                          [4, 5, 6, 7],
                        ],
                        t = 0;
                      t < e.length;
                      t++
                    ) {
                      for (var r = e[t], n = 4 * t, o = 0; o < 4; o++) {
                        var i = r[o],
                          i = new g.Vector(
                            ((2 * (1 & i) - 1) * s) / 2,
                            (((2 & i) - 1) * a) / 2,
                            (((4 & i) / 2 - 1) * h) / 2
                          );
                        this.vertices.push(i),
                          this.uvs.push([1 & o, (2 & o) / 2]),
                          0;
                      }
                      this.faces.push([n, 1 + n, 2 + n]),
                        this.faces.push([2 + n, 1 + n, 3 + n]);
                    }
                  })).computeNormals(),
                  this._renderer.createBuffers(o, n)),
                this._renderer.drawBuffers(o),
                this
              );
            }),
            (g.prototype.sphere = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              var s = e[0] || 50,
                r = "number" == typeof e[1] ? e[1] : 24,
                n = "number" == typeof e[2] ? e[2] : 16,
                o = "sphere|" + s + "|" + r + "|" + n;
              return (
                this._renderer.geometryInHash(o) ||
                  ((n = new g.Geometry(r, n, function () {
                    for (var e, t, r = 0; r <= this.detailY; r++) {
                      t = r / this.detailY;
                      for (var n = 0; n <= this.detailX; n++) {
                        e = n / this.detailX;
                        var o = 2 * Math.PI * e,
                          i = Math.PI * t - Math.PI / 2,
                          o = new g.Vector(
                            s * Math.cos(i) * Math.sin(o),
                            s * Math.sin(i),
                            s * Math.cos(i) * Math.cos(o)
                          );
                        this.vertices.push(o), this.uvs.push([e, t]);
                      }
                    }
                  }))
                    .computeFaces()
                    .computeNormals()
                    .averageNormals()
                    .averagePoleNormals(),
                  this._renderer.createBuffers(o, n)),
                this._renderer.drawBuffers(o),
                this
              );
            });
          function h(e, t, r, n, o, i, s) {
            o = o < 1 ? 1 : o;
            for (
              var a,
                h =
                  ((i = void 0 === i || i) ? 2 : 0) +
                  ((s = void 0 === s || s) ? 2 : 0),
                l = (n = n < 3 ? 3 : n) + 1,
                p = Math.atan2(e - t, r),
                u = o + (s ? 2 : 0),
                c = i ? -2 : 0;
              c <= u;
              ++c
            ) {
              var d = c / o,
                f = r * d,
                m =
                  c < 0
                    ? ((f = 0), (d = 1), e)
                    : o < c
                    ? ((f = r), (d = 1), t)
                    : e + (c / o) * (t - e);
              for (
                (-2 !== c && c !== o + 2) || (d = m = 0), f -= r / 2, a = 0;
                a < l;
                ++a
              )
                this.vertices.push(
                  new g.Vector(
                    Math.sin((a * Math.PI * 2) / n) * m,
                    f,
                    Math.cos((a * Math.PI * 2) / n) * m
                  )
                ),
                  this.vertexNormals.push(
                    new g.Vector(
                      c < 0 || o < c
                        ? 0
                        : Math.sin((a * Math.PI * 2) / n) * Math.cos(p),
                      c < 0 ? -1 : o < c ? 1 : Math.sin(p),
                      c < 0 || o < c
                        ? 0
                        : Math.cos((a * Math.PI * 2) / n) * Math.cos(p)
                    )
                  ),
                  this.uvs.push([a / n, d]);
            }
            for (c = 0; c < o + h; ++c)
              for (a = 0; a < n; ++a)
                this.faces.push([
                  l * (c + 0) + 0 + a,
                  l * (c + 0) + 1 + a,
                  l * (c + 1) + 1 + a,
                ]),
                  this.faces.push([
                    l * (c + 0) + 0 + a,
                    l * (c + 1) + 1 + a,
                    l * (c + 1) + 0 + a,
                  ]);
          }
          (g.prototype.cylinder = function () {
            for (var e = new Array(arguments.length), t = 0; t < e.length; ++t)
              e[t] = arguments[t];
            var r,
              n = e[0] || 50,
              o = e[1] || n,
              i = "number" == typeof e[2] ? e[2] : 24,
              s = "number" == typeof e[3] ? e[3] : 16,
              a = "cylinder|" + n + "|" + o + "|" + i + "|" + s;
            return (
              this._renderer.geometryInHash(a) ||
                ((r = new g.Geometry(i, s)),
                h.call(r, n, n, o, i, s, !0, !0),
                r.computeNormals(),
                this._renderer.createBuffers(a, r)),
              this._renderer.drawBuffers(a),
              this
            );
          }),
            (g.prototype.cone = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              var r,
                n = e[0] || 50,
                o = e[1] || n,
                i = "number" == typeof e[2] ? e[2] : 24,
                s = "number" == typeof e[3] ? e[3] : 16,
                a = "cone|" + n + "|" + o + "|" + i + "|" + s;
              return (
                this._renderer.geometryInHash(a) ||
                  ((r = new g.Geometry(i, s)),
                  h.call(r, n, 0, o, i, s, !0, !0),
                  r.computeNormals(),
                  this._renderer.createBuffers(a, r)),
                this._renderer.drawBuffers(a),
                this
              );
            }),
            (g.prototype.ellipsoid = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              var r = "number" == typeof e[3] ? e[3] : 24,
                n = "number" == typeof e[4] ? e[4] : 24,
                s = e[0] || 50,
                a = e[1] || s,
                h = e[2] || s,
                o = "ellipsoid|" + s + "|" + a + "|" + h + "|" + r + "|" + n;
              return (
                this._renderer.geometryInHash(o) ||
                  ((n = new g.Geometry(r, n, function () {
                    for (var e, t, r = 0; r <= this.detailY; r++) {
                      t = r / this.detailY;
                      for (var n = 0; n <= this.detailX; n++) {
                        e = n / this.detailX;
                        var o = 2 * Math.PI * e,
                          i = Math.PI * t - Math.PI / 2,
                          o = new g.Vector(
                            s * Math.cos(i) * Math.sin(o),
                            a * Math.sin(i),
                            h * Math.cos(i) * Math.cos(o)
                          );
                        this.vertices.push(o), this.uvs.push([e, t]);
                      }
                    }
                  }))
                    .computeFaces()
                    .computeNormals(),
                  this._renderer.createBuffers(o, n)),
                this._renderer.drawBuffers(o),
                this
              );
            }),
            (g.prototype.torus = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              var r = "number" == typeof e[2] ? e[2] : 24,
                n = "number" == typeof e[3] ? e[3] : 16,
                s = e[0] || 50,
                a = e[1] || 10,
                o = "torus|" + s + "|" + a + "|" + r + "|" + n;
              return (
                this._renderer.geometryInHash(o) ||
                  ((n = new g.Geometry(r, n, function () {
                    for (var e, t, r = 0; r <= this.detailY; r++) {
                      t = r / this.detailY;
                      for (var n = 0; n <= this.detailX; n++) {
                        e = n / this.detailX;
                        var o = 2 * Math.PI * e,
                          i = 2 * Math.PI * t,
                          i = new g.Vector(
                            (s + a * Math.cos(i)) * Math.cos(o),
                            (s + a * Math.cos(i)) * Math.sin(o),
                            a * Math.sin(i)
                          );
                        this.vertices.push(i), this.uvs.push([e, t]);
                      }
                    }
                  }))
                    .computeFaces()
                    .computeNormals()
                    .averageNormals(),
                  this._renderer.createBuffers(o, n)),
                this._renderer.drawBuffers(o),
                this
              );
            }),
            (g.RendererGL.prototype.point = function (e, t, r) {
              return console.log("point not yet implemented in webgl"), this;
            }),
            (g.RendererGL.prototype.triangle = function (e) {
              var t = e[0],
                r = e[1],
                n = e[2],
                o = e[3],
                i = e[4],
                s = e[5],
                a =
                  "tri|" + t + "|" + r + "|" + n + "|" + o + "|" + i + "|" + s;
              return (
                this.geometryInHash(a) ||
                  ((e = new g.Geometry(1, 1, function () {
                    var e = [];
                    e.push(new g.Vector(t, r, 0)),
                      e.push(new g.Vector(n, o, 0)),
                      e.push(new g.Vector(i, s, 0)),
                      (this.vertices = e),
                      (this.faces = [[0, 1, 2]]),
                      (this.uvs = [
                        [0, 0],
                        [0, 1],
                        [1, 1],
                      ]);
                  })).computeNormals(),
                  this.createBuffers(a, e)),
                this.drawBuffers(a),
                this
              );
            }),
            (g.RendererGL.prototype.ellipse = function (e) {
              var l = e[0],
                p = e[1],
                u = e[2],
                c = e[3],
                t = e[4] || 24,
                r = e[5] || 16,
                e = "ellipse|" + e[0] + "|" + e[1] + "|" + e[2] + "|" + e[3];
              return (
                this.geometryInHash(e) ||
                  ((r = new g.Geometry(t, r, function () {
                    for (
                      var e, t, r = l + 0.5 * u, n = p + 0.5 * c, o = 0;
                      o <= this.detailY;
                      o++
                    ) {
                      t = o / this.detailY;
                      for (var i = 0; i <= this.detailX; i++) {
                        e = i / this.detailX;
                        var s,
                          a,
                          h = 2 * Math.PI * e;
                        (a =
                          0 == t
                            ? new g.Vector(r, n, 0)
                            : ((s = r + 0.5 * u * Math.cos(h)),
                              (a = n + 0.5 * c * Math.sin(h)),
                              new g.Vector(s, a, 0))),
                          this.vertices.push(a),
                          this.uvs.push([e, t]);
                      }
                    }
                  }))
                    .computeFaces()
                    .computeNormals(),
                  this.createBuffers(e, r)),
                this.drawBuffers(e),
                this
              );
            }),
            (g.RendererGL.prototype.rect = function (e) {
              var t = "rect|" + e[0] + "|" + e[1] + "|" + e[2] + "|" + e[3],
                i = e[0],
                s = e[1],
                a = e[2],
                h = e[3],
                r = e[4] || 24,
                e = e[5] || 16;
              return (
                this.geometryInHash(t) ||
                  ((e = new g.Geometry(r, e, function () {
                    for (var e, t, r, n = 0; n <= this.detailY; n++) {
                      t = n / this.detailY;
                      for (var o = 0; o <= this.detailX; o++)
                        (e = o / this.detailX),
                          (r = new g.Vector(i + a * e, s + h * t, 0)),
                          this.vertices.push(r),
                          this.uvs.push([e, t]);
                    }
                  }))
                    .computeFaces()
                    .computeNormals(),
                  this.createBuffers(t, e)),
                this.drawBuffers(t),
                this
              );
            }),
            (g.RendererGL.prototype.quad = function () {
              for (
                var e = new Array(arguments.length), t = 0;
                t < e.length;
                ++t
              )
                e[t] = arguments[t];
              var r,
                n = e[0],
                o = e[1],
                i = e[2],
                s = e[3],
                a = e[4],
                h = e[5],
                l = e[6],
                p = e[7],
                u =
                  "quad|" +
                  n +
                  "|" +
                  o +
                  "|" +
                  i +
                  "|" +
                  s +
                  "|" +
                  a +
                  "|" +
                  h +
                  "|" +
                  l +
                  "|" +
                  p;
              return (
                this.geometryInHash(u) ||
                  ((r = new g.Geometry(2, 2, function () {
                    this.vertices.push(new g.Vector(n, o, 0)),
                      this.vertices.push(new g.Vector(i, s, 0)),
                      this.vertices.push(new g.Vector(a, h, 0)),
                      this.vertices.push(new g.Vector(l, p, 0)),
                      this.uvs.push([0, 0], [1, 0], [1, 1], [0, 1]);
                  })).computeNormals(),
                  (r.faces = [
                    [0, 1, 2],
                    [2, 3, 0],
                  ]),
                  this.createBuffers(u, r)),
                this.drawBuffers(u),
                this
              );
            }),
            (g.RendererGL.prototype.bezier = function (e) {
              var t = e[12] || 20;
              this.beginShape();
              for (var r = [0, 0, 0, 0], n = [0, 0, 0], o = 0; o <= t; o++)
                (r[0] = Math.pow(1 - o / t, 3)),
                  (r[1] = (o / t) * 3 * Math.pow(1 - o / t, 2)),
                  (r[2] = 3 * Math.pow(o / t, 2) * (1 - o / t)),
                  (r[3] = Math.pow(o / t, 3)),
                  (n[0] =
                    e[0] * r[0] + e[3] * r[1] + e[6] * r[2] + e[9] * r[3]),
                  (n[1] =
                    e[1] * r[0] + e[4] * r[1] + e[7] * r[2] + e[10] * r[3]),
                  (n[2] =
                    e[2] * r[0] + e[5] * r[1] + e[8] * r[2] + e[11] * r[3]),
                  this.vertex(n[0], n[1], n[2]);
              return this.endShape(), this;
            }),
            (g.RendererGL.prototype.curve = function (e) {
              var t = e[12];
              this.beginShape();
              for (var r = [0, 0, 0, 0], n = [0, 0, 0], o = 0; o <= t; o++)
                (r[0] = 0.5 * Math.pow(o / t, 3)),
                  (r[1] = 0.5 * Math.pow(o / t, 2)),
                  (r[2] = (o / t) * 0.5),
                  (r[3] = 0.5),
                  (n[0] =
                    r[0] * (-e[0] + 3 * e[3] - 3 * e[6] + e[9]) +
                    r[1] * (2 * e[0] - 5 * e[3] + 4 * e[6] - e[9]) +
                    r[2] * (-e[0] + e[6]) +
                    r[3] * (2 * e[3])),
                  (n[1] =
                    r[0] * (-e[1] + 3 * e[4] - 3 * e[7] + e[10]) +
                    r[1] * (2 * e[1] - 5 * e[4] + 4 * e[7] - e[10]) +
                    r[2] * (-e[1] + e[7]) +
                    r[3] * (2 * e[4])),
                  (n[2] =
                    r[0] * (-e[2] + 3 * e[5] - 3 * e[8] + e[11]) +
                    r[1] * (2 * e[2] - 5 * e[5] + 4 * e[8] - e[11]) +
                    r[2] * (-e[2] + e[8]) +
                    r[3] * (2 * e[5])),
                  this.vertex(n[0], n[1], n[2]);
              return this.endShape(), this;
            }),
            (t.exports = g);
        },
        { "../core/core": 37, "./p5.Geometry": 82 },
      ],
      88: [
        function (e, t, r) {
          t.exports = {
            immediateVert:
              "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}\n",
            vertexColorVert:
              "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}\n",
            vertexColorFrag:
              "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}",
            normalVert:
              "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertTexCoord = aTexCoord;\n}\n",
            normalFrag:
              "precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}",
            basicFrag:
              "precision mediump float;\nvarying vec3 vVertexNormal;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}",
            lightVert:
              "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform int uAmbientLightCount;\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nuniform vec3 uAmbientColor[8];\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nvarying vec3 vVertexNormal;\nvarying vec2 vVertTexCoord;\nvarying vec3 vLightWeighting;\n\nvec3 ambientLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 directionalLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor2 = vec3(0.0, 0.0, 0.0);\n\nvoid main(void){\n\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\n  vec3 vertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertexNormal = vertexNormal;\n  vVertTexCoord = aTexCoord;\n\n  vec4 mvPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n  vec3 eyeDirection = normalize(-mvPosition.xyz);\n\n  float shininess = 32.0;\n  float specularFactor = 2.0;\n  float diffuseFactor = 0.3;\n\n  for(int i = 0; i < 8; i++){\n    if(uAmbientLightCount == i) break;\n    ambientLightFactor += uAmbientColor[i];\n  }\n\n  for(int j = 0; j < 8; j++){\n    if(uDirectionalLightCount == j) break;\n    vec3 dir = uLightingDirection[j];\n    float directionalLightWeighting = max(dot(vertexNormal, dir), 0.0);\n    directionalLightFactor += uDirectionalColor[j] * directionalLightWeighting;\n  }\n\n  for(int k = 0; k < 8; k++){\n    if(uPointLightCount == k) break;\n    vec3 loc = uPointLightLocation[k];\n    vec3 lightDirection = normalize(loc - mvPosition.xyz);\n\n    float directionalLightWeighting = max(dot(vertexNormal, lightDirection), 0.0);\n    pointLightFactor += uPointLightColor[k] * directionalLightWeighting;\n\n    //factor2 for specular\n    vec3 reflectionDirection = reflect(-lightDirection, vertexNormal);\n    float specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n\n    pointLightFactor2 += uPointLightColor[k] * (specularFactor * specularLightWeighting\n      +  directionalLightWeighting * diffuseFactor);\n  }\n\n  if(!uSpecular){\n    vLightWeighting =  ambientLightFactor + directionalLightFactor + pointLightFactor;\n  }else{\n    vLightWeighting = ambientLightFactor + directionalLightFactor + pointLightFactor2;\n  }\n\n}\n",
            lightTextureFrag:
              "precision mediump float;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\n\nvarying vec3 vLightWeighting;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  if(!isTexture){\n    gl_FragColor = vec4(vec3(uMaterialColor.rgb * vLightWeighting), uMaterialColor.a);\n  }else{\n    vec4 textureColor = texture2D(uSampler, vVertTexCoord);\n    if(vLightWeighting == vec3(0., 0., 0.)){\n      gl_FragColor = textureColor;\n    }else{\n      gl_FragColor = vec4(vec3(textureColor.rgb * vLightWeighting), textureColor.a);\n    }\n  }\n}",
          };
        },
        {},
      ],
    },
    {},
    [28]
  )(28);
});
