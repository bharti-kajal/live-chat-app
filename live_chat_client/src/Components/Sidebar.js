import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItems from './ConversationItems';
import { useState } from 'react';

function Sidebar({ conversations, onSelectConversation })
{
    return(
        <div className="sidebar-container">
            <div className="sb-header">
                <div>
                <IconButton>
                <AccountCircleIcon />
                </IconButton>
                </div>

                <div>
                <IconButton>
                <GroupIcon />
                </IconButton>
                <IconButton>
                <AddCircleIcon />
                </IconButton>
                <IconButton>
                <NightlightIcon />
                </IconButton>
                <IconButton>
                <PersonAddIcon />
                </IconButton>
                </div>
             </div>
            <div className="sb-search">
                <IconButton>
        
                <SearchIcon />
                </IconButton>
                <input placeholder="Search" className='search-box'/>
            </div>
            <div className="sb-conversations">
                {conversations.map((conversation, index) => {
                    return (<ConversationItems props={conversation} key={index} />)
                })}
            </div>
        </div>
    );
    
}

export default Sidebar;