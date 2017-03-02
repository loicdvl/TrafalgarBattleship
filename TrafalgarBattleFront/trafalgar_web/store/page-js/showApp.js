function showApps(){
/*________________________ AFFICHAGE APPS ________________________ */
        $('.section').each(function(){
            var nb;
            var apps = $(this).find('.appli') ;
            var size = apps.size() ;
            var buttonP = $(this).find('.plus');
            var buttonM = $(this).find('.moins');
            var screen = $(window).width() ;

            if( 767 < screen && screen < 991) nb=4 ;
            else if ( screen <= 767) nb=6 ;
            else nb=3 ;
            if(size<=nb) {
                apps.show();
                buttonP.hide();
                buttonM.hide();
            }
            else {
                var i=0, j=nb ;
                apps.slice(i,j).show();
                buttonM.hide();
                buttonP.click(function(){
                    buttonM.show();
                    if(j<=size){
                        i=j;
                        j=j+nb;
                        apps.slice(i,j).slideDown();
                    }
                    if(j>size) {
                        buttonP.hide();
                    }
                });
                buttonM.click(function(){
                    i=j;
                    j=j-nb;
                    apps.slice(j,i).slideUp();
                    buttonP.show();
                    if(j==nb) buttonM.hide();
                });
            }
        });
}
function openApp(){
    if(window.innerWidth < 767)  $('.panel-body > :not(.buttons)').on('click', function(){ window.location ='app.html'; });
}