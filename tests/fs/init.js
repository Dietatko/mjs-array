load("mjs_testing.js");
load("tests_create.js");
load("tests_from.js");
load("tests_every.js");
load("tests_filter.js");
load("tests_find.js");
load("tests_find_index.js");
load("tests_for_each.js");
load("tests_map.js");
load("tests_reduce.js");
load("tests_some.js");

runTests([
   { name: "Array.create", func: buildCreateScenarios },
   { name: "Array.from", func: buildFromScenarios },
   { name: "Array.prototype.every", func: buildEveryScenarios },
   { name: "Array.prototype.filter", func: buildFilterScenarios },
   { name: "Array.prototype.find", func: buildFindScenarios },
   { name: "Array.prototype.findIndex", func: buildFindIndexScenarios },
   { name: "Array.prototype.forEach", func: buildForEachScenarios },
   { name: "Array.prototype.map", func: buildMapScenarios },
   { name: "Array.prototype.reduce", func: buildReduceScenarios },
   { name: "Array.prototype.some", func: buildSomeScenarios }
]);
