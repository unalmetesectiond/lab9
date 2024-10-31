$(document).ready(function() {
    $('.pick_button').click(function() {
        var cate = $(this).data('category');
        
        $('.pick_button').removeClass('active');
        $(this).addClass('active');
        
        $('.anime_img').hide();
        $('.anime_img').each(function() {
            if ($(this).data('category') === cate) {
                $(this).fadeIn();
            }
        });
    });

    $('.anime_img img').click(function() {
        var img_src = $(this).attr('src');
        $('#l_img').attr('src', img_src);
        $('#lightbox').fadeIn();
    });

    $('#closing').click(function() {
        $('#lightbox').fadeOut();
    });

    $('#lightbox').click(function(event) {
        if (event.target.id === 'lightbox') {
            $('#lightbox').fadeOut();
        }
    });
});
