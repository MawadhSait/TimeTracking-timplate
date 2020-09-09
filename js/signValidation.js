$(document).ready(function() {
"use strict";
var passError = true,
emailError = true,
emailForgetError = true;

$('.error-pass').hide();
$('.error-sign-in').hide();
$('.forget-pass-alert').hide();



$('#sign-in-password').blur(function(){
if($(this).val().length <= 3){
$('.error-pass').show();
$(this).css('border','1px solid #f00');
$(this).parent().find('.error-pass').fadeIn(100);
passError = true;
}else{
$('.error-pass').hide();
$(this).css('border','1px solid #080');
$(this).parent().find('.error-pass').fadeOut(100);
passError = false;
}
});


var email =$('#sign-in-email').val().length;
$('#sign-in-email').blur(function(){
if($(this).val().length == ''){
$('.error-sign-in').show();
$(this).css('border','1px solid #f00');
$(this).parent().find('.error-sign-in').fadeIn(100);
emailError = true;
}else{
$('.error-sign-in').hide();
$(this).css('border','1px solid #080');
$(this).parent().find('.error-sign-in').fadeOut(100);
emailError = false;
}
});






$('#signIn-form').submit(function(e){
if(passError === true || emailError === true){
    window.location.href = "../src/timerSection.html";
}else{
console.log("Hello! I am an alert box!!");
// window.location.href = "https://www.tutorialrepublic.com/";
}
// window.location.href = "https://www.tutorialrepublic.com/";
})


// $('#forgte-pass-form').submit(function(e){

// if(emailForgetError === true){
// e.preventDefault();

// }else{
// console.log("Hello! I am an alert box!!");
// }
// })



});

