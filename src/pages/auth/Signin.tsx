import { BiRegularBrain } from "solid-icons/bi";
import { Button } from "../../components/ui/Button.jsx";
import InputBox from "../../components/ui/InputBox.jsx";
import Logo from "../../components/ui/Logo.jsx";
import {
  setPassword,
  setUsername
} from "../../hooks/common.js";
import { handleSignin } from "../../auth/handleSignin.js";
import { useNavigate } from "@solidjs/router";

export const Signin = () => {

 const navigate = useNavigate()

  return (
    <div class="w-full h-screen flex justify-center items-center">
      <div class="bg-ghost-white w-1/5 h-auto rounded-lg">
        <Logo class="top-5" icon={<BiRegularBrain />} text="Brainly" />
        <div class="px-6 pb-8 flex flex-col justify-center">
          <InputBox onInput={setUsername} type="text" placeholder="Username" />

          <InputBox
            onInput={setPassword}
            type="password"
            placeholder="Password"
          />
          <Button
            class="w-full justify-center mt-4 "
            text="Sign In"
            size="md"
            variant="primary"
            onClick={() => {
              handleSignin();
            }}
          />

          <div class="flex mt-3 font-semibold text-sm items-center">
            <p class=" italic pr-1 ">"Create an Account"</p>
            <a
              class="text-blue-800 cursor-pointer font-bold "
              onClick={() => {
                navigate("/signup", { replace: true });
              }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
