import React from "react";
import InputBox from "./InputBox";
import FilePreview from "./FilePreview";
import type { UploadedFile } from "./FileUploadPopover";

interface PreChatScreenProps {
  currentWord: string;
  inputValue: string;
  setInputValue: (v: string) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onAttachClick: () => void;
  uploadedFile?: UploadedFile | null;
  onRemoveFile?: () => void;
}

const PreChatScreen = ({
  currentWord,
  inputValue,
  setInputValue,
  onSend,
  onKeyDown,
  onAttachClick,
  uploadedFile,
  onRemoveFile,
}: PreChatScreenProps) => (
  <div className="flex h-full flex-col items-center justify-center gap-10 px-8">
    <div className="font-instrument flex items-baseline gap-2 select-none">
      <h1 className="text-app-blue text-6xl font-normal">Need Info on</h1>
      <span className="text-app-gold inline-block text-6xl font-normal">
        <p>{currentWord}?</p>
      </span>
    </div>

    <div className="w-full max-w-xl">
      <InputBox
        value={inputValue}
        onChange={setInputValue}
        onKeyDown={onKeyDown}
        onSend={onSend}
        placeholder="What advising questions do you have?"
        onAttachClick={onAttachClick}
      />

      {uploadedFile && onRemoveFile && (
        <div className="mt-3 flex">
          <FilePreview uploadedFile={uploadedFile} onRemove={onRemoveFile} />
        </div>
      )}
    </div>
  </div>
);

export default PreChatScreen;
