"use client";
import React, {useState} from 'react';
import SingleMessage from '../components/SingleMessage';
import './homepage.css';
import Navbar from '../components/Navbar';

interface SingleMessageProp {
  name: string;
  displayTime: string;
  message: string;
}

const Live = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');           
  const currentTime = `${hours}:${minutes}`


  return (
    <>
    <Navbar />
      <div className="flex flex-col xl:flex-row">
        <div className="w-[65%] bg-blue-500 p-4">
        <iframe className="w-[100%] h-[500px]" src="https://www.youtube.com/embed/K4DyBUG242c?si=2Vsh5MrU8RhIODat" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>        </div>
        <div className="w-[35%] bg-green-500 p-4">
        <div className="chat-container">
                <header className="chat-header">
                    <h1><i className="fas fa-smile"></i> SXYNIX</h1>
                </header>
                <main className="chat-main">
                    <div className="chat-messages" id='chat-messages'>
                        {
                            allMessages.map((msg : any,index)=>(
                                <SingleMessage key={index}  userName={msg.userName} displayTime={msg.currentTime} message={msg.inputText}/>
                            ))
                        }
                    </div>
                </main>
                <div className="chat-form-container">
                    <form id="chat-form">
                        <input
                            id="msg"
                            value={inputText}
                            type="text"
                            placeholder="Enter Message"
                            required
                            autoComplete="off"
                            onChange={(e)=>{
                                setInputText(e.target.value)
                            }}
                        />
                        <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
                    </form>
                </div>
            </div>        </div>
    </div>
    </>
  );
};

export default Live;
