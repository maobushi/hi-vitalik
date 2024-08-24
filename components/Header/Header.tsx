import React from "react";

const Header = (props: { name: string }) => {
	return (
		<header className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 shadow-lg">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold text-white">{props.name}</h1>
				<w3m-button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-100 transition duration-300" />
			</div>
		</header>
	);
};

export default Header;
