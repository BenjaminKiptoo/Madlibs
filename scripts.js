$("document").ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const person1Input = $("input#person1").valueOf();
    const person2Input = $("input#person2").valueOf();
    const animalInput = $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb");
    const nounInput = $("input#noun");


    $(".person1").text("person1Input");
    $(".person2").text("person2Input");
    $(".animal").text("animalInput");
    $(".exclamation").text("exclamationInput");
    $(".verb").text('verbInput');
    $(".noun").text("nounInput");

    $('#story').show();
  });
});