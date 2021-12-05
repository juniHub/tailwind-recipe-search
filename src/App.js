import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Recipe from './components/Recipe';
import Alert from './components/Alert';
import logo from './assets/avocado-logo-blue.png'

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState('');

  const APP_ID = process.env.REACT_APP_EDAMAM_ID;
  const APP_KEY = process.env.REACT_APP_EDAMAM_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== '') {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert('Sorry, no menu with such name. Please try again!');
      }
      setRecipes(result.data.hits);
      setQuery('');
      setAlert('');
    } else {
      setAlert('Please fill in the required field!');
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    
      <body className="flex flex-col min-h-screen">
        <header className="flex flex-col items-center justify-center pt-8">
           <img className="inline-block w-20 h-20 m-4" src={logo} alt="logo" />
        <h1 className="font-bold capitalize text-blue-600 text-center text-lg">What would you like for Menu today?</h1>
      </header>

<<<<<<< HEAD
     <main class="container mx-auto px-4 flex-grow">
=======
     <main class="flex-grow">
>>>>>>> 6353d2f0c5a87fb921be01ddb93eb75f2add594b
      <form className="flex flex-col items-center justify-center gap-4 p-4 md:p-8" onSubmit={onSubmit} style={{ marginBottom: '2rem' }}>
       
        <input
          className="focus:outline-none border-2 border-blue-900 rounded-full py-1 px-6"
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Menu Here"
        />
        <button className="font-bold text-blue-900 bg-yellow-500 rounded-full py-1 px-6">Search</button>
        </form>

           {alert !== '' && <Alert alert={alert} />}
    
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {recipes !== [] &&
            recipes.map( ( recipe ) =>
            
                <Recipe key={ uuidv4() } recipe={ recipe } />
              ) }
     
   
        </div>
        </main>

      <footer className="pt-8">
        <div className="bg-blue-900 text-white text-center p-4">Made with <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">TailwindCSS</a> and <a href="https://developer.edamam.com/" target="_blank" rel="noopener noreferrer"> Edamam API</a></div>
     </footer>
       
      </body>
      

  );
}

export default App;
