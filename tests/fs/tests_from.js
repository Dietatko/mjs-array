load("mjs_assert.js");
load("mjs_array.js");

function from_withEmptyArray_returnsEmptyArray(c) {
   let actual = Array.from([]);

   return actual && 
      assertIsEqual(c, "length", actual.length, 0) && 
      assertIsEqual(c, "__p", actual.__p, Array._prot);
}

function from_withArrayAndNoMapping_returnsInitializedArray(c) {
   let arr = [ 1, 2 ];

   let actual = Array.from(arr);

   return assertIsArray(c, "actual", actual) &&
      assertIsEqual(c, "length", actual.length, 2) &&
      assertIsEqual(c, "[0]", actual[0], 1) &&
      assertIsEqual(c, "[1]", actual[1], 2) &&
      assertIsEqual(c, "__p", actual.__p, Array._prot);
}

function from_withArrayAndMapping_returnsInitializedMappedArray(c) {
   let me = { me: true };
   let arr = [ 1, 2 ];

   let actual = Array.from(arr, function(el, i, a) {
      let assertion = assertIsEqual(c, "mapFn.this", this, me) &&
            assertIsEqual(c, "mapFn.el", el, i + 1) &&
            assertIsEqual(c, "mapFn.arr", a, arr);
      return assertion ? JSON.stringify(el) : null;
   }, me);

   return assertIsArray(c, "actual", actual) &&
      assertIsEqual(c, "length", actual.length, 2) &&
      assertIsEqual(c, "[0]", actual[0], "1") &&
      assertIsEqual(c, "[1]", actual[1], "2") &&
      assertIsEqual(c, "__p", actual.__p, Array._prot);
}

function from_withNonArrayObject_returnsNull(c, arg) {
   let actual = Array.from(arg);

   return assertIsEqual(c, "actual", actual, null);
}

function from_withNonFunctionMapping_returnsNull(c, arg) {
   let actual = Array.from([], arg);

   return assertIsEqual(c, "actual", actual, null);
}

function buildFromScenarios() {
   return [
      {
         name: "from_withEmptyArray_returnsEmptyArray",
         func: from_withEmptyArray_returnsEmptyArray,
      },
      {
         name: "from_withArrayAndNoMapping_returnsInitializedArray",
         func: from_withArrayAndNoMapping_returnsInitializedArray,
      },
      {
         name: "from_withArrayAndMapping_returnsInitializedMappedArray",
         func: from_withArrayAndMapping_returnsInitializedMappedArray,
      },
      {
         name: "from_withNonArrayObject_returnsNull",
         func: from_withNonArrayObject_returnsNull,
         cases: [
            { name: "null", args: [ null ] },
            { name: "object", args: [ {} ] },
            { name: "string", args: [ "string" ] },
            { name: "integer", args: [ 123 ] },
            { name: "number", args: [ 123.456 ] }
         ]
      },
      {
         name: "from_withNonFunctionMapping_returnsNull",
         func: from_withNonFunctionMapping_returnsNull,
         cases: [
            { name: "null", args: [ null ] },
            { name: "object", args: [ {} ] },
            { name: "array", args: [ [] ] },
            { name: "string", args: [ "string" ] },
            { name: "integer", args: [ 123 ] },
            { name: "number", args: [ 123.456 ] }
         ]
      }
   ];
}
