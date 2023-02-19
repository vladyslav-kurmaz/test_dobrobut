import { Link } from 'react-router-dom';

import './home.scss';

import mainPhoto from '../../../resources/image/hospital.png';

const Home = () => {
    return (
        <div className="main">
            <div className='main__wrapper'>
                <div className='main__wrapper-image'>
                    <img src={mainPhoto} alt="photos Hospital" />
                </div>
                <div className='main__wrapper-info'>
                    <h2>Information about health care network</h2>
                    <p>Our specialists have developed beneficial complex programs on prevention and detection of various diseases for the patients’ comfort. You can get all the services in comfortable conditions without long waiting in a line at our center working 24/7. There is a recreational area in the building. There is a possibility to book off premi...</p>
                    <Link to='/about'>Більше інформації</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;