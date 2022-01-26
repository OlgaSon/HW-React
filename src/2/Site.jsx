import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

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