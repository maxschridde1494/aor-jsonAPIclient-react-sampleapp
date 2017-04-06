import React from 'react';

import { Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';

import Dashboard from './Dashboard';
import { SchoolList, SchoolEdit, SchoolCreate } from './schools';
import { StudentList, StudentEdit, StudentCreate } from './students';

import jsonAPIRestClient from 'aor-jsonapi-client/build/restClient';
const restClient = jsonAPIRestClient('https://jsonapi-demo.herokuapp.com');

const App = () => (
    <Admin dashboard={Dashboard} restClient={restClient}>
        <Resource name="schools" list={SchoolList} create={SchoolCreate} edit={SchoolEdit} remove={Delete}/>
        <Resource name="students" list={StudentList} create={StudentCreate} edit={StudentEdit} remove={Delete}/>
    </Admin>
);

export default App;