import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-[#FF0000] text-secondary-katz text-center items-center p-4 mb-4 justify-between">
            <h1 className="text-7xl font-font-header">KATZFLIX</h1>
            <Navbar/>
        </header>
        
     );
}

export default Header;