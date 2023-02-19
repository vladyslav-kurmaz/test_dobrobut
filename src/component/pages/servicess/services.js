import { Component } from "react";

import ServiceDobrobut from "../../../services/serviceDobrobut";
import Item from "../../item/item";
import Spiner from "../../spiner/spiner"

import './services.scss';

class Services extends Component {

    state = {
        service: null,
        loading: true,
        search: ''
    }

    getService = new ServiceDobrobut()

    componentDidMount() {
       this.updateService()
    }


    updateService = () => {
        this.getService
            .getAllServise()
            .then(this.serviceAdd)
            .catch(() => console.log('ERRRROR'))

    }

    serviceAdd = (service) => {
        this.setState({
            service: service,
            loading: false
        })

    }

    renderItems = (service) => {

        if (service.length > 10) {
            service.slice(0, 10);
        }
        service.map((item) => <Item data={item}/>)
    }

    updateKey = (key, title) => {
        this.props.updateKey(key, title);
    }

    updateSearch = (search) => {
        this.setState({search});
    }
    

    serviceSearch =  (data, search) => {
        return data.filter(item => {
            return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1 
        })
    }



    render() {
        const {service, loading} = this.state;
        const visibleService = service ? this.serviceSearch(service, this.state.search) : null;
        const spiner = loading ? <Spiner/> : null;
        const services = service ? visibleService.map((item) => item.title === '' ? null : <Item updateKey={this.updateKey} data={item} key={item.key}/>) : null;
 
        return (
            <div className="main-s">
                <div className='main-s__services'>
                    <h1>Services</h1>
                    <input type="text" id='search' onChange={(e) => this.updateSearch(e.target.value)} placeholder='Write category or service' className='' />
                    <ul className='main-s__services-list'>
                        {spiner}
                        {services}    
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default Services;