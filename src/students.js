import React from 'react';
// import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'admin-on-rest/lib/mui';
// import { List, Edit, Create, DateField, DateInput, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';
import { List, Edit, Create, Filter, Datagrid, DateField, DateInput, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';


export const StudentList = (props) => (
    <List {...props} filters={<StudentFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="birthdate" />
            <TextField source="major" />
            <EditButton />
        </Datagrid>
    </List>
);

const StudentTitle = ({ student }) => {
    return <span>Student {student ? `"${student.name}"` : ''}</span>;
};

const StudentFilter = (props) => (
    <Filter {...props}>
        <TextInput source="major" />
    </Filter>
);

export const StudentEdit = (props) => (
    <Edit title={<StudentTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <DateInput source="birthdate" />
            <TextInput source="major" />
        </SimpleForm>
    </Edit>
);

export const StudentCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        	<TextInput source="name" />
            <DateInput source="birthdate" />
            <TextInput source="major" />
        </SimpleForm>
    </Create>
);