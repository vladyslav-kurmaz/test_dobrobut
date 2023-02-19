import { Component } from "react";

import Spinner from "../spiner/spiner";
import Item from "../item/item";
import ServiceDobrobut from "../../services/serviceDobrobut";
import Pagination from "../pagination/pagination";

class ServiceItems extends Component {

    state = {
        service: null,
        loading: true,
        page: 0,
        search: ''
    }

    service = new ServiceDobrobut();

    updateService = (key) => {
        this.service.getServices(key)
            .then(this.onLoadedService)
            .catch(() => console.log('ERRRROR'));
    }

    componentDidMount() {
        this.updateService(this.props.keyItem);
    }

    onLoadedService = (service) => {
        this.setState({
            service: service,
            loading: false
        })
    }

    onChengeNumberPage = (number) => {
        this.setState({
            page: number
        })
    }

    updateSearch = (search) => {
        this.setState({search});
    }
    

    serviceSearch =  (data, search) => {
        return data.map((item, i) => {
            return item.filter(item => {
                return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1 
            })
        })
            
            
    }

    render() {
        const {service, loading, page} = this.state;
        const spiner = loading ? <Spinner/> : null;
        const visibleService = service ? this.serviceSearch(service, this.state.search) : null;
        const services = service ? visibleService[page].map(item => item.title === '' ? null : <Item data={item} key={item.serviceKey}/>) : null;
        const pagination = service ? <Pagination service={service} page={this.onChengeNumberPage}/> : null

        return (
            <div className="main-s">
                <div className='main-s__services'>
                    <h1>{this.props.keyTitle}</h1>
                    <input type="text" id='search' onChange={(e) => this.updateSearch(e.target.value)} placeholder='Write category or service' className='' />
                    <ul className='main-s__services-list'>
                        {spiner}
                        {services}    
                    </ul>

                    {pagination}
                </div>
            </div>
        )
    }
    
}

export default ServiceItems;