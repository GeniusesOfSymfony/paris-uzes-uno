var rules = {
    score: [
        //118
        {
            name: '118',
            trigger: function(roundScore, player){
                return player.totalScore == 118;
            },
            apply: function(playerId, player, round) {
                return {
                    factorScore: 100,
                    factorType: 'addition',
                    factorSign: '+',
                    audio: 'src/assets/audio/118218.mp3'
                }
            }
        },
        //218
        {
            name: '218',
            trigger: function(roundScore, player){
                return player.totalScore == 218;
            },
            apply: function(playerId, player, round){
                return {
                    factorScore: 100,
                    factorType: 'soustraction',
                    factorSign: '-',
                    audio: 'src/assets/audio/118218.mp3'
                }
            }
        },
        //666
        {
            name: '666',
            trigger: function(roundScore, player){
                return player.totalScore == 666;
            },
            apply: function(playerId, player, round){
                return {
                    factorScore: 0,
                    factorType: 'definition',
                    factorSign: '',
                    audio: 'src/assets/audio/666.mp3'
                }
            }
        }
    ]
};

var customRules = [
    'Les cartes noires inversent le sens du jeu.',
    'Quand un 0 est posé, les 2 joueurs concernés échangent aussi leurs places autour de la table.',
    'Quand un +4 est posé, les joueurs situés à gauche et à droite jouent à chifoumi. Le perdant prend les cartes.',
    'On peut contrer un 6 avec un 9, et inversement.'
];
