//imports
const config = require('../config/config.json');
const divFunc = require('./divFunc.js');

//sample command: divbot pull 3 rw
module.exports = (args) => {
    try {
        //pull arg info
        let spread = args._[1];
        let currentDeck = divFunc.deckCheck(args._[2]);

        //parses deck info
        let itemLabel = currentDeck.itemLabel;

        //parse spread info
        let spreadData;
        spreadData = divFunc.getSpread(spread, spreadData);
        let positions = spreadData.positions;
        let pullCount = spreadData.pullCount;

        //pull and log results
        var hand = [];
        var positionName;
        hand = divFunc.itemPull(hand, pullCount, currentDeck);
        for (var i = 0; i < pullCount; i++) {
            var meaning = divFunc.checkBook(hand[i], currentDeck);
            if (pullCount == 1) { positionName = "pulled" } else { positionName = positions[i] };
            console.log(`The ${positionName} ${itemLabel} is ${hand[i]}.`);
            console.log(`Meaning: ${meaning}`);
        }
    } catch (err) {
        console.log(err);
    }
}