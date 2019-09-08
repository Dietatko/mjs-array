load("mjs_assert.js");
load("mjs_array.js");

function reduce_withNoAccAndEmptyArray_returnsUndefined(c) {
   let callCount = 0;
   let testee = Array.from([]);

   let actual = testee.reduce(function(acc, el) { callCount++; });

   return assertIsEqual(c, "actual", actual, undefined) && 
      assertIsEqual(c, "callCount", callCount, 0);
}

function reduce_withAccAndEmptyArray_returnsAcc(c) {
   let callCount = 0;
   let testee = Array.from([]);

   let actual = testee.reduce(function(acc, el) { callCount++; }, "abc");

   return assertIsEqual(c, "actual", actual, "abc") && 
      assertIsEqual(c, "callCount", callCount, 0);
}

function reduce_withFunction_functionIsCalledWithParams(c) {
   let callCount = 0;
   let testee = Array.from([1, 2]);

   let actual = testee.reduce(function(acc, el, i, a) {
      callCount++;
      return assertIsEqual(c, "func.el", el, i + 1) &&
         assertIsEqual(c, "func.arr", a, testee) ? acc + 1 : 0;
   }, 10);

   return assertIsEqual(c, "actual", actual, 12) && 
      assertIsEqual(c, "callCount", callCount, 2);
}

function reduce_withNoAcc_usesFirstElementAsAcc(c) {
   let callCount = 0;
   let testee = Array.from([1, 2]);

   let actual = testee.reduce(function(acc, el) {
      callCount++;
      return acc + el;
   });

   return assertIsEqual(c, "actual", actual, 3) && 
      assertIsEqual(c, "callCount", callCount, 1);
}

function reduce_withAcc_usesSuppliedAcc(c) {
   let callCount = 0;
   let testee = Array.from([1, 2]);

   let actual = testee.reduce(function(acc, el) {
      callCount++;
      return acc + el;
   }, 10);

   return assertIsEqual(c, "actual", actual, 13) && 
      assertIsEqual(c, "callCount", callCount, 2);
}

function reduce_withFunction_returnsLastAcc(c) {
   let testee = Array.from([1, 2]);

   let actual = testee.reduce(function(acc, el) { return acc + el; }, 0);

   return assertIsEqual(c, "actual", actual, 3);
}

function buildReduceScenarios() {
   return [
      {
         name: "reduce_withNoAccAndEmptyArray_returnsUndefined",
         func: reduce_withNoAccAndEmptyArray_returnsUndefined,
      },
      {
         name: "reduce_withAccAndEmptyArray_returnsAcc",
         func: reduce_withAccAndEmptyArray_returnsAcc,
      },
      {
         name: "reduce_withFunction_functionIsCalledWithParams",
         func: reduce_withFunction_functionIsCalledWithParams,
      },
      {
         name: "reduce_withNoAcc_usesFirstElementAsAcc",
         func: reduce_withNoAcc_usesFirstElementAsAcc
      },
      {
         name: "reduce_withAcc_usesSuppliedAcc",
         func: reduce_withAcc_usesSuppliedAcc
      },
      {
         name: "reduce_withFunction_returnsLastAcc",
         func: reduce_withFunction_returnsLastAcc
      }
   ];
}
