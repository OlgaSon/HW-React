const Header = () => {
    return <div>Header</div>
}

const Content = ({ children }) => {
    return <div>Content {children}</div>
}

const SideBar = () => {
    return <div>SideBar</div>
}

const Menu = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        </ul>
};


const Template = ({ children }) => {
    return <div>{children}</div>
};

Template.Header = Header;
Template.Content = Content;
Template.SideBar = SideBar;
Template.Menu = Menu;


export default Template;