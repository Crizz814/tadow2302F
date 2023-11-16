import { Container } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function PokeRandom() {

    const {data: pokemon, isLoading: cargandoPokes, isSuccess, isError} = useQuerypokemonRandom();


    return(

        <Container>


        </Container>

    );
}