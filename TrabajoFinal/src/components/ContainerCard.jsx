import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Tarjeta from "./Tarjeta";

import { Grid } from "@mui/material";

function ContainerCard() {
    const [characters, setCharacters] = useState([]);
    console.log("Hola");
    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/discover/movie?api_key=175670c6abdd8ecaf1c0dbdcfa8d3f44"
            )
            .then((data) => {
                setCharacters(data.data.results);
            });
    }, []);

    return (
        <Grid
            container
            paddingTop={"5rem"}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            {characters
                ? characters.map((elem) => (
                    <Grid
                        key={elem.id}
                        item
                        xs={4}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <Tarjeta
                            name={elem.original_title}
                            image={elem.poster_path}
                            descripcion={elem.overview}
                        />
                    </Grid>
                ))
                : " error"}
        </Grid>
    );
}
export default ContainerCard;
