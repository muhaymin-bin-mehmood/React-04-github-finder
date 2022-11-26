import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, id } }) => {
    return (
        <div key={id} className='card shadow-md compact side bg-base-100'>
            <div className='flex-row item-center space-x-4 card-body'>
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <Link to={`/user/${login}`} className='text-base-content text-opacity-40'>Visit Profile</Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propType = {
    user: PropType.object.isRequired
}

export default UserItem
