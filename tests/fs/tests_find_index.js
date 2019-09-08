load("mjs_assert.js");
load("mjs_array.js");

function findIndex_withEmptyArray_returnsMinusOne(c) {
   let testee = Array.from([]);

   let actual = testee.findIndex(function(el) { return true; });

   return assertIsEqual(c, "actual", actual, -1);
}

function findIndex_withFilteringFunction_functionIsCalledWithParams(c) {
   let me = { me: true };
   let testee = Array.from([1, 2]);

   let actual = testee.findIndex(function(el, i, a) { 
      return !(assertIsEqual(c, "func.this", this, me) &&
         assertIsEqual(c, "func.el", el, i + 1) &&
         assertIsEqual(c, "func.arr", a, testee));
   }, me);

   return assertIsEqual(c, "actual", actual, -1);
}

function findIndex_withNoExistingElement_returnsMinusOne(c) {
   let testee = Array.from([1, 2]);

   let actual = testee.findIndex(function(el) { return false; });

   return assertIsEqual(c, "actual", actual, -1);
}

function findIndex_withExistingElement_returnsTheElementIndex(c, exEl) {
   let testee = Array.from([1, 2]);

   let actual = testee.findIndex(function(el) { return el === exEl; });
   
   return assertIsEqual(c, "actual", actual, exEl - 1);
}

function buildFindIndexScenarios() {
   return [
      {
         name: "findIndex_withEmptyArray_returnsMinusOne",
         func: findIndex_withEmptyArray_returnsMinusOne,
      },
      {
         name: "findIndex_withFilteringFunction_functionIsCalledWithParams",
         func: findIndex_withFilteringFunction_functionIsCalledWithParams,
      },
      {
         name: "findIndex_withNoExistingElement_returnsMinusOne",
         func: findIndex_withNoExistingElement_returnsMinusOne,
      },
      {
         name: "findIndex_withExistingElement_returnsTheElementIndex",
         func: findIndex_withExistingElement_returnsTheElementIndex,
         cases: [
            { name: "1", args: [ 1 ] },
            { name: "2", args: [ 2 ] }
         ]
      }
   ];
}
