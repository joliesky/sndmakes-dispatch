$('#first').show();

$('.option').click(function() {
   var question = $(this).closest('article'),
   next = $(this).attr('data-link'),
   id = question.attr('id'),
   value = $(this).find('input').val();


  $(this).addClass('selected');
  $(question).find('.option').css('pointer-events', 'none').addClass('disable');
  $(question).find('.textarea').attr('readonly','readonly').addClass('disable');
  $('#' + next).show();

  if(next == 'email') {
    $('#first').hide();
    $('#yes').hide();
  }

});
