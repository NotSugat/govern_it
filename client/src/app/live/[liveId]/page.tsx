"use client";
import React, { useState, useEffect, FormEvent } from "react";
import SingleMessage from "../../components/SingleMessage";
import Navbar from "../../components/Navbar";
import { io, Socket } from "socket.io-client";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Divide, Sidebar } from "lucide-react";
import SideNavBar from "@/app/components/SideNavbar";
import SideNavbar from "@/app/components/SideNavbar";

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
  const params = useParams();
  // console.log();
  const [allMessages, setAllMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  // const {userInfo} = useSelector((state)=>state.auth);
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;
  const stream_id = params.liveId;
  const userName = "Anonymous User";
  const socket: Socket = io("http://localhost:3001");

  socket.on("connect", () => {
    console.log("Connected to Socket.IO server");
  });

  socket.on("message", (data: string) => {
    console.log("Received message from server:", data);
  });
  useEffect(() => {
    if (socket == null) return;
    socket.emit("joinRoomCode", stream_id);
    return () => {
      socket.off("joinRoomCode");
    };
  }, [socket, stream_id]);

  useEffect(() => {
    console.log(allMessages);
    const chatMessages = document.getElementById("chat-messages");
    // chatMessages.scrollTop = chatMessages.scrollHeight;
  }, [allMessages]);

  useEffect(() => {
    if (socket == null) return;

    socket.on("message", (receivedMessage) => {
      console.log(receivedMessage);
    });

    socket.on("receiveChatMessage", (data) => {
      let updatedData = {};
      updatedData = data;
      // console.log(allMessages);

      setAllMessages(() => [
        ...allMessages,
        {
          inputText: data.inputText,
          userName: data.userName,
          currentTime: data.currentTime,
        },
      ]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket, allMessages]);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (socket == null) return;

    const currentTime = `${hours}:${minutes}`;

    socket.emit("chatMessage", { inputText, userName, currentTime });
    setInputText("");
  };

  return (
    <main className="">
      <Navbar />
      <SideNavbar />
    </main>
  );
};

export default Live;
