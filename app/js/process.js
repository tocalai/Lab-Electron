var edge = require('electron-edge');

// Initialize collapse button
var dotNetFunction = edge.func(__dirname + '/NetNative.dll');

exports.findPerson = function(input) {
    return dotNetFunction(input, true);   
    //return dotNetFunction(input, function (error, result)
    //{
    //    if(error)
    //    {
    //        console.log("Dotnet invoke error: " + error);
            //return;
    //    }

        //console.log("Dotnet invoke result: " + result);     
        //return result;
    //});
}