$(function(){

    $("#col-md-4-1").click(function(){
        $(".hidden1").fadeToggle(2000) 
        $(".img1").slideToggle(2000)       
    });

    $("#col-md-4-2").click(function(){
        $(".hidden2").fadeToggle(1600)
        $(".img2").slideToggle(1600)
    });
    
    $("#col-md-4-3").click(function(){
        $(".hidden3").fadeToggle(1600)
        $(".img3").slideToggle(1600)
    });
});

// portfolio js
$("#col-1").hover(function() {
    $("#text1").fadeTo("slow",1);
    $("#photo1").fadeTo("slow",0.4);
    },function() {
      $("#text1").fadeTo("slow",0);
      $("#photo1").fadeTo("slow",1);
    });
  $("#col-2").hover(function() {
    $("#text2").fadeTo("slow",1);
    $("#photo2").fadeTo("slow",0.4);
    },function() {
      $("#text2").fadeTo("slow",0);
      $("#photo2").fadeTo("slow",1);
    });
  $("#col-3").hover(function() {
    $("#text3").fadeTo("slow",1);
    $("#photo3").fadeTo("slow",0.4);;
    },function() {
      $("#text3").fadeTo("slow",0);
      $("#photo3").fadeTo("slow",1);
    });
  $("#col-4").hover(function() {
    $("#text4").fadeTo("slow",1);
    $("#photo4").fadeTo("slow",0.4);
    },function() {
      $("#text4").fadeTo("slow",0);
      $("#photo4").fadeTo("slow",1);
    });
  $("#col-5").hover(function() {
    $("#text5").fadeTo("slow",1);
    $("#photo5").fadeTo("slow",0.4);
    },function() {
      $("#text5").fadeTo("slow",0);
      $("#photo5").fadeTo("slow",1);
    });
  $("#col-6").hover(function() {
    $("#text6").fadeTo("slow",1);
    $("#photo6").fadeTo("slow",0.4);
    },function() {
      $("#text6").fadeTo("slow",0);
      $("#photo6").fadeTo("slow",1);
    });
  $("#col-7").hover(function() {
    $("#text7").fadeTo("slow",1);
    $("#photo7").fadeTo("slow",0.4);
    },function() {
      $("#text7").fadeTo("slow",0);
      $("#photo7").fadeTo("slow",1);
    });
  $("#col-8").hover(function() {
    $("#text8").fadeTo("slow",1);
    $("#photo8").fadeTo("slow",0.4);
    },function() {
      $("#text8").fadeTo("slow",0);
      $("#photo8").fadeTo("slow",1);
    });
// validation of form
        $("form#form").on('submit',function(event){
            event.preventDefault();
            let name = $("input#name").val();
            let email = $("input#email").val();
            let message = $("textarea#message").val();

            if ($("input#name").val() && $("input#email").val()){
                alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly...cheers");
            }
            else {
                alert("Please provide your correct name and email!");
            }

        });