$('#page-home').length > 0 ? $('.page--home > .sections > .responsive-baner:nth-child(1), .page--home > .sections > .responsive-baner:nth-child(2),.page--home > .sections > .responsive-baner:nth-child(3)').wrapAll('<div id="apx_fullBannerGrid"/>') : false;
if($('#page-home').length > 0 ){
    $('#apx_fullBannerGrid + .collection-shelf + .banners-grid picture').each(function(){
        let title = $(this).attr('data-alt').split('|');
        let label = $("<label>"+ title[0]+ "<strong>"+ title[1] +"</strong></label>");
        let button = $('<a href="'+ $(this).closest('a').attr('href') +'">Confira <i class="fa fa-chevron-right"></i></a>');
        let div = $('<div class="apx_BannerGridCall"></div>');
        div.append(label);
        div.append(button);
        $(this).closest('.banner').append(div);
    })
}

