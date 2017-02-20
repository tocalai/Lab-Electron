// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
 var query = require("./js/process.js");
 var timeout;

$(document).ready(function() {
     $("#process").click(function () {

        // control the ui and progress bar
        switchEnableFormElements(false);
         
         // get the search name
         var searchName = $("#searchname").val();
         if(!searchName.trim()) {
             alert("Please fill the search name");
             $("#searchname").focus();

             switchEnableFormElements(true);
             return;
             //return false;
         }
  
         var filter = new Object();
         filter.SearchName = searchName;

         if($("#underten").prop("checked")) {
             filter.StartAge = 1;
             filter.EndAge = 10;
         }

         if($("#tentoforty").prop("checked")) {
             filter.StartAge = 10;
             filter.EndAge = 40;
         }

        if($("#overforty").prop("checked")) {
             filter.StartAge = 40;
             filter.EndAge = 100;
         }

         var inputJson = JSON.stringify(filter);         
         console.log(inputJson);

         // everythings was okay
         // invoke the query
         timeout = setTimeout(function() {doQuery(inputJson);}, 15000);

     });
});

function doQuery(inputJson) {
    var resultJson = inputJson;
    
    //sleep(5000);     
    // invoke the .Net libray
    resultJson = query.findPerson(inputJson);
    console.log(resultJson);

    // enable the ui
    // turn off the progress circle
    switchEnableFormElements(true);

    // append the result to result area
    $("#resultarea").val(resultJson);
    $('#resultarea').trigger('autoresize');
    $("#resultarea").focus();
 }

 function switchEnableFormElements(isEable) {
     $(".preloader-wrapper").toggleClass("active", !isEable);

     if(!isEable) {
         $("#resultarea").val('');
         clearTimeout(timeout);
     }

     $("#searchname").prop("disabled", !isEable);
     $("#underten").prop("disabled", !isEable);
     $("#tentoforty").prop("disabled", !isEable);
     $("#overforty").prop("disabled", !isEable);
     $("#process").prop("disabled", !isEable);
 }

 function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
