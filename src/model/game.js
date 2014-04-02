app.factory('gameFactory', function(roundFactory, playerFactory, rankFactory){
    var factory = {};

    factory.game = true;

    factory.getGame = function(){
        return this.game;
    };

    factory.setGame = function(game){
        this.game = game;
    };

    factory.reset = function(){
        playerFactory.reset();
        roundFactory.reset();
        rankFactory.reset();
    };

    return factory;
});
