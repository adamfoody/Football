import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';



export const Standings = () => {


  const [selectedLeague, setSelectedLeague] = useState("eng.3")
  const [selectedYear, setSelectedYear] = useState("2021")
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [leagueName, setLeagueName] = useState("English Premier League");

  const changeLeague = (event) => {
    setSelectedLeague(event.target.value);

  }

  const changeYear = (event) => {
    setSelectedYear(event.target.value);

  }

  const getLeagues = async () => {

    try{
      setLoading(true);
      const resp = await axios.get( `https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`);
      console.log(resp.data.data.standings);
      setData(resp.data.data.standings);
      setLeagueName(resp.data.data.name);
      setLoading(false);
   
    }
    catch(err){
      console.log(err)

    }
  }

  useEffect(()=>{

    getLeagues();
  },[selectedLeague, selectedYear])


  return (

    <div>
 
 {loading && 
  <Spinner/>
 }




 {!loading && 
 

<React.Fragment>
<Typography padding="20px" textAlign="center" color="#c62828" variant='h4' fontWeight="bold"  gutterBottom>
     {leagueName} {selectedYear}
    </Typography>
  

  <Box >
  <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item justifyContent >
        <Select
          name="select-league"
          id="select-league"
          value={selectedLeague}
          onChange={changeLeague}
          variant="outlined"
          size="large"
        >
          <MenuItem value="arg.1">Argentine Liga Profesional de Fútbol</MenuItem>
          <MenuItem value="aus.1">Australian A-League</MenuItem>
          <MenuItem value="bra.1">Brazilian Serie A</MenuItem>
          <MenuItem value="chn.1">Chinese Super League</MenuItem>
          <MenuItem value="ned.1">Dutch Eredivisie</MenuItem>
          <MenuItem value="eng.1">English Premier League</MenuItem>
          <MenuItem value="eng.2">English Championship </MenuItem>
          <MenuItem value="eng.3">English League One</MenuItem>
          <MenuItem value="fra.1">French Ligue 1</MenuItem>
          <MenuItem value="ger.1">German Bundesliga</MenuItem>
          <MenuItem value="idn.1">Indonesian Liga 1</MenuItem>
          <MenuItem value="ita.1">Italian Serie A</MenuItem>
          <MenuItem value="jpn.1">Japanese J League</MenuItem>
          <MenuItem value="mys1">Malaysian Super League</MenuItem>
          <MenuItem value="mex.1">Mexican Liga BBVA MX</MenuItem>
          <MenuItem value="por.1">Portuguese Liga</MenuItem>
          <MenuItem value="rus.1">Russian Premier League</MenuItem>
          <MenuItem value="sgp.1">Singaporean Premier League</MenuItem>
          <MenuItem value="esp.1">Spanish Primera División</MenuItem>
          <MenuItem value="tha.1">Thai Premier League</MenuItem>
          <MenuItem value="tur.1">Turkish Super Lig</MenuItem>
          <MenuItem value="uga.1">Ugandan Super League</MenuItem>
        </Select>
        </Grid>

        <Grid item justifyContent style={{ display: "flex" }}>
        <Select
          name="select-year"
          id="select-year"
          variant="outlined"
          onChange={changeYear}
          defaultValue={selectedYear}
        >
          <MenuItem value="2011">2011</MenuItem>
          <MenuItem value="2012">2012</MenuItem>
          <MenuItem value="2013">2013</MenuItem>
          <MenuItem value="2014">2014</MenuItem>
          <MenuItem value="2015">2015</MenuItem>
          <MenuItem value="2016">2016</MenuItem>
          <MenuItem value="2017">2017</MenuItem>
          <MenuItem value="2018">2018</MenuItem>
          <MenuItem value="2019">2019</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
        </Select>
        </Grid>
      </Grid>
</Box>



 




        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
    

  

      <Table size="small">
        <TableHead>
          <TableRow>
          <TableCell size="medium">Position </TableCell>
            <TableCell>Team </TableCell>
            <TableCell>Place* </TableCell>
            <TableCell>Win </TableCell>
            <TableCell>Loss</TableCell>
            <TableCell>Draw</TableCell>
            <TableCell >Games Played</TableCell>
            <TableCell >Total Points</TableCell>
            <TableCell >overall</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
            <TableCell>   <Avatar  sx={{ bgcolor: "#c62828" }} > {index + 1} </Avatar> </TableCell>
              <TableCell>
              {row.team && 


<Grid container direction="row" alignItems="center" spacing={2} > 

<Grid item xs={12} md={6} >
<h3 >  {row.team.displayName}  </h3>

</Grid>
<Grid item xs={6} md={6} >
{row.team.logos[0] && 
<img height="100px" src ={row.team.logos[0].href} alt="test"/>

} 

</Grid>
</Grid>

 }




              </TableCell>

              <TableCell> {row.note && 

<h3>  {row.note.description} </h3>

}
{!row.note && 

<h3>  N/A </h3>

}
</TableCell>
              <TableCell> {row.stats && 
<h3> {row.stats[0].abbreviation} {row.stats[0].value}</h3>

}  </TableCell>
<TableCell> {row.stats && 
<h3> {row.stats[1].abbreviation} {row.stats[1].value}</h3>

}  </TableCell>
            
<TableCell> {row.stats && 
<h3> {row.stats[2].abbreviation} {row.stats[2].value}</h3>

}  </TableCell>

<TableCell> {row.stats && 
<h3> {row.stats[3].abbreviation} {row.stats[3].value}</h3>

}  </TableCell>
            
<TableCell> {row.stats && 
<h3> {row.stats[4].abbreviation} {row.stats[4].value}</h3>

}  </TableCell>
<TableCell> {row.stats && 
<h3> {row.stats[12].displayValue}</h3>

}  </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
 
      </Paper>
    </React.Fragment>



 


 }
    </div>

  
  )
}
