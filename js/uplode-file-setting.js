$(document).ready(function() {
    $('[type="file"]').ezdz({
        text: '  <div class="pt-5"><i class="fa fa-camera fa-lg " aria-hidden="true"><div class="pt-3" style="font-family: Tajawal-Medium;"> أدرج صورة</div> <div class="pt-3" style="font-family: Tajawal-Medium;"> أو اسحب</div></i>  </div> ',
        validators: {
            maxWidth:  600,
            maxHeight: 400,
            maxSize: 1000000
        },
        reject: function(file, errors) {
            if (errors.mimeType) {
                alert(file.name + ' must be an image.');
            }
    
            if (errors.maxWidth) {
                alert(file.name + ' must be width:600px max.');
            }
    
            if (errors.maxHeight) {
                alert(file.name + ' must be height:400px max.');
            }
        }
    });
    
    
    
    });
    
    