$(document).ready(function() {
    "use strict";
    $(function() {

        $('input[name="datefilter"]').daterangepicker({
            autoUpdateInput: false,
            autoApply: true,
            opens:'center',
            ranges: {
                   'اليوم': [moment(), moment()],
                   'الأمس': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                   'هذا الأسبوع': [moment().subtract(6, 'days'), moment()],
                   'الأسبوع الماضي ': [moment().subtract(14, 'days'), moment().subtract(7, 'days')],
                   'هذا الشهر ': [moment().startOf('month'), moment().endOf('month')],
                   'الشهر الماضي': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
                   'هذه السنة ': [moment().startOf('year'), moment().endOf('year')],
                   'السنة الماضية': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')]
                },
                "showCustomRangeLabel":false,
                "alwaysShowCalendars":true,
        });
        
        $('#calender').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
        });
        
        $('#calender').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });
        
        });
    
    
    });
    
    