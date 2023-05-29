import React, { useContext, useState, useEffect } from "react";
import { MovieContext } from "../context/Movie";
import { TextField, Container, Box } from "@mui/material";
import ContainerCard from "./ContainerCard";
import { styled } from "@mui/system";

const SearchBar = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

function BuscarPeliculas() {
  const [query, setQuery] = useState("");
  const { buscarPeliculas } = useContext(MovieContext);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query !== "") {
      buscarPeliculas(query);
    }
  }, [query, buscarPeliculas]);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <SearchBar>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="search"
            label="Buscar Películas"
            name="search"
            autoComplete="search"
            autoFocus
            value={query}
            onChange={handleChange}
          />
        </SearchBar>
      </Container>
      <ContainerCard tipo="busqueda" />
    </>
  );
}

export default BuscarPeliculas;
