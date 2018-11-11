import React from 'react'
import Layout from './MainLayout'
import { EventsLink, ProfileLinks, UsersLink } from './Links'
import { EventsRoutes, ProfileRoute, UsersRoute } from './Routes'

export const SponsorLayout = props => (
    <Layout
        title={'Sponsor'}
        links={[
            <EventsLink />,
            <UsersLink />,
            <ProfileLinks
                user={props.currentUser}
                logout={props.logout} />
        ]}
        routes={[
            <EventsRoutes user={props.currentUser} />,
            <UsersRoute user={props.currentUser} />,
            <ProfileRoute user={props.currentUser} logout={props.logout} />
        ]}
    />
)

export default SponsorLayout