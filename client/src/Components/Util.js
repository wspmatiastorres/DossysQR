// Chequea si un string es una URL válida o no.
// Retorna verdadero o falso y un texto explicativo
export const isURL = (urlToTest) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // Protocolo
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Dominio
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // Dirección IP
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Puerto y ruta
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // Parámetros de consulta
    '(\\#[-a-z\\d_]*)?$', 'i'); // Fragmento

  return pattern.test(urlToTest);
}
