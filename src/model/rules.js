app.factory('rulesFactory', function(){
    var factory = {};

    factory.rules = rules;
    factory.customRules = customRules;

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

    factory.pickCustomRule = function () {
        if (0 === this.customRules.length) {
            return false;
        }

        var index = Math.floor(Math.random() * this.customRules.length);
        var customRule = this.customRules[index];
        this.customRules.splice(index, 1);

        return customRule;
    };

    return factory;
});