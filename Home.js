import React from "react";
import './Home.css';
import RandomTipGenerator from "../Components/RandomTipGenerator";

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to CareHive</h1>
                <p>
                    Your one-stop solution for parenting tips, activities, and community support.
                </p>
            </header>

            <section className="random-tip-section">
                <RandomTipGenerator />
            </section>
        </div>
    );
};

export default Home;