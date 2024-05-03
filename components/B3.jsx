import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                fullName: 'Nguyễn Văn A',
                gender: 'Nam',
                age: '06/03/2024',
                email: 'nva@gmail.com',
                address: 'Thanh Xuân, Hà Nội'
            }
        };
    }

    render() {
        const { user } = this.state;
        return (
            <div>
                <h2>User Information</h2>
                <p>First Name: {user.fullName}</p>
                <p>Gender:{user.gender}</p>
                <p>Age: {user.age}</p>
                <p>Email: {user.email}</p>
                <p>Address: {user.address}</p>
            </div>
        );
    }
}

export default UserInfo;
