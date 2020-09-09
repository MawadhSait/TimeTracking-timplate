$(document).ready(function() {
    $('[type="file"]').ezdz({
        text: '  <div class="p-2"><i class="fas fa-paperclip " style="font-size: 15px;"><i class="choose-file" style="font-weight: 20px; 	font-family: Tajawal-Medium;color: #CF1240!important;font-size: 20px;"> اختر </i><i style="font-size: 20px; font-family: Tajawal-Medium;">ملف لتحميله</i> </i> </div>',
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
    
    