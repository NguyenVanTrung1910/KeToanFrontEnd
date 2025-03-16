import React from 'react';
import { Route, Routes } from 'react-router-dom';
import asides from '../../routes/asideRoutes';
import { AliveScope } from "react-activation";

const AsideRoutes = () => {
	return (
		<AliveScope>
			<Routes>
				{asides.map((page) => (
					<Route key={page.path} {...page} />
				))}
			</Routes>
		</AliveScope>
	);
};

export default AsideRoutes;
