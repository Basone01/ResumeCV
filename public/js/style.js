$(document).ready(function() {

  $(window).scroll(function(event) {
    var nav = $('nav').outerHeight(true);
    var header = $('#home').height();
    var navtop = header-nav;
    var view = $(this)[0].scrollY;
    console.log(view);
    if(view>navtop){
      $('nav').addClass('nav-fixed');
    }else{
      $('nav').removeClass('nav-fixed');
    }
  });
  $("nav").on('click', 'a', function(event) {
    event.preventDefault();
    var target = $($(this).attr('href'));
    var nav = $('nav').outerHeight()+20;
    $('body').stop(true, false).animate({scrollTop:target.offset().top-nav},{duration:1000},'swing')
  });

  $(".content-skills").on('click', '.skill-img', function(event) {
    event.preventDefault();
    /* Act on the event */
    var targetData = $(this).children('span').text();;
    var modal = $(".modal-overlay");
    var modalHead = modal.children(".modal").children('.modal-head');
    var modalBody = modalHead.parent().children('.modal-body');
    modalHead.children('h1').text(targetData);
    modalBody.text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    modal.addClass('active');
  });

  $("#modal-skill").on('click', function(event) {
    event.preventDefault();
    var targetID = $(event.target).attr('id');
    var modal = $(this)
    if(targetID=='modal-skill'){
      modal.removeClass('active');
    }
  });
  $("#modal-skill").on('click', function(event){
    event.preventDefault();
    var modal = $('#modal-skill')
    modal.removeClass('active');
  });
});
