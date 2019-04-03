(function ($) {
  'use strict';
  $(function () {
    var style = getComputedStyle(document.body);
    if ($('#calendar').length) {
      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        locale: 'en',
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
          'Thursday', 'Friday', 'Saturday'
        ],
        dayNamesShort: ['SUN', 'MON', 'TUE', 'WED', 'THUS', 'FRI', 'SAT'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
          'August', 'September', 'October', 'November', 'December'
        ],
        monthNamesShort: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
          'August', 'September', 'October', 'November', 'December'
        ],
        defaultDate: '2019-03-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [        ]
      })
    }
  });
})(jQuery);