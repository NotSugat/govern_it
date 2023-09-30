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
import VideoPlayer from "@/app/components/VideoPlayer";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ChatDialog from "@/app/components/ChatDialog";

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
    chatMessages.scrollTop = chatMessages.scrollHeight;
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
    <main className="h-[100dvh] overflow-y-hidden">
      <Navbar />
      <div className="flex  overflow-y-hidden ">
        <SideNavbar />
        <div className="flex w-full ">
          <div className="w-[1260px]">
            <VideoPlayer />
            <div className="flex items-center justify-between  p-4 ">
              <section className="flex gap-4">
                <Image
                  alt="/assets/thimi.jpeg"
                  src="/assets/thimi.jpeg"
                  height={1000}
                  width={1000}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <p className="text-xl font-semibold">
                    Budget Discussion for kartik month for developmental project
                  </p>
                  <p className="text-lg font-medium">
                    Madhyapur Thimi Nagarapalika
                  </p>
                  <p className=" font-medium">🔴 Live</p>
                </div>
              </section>

              <section>
                <button className="flex items-center gap-2 rounded-md bg-secondary p-2">
                  <Icon icon="mdi:heart-outline" />
                  Follow
                </button>
              </section>
            </div>
          </div>

          <section className="scrollbar-hide h-full w-full p-4 shadow-md ">
            <p className="text-center text-2xl font-medium">Live Chat</p>
            <div className="chat-form-container h-[90%]">
              <div className="chat-messages" id="chat-messages">
                {allMessages.map((msg: any, index) => (
                  <SingleMessage
                    key={index}
                    userName={msg.userName}
                    displayTime={msg.currentTime}
                    message={msg.inputText}
                  />
                ))}
              </div>
            </div>
            <form onSubmit={submitForm}>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={inputText}
                    id="msg"
                    className="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-100 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                    onChange={(e) => {
                      setInputText(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 h-full rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <Icon icon="uil:message" className="text-xl" />
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Live;
