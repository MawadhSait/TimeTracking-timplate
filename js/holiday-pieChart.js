
$(document).ready(function() {
let optionsHoliday =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '2s',
    easing: 'ease-in',
    data:{
        percent:100,
        actual:100,
        unit:""
    },
    enableHover:true,
    direction: "cw"
}
let optionsConsumedHoliday =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '2s',
    easing: 'ease-in',
    data:{
        percent:90,
        actual:100,
        unit:""
    },
    enableHover:true,
    direction: "cw"
}
let optionsReamaingHoliday =  {
    delay: '.1s',
    textDuration: '.1s',
    chartDuration: '2s',
    easing: 'ease-in',
    data:{
        percent:10,
        actual:100,
        unit:""
    },
    enableHover:true,
    direction: "cw"
}

var chart = new PercentChart("holiday",optionsHoliday);
var chart = new PercentChart("consumed-holiday",optionsConsumedHoliday);
var chart = new PercentChart("reamaing-holiday",optionsReamaingHoliday);

    
    });
    
    