import React from 'react'
import { Route } from 'react-router-dom'
import AllEvents from './All'
import {
    Edit as EditEvent,
    Create as CreateEvent
} from 'Containers/events/index'
import 'Style/eventsMenuLayout.scss'

const EventsLayout = (props) => {
    let user = props.user
    return (
        <React.Fragment>
            <Route
                exact
                path='/eventos'
                render={() => <AllEvents />} />
            <Route
                path='/eventos/nuevo'
                render={() => <CreateEvent />} />
            <Route
                path='/eventos/:id/editar'
                render={({ match }) => <EditEvent id={match.params.id} user={user} />} />
        </React.Fragment>
    )
}

export default EventsLayout