import React from 'react'
import Layout from './MainLayout'
import { EventsLink, ProfileLinks } from './Links'
import { EventsRoutes, ProfileRoute } from './Routes'

export const ApplicantLayout = props => (
    <Layout
        title={'Applicant'}
        links={[
            <EventsLink />,
            <ProfileLinks
                user={props.currentUser}
                logout={props.logout} />
        ]}
        routes={[
            <EventsRoutes user={props.currentUser} />,
            <ProfileRoute user={props.currentUser} logout={props.logout} />
        ]}
    />
)

export default ApplicantLayout