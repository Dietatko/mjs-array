load("mjs_assert.js");
load("mjs_array.js");

function forEach_withEmptyArray_funcIsNotCalled(c) {
   let callCount = 0;
   let testee = Array.from([]);

   testee.forEach(function(el) { callCount++; });

   return assertIsEqual(c, "callCount", callCount, 0);
}

function forEach_withAction_functionIsCalledWithParams(c) {
   let callCount = 0;
   let me = { me: true };
   let testee = Array.from([1, 2]);

   testee.forEach(function(el, i, a) { 
      if (assertIsEqual(c, "func.this", this, me) &&
         assertIsEqual(c, "func.el", el, i + 1) &&
         assertIsEqual(c, "func.arr", a, testee)){
            callCount++;
      };
   }, me);

   return assertIsEqual(c, "callCount", callCount, 2);
}

function buildForEachScenarios() {
   return [
      {
         name: "forEach_withEmptyArray_funcIsNotCalled",
         func: forEach_withEmptyArray_funcIsNotCalled,
      },
      {
         name: "forEach_withAction_functionIsCalledWithParams",
         func: forEach_withAction_functionIsCalledWithParams,
      }
   ];
}
