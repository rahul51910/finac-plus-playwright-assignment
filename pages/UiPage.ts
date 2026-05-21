
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


    public async loginPage()
    {
        await this.UserName_textbox.fill("rahul1211");
        await this.Password_textbox.fill("Rahul@123");
        await this.login_btn.click();
    }
    public async Verify_the_Login()
    {
        await expect(this.UserName_verify).toBeVisible();
        await expect(this.LogOut_btn).toBeVisible();
    }
    public async go_to_BookStore()
    {
        await this.bookStorePage_btn.click();
    }
    public async SearchBook_and_Verify()
    {
        await expect(this.SearchBook_textbox).toBeVisible();
        await this.page.waitForLoadState();
        await this.SearchBook_textbox.fill("Learning JavaScript Design Patterns");
        // await expect(this.SearchBook_textbox).toHaveText("Learning JavaScript Design Patterns");
        await expect(this.Book_validate).toBeVisible();


        console.log(await this.page.locator("tbody").textContent());

    }





    }


    
