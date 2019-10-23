function goldenButton() {
  var x = document.getElementsByClassName("paragraph1") ;
  x[0].innerHTML = "This is a golden retreiver!" ;
  var y = document.getElementsByClassName("golden") ;
  y[0].innerHTML = "Golden Retreiver";
  $("#bulldogImg").fadeOut();
  $("#poodleImg").fadeOut();
  $("#goldenRetrevierImg").fadeIn();

  $("#bulldogInfo").show();
  $("#poodleInfo").show();
  $("#goldenRetrevierInfo").hide()
}

function bulldogButton() {
  var x = document.getElementsByClassName("paragraph1");
  x[0].innerHTML = "This is a bulldog!";
  var y = document.getElementsByClassName("golden");
  y[0].innerHTML = "BullDog" ;
  $("#bulldogImg").fadeIn();
  $("#poodleImg").fadeOut();
  $("#goldenRetrevierImg").fadeOut();

  $("#bulldogInfo").hide();
  $("#poodleInfo").show();
  $("#goldenRetrevierInfo").show()

}

function poodleButton() {
  var x = document.getElementsByClassName("paragraph1");
  x[0].innerHTML = "This is a Poodle!";
  var y = document.getElementsByClassName("golden");
  y[0].innerHTML = "Poodle";
  $("#bulldogImg").fadeOut();
  $("#poodleImg").fadeIn();
  $("#goldenRetrevierImg").fadeOut();

  $("#bulldogInfo").show();
  $("#poodleInfo").hide();
  $("#goldenRetrevierInfo").show()
}
</script>