let timer = setInterval(move, 10);
let pos = 0;
let box = document.getElementById("box");

function move() {
  if (pos >= 150) {
    // the bow reached the end of the container (bc 200px-50px)
    clearInterval(timer);
  } else {
    pos += 1;
    // right, bottom, left, top
    box.style.right = pos + "px"; // déplace la boite par la gauche, son coté gauche change de position
    box.style.top = pos + "px"; // déplace la boite par la gauche, son coté gauche change de position
  }
}

document.getElementById("valider").addEventListener("click", (event) => {
  let horizontale_value = document.getElementById("position1-select").value;
  let verticale_value = document.getElementById("position2-select").value;

  let timer = setInterval(move, 10);
  let pos = 0;
  let box = document.getElementById("box");

  function move() {
    if (pos >= 150) {
      clearInterval(timer);
    } else {
      pos += 1;
      if (horizontale_value == "right"){
          box.style.right = pos + "px"; 
      }
      else {
        box.style.left = pos + "px"; 
      }
      if (verticale_value == "top"){
        box.style.top = pos + "px"; 
      }
      box.style.bottom = pos + "px"; 
    }
  }

  if (horizontale_value === "left" && verticale_value === "bottom"){
    document.getElementById('valider').style.display = "none";
  }
  else {
    $('#myModal').modal('show');
  }
});
