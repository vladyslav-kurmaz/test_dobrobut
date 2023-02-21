import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';

import Overlay from '../overlay/overlay';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Services from '../pages/servicess/services';
import NotFound from '../pages/notFound/notFound';
import ServiceItems from '../serviceItems/serviceItems';

import './App.scss';


class App extends Component {
  state = {
    serviceKey: null,
    title: null,
  }

  updateKey = (key, title) => {
    console.log(typeof(key));
    this.setState({
      serviceKey: key,
      title: title
    })
  }

  render() {

    return (
      <div className="App">
        <Routes>
          <Route path='/test_dobrobut' element={<Overlay/>}>
            <Route index element={<Home/>}/>
            <Route path='/test_dobrobut/services' element={<Services updateKey={this.updateKey}/>}/>
            <Route path='/test_dobrobut/about' element={<About/>}/>
            <Route path={`/test_dobrobut/services/${this.state.serviceKey}`} element={<ServiceItems keyItem={this.state.serviceKey} keyTitle={this.state.title}/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
        
      </div>
    );
  }

}

export default App;


