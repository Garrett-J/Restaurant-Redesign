$(document).ready(function() {

    $('.soup-btn').click(function(){
        $('.soup').addClass('visible');
        $('.appetizer, .chowmein, .friedrice, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial,.sideorder').removeClass('visible');
        $('.soup-btn').addClass('active');
        $('.appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.appetizer-btn').click(function(){
        $('.appetizer').addClass('visible');
        $('.soup, .chowmein, .friedrice, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.appetizer-btn').addClass('active');
        $('.soup-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.chowmein-btn').click(function(){
        $('.chowmein').addClass('visible');
        $('.soup, .appetizer, .friedrice, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.chowmein-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.friedrice-btn').click(function(){
        $('.friedrice').addClass('visible');
        $('.soup, .appetizer, .chowmein, .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.friedrice-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.eggfuyung-btn').click(function(){
        $('.eggfuyung').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.eggfuyung-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.chickenduck-btn').click(function(){
        $('.chickenduck').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice, .eggfuyung, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.chickenduck-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.beef-btn').click(function(){
        $('.beef').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice, .eggfuyung, .chickenduck, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.beef-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.pork-btn').click(function(){
        $('.pork').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.pork-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.chopsuey-btn').click(function(){
        $('.chopsuey').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.chopsuey-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.teppan-btn').click(function(){
        $('.teppan').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.teppan-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.hotpot-btn').click(function(){
        $('.hotpot').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .seafood, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.hotpot-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.seafood-btn').click(function(){
        $('.seafood').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .vegetarian, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.seafood-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.vegetarian-btn').click(function(){
        $('.vegetarian').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .housespecialties, .chefspecial, .sideorder').removeClass('visible');
        $('.vegetarian-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .housespecialties-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.housespecialties-btn').click(function(){
        $('.housespecialties').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .chefspecial, .sideorder').removeClass('visible');
        $('.housespecialties-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .chefspecial-btn, .sideorder-btn').removeClass('active');
    });

    $('.chefspecial-btn').click(function(){
        $('.chefspecial').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .sideorder').removeClass('visible');
        $('.chefspecial-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .sideorder-btn').removeClass('active');
    });

    $('.sideorder-btn').click(function(){
        $('.sideorder').addClass('visible');
        $('.soup, .appetizer, .chowmein, .friedrice , .eggfuyung, .chickenduck, .beef, .pork, .chopsuey, .teppan, .hotpot, .seafood, .vegetarian, .housespecialties, .chefspecial').removeClass('visible');
        $('.sideorder-btn').addClass('active');
        $('.soup-btn, .appetizer-btn, .chowmein-btn, .friedrice-btn, .eggfuyung-btn, .chickenduck-btn, .beef-btn, .pork-btn, .chopsuey-btn, .teppan-btn, .hotpot-btn, .seafood-btn, .vegetarian-btn, .housespecialties-btn, .chefspecial-btn').removeClass('active');
    });
    
   






























});