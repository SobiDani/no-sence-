import React from 'react'

const ProfileList = ({profiles, setProfiles}) => {

    const perfiles = profiles 

    const borrar = (e, profile) => {
      

      for (let i = 0; i < perfiles.length; i++) {

          if (perfiles[i] === profile) {
              perfiles.splice(i,1)
             
              
          }

      }
      e.target.parentElement.remove();
      setProfiles(perfiles)
    };
  return (
    <div>
      <h2>Profile List</h2>
      {profiles.map((profile) => (
        <figure>
          <h2>{profile.name}</h2>
          <h3>{profile.location}</h3>
          <img src={profile.image} alt={profile.name} width="200px"/>
          <button onClick={ e => borrar(e, profile)}>BORRAR</button>
        </figure>
      ))}
    </div>
  )
}

export default ProfileList