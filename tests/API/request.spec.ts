import {test,expect,request} from '@playwright/test'
import dotenv from 'dotenv';
import testData from '../../test-data/user.json';
test('Create User', async() =>

{ console.log("Test Started");
    dotenv.config();
    
let context = await request.newContext({

    
    baseURL: process.env.API_BASE_URL,

    extraHTTPHeaders: {
        'x-api-key': process.env.API_KEY!,
        'Content-Type': 'application/json'
    }

});

     let response =await context.post('/api/users/',
        {
            data: 
            {
                "name": "Rahul Singh",
                "email": "rahulat1211@gmail.com",
                "role": "tester"

            }
        });
        console.log("[INFO] Create User Status Code:", response.status());
    

        const ResponseContent = await response.json();
        console.log("....CREATE USER RESPONSE ....");
        console.log(ResponseContent);

        const userid = ResponseContent.id;
        console.log("id is - "+userid);

     expect(await response.status()).toBe(201);
     console.log("[PASS] Create User Status Code Validated");

     // Get created user details and validate

     expect(ResponseContent.name).toBe("Rahul Singh");
     expect(ResponseContent.email).toBe("rahulat1211@gmail.com");
     expect(ResponseContent.role).toBe("tester");

     console.log("[PASS] User Details Validated Successfully");

     // update userName and verify the same

     console.log("Updating the UserName");

     const updateName =await context.put(`/api/users/${userid}`,{
     data: {

        "name":"Rahul Update"
     }
        
     });

     expect(updateName.status()).toBe(200);

     console.log("[PASS] Update User Status Code Validated");

         const updateResponse = await updateName.json();

    console.log(updateResponse);

    // Validate updated name
    expect(updateResponse.name).toBe('Rahul Update');

    console.log("[PASS] Updated Username Validated Successfully");






}
)