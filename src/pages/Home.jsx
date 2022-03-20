import React from "react"
import {ImageSlider} from "../components/ImageSlider"
import logo from "../assets/logo.png";

export const Home = () =>{
    return (
        <div>
            <ImageSlider slides={[logo]}></ImageSlider>
        </div>
    )
}