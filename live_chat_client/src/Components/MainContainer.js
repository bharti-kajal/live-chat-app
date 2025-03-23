import './style.css';
import Sidebar from './Sidebar';
import ChatArea from './CharArea';
import { useState } from 'react';
function MainContainer()
{
      const [conversations] = useState([
            {
                name: "Kajal Bharti",
                lastMessage: "Last Message #01",
                timestamps: "Today"
            },
            {
                name: "Asmita Pritam",
                lastMessage: "Last Message #02",
                timestamps: "Today"
            },
            {
                name: "Falak Chandani",
                lastMessage: "Last Message #03",
                timestamps: "Today"
            }
        ]);
        const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
    return(
        <div className="main-container">
            <Sidebar 
                conversations={conversations} 
                onSelectConversation={setSelectedConversation} 
            />
            <ChatArea props={selectedConversation} />
        </div>
    )
}

export default MainContainer;