import React from 'react';
import { Route, Routes } from 'react-router-dom';
import headers from '../../routes/headerRoutes';
import { AliveScope } from "react-activation";

const HeaderRoutes = () => {
	return (
		<AliveScope>
			<Routes>
				{headers.map((page) => (
					<Route key={page.path} {...page} />
				))}
			</Routes>
		</AliveScope>
	);
};

export default HeaderRoutes;
