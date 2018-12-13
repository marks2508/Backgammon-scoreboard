$(() => {
  console.log('JS loaded');
  const $submit = $('.submit');
  const $loser = $('.loser');
  const $winner = $('.winner');
  const $score = $('.score');

  let $markvmike = $('.markvmike');

  $submit.on('click', (e) => {
    e.preventDefault();
    console.log('submit clicked');
    const amount = parseInt($score.val());
    console.log(amount);
    let currentScore = parseInt($markvmike.text());
    $markvmike.text(currentScore + amount);

  });




  $loser.change(function() {
    const loser = $(this).find('option:selected').attr('id');
    console.log(loser);
  });

  $winner.change(function() {
    const winner = $(this).find('option:selected').attr('id');
    console.log(winner);
  });

});
