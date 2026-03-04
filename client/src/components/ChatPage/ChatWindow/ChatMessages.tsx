import React from "react";
import type { Message } from "../../../hooks/useChatMessages";
import FilePreview from "./FilePreview";

interface ChatMessagesProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const ChatMessages = ({ messages, messagesEndRef }: ChatMessagesProps) => (
  <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-8 py-6 no-scrollbar">
    {messages.map((msg) => (
      <div key={msg.id} className="flex flex-col items-end gap-1.5">
        <div className="animate-slide-up max-w-sm rounded-2xl rounded-tr-sm bg-gray-100 px-4 py-3 text-sm leading-relaxed text-gray-800">
          {msg.text}
        </div>
        {msg.attachedFile && (
          <FilePreview uploadedFile={msg.attachedFile} onRemove={null} />
        )}
      </div>
    ))}
    <div ref={messagesEndRef} />
  </div>
);

export default ChatMessages;
