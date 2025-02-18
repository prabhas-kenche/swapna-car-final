import Header from "../Header";
import OverviewCards from "../Overview";
import './index.css';  // Ensure the styles are applied

const Home = () => {
    return (
        <div className="home-container">
            <Header/>
            <OverviewCards/>
        </div>
    );
}

export default Home;
