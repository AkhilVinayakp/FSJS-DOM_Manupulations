import puppeteer from 'puppeteer';
import PromptSync from 'prompt-sync';

const prompt = PromptSync(({sigint: true}));
let choise = prompt("Enter the choice (1-20) >> ")
choise = Number(choise);
(async () => {
    const browser = await puppeteer.launch({headless:false,     args:[
      '--start-maximized' //  '--start-fullscreen'
    ]});
    const page = await browser.newPage();
    await page.setViewport({ width: 1980, height: 800 });
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
        case 3:
              /**
               *   https://support.google.com/youtube/#topic=9257498
               */
              await page.goto("https://support.google.com/youtube/#topic=9257498");
              await page.evaluate(()=>{
                let faq_parent = document.querySelector(".accordion-homepage");
                if(!faq_parent){
                  alert("can not find the element, site may changed..")
                  return null;
                }
                const new_faq = document.createElement("section");
                new_faq.classList.add("parent");
                // new_faq.
                new_faq.innerHTML = '<h3 role="button" tabindex="0" aria-expanded="true" aria-label="new Faq">My New FAQ <svg class="up" viewBox="0 0 24 24"> \
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path> \
                </svg> <svg class="down" viewBox="0 0 24 24"> \
                <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path> \
                </svg>\
                </h3> <div class="overflow"> \
                      <div class="children" role="list" aria-hidden="true" style="margin-top: -238px; display: none;">\
                      <div class="child" role="listitem">\
                      <a class="topic-link" href="https://javascript.info/">JS Fundamentals</a>\
                      </div>\
                </div>\
                </div>';
                faq_parent.appendChild(new_faq);
              });
              break;
        case 4: 
              /**
               * change the contact number.  
               * https://www.oneplus.in/support/contact
               */
              await page.goto("https://www.oneplus.in/support/contact");
              await page.evaluate(()=>{
                const contact_element = document.querySelector(".service-number");
                if(contact_element){
                contact_element.textContent = "+0000000000";
                }
              });
              break;
        case 5:
              await page.goto("https://www.samsung.com/in/youmake/");
              await page.evaluate(()=>{
                const buttons = document.querySelectorAll(".diwali-deals-product-sale-btn");
                if(buttons){
                  buttons.forEach((element)=>{
                    element.textContent = "CheckOut NOW!";
                  });
                }
                else alert("can not find the target site may changed!");
              });
              break;
        case 6:
              /**
               * change the background color of the search bar on mouseover   site:https://www.adidas.co.in/
               */
              await page.goto("https://www.adidas.co.in/");
              await page.evaluate(()=>{
                const search_bar = document.querySelector('[data-auto-id="searchinput"]');
                search_bar.addEventListener("mouseover", (e)=>{
                  search_bar.setAttribute("style", 'background-color:red;');
                })
              });
              break;
        case 7: 
              /**
               * Search in MDN
               *   
               */
              await page.goto("https://developer.mozilla.org/en-US/");
              await page.evaluate(()=>{
                const search_bar = document.getElementById("hp-search-input");
                const form_element = document.querySelector('[role="search"]');
                search_bar.value = "events"
                form_element.submit();
              });
              break;
        case 8:
          /**
           * Remove alternative languages from the list
           */
              await page.goto("https://www.google.com/");
              await page.evaluate(()=>{
                const divElements = document.getElementById("SIvCob");
                divElements.remove();
              });
              break;
        case 9:
          /**
           * Change the heading text color and Font  
           */
          await page.goto("https://www.codewars.com/");
          await page.evaluate(()=>{
            const heading = document.querySelector('.display-heading-1');
            heading.setAttribute("style", "color:red; font-family:monospace");
          });
          break;
        case 10:
          /**
           * Target the button and change background colour on mouseover
           * freecodecamp.org
           */
          await page.goto("https://www.freecodecamp.org/");
          await page.waitForSelector('[data-test-label="landing-big-cta"]');
          await page.evaluate(()=>{
            const startButton = document.querySelector('[data-test-label="landing-big-cta"]');
            if(!startButton){
              alert("can not target the text element");
              return null;
            }
            const button_text = startButton.querySelector(".login-btn-text");
            startButton.addEventListener("mouseover", ()=>{
              button_text.setAttribute("style", "background-color:red");
            });
            startButton.addEventListener("mouseout", ()=>{
              button_text.removeAttribute("style");
            });
          });
          break;
        case 11: 
        /**  
         * logo change for realme.com
         * https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/logo_lco_t17sd.png
         */
            await page.goto("https://www.realme.com/in/");
            await page.evaluate(()=>{
              const lg = document.querySelector(".logo > .icon");
              lg.style.backgroundImage = "url(https://ineuron.ai/images/ineuron-logo.png)";
           });
           break;
      case 12: 
              /**
               * colorchange of the button in https://github.com/login  
               */
              await page.goto("https://github.com/login");
              await page.evaluate(()=>{
                const button = document.querySelector('[value="Sign in"]');
                button.setAttribute("style","background-color:blue");
              });
              break;
      case 13:
              /**
               * Change the content in https://www.hackerrank.com/  
               */
              await page.goto("https://www.hackerrank.com/");
              await page.evaluate(()=>{
                const desc = document.querySelector(".fl-heading-text");
                desc.textContent = "JSBOOTCAMP";
              });
              break;
      case 14:
              /**
               * change the font-size
               * https://www.asus.com/in/  
               */
              await page.goto("https://www.asus.com/in/");
              await page.evaluate(()=>{
                const deals = document.querySelector(".HotDealsAll__Heading__2fIbe");
                deals.style.fontSize = "80px";
              });
              break;
      case 15:
              /**
               * change the alignment of the titles
               */
              await page.goto("https://www.dell.com/en-in/shop/deals/laptop-deals");
              await page.waitForSelector('.ps-title');
              await page.evaluate(()=>{
                const product_title = document.querySelectorAll(".ps-title");
                product_title.forEach((item)=>{
                  item.style.textAlign = "right";
              });
              });
              break;
      case 16:
              /**
               *   Change the heading in the vercel
               */
              await page.goto("https://vercel.com/");
              await page.evaluate(()=>{
                const title_ = document.querySelector(".section-title_title__VEDfK");
                title_.textContent = "Start with Scratch";
              });
              break;
      case 17:
              /**  
               * change the buy button to current date
               */
              // getting the current date
              await page.goto("https://www.sony.co.in/electronics/headband-headphones/wh-1000xm4?cpint=homepage_whats_hot-What%27s%20Hot-en_IN-responsivegrid_structure_top_whtshot_2");
              await page.evaluate(()=>{
                const currDate = new Date();
                const year = currDate.getFullYear();
                let month = currDate.getMonth();
                month += 1;
                let day = currDate.getDate();
                day = day < 10 ? '0'+ day : day;
                const date_ = `${day}//${month}//${year}`;
                const buy_button = document.querySelector('[data-id="buyButton_WH-1000XM4"]');
                buy_button.textContent = date_;
              });
              break;
      case 18:
          /**
           * 
           *   change the color of the footer.
           */
          await page.goto("https://www.philips.co.in/");
          await page.evaluate(()=>{
            const footer = document.querySelector(".p-footer");
            footer.style.backgroundColor = "Orange";
          });
          break;
        
      case 19:
          /**
           *   get the navbar logo
           */
          await page.goto("https://in.canon/en/consumer");
          await page.evaluate(()=>{
            const navbarlogo = document.querySelector(".navbar-brand > .logo");
            let logoUrl = navbarlogo.getAttribute("src");
            logoUrl = 'https://in.canon/'+logoUrl;
            alert(`logo Url ${logoUrl}`);
          });
          break;
      case 20:
        /**
         *   change desc text color
         */
        await page.goto("https://www.oppo.com/in/");
        await page.evaluate(()=>{
          const desc_ = document.querySelectorAll(".desc");
          desc_.forEach((item)=>{
              item.style.color= "orange";
          });
        });
       break;
      default:
        console.log("Check the readme to choose appropriate choice");
        await browser.close();
    }
      // await browser.close();
  })();


