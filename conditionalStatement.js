function  launchBrowser(browserName) {
    var browserName="chrome"
    if (browserName="chrome") {
        console.log("The browser name is", browserName)
        }else{
            console.log("The browser name other than", browserName)
        }
    
}
launchBrowser()


function  runTests( testType) {
    var runTests="testType"
    switch (runTests) {
        case "smoke":
            console.log("testType")
            break;
        case "Sanity":
            console.log("testType")
            break;
        case "regression":
            console.log("testType")
            break;
    default:
        console.log("smoke")
            break;
    }
    
}
runTests()