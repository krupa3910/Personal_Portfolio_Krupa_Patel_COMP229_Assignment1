jQuery(function() { 
    //Method to handle the submission of the form
    $( "#login" ).on( "click", function() {
    let username= $("#email").val();
    let password= $("#password").val();    

    //post method for contact submit
    $.post("/login",
    {
    username: username,
    password: password
    },
    function (data, status,xhr) {
        if(data==='businessPage'){
            //Redirecting to the home page
            window.location = "http://"+window.location.host+"/businessContact";
            }
            sessionStorage.setItem("isLoggedIn", true);
            $(".login").hide();
            $(".logout").show();                          
            });
            });
            $( ".logout" ).on( "click", function() {
            sessionStorage.setItem("isLoggedIn", false);        
            $(".login").show();
            $(".logout").hide();
            });
            });
         