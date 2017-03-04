$('.tab-header').on('click', function() {
    var $this = $(this),
        $index = $this.index(),
        $tabs = $('.tabs');

    $tabs.removeClass('tab-active');
    $tabs.eq($index).addClass('tab-active');



})