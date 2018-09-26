import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

import Fields from './Partials/Fields';
import ActionBarEdit from './Partials/ActionBarEdit';

const View = (props) => (
	<div >
		<div className="row">
			<div className="col s12">
				<div className="card">
					<div className="card-image">
						<img src="https://t1.ev.ltmcdn.com/es/posts/3/9/3/img_un_bano_de_bosque_el_arte_de_disfrutar_de_la_naturaleza_393_600.jpg" />
						<span className="card-title">Name</span>
						<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
					</div>
					<div className="card-content">
						<Collapsible popout>
							<CollapsibleItem header='Credit' icon='filter_drama'>
								The Client has no  credit
							</CollapsibleItem>
						</Collapsible>
					</div>
				</div>
			</div>
		</div>
	</div >
);

export default View;