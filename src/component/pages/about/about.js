
import mainPhoto from '../../../resources/image/hospital.png'

const About = () => {
    return (
        <div className="main">
        <div className='main__wrapper'>
            <div className='main__wrapper-image'>
                <img src={mainPhoto} alt="photos Hospital" />
            </div>
            <div className='main__wrapper-info'>
                <h2>Information about health care network</h2>
                <p>
                    Our specialists have developed beneficial complex programs on prevention and detection of various diseases for the patients’ comfort. 
                    You can get all the services in comfortable conditions without long waiting in a line at our center working 24/7. There is a recreational area in the building. 
                    There is a possibility to book off premise consultations at your home.
                    Friendly and experienced staff will help you to organize your visit to a doctor and provide detailed information on the operation of the clinic center. 
                    No queues and pre-appointments at a time convenient to you with further SMS informing will make your visit to the health care center really comfortable.
                </p>
                <h3>Consultations by specialists</h3>
                <p>
                    Family doctors and specialized doctors such as superior and first expert category doctors, holders of post-doctoral and doctoral
                    degrees in medicine with huge practical experience and high level of academic education consult patients in the health care center. 
                    The highly professional team uses modern international clinical protocols of treatment and diagnostics relying on the principles of the evidence-based medicine.
                </p>

            </div>
        </div>
    </div>
    )
}

export default About;