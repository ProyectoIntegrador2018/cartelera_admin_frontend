import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Layout as EventsLayout } from '../events/Index'
import { Layout as ProfileLayout } from '../profile/Index'
import { Layout as UsersLayout } from '../users/Index'
import { Layout as CategoriesLayout } from '../categories/Index'

export const DefaultRoute = props => (
    <Route exact path='/' render={() => <Redirect to='eventos' />} />
)
export const EventsRoutes = props => (
    <Route path='/eventos' render={(props) =>
        <div className='page-container'><EventsLayout {...props} /></div>} />
)
export const UsersRoute = props => (
    <Route path='/usuarios' render={(props) =>
        <div className='page-container'><UsersLayout {...props} /></div>} />
)

export const CategoriesRoute = props => (
    <Route path='/categorias' render={CategoriesLayout} />
)

export const ProfileRoute = props => (
    <Route path='/perfil' render={() =>
        <div className='page-container'><ProfileLayout user={props.user} logout={props.logout}/></div>} />
)