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
                    factorSign: '+'
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
                    factorSign: '-'
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
                    factorSign: ''
                }
            }
        }
    ]
};