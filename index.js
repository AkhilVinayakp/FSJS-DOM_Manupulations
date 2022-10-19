import puppeteer from 'puppeteer';
import PromptSync from 'prompt-sync';

const prompt = PromptSync(({sigint: true}));
let choise = prompt("Enter the choice >> ")
choise = Number(choise);
(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    switch(choise){
      case 1: await page.goto('https://example.com');
              await page.evaluate(()=>{
                let element = document.querySelector('h1');
                element.innerHTML = "hey how are you"
              });
              break;
    }
  
    // await browser.close();
  })();