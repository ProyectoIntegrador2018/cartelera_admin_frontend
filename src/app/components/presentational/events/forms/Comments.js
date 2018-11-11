import React, { Fragment } from 'react'
import { TextFieldArea } from 'Presentational/elements/Input';

export const EventsFormsComments = (props) => (
    <React.Fragment>
        <TextFieldArea label='reviewComments' {...props} />
    </React.Fragment>
)