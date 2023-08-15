import { useState, useContext } from "react";
import { useTheme } from "@mui/material";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { ColorModeContext, tokens } from "../theme";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
const API_KEY = "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";
const systemMessage = {
  role: "system",
  content: "Explain things like you're a experienced medical doctor.",
};

const Chat = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm MedBot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <MainContainer
      style={{ height: "90.5%", width: "100%", color: colors.grey[400] }}
    >
      <ChatContainer style={{ background: colors.grey[400] }}>
        <MessageList
          scrollBehavior="smooth"
          typingIndicator={
            isTyping ? <TypingIndicator content="MedBot is typing" /> : null
          }
        >
          {messages.map((message, i) => {
            console.log(message);
            return <Message key={i} model={message} />;
          })}
        </MessageList>
        <MessageInput
          style={{ color: colors.grey[400] }}
          placeholder="Type message here"
          onSend={(message) => handleSend(message)}
        />
      </ChatContainer>
    </MainContainer>
  );
};

export default Chat;
