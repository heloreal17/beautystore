import React from 'react';
import img1 from '../image/Insta.png';
import img2 from '../image/github.png';
import img3 from '../image/whats.png';
import img4 from '../image/email.png';
import img5 from '../image/face.png';
import img6 from '../image/linke.png';

const Footer = () => {
    return (
        <div className="fundo">

            <div>
                <p className='textofooter'>&#169;2023 - Heloísa Real - 13299</p>
            </div>

            <div className="imgTotal">
                <img src={img1} alt="Logo" style={{ width: '30px', marginRight: '30px' }}/>
                <img src={img2} alt="Logo" style={{ width: '30px', marginRight: '30px' }}/>
                <img src={img3} alt="Logo" style={{ width: '30px', marginRight: '30px' }}/>
                <img src={img4} alt="Logo" style={{ width: '30px', marginRight: '30px' }}/>
                <img src={img5} alt="Logo" style={{ width: '30px', marginRight: '30px' }}/>
                <img src={img6} alt="Logo" style={{ width: '30px', marginRight: '30px' }}/>
            </div>

        </div>
    )
}

export default Footer
