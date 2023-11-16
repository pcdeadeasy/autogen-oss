import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  XMarkIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import React, { ReactNode, useRef } from "react";
import Icon from "./icons";
import { Modal } from "antd";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { truncateText } from "./utils";

interface CodeProps {
  node?: any;
  inline?: any;
  className?: any;
  children?: React.ReactNode;
}

interface IProps {
  children?: ReactNode;
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  count?: number;
  active?: boolean;
  cursor?: string;
  icon?: ReactNode;
  padding?: string;
  className?: string;
  open?: boolean;
  hoverable?: boolean;
  onClick?: () => void;
}

export const SectionHeader = ({
  children,
  title,
  subtitle,
  count,
  icon,
}: IProps) => {
  return (
    <div className="mb-4">
      <h1 className="text-primary text-2xl">
        {/* {count !== null && <span className="text-accent mr-1">{count}</span>} */}
        {icon && <>{icon}</>}
        {title}
        {count !== null && (
          <span className="text-accent mr-1 ml-2 text-xs">{count}</span>
        )}
      </h1>
      {subtitle && <span className="inline-block">{subtitle}</span>}
      {children}
    </div>
  );
};

export const IconButton = ({
  onClick,
  icon,
  className,
  active = false,
}: IProps) => {
  return (
    <span
      role={"button"}
      onClick={onClick}
      className={`inline-block mr-2 hover:text-accent transition duration-300 ${className} ${
        active ? "border-accent border rounded text-accent" : ""
      }`}
    >
      {icon}
    </span>
  );
};

export const LaunchButton = ({ children, onClick }: any) => {
  return (
    <button
      role={"button"}
      className={`    focus:ring ring-accent  ring-l-none  p-3 px-5 rounded  cursor-pointer hover:brightness-110 bg-accent transition duration-500    text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, onClick, className }: any) => {
  return (
    <button
      role={"button"}
      className={` ${className}   focus:ring ring-accent  p-2 px-5 rounded  cursor-pointer hover:brightness-90 bg-secondary transition duration-500    text-primary`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Card = ({
  children,
  title,
  subtitle,
  hoverable = true,
  active,
  cursor = "cursor-pointer",
  className = "p-3",
  onClick,
}: IProps) => {
  let border = active
    ? "border-accent"
    : "border-secondary hover:border-accent ";
  border = hoverable ? border : "border-secondary";

  return (
    <div
      onClick={onClick}
      role={"button"}
      className={`${border} border-2 bg-secondary  group ${className} rounded ${cursor} transition duration-300`}
    >
      <div className="mt- text-sm text-secondary  break-words">
        {title && (
          <div className="text-accent rounded font-semibold  text-xs pb-1">
            {title}
          </div>
        )}
        <div>{subtitle}</div>
      </div>
    </div>
  );
};

export const CollapseBox = ({
  title,
  subtitle,
  children,
  className = " p-3",
  open = false,
}: IProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(open);
  const chevronClass = "h-4 cursor-pointer inline-block mr-1";
  return (
    <div
      onMouseDown={(e) => {
        if (e.detail > 1) {
          e.preventDefault();
        }
      }}
      className="bordper border-secondary rounded"
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`cursor-pointer bg-secondary p-2 rounded ${
          isOpen ? "rounded-b-none " : " "
        }"}`}
      >
        {isOpen && <ChevronUpIcon className={chevronClass} />}
        {!isOpen && <ChevronDownIcon className={chevronClass} />}

        <span className=" inline-block -mt-2 mb-2 text-xs">
          {" "}
          {/* {isOpen ? "hide" : "show"} section |  */}
          {title}
        </span>
      </div>

      {isOpen && (
        <div className={`${className} bg-light  rounded rounded-t-none`}>
          {children}
        </div>
      )}
    </div>
  );
};

export const HighLight = ({ children }: IProps) => {
  return <span className="border-b border-accent">{children}</span>;
};

export const LoadBox = ({
  subtitle,
  className = "my-2 text-accent ",
}: IProps) => {
  return (
    <div className={`${className} `}>
      {" "}
      <span className="mr-2 ">
        {" "}
        <Icon size={5} icon="loading" />
      </span>{" "}
      {subtitle}
    </div>
  );
};

export const LoadingBar = ({ children }: IProps) => {
  return (
    <>
      <div className="rounded bg-secondary mt-4 p-3">
        <span className="inline-block h-6 w-6 relative mr-2">
          <Cog8ToothIcon className="animate-ping text-accent absolute inline-flex h-full w-full rounded-ful  opacity-75" />
          <Cog8ToothIcon className="relative text-accent animate-spin  inline-flex rounded-full h-6 w-6" />
        </span>
        {children}
      </div>
      <div className="relative">
        <div className="loadbar rounded-b"></div>
      </div>
    </>
  );
};

export const MessageBox = ({ title, children, className }: IProps) => {
  const messageBox = useRef<HTMLDivElement>(null);

  const closeMessage = () => {
    if (messageBox.current) {
      messageBox.current.remove();
    }
  };

  return (
    <div
      ref={messageBox}
      className={`${className} p-3  rounded  bg-secondary transition duration-1000 ease-in-out  overflow-hidden`}
    >
      {" "}
      <div className="flex gap-2 mb-2">
        <div className="flex-1">
          {/* <span className="mr-2 text-accent">
            <InformationCircleIcon className="h-6 w-6 inline-block" />
          </span>{" "} */}
          <span className="font-semibold text-primary text-base">{title}</span>
        </div>
        <div>
          <span
            onClick={() => {
              closeMessage();
            }}
            className=" border border-secondary bg-secondary brightness-125 hover:brightness-100 cursor-pointer transition duration-200   inline-block px-1 pb-1 rounded text-primary"
          >
            <XMarkIcon className="h-4 w-4 inline-block" />
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export const GroupView = ({ children, title, className = "" }: any) => {
  return (
    <div className={`rounded mt-4  border-secondary   ${className}`}>
      <div className="mt-4 p-2 rounded border relative">
        <div className="absolute  -top-5   bg-primary p-2 inline-block">
          {title}
        </div>
        <div className="mt-2"> {children}</div>
      </div>
    </div>
  );
};

export const ExpandView = ({ children, className = "" }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`  rounded mb-6  border-secondary ${className}`}>
      <div
        role="button"
        onClick={() => {
          setIsOpen(true);
        }}
        className="text-xs mb-2 break-words"
      >
        {children}
      </div>
      {isOpen && (
        <Modal
          width={800}
          open={isOpen}
          onCancel={() => setIsOpen(false)}
          footer={null}
        >
          {children}
        </Modal>
      )}
    </div>
  );
};

export const MarkdownView = ({
  data,
  className = "",
  showCode = true,
}: {
  data: string;
  className?: string;
  showCode?: boolean;
}) => {
  function processString(inputString: string): string {
    inputString = inputString.replace(/\n/g, "  \n");
    const markdownPattern = /```markdown\s+([\s\S]*?)\s+```/g;
    return inputString?.replace(markdownPattern, (match, content) => content);
  }
  const [showCopied, setShowCopied] = React.useState(false);

  const CodeView = ({ props, children, language }: any) => {
    const [codeVisible, setCodeVisible] = React.useState(showCode);
    return (
      <div>
        <div className="  flex  ">
          <div
            role="button"
            onClick={() => {
              setCodeVisible(!codeVisible);
            }}
          >
            {!codeVisible && (
              <div className=" text-white hover:text-accent duration-300">
                <ChevronDownIcon className="inline-block  w-5 h-5" />
                <span className="text-xs"> show</span>
              </div>
            )}

            {codeVisible && (
              <div className=" text-white hover:text-accent duration-300">
                {" "}
                <ChevronUpIcon className="inline-block  w-5 h-5" />
                <span className="text-xs"> hide</span>
              </div>
            )}
          </div>
          <div className="flex-1"></div>
          <div>
            {showCopied && (
              <div className="inline-block text-sm       text-white">
                {" "}
                🎉 Copied!{" "}
              </div>
            )}
            <ClipboardIcon
              role={"button"}
              onClick={() => {
                navigator.clipboard.writeText(data);
                // message.success("Code copied to clipboard");
                setShowCopied(true);
                setTimeout(() => {
                  setShowCopied(false);
                }, 3000);
              }}
              className=" inline-block duration-300 text-white hover:text-accent w-5 h-5"
            />
          </div>
        </div>
        {codeVisible && (
          <SyntaxHighlighter
            {...props}
            style={atomDark}
            language={language}
            className="rounded w-full"
            PreTag="div"
            wrapLongLines={true}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        )}
      </div>
    );
  };

  return (
    <div
      className={` w-full   chatbox prose dark:prose-invert text-primary rounded p-2 ${className}`}
    >
      <ReactMarkdown
        className="  w-full"
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }: CodeProps) {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "text";
            return !inline && match ? (
              <CodeView props={props} children={children} language={language} />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {processString(data)}
      </ReactMarkdown>
    </div>
  );
};

interface ICodeProps {
  code: string;
  language: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string | undefined;
  wrapLines?: boolean;
  maxWidth?: string;
  maxHeight?: string;
  minHeight?: string;
}

export const CodeBlock = ({
  code,
  language = "python",
  showLineNumbers = false,
  className = " ",
  wrapLines = false,
  maxHeight = "400px",
  minHeight = "auto",
}: ICodeProps) => {
  const codeString = code;

  const [showCopied, setShowCopied] = React.useState(false);
  return (
    <div className="relative">
      <div className="  rounded absolute right-5 top-4 z-10 ">
        <div className="relative border border-transparent w-full h-full">
          <div
            style={{ zIndex: -1 }}
            className="w-full absolute top-0 h-full bg-gray-900 hover:bg-opacity-0 duration-300 bg-opacity-50 rounded"
          ></div>
          <div className="   ">
            {showCopied && (
              <div className="inline-block px-2 pl-3 text-white">
                {" "}
                🎉 Copied!{" "}
              </div>
            )}
            <ClipboardIcon
              role={"button"}
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                // message.success("Code copied to clipboard");
                setShowCopied(true);
                setTimeout(() => {
                  setShowCopied(false);
                }, 6000);
              }}
              className="m-2  inline-block duration-300 text-white hover:text-accent w-5 h-5"
            />
          </div>
        </div>
      </div>
      <div
        id="codeDivBox"
        className={`rounded w-full overflow-auto overflow-y-scroll   scroll ${className}`}
        style={{ maxHeight: maxHeight, minHeight: minHeight }}
      >
        <SyntaxHighlighter
          id="codeDiv"
          className="rounded-sm h-full break-all"
          language={language}
          showLineNumbers={showLineNumbers}
          style={atomDark}
          wrapLines={wrapLines}
          wrapLongLines={wrapLines}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

// Controls Row
export const ControlRowView = ({
  title,
  description,
  value,
  control,
  className,
}: {
  title: string;
  description: string;
  value: string | number;
  control: any;
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      <div>
        <span className="text-primary inline-block">{title} </span>
        <span className="text-xs ml-1 text-accent -mt-2 inline-block">
          {truncateText(value + "", 20)}
        </span>
      </div>
      <div className="text-secondary text-xs"> {description} </div>
      {control}

      <div className="border-b border-dashed mt-2 mx-2"></div>
    </div>
  );
};
