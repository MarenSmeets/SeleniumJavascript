

const { webdriver, Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

async function inputForm () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://demoqa.com/automation-practice-form');
    await driver.findElement(By.id('firstName')).sendKeys('Voornaam');
    await driver.findElement(By.id('lastName')).sendKeys('Familienaam');
    await driver.findElement(By.id('userEmail')).sendKeys('email@adr.es');
    await driver.findElement(By.css('label[for="gender-radio-2"]')).click();
    await driver.findElement(By.id('userNumber')).sendKeys('0123456789');
                
    
    await driver.quit();
}

inputForm ();