function findMatching(driverNameArray, str){
    let listOfDriver = driverNameArray.filter(function (checkName) {return checkName.toLowerCase() === str.toLowerCase()});
    return listOfDriver;
}

function fuzzyMatch(driverNameArray, str){
    return driverNameArray.filter(function(checkName){return checkName.slice(0,2) === str.slice(0,2)});
}

function matchName(driverNameObj, str){
    return driverNameObj.filter(function(driver){
        return driver.name === str });
}