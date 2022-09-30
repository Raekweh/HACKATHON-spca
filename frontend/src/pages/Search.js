import React, { useEffect } from "react";


import Card2 from "../components/Card2";
import { useState } from "react";
import { Grid,} from "@mui/material";
import { useRef } from 'react'
import axios from 'axios';



const Search = () => {

  const [clinics, getClinics] = useState([]);
  const url = "http://localhost:8082/api/clinics/getclinics";

  const [query, setQuery] = useState("");
  const searchRef = useRef();

// fetch clinic data from backend
  const getAllClinics = () => {
    axios.get(`${url}`)
      .then((response) => {
        const allClinics = response.data;
        getClinics(allClinics);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getAllClinics();
    console.log(clinics);
  }, []);


  const search = (data) => {
    //filtering data based on search query
    const filtered = data.filter((clinic) =>
      clinic.address.toLowerCase().includes(query) ||
      clinic.name.toLowerCase().includes(query) ||
      clinic.suburb.toLowerCase().includes(query)
    )

    if (query === "") {
      return [];
    }
    return filtered;


  }




  return (
    <div >
      

      <div>
        <p className={'searchTitle ' + ((search(clinics).length > 0 ? 'translate' : ''))}>
          Find A Local Vet
        </p>
      </div>

      <div ref={searchRef}>
        <input type='text' placeholder="Search...." className={'search'} onChange={(e) => setQuery(e.target.value)}

        />
      </div>


      <div>
        {/* populating page with individual clinics based on filtered results */}
        <Grid container sx={{ gridRowGap: '6vh', }}>
          {search(clinics).map((clinic) => {
            return <Grid items md={3}><Card2 data={clinic} /></Grid>
          })}

        </Grid>

      </div>



    </div>
  );
};

export default Search;
