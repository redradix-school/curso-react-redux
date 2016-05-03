import React, { Component } from 'react';

class FechaItem extends Component {
  render(){
    const { country, date } = this.props;

    return (
      <p>En { country } son las { date.toTimeString() } ahora mismo.</p>
    )
  }
}

const zonasHorarias = [
  { country: 'España', difUTC: 2 },
  { country: 'Inglaterra', difUTC: 0 },
  { country: 'Argentina', difUTC: -3 },
  { country: 'Japón', difUTC: 5 }
];

function convertirZonaHoraria(fecha, dif){
  var d = new Date(fecha);
  d.setUTCHours(d.getUTCHours() + diff);
  return d;
}

class FechasMundo extends Component {
  render(){
    let now = new Date(),
        fechas = zonasHorarias.map(zona =>
          <Fecha
            key={ zona.country }
            country={ zona.country }
            date={ convertirZonaHoraria(now, zona.difUTC) } />
        )

    return (
      <div>
        <h1>Fechas del mundo</h1>
        { fechas }
      </div>
    )
  }
}

export default FechasMundo;