app.factory('rulesFactory', function(){
    var factory = {};

    factory.rules = rules;

    factory.walk = function(playerId, player, round){
        var triggered = false;

        angular.forEach(factory.rules, function(type){
            angular.forEach(type, function(rule){
                if(rule.trigger(round[playerId], player)){
                    triggered = rule;
                }
            });
        });

        return triggered;
    };

    return factory;
});