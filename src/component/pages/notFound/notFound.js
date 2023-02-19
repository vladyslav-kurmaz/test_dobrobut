import { Link } from 'react-router-dom'; 
import './notFound.scss'

const NotFound = () => {
    // const replace = (e) => {
        
    //     BrowserHistory.previos()
    // }

    

    return (
        <div className="main-404">
            <div className='main-404__wrapper'>
                <div className='main-404__wrapper-content'>404</div>
                <div>
                    <Link to='/'>↻ Back</Link>
                    <Link to='/'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;