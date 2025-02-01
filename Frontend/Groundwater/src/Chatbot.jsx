import React, { useState } from "react";

const Chatbot = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();
            if (res.ok) {
                setResponse(data.choices[0]?.message?.content || "No response from AI");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponse("Error communicating with the server.");
        }
        setLoading(false);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Chat with AI</h2>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                rows="4"
                cols="50"
            />
            <br />
            <button onClick={sendMessage} disabled={loading}>
                {loading ? "Loading..." : "Send"}
            </button>
            <h3>Response:</h3>
            <p>{response}</p>
        </div>
    );
};

export default Chatbot;