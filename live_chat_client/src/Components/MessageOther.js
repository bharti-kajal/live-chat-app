function MessageOther({ name, message, time }) {
    return (
        <div className="message-other">
            <div className="avatar">{name[0]}</div>
            <div className="message-content">
                <p className="message-name">{name}</p>
                <p className="message-text">{message}</p>
                <span className="message-time">{time}</span>
            </div>
        </div>
    );
}

export default MessageOther;
