import { userInterface } from "@/interfaces/interfaces";
import BuildingsIcon from "./BuildingsIcon";
import CloudIcon from "./CloudIcon";
import MapPinIcon from "./MapPinIcon";
import TwitterIcon from "./TwitterIcon";
import Image from "next/image";
import Link from "next/link";

interface Props {
  user: userInterface;
}
export default function Card({ user }: Props) {
  return (
    <div className="bg-[#08182E] p-4 rounded-2xl sm:flex">
      <div className="w-24 h-24 rounded-full float-left mr-8 sm:float-none grid place-content-center overflow-hidden">
        <Image src={user.avatar_url} alt={user?.name || "sin datos"} width={96} height={96} />
      </div>
      <div>
        <div className="mb-6">
          <div className="sm:flex sm:justify-between">
            <div className="mb-2 ">
              <h3 className="text-xl">{user.name}</h3>
              <h4 className="text-sky-800 text-lg">{`@${user.login}`}</h4>
            </div>
            <article className="font-light sm:max-w-[130px] text-sm">{`Joined ${new Date(
              user.created_at || ""
            ).toLocaleDateString("es", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`}</article>
          </div>
          <p className="font-light mt-6 sm:mt-0">
            {user.bio || "This profile has no bio"}
          </p>
        </div>
        <div className="flex gap-10 justify-around bg-[#070D19] rounded-xl p-4 text-center mb-4 sm:text-left">
          <div>
            <h5 className="font-light">Repos</h5>
            <span>{user.public_repos}</span>
          </div>
          <div>
            <h5 className="font-light">Followers</h5>
            <span>{user.followers}</span>
          </div>
          <div>
            <h5 className="font-light">Following</h5>
            <span>{user.following}</span>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2	">
          <div
            className={`flex items-center gap-2 ${
              !user.location ? "opacity-30" : ""
            }`}
          >
            <MapPinIcon />
            <h4 className="sm:max-w-[120px] sm:whitespace-nowrap sm:truncate">
              {user.location || "Not available"}
            </h4>
          </div>

          <div
            className={`flex items-center gap-2 ${
              !user.blog ? "opacity-30" : ""
            }`}
          >
            <CloudIcon />
            <Link
              href={user.blog || "#"}
              target="_blank"
              className="sm:max-w-[120px] sm:whitespace-nowrap sm:truncate"
            >
              {user.blog || "Not available"}
            </Link>
          </div>

          <div
            className={`flex items-center gap-2 ${
              !user.twitter_username ? "opacity-30" : ""
            }`}
          >
            <TwitterIcon />
            <Link
              href={`https://twitter.com/${user.twitter_username || "#"}`}
              target="_blank"
              className="sm:max-w-[120px] sm:whitespace-nowrap sm:truncate"
            >
              {user.twitter_username || "Not available"}
            </Link>
          </div>

          <div
            className={`flex items-center gap-2 ${
              !user.company ? "opacity-30" : ""
            }`}
          >
            <BuildingsIcon />
            <h4 className="sm:max-w-[120px] sm:whitespace-nowrap sm:truncate">
              {user.company || "Not available"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
