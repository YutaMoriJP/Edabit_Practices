//Composition + IIFE
const length = (s = "") => s.length;
const trim = (s = "") => s.trim();
const replace = (word, replacee, replacer) => word.replace(replacee, replacer);
const slice = (arr, start, end) => arr.slice(start, end);

//magic returns an object with 4 methods
//invocation is maigc.trim() etc.

const magic = (() => {
  return {
    length(arg) {
      return length(arg);
    },
    replace(arg = "", x = "", y = "") {
      return replace(arg, x, y);
    },
    slice(arg = "", x = "", y = "") {
      return slice(arg, x, y);
    },
    trim(arg) {
      return trim(arg);
    },
  };
})();
/*
Test.assertEquals(magic.trim("  javascript is awesome  "), "javascript is awesome");
Test.assertEquals(magic.length("hello word"), 10);
Test.assertEquals(magic.slice([1, 2, 3, 4, 5], 2, 4)[0], 3);
Test.assertEquals(magic.slice([1, 2, 3, 4, 5], 2, 4)[1], 4);
Test.assertEquals(magic.replace("azerty", "a","A"), "Azerty");
*/
