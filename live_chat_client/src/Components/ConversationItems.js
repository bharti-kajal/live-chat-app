function ConversationItems({props})
{
    return(
            <div className="conversation-container">
            <div className="con-icon">{props.name[0]}</div>
            <div>
                <p className="con-title">{props.name}</p>
                <p className="con-lastMessage">{props.lastMessage}</p>
            </div>
            <p className="con-timestamp">{props.timestamps}</p>
            </div>
    )
}

export default ConversationItems;