import { cn } from "@/lib/utils";
import { FCProps } from "@/types";

const LoginButton: FCProps = () => {
  return (
    <button
      className={
        "md:block hidden text-lg text-primary px-6 transition-colors duration-300"
      }
    >
      Login
    </button>
  );
};

export default LoginButton;
