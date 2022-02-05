jQuery(function() {

 

    $( "#submit_contact" ).on( "click", function() {

        let name= $("#name").val();

        let email= $("#email").val();

        let subject= $("#subject").val();

        let message= $("#message").val();
   
        $.post("/submitContact",
         {
            name: name,
            email:email,
            subject:subject,
            message:message
         },

         function (data, status) {

            console.log(data);

         });

 

    });

 

});