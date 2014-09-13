(function() {

    'use strict';

    var decks = {
        heavy: [
            { name: 'Innervate',            cost: 0, count: 2 },
            { name: 'Mark of the Wild',     cost: 2, count: 1 },
            { name: 'Wild Growth',          cost: 2, count: 2 },
            { name: 'Wrath',                cost: 2, count: 2 },
            { name: 'Healing Touch',        cost: 3, count: 1 },
            { name: 'Savage Roar',          cost: 3, count: 1 },
            { name: 'Earthen Ring Farseer', cost: 3, count: 2 },
            { name: 'Harvest Golem',        cost: 3, count: 2 },
            { name: 'Swipe',                cost: 3, count: 2 },
            { name: 'Keeper of the Grove',  cost: 3, count: 2 },
            { name: 'Sen\'jin Shieldmasta', cost: 4, count: 2 },
            { name: 'Druid of the Claw',    cost: 5, count: 2 },
            { name: 'Force of Nature',      cost: 6, count: 1 },
            { name: 'Sunwalker',            cost: 6, count: 2 },
            { name: 'The Black Knight',     cost: 6, count: 1 },
            { name: 'Ancient of Lore',      cost: 7, count: 2 },
            { name: 'Ancient of War',       cost: 7, count: 2 },
            { name: 'Cenarius',             cost: 9, count: 1 }
        ],
        naxxroll: [
            { name: 'Execute',              cost: 1, count: 2 },
            { name: 'Shield Slam',          cost: 1, count: 2 },
            { name: 'Whirlwind',            cost: 1, count: 2 },
            { name: 'Fiery War Axe',        cost: 2, count: 2 },
            { name: 'Armorsmith',           cost: 2, count: 2 },
            { name: 'Cruel Taskmaster',     cost: 2, count: 2 },
            { name: 'Unstable Ghoul',       cost: 2, count: 2 },
            { name: 'Shield Block',         cost: 3, count: 2 },
            { name: 'Acolyte of Pain',      cost: 3, count: 2 },
            { name: 'Frothing Berserker',   cost: 3, count: 2 },
            { name: 'Death\'s Bite',        cost: 4, count: 2 },
            { name: 'Loatheb',              cost: 5, count: 1 },
            { name: 'Sludge Belcher',       cost: 5, count: 2 },
            { name: 'Cairne Bloodhoof',     cost: 6, count: 1 },
            { name: 'Sylvanas Windrunner',  cost: 6, count: 1 },
            { name: 'Gorehowl',             cost: 7, count: 1 },
            { name: 'Grommash Hellscream',  cost: 8, count: 1 },
            { name: 'Ragnaros the Firelord',cost: 8, count: 1 }
        ],
        handlock: [
            { name: 'Soulfire',             cost: 0, count: 2 },
            { name: 'Mortal Coil',          cost: 1, count: 2 },
            { name: 'Power Overwhelming',   cost: 1, count: 1 },
            { name: 'Ancient Watcher',      cost: 2, count: 2 },
            { name: 'Ironbeak Owl',         cost: 2, count: 2 },
            { name: 'Sunfury Protector',    cost: 3, count: 2 },
            { name: 'Earthen Ring Farseer', cost: 3, count: 2 },
            { name: 'Hellfire',             cost: 4, count: 2 },
            { name: 'Shadowflame',          cost: 4, count: 1 },
            { name: 'Leeroy Jenkins',       cost: 4, count: 1 },
            { name: 'Twilight Drake',       cost: 4, count: 2 },
            { name: 'Faceless Manipulator', cost: 5, count: 1 },
            { name: 'Loatheb',              cost: 5, count: 1 },
            { name: 'Sludge Belcher',       cost: 5, count: 2 },
            { name: 'Siphon Soul',          cost: 6, count: 1 },
            { name: 'Sunwalker',            cost: 6, count: 2 },
            { name: 'Mountain Giant',       cost: 12, count: 2 },
            { name: 'Molten Giant',         cost: 20, count: 2 }
        ],
        madness: [
            { name: 'Avenge',               cost: 1, count: 1 },
            { name: 'Redemption',           cost: 1, count: 2 },
            { name: 'Repentance',           cost: 1, count: 1 },
            { name: 'Equality',             cost: 2, count: 2 },
            { name: 'Haunted Creeper',      cost: 2, count: 2 },
            { name: 'Loot Hoarder',         cost: 2, count: 1 },
            { name: 'Mad Scientist',        cost: 2, count: 2 },
            { name: 'Aldor Peacekeeper',    cost: 3, count: 2 },
            { name: 'Harvest Golem',        cost: 3, count: 2 },
            { name: 'Scarlet Crusader',     cost: 3, count: 2 },
            { name: 'Truesilver Champion',  cost: 4, count: 2 },
            { name: 'Consecration',         cost: 4, count: 2 },
            { name: 'Defender of Argus',    cost: 4, count: 2 },
            { name: 'Loatheb',              cost: 5, count: 1 },
            { name: 'Sludge Belcher',       cost: 5, count: 2 },
            { name: 'Sunwalker',            cost: 6, count: 2 },
            { name: 'Kel\'Thuzad',          cost: 8, count: 1 },
            { name: 'Tirion Fordring',      cost: 8, count: 1 }
        ],
        legendeath: [
            { name: 'Backstab',             cost: 0, count: 2 },
            { name: 'Deadly Poison',        cost: 1, count: 2 },
            { name: 'Undertaker',           cost: 1, count: 2 },
            { name: 'Blade Flurry',         cost: 2, count: 1 },
            { name: 'Eviscerate',           cost: 2, count: 2 },
            { name: 'Bloodmage Thalnos',    cost: 2, count: 1 },
            { name: 'Haunted Creeper',      cost: 2, count: 2 },
            { name: 'Loot Hoarder',         cost: 2, count: 2 },
            { name: 'Harvest Golem',        cost: 3, count: 2 },
            { name: 'SI:7 Agent',           cost: 3, count: 2 },
            { name: 'Baron Rivendare',      cost: 4, count: 1 },
            { name: 'Defender of Argus',    cost: 4, count: 2 },
            { name: 'Azure Drake',          cost: 5, count: 2 },
            { name: 'Loatheb',              cost: 5, count: 1 },
            { name: 'Sludge Belcher',       cost: 5, count: 2 },
            { name: 'Cairne Bloodhoof',     cost: 6, count: 1 },
            { name: 'Sylvanas Windrunner',  cost: 6, count: 1 },
            { name: 'The Black Knight',     cost: 6, count: 1 },
            { name: 'Ragnaros the Firelord',cost: 8, count: 1 }
        ]
    };

    var cardTemplate = function(card) {
        var html =
            '<li class="card" data-count="' + card.count + '">' +
            '<span class="card-cost">' + card.cost + '</span>' +
            '<span class="card-name">' + card.name + '</span>' +
            '<img src="http://s3-us-west-2.amazonaws.com/hearthstats/cards/' +
            card.name.toLowerCase().replace(/[\s|'|:]/g, '-') + '.png"></li>';

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
        var deckRemaining = document.getElementById('deck-remaining');

        card.dataset.count = parseInt(card.dataset.count, 10) + 1;
        deckRemaining.innerHTML = parseInt(deckRemaining.innerHTML, 10) + 1;

        card.removeEventListener('contextmenu', cardUndrawn);
    };

    var cardDrawn = function(event) {
        var card = findParentByClass(event.target, 'card');
        var remaining = card.dataset.count;
        var deckRemaining = document.getElementById('deck-remaining');

        if (event.button === 0 && remaining > 0) {
            card.dataset.count = parseInt(card.dataset.count, 10) - 1;
            deckRemaining.innerHTML = parseInt(deckRemaining.innerHTML, 10) - 1;
            card.addEventListener('contextmenu', cardUndrawn, false);
        }
    };

    var setupDeck = function(event) {
        var deck = decks[event.target.dataset.deck];
        var decklist = document.getElementById('card-list');
        var deckRemaining = document.getElementById('cards-remaining');
        decklist.innerHTML = '';
        deckRemaining.innerHTML = '0';

        for (var i = 0; i < deck.length; i++) {
            var card = deck[i];

            var cardElement = document.createElement('li');
            decklist.appendChild(cardElement);
            cardElement.outerHTML = cardTemplate(card);

            deckRemaining.innerHTML = parseInt(deckRemaining.innerHTML, 10) + card.count;

            decklist.children[i].addEventListener('click', cardDrawn, false);
        }
    };

    var deckSelectors = document.getElementsByClassName('deck-select');

    for (var i = 0; i < deckSelectors.length; i++)
        deckSelectors[i].addEventListener('click', setupDeck, false);

})();
