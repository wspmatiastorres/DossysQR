# Cliente

## StartWrapper

Es un componente de React que actúa como un contenedor para mostrar dos componentes diferentes, MainPage y ConfigMain, basado en la presencia de una clave API en la base de datos del navegador.

### Uso
El componente StartWrapper se utiliza para controlar el flujo de la aplicación dependiendo de la existencia de una clave API en la base de datos del navegador. Si la clave API existe, se muestra el componente MainPage; de lo contrario, se muestra el componente ConfigMain.

### Dependencias
El código depende de las siguientes importaciones:
- React y useState de la biblioteca react.
- useEffect de la biblioteca react.
- MainPage del archivo './Home/MainPage.jsx'.
- ConfigMain del archivo './Config/ConfigMain.jsx'.

### Variables de estado
El componente utiliza dos variables de estado para controlar el flujo de la aplicación:
- hasAPIKey (booleano): indica si existe una clave API en la base de datos del navegador.
- APIUrl (cadena): almacena la URL de la clave API.
- Efecto secundario
- El componente utiliza el hook useEffect para verificar la existencia de la clave API en la base de datos del navegador. El efecto se ejecuta una vez, cuando el componente se monta por primera vez (debido a que se pasa un arreglo vacío como segundo argumento a useEffect). Si la clave API existe, se actualiza el estado de hasAPIKey a true.
### Components
 En components encontramos Banner, compo, Navbar.

 -En Banner encontramos un componente que se muestra en los demas y en este podemos ver un contenedor con un logo y un mensaje el cual dice "Hola, Bienvenido".
 -En compo encontramos las clase que dan estilo a los botones como por ejemplo: color, tamaño, funciones como cambiar de color al pasar el mouse y que estos se encuentran repartidos por el sistema.
 -En Navbar encontramos un componente en el cual tenemos una barra de navegación haci los componenetes de Main, ConfigMain, ScanMain y ResultMain.

### Config
En la carpeta Config encontramos confi, ConfigApi, ConfigMain, ConfigQR.
-En confi encontramos el estilo de los componentes mencionados anteriormente, en este tenemos clases que donde se regula el tamaño de los botones y espacio de estos y ademas encontramos una clase que regula los espacios de un mensaje de validación.
-En ConfigApi tenemos una funcion la cual nos dice que ingresemos manualmente una url y  ademas contamos con unas validaciones las cuales son si es o no una url y que no podemos presionar el boton de guardar la url si aun no hemos escrito nada, como resultado tenemos mensajes de estas validaciones para poder guardar correctamente la url en el local storage.
Además se cuenta con un boton el cual nos abre la camara para escanear el QR el cual tambien se guarda lo escaneado en el local storage.
-En ConfigMain contamos con dependencias de ConfigApi y ConfigQr donde se cuenta con un if que nos dice si existe una url este nos muestra una de las dos dependencias.
-En ConfigQr tenemos el scaneador donde tambien contamos con la validacion de si es una url lo que se escanea y ademas esto tambien se guarda en el local storage.

### Home
En esta carpeta encontramos home y MainPage.
-En home tenemos el estilo de todos los componenetes de MainPage donde se tiene una card con una imagen y texto.
-En MainPage podemos ver un container con una card la cual sirve para dar la bienvenida al sistema, dentro de esta se aprecia una imagen referecial al sitema y un texto el cual nos daria un acercamiento al sistema.

### Img
Carpeta donde se guaradan las imagenes y estas son importadas dentro de los demas componenetes.

### Result
En la carpeta result tenemos style, ResultMain, Resultado.
-En style podemos encontrar las clases las cuales se llaman en los componentes ResultMain y Resultado.
-En ResultMain con una función se recupera el valor de lo escaneado que se encontraba en el local storage en la variable decodedText y se muestra en este componente. Resultmain se muestra automaticamente luego de haber escaneado un QR.
-En Resultado se puede hacer lo mimso pero la unica diferencia es que esta cuenta con un apartado para poder ver lo escaneado cuando lo requiera hasta que se actualice el valor de el local storage. 

### Scan
En la carpeta scan tenemos scaner y ScanMain.
-En scaner es el estilo que sa dentro del componenete ScanMain.
-En ScanMain se tiene el scaner con algunas de la funcion que ya se aplican en el scaner de Config se utliza la misma logica como pr ejemplo usar la funcion de si es una url.