$(() => {
  console.log('JS loaded');
  const $submit = $('.submit');
  const $loser = $('.loser');
  const $winner = $('.winner');
  const $score = $('.score');

  const $markvmike = $('.markvmike');
  const $markveagle = $('.markveagle');
  const $markvelliot = $('.markvelliot');
  const $markvfelix = $('.markvfelix');
  const $markvwill = $('.markvwill');
  const $markvjules = $('.markvjules');

  const $mikevmark = $('.mikevmark');
  const $mikeveagle = $('.mikeveagle');
  const $mikevelliot = $('.mikevelliot');
  const $mikevfelix = $('.mikevfelix');
  const $mikevwill = $('.mikevwill');
  const $mikevjules = $('.mikevjules');

  const $eaglevmark = $('.eaglevmark');
  const $eaglevmike = $('.eaglevmike');
  const $eaglevelliot = $('.eaglevelliot');
  const $eaglevfelix = $('.eaglevfelix');
  const $eaglevwill = $('.eaglevwill');
  const $eaglevjules = $('.eaglevjules');

  const $elliotvmark = $('.elliotvmark');
  const $elliotvmike = $('.elliotvmike');
  const $elliotveagle = $('.elliotveagle');
  const $elliotvfelix = $('.elliotvfelix');
  const $elliotvwill = $('.elliotvwill');
  const $elliotvjules = $('.elliotvjules');

  const $felixvmark = $('.felixvmark');
  const $felixvmike = $('.felixvmike');
  const $felixveagle = $('.felixveagle');
  const $felixvelliot = $('.felixvelliot');
  const $felixvwill = $('.felixvwill');
  const $felixvjules = $('.felixvjules');

  const $willvmark = $('.willvmark');
  const $willvmike = $('.willvmike');
  const $willveagle = $('.willveagle');
  const $willvfelix = $('.willvfelix');
  const $willvwill = $('.willvwill');
  const $willvjules = $('.willvjules');

  const $julesvmark = $('.julesvmark');
  const $julesvmike = $('.julesvmike');
  const $julesveagle = $('julesveagle');
  const $julesvfelix = $('julesvfelix');
  const $julesvwill = $('.julesvwill');
  const $julesvjules = $('julesvjules');


  $winner.change(function() {
    const winner = $(this).find('option:selected').attr('id');
    console.log(winner);
  });

  $loser.change(function() {
    const loser = $(this).find('option:selected').attr('id');
    console.log(loser);
  });


  $submit.on('click', (e) => {
    e.preventDefault();
    const winner = $winner.val();
    const loser = $loser.val();
    const amount = parseInt($score.val());
    if (winner === 'Mark' && loser === 'Mike') {
      const markVsMikeScore = parseInt($markvmike.text());
      const mikeVsMarkScore = parseInt($mikevmark.text());
      console.log('Mark won and Mike lost');
      $markvmike.text(Math.abs(markVsMikeScore) + Math.abs(amount));
      $markvmike.css('color', 'lime');
      $mikevmark.text(Math.abs(mikeVsMarkScore) - Math.abs(amount));
      $mikevmark.css('color', 'red');
    } else if (winner === 'Mark' && loser === 'Eagle') {
      const markVsEagleScore = parseInt($markveagle.text());
      $markveagle.text(markVsEagleScore + amount);
      $markveagle.css('color', 'lime');
      $eaglevmark.text(markVsEagleScore - amount);
      $eaglevmark.css('color', 'red');
    } else if (winner === 'Mark' && loser === 'Elliot') {
      const markVsElliotScore = parseInt($markvelliot.text());
      $markvelliot.text(markVsElliotScore + amount);
      $markvelliot.css('color', 'lime');
      $elliotvmark.text(markVsElliotScore - amount);
      $elliotvmark.css('color', 'red');
    } else if (winner === 'Mark' && loser === 'Felix') {
      const markVsFelixScore = parseInt($markvfelix.text());
      $markvfelix.text(markVsFelixScore + amount);
      $markvfelix.css('color', 'lime');
      $felixvmark.text(markVsFelixScore - amount);
      $felixvmark.css('color', 'red');
    } else if (winner === 'Mark' && loser === 'Will') {
      const markVsWillScore = parseInt($markvwill.text());
      $markvwill.text(markVsWillScore + amount);
      $markvwill.css('color', 'lime');
      $willvmark.text(markVsWillScore - amount);
      $willvmark.css('color', 'red');
    } else if (winner === 'Mark' && loser === 'Jules') {
      const markVsJulesScore = parseInt($markvjules.text());
      $markvjules.text(markVsJulesScore + amount);
      $markvjules.css('color', 'lime');
      $julesvmark.text(markVsJulesScore - amount);
      $julesvmark.css('color', 'red');


    } else if (winner === 'Mike' && loser === 'Mark') {
      const mikeVsMarkScore = parseInt($mikevmark.text());
      $mikevmark.text(mikeVsMarkScore + amount);
      $mikevmark.css('color', 'lime');
      $markvmike.text(mikeVsMarkScore - amount);
      $markvmike.css('color', 'red');
    } else if (winner === 'Mike' && loser === 'Eagle') {
      const mikeVsEagleScore = parseInt($mikeveagle.text());
      $mikeveagle.text(mikeVsEagleScore + amount);
      $mikeveagle.css('color', 'lime');
      $eaglevmike.text(mikeVsEagleScore - amount);
      $eaglevmike.css('color', 'red');
    } else if (winner === 'Mike' && loser === 'Elliot') {
      const mikeVsScore = parseInt($mikevelliot.text());
      $mikevelliot.text(mikeVsScore + amount);
      $mikevelliot.css('color', 'lime');
      $elliotvmike.text(mikeVsScore - amount);
      $elliotvmike.css('color', 'red');
    } else if (winner === 'Mike' && loser === 'Felix') {
      const mikeVsFelixScore = parseInt($mikevfelix.text());
      $mikevfelix.text(mikeVsFelixScore + amount);
      $mikevfelix.css('color', 'lime');
      $felixvmike.text(mikeVsFelixScore - amount);
      $felixvmike.css('color', 'red');
    } else if (winner === 'Mike' && loser === 'Will') {
      const mikeVsWillScore = parseInt($mikevwill.text());
      $mikevwill.text(mikeVsWillScore + amount);
      $mikevwill.css('color', 'lime');
      $willvmike.text(mikeVsWillScore - amount);
      $willvmike.css('color', 'red');
    } else if (winner === 'Mike' && loser === 'Jules') {
      const mikeVsJulesScore = parseInt($mikevjules.text());
      $mikevjules.text(mikeVsJulesScore + amount);
      $mikevjules.css('color', 'lime');
      $julesvmike.text(mikeVsJulesScore - amount);
      $julesvmike.css('color', 'red');


    } else if (winner === 'Eagle' && loser === 'Mark') {
      const eagleVsMarkScore = parseInt($eaglevmark.text());
      $eaglevmark.text(eagleVsMarkScore + amount);
      $eaglevmark.css('color', 'lime');
      $markveagle.text(eagleVsMarkScore - amount);
      $markveagle.css('color', 'red');
    } else if (winner === 'Eagle' && loser === 'Mike') {
      const eagleVsMikeScore = parseInt($eaglevmike.text());
      $eaglevmike.text(eagleVsMikeScore + amount);
      $eaglevmike.css('color', 'lime');
      $mikeveagle.text(eagleVsMikeScore - amount);
      $mikeveagle.css('color', 'red');
    } else if (winner === 'Eagle' && loser === 'Elliot') {
      const eagleVsScore = parseInt($eaglevelliot.text());
      $eaglevelliot.text(eagleVsScore + amount);
      $eaglevelliot.css('color', 'lime');
      $elliotveagle.text(eagleVsScore - amount);
      $elliotveagle.css('color', 'red');
    } else if (winner === 'Eagle' && loser === 'Felix') {
      const eagleVsFelixScore = parseInt($eaglevfelix.text());
      $eaglevfelix.text(eagleVsFelixScore + amount);
      $eaglevfelix.css('color', 'lime');
      $felixveagle.text(eagleVsFelixScore - amount);
      $felixveagle.css('color', 'red');
    } else if (winner === 'Eagle' && loser === 'Will') {
      const eagleVsWillScore = parseInt($eaglevwill.text());
      $eaglevwill.text(eagleVsWillScore + amount);
      $eaglevwill.css('color', 'lime');
      $willveagle.text(eagleVsWillScore - amount);
      $willveagle.css('color', 'red');
    } else if (winner === 'Eagle' && loser === 'Jules') {
      const eagleVsJulesScore = parseInt($eaglevjules.text());
      $eaglevjules.text(eagleVsJulesScore + amount);
      $eaglevjules.css('color', 'lime');
      $julesveagle.text(eagleVsJulesScore - amount);
      $julesveagle.css('color', 'red');
    }


  });




});


// winner === '' && loser === ''
