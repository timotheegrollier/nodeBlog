import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import $ from "jquery";
import Axios from 'axios'









export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { connected: localStorage.getItem("token") ? true : false,
            getMe: (userId) => { Axios.get("/api/auth/getme/" + userId).then(res => this.setState({ userName: res.data.email })) }
    };
    }

    handleMobileMenu = () => {
        $("#nav-icon").toggleClass('open');
        $(".mobileMenu").toggleClass('slideMenu')
    }

    handleDisconnect = async (e) => {
        e.preventDefault()
     await localStorage.removeItem("token")
     this.setState({connected:false})
     window.location.href = "/"
    }

    componentDidMount() {
        if (this.state.connected) {
            const userId = JSON.parse(localStorage.getItem('token')).userId

            this.state.getMe(userId)
        }
    }


    render() {

        return (
            <div className="overflow-hidden">

                <div id="nav">
                    {this.state.connected ? (
                        <ul className='mainMenu'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/messages">Messages</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link onClick={this.handleDisconnect} to="/logout">Deconnexion</Link>
                            </li>
                        </ul>

                    ) : <ul className='mainMenu'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/signup">Inscription</Link>
                        </li>
                        <li>
                            <Link to="/login">Connexion</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>

                    </ul>

                    }
                    <div id="nav-icon" onClick={this.handleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <nav className='d-sm-none mobileMenu' >
                    {this.state.connected ? 
                    
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/messages">Messages</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                            <li>
                                <Link onClick={this.handleDisconnect} to="/logout">Deconnexion</Link>
                            </li>
                    </ul>
                    :
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/signup">Inscription</Link>
                        </li>
                        <li>
                            <Link to="/login">Connexion</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    }
                    {this.state.connected && (
                    <div id='mobileNavLog' className='d-flex flex-column align-items-center'>
                    <p className='mt-5'>Logged as :</p>
                    <p>{this.state.userName}</p>
                    </div>
                    )}
                </nav>
                
            </div>

        )
    }
}
