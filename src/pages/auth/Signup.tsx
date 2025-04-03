import { BiRegularBrain } from "solid-icons/bi";
import { handleSingup } from "../../auth/handleSignup.js";
import { Button } from "../../components/ui/Button.jsx";
import InputBox from "../../components/ui/InputBox.jsx";
import Logo from "../../components/ui/Logo.jsx";
import {
  setEmail,
  setPassword,
  setUsername
} from "../../hooks/common.js";
import { useNavigate } from "@solidjs/router";

export const Signup = () => {

const navigate = useNavigate()

  return (
    <div class="w-full h-screen flex justify-center items-center">
      <div class="bg-ghost-white w-1/5 h-auto rounded-lg">
        <Logo class="top-5" icon={<BiRegularBrain />} text="Brainly" />
        <div class="px-6 pb-8 flex flex-col justify-center">
          <InputBox onInput={setUsername} type="text" placeholder="Username" />
          <InputBox onInput={setEmail} type="text" placeholder="Email" />

          <InputBox
            onInput={setPassword}
            type="password"
            placeholder="Password"
          />
          <Button
            class="w-full justify-center mt-4 "
            text="Sign Up"
            size="md"
            variant="primary"
            onClick={() => {
              handleSingup();
            }}
          />

          <div class="flex mt-3 font-semibold text-sm items-center">
            <p class=" italic pr-1 ">"Already Have an Account"</p>
            <a
              class="text-blue-800 cursor-pointer font-bold "
              onClick={() => {
                navigate("/signin", {replace: true})
              }}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
