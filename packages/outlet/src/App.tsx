import React from 'react';
import ReactDOM from 'react-dom';
import { OutletList } from './features/OutletList';
import './index.scss';

const App = () => <OutletList />;

ReactDOM.render(<App />, document.getElementById('app'));
