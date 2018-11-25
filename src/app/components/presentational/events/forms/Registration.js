import React from 'react'
import {
    TextField,
    TextFieldArea,
    FieldSingleDate,
    NumberField,
    ToggleField
} from 'Presentational/elements/Input'
import { Entity } from 'Helpers/object'

export const EventsFormsRegistration = (props) => (
    <div>
        <div className="form-general-data">
            <h3>Notas:</h3>

            <ul>
                <li>Si utilizarás el sistema de registro de la plataforma activa la opción "Usar funcionalidad de registro de la página".</li>
                <li>Si utilizarás el sistema de registro de la plataforma escribe un mensaje de confirmación de registro.</li>
                <li>Si utilizarás el sistema de registro de la plataforma establece una fecha límite para el registro.</li>
            </ul>
        </div>

        <br></br>

        <React.Fragment>

            <div className='registration-toggler'>
                <ToggleField label='hasRegistration' {...props} />

                {props.values.hasRegistration &&
                    <TextFieldArea label='registrationMessage' {...props} />
                }

                {!props.values.hasRegistration &&
                    <TextField label='registrationUrl' {...props} />
                }
            </div>

            <TextFieldArea label='requirementsToRegister' {...props} />

            <ToggleField label='hasCapacity' {...props} />

            {props.values.hasCapacity && <NumberField label='maxCapacity' {...props} />}

            <ToggleField label='hasDeadline' {...props} />

            {props.values.hasDeadline && <FieldSingleDate label='registrationDeadline' {...props} />}

        </React.Fragment>
    </div>
)