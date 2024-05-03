import React from 'react';


const FormatName = ({ user }) => {

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    }

    return (
        <div>
            <h2>Full Name</h2>
            <p>Full name: {formatName(user)}</p>
        </div>
    );
}


const App = () => {
    const user = {
        firstName: 'Nguyễn Văn',
        lastName: 'Nam'
    };

    return (
        <div>
            <FormatName user={user} />
        </div>
    );
}

export default App;
