import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color1, setColor1] = useState("rojo")
	const [color2, setColor2] = useState("amarillo")
	const [color3, setColor3] = useState("verde")

	function encendido1 () {
		setColor1("brillorojo") 
		setColor2("amarillo")
		setColor3("verde")
	}
	function encendido2 () {
		setColor2("brilloamarillo") 
		setColor1("rojo") 
		setColor3("verde")
	}
	function encendido3 () {
		setColor3("brilloverde")
		setColor1("rojo") 
		setColor2("amarillo")
	}
	function apagado () {
		setColor1("rojo") 
		setColor2("amarillo")
		setColor3("verde")
	}
	function cambiar() {
		//console.log("hola");
		//setTimeout(saludos, 3000);
		setTimeout(encendido1, 2000);
		setTimeout(encendido3, 4000);
		setTimeout(encendido2, 6000);
		setTimeout(apagado, 8000);
	}
	
	return (
		<div className="">
			<div className="palo"></div>
			<div className="semaforo">
			<div className={color1} onClick={encendido1}></div>
			<div className={color2} onClick={encendido2}></div>
			<div className={color3} onClick={encendido3}></div>
			</div>
			<button className="boton" type="button" onClick={() => cambiar()}><strong>Change</strong></button>
		</div>
		
	);
};

export default Home;
