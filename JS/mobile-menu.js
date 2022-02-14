$('document').ready(function(){
    $isMobileMenuActive = true;
    $('#mobile-menu').click(function(){

        if($isMobileMenuActive){
            $isMobileMenuActive = false;
            $('#main-container').hide(80);
            $('#nav__mobile').show(80);
            $('#nav__mobile').css('display', 'flex');
            
        }
        else {
            $isMobileMenuActive = true;
            $('#nav__mobile').hide(80);
            $('#main-container').show(80);
        }
        
        return false;
    });

    $('#mobile_nav_link a').click(function(){
        $isMobileMenuActive = true;
        $('#nav__mobile').hide(80);
        $('#main-container').show(80);
    });


});