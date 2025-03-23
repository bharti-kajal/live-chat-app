import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";
function ChatArea({ props }) {
  return (
    <div className="chartArea-container">
      <div className="chatArea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className="con-timeStamp">{props.timeStamps}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>

      <div className="messages-container">
        <MessageOther
          name="RandomUser"
          message="This is a Sample Message"
          time="12:00am"
        />
        <MessageSelf message="This is a Sample Message" time="12:00am" />
        <MessageOther
          name="RandomUser"
          message="This is a Sample Message"
          time="12:00am"
        />
        <MessageSelf message="This is a Sample Message" time="12:00am" />
      </div>

      <div className="text-input-area">
        <input placeholder="Type a Message" className="search-box" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
