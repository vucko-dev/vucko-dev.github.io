$(document).ready(function(){
	  function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}
	var $window=$(window);
	$window.on('scroll',function(){
		var top=$('#top').offset().top;
		var gallery=$('#gallery').offset().top;
		var about=$('#about').offset().top;
		var contact=$('#contact').offset().top;
		var current=$window.scrollTop();
		current+=1;
		if(current<gallery){
			$('#g').removeClass('active');
			$('#a').removeClass('active');
			$('#c').removeClass('active');
		}else if(current<about){
			$('#g').addClass('active');
			$('#a').removeClass('active');
			$('#c').removeClass('active');
		}else if(current<contact){
			$('#g').removeClass('active');
			$('#a').addClass('active');
			$('#c').removeClass('active');
		}else{
			$('#g').removeClass('active');
			$('#a').removeClass('active');
			$('#c').addClass('active');
		}
	});
	$("#a").click(function(){
         $('html, body').animate({
             scrollTop: $('#about').offset().top
        }, 'slow');
    });
    $("#g").click(function(){
         $('html, body').animate({
             scrollTop: $('#gallery').offset().top
        }, 'slow');
    });
    $("#c").click(function(){
         $('html, body').animate({
             scrollTop: $('#contact').offset().top
        }, 'slow');
    });
    $("#t").click(function(){
         $('html, body').animate({
             scrollTop: $('#top').offset().top
        }, 'slow');
    });
    $('#dugme').on('click',function(event){
    	event.preventDefault();
    	var namev=$('#imeiprezime').val()!=0;
    	var numv=$('#brojtelefona').val()!=0;
    	var emailv= $('#email').val();
    	var textv=$('#poruka').val()!=0;
    	if(!namev||!numv||!emailv||!textv){
    		if(!namev){
    			$('#imeiprezime').addClass('error');
    		}else{
    			$('#imeiprezime').removeClass('error');
    		}
    		if(!numv){
    			$('#brojtelefona').addClass('error');
    		}else{
    			$('#brojtelefona').removeClass('error');
    		}
    		if(!IsEmail(emailv)){
    			$('#email').addClass('error');
    		}else{
    			$('#email').removeClass('error');
    		}
    		if(!textv){
    			$('#poruka').addClass('error');
    		}else{
    			$('#poruka').removeClass('error');
    		}
    	}else{
    	    $('#imeiprezime').removeClass('error');
    		$('#brojtelefona').removeClass('error');
    		$('#email').removeClass('error');
    		$('#poruka').removeClass('error');
    		var emailFromVal=$('#email').val();
    		var subjectVal=$('#imeiprezime').val();
    		var messageVal=$('#poruka').val();
    		$.post("sendemail.php",
  			 { emailTo: "davidvuckovucenovic@gmail.com", emailFrom: emailFromVal, subject: subjectVal, message: messageVal },
   			 function(data){
  					$('#dugme').addClass('passed');
  			});
 }			
    	});	
    });



