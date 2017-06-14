/*
 * Onclick para el boton que permite ver imagenes, la muestra o la saca dependiendo de su estado. */
function click_boton_imagen() {
	if (this.className === "no_click") {
		var imagen = document.createElement("img");
		imagen.setAttribute("src", this.name);
		this.parentNode.insertBefore(imagen, this.nextSibling);
		this.className = "si_click";
	} else if (this.className === "si_click") {
		var imagen = this.nextSibling;
		imagen.remove();
		this.className = "no_click";
	}
}

/* Detecta si un link es a una imagen. */
function is_multimedia(link) {
	var lista_imagen = [".jpg", ".png"];
	return lista_imagen.some(function (formato) {
		return link.getAttribute("href").indexOf(formato) != -1;
	});
}

/* Busca los links en los mensajes y ve si les debe agregar el boton para mostrar el contenido. */
function work_on_messages() {
	var mensajes = document.body.getElementsByClassName("texto");
	for (var mensaje of mensajes) {
		var links = mensaje.getElementsByTagName("a");
		for (var link of links) {
			if (is_multimedia(link)) {
				var btn = document.createElement("button");
				btn.textContent = "+/-";
				btn.className = "no_click";
				btn.name = link.getAttribute("href");
				btn.onclick = click_boton_imagen;
				link.parentNode.insertBefore(btn, link.nextSibling);
			}
		}
	}
}

work_on_messages();