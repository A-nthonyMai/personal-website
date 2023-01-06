import NavButton from "./navButton";

const NavBar = () => {
    return (
        <nav className="flex flex-row items-center justify-center">
            <NavButton buttonText="Home" link="/" borderColour="border-mahogany-red" />
            <NavButton buttonText="Apps" link="#applications" borderColour="border-shakespeare-blue" />
            <NavButton buttonText="Contact" link="#contactMe" borderColour="border-fuchsia-pink" />
        </nav>
    )
}

export default NavBar;