import React from 'react';
import { List, Datagrid,  TextField, NumberField } from 'react-admin';

export const PeopleList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="firstname" />
            <TextField source="lastname" />
        </Datagrid>
    </List>
);
