import NavButton from "./navButton";

const NavBar = () => {
    return (
        <nav className="mt-8 flex flex-row items-center justify-center sticky top-[100vh]">
            <NavButton buttonText="Home" link="/" borderColour="border-mahogany-red" />
            <NavButton buttonText="Applications" link="#applications" borderColour="border-shakespeare-blue" />
            <NavButton buttonText="Contact Me" link="#contactMe" borderColour="border-fuchsia-pink" />
        </nav>
    )
}

export default NavBar;