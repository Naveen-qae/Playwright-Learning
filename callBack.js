let browser ="Chrome";
function checkBrowserVersion(cb) {
    setTimeout(()=>cb(browser),2000);
}
function callBack(version) {
    console.log(version);
}
checkBrowserVersion(callBack)