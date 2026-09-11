// constants
p1 = "p1"
p2 = "p2"
p1store = "p1store"
p2store = "p2store"
p1Fields = ["a", "b", "c", "d", "e", "f"]
p2Fields = ["g", "h", "i", "j", "k", "l"]
p1Prompt = "Player 1, enter a field from A to F > "
p2Prompt = "Player 2, enter a field from G to L > "

// stats
// index 0: total captures made
// index 1: sum of all capture yields
// subtract count from total to get amount truly captured
p1CaptureStats = [0, 0]
p2CaptureStats = [0, 0]
// p1CapturedCounter = 0
// p1CapturedYield = 0
// p2CapturedCounter = 0
// p2CapturedYield = 0

commandListPrompt = "Enter 'help' for a list of commands."
commandList = "show current board: 'show board' or exit menu: 'exit'"
// show capture count: 'capture count'

const createField = (marker, harvest, type, oppositeField, nextField) => ({
  marker,
  harvest,
  type,
  oppositeField,
  nextField
});

const createBoard = () => {
  let firstField = null;

  return {
    append(marker, harvest, type, opposite, next) {
      const newField = createField(marker, harvest, type, opposite, next);

      if (!firstField) {
        head = createField("l", 4, "field", null, null);
        return;
      }

      let currentField = firstField;
      while (currentField.nextField !== null) {
        currentField = currentField.nextField;
      }
      currentField.nextField = newField;

    },

    showBoard() {
      for (int i = 0)
        print(pointer.marker + " - " + str(pointer.harvest))
        pointer = pointer.nextCell
    }
  }
}

// marker
// harvest = 4
field = "field"
// opposite
// next
const board = createBoard();
board.append()
board.append("k", 4, field, null, lField)
