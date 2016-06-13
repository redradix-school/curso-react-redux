import React, { Component, PropTypes } from 'react';
import { Row, ColHalf } from '../grid';
import SeasonItem from './season_item';

class Form extends Component {
  constructor(props){
    super(props);
    //this.handleNameChange = this.handleNameChange.bind(this);
    //this.handleFamilyChange = this.handleFamilyChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAliveChange = this.handleAliveChange.bind(this);
    this.handleSeasonChange = this.handleSeasonChange.bind(this);
  }

  notifyChange(patch){
    //enviamos algo parecido a un PATCH de HTTP
    //del tipo { name: 'xxx' } o { aliveOnly: false }
    this.props.onQueryChange(patch);
  }

  handleTextChange(e){
    this.notifyChange({
      [e.target.id]: e.target.value
    })
  }

  handleAliveChange(e){
    //TODO
    this.notifyChange({ aliveOnly: !!e.target.checked });
  }

  handleSeasonChange(e){
    //TODO
    const season = parseInt(e.target.value);
    const currentSeasons = this.props.filter.seasons;
    const newSeasons = e.target.checked ?
      currentSeasons.concat([season]) :
      currentSeasons.filter(x => x!== season);

    this.notifyChange({ seasons: newSeasons.sort() });
  }

  renderSeasons(allSeasons, currentSeasons){
    return allSeasons.map(s => {
      const isChecked = currentSeasons.includes(s);
      return (
        <SeasonItem
          key={ s }
          season={ s }
          isChecked={ isChecked }
          onChange={ this.handleSeasonChange } />
      )
    });
  }

  renderFamilies(families){
    return families.map(f => <option key={ f } value={ f }>{ f }</option>)
  }

  render(){
    //<OPTIONs> para familias
    const familyOptions = this.renderFamilies(this.props.families);
    // los valores actuales de los controles (el filtro actual)
    const { name, family, aliveOnly, seasons } = this.props.filter;
    // todas las temporadas disponibles
    const { allSeasons } = this.props;
    // generamos los componentes para cada season
    const seasonItems = this.renderSeasons(allSeasons, seasons);

    //TODO: gestionar onChange en los campos de formulario, mapear valores
    //de props a VALUE de los campos

    return (
      <div className="search-form">
      <form onSubmit={ (e) => e.preventDefault() }>
        <Row>
          <ColHalf>
            <label htmlFor="name">Actor / personaje</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={ this.handleTextChange } />
          </ColHalf>
          <ColHalf>
            <label htmlFor="family">Familia</label>
            <select
              id="family"
              name="family"
              onChange={ this.handleTextChange }>
                <option value="">Todas</option>
                { familyOptions }
            </select>
          </ColHalf>
        </Row>
        <Row>
          <ColHalf>
            <label htmlFor="alive">Sólo personajes vivos</label>
            <input
              type="checkbox"
              id="alive"
              name="alive"
              onChange={ this.handleAliveChange }/>
          </ColHalf>
          <ColHalf>
            <fieldset>
              <legend>Aparece en temporada</legend>
              { seasonItems }
            </fieldset>
          </ColHalf>
        </Row>
      </form>
    </div>
    )
  }
}

Form.propTypes = {
  filter: PropTypes.shape({
    name: PropTypes.string,
    family: PropTypes.string,
    aliveOnly: PropTypes.bool,
    seasons: PropTypes.arrayOf(PropTypes.number)
  }),
  families: PropTypes.arrayOf(PropTypes.string).isRequired,
  //allSeasons: PropTypes.arrayOf(PropTypes.number).isRequired,
  onQueryChange: PropTypes.func.isRequired
}

export default Form;
