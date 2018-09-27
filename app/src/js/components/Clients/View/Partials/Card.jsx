import React from 'react';

import ActionBarView from './ActionBarView';
import Collapsibles from './Collapsibles';
import Icon from '../../../Common/Icons';
import PayInput from '../../../Common/Input';

const Card = (props) => (
    <div className="card sticky-action">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="https://t1.ev.ltmcdn.com/es/posts/3/9/3/img_un_bano_de_bosque_el_arte_de_disfrutar_de_la_naturaleza_393_600.jpg" />
            <span className="card-title">{props.client.firstName} {props.client.lastName}</span>
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Details Cleint<Icon icon="more_vert" className="right" /></span>
            <Collapsibles {...props} />
        </div>
        <div className="card-action center-align">
            <ActionBarView />
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{props.client.firstName}<Icon icon="close" className="right" /></span>
            <PayInput
                id="payCredit"
                name="payCredit"
                // value={props.client.firstName ? props.client.firstName: "" }
                text="Pay Credit"
                autoFocus={true}
                icon="account_circle"
                classNameIcon="prefix"
                onChange={(e) => props.loadClient(e)}
            />
        </div>
    </div>
);

export default Card;
