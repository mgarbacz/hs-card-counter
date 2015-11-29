(function() {

    'use strict';

    var decks = {
        slicendice: [
            { name: 'Backstab',                 cost: 0, count: 2 },
            { name: 'Preparation',              cost: 0, count: 2 },
            { name: 'Deadly Poison',            cost: 1, count: 2 },
            { name: 'Southsea Deckhand',        cost: 1, count: 1 },
            { name: 'Blade Flurry',             cost: 2, count: 2 },
            { name: 'Eviscerate',               cost: 2, count: 2 },
            { name: 'Sap',                      cost: 2, count: 2 },
            { name: 'Bloodmage Thalnos',        cost: 2, count: 1 },
            { name: 'Beneath the Grounds',      cost: 3, count: 1 },
            { name: 'Fan of Knives',            cost: 3, count: 1 },
            { name: 'Big Game Hunter',          cost: 3, count: 1 },
            { name: 'SI:7 Agent',               cost: 3, count: 2 },
            { name: 'Tinker\'s Sharpsword Oil', cost: 4, count: 2 },
            { name: 'Piloted Shredder',         cost: 4, count: 1 },
            { name: 'Violet Teacher',           cost: 4, count: 2 },
            { name: 'Antique Healbot',          cost: 5, count: 1 },
            { name: 'Azure Drake',              cost: 5, count: 2 },
            { name: 'Loatheb',                  cost: 5, count: 1 },
            { name: 'Sprint',                   cost: 7, count: 2 }
        ]
    };

    var cardTemplate = function(card, cardsRemaining) {
        var html =
            '<li class="card" data-drawn="0" data-count="' + card.count + '">' +
            '<span class="card-cost">' + card.cost + '</span>' +
            '<span class="card-name">' + card.name + '</span>' +
            '<img src="http://s3-us-west-2.amazonaws.com/hearthstats/cards/' +
            card.name.toLowerCase().replace(/[\s|'|:]/g, '-') + '.png">' +
            '<span>' + ( (card.count / cardsRemaining).toFixed(2) * 100) + '%</span></li>';

        return html;
    };

    var hasClass = function(element, className) {
        var selector = ' ' + className + ' ';
        return (' ' + element.className + ' ').indexOf(selector) >= 0;
    };

    var findParentByClass = function(element, className) {
        if (element === null)
            throw "Error: Class not found";

        else if (hasClass(element, className))
            return element;

        else
            return (findParentByClass(element.parentNode, className));
    };

    var cardUndrawn = function(event) {
        event.preventDefault();
        var card = findParentByClass(event.target, 'card');
        var drawn = card.dataset.drawn;
        var cardsRemaining = document.getElementById('cards-remaining');

        if (drawn > 0) {
            card.dataset.drawn = parseInt(card.dataset.drawn, 10) - 1;
            cardsRemaining.innerHTML = parseInt(cardsRemaining.innerHTML, 10) + 1;
        }

        if (card.dataset.drawn == 0) {
            card.removeEventListener('contextmenu', cardUndrawn);
        }
    };

    var cardDrawn = function(event) {
        var card = findParentByClass(event.target, 'card');
        var remaining = card.dataset.count - card.dataset.drawn;
        var cardsRemaining = document.getElementById('cards-remaining');

        if (event.button === 0 && remaining > 0) {
            card.dataset.drawn = parseInt(card.dataset.drawn, 10) + 1;
            cardsRemaining.innerHTML = parseInt(cardsRemaining.innerHTML, 10) - 1;
            card.addEventListener('contextmenu', cardUndrawn, false);
        }
    };

    var setupDeck = function(event) {
        var deck = decks[event.target.dataset.deck];
        var cardList = document.getElementById('card-list');
        var cardsRemaining = document.getElementById('cards-remaining');
        var cardTotal = 0;
        cardList.innerHTML = '';

        for (var i = 0; i < deck.length; i++) {
            var card = deck[i];

            var cardElement = document.createElement('li');
            cardList.appendChild(cardElement);
            cardElement.outerHTML = cardTemplate(card, cardsRemaining);

            cardTotal += card.count;

            cardList.children[i].addEventListener('click', cardDrawn, false);
        }

        cardsRemaining.innerHTML = cardTotal;
    };

    var deckSelectors = document.getElementsByClassName('deck-select');

    for (var i = 0; i < deckSelectors.length; i++)
        deckSelectors[i].addEventListener('click', setupDeck, false);

})();
