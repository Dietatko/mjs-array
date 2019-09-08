load("mjs_array.js");

function runTestCase(run, testCase) {
   let ctx = {
      outcome: true,
      error: null
   };

   let testName = "Scenario: " + scenario.name;
   if (testCase.name)
      testName += " Case: " + testCase.name;

   testCase.args.splice(0,0, ctx);

   let outcome = scenario.func.apply(this, testCase.args);
   if (outcome && ctx.outcome) {
      print(testName + "... Passed");

      run.passed++;
   } else {
      print(testName + "... Failed!");
      print(JSON.stringify(ctx.error));
      print("");

      run.failed.push(testName);
   }

   return outcome;
}

function runScenarios(run, scenarios) {
   let outcome = true;

   for (let i = 0; i < scenarios.length; i++) {
      let scenario = scenarios[i];
      let cases = scenario.cases || [{ name: "", args: []}];

      for (let j = 0; j < cases.length; j++) {
         let testCase = cases[j];

         testCase.scenarioName = scenario.name;
         testCase.func = scenario.func;

         let tcOutcome = runTestCase(run, testCase)
         outcome = outcome && tcOutcome;
      }
   }
   return outcome;
}

function runTestSuite(run, suite) {
   print("");
   
   if (suite.module) {
      print("Loading module '" + suite.module + "'...");
      load(suite.module);
   }

   print("Executing suite '" + suite.name + "'...");
   let scenarios = suite.func();
   return runScenarios(run, scenarios);
}

function runTests(suits) {
   print("Running tests...");
   let runContext = {
      passed: 0,
      failed: Array.create()
   };

   Array.create(suits).forEach(function(suite) {
      runTestSuite(runContext, suite);
   });

   print("");
   if (runContext.failed.length > 0) {
      print("Following tests failed!");
      runContext.failed.forEach(function(testName) {
         print(testName);
      });
   } else {
      print("All tests passed.");
   }
   print("");
}
