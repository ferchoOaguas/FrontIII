import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form';
import Card from './Components/Card';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (submittedName, submittedDescription) => {
    setName(submittedName);
    setDescription(submittedDescription);
    setIsSubmitted(true);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      {isSubmitted && <Card name={name} description={description} />}
    </div>
  );
}

export default App;

