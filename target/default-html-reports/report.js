$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchShopResult.feature");
formatter.feature({
  "name": "Search a shop",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User is able to find the desire shop",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Shop search results page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter a \"\u003clocation\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click the find a shop button",
  "keyword": "And "
});
formatter.step({
  "name": "User is able to see a shop in the desired location",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "location"
      ]
    },
    {
      "cells": [
        "London"
      ]
    },
    {
      "cells": [
        "Leeds"
      ]
    },
    {
      "cells": [
        "Cambridge"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User is able to find the desire shop",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Shop search results page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_on_the_Shop_search_results_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter a \"London\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_enter_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the find a shop button",
  "keyword": "And "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_click_the_find_a_shop_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see a shop in the desired location",
  "keyword": "Then "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_able_to_see_a_shop_in_the_desired_location()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User is able to find the desire shop",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Shop search results page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_on_the_Shop_search_results_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter a \"Leeds\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_enter_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the find a shop button",
  "keyword": "And "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_click_the_find_a_shop_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see a shop in the desired location",
  "keyword": "Then "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_able_to_see_a_shop_in_the_desired_location()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User is able to find the desire shop",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Shop search results page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_on_the_Shop_search_results_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter a \"Cambridge\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_enter_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the find a shop button",
  "keyword": "And "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_click_the_find_a_shop_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see a shop in the desired location",
  "keyword": "Then "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_able_to_see_a_shop_in_the_desired_location()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User is not able to find the desired shop",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Shop search results page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter a \"\u003clocation\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click the find a shop button",
  "keyword": "And "
});
formatter.step({
  "name": "User is not able to see a shop in the desired location",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "location"
      ]
    },
    {
      "cells": [
        "Rome"
      ]
    },
    {
      "cells": [
        "Chicago"
      ]
    },
    {
      "cells": [
        "Paris"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User is not able to find the desired shop",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Shop search results page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_on_the_Shop_search_results_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter a \"Rome\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_enter_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the find a shop button",
  "keyword": "And "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_click_the_find_a_shop_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is not able to see a shop in the desired location",
  "keyword": "Then "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_not_able_to_see_a_shop_in_the_desired_location()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User is not able to find the desired shop",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Shop search results page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_on_the_Shop_search_results_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter a \"Chicago\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_enter_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the find a shop button",
  "keyword": "And "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_click_the_find_a_shop_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is not able to see a shop in the desired location",
  "keyword": "Then "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_not_able_to_see_a_shop_in_the_desired_location()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User is not able to find the desired shop",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Shop search results page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_on_the_Shop_search_results_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter a \"Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_enter_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the find a shop button",
  "keyword": "And "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_click_the_find_a_shop_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is not able to see a shop in the desired location",
  "keyword": "Then "
});
formatter.match({
  "location": "com.taskCR.step_definitions.searchShopResult_StepDefs.user_is_not_able_to_see_a_shop_in_the_desired_location()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});