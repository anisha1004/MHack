import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/auth";

export default function GuestRoute({ component: Component, ...rest }) {
	const { user } = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={(props) =>
				user === null ? <Redirect to='/login' /> : <Component {...props} />
			}
		/>
	);
}
