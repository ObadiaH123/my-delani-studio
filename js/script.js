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
function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
  };
  
  $(document).ready(function(){
    $("form#delani-studio").submit(function(event){
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
  
      if (!$("input#name").val()){
        alert("Please enter your name!")
      }
      else if (!$("input#email").val()){
        alert("Please enter your email!");
      }
  
      if (!ValidateEmail($("input#email").val())) {
        alert("enter the email address!");
      }
      else if (!$("textarea#message").val()){
        alert("Please enter your message or comment!");
      }
      else{
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      
      $('form#delani-studio').get(0).reset();
      return false;
      
    });
  
  });
  
    //     // giving feedback to the customer
    // $("button").click(function () {
    //     var customer = document.getElementById('nameDetail').value;
    //     alert(' Dear ' + ' esteemed ' + customer + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    //     // omonge.preventDefault();
    // });
    // //    reset my form button
    // // $("button").on('click', function () {
    // //     $('form').each(function () {
    // //     this.reset();
    // //     });
    // // });