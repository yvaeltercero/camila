$('ul#subscription-table > li').first().hide();
$('#show-search-form').on('click', function(e) {
  $('#search-form').slideToggle();
});
$('#add-folder').html('<i class="material-icons">add</i>');
$('.listbutton.groupactions').html('<i class="material-icons">settings</i>')

const mq = window.matchMedia("(max-width: 992px)");
mq.addListener(handleMediaQuery);

function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    $('#header-component').removeClass('mobile-header');

    var selected = $('.settings-tab').find('.selected').find('a');
    selected.click(function(e) {
      $('#settings-tab').addClass("hide-on-med-and-down");
      $('#sections-tab').removeClass('hide-on-med-and-down');
    });

    $('.sections-tab').find('li').on('click', function(e) {
      $('#sections-tab').addClass('hide-on-med-and-down');
      $('#form-tab').removeClass('hide-on-med-and-down');
    });

    var add_button = $('#add-folder');
    add_button.click(function(e) {
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
