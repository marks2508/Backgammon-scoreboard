$(() => {
  console.log('JS loaded');
  const $submit = $('.submit');
  const $loser = $('.loser');

  $submit.on('click', (e) => {
    e.preventDefault();
    console.log('hello');
  });

  $loser.change(function() {
    const loser = $(this).find('option:selected');
    console.log(loser);
  });

});
