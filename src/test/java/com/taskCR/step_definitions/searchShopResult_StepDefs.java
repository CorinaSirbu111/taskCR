package com.taskCR.step_definitions;

import com.taskCR.pages.SearchShopResultPage;
import com.taskCR.utilities.BrowserUtils;
import com.taskCR.utilities.ConfigurationReader;
import com.taskCR.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.Locale;
import java.util.Set;

public class searchShopResult_StepDefs {

    SearchShopResultPage searchShopResultPage = new SearchShopResultPage();
    String location = "";

    @Given("User is on the Shop search results page")
    public void user_is_on_the_Shop_search_results_page() {
        String expectedURL = ConfigurationReader.get("expectedURL");
        Driver.get().get(expectedURL);

        BrowserUtils.waitForPageToLoad(10);
        String actualURL = Driver.get().getCurrentUrl();
        BrowserUtils.waitForClickablility(searchShopResultPage.okayCookie, 10);
        //Set<Cookie> cookie = Driver.get().manage().getCookies();
        //System.out.println(cookie);
        //searchShopResultPage.okayCookie.click();

        //JavascriptExecutor jse = (JavascriptExecutor)Driver.get();


        //Actions actions = new Actions(Driver.get());
        //actions.moveToElement(searchShopResultPage.okayCookie).click().perform();

        Alert alert =  Driver.get().switchTo().alert();
            alert.accept();

        Assert.assertEquals("Check if expected URL is equal with actual URL", expectedURL, actualURL);

    }

    @When("User enter a {string}")
    public void user_enter_a(String location) {
        BrowserUtils.waitFor(3);
        searchShopResultPage.searchInputBox.sendKeys(location);
        this.location = location.toLowerCase();

    }

    @When("User click the find a shop button")
    public void user_click_the_find_a_shop_button() {
        searchShopResultPage.findShopButton.click();

    }

    @Then("User is able to see a shop in the desired location")
    public void user_is_able_to_see_a_shop_in_the_desired_location() {
       String address =  searchShopResultPage.firstRowFirstColumn.getText();
       Assert.assertTrue(address.toLowerCase().contains(this.location));



    }

    @Then("User is not able to see a shop in the desired location")
    public void user_is_not_able_to_see_a_shop_in_the_desired_location() {
        String address =  searchShopResultPage.firstRowFirstColumn.getText();
        Assert.assertFalse(address.toLowerCase().contains(this.location));
    }


}
