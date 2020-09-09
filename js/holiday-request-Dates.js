
$(document).ready(function() {
    $("#allDayCheckbox").change(function() {
       $("#endDisabledTime").attr('disabled', !$("#endDisabledTime").attr('disabled'));
       $("#startDisabledTime").attr('disabled', !$("#startDisabledTime").attr('disabled'));
    });
 });
 $(function() {

$('#startingHoliday').daterangepicker({
"singleDatePicker": true,
"autoApply": true,
  autoUpdateInput: false,
  minDate: moment().subtract(0, 'days')
});

$('#startingHoliday').on('apply.daterangepicker', function(ev, picker) {
  $(this).val(picker.startDate.format('MM/DD/YYYY') );
  $('#endHoliday').daterangepicker({
    "singleDatePicker": true,
    "autoApply": true,
   autoUpdateInput: false,
   minDate: picker.endDate
});

$('#endHoliday').on('apply.daterangepicker', function(ev, picker) {
  $('#endHoliday').val(picker.endDate.format('MM/DD/YYYY'));
});
});
});
