import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./Context/auth";
import AuthRoute from "./Utils/authRoute";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Contribute from "./Pages/Contribute";
import Services from "./Pages/Services";
import Organise from "./Pages/Organise";
import Contact from "./Pages/Contact";
import Consult from "./Pages/Consult";

function App() {
	return (
		<div className='app'>
			<AuthProvider>
				<Router>
					<AuthRoute exact path='/login' component={Login} />
					<AuthRoute exact path='/register' component={Register} />
					<Route exact path='/' component={Home} />
					<Route exact path='/contribute' component={Contribute} />
					<Route exact path='/services' component={Services} />
					<Route exact path='/organise' component={Organise} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/consult' component={Consult} />
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
