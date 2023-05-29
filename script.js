// this is to show hide divs depending on which type of quality was chosen

$(document).ready(function(){
    $("#firstquality").click(function(){
        $("#subscription_hd").show();
        $("#subscription_fhd").hide();
        $("#subscription_kkkk").hide();
    });
})
$(document).ready(function(){
    $("#secondquality").click(function(){
        $("#subscription_fhd").show();
        $("#subscription_hd").hide();
        $("#subscription_kkkk").hide();
    });
})
$(document).ready(function(){
    $("#mtb").click(function(){
        $("#subscription_kkkk").show();
        $("#subscription_fhd").hide();
        $("#subscription_hd").hide();
    });
})


// this is to show the device
$(document).ready(function(){
    $(".cta").click(function(){
        $(".Device").show();
    });
})

// this is to show the expert
$(document).ready(function(){
    $(".showExpert").click(function(){
        $(".Expert").show();
    });
})

// this is to show calendar
$(document).ready(function(){
    $(".showCalendar").click(function(){
        $(".Calendar").show();
    });
})

// if user clicks confirm this is to show user enter info page
$(document).ready(function(){
    $("#confirm").click(function(){
        $(".information").show();
    });
})





//getDate
//basically what this does is: it looks for today date and then it adds the date by one for every one of the 6boxes that we have, so this way we end with the possibility to choose from the next 6days.
//Day1
var today = new Date();
var dd = String(today.getDate()+1).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("D1").innerHTML = today;
//Day2
var today = new Date();
var dd = String(today.getDate()+2).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("D2").innerHTML = today;
//Day3
var today = new Date();
var dd = String(today.getDate()+3).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("D3").innerHTML = today;
//Day4
var today = new Date();
var dd = String(today.getDate()+4).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("D4").innerHTML = today;
//Day5
var today = new Date();
var dd = String(today.getDate()+5).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("D5").innerHTML = today;
//Day6
var today = new Date();
var dd = String(today.getDate()+6).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("D6").innerHTML = today;

//show confirmation or reject button
//1
$(document).ready(function(){
    $("#D1").click(function(){
        $(".confirmReject").show();
    });
})

//2
$(document).ready(function(){
    $("#D2").click(function(){
        $(".confirmReject").show();
    });
})
//3
$(document).ready(function(){
    $("#D3").click(function(){
        $(".confirmReject").show();
    });
})
//4
$(document).ready(function(){
    $("#D4").click(function(){
        $(".confirmReject").show();
    });
})
//5
$(document).ready(function(){
    $("#D5").click(function(){
        $(".confirmReject").show();
    });
})
//6
$(document).ready(function(){
    $("#D6").click(function(){
        $(".confirmReject").show();
    });
})

//booking confirmation
function myFunction() {
    alert("Thanks for choosing INSTANT TV, your appointment has been confirmed ✅. A confirmation email will be sent shortly.");
  }

// contact us button
  function myFunction2() {
    alert("You can contact us at : subscription@instanttv.com");
  }
  
  // support button
  function myFunction3() {
    alert("You can join our customer support at : +1 (888) 888-8888");
  }
  