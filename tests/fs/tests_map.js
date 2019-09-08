load("mjs_assert.js");
load("mjs_array.js");

function map_withEmptyArray_returnsEmptyArray(c) {
   let testee = Array.from([]);

   let actual = testee.map(function() { return true; });

   return assertIsArray(c, "actual", actual) &&
      assertIsEqual(c, "length", actual.length, 0);
}

function map_withMappingFunction_functionIsCalledWithParams(c) {
   let me = { me: true };
   let testee = Array.from([1, 2]);

   let actual = testee.map(function(el, i, a) { 
      return assertIsEqual(c, "func.this", this, me) &&
         assertIsEqual(c, "func.el", el, i + 1) &&
         assertIsEqual(c, "func.arr", a, testee) ? el : null;
   }, me);

   return assertIsArray(c, "actual", actual) &&
      assertIsEqual(c, "length", actual.length, 2) &&
      assertIsEqual(c, "[0]", actual[0], 1);
}

function map_withMappingFunction_returnsMappedArray(c) {
   let testee = Array.from([1, 2]);

   let actual = testee.map(function(el) { return el * 2; });
   
   return assertIsArray(c, "actual", actual) &&
      assertIsEqual(c, "length", actual.length, 2) &&
      assertIsEqual(c, "[0]", actual[0], 2) &&
      assertIsEqual(c, "[1]", actual[1], 4) &&
      assertIsEqual(c, "__p", actual.__p, Array._prot);
}

function buildMapScenarios() {
   return [
      {
         name: "map_withEmptyArray_returnsEmptyArray",
         func: map_withEmptyArray_returnsEmptyArray,
      },
      {
         name: "map_withMappingFunction_functionIsCalledWithParams",
         func: map_withMappingFunction_functionIsCalledWithParams,
      },
      {
         name: "map_withMappingFunction_returnsMappedArray",
         func: map_withMappingFunction_returnsMappedArray
      }
   ];
}
