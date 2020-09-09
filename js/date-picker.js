// // this file for date picker 
// // statistics Pages

// $(function() {
       
//     var start = moment().subtract(29, 'days');
//     var end = moment();

//     function cb(start, end) {
//         $('#reportrange span').html(start.format('D/M/YYYY') + ' - ' + end.format('D/M/YYYY'));
//     }

//     $('#reportrange').daterangepicker({
//        opens:'center',
//         startDate: start,
//         endDate: end,
       
//         ranges: {
//            'اليوم': [moment(), moment()],
//            'الأمس': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//            'هذا الأسبوع': [moment().subtract(6, 'days'), moment()],
//            'الأسبوع الماضي ': [moment().subtract(14, 'days'), moment().subtract(7, 'days')],
//            'هذا الشهر ': [moment().startOf('month'), moment().endOf('month')],
//            'الشهر الماضي': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
//            'هذه السنة ': [moment().startOf('year'), moment().endOf('year')],
//            'السنة الماضية': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')]
//         },
//         "showCustomRangeLabel":false,
//         "alwaysShowCalendars":true,
        
//     }, cb);

//     cb(start, end);

// });


$(function() {

    $('#reportrange').daterangepicker({
        autoUpdateInput: false,
        autoApply: true,
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
    
    $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });
    
    $('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
    
    });
