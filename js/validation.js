 (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('myForm');

        // check match

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            	alert('Неправильный email или не заполнено поле!');
            	$('#myModal').modal('hide');
              event.preventDefault();
              event.stopPropagation();
            }else{
            	alert('Правильный email!');
            }
            var email = $("#myCheck").val();
            if(email = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)"){
            form.classList.add('was-validated');
              $("#validate").addClass("error");
              event.preventDefault();
              event.stopPropagation(); 
            }
            else{
            $("#validate").removeClass("error");
            form.classList.add('was-validated');
            }
           
          }, false);
        });
      }, false);

    })();

