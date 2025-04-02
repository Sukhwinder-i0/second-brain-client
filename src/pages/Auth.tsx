import { createSignal } from "solid-js";
import { AuthForm } from "../components/AuthForm.jsx";
const Auth = () => {
  const [isSignup, setIsSignup] = createSignal<boolean>(true)
  const toggleSignup = () => setIsSignup((prev) => !prev)

  return (
    <div class="w-full min-h-screen flex justify-center items-center bg-gray-300">
        <AuthForm isSignup={isSignup()} onToggle={toggleSignup
        } />
    </div>
  );
};

export default Auth;
