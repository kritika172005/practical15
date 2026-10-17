import React, { useRef, useState } from 'react';

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
          Login Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-semibold">Username</label>
            <input
              className="w-full rounded border p-2"
              type="text"
              ref={usernameRef}
              required
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold">Password</label>
            <input
              className="w-full rounded border p-2"
              type="password"
              ref={passwordRef}
              required
            />
          </div>

          <button
            className="w-full rounded bg-blue-600 p-3 font-bold text-white hover:bg-blue-700"
            type="submit"
          >
            Login
          </button>
        </form>

        {submitted && (
          <div className="mt-6 rounded-lg bg-green-50 p-4">
            <h2 className="text-xl font-bold text-green-700">
              Login Submitted
            </h2>
            <p>Username: {username}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;