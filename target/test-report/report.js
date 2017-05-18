$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ZappNavigation.feature");
formatter.feature({
  "line": 1,
  "name": "Navigation and verify Size, Width Selection controls",
  "description": "",
  "id": "navigation-and-verify-size,-width-selection-controls",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16042491719,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Navigatioin and Verify if size and width selection are displayed",
  "description": "",
  "id": "navigation-and-verify-size,-width-selection-controls;navigatioin-and-verify-if-size-and-width-selection-are-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User has Navigated to Zappos home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User selects \"Shoes\" from Shop Men\u0027s",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Select \"Boots\" from from Men\u0027s Shoes",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "A new page should appear with title \"Boots, Men | Shipped Free at Zappos\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User select \"Keen Utility\" from brand menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Select \"Pittsburgh Boot\" boots from the list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Browser should navigate to Add to cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user select Add to cart without selecting size/width",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Please select a Size and Please select a width appear",
  "keyword": "Then "
});
formatter.match({
  "location": "AllSteps.User_has_Navigated_to_Zappos_home_page()"
});
formatter.result({
  "duration": 8075133125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 14
    }
  ],
  "location": "AllSteps.user_Selects_menu_from_Shop_Men(String)"
});
formatter.result({
  "duration": 30367902821,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: .//*[@id\u003d\u0027hpTopLeft\u0027]//div/h4/a[text()\u003d\"Shop Men\u0027s\"]/../..\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LAPTOP-85ORAG89\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, appBuildId\u003d20170125094131, version\u003d51.0.1, platform\u003dXP, proxy\u003dProxy(), command_id\u003d1.0, specificationLevel\u003d0.0, acceptSslCerts\u003dfalse, processId\u003d10188.0, browserVersion\u003d51.0.1, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 41956f42-631b-4bd5-8430-6ead75ba8c67\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027hpTopLeft\u0027]//div/h4/a[text()\u003d\"Shop Men\u0027s\"]/../..}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.findElement(Unknown Source)\r\n\tat com.zappos.pom.HomePage.selectItemFromMensSideMenu(HomePage.java:35)\r\n\tat com.zappos.steps.AllSteps.user_Selects_menu_from_Shop_Men(AllSteps.java:46)\r\n\tat ✽.When User selects \"Shoes\" from Shop Men\u0027s(ZappNavigation.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boots",
      "offset": 8
    }
  ],
  "location": "AllSteps.select_menu_from_Mens_Shoes(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Boots, Men | Shipped Free at Zappos",
      "offset": 37
    }
  ],
  "location": "AllSteps.a_new_page_should_appear_with_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Keen Utility",
      "offset": 13
    }
  ],
  "location": "AllSteps.user_select_menu_from_brand_menu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pittsburgh Boot",
      "offset": 8
    }
  ],
  "location": "AllSteps.Select_boots_from_the_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AllSteps.Browser_should_navigate_to_Add_to_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AllSteps.user_select_Add_to_cart_without_selecting_size_width()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AllSteps.Please_select_a_Size_and_Please_select_a_width_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 87159858,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to interpret value as array\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LAPTOP-85ORAG89\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, appBuildId\u003d20170125094131, version\u003d51.0.1, platform\u003dXP, proxy\u003dProxy(), command_id\u003d1.0, specificationLevel\u003d0.0, acceptSslCerts\u003dfalse, processId\u003d10188.0, browserVersion\u003d51.0.1, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 41956f42-631b-4bd5-8430-6ead75ba8c67\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:523)\r\n\tat com.zappos.steps.AllSteps.tearDown(AllSteps.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.uri("ZappNotifyMe.feature");
