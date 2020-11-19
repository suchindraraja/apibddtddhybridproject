$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:///E:/Automation/AutomationNested/com.bddcucumber.api/src/test/resources/features/feature2.feature");
formatter.feature({
  "name": "Get Employees details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get Specific employee post",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "registered uri/endpoint is \"http://jsonplaceholder.typicode.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "glue.Gluecode1.method1(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "create a default HTTP request",
  "keyword": "When "
});
formatter.match({
  "location": "glue.Gluecode1.method2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"1\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method5(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"1\" in response body",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode2.method6(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
});