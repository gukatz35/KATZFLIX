import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-primary-kaneto text-secondary-kaneto text-center items-center p-4 mb-4 justify-between">
            <h1 className="text-7xl font-font-header">CineKa</h1>
            <Navbar/>
        </header>
        
     );
}

export default Header;