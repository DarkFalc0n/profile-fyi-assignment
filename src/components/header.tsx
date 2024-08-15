import { FCProps } from "@/types";
import CartButton from "@/ui/cartButton";
import LoginButton from "@/ui/loginButton";

const Header: FCProps = () => {
  return (
    <div className="w-full h-20 sticky top-0 flex flex-col justify-center bg-white">
      <div className="w-full px-6 flex justify-between">
        <h1 className="font-extrabold text-2xl leading-1 text-cta-regular flex flex-col justify-center">
          Profile.fyi - Frontend Assignment
        </h1>
        <div className="flex justify-between">
          <LoginButton />
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
