import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import ProfileList from './components/ProfileList/ProfileList';

function App() {

  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    setProfiles([...profiles, profile])
  }

  return (
    < >
    <Form addProfile={addProfile}></Form>
    <ProfileList profiles={profiles} setProfiles={setProfiles}/>
    </>
  );
}

export default App;
