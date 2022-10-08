import './App.css';
import { Navbar } from './comonents/Navbar';
import { Home } from './comonents/Home';
import { OurClients } from './comonents/OurClients';
import { Form } from './comonents/Form';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <OurClients />
      <Form />
    </>
  );
}

export default App;
