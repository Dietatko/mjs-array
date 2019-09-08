load("mjs_assert.js");
load("mjs_array.js");

function create_withNoArray_returnsEmptyArray(c) {
   let actual = Array.create();

   return actual && 
      assertIsEqual(c, "length", actual.length, 0) && 
      assertIsEqual(c, "__p", actual.__p, Array._prot);
}

function create_withArray_returnsInitializedArray(c) {
   let arr = [ 1, 2, 3 ];

   let actual = Array.create(arr);

   return assertIsEqual(c, "actual", actual, arr) &&
      assertIsEqual(c, "__p", actual.__p, Array._prot);
}

function create_withNonArrayObject_returnsNull(c, arg) {
   let actual = Array.create(arg);
   
   return assertIsEqual(c, "actual", actual, null);
}

function buildCreateScenarios() {
   return [
      {
         name: "create_withNoArray_returnsEmptyArray",
         func: create_withNoArray_returnsEmptyArray,
      },
      {
         name: "create_withArray_returnsInitializedArray",
         func: create_withArray_returnsInitializedArray,
      },
      {
         name: "create_withNonArrayObject_returnsNull",
         func: create_withNonArrayObject_returnsNull,
         cases: [
            { name: "null", args: [ null ] },
            { name: "{}", args: [ {} ] },
            { name: "string", args: [ "string" ] },
            { name: "integer", args: [ 123 ] },
            { name: "number", args: [ 123.456 ] }
         ]
      }
   ];
}