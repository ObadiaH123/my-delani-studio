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
    $(document).ready(function () {
        $("#work1").hover(
        function () {
            $("#work1 .solid-border").show();
        },
        function () {
            $("#work1 .solid-border").hide();
        },
        
        );
    });
        
    $(document).ready(function () {
        $("#work2").hover(
        function () {
            $("#work2 .solid-border").show();
        },
        function () {
            $("#work2 .solid-border").hide();
        },
        
        );
    });
    
    $(document).ready(function () {
        $("#work3").hover(
        function () {
            $("#work3 .solid-border").show();
        },
        function () {
            $("#work3 .solid-border").hide();
        },
        
        );
    });
    
    $(document).ready(function () {
        $("#work4").hover(
        function () {
            $("#work4 .solid-border").show();
        },
        function () {
            $("#work4 .solid-border").hide();
        },
        
        );
    });
    
    $(document).ready(function () {
        $("#work5").hover(
        function () {
            $("#work5 .solid-border").show();
        },
        function () {
            $("#work5 .solid-border").hide();
        },
        
        );
    });
    $(document).ready(function () {
        $("#work6").hover(
        function () {
            $("#work6 .solid-border").show();
        },
        function () {
            $("#work6 .solid-border").hide();
        },
        
        );
    });
    $(document).ready(function () {
        $("#work7").hover(
        function () {
            $("#work7 .solid-border").show();
        },
        function () {
            $("#work7 .solid-border").hide();
        },
        
        );
    });
    $(document).ready(function () {
        $("#work8").hover(
        function () {
            $("#work8 .solid-border").show();    
    
        },
        function () {
            $("#work8 .solid-border").hide();
        }
        );
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