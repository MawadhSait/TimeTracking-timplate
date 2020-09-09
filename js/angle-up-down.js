$(document).ready(function () {

    $('button').click(function(){
        var ele = $('.icon-to-change');
        if(ele.hasClass('fa-angle-up')){
            ele.removeClass('fa-angle-up')
               .addClass('fa-angle-down')
        }
        else if(ele.hasClass('fa-angle-up')){
            ele.addClass('fa-angle-up')
               .removeClass('fa-angle-down')
        }

        else if(ele.hasClass('fa-angle-down')){
        ele.removeClass('fa-angle-down')
           .addClass('fa-angle-up')
    }
    else{
        ele.addClass('fa-angle-down')
           .removeClass('fa-angle-up')
    }

    

});




$('button').focusout(function(){
    var ele = $('.icon-to-change');
    if(ele.hasClass('fa-angle-up')){
        ele.removeClass('fa-angle-up')
           .addClass('fa-angle-down')
    }
    else if(ele.hasClass('fa-angle-up')){
        ele.addClass('fa-angle-up')
           .removeClass('fa-angle-down')
    }

    else if(ele.hasClass('fa-angle-down')){
    ele.removeClass('fa-angle-down')
       .addClass('fa-angle-up')
}
else{
    ele.addClass('fa-angle-down')
       .removeClass('fa-angle-up')
}



});
});