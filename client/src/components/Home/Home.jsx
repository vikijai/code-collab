import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const Id = uuid();
    setRoomId(Id);
    toast.success("Room Id is generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Both the field is requried");
      return;
    }

    // redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
    toast.success("room is created");
  };

  // when enter then also join
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="container-fluid bg-dark min-vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card bg-secondary rounded"
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <div className="card-body text-center bg-dark rounded">
          {/* Transparent Image */}
          <div className="mb-4">
            <img
              src="src/images/codeCollab1.png"
              alt="codecollab"
              className="img-fluid mx-auto d-block"
              style={{
                maxWidth: "120px",
              }}
            />
          </div>
          <h4 className="card-title text-light mb-4">Join a Room</h4>

          {/* Room ID Input */}
          <div className="form-group mb-3">
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="form-control"
              placeholder="Enter Room ID"
              onKeyUp={handleInputEnter}
            />
          </div>

          {/* Username Input */}
          <div className="form-group mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Enter Your Username"
              onKeyUp={handleInputEnter}
            />
          </div>

          {/* Join Button */}
          <button
            onClick={joinRoom}
            className="btn btn-success btn-lg w-100 mb-3"
          >
            Join Room
          </button>

          {/* Create New Room */}
          <p className="text-light">
            Don't have a room ID?{" "}
            <span
              onClick={generateRoomId}
              className="text-success"
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Create New Room
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
