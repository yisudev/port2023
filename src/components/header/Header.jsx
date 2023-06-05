import Navbar from "./Navbar";
import Titulo from "./Titulo";
export default function Header(){
    return(
        <div className="bg-gray-800 flex items-center justify-around header">
            <Titulo/>
            <Navbar/>
        </div>
    );
}