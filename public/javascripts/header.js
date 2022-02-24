
/* File Name-header.js, Student name- Patel Krupa Manilal, Student ID:301246257, Course code- COMP229*/

jQuery(function() {



    $("a").removeClass("active");

    let targetClass = window.location.pathname.split('/')[1];

   

    if(targetClass===''){

        targetClass="home";

    }



    $("."+targetClass).addClass('active');


    if(sessionStorage.getItem("isLoggedIn")==='true'){

        $(".login").hide();

        $(".logout").show();

        $(".businessContact").show();

    }else{

        $(".login").show();

        $(".logout").hide();

        $(".businessContact").hide();

    }

});
