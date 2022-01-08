import React, { useState, useEffect, useRef }  from 'react';
import Axios from 'axios'
import Nav from '../components/Nav'
import $ from "jquery";





const Messages = () => {
    let [userName, setUserName] = useState()
    let [messages, setMessages] = useState()
    let newMessage = useRef()
    let [connected, setConnected] = useState()


    useEffect(() => {
        fecthMessages()
        if (localStorage.getItem("token")) {
            setConnected(true)
        }
        if (connected) {
            const userId = JSON.parse(localStorage.getItem('token')).userId

            getMe(userId)
        }



    }, [connected])

    const fecthMessages = async () => {
        await Axios.get('/api/messages/list').then(res => {
            setMessages(res.data.message)
            if (!res.data.message.length) {
                $("#messageBox").hide()
            } else {
                $("#messageBox").show()
            }

        }
        )
    }

    const postMessage = async (e) => {
        e.preventDefault()
        const data = await {
            message: newMessage.current.value
        }
        Axios.post('/api/messages/add', data, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")).token
            }
        }).then(() => {
            fecthMessages();
            newMessage.current.value = ""
        })
    }

    const deleteMessages = async () => {
        Axios.delete('/api/messages/reset', {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")).token
            }
        }).then(() => {
            fecthMessages()
        })
    }

    const getMe = (userId) => {
        Axios.get("/api/auth/getme/" + userId).then(res => setUserName(res.data.email))
    }



    return (
        <div>
            <Nav></Nav>
            <div id="messageBox">
                <div className="results d-flex justify-content-center flex-column align-items-center">
                    {messages ? messages.map((message, index) => {
                        return <p key={index}> {message.message} </p>
                    }) : ""}
                </div>
                
            </div>

            <div className='mt-2 d-flex justify-content-center'>
                {connected && (
                    <form action="/api/messages/add" onSubmit={postMessage} id='messageForm'>
                        <textarea ref={newMessage} id="newMessage" autoComplete='off' rows={5} />
                        <input type="submit" value="Envoyer" />
                    </form>
                )}
            </div>
            <div className="d-flex justify-content-center mt-5">
                {connected &&
                    <div onClick={deleteMessages} id="deleteAll" className='btn btn-danger col-6 col-sm-4'>Delete</div>
                }
            </div>
        </div>
    );
};

export default Messages;