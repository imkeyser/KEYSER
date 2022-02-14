$('document').ready(function(){

    $isMobileMenuActive = true;

    $('#mobile-menu').click(function(){

        if($isMobileMenuActive){
            $isMobileMenuActive = false;
            $('main').hide(80);
        }
        else {
            $isMobileMenuActive = true;
            $('main').show(80);
        }
        
        return false;
    });
});