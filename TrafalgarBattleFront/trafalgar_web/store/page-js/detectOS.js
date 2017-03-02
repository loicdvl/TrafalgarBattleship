
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ) return 'iOS';
  else if ( userAgent.match( /Android/i ) ) return 'Android';
  else return 'unknown';
}
$('.myModal').each(function(){
    switch(getMobileOperatingSystem()) {
        case('iOS') :
            $('#myModal .modal-body:last-child').css('display','none');
            break ;
        case('Android') :
            $('#myModal .modal-body:first-child').css('display','none');
            break ;
        default : break ;
    }
});