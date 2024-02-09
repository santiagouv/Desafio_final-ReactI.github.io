import React from 'react';
import MiApi from './components/MiApi';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App bodyBackground">
      <main className="flex-grow-1">
        <MiApi />
      </main>
      <Footer />
    </div>
  );
}


export default App;