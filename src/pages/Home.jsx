import React from 'react'
import UserResult from '../component/users/UserResult'
import UserSearch from '../component/users/UserSearch'

const Home = () => {
    return (
        <div>
            {/* Search Component */}
            <UserSearch />
            <UserResult />
        </div>
    )
}

export default Home
