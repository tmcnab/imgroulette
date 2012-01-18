$().ready(function() {

    $('#reloadButton').click(function(e) {
        Imgur.fetch(35);
        $('ul li img').UIFlipSubview('right');
    });
    
    $('ul li img').live('click', function(e){
        $('ul li img').UIFlipSubview('right');
        $('#detailImg').attr('src', $(this).attr('src').replace("s.png",".png"));
        $('#urlImg').val($(this).attr('src'))
    });
        
    $('#detailImg').UIFlipSubview('right');

    Imgur.fetch(35);
    $('ul li img').UIFlipSubview('right');
});