import React from "react";
import TextField from "@mui/material/TextField";
import clinics from "../dummyData/clinics.json";
import Card2 from "../components/Card2";
import { useState } from "react";
import { Grid, Container } from "@mui/material";
import { useRef } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const searchRef = useRef();

  const search = (data) => {
    const filtered = data.filter(
      (clinic) =>
        clinic.location.toLowerCase().includes(query) ||
        clinic.name.toLowerCase().includes(query) ||
        clinic.suburb.toLowerCase().includes(query)
    );
    if (query === "") {
      return [];
    }
    return filtered;
  };

  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button className="scrollBtn" onClick={() => handleScroll(searchRef)}>
        Back To Search
      </button>

      <div>
        <p
          className={
            "searchTitle " + (search(clinics).length > 0 ? "translate" : "")
          }
        >
          Find A Local Vet
        </p>
      </div>

      <div ref={searchRef}>
        <input
          type="text"
          placeholder="Search...."
          className={"search"}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div>
        <Grid
          className="card-grid-container"
          container
          sx={{ gridRowGap: "6vh" }}
        >
          {search(clinics).map((clinic) => {
            return (
              <Grid items md={3}>
                <Card2 data={clinic} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Search;
