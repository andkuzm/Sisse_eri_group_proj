document.body.addEventListener("pointermove", (e)=>{  //tegu, kui kursoor liikub
    const { currentTarget: el, clientX: x, clientY: y } = e; //praeguse kursoori positsioon.
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect(); //lehe paraametrid
    el.style.setProperty('--posX',  x-l-w/2); //tegu, kursoori praeguse positsiooni tõttu
    el.style.setProperty('--posY',  y-t-h/2); //tegu, kursoori praeguse positsiooni tõttu
  })