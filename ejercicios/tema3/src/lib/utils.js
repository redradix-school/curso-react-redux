

/* Funciones auxiliares ejercicio Cronometro */

//Devuelve una cadena de 2 dígitos a parter de un valor
function twoDigits(d){
    return (d < 10) ? '0'+d : d;
}

//Devuelve una cadena de 3 dígitos a parter de un valor
function threeDigits(d){
  return (d < 100 ? '0' + twoDigits(d) : d);
}

//Dado un timestamp, extrae las horas, minutos, segundos, ms
//como cadenas bien formadas (rellenadas con 0s)
function extractTimeParts(time){
  var date = new Date(time), //add milliseconds
        h = date.getUTCHours(),
        m = date.getUTCMinutes(),
        s = date.getUTCSeconds(),
        ms = date.getUTCMilliseconds();
  return {
    hours: twoDigits(h),
    minutes: twoDigits(m),
    seconds: twoDigits(s),
    milliseconds: threeDigits(ms)
  };
}


module.exports = {
  extractTimeParts: extractTimeParts
};