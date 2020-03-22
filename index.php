<html>
    <head>
        <title>Contador de clicks</title>
        	<title>LOGIN</title>
		<link rel="stylesheet" type="text/css" href="css/estilo.css">
        <script type="text/javascript" src="js/funcion.js"></script>
    </head>
    <body>
    <div class="contenedor">
        <div class="derecha">
            <h3 class="tituloPuntuaciones">MEJORES PUNTUACIONES</h3>
            <ul id="puntuaciones"></ul>
        </div>
        <div class="juego">
            <canvas id="canvas" width="515" height="327">TU NAVEGADOR NO SOPORTA HTML5!</canvas>
            <button id="botonan" onclick="comenzar()">Comenzar</button>
            <button id="boton1" onclick="contadorclics()">Clic on me</button>
            <!--<a href="javascript:clickLink();">Click aquí</a> -->
        	<p>Clicks <span id="clicks">0</span></p>
        	<button onclick="Reset()">Reset</button>
        	<!--<button onclick="aleatorio()">Holaaaa</button>-->
        	<p><span id="cuenta_regresiva">10</span></p>
        	<p><span id="hey">10</span></p>
        </div>
    </div>
    </body>
</html>
