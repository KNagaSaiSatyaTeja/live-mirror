"use client";
import "./style.css";
import React, { useState, FormEvent } from "react";

const generateRoomId = () => Math.random().toString(36).substr(2, 8);

const JoinRoomForm: React.FC = () => {
  const [roomId, setRoomId] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNewRoomId = () => {
    setRoomId(generateRoomId());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      alert(`Room ID: ${roomId}, Username: ${username}`);
    }, 1000);
  };

  return (
    <main className="join-room-page">
      <div className="content">
        <div className="left-panel">
          <h2>Join Code Room</h2>
          <img src="/mirror.png" alt="Code Mirror" className="mirror-image" />
          <p>Mirror your code experience</p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <h1>Join Code Room</h1>
          <p>Collaborate in real-time</p>

          <div className="input-group">
            <label htmlFor="roomId">Room ID</label>
            <input
              id="roomId"
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={handleNewRoomId}
              className="new-id-button"
              disabled={isLoading}
            >
              Create a new room ID
            </button>
          </div>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isLoading}
              maxLength={20}
            />
            <div className="info-text">Max 20 characters</div>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isLoading || !roomId.trim() || !username.trim()}
          >
            {isLoading ? "Joining..." : "Join Room"}
          </button>

          <div className="info-text">
            Share the Room ID with others to collaborate together
          </div>
        </form>
      </div>
    </main>
  );
};

export default JoinRoomForm;
