import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import './Site.css';
import './Header.css';
import './Content.css';
import './Sidebar.css';
import './Footer.css';

function Site() {
    return (
        <div className="site" >
            <Header></Header>
            <Sidebar></Sidebar>
            <Content></Content>
            <Footer></Footer>
        </div >
    );
};


export default Site;