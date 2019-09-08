load("mjs_assert.js");
load("mjs_array.js");

function every_withEmptyArray_returnsTrue(c) {
   let testee = Array.from([]);

   let actual = testee.every(function() { return false; });

   return assertIsEqual(c, "actual", actual, true);
}

function every_withAllSatisfied_returnsTrue(c) {
   let testee = Array.from([1, 2]);

   let actual = testee.every(function() { return true; });

   return assertIsEqual(c, "actual", actual, true);
}

function every_withSomeNotSatisfied_returnsFalse(c, mod) {
   let testee = Array.from([1, 2]);

   let actual = testee.every(function(el) { return el % 2 === mod; });

   return assertIsEqual(c, "actual", actual, false);
}

function buildEveryScenarios() {
   return [
      {
         name: "every_withEmptyArray_returnsTrue",
         func: every_withEmptyArray_returnsTrue,
      },
      {
         name: "every_withAllSatisfied_returnsTrue",
         func: every_withAllSatisfied_returnsTrue,
      },
      {
         name: "every_withSomeNotSatisfied_returnsFalse",
         func: every_withSomeNotSatisfied_returnsFalse,
         cases: [
            { name: "odd", args: [ 1 ] },
            { name: "even", args: [ 0 ] }
         ]
      }
   ];
}
