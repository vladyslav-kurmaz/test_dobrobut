import { Component } from 'react';
import './pagination.scss';

class Pagination extends Component {

    state = {
        start: 0,
        end: 10,
        active: 0
    }

    onButtonNext = (service) => {
        if (this.state.end > service.length -1) {
            return 
        } else {
            this.setState((state) => { 
                return {
                    start: state.start + 1,
                    end: state.end + 1
                } 
            })
        }
    }

    onButtonPrev = () => {
        if (this.state.start <= 0) {
            return 
        } else {
            this.setState((state) => { 
                return {
                    start: state.start - 1,
                    end: state.end - 1
                } 
            })
        }
    }

    onActive = (e) => {
        for (let i = 0; i < e.target.parentElement.children.length; i++) {
            e.target.parentElement.children[i].classList.remove('active');
        }
        
        e.target.classList.toggle('active');

        this.props.page(e.target.textContent -1)
    }

    render() {
        const {service} = this.props;
        const {start, end} = this.state;
        const items = (i) => (<li className="pagination__list-item" onClick={this.onActive} key={i}>{i+1}</li>)
        const paginationItem = service.map((item, i) => items(i))        
        const buttonNext = <button className='pagination__button' onClick={() =>this.onButtonNext(service)}>Next</button>
        const buttonPrevious = <button className='pagination__button' onClick={this.onButtonPrev}>Prev</button>
      
        if (service.length > 1) {
            return(
                <div className='pagination'>
                    {end > 1 ? buttonPrevious : null}
                    <ul className="pagination__list">
                        {paginationItem.length > 10 ? paginationItem.slice(start, end)  : paginationItem}
                    </ul>
                    {paginationItem.length > 10 ? buttonNext : null}
                </div>
               )
        }
    }

}

export default Pagination;