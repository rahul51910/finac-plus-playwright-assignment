
import {expect, Locator, Page} from '@playwright/test';


export class UiPage {

    

    readonly page : Page;


   public readonly UserName_textbox: Locator;
   public readonly Password_textbox: Locator;
   public readonly login_btn: Locator;
   public readonly UserName_verify: Locator;
   public readonly LogOut_btn: Locator;
   public readonly bookStorePage_btn: Locator;
   public readonly SearchBook_textbox: Locator;
   public readonly Book_validate: Locator;




    constructor (page : Page)
    {
        this.page = page;


        ///assignment

        this.UserName_textbox = page.getByRole('textbox',{name:"UserName"});
        this.Password_textbox = page.getByRole('textbox',{name:"Password"});
        this.login_btn = page.getByRole('button',{name:'Login'});
        this.UserName_verify = page.getByText("rahul1211");
        this.LogOut_btn = page.getByRole('button',{name:'Logout'});
        this.bookStorePage_btn = page.getByRole('button',{name: 'Go TO Book Store'});
        this.SearchBook_textbox = page.getByRole('textbox',{name:'Type to search'});
        this.Book_validate = page.getByRole('cell',{name:'Learning JavaScript Design Patterns'});





    }

public async loginPage(username: string,password: string)
{
    
    console.log("Entering username...");
    await this.UserName_textbox.fill(username);

    console.log("Entering password...");
    await this.Password_textbox.fill(password);

    console.log("Clicking login button...");
    await this.login_btn.click();

    console.log("Login action completed.");
}

public async Verify_the_Login()
{
    console.log("Verifying logged-in username visibility...");
    await expect(this.UserName_verify).toBeVisible();

    console.log("Verifying logout button visibility...");
    await expect(this.LogOut_btn).toBeVisible();

    console.log("Login verification successful.");
}

public async go_to_BookStore()
{
    console.log("Navigating to Book Store page...");
    await this.bookStorePage_btn.click();
    await this.page.waitForTimeout(1000);
     await this.page.waitForLoadState('load');
     await this.page.waitForLoadState('domcontentloaded');
  
    console.log("Successfully navigated to Book Store page.");
}

public async SearchBook_and_Verify()
{
    console.log("Verifying Search Book textbox visibility...");
    await expect(this.SearchBook_textbox).toBeVisible();
    await this.page.waitForLoadState('domcontentloaded');

    console.log("Waiting for page load...");
    await this.page.waitForLoadState('load');

    console.log("Searching for book: Learning JavaScript Design Patterns");
    await this.SearchBook_textbox.fill("Learning JavaScript Design Patterns");

    console.log("Verifying searched book is visible...");
    await expect(this.Book_validate).toBeVisible();

    console.log("Fetching table content...");
    console.log("after search the book result is:  "+await this.page.locator("tbody").textContent());

    console.log("Book search and validation completed successfully.");

    await this.page.waitForTimeout(2000);
}




    }


    
