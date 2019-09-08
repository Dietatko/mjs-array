load("mjs_assert.js");
load("mjs_array.js");

function find_withEmptyArray_returnsUndefined(c) {
   let testee = Array.from([]);

   let actual = testee.find(function(el) { return true; });

   return assertIsEqual(c, "actual", actual, undefined);
}

function find_withFilteringFunction_functionIsCalledWithParams(c) {
   let me = { me: true };
   let testee = Array.from([1, 2]);

   let actual = testee.find(function(el, i, a) { 
      return !(assertIsEqual(c, "func.this", this, me) &&
         assertIsEqual(c, "func.el", el, i + 1) &&
         assertIsEqual(c, "func.arr", a, testee));
   }, me);

   return assertIsEqual(c, "actual", actual, undefined);
}

function find_withNoExistingElement_returnsUndefined(c) {
   let testee = Array.from([1, 2]);

   let actual = testee.find(function(el) { return false; });

   return assertIsEqual(c, "actual", actual, undefined);
}

function find_withExistingElement_returnsTheElement(c, exEl) {
   let testee = Array.from([1, 2]);

   let actual = testee.find(function(el) { return el === exEl; });

   return assertIsEqual(c, "actual", actual, exEl);
}

function buildFindScenarios() {
   return [
      {
         name: "find_withEmptyArray_returnsUndefined",
         func: find_withEmptyArray_returnsUndefined,
      },
      {
         name: "find_withFilteringFunction_functionIsCalledWithParams",
         func: find_withFilteringFunction_functionIsCalledWithParams,
      },
      {
         name: "find_withNoExistingElement_returnsUndefined",
         func: find_withNoExistingElement_returnsUndefined,
      },
      {
         name: "find_withExistingElement_returnsTheElement",
         func: find_withExistingElement_returnsTheElement,
         cases: [
            { name: "1", args: [ 1 ] },
            { name: "2", args: [ 2 ] }
         ]
      }
   ];
}
