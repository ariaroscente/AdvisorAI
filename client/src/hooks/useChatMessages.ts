import { useRef, useState } from "react";
import type { UploadedFile } from "../components/ChatPage/ChatWindow/FileUploadPopover";

export interface Message {
  id: number;
  text: string;
  sender: "user";
  attachedFile?: UploadedFile | null;
}

export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const messageIdRef = useRef(0);

  const addMessage = (text: string, attachedFile?: UploadedFile | null) => {
    setMessages((prev) => [
      ...prev,
      { id: ++messageIdRef.current, text, sender: "user", attachedFile },
    ]);
  };

  const resetMessages = (
    firstMessage: string,
    attachedFile?: UploadedFile | null,
  ) => {
    setMessages([
      {
        id: ++messageIdRef.current,
        text: firstMessage,
        sender: "user",
        attachedFile,
      },
    ]);
  };

  return { messages, addMessage, resetMessages };
}
