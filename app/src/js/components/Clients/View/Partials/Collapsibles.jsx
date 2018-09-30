import React from 'react';
import { Collapsible } from 'react-materialize';

import Progress from '../../../Common/Utils/Progress';
import Form from './Form';
import ListClient from './List/ListClient';
import ListCredit from './List/ListCredit';
import CollapsibleItem from '../../../Common/Collapsible/CollapsibleItems';

const Collapsibles = (props) => {
    const { client } = props;
    if (!client.credit) {
        return (
            <Progress type="circle" />
        )
    }
    console.log(client.credit)

    let contentCollap = client.credit.addCredit  ? <ListCredit credit={client.credit} /> :  <Form />;
   
    return (
        <Collapsible popout>
            <CollapsibleItem header='Detail Client' icon='assignment'  content={<ListClient client={client} />} />
            <CollapsibleItem header='Credit' icon='credit_card' expanded content={contentCollap} />
            {/* <CollapsibleItem header='Detail Client' icon='assignment'>
               
            </CollapsibleItem>
            <CollapsibleItem header='Credit' icon='credit_card'>
                {
                    client.credit.addCredit ?
                        <ul>
                            <li> - Daily Payment: {props.client.credit.valueCredit}</li>
                        </ul>
                        : 
                        "The Client has no  credit"
                }
            </CollapsibleItem> */}

        </Collapsible>
    );
};
export default Collapsibles;
