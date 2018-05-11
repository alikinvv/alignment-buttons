
$(document).ready(function(){

    // FOR #1

    var tl = new TimelineMax();
    var trigger = true;
    $('.align-bar span').css('transform', 'translateX(' + $('.align__left').position().left + 'px');
    $('.align-bar').css('opacity', 1);
    $('.align-bar span:last-child').css('width', $('.align__left span:last-child').width()).css('opacity', 1);

    $('.item-1 .align').click(function() {
        var left = $(this).position().left,
            bar = $(this).find('span:last-child').width(),
            barLeft = $(this).find('span:last-child').position().left;

        trigger = false;
        if(!trigger) {
            tl.to('.align-bar span:nth-child(1)', 0.4, {x: left, ease: Back.easeOut.config(1.3)})
            .to('.align-bar span:nth-child(2)', 0.4, {x: left, ease: Back.easeOut.config(1.3)}, '-=0.25')
            .to('.align-bar span:nth-child(3)', 0.4, {x: barLeft, width: bar, ease: Back.easeOut.config(1.3)}, '-=0.25')
            trigger = true;
        }
        
    });

    // FOR #2

    $('.item-2 .align').click(function() {
        $('.item-2 .align').removeClass('active');
        $(this).addClass('active');
    });


});
