    console.log("hola mundo 8)");
    console.log("ancho: " + window.innerWidth);
    let par;
    par = document.getElementById("parrafitox");
    if (window.innerWidth < 800) {
        par.innerHTML = "menor a 800 px"
    }
    else {
        par.innerHTML = "mayor o igual a 800 px"
    }

    let captura; 

    function setup() {
        createCanvas(500, 400);
        noCursor();
        captura = createCapture(VIDEO)
        captura.hide();
      }
      
      function draw() {
        background(200, 0, 80);
        image(captura, 40, 40, 400, 300);
        ellipse(mouseX, mouseY, 20, 30);
      }