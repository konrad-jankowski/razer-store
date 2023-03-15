import React, { useState } from "react";
import FloatingLabel from "../components/FloatingLabel";

function Login() {
  const [active, setActive] = useState(false);

  return (
    <div className="px-6 mt-4 flex flex-col gap-4">
      <h2 className="text-xl">RAZER LOGIN</h2>
      <FloatingLabel text="email address" type="text" />
      <FloatingLabel text="password" type="password" />
      <p className="text-[#888] place-self-end mb-3 text-sm">
        Forgot password?
      </p>
      <button className="uppercase text-[#222] bg-[color:var(--cx-color-primary)] opacity-30 py-2.5 rounded-sm text-sm font-medium">
        log in
      </button>
      <p className="text-[#ccc] place-self-center text-sm">
        Don't have an account yet?
      </p>
      <p className="text-[#ccc] place-self-center text-lg cursor-pointer hover:text-[color:var(--cx-color-primary)]">
        Create{" "}
        <span className="text-[color:var(--cx-color-primary)]">{">"}</span>
      </p>
    </div>
  );
}

export default Login;
