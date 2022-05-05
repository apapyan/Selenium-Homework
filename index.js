const {
    Builder,
    By
} = require("selenium-webdriver");
let should = require("chai").should();

describe("Add DemoQaTest", function() {

    it("Successfully fill in fields and get a new item", async function() {
        this.timeout(15000)
        //  Launch the browser
        let driver = await new Builder().forBrowser("chrome").build();

        // Navigate to our page
        await driver.get("https://demoqa.com/text-box");

        // Asert  that page is opened
        let url = await driver.getCurrentUrl()
        url.should.equal("https://demoqa.com/text-box");

        // Filling in fields
        await driver.findElement(By.id("userName")).sendKeys("Petros", );
        await driver.findElement(By.id("userEmail")).sendKeys("petrosyan@gmail.com", );
        await driver.findElement(By.id("currentAddress")).sendKeys("Yerevan Sayat-Nova1", );
        await driver.findElement(By.id("permanentAddress")).sendKeys("Yerevan Sayat-Nova1", );

        //Cliking on subbmit button
        await driver.findElement(By.id("submit")).click();

        // Assert using chia should if a new item addes with corecct informatiom
        let name = await driver.findElement(By.id("name")).getText();
        name.should.equal("Name:" + "Petros");
        let email = await driver.findElement(By.id("email")).getText();
        email.should.equal("Email:" + "petrosyan@gmail.com");
        let CAddress = await driver.findElement(By.xpath("//p[@id='currentAddress']")).getText();
        CAddress.should.equal("Current Address :" + "Yerevan Sayat-Nova1")
        let PAddress = await driver.findElement(By.xpath("//p[@id='permanentAddress']")).getText();
        PAddress.should.equal("Permananet Address :" + "Yerevan Sayat-Nova1");

    });

});