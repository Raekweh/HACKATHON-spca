import React from "react";
import TextField from "@mui/material/TextField";

const Search = () => {
  return (
    <div style={{ height: "100%" }}>
      <p
        style={{
          textAlign: "center",
          paddingTop: "10vh",
          fontFamily: "gotham",
          fontSize: "6rem",
          color: "#47bfaf",
        }}
      >
        Find A Local Vet
      </p>
      <TextField
        id=""
        label=""
        placeholder="Search...."
        sx={{
          width: "80%",
          display: "flex",
          margin: "auto",
          //   marginTop: "vh",
        }}
      />
    </div>
  );
};

export default Search;
