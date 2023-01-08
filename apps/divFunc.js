//internal imports
const config = require('../config/config.json')

//deck data
const riderwaite = require('./ref/riderwaite.json');
const futhark = require('./ref/futhark.json');
const ogham = require('./ref/ogham.json');

const decks = {
    'rw': riderwaite,
    'rider': riderwaite,
    'riderwaite': riderwaite,
    'futhark': futhark,
    'runes': futhark,
    'ogham': ogham
}

//spread data
const spreadIndex = require('./ref/spreads.json');

const positionNames = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth","sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth", "twenty-first"];

//functions
module.exports.deckCheck = function (deck) {
    var currentDeck;
    if (decks [deck] != undefined) {
        currentDeck = decks[deck];
        return currentDeck;
    } else {
        currentDeck = decks[fallback];
        return currentDeck;
    }
}

module.exports.checkBook = function (item, currentDeck) {
    try{
        var meaning = currentDeck[item];
        return meaning;
    } catch (err) {
        console.log(err);
    }
}

module.exports.getSpread = function (spread, spreadData) {
    try {
        let parsed = parseInt(spread,10);
        if (spreadIndex[spread] != undefined) {
            spreadData = spreadIndex[spread];
            return spreadData;
        } else if (parsed != 'NaN') {
            pullCount = parsed;
            spreadData = {
                "name": "Custom",
                "positions": positionNames,
                "pullCount": pullCount
            };
            return spreadData;
        } else {
            console.log('Cannot recognize card spread.');
            return;
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports.itemPull = function (hand, pullCount, currentDeck) {
    var activeDeck = JSON.parse(JSON.stringify(currentDeck.items));
    while (hand.length < pullCount) {
        var cardMax = activeDeck.length;
        var random = Math.floor(Math.random() * cardMax);
        var pull = activeDeck[random];
        activeDeck.splice(activeDeck.indexOf(pull), 1);
        if (currentDeck.reversals === "yes") {
            var coin = Math.floor(Math.random() * 2);
            if (coin == 1) {
                pull = `${pull} Reversed`;
            }
        }
        hand.push(pull);
    }
    activeDeck.length = 0;
    return hand;
}