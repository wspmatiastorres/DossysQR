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