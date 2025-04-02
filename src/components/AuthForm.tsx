import { createSignal } from "solid-js";
import Logo from "./ui/Logo.jsx";
import InputBox from "./ui/InputBox.jsx";
import { Button } from "./ui/Button.jsx";
import { BiRegularBrain } from "solid-icons/bi";

interface AuthProps {
  isSignup: boolean;
  onToggle?: () => void;
}

export const AuthForm = (props: AuthProps) => {
  const [isSignup, setIsSignup] = createSignal<boolean>(false);
  const toggleSignup = () => setIsSignup((prev) => !prev);

  const [username , setUsername] = createSignal<string>("")
  const [email , setEmail] = createSignal<string>("")
  const [password , setPassword] = createSignal<string>("")

  const [message, setMessage] = createSignal<string>("");

  const handleSubmit = async () => {
    const endpoint = isSignup() ? "/signup" : "/signin";
    const requestData = { username: username(), email: email(), password: password() };
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    try {
      const response = await fetch(`${BACKEND_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message); 
      } else {
        setMessage(data.message); 
      }
    } catch (error) {
      setMessage("Server Error. Try again!");
    }
  };

  return (
    <div class="bg-ghost-white w-1/5 h-auto rounded-lg">
      <Logo class="top-5" icon={<BiRegularBrain />} text="Brainly" />
      <div class="px-6 pb-8 flex flex-col justify-center">
        {isSignup() ? (
          <>
            <InputBox onInput={setUsername} type="text" placeholder="Username" />
            <InputBox onInput={setEmail} type="text" placeholder="Email" />
          </>
        ) : (
          <InputBox onInput={setUsername} type="text" placeholder="Username or Email" />
        )}

        <InputBox onInput={setPassword} type="password" placeholder="Password" />
        <Button
          class="w-full justify-center mt-4 "
          text={isSignup() ? "Sign Up" : "Sign In"}
          size="md"
          variant="primary"
          onClick={handleSubmit}
        />

        <div class="flex mt-3 font-semibold text-sm items-center">
          <p class=" italic pr-1 ">{isSignup() ? 'Already Have an Account': 'Create an Account'} ?</p>
          <a
            class="text-blue-800 cursor-pointer font-bold "
            onClick={toggleSignup}
          >
            {isSignup() ? 'Signin': 'Signup'}
          </a>
        </div>
      </div>
    </div>
  );
};
