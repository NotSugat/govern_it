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

          <section className="h-full w-full p-4 shadow-md ">
            <div>
              <p className="text-center text-2xl font-medium">Live Chat</p>
              <ChatDialog />
              <ChatDialog />
              <ChatDialog />
            </div>

            {/* form hala */}
          </section>
        </div>
        {/* new */}
      </div>
    </main>
  );
};

export default Live;
