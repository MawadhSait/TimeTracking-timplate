
$(document).ready(function() {
    $("#1").append($("#2").html());
    $(document).ready(function(){
        $("#2").click(function(){
            $("#1").empty();
        $("#1").append($("#2").html());
        });
    
        $("#3").click(function(){
            $("#1").empty();
        $("#1").append($("#3").html());
        });

    });

    });