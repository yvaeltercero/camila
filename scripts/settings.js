const mq = window.matchMedia("(max-width: 992px)");

mq.addListener(handleMediaQuery);

function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    console.log('asd');
    $('#header-component').addClass('mobile-header');

    var selected = $('.settings-tab').find('.selected').find('a');

    selected.click(function(e) {
      $('#settings-tab').addClass("hide-on-med-and-down");
      $('#sections-tab').removeClass('hide-on-med-and-down');
    });

    $('.sections-tab').find('tr').on('click touchstart', function(e) {
      $('#sections-tab').addClass('hide-on-med-and-down');
      $('#form-tab').removeClass('hide-on-med-and-down');
    });
  } else {
    $('#header-component').removeClass('mobile-header');
  }
}

$(document).ready(function() {
  handleMediaQuery(mq);
});

$('#sections-back').on('click', function(e) {
  $('#settings-tab').removeClass('hide-on-med-and-down');
  $('#sections-tab').addClass('hide-on-med-and-down');
  $('#form-tab').addClass('hide-on-med-and-down');
});

$('#form-back').on('click', function(e) {
  $('#settings-tab').addClass('hide-on-med-and-down');
  $('#sections-tab').removeClass('hide-on-med-and-down');
  $('#form-tab').addClass('hide-on-med-and-down');
});
