import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<React.Fragment>
			<div>
				<Link to="/">Home</Link>
				<a href="auth/google" className="ui green google button">
					<div>
						<i className="google icon" />
						Sign in with Google
					</div>
				</a>
				<a href="api/logout" className="ui red google button">
					<div>
						<i className="google icon" />
						Sign Out
					</div>
				</a>
			</div>
		</React.Fragment>
	);
};

export default Header;
