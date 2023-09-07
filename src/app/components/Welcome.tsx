import Image from "next/image";
import UpArrow from "./UpArrow";

export default function Welcome() {
  return (
    <div className="grid place-content-center bg-sky-600 dark:bg-[#08182E] rounded-2xl p-6 shadow-box dark:shadow-none">
      <div className="flex justify-center slideUp">
        <UpArrow  />
      </div>
      <div className="flex items-center gap-4 pt-6">
        <h2 className="text-xl sm:text-2xl">Search a Github user</h2>
        <Image
          src="/github_logo.png"
          alt="Github logo"
          width={60}
          height={60}
          className="dark:invert"
        />
      </div>
    </div>  );
}
