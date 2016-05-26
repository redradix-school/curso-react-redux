import React, { Component, PropTypes } from 'react';

class FechaItem extends Component {
  render(){
    const { country, date } = this.props;

    return (
      <p>En { country } son las { date.toTimeString() }.</p>
    )
  }
}

FechaItem.propTypes = {
  country: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired
}

FechaItem.defaultProps = {
  country: 'España',
  date: new Date()
}

const zonasHorarias = [
  { country: 'España', difUTC: 2 },
  { country: 'Inglaterra', difUTC: 0 },
  { country: 'Argentina', difUTC: -3 },
  { country: 'Japón', difUTC: 5 }
];

function desplazarFecha(fecha, dif){
  var d = new Date(fecha);
  d.setUTCHours(d.getUTCHours() + dif);
  return d;
}

class FechasMundo extends Component {
  render(){
    let now = new Date(),
        fechas = zonasHorarias.map(zona =>
          <FechaItem
            key={ zona.country }
            country={ zona.country }
            date={ desplazarFecha(now, zona.difUTC) } />
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