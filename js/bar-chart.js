$(document).ready(function() {
    "use strict";
    $('#week-summary-barchart').simpleBarGraph({
        data: [
      { key: 'السبت', value: 0 },
      { key: 'الجمعة', value: 0 },
      { key: 'الخميس', value: 3 },
      { key: 'الأربعاء', value: 5 },
      { key: 'الثلاثاء', value: 8 },
      { key: 'الإثنين', value: 7 },
      { key: 'الأحد', value: 10 }
],height: "450px",
        barsColor: '#92E0FE',
    });
    });
    
    