import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Home from './Home';
import Signin from './Components/Signin/Signin'
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(<Signin/>, document.getElementById('root'));

serviceWorker.unregister();
