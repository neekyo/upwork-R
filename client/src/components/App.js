import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

const App = () => {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Header />
				<App />
			</React.Fragment>
		</BrowserRouter>
	);
};

export default App;
