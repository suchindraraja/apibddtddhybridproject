package tests;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features= {"E:\\Automation\\AutomationNested\\com.bddcucumber.api\\src\\test\\resources\\features\\feature2.feature",
							"E:\\Automation\\AutomationNested\\com.bddcucumber.api\\src\\test\\resources\\features\\feature3.feature",
							"E:\\Automation\\AutomationNested\\com.bddcucumber.api\\src\\test\\resources\\features\\feature4.feature",
							"E:\\Automation\\AutomationNested\\com.bddcucumber.api\\src\\test\\resources\\features\\feature5.feature"},
				 monochrome=true,
				 tags= {"@smoketest"},
				 glue= {"glue"},
				 plugin= {"pretty","html:target\\smoketestresults","json:target\\smoketestresultsjson.json"}
				)
public class SmokeTestRunner extends AbstractTestNGCucumberTests
{
}
