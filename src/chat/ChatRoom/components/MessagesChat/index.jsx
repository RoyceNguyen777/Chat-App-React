import React, { useEffect, useRef } from 'react';
import { auth } from '../../../../firebase/config';

function MessagesChat({ mess }) {
    const scrollbottom = useRef(null)
    const handleScroll = () => {
        scrollbottom.current.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(() => {
        if (scrollbottom.current) {
            handleScroll()
        }
    });
    return (
        <div>
            {mess.map((data, idx) => (
                <div key={idx} className={
                    data.uid === auth.currentUser.uid ? 'sent' : 'received'
                }>
                    <img style={{ borderRadius: '50%' }} src={String(data.photoURL)} alt={data.photoURL} />
                    {data.displayName}

                    <p style={{ marginTop: '30px' }} ref={scrollbottom} >
                        {data.text.FormValue}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default MessagesChat;