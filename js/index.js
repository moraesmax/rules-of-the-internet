$( document ).ready(function(){
  $(".js-random").click(function(){
    var rules = $(".rules .rule");
    var index = Math.floor( (Math.random() * rules.length));
    rules.slideUp();
    rules.eq(index).delay(300).slideDown();
  });

  $(".js-show").click(function(){
    var rules = $(".rules .rule");
    rules.slideDown();
  });

  $(".js-hide").click(function(){
    var rules = $(".rules .rule");
    rules.slideUp();
  });
});
