package com.taskCR.pages;

import com.taskCR.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchShopResultPage extends BasePage {

    @FindBy(css="[id='main-content'] >h1")
    public WebElement pageTitle;

    @FindBy(css ="[id='edit-field-shop-geocode-latlon']")
    public WebElement searchInputBox;

    @FindBy(id = "edit-submit-shop-listing")
    public WebElement findShopButton;

    @FindBy(css="table>tbody>tr:nth-of-type(1)>td:nth-of-type(1)")
    public WebElement firstRowFirstColumn;

     @FindBy(css = "[class='not-front no-sidebars page-get-involved page-get-involved-find-a-shop chrome']")
     public WebElement okayCookie;

}
