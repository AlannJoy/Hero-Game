// Write your JS here

const hero = {
  name: '',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: '',
    damage: 2
  }
};

function rest(person) {
  person.health = 10;
  return person;
}
function pickUpItem() {}
function equipWeapon() {}

document.getElementById('inn').addEventListener('click', function(event) {
  event.preventDefault();
  hero.health = 10;
});

document.getElementById('dagger').addEventListener('click', function(event) {
  event.preventDefault();
  push.weapon.object
});