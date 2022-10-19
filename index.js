import puppeteer from 'puppeteer';
import PromptSync from 'prompt-sync';

const prompt = PromptSync(({sigint: true}));
let choise = prompt("Enter the choice (1-20) >> ")
choise = Number(choise);
(async () => {
    const browser = await puppeteer.launch({headless:false});
    await page.setViewport({ width: 1280, height: 800 });
    const page = await browser.newPage();
    switch(choise){
      case 0 : await page.goto('https://example.com');
              await page.evaluate(()=>{
                let element = document.querySelector('h1');
                element.innerHTML = "hey how are you"
              });
              break;
      case 1:
        /**
         * DEV To  
         */
              await page.goto("https://dev.to/");
              await page.evaluate(()=>{
                const selector = ".crayons-subtitle-2";
                const desc_selector = ".color-base-70 ";
                let element = document.querySelectorAll(selector);
                let desc_element = document.querySelectorAll(desc_selector)
                setTimeout()
                // target element at index 1
                element = element[1];
                desc_element = desc_element[1];
                if(!element){
                  alert("can not target the heading  Possible site update");
                }
                else {
                  // changing the content
                  element.textContent = "Welcome to WORLD OF JAVASCRIPT"
                }
                if(!desc_element){
                  alert("can not target description element possible site change");
                }
                else{
                  desc_element.textContent = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices"
                }

              });
              break;
        case 2: 
              /**
               * https://support.apple.com/en-in > getting all product names  
               */
              await page.goto("https://support.apple.com/en-in");
              await page.evaluate(()=>{
                let products = [];
                let products_element = document.querySelectorAll(".as-imagegrid-item-title");
                if(!products_element){
                  alert("can not find any product elements");
                  return null;
                }
                products_element.forEach((item)=>{
                  let product_name = item.innerText;
                  if(product_name){
                    product_name = product_name.replace("\n","").replace("Support", "");
                    products.push(product_name.trim());
                  }
                });
                alert(products);
              })
              break;
              
    }
  
    // await browser.close();
  })();


