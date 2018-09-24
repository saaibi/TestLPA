import React from 'react';
import PropTypes from 'prop-types';

import Columnas from './Partials/Columnas';
import Filas from './Partials/Filas';
// import contactos from "../../../reducers/contactos";

const Grid = ({ clients }) => {
	// const numbers = [1, 2, 3, 4, 5];
	// console.log(numbers.map((number) => console.log(number)));
		console.log("#####",clients )
	// console.log( contactos.map((contac) => console.log(contac)))
	return (
		<div className=" ">
			<table className="striped centered ">
				{/* <Columnas />
			<Filas contactos={contactos} /> */}
				<thead>
					<tr>
						<th>Name</th>
						<th>Item Name</th>
						<th>Item Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						{/* {
							contactos.map(
								(contacto, index) => <Fila key={index} contacto={contacto} />
							)
						} */}
					</tr>
				</tbody>
			</table>
		</div>
	);
}

Grid.propTypes = {
	contactos: PropTypes.array,
};

export default Grid;
