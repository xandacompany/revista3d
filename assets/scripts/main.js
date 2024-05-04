const el = document.getElementById('poster');

el.addEventListener('mousemove', (evt) => {
    const { clientX, clientY } = evt;
    const rect = el.getBoundingClientRect();

    const yRotation = ((clientX - rect.left - rect.width / 2) / rect.width) * 50;
    const xRotation = ((clientY - rect.top - rect.height / 2) / rect.height) * -80;

    const string = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

    el.style.transform = string;
});

el.addEventListener('mouseleave', () => {
    el.style.transform = 'none'; // Restaurar transformación a ninguna al salir del elemento
});




function abrir(){
    document.getElementById("articulos").style.display = 'flex';
}


function articulo1(){
    document.getElementById("poster").className="ejecutar_animacion";
    setTimeout(cargada1, 500); // Llamando a la función cargada1() después de 3000 milisegundos (3 segundos)
}

function cargada1(){
    document.getElementById("poster").className="calseauto";

    document.getElementById("imagen_portada_senor").src = "assets/img/1111.png";

    document.getElementById("id_izquierda").style.display = 'flex';

    document.getElementById("id_boton_izquierda").style.display = 'flex';

}


function regresar(){
    document.getElementById("imagen_portada_senor").src = "assets/img/revista.png";
    document.getElementById("poster").className="ejecutar_animacion";

    document.getElementById("id_izquierda").style.display = 'none';

    document.getElementById("id_boton_izquierda").style.display = 'none';

}




function articulo2(){
    document.getElementById("poster").className="ejecutar_animacion";
    setTimeout(cargada2, 500); // Llamando a la función cargada1() después de 3000 milisegundos (3 segundos)
}

function cargada2(){
    document.getElementById("poster").className="calseauto";

    document.getElementById("imagen_portada_senor").src = "assets/img/2222.png";

    document.getElementById("id_izquierda").style.display = 'flex';

    document.getElementById("id_boton_izquierda").style.display = 'flex';

}





function articulo3(){
    document.getElementById("poster").className="ejecutar_animacion";
    setTimeout(cargada3, 500); // Llamando a la función cargada1() después de 3000 milisegundos (3 segundos)
}

function cargada3(){
    document.getElementById("poster").className="calseauto";

    document.getElementById("imagen_portada_senor").src = "assets/img/3333.png";

    document.getElementById("id_izquierda").style.display = 'flex';

    document.getElementById("id_boton_izquierda").style.display = 'flex';


}



function articulo4(){
    document.getElementById("poster").className="ejecutar_animacion";
    setTimeout(cargada4, 500); // Llamando a la función cargada1() después de 3000 milisegundos (3 segundos)
}

function cargada4(){
    document.getElementById("poster").className="calseauto";

    document.getElementById("imagen_portada_senor").src = "assets/img/4444.png";

    document.getElementById("id_izquierda").style.display = 'flex';

    document.getElementById("id_boton_izquierda").style.display = 'flex';
}



function articulo5(){
    document.getElementById("poster").className="ejecutar_animacion";
    setTimeout(cargada5, 500); // Llamando a la función cargada1() después de 3000 milisegundos (3 segundos)
}

function cargada5(){
    document.getElementById("poster").style.width="auto";

    document.getElementById("imagen_portada_senor").src = "assets/img/5555.png";

    document.getElementById("id_izquierda").style.display = 'flex';

    document.getElementById("id_boton_izquierda").style.display = 'flex';
}







const el2 = document.getElementById('id_poster_2');

el2.addEventListener('mousemove', (evt) => {
    const { clientX, clientY } = evt;
    const rect = el2.getBoundingClientRect();

    const yRotation = ((clientX - rect.left - rect.width / 2) / rect.width) * 50;
    const xRotation = ((clientY - rect.top - rect.height / 2) / rect.height) * -80;

    const string = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

    el2.style.transform = string;
});

el2.addEventListener('mouseleave', () => {
    el2.style.transform = 'none'; // Restaurar transformación a ninguna al salir del elemento
});