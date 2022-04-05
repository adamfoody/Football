import React from 'react'

export const Leagues = ({allLeagues}) => {



  const test = allLeagues;



  return (
    <div>
  

    {test.map((league) => 
<div  key={league.id}> 
    <h1> {league.name}</h1>
      <img src={league.logos.light} alt="#" />
      <img src={league.logos.dark} alt="#" />
</div>
   )}
    

    
    </div>
  )
}
