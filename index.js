const { Builder, By, Key,} = require("selenium-webdriver");
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
await driver.sleep(1000);
await driver.findElement(By.id("userEmail")).sendKeys("petrosyan@gmail.com",);
await driver.sleep(1000);
await driver.findElement(By.id("currentAddress")).sendKeys("Yerevan Sayat-Nova1",);
await driver.sleep(1000);
await driver.findElement(By.id("permanentAddress")).sendKeys("Yerevan Sayat-Nova1",);
await driver.sleep(1000); 
//Cliking on subbmit button

var Element = driver.findElement(By.id("submit")).click()
await driver.sleep(2000);

// Assert a new item is added with corect informatiom
let name =await driver.findElement(By.id("name")).getText().then(function(value){return value

})
assert.strictEqual(name,"Name:"+"Petros")
   
 let email = await driver.findElement(By.id("email")).getText().then(function(value){return value
})
assert.strictEqual(email,"Email:"+"petrosyan@gmail.com")

let currentAddress = await driver.findElement(By.xpath('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[6]/div/p[3]')).getText().then(function (value) {
    return value
});
assert.strictEqual(currentAddress,"Current Address :"+"Yerevan Sayat-Nova1")

let permanentAdress = await driver.findElement(By.xpath('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[6]/div/p[4]')).getText().then(function (value) {
    return value
})
assert.strictEqual(permanentAdress,"Permananet Address :"+"Yerevan Sayat-Nova1")



}
DemoQAtest()