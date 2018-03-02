function nav(){
  var nav = $('nav').outerHeight(true);
  var header = $('#home').height();
  var navtop = header;
  var view = $(this)[0].scrollY;
  if(view>navtop){
    $('nav').addClass('nav-fixed');
  }else if(view<navtop-nav){
    $('nav').removeClass('nav-fixed');
  }
}



$(document).ready(function() {
  var skills;
  $.ajax({
    url: '/public/skills.txt',
    type: 'GET',
    dataType: 'text',
  })
  .done(function(data) {
    data = data.replace(/(\r\n|\n|\r)/gm,"");
    skills=JSON.parse(data);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
  });

  $("#loading").fadeOut('slow/1000/fast');
  nav();
  $(window).scroll(function(event) {
    nav();
  });
  $("nav").on('click', 'a', function(event) {
    event.preventDefault();
    var target = $($(this).attr('href'));
    var nav = $('nav').outerHeight()+10;
    $("html, body").stop(true, false).animate({scrollTop:target.offset().top-nav},{duration:1000},'swing')
  });

  $(".skill-box").on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    var target = $(this).children('.skill-img');
    var targetData = target.children('span').text();
    var index = target.attr('data-skill')-1;
    var modal = $(".modal-overlay");
    var modalHead = modal.children(".modal").children('.modal-head');
    var modalBody = modalHead.parent().children('.modal-body');
    modalHead.children('h1').text(targetData);
    modalBody.html(skills[index])
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
  $(".modal-close-btn").on('click', function(event){
    var modal = $('#modal-skill')
    modal.removeClass('active');
  });
});
