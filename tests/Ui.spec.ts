
import {test} from '../Fixtures/baseTest';

import {UiPage} from '../pages/UiPage';
import dotenv from 'dotenv';


test('log in. the user',async ({customPage}) =>{

    const UIPage = new UiPage(customPage);
    dotenv.config();

    await UIPage.loginPage(process.env.USERNAME ||"",process.env.PASSWORD ||"");

    await UIPage.Verify_the_Login();

    await UIPage.go_to_BookStore();

    await UIPage.SearchBook_and_Verify();
    

    

    
});


