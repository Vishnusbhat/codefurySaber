import Headroom from "react-headroom";

const Navbar = () => {
    return (
       
        
            <nav className=" w-auto bg-navbar opacity-90 p-0 h-20 flex items-center justify-between">
            <div>
                <a href="/" className=" pl-10 font-heading text-2xl">Zephyr</a>

            </div>
            
            <div className=" w-auto flex justify-evenly ">
                <a href="#" className="p-2 px-4 font-navbartext text-2xl 
                hover:bg-headingcolor hover:rounded-full hover:text-navbar">
                    Home</a>
                <a href="#" className="p-2 px-4 font-navbartext text-2xl 
                hover:bg-headingcolor hover:rounded-full hover:text-navbar">
                    Stories</a>
                <a href="#" className="p-2 px-4 font-navbartext text-2xl
                hover:bg-headingcolor hover:rounded-full hover:text-navbar">
                    Grievances</a>
                <a href="#" className="py-2 px-4 font-navbartext text-2xl hover:bg-headingcolor hover:rounded-full hover:text-navbar ">
                    Contact us</a>
                <a href="#" className="py-2 px-4 font-navbartext text-2xl hover:bg-headingcolor hover:rounded-full hover:text-navbar ">
                    About</a>
            </div>
            </nav>
        
        
    );
}
 
export default Navbar;