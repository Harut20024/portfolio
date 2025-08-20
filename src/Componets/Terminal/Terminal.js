import React, {useState, useEffect} from "react";
import "./Terminal.css";

const Terminal = () => {
    const initialMessage = ``;
    const [currentPath, setCurrentPath] = useState([]);
    const [output, setOutput] = useState([
        {text: initialMessage, type: "info"},
    ]);
    const [input, setInput] = useState("");

    const fileSystem = {
        AboutMe: {
            readMe: `name = "Harut";
        surname = "Tharzyan";
        profession = "software engineer";

        languages = [
                "Armenian - (★★★★★★)",
                "Russian - (★★★★★☆)",
                "English - (★★★★☆☆)"
    ];`,
        },
        Skills: {
            readMe: `
"Java Core"
"Spring Boot"
"PL/SQL"
"CI/CD"
"Docker"
"Microservices Building"
"Node.js"
"React.js"
"Vue.js"
"MongoDB"
"Linux"
"Git"
"GitHub"
"Salesforce"
"Computer architecture"
"Object Oriented Programming"
"REST API"
"debugging", 
"Problem Solving"
"Attention to details" 
"Mathematical skills"
"TeamWork"
"Communication"
"Coaching" `,
        },
        Experience: {
            readMe: ` Job = 'TUMO',
      period: (2023 - 2024),
      Position: ('learning coach')
      `,
        },
        Education: {
            readMe: `School = 'Foton' - (2013-2020),
      School = 'TUMO' - (2015-2020),
      university = 'NPUA' - (2020 - 2026) `,
        },
    };

    const getCurrentDirectory = () => {
        return currentPath.reduce((dir, subDir) => dir[subDir], fileSystem);
    };

    const handleCommand = (command) => {
        const parts = command.split(" ");
        const cmd = parts[0].toLowerCase();
        const arg = parts[1];

        switch (cmd) {
            case "ls":
                const currentDir = getCurrentDirectory();
                const dirs = Object.keys(currentDir);
                setOutput((prevOutput) => [
                    ...prevOutput,
                    {text: dirs.join(" "), type: "response"},
                ]);
                break;
            case "cd":
                if (!arg) {
                    setCurrentPath([]);
                } else if (arg === "..") {
                    setCurrentPath((prevPath) => prevPath.slice(0, -1));
                } else {
                    const currentDir = getCurrentDirectory();
                    if (currentDir[arg] && typeof currentDir[arg] === "object") {
                        setCurrentPath((prevPath) => [...prevPath, arg]);
                    } else if (currentDir[arg] && typeof currentDir[arg] === "string") {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            {text: `cd: ${arg} is not a directory`, type: "error"},
                        ]);
                    } else {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            {text: `cd: no such file or directory: ${arg}`, type: "error"},
                        ]);
                    }
                }
                break;
            case "cat":
                const currentDirCat = getCurrentDirectory();
                if (currentDirCat && currentDirCat[arg]) {
                    if (typeof currentDirCat[arg] === "string") {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            {text: currentDirCat[arg], type: "response"},
                        ]);
                    } else {
                        setOutput((prevOutput) => [
                            ...prevOutput,
                            {text: `cat: ${arg} is a directory`, type: "error"},
                        ]);
                    }
                } else {
                    setOutput((prevOutput) => [
                        ...prevOutput,
                        {text: `cat: ${arg}: No such file or directory`, type: "error"},
                    ]);
                }
                break;
            case "clear":
                setOutput([]);
                break;
            case "":
                setOutput((prevOutput) => [...prevOutput, {text: ``}]);
                break;
            default:
                setOutput((prevOutput) => [
                    ...prevOutput,
                    {text: `${cmd}: command not found`, type: "error"},
                ]);
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPrompt = getPrompt();
        setOutput((prevOutput) => [
            ...prevOutput,
            {text: input, type: "command", prompt: newPrompt},
        ]);
        handleCommand(input);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            const parts = input.split(" ");
            const currentInput = parts[parts.length - 1];
            const currentDir = getCurrentDirectory();
            const matches = Object.keys(currentDir).filter((item) =>
                item.startsWith(currentInput)
            );
            if (matches.length === 1) {
                parts[parts.length - 1] = matches[0];
                setInput(parts.join(" "));
            }
        }
    };

    useEffect(() => {
        const inputElement = document.querySelector(".terminal-input-line input");
        inputElement.addEventListener("keydown", handleKeyDown);
        return () => {
            inputElement.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    const getPrompt = () => {
        const path = currentPath.length > 0 ? `~/${currentPath.join("/")}` : "~";
        return `User:${path}$`;
    };

    return (
        <>
            <div className="terminal-window">
                <div className="mac-device">
                    <div className="screen">
                        <div className="terminal-window-controls">
                            <span className="terminal-window-control red"></span>
                            <span className="terminal-window-control yellow"></span>
                            <span className="terminal-window-control green"></span>
                        </div>
                        <div className="terminal-container">
                            <div className="terminal-output">
                                {output.map((line, index) => (
                                    <div
                                        key={index}
                                        className={
                                            line.type === "command"
                                                ? "terminal-command"
                                                : line.type === "error"
                                                    ? "terminal-error"
                                                    : line.type === "info"
                                                        ? "terminal-info"
                                                        : "terminal-response"
                                        }
                                    >
                                        {line.type === "command" && (
                                            <span className="terminal-prompt">{line.prompt}</span>
                                        )}
                                        {line.text}
                                    </div>
                                ))}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="terminal-input-line">
                                    <span className="terminal-prompt">{getPrompt()}</span>
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="terminal-input"
                                        placeholder="Type your command here..."
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="icon"></div>
            </div>
            <div className="holder"></div>
        </>
    );
};

export default Terminal;
