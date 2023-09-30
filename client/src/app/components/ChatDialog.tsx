import Image from "next/image";

const ChatDialog = () => {
  return (
    <div className="flex items-center gap-2  py-1">
      <img
        alt="profile"
        src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/281691109_1417557815428328_2962465581824889224_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=VbllBR0z2HYAX88M8uk&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCTZhllCaBIEcscCISM0opvEQlikcSs4Ni4cYeteijNCw&oe=651CB5EC"
        className="h-10 w-10 cursor-pointer rounded-full"
      />
      <p>Hello Saap</p>
    </div>
  );
};

export default ChatDialog;
