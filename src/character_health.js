export default function characterHealth(characters) {
  return characters.sort((character1, character2) => character2.health - character1.health);
}
