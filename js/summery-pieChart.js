$(document).ready(function () {

    $('#emplyeePie').show();
    $('#projectPie').hide();
    
    $('#2').click(function(){
      $('#projectPie').hide();
      $('#emplyeePie').show();
    });
    $('#3').click(function(){
      $('#emplyeePie').hide();
      $('#projectPie').show();
    });
    let jchart1;
        $(function () {
            jchart1 = $("#projectPie").jChart({
                data: [
                    {
                        value: 75,
                        color: {
                            normal: '#E36A00',
                            active: '#E36A00',
                        },
                        draw: true, //false
                        push: true, //false
                    },
                    {
                        value: 25,
                        color: {
                            normal: '#06A893',
                            active: '#06A893',
                        },
                        order: 1
                    }
                ],
                appearance: {
                    type: 'donut',
                    subType: 'path',
                    baseColor: '#ddd',
                    radius: 125 / (2 * Math.PI),
                    gap: 0,
                    baseStrokeWidth: 0,
                    animated: true,
    
                    title: {
                        showSummary: false,
                    }
                }
            });
    
    
    
            jchart1 = $("#emplyeePie").jChart({
                data: [
                    
                    {
                        value: 75,
                        color: {
                            normal: '#C7AF14',
                            active: '#E36A00',
                        },
                        draw: true, //false
                        push: true, //false
                    },
                    
                ],
                appearance: {
                    type: 'donut',
                    subType: 'path',
                    baseColor: '#ddd',
                    radius: 125 / (2 * Math.PI),
                    gap: 0,
                    baseStrokeWidth: 0,
                    animated: true,
    
                    title: {
                        showSummary: false,
                    }
                }
            });
        });

});