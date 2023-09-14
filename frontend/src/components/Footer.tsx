
import '../styles/Footer.scss';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";



function Footer() {
    return (
        <div className="footer-container">
            <div className='footer-icons'>
                <h1><AiOutlineHome></AiOutlineHome></h1>

                <button className='footer-add'>
                    <h1><AiOutlinePlus></AiOutlinePlus></h1>
                </button>

                <h1><AiOutlineSearch></AiOutlineSearch></h1>
            </div>
        </div>
    );
}

export default Footer;
