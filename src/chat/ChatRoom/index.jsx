import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from '@firebase/firestore';
import { Avatar, Button, Col, Row, Space, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/config';
import MessagesChat from './components/MessagesChat';
import RoomChat from './components/RoomChat';
import './style.scss';


function ChatRoom(props) {
    const [messages, setMessages] = useState([])

    const [nameRoom, setNameRoom] = useState('GENERAL ROOM')
    const Rooms = (NumberRoom) => {
        setNameRoom(NumberRoom)
    }

    // Get Firestore
    useEffect(() => {

        const collectionRef = collection(db, nameRoom);
        const q = query(collectionRef, orderBy('createdAt', 'asc'))

        onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => doc.data()));
        })
    }, [nameRoom])

    const filtername = [...new Set(messages.map(name => name.displayName))]

    // Form
    const [FormValue, setFormValue] = useState('')

    //Add Firestore with random ID 
    const handleSubmit = async (e) => {
        // Get Value From Form
        e.preventDefault();

        const { uid, photoURL, displayName } = auth.currentUser;

        //Add on FireStore
        const docRef = await addDoc(collection(db, nameRoom), {
            text: { FormValue },
            createdAt: serverTimestamp(),
            uid,
            photoURL,
            displayName
        });
        console.log(docRef);
        setFormValue('')
    }


    return (
        <>
            <Row className='chatroom' align='bottom' >
                <Col xl={8} sm={24} md={10} style={{ borderRight: '3px solid hotpink' }} >
                    <div className='chatroom_signout'>
                        <Space>
                            <img src={auth.currentUser.photoURL} alt={auth.currentUser.photoURL} />
                            <strong>{auth.currentUser.displayName}</strong>
                            <Button type='primary' size='large' ghost onClick={() => auth.signOut()}>Sign Out</Button>
                        </Space>
                    </div>
                    <hr />

                    <RoomChat changeRoom={Rooms} />

                </Col>

                <Col span={24} xl={16} sm={24} md={14}  >
                    <div className='chatroom_header'>
                        <div className='chatroom_header_contact'>
                            <p>{nameRoom}</p>
                            <Avatar.Group size='large' className='avatar' maxCount={2}>
                                {filtername.map((item,idx) => {
                                    return (
                                        <Tooltip key={idx} title={item}>
                                            <Avatar style={{backgroundColor:'hotpink'}}>{item.charAt(0).toUpperCase()}</Avatar>
                                        </Tooltip>
                                    )
                                })}

                            </Avatar.Group>
                            <p >You Are At {nameRoom}</p>
                        </div>
                    </div>


                    <div className='chatroom_chatbox'>
                        <MessagesChat mess={messages} />
                        <form className='formchatbox' onSubmit={handleSubmit}>
                            <input value={FormValue} autoFocus onChange={e => setFormValue(e.target.value)} />
                            <button type='submit' > Submit </button>
                        </form>
                    </div>
                </Col>

            </Row>
        </>
    );
}

export default ChatRoom;