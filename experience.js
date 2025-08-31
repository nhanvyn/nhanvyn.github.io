$(function () {
  $(document).on('click keydown', '.experience .header', function (e) {
    if (e.type === 'keydown' && !(e.key === 'Enter' || e.key === ' ')) return;

    const $card = $(this).closest('.experience');
    const expanded = !$card.hasClass('expanded');

    $card.toggleClass('expanded', expanded);
    $(this).attr('aria-expanded', expanded);
    $card.find('.bullets').prop('hidden', !expanded);
    $card.find('.chevron').toggleClass('rotated', expanded);
  });
});