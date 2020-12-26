$('a.open-modal').click(function(event) {
    $(this).modal({
      fadeDuration: 250,
      closeClass: 'icon-remove'
    });
    return false;
  });