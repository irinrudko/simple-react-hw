import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'John Dogh',
    message: "Hey there! What's up man?",
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr />
            homework 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/* <hr />
            для личного творчества, могу проверить
            <AlternativeMessage /> */}
            <hr />
        </div>
    )
}

export default HW1
