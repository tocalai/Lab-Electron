 //var query = require("./js/process.js");
 
 $(document).ready(function() {
     //$('textarea').prop('readonly', true);
     //$("#progress").hide();

     $("#process").click(function () {

          //$(this).css("color", "red");
          //$("#process").html('<i class="material-icons right red">cloud</i>');
          switchEnableFormElements(true);
          $(".preloader-wrapper").toggleClass("active", true);

          //$("#process").css("color", "red");
          //$("#progresscol").html(innerHtml);
         
         // get the search name
         var searchName = $("#searchname").val();
         if(!searchName.trim()) {
             alert("Please fill the search name");
             $("#searchname").focus();

             switchEnableFormElements(false);
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
          
         
         // if anything goes well
         // invoke the query
         setTimeout(function() {doQuery(inputJson);}, 10);

         //return false;

     });
 });

 function doQuery(inputJson) {
    var resultJson = inputJson;
    
    sleep(5000);     
    // invoke the .Net libray
    //var resultJson = query.findPerson(inputJson);
    //console.log(resultJson);

    // turn off the progress circle
    switchEnableFormElements(false);


    // append the result to result area
    //$("#resultarea").val(resultJson);
    $("#resultarea").val(resultJson);
    $("#resultarea").focus();
 }

 function switchEnableFormElements(isEable) {
     $(".preloader-wrapper").toggleClass("active", isEable);

     $("#searchname").prop("disabled", isEable);
     $("#underten").prop("disabled", isEable);
     $("#tentoforty").prop("disabled", isEable);
     $("#overforty").prop("disabled", isEable);
     $("#process").prop("disabled", isEable);
 }

 function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}