import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

import Icon from '../../../Common/Icons';
import Progress from '../../../Common/Utils/Progress';

const Collapsibles = (props) => {

    if (!props.client.credit) {
        return (
            <Progress type="circle" />
        )
    }
    console.log(props.client.credit)
    return (
        <Collapsible popout defaultActiveKey={0}>
            <CollapsibleItem header='Detail Client' icon='assignment'>
                <ul>
                    <li> - First Name: {props.client.firstName} </li>
                    <li> - Last Name: {props.client.lastName}</li>
                    <li> - Id: {props.client.client_id}</li>
                </ul>
            </CollapsibleItem>
            <CollapsibleItem header='Credit' icon='credit_card'>
                The Client has no  credit
                <ul>
                    <li> - Daily Payment: {props.client.credit.payDaily}</li>
                </ul>
            </CollapsibleItem>
        </Collapsible>
    );
};
export default Collapsibles;
