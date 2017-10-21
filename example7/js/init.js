$(window).on('beforeunload'  , function () {
   var c = confirm('are you sure');

   if (c){
       return true;
   }else {
       return false;
   }
});