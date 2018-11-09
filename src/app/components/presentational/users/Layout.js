import React from 'react'
import { Route, Redirect, NavLink } from 'react-router-dom'
import { Entity } from 'Helpers/object'
import { Add as AddUser, List as UsersList } from 'Containers/users'
import { EditUser, ShowUser } from './index'
import Header from 'Presentational/elements/Header'

const UsersLayout = (props) => {
    let user = props.user
    let userOption = user.userType == 'sponsor' ? 'applicants' : 'sponsors'

    return <React.Fragment>
        <Route
            exact
            path='/usuarios/'
            render={() => <Redirect
                to={`/usuarios/${userOption}/`} />
            } />
        <Route
            path='/usuarios/:type'
            render={(props) => (<UsersPage {...props} user={user} />)
            } />
    </React.Fragment>
}

export const UsersPage = (props) => {
    let filters = props.user.userType == 'sponsor' ? ['applicants'] : ['sponsors', 'admins']
    console.log(props.match.params)

    return <React.Fragment>
        <Header
            {...props}
            mainPath='usuarios'
            filter={filters}>
            <AddUser type={props.match.params.type} />
        </Header>
        <div className='expanded-list'>
            <UsersList
                type={props.match.params.type} />
        </div>
    </React.Fragment>
}

export const SelectedUserRoutes = (props) => (
    <React.Fragment>
        <Route
            exact path='/usuarios/:type'
            render={({ match }) => {
                if (!props.usersAreEmpty) {
                    return <Redirect
                        to={`/usuarios/${match.params.type}/${props.users[0].id}`} />
                }
            }} />
        <Route
            exact
            path='/usuarios/:type/:id/editar'
            render={({ match }) => (
                <EditUser
                    type={match.params.type}
                    user={props.users[Entity.getIndexFromPath(props.users, match)]} />
            )} />
        <Route
            exact
            path='/usuarios/:type/:id'
            render={({ match }) => <ShowUser user={props.users[Entity.getIndexFromPath(props.users, match)]} />
            } />
    </React.Fragment>
)

export default UsersLayout