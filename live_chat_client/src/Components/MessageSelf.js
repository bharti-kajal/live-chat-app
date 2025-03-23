function MessageSelf({ message, time }) {
    return (
        <div className="message-self">
            <div className="message-content">
                <p className="message-text">{message}</p>
                <span className="message-time">{time}</span>
            </div>
        </div>
    );
}

export default MessageSelf;
