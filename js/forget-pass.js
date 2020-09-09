$(document).ready(function() {
    "use strict";
    var passError = true;
   
    $('.forget-pass-alert').hide();
    
    
   
    
    
    $('#forget-password').blur(function(){
    if($(this).val().length == ''){
    $('.forget-pass-alert').show();
    $(this).css('border','1px solid #f00');
    $(this).parent().find('.forget-pass-alert').fadeIn(100);
    passError = true;
    }else{
    $('.forget-pass-alert').hide();
    $(this).css('border','1px solid #080');
    $(this).parent().find('.forget-pass-alert').fadeOut(100);
    passError = false;
    }
    });
    
    
    
    });
    
    