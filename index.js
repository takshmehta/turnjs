$("#flipbook").turn({
    width: 700,
    height: 740,
    autoCenter: true
});


$(window).bind('keydown', function(e){
    if (e.keyCode==37)
    $('#flipbook').turn('previous');
    else if (e.keyCode==39)
    $('#flipbook').turn('next');
    });