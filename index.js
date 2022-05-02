const { Builder, By} = require("selenium-webdriver");
const assert = require("assert");


async function DemoQAtest(){


    //  Launch the browser
let driver= await new Builder().forBrowser("chrome").build();


   // Navigate to our page
   await driver.get("https://demoqa.com/text-box")

   //Asert  that page is opened
   let url = await driver.getCurrentUrl().then(function(value){return value
})
assert.strictEqual(url,"https://demoqa.com/text-box")

   // Filling in fields

await driver.findElement(By.id("userName")).sendKeys("Petros",);

await driver.findElement(By.id("userEmail")).sendKeys("petrosyan@gmail.com",);

await driver.findElement(By.id("currentAddress")).sendKeys("Yerevan Sayat-Nova1",);

await driver.findElement(By.id("permanentAddress")).sendKeys("Yerevan Sayat-Nova1",);

//Cliking on subbmit button

await driver.findElement(By.id("submit")).click()


// Assert a new item is added with corect informatiom
let name =await driver.findElement(By.id("name")).getText().then(function(value){return value

})
assert.strictEqual(name,"Name:"+"Petros")
   
 let email = await driver.findElement(By.id("email")).getText().then(function(value){return value
})
assert.strictEqual(email,"Email:"+"petrosyan@gmail.com")

let currentAddress = await driver.findElement(By.id("currentAddress")).getText().then(function (value) {
    return value
});
assert.strictEqual(currentAddress,"Current Address :"+"Yerevan Sayat-Nova1")

let permanentAddress = await driver.findElement(By.id("permanenrAddress")).getText().then(function (value) {
    return value
})
assert.strictEqual(permanentAddress,"Permananet Address :"+"Yerevan Sayat-Nova1")



}
DemoQAtest()