$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:///E:/Automation/AutomationNested/com.bddcucumber.api/src/test/resources/features/feature1.feature");
formatter.feature({
  "name": "Get Employees details",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.uri("file:///E:/Automation/AutomationNested/com.bddcucumber.api/src/test/resources/features/feature3.feature");
formatter.feature({
  "name": "Get Employees details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "registered uri/endpoint is \"\u003curi\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "create a default HTTP request",
  "keyword": "When "
});
formatter.step({
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"\u003cid\u003e\" and get response",
  "keyword": "And "
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"\u003cid\u003e\" in response body",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uri",
        "id"
      ]
    },
    {
      "cells": [
        "http://jsonplaceholder.typicode.com",
        "1"
      ]
    },
    {
      "cells": [
        "http://jsonplaceholder.typicode.com",
        "2"
      ]
    },
    {
      "cells": [
        "http://jsonplaceholder.typicode.com",
        "3"
      ]
    },
    {
      "cells": [
        "http://jsonplaceholder.typicode.com",
        "4"
      ]
    },
    {
      "cells": [
        "http://jsonplaceholder.typicode.com",
        "5"
      ]
    },
    {
      "cells": [
        "http://jsonplaceholder.typicode.com",
        "6"
      ]
    },
    {
      "cells": [
        "http://jsonplaceholder.typicode.com",
        "7"
      ]
    },
    {
      "cells": [
        "http://jsonplaceholder.typicode.com",
        "8"
      ]
    },
    {
      "cells": [
        "http://jsonplaceholder.typicode.com",
        "9"
      ]
    },
    {
      "cells": [
        "http://jsonplaceholder.typicode.com",
        "10"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
formatter.scenario({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"2\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method5(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"2\" in response body",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode2.method6(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"3\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method5(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"3\" in response body",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode2.method6(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"4\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method5(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"4\" in response body",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode2.method6(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"5\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method5(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"5\" in response body",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode2.method6(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"6\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method5(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"6\" in response body",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode2.method6(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"7\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method5(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"7\" in response body",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode2.method6(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"8\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method5(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"8\" in response body",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode2.method6(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"9\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method5(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"9\" in response body",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode2.method6(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get some employee posts one by one w.r.t id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
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
  "name": "submit request to service via GET method with path parameter as \"posts\" and id as \"10\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method5(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\" with id value as \"10\" in response body",
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