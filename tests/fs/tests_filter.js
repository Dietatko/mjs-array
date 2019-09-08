load("mjs_assert.js");
load("mjs_array.js");

function filter_withEmptyArray_returnsEmptyArray(c) {
   let testee = Array.from([]);

   let actual = testee.filter(function(el) { return true; });
   
   return assertIsArray(c, "actual", actual) &&
      assertIsEqual(c, "length", actual.length, 0);
}

function filter_withFilteringFunction_functionIsCalledWithParams(c) {
   let me = { me: true };
   let testee = Array.from([1, 2]);

   let actual = testee.filter(function(el, i, a) { 
      return assertIsEqual(c, "func.this", this, me) &&
         assertIsEqual(c, "func.el", el, i + 1) &&
         assertIsEqual(c, "func.arr", a, testee);
   }, me);
   
   return assertIsArray(c, "actual", actual) &&
      assertIsEqual(c, "length", actual.length, 2);
}

function filter_withFilteringFunction_returnsFilteredArray(c, exEl) {
   let testee = Array.from([1, 2]);

   let actual = testee.filter(function(el) { return el === exEl; });

   return assertIsArray(c, "actual", actual) &&
      assertIsEqual(c, "length", actual.length, 1) &&
      assertIsEqual(c, "[0]", actual[0], exEl) &&
      assertIsEqual(c, "__p", actual.__p, Array._prot);
}

function buildFilterScenarios() {
   return [
      {
         name: "filter_withEmptyArray_returnsEmptyArray",
         func: filter_withEmptyArray_returnsEmptyArray,
      },
      {
         name: "filter_withFilteringFunction_functionIsCalledWithParams",
         func: filter_withFilteringFunction_functionIsCalledWithParams,
      },
      {
         name: "filter_withFilteringFunction_returnsFilteredArray",
         func: filter_withFilteringFunction_returnsFilteredArray,
         cases: [
            { name: "1", args: [ 1 ] },
            { name: "2", args: [ 2 ] }
         ]
      }
   ];
}
