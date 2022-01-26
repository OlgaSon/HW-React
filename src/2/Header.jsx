import Menu from "./Menu";
import './Menu.css';


const Header = () => {
  return (
    <section className="header">
      <Menu></Menu>
      <button>Login</button>
    </section>
  )
};


export default Header;