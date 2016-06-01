$(document).ready(function(){
        var moose = $('#moose');
    $(document).keydown(function (e) {
        var keyCode = e.keyCode || e.which,
        arrow = {left: 65, up: 87, right: 68, down: 83};
        switch (keyCode) {

            case arrow.left:
              if (moose.position().left > 9){
                $(moose).attr('src', 'moosewalk.gif');
                $(moose).animate({"left": "-=10px"}, "fast");
                $(moose).addClass('mirror');
            }
            break;

            case arrow.right:
              if (moose.position().left < 550){
                $(moose).attr('src', 'moosewalk.gif');
                $(moose).animate({"left": "+=10px"}, "fast");
                $(moose).removeClass('mirror');
              }
            break;

            case arrow.up:
              if (moose.position().top > 9){
                $(moose).attr('src', 'mooseback.png');
                $(moose).animate({"top": "-=10px"}, "fast");
              }
            break;

            case arrow.down:360
              if (moose.position().top < 360){
                $(moose).attr('src', 'moosefront.png');
                $(moose).animate({"top": "+=10px"}, "fast");
                }
            break;
      }
    });
    $(document).keyup(function() {
      if ($(moose).attr('src') === 'moosewalk.gif'){
        $(moose).attr('src', 'stand.png');
    }
    });

    function changeside(){
      $(moose).attr('src', 'stand.png');
    };

    function changefront(){
      $(moose).attr('src', 'moosefront.png');
    };

    function changeback(){
      $(moose).attr('src', 'mooseback.png');
    };

    $(document).keydown(function(e) {
    if (e.shiftKey && e.which == 65) {
      $(moose).attr('src', 'moosesideattack.png');
      setTimeout(changeside, 250);
    }
    else if (e.shiftKey && e.which == 68){
      $(moose).attr('src', 'moosesideattack.png');
      setTimeout(changeside, 250);
    }
    else if (e.shiftKey && e.which == 83){
      $(moose).attr('src', 'moosefrontattack.png');
      setTimeout(changefront, 250);
    }
    else if (e.shiftKey && e.which == 87){
      $(moose).attr('src', 'moosebackattack.png');
      setTimeout(changeback, 250);
    }
  });
});
