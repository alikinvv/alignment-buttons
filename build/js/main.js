
$(document).ready(function(){

    // FOR #1

    var tl = new TimelineMax();
    var trigger = true;
    $('.item-1 .align-bar span').css('transform', 'translateX(' + $('.item-1 .align__left').position().left + 'px');
    $('.item-1 .align-bar').css('opacity', 1);
    $('.item-1 .align-bar span:last-child').css('width', $('.item-1 .align__left span:last-child').width()).css('opacity', 1);

    $('.item-1 .align').click(function() {
        var left = $(this).position().left,
            bar = $(this).find('span:last-child').width(),
            barLeft = $(this).find('span:last-child').position().left;

        trigger = false;
        if(!trigger) {
            tl.to('.item-1 .align-bar span:nth-child(1)', 0.4, {x: left, ease: Back.easeOut.config(1.3)})
            .to('.item-1 .align-bar span:nth-child(2)', 0.4, {x: left, ease: Back.easeOut.config(1.3)}, '-=0.35')
            .to('.item-1 .align-bar span:nth-child(3)', 0.4, {x: barLeft, width: bar, ease: Back.easeOut.config(1.3)}, '-=0.35')
            trigger = true;
        }
        
    });

    // FOR #2

    $('.item-2 .align').click(function() {
        $('.item-2 .align').removeClass('active');
        $(this).addClass('active');
    });

    // FOR #3
    $('.item-3 .align-bar').css('opacity', 1);
    $('.item-3 .align-bar span.line-1').css('left', $('.item-3 .align.active span.line-1').position().left);
    $('.item-3 .align-bar span.line-2').css('left', $('.item-3 .align.active span.line-2').position().left);
    $('.item-3 .align-bar span.square-1').css('left', $('.item-3 .align.active span.square-1').position().left);
    $('.item-3 .align-bar span.square-2').css('left', $('.item-3 .align.active span.square-2').position().left);

    $('.item-3 .align').click(function() {
        $('.item-3 .align-bar span.line-1').animate({
            left: $(this).find('span.line-1').position().left
        });
        $('.item-3 .align-bar span.line-2').animate({
            left: $(this).find('span.line-2').position().left
        });
        $('.item-3 .align-bar span.square-1').animate({
            left: $(this).find('span.square-1').position().left
        });
        $('.item-3 .align-bar span.square-2').animate({
            left: $(this).find('span.square-2').position().left
        });

        $('.item-3 .align-bar').animate({
            left: $(this).position().left
        });
    });

});
