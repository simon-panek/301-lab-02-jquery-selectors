'use strict';



function Creatures(creature) {

  this.image_url = creature.image_url;
  this.title = creature.title;
  this.description = creature.description;
  this.keyword = creature.keyword;
  this.horns = creature.horns;

}

// getting template section from HTML, cloning it, and appending to main section
Creatures.prototype.render = function () {
  let $creatureClone = $('<div></div>').clone();
  $creatureClone.html($('#photo-template').html());
  // $('main').append($creatureClone);

  // getting a cloned element's specific tags and providing text/url
  $creatureClone.find('h2').text(this.title);
  $creatureClone.find('img').attr('src', this.image_url);
  $creatureClone.find('p').text(this.description);
  // removing the class to make template render to page
  $creatureClone.attr('class', this.keyword);
  $('main').append($creatureClone);
}
function userSelection() {
  $('select').on('change', function () {
    const keywordArray = ['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']
    keywordArray.forEach(newClass => {
      let classOn = '.' + newClass;
      $(classOn).show();
    });
    let src = $(this).find(':selected').attr('value');
    keywordArray.forEach(match => {
      if (src !== match) {
        let check = '.' + match;
        $(check).hide();
      }
    });
  })

}

Creatures.allCreatures = [];

Creatures.readJson = () => {
  const ajaxSetting = { method: 'get', dataType: 'json' };

  $.ajax('../data/page-1.json', ajaxSetting)
    .then(data => {
      data.forEach(hornInfo => {
        Creatures.allCreatures.push(new Creatures(hornInfo));
      });
      Creatures.allCreatures.forEach(image => {
        $('main').append(image.render())
      })
      // console.log(animals);
      // animals.render();
    });
  userSelection();
}

$(() => Creatures.readJson());