formatter.feature({
  "line": 1,
  "name": "Verify \"Dont See your Size\" link and complete popup Window",
  "description": "",
  "id": "verify-\"dont-see-your-size\"-link-and-complete-popup-window",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13046207510,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify \"Dont See your Size\" link and complete popup Window",
  "description": "",
  "id": "verify-\"dont-see-your-size\"-link-and-complete-popup-window;verify-\"dont-see-your-size\"-link-and-complete-popup-window",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User has Navigated to Zappos home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User selects \"Shoes\" from Shop Men\u0027s",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Select \"Boots\" from from Men\u0027s Shoes",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "A new page should appear with title \"Boots, Men | Shipped Free at Zappos\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User select \"Keen Utility\" from brand menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Select \"Pittsburgh Boot\" boots from the list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Browser should navigate to Add to cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Don\u0027t see your size Link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Notify me Popup display",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Fill Notify me with Email \"test@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Color with \"Raven/Yellow\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Size with \"9\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Width with \"EE - Wide\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Notify me",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Acknowledgement page displayed with Thank You",
  "keyword": "Then "
});
formatter.match({
  "location": "AllSteps.User_has_Navigated_to_Zappos_home_page()"
});
formatter.result({
  "duration": 4836400676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 14
    }
  ],
  "location": "AllSteps.user_Selects_menu_from_Shop_Men(String)"
});
formatter.result({
  "duration": 30137837455,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: .//*[@id\u003d\u0027hpTopLeft\u0027]//div/h4/a[text()\u003d\"Shop Men\u0027s\"]/../..\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LAPTOP-85ORAG89\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, appBuildId\u003d20170125094131, version\u003d51.0.1, platform\u003dXP, proxy\u003dProxy(), command_id\u003d1.0, specificationLevel\u003d0.0, acceptSslCerts\u003dfalse, processId\u003d8188.0, browserVersion\u003d51.0.1, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 8a9ffa98-2aa6-4741-a2aa-6052ccb50cff\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027hpTopLeft\u0027]//div/h4/a[text()\u003d\"Shop Men\u0027s\"]/../..}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.findElement(Unknown Source)\r\n\tat com.zappos.pom.HomePage.selectItemFromMensSideMenu(HomePage.java:35)\r\n\tat com.zappos.steps.AllSteps.user_Selects_menu_from_Shop_Men(AllSteps.java:46)\r\n\tat ✽.When User selects \"Shoes\" from Shop Men\u0027s(ZappNotifyMe.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boots",
      "offset": 8
    }
  ],
  "location": "AllSteps.select_menu_from_Mens_Shoes(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Boots, Men | Shipped Free at Zappos",
      "offset": 37
    }
  ],
  "location": "AllSteps.a_new_page_should_appear_with_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Keen Utility",
      "offset": 13
    }
  ],
  "location": "AllSteps.user_select_menu_from_brand_menu(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pittsburgh Boot",
      "offset": 8
    }
  ],
  "location": "AllSteps.Select_boots_from_the_list(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AllSteps.Browser_should_navigate_to_Add_to_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AllSteps.click_on_Dont_See_Size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AllSteps.notify_Me_Popup_Display()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 27
    }
  ],
  "location": "AllSteps.fill_Notify_me_with_Email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Raven/Yellow",
      "offset": 12
    }
  ],
  "location": "AllSteps.color_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 11
    }
  ],
  "location": "AllSteps.size_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "EE - Wide",
      "offset": 12
    }
  ],
  "location": "AllSteps.width_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AllSteps.select_Notify_me()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AllSteps.acknowledgement_Page_displayed_with_Thank_You()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 106007015,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to interpret value as array\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LAPTOP-85ORAG89\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, appBuildId\u003d20170125094131, version\u003d51.0.1, platform\u003dXP, proxy\u003dProxy(), command_id\u003d1.0, specificationLevel\u003d0.0, acceptSslCerts\u003dfalse, processId\u003d8188.0, browserVersion\u003d51.0.1, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 8a9ffa98-2aa6-4741-a2aa-6052ccb50cff\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:523)\r\n\tat com.zappos.steps.AllSteps.tearDown(AllSteps.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
});