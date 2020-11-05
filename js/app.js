'use strict';

let keywordArray = [];

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

  //assign a class of "page1"
  //$creatureClone('imag').addClass('page1Class');

  // removing the class to make template render to page
  $creatureClone.attr('class', this.keyword);

  if (classSwitch === 0){
    $creatureClone.addClass('page1Class'); //added a class to all data from page1.json
  }

  if (classSwitch === 1){
    $creatureClone.addClass('page2Class'); //added a class to all data from page1.json
  }

  $('main').append($creatureClone);

  if(!keywordArray.includes(this.keyword)){

    keywordArray.push(this.keyword);
  }

}

function renderOptions() { //creates an option element for each keyword option and appending to the select

 
  $('#selectElement').empty();
  
  keywordArray.forEach( keywordOption => {

    let optionTag = $(`<option>${keywordOption}</option>`);

    $('#selectElement').append(optionTag);

  })

}

function userSelection() {

  renderOptions();

  $('select').on('change', function () {
    // console.log('keywordArray user selection:', keywordArray);
    // const keywordArray = ['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']
    keywordArray.forEach(newClass => {
      let classOn = '.' + newClass;
      $(classOn).show();
    });
    let src = $(this).find(':selected').text();
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
  Creatures.allCreatures = [];
  keywordArray = [];
  $.ajax('../data/page-1.json', ajaxSetting)
    .then(data => {
      data.forEach(hornInfo => {
        Creatures.allCreatures.push(new Creatures(hornInfo));
      });
      $('div').empty();
      Creatures.allCreatures.forEach(image => {
        $('main').append(image.render())
      })
      classSwitch = 0;
      userSelection();
    });

}

let classSwitch = 0;

Creatures.page2ReadJson = () => { //bring in data from page2.json
  //clear current pictures

  classSwitch = 1;

  $('.page1Class').hide();

  const ajaxSetting = { method: 'get', dataType: 'json' };

  Creatures.allCreatures = [];
  keywordArray = [];
  $.ajax('../data/page-2.json', ajaxSetting)
    .then(data => {
      data.forEach(hornInfoPage2 => {
        Creatures.allCreatures.push(new Creatures(hornInfoPage2));
      });
      $('div').empty();
      Creatures.allCreatures.forEach(image => {
        $('main').append(image.render())
      })

      userSelection();
    });
}

//click function that calls Creatures.page2ReadJson();

const buttonPage2Listener = () => {
  $('#page2').click(Creatures.page2ReadJson);

};

const buttonHomeListener = () => {
  
  $('#homeButton').click(Creatures.readJson);
  

};

buttonPage2Listener();
buttonHomeListener();

$(() => Creatures.readJson());
