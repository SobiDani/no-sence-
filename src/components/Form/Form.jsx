import React, { useState } from 'react';

const INITIAL_STATE = {
  name: '',
  address: '',
  location: '',
  image: '',
};

const Form = ({addProfile}) => {
  const [state, setState] = useState(INITIAL_STATE);

  
  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setState({ ...state, [id]: value });
  };


  const submitForm = (ev) => {
    ev.preventDefault();
    
    alert(JSON.stringify(state));
    addProfile(state)

    setState(INITIAL_STATE)
  };


  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <label>
          <p>Nombre</p>
          <input
            type='text'
            id='name'
            value={state.name}
            onChange={handleInput}></input>
        </label>
        <label>
          <p>Apellidos</p>
          <input
            type='text'
            id='address'
            value={state.address}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Ciudad</p>
          <input
            type='text'
            id='location'
            value={state.location}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Imagen</p>
          <input
            type='text'
            id='image'
            value={state.image}
            onChange={handleInput}
          />
        </label>
        <div>
          <button type='submit'>Guardar Perfil</button>
        </div>
      </fieldset>
      <figure>
        <h3>{state.name}</h3>
        <h4>{state.address}</h4>
        <img src={state.image} alt={state.name} width="200px" />
      </figure>
    </form>
  );
};

export default Form;
