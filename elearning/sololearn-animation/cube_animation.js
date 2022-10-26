let timer = setInterval(move, 10)
let pos = 0;
let box = document.getElementById("box");

function move () {
    if (pos >= 150) // the bow reached the end of the container (bc 200px-50px)
    {
        clearInterval(timer);
    }
    else {
        pos += 1;
        // right, bottom, left, top
        box.style.right = pos+"px"; // déplace la boite par la gauche, son coté gauche change de position
        box.style.top = pos+"px";  // déplace la boite par la gauche, son coté gauche change de position
    }
}