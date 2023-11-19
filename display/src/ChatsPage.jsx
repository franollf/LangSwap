import { PrettyChatWindow } from "react-chat-engine-pretty";


const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId='a87214ea-4a8d-41b4-aef7-71f9576cdeea'
        username={props.user.username} 
        secret={props.user.secret} 
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;