import './App.css';
import { Standings } from './Components/Standings';
import { Leagues } from './Components/Leagues';
import { Content } from './Components/Content';
import { Footer } from './Components/Footer';
import NavBar from './Components/NavBar';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import axios from 'axios';

function App() {

  const [leagues, setLeagues] = useState([]);
  const [allLeagues, setAllLeagues] = useState([]);





  const getAllLeagues = async () => {

    try{
      const resp = await axios.get(` https://api-football-standings.azharimm.site/leagues`);
      console.log(resp);
      setAllLeagues(resp.data.data);

    }
    catch(err){
      console.log(err)

    }
  }

  useEffect(()=>{
   
      getAllLeagues();
    
  },[])

  return (
    <div className="App">
    
   


<BrowserRouter>
<NavBar/>
<Routes>
      
       <Route path="/standings" element ={<Standings />}></Route>
       <Route path="/leagues" element ={<Leagues allLeagues={allLeagues}/>}></Route>
       <Route path="/content" element ={<Content/>}></Route>
  
    
    </Routes>

</BrowserRouter>
    </div>
  );
}

export default App;