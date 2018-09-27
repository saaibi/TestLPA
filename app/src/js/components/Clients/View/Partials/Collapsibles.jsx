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
                    <li><Icon icon="keyboard_arrow_right" />First Name: {props.client.firstName} </li>
                    <li><Icon icon="keyboard_arrow_right" />Last Name: {props.client.lastName}</li>
                    <li><Icon icon="keyboard_arrow_right" />Id: {props.client.client_id}</li>
                </ul>
            </CollapsibleItem>
            <CollapsibleItem header='Credit' icon='credit_card'>
                The Client has no  credit
                <ul>
                    <li><Icon icon="keyboard_arrow_right" />Pay Day: {props.client.credit.payDaily}</li>
                </ul>
            </CollapsibleItem>
        </Collapsible>
    );
};
export default Collapsibles;
