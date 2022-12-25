import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import usflag from '../Images/usflag.png'
import bell from '../Images/bell.png'
import Question from '../Images/Questionmark.png'
import  Ellipse from '../Images/Ellipse 3.png' 
function BrandExample(p) {
    return (
        <div className='_Navbardiv'>
            <div className='_Navbardiv1'>{p.button}</div>
            <div className='_Navbardiv2'>
                <div>
                    <img className='_Navbarflag' src={usflag}/>
                </div>
                <div>English</div>
                <div>
                    <img className='_Navbarflag' src={bell}/>
                    <img className="_Ellipseicon"src={Ellipse}/>
                </div>
                <div><img className='_Navbarflag' src={Question}/>
            
                </div>
            </div>
        </div>
    );
}

export default BrandExample;