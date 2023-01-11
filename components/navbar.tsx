import NavButton from "./navButton";

const NavBar = () => {
    return (
        <nav className="flex justify-center">
            <NavButton buttonText="Home" link="/" borderColour="border-mahogany-red" />
            <NavButton buttonText="Projects" link="#projects" borderColour="border-shakespeare-blue" />
            <NavButton buttonText="Contact Me" link="#contactMe" borderColour="border-fuchsia-pink" />
        </nav>
    )
}

export default NavBar;