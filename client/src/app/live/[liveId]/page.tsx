"use client";
import React, {useState,useEffect, FormEvent} from 'react';
import SingleMessage from '../../components/SingleMessage';
import Navbar from '../../components/Navbar';
import {io,Socket} from 'socket.io-client';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";


interface SingleMessageProp {
  name: string;
  displayTime: string;
  message: string;
}

interface Message {
    inputText: string;
    userName: string;
    currentTime: string;
  }
  

const Live = () => {

    const [allMessages, setAllMessages] = useState<Message[]>([]);    ;
    const [inputText, setInputText] = useState('');
    // const {userInfo} = useSelector((state)=>state.auth);
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');           
    const currentTime = `${hours}:${minutes}`
    const {id:stream_id} = useParams();
    const userName = "Anonymous User";
    const socket: Socket = io("http://localhost:3001");

    socket.on("connect", () => {
        console.log("Connected to Socket.IO server");
      });
      
    socket.on("message", (data: string) => {
        console.log("Received message from server:", data);
    });
    useEffect(()=>{
        if (socket == null) return; 
        socket.emit('joinRoomCode',stream_id)
        return ()=>{
            socket.off('joinRoomCode');
        }
    },[socket, stream_id])

    useEffect(()=>{
        if(socket == null) return ; 
        
        socket.on("message",(receivedMessage)=>{
            console.log(receivedMessage)
        });
        
        socket.on("receiveChatMessage", (data)=>{
            let updatedData = {};
            updatedData = data;
             setAllMessages((allMessages)=>[
                ...allMessages, 
                {inputText: data.inputText, userName: data.userName, currentTime: data.currentTime}
            ]
            );
        });
        
        return ()=>{
            socket.off('message')
        }
    },[socket])

    const submitForm = (e: FormEvent)=>{
        e.preventDefault();
        if(socket == null) return ;

        const currentTime = `${hours}:${minutes}`

        socket.emit('chatMessage',{inputText, userName, currentTime})
        setInputText('')
    } 
      

  return (
    <>
      <Navbar />
      <div className="flex flex-col xl:flex-row">
        <div className="w-[65%] bg-blue-500 p-4">
          <iframe
            className="h-[500px] w-[100%]"
            src="https://www.youtube.com/embed/K4DyBUG242c?si=2Vsh5MrU8RhIODat"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>{" "}
        </div>
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
                    <form id="chat-form" onSubmit={submitForm}>
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
