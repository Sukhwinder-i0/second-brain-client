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

  return (
    <div class="bg-ghost-white w-1/5 h-auto rounded-lg">
      <Logo class="top-5" icon={<BiRegularBrain />} text="Brainly" />
      <div class="px-6 pb-8 flex flex-col justify-center">
        {isSignup() ? (
          <>
            <InputBox type="text" placeholder="Username" />
            <InputBox type="text" placeholder="Email" />
          </>
        ) : (
          <InputBox type="text" placeholder="Username or Email" />
        )}

        <InputBox type="password" placeholder="Password" />
        <Button
          class="w-full justify-center mt-4 "
          text={isSignup() ? "Sign Up" : "Sign In"}
          size="md"
          variant="primary"
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
