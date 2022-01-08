import React, { Component } from 'react'
import Axios from 'axios'


export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: localStorage.getItem("token") ? true : false,
            userName: "",
            getMe: (userId) => { Axios.get("/api/auth/getme/" + userId).then(res => this.setState({ userName: res.data.email })) },
            portfolio:(e)=>{
                e.preventDefault()
                    window.open("https://timotheegrollier.github.io/Portfolio")
            }
        };
    }



    componentDidMount() {
        if (this.state.connected) {
            const userId = JSON.parse(localStorage.getItem('token')).userId
            this.state.getMe(userId)
        }
    }


    render() {
        return (
            <div id="footer">
                <div id="footerContent" className='d-none d-sm-flex'>
                    <p>
                        Created by <a href="" onClick={this.state.portfolio}>Timo</a>
                    </p>
                    <p>
                        {this.state.userName && (<span>connécté en tant que {this.state.userName} </span>)}
                    </p>
                </div>
                <div id="mobileFooter" className='text-center'>
                    <p>
                        Created by <a href="" onClick={this.state.portfolio}>Timo</a>
                    </p>
                </div>
            </div>
        )
    }
}
