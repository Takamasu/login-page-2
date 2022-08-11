$("#login_btn").click(function(){
    $(".ctn__register").hide("slow") && $(".ctn__login").show("slow");
});

$("#register_btn").click(function(){
    $(".ctn__login").hide("slow") && $(".ctn__register").show("slow");
});