// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('hs-card-counter', ['ionic', 'hs-card-counter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        var decks = [
            { name: 'heavy', id: 1 },
            { name: 'naxxroll', id: 2 },
            { name: 'handlock', id: 3 },
            { name: 'legendeath', id: 4 },
            { name: 'madness', id: 5 }
        ];

        var decklists = {
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
                { name: 'Mad Scientist',        cost: 2, count: 2 },
                { name: 'Aldor Peacekeeper',    cost: 3, count: 2 },
                { name: 'Divine Favor',         cost: 3, count: 1 },
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

        localStorage.setItem('decks', JSON.stringify(decks));

        for (var i = 0; i < decks.length; i++) {
            var deck = decks[i];
            var cards = decklists[deck.name];
            localStorage.setItem('deck-' + deck.id,
                JSON.stringify({ 'name': deck.name, 'cards': cards }));
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })

        .state('app.decks', {
            url: "/decks",
            views: {
                'menuContent' :{
                    templateUrl: "templates/decks.html",
                    controller: 'DecksCtrl'
                }
            }
        })

        .state('app.deck', {
            url: "/decks/:deck_id",
            views: {
                'menuContent' :{
                    templateUrl: "templates/deck.html",
                    controller: 'DeckCtrl'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/decks');
});

