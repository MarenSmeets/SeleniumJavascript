// npm install selenium webdriver

const webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://demoqa.com/automation-practice-form');