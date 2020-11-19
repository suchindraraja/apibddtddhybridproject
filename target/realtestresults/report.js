$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:///E:/Automation/AutomationNested/com.bddcucumber.api/src/test/resources/features/feature2.feature");
formatter.feature({
  "name": "Get Employees details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get all posts",
  "description": "",
  "keyword": "Scenario"
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
  "name": "submit request to service via GET method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode1.method3(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"200\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
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
formatter.uri("file:///E:/Automation/AutomationNested/com.bddcucumber.api/src/test/resources/features/feature4.feature");
formatter.feature({
  "name": "Create a post",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "registered uri/endpoint is \"http://jsonplaceholder.typicode.com\"",
  "keyword": "Given "
});
formatter.step({
  "name": "create a default HTTP request",
  "keyword": "When "
});
formatter.step({
  "name": "attach data to be sent to service like \"\u003cuid\u003e\",\"\u003cid\u003e\",\"\u003ctitle\u003e\",\"\u003cbody\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uid",
        "id",
        "title",
        "body"
      ]
    },
    {
      "cells": [
        "11",
        "101",
        "Selenium",
        "Jason Huggins"
      ]
    },
    {
      "cells": [
        "11",
        "102",
        "Appium",
        "Srinivasan Sekar"
      ]
    },
    {
      "cells": [
        "11",
        "103",
        "Rest Assured",
        "Johan Haleby"
      ]
    },
    {
      "cells": [
        "11",
        "104",
        "Java",
        "Sun Microsystems"
      ]
    },
    {
      "cells": [
        "11",
        "105",
        "TestNG",
        "Apache"
      ]
    },
    {
      "cells": [
        "11",
        "106",
        "Cucumber",
        "BDD"
      ]
    },
    {
      "cells": [
        "11",
        "107",
        "Keyword Driven",
        "PNR"
      ]
    },
    {
      "cells": [
        "11",
        "108",
        "POM",
        "Simon Stewart"
      ]
    },
    {
      "cells": [
        "11",
        "109",
        "Wiremock",
        "TomAkehurst"
      ]
    },
    {
      "cells": [
        "11",
        "110",
        "android",
        "Sundar pichai"
      ]
    },
    {
      "cells": [
        "12",
        "111",
        "IOS",
        "Steve Jobs"
      ]
    },
    {
      "cells": [
        "12",
        "112",
        "Cloud Management",
        "Satya Nadella"
      ]
    }
  ]
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"11\",\"101\",\"Selenium\",\"Jason Huggins\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"11\",\"102\",\"Appium\",\"Srinivasan Sekar\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"11\",\"103\",\"Rest Assured\",\"Johan Haleby\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"11\",\"104\",\"Java\",\"Sun Microsystems\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"11\",\"105\",\"TestNG\",\"Apache\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"11\",\"106\",\"Cucumber\",\"BDD\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"11\",\"107\",\"Keyword Driven\",\"PNR\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"11\",\"108\",\"POM\",\"Simon Stewart\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"11\",\"109\",\"Wiremock\",\"TomAkehurst\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"11\",\"110\",\"android\",\"Sundar pichai\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"12\",\"111\",\"IOS\",\"Steve Jobs\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new post",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "attach data to be sent to service like \"12\",\"112\",\"Cloud Management\",\"Satya Nadella\"",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method7(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit request to service via POST method with path parameter as \"posts\" and get response",
  "keyword": "And "
});
formatter.match({
  "location": "glue.Gluecode2.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code is \"201\" and content type is \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "glue.Gluecode1.method4(int,java.lang.String)"
});
formatter.write("Posts/Post retrieving/creation tests passed");
formatter.result({
  "status": "passed"
});
formatter.uri("file:///E:/Automation/AutomationNested/com.bddcucumber.api/src/test/resources/features/feature5.feature");
formatter.feature({
  "name": "Create a post",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "test restful service",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "glue.Gluecode2.method9(io.cucumber.datatable.DataTable)"
});
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.write("Service is working correctly in new posts creation");
formatter.result({
  "status": "passed"
});
});