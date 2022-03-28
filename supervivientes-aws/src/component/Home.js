import React from "react";
import Navbar from "./Navbar";
import Calltoaction from "./Calltoaction";
import Card from "./Cards";
import Footer from "./footer";

function Home() {
    return (
        <div>
            <Navbar />
            <Card />
            <Calltoaction />
            <Footer />
        </div>
    )
    
}

export default Home