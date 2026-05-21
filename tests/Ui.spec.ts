
import {test} from '../Fixtures/baseTest';

import {UiPage} from '../pages/UiPage';

test('log in. the user',async ({customPage}) =>{

    const UIPage = new UiPage(customPage);

    await UIPage.loginPage();

    await UIPage.Verify_the_Login();

    await UIPage.go_to_BookStore();

    await UIPage.SearchBook_and_Verify();
    

    

    
});


