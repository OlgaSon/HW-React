import { NavLink } from "react-router-dom";

const Home = () => {
    return <div>
        <NavLink to="/About">go to About</NavLink>
        <h2>Home</h2>
        <p>Content Home</p>
    </div>
}

export default Home;