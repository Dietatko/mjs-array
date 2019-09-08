load("mjs_assert.js");
load("mjs_array.js");

function some_withEmptyArray_returnsFalse(c) {
   let testee = Array.from([]);

   let actual = testee.some(function() { return true; });

   return assertIsEqual(c, "actual", actual, false);
}

function some_withNoneSatisfied_returnsFalse(c) {
   let testee = Array.from([1, 2]);

   let actual = testee.some(function() { return false; });

   return assertIsEqual(c, "actual", actual, false);
}

function some_withSomeSatisfied_returnsTrue(c, mod) {
   let testee = Array.from([1, 2]);

   let actual = testee.some(function(el) { return el % 2 === mod; });

   return assertIsEqual(c, "actual", actual, true);
}

function some_withAllSatisfied_returnsTrue(c) {
   let testee = Array.from([1, 2]);

   let actual = testee.some(function() { return true; });

   return assertIsEqual(c, "actual", actual, true);
}

function buildSomeScenarios() {
   return [
      {
         name: "some_withEmptyArray_returnsFalse",
         func: some_withEmptyArray_returnsFalse,
      },
      {
         name: "some_withNoneSatisfied_returnsFalse",
         func: some_withNoneSatisfied_returnsFalse,
      },
      {
         name: "some_withSomeSatisfied_returnsTrue",
         func: some_withSomeSatisfied_returnsTrue,
         cases: [
            { name: "odd", args: [ 1 ] },
            { name: "even", args: [ 0 ] }
         ]
      },
      {
         name: "some_withAllSatisfied_returnsTrue",
         func: some_withAllSatisfied_returnsTrue,
      }
   ];
}
