

const { webdriver, Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

async function example () {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://demoqa.com/automation-practice-form');
    await driver.findElement(By.id('firstName')).sendKeys('Voornaam');
    await driver.quit();
}

example ();