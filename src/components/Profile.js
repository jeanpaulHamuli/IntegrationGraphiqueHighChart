import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    state = {
        data : {} 
    }
    
    componentDidMount() {
        const data = this.props.match.params.id;

        let payload = {
            token: "6sNvmQPBDDYFZfI1DNTX2A",
            data: {
              name: "nameFirst",
              email: "internetEmail",
              phone: "phoneHome",
              _repeat: 300
            }
        };
        
        axios({
          method: "post",
          url: "https://app.fakejson.com/q",
          data: payload
        }).then((resp) => {
            this.setState({
                data : resp.data[data],
            })
        });
    }
    

    render() {
        const {email, name, phone } = this.state.data;
        return (
            <div className="container mt-3">
                <h1>Profile</h1>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Nom :</strong> {name} </li>
                    <li className="list-group-item"><strong>Email :</strong> {email} </li>
                    <li className="list-group-item"><strong>Phone :</strong> {phone} </li>
                </ul>
            </div>
        )
    }
}

export default Profile
