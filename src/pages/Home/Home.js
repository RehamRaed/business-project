import React from "react";
import Layout from "../../components/layouts/layout";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact"
function Home(){
    return(
        <>
        <Layout >
           <Hero />
           <About />
           <Services/>
           <Blog />
           <Contact />
           </Layout>
           
            </>
    )
};
export default Home;
