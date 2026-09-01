/* import {chromium,test} from "@playwright/test"
test('browser launch', async () => {
const browser = await chromium.launch({channel:"msedge", headless:false})
const context =await browser.newContext()
const page =await context.newPage()   
await page.goto("https://leaftaps.com/opentaps/control/main") 
await browser.close();
})  */



import {chromium,test,webkit} from "@playwright/test"
test('launchRedBus', async () => {
const edgeBrowser = await chromium.launch({channel:"msedge", headless:false})
const browsercontext =await edgeBrowser.newContext()
const edgepage =await browsercontext.newPage()   
await edgepage.goto("https://www.redbus.in/") 
let redBusTitle =await edgepage.title();
console.log("Redbus URL"+ edgepage.url());
console.log("Redbus Title"+ redBusTitle);

const webkitBrowser = await webkit.launch({headless:false})
const webkitcontext =await webkitBrowser.newContext()
const webkitpage =await webkitcontext.newPage()   
await webkitpage.goto("https://www.flipkart.com/") 
let flipkartTitle =await webkitpage.title();
console.log("Flipkart Title"+ await webkitpage.title());
console.log("Flipkart URL"+ webkitpage.url());


})

