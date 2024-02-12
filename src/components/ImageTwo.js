import { Parallax } from 'react-parallax';
import spaceStation from '../img/P1025886.JPG';

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={spaceStation} strength={1000} bgImageStyle={{minHeight: '100vh', width: '90vw'}}>
        <div className='content'>
            <span className="img-txt">NIT CALICUT</span>
        </div>
    </Parallax>
);

export default ImageTwo;
