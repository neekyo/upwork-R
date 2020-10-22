import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

const App = () => {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Header />
				<Home />
			</React.Fragment>
		</BrowserRouter>
	);
};

export default App;
