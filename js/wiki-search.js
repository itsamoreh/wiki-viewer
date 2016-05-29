$(document).ready(function() {
  $('input').keydown(function(e) {
    if(e.keyCode === 13) {
      // do whatever you want with the value
      console.log($(this).val());
    }
  });
});
