class ServiceDobrobut {

    getServise = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json()
    }

    getAllServise = async () => {
        const services = await this.getServise('https://prod.dobrobut.com/portal/api/anonymousdata/dobrobutprodcms/spiAnonymousServiceCategoryContList?top=100');

        return await services.value.map((item) => this._transformAllServices(item))
    }


    getServices = async (key) => {
        const services = await this.getServise('https://prod.dobrobut.com/portal/api/anonymousdata/dobrobutprodcms/spiAnonymousServiceContList?top=1000');
        
        const response = await services.value.filter(item => item.serviceCategoryGUID === key)
        const transform = await response.map((item) => this._transformServices(item));
        let newArr = [];
        
        const count = 10;
        
        for (let s = 0, e = count; s < transform.length; s += count, e += count) {
            newArr.push(transform.slice(s, e));
        }
            
        return newArr
    }


    _transformAllServices = (service) => {
        return {
            title: service.serviceCategoryContentMetatagTitle,
            key: service.serviceCategoryGUID
        }
    }

    _transformServices = (service) => {

        return {
            key: service.serviceCategoryGUID,
            serviceKey: service.serviceGUID,
            title: `${service.serviceContentName} - ${service.servicePrice} грн.`,
            link: '#' 
        }
    }

}

export default ServiceDobrobut;