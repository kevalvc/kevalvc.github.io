applyNavigation();

function clickedIt() {
  console.log('sching!');
  if ($('.collapse.show').length == 1) {
    $('section').removeClass('new-sect-class');
  } else if ($('.collapse.show').length == 0) {
    $('section').addClass('new-sect-class');
    console.log("class removed");
  }
}

function applyNavigation() {
  // applyClickEvent();
  // applyNavigationFixForPhone();
  applyScrollSpy();
  applySmoothScrolling();
  // applyStickyNavigation();
}

// function applyClickEvent() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//
//     if ($($.attr(this, 'href')).length > 0) {
//       $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//       }, 400);
//     }
//     return false;
//   });
// }

// function applyNavigationFixForPhone() {
//   $('.navbar li a').click(function(event) {
//     $('.navbar-collapse').removeClass('in').addClass('collapse');
// }
//   });

function applySmoothScrolling() {
  $('a[href*=\\#]:not([href=\\#])').on('click', function() {
    if ($($.attr(this, 'href')).length > 0) {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
    }
  });
  $('.navbar-brand').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#top').offset().top
    }, 400);
  });
}

function applyScrollSpy() {
  $(window).on('activate.bs.scrollspy', function() {
    window.location.hash = $('.active').attr('href').replace('#', '/');
  });
}
