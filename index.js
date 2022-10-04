$(document).ready(function() {

    $('.soup-btn').click(function(){
        $('.soup').addClass('visible');
        $('.appetizer, .chowmein, .friedrice, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.appetizer-btn').click(function(){
        $('.appetizer').addClass('visible');
        $('.soup, .chowmein, .friedrice, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.chowmein-btn').click(function(){
        $('.chowmein').addClass('visible');
        $('.soup, .appetizer, .friedrice, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.friedrice-btn').click(function(){
        $('.friedrice').addClass('visible');
        $('.soup, .appetizer, .chowmein, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.eggfuyung-btn').click(function(){
        $('.eggfuyung').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.chickenduck-btn').click(function(){
        $('.chickenduck').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice, .eggfuyung, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.beef-btn').click(function(){
        $('.beef').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice, .eggfuyung, .chickenduck, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.pork-btn').click(function(){
        $('.pork').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.chopsuey-btn').click(function(){
        $('.chopsuey').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.teppan-btn').click(function(){
        $('.teppan').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.hotpot-btn').click(function(){
        $('.hotpot').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.seafood-btn').click(function(){
        $('.seafood').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.vegetarian-btn').click(function(){
        $('.vegetarian').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .housespecialties, .chefspecial').removeClass('visible');
    });

    $('.housespecialties-btn').click(function(){
        $('.housespecialties').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .chefspecial').removeClass('visible');
    });

    $('.chefspecial-btn').click(function(){
        $('.chefspecial').addClass('visible');
        $('.soup, .appetizer, chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties').removeClass('visible');
    });
    






























});