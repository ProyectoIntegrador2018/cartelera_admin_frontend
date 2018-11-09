import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { faPhone, faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { Format, Labels } from 'Helpers/index'
import { Button, UserAvatar, Tag } from 'Presentational/elements'
import { Toggle as ToggleUser } from 'Containers/users'
import { campusList } from 'Config/Test'

const UserShow = (props) => {
    let selectedItem = document.getElementById(`list-item-${props.user.id}`)
    selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    return <div className='expanded-selection'>
        <Title user={props.user} />
        <Details user={props.user} />
        <Actions user={props.user} />
    </div>
}

const Actions = (props) => (
    <div className='actions'>
        <ToggleUser userToToggle={props.user} />
        <Link to={`${props.user.id}/editar`}>
            <Button type="primary lg">
                Editar
            </Button>
        </Link>
    </div>
)

const getUserTitle = (user) => {
    return user.firstName ?
        `${user.firstName} ${user.lastName}`
        : user.email
}

const Title = (props) => {
    return <div className='title'>
        <UserAvatar user={props.user} size={100} />
        <div className='name'>
            <p>{getUserTitle(props.user)}</p>
        </div>
        <div className='title-tag green'>
            {props.user.isNewbie && <Tag>Nuevo</Tag>}
        </div>
    </div>
}

const Details = (props) => {
    console.log(props.user)
    let email = props.user.email ? props.user.email : ''
    let enabled = props.user.enabled
    let phoneNumber = props.user.phoneNumber ? props.user.phoneNumber : ''
    let office = props.user.office ? props.user.office : ''
    let campus = props.user.campus ? props.user.campus : 'MTY'

    return <div className='details-wrapper'>
        <div className='details'>
            <div className='labels'>
                <div className='label'>{Format.capitalize(Labels.email)}</div>
                <div className='value'>
                    {<FontAwesomeIcon icon={faEnvelope} /> && email}
                </div>
            </div>

            <div className='labels'>
                <div className='label'>{Format.capitalize(Labels.enabled)}</div>
                <div className='value'>
                    {enabled ? 'Activado' : 'Bloqueado'}
                </div>
            </div>

            <div className='labels'>
                <div className='label'>{Format.capitalize(Labels.phoneNumber)}</div>
                <div className='value'>
                    {<FontAwesomeIcon icon={faPhone} /> && phoneNumber}
                </div>
            </div>

            <div className='labels'>
                <div className='label'>{Format.capitalize(Labels.office)}</div>
                <div className='value'>
                    {office}
                </div>
            </div>

            <div className='labels'>
                <div className='label'>{Format.capitalize(Labels.campus)}</div>
                <div className='value'>
                    {getCampus(campus)}
                </div>
            </div>
        </div>
    </div>
}

function getCampus (keyToFind) {
    var campusObject = campusList.find(function (obj) { return obj.key === keyToFind })
    return campusObject.text
}



export default UserShow