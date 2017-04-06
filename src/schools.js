/* eslint-disable */
import React from 'react';
import { List, Datagrid, Edit, Create, Filter, SimpleForm, DateField, TextField, EditButton, DisabledInput, SelectInput, TextInput, LongTextInput, DateInput } from 'admin-on-rest/lib/mui';

export const SchoolList = (props) => (
    <List {...props} filters={<SchoolFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="logo-url" />
            <TextField source="address" />
            <EditButton />
        </Datagrid>
    </List>
);

const SchoolTitle = ({ school }) => {
    return <span>School {school ? `"${school.name}"` : ''}</span>;
};

const SchoolFilter = (props) => (
    <Filter {...props}>
        <TextInput source="name" />
        <TextInput source="logo-url" />
        <TextInput source="address" />
    </Filter>
);

export const SchoolEdit = (props) => (
    <Edit title={<SchoolTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="logo-url" />
            <TextInput source="address" />
        </SimpleForm>
    </Edit>
);

export const SchoolCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        		<TextInput source="name" />
            <TextInput source="logo-url" />
            <TextInput source="address" />
        </SimpleForm>
    </Create>
);