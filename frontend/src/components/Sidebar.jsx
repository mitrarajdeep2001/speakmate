import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import {
  AtomIcon,
  HomeIcon,
  LogOutIcon,
  UserCircleIcon,
  UsersIcon,
  VideoIcon,
} from "lucide-react";
import useLogout from "../hooks/useLogout";
import { BASE_URL_PUBLIC } from "../lib/axios";
import { RiVoiceprintFill } from "react-icons/ri";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const { logoutMutation } = useLogout();
  const currentPath = location.pathname;

  return (
    <aside className="w-64 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0">
      <div className="p-5 border-b border-base-300">
        <Link to="/" className="flex items-center gap-2.5">
          <RiVoiceprintFill className="size-9 text-primary" />
          <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
            SpeakMate
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <Link
          to="/"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/" ? "btn-active" : ""
          }`}
        >
          <HomeIcon className="size-5 text-base-content opacity-70" />
          <span>Home</span>
        </Link>

        <Link
          to="/friends"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/friends" ? "btn-active" : ""
          }`}
        >
          <UsersIcon className="size-5 text-base-content opacity-70" />
          <span>Friends</span>
        </Link>

        <Link
          to="/tutorials"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/tutorials" ? "btn-active" : ""
          }`}
        >
          <VideoIcon className="size-5 text-base-content opacity-70" />
          <span>Tutorials</span>
        </Link>

        <Link
          to="/learn-with-ai"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/learn-with-ai" ? "btn-active" : ""
          }`}
        >
          <AtomIcon className="size-5 text-base-content opacity-70" />
          <span>Learm With AI</span>
        </Link>

        {/* <Link
          to="/notifications"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/notifications" ? "btn-active" : ""
          }`}
        >
          <BellIcon className="size-5 text-base-content opacity-70" />
          <span>Notifications</span>
        </Link> */}

        <Link
          to="/profile"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
            currentPath === "/profile" ? "btn-active" : ""
          }`}
        >
          <UserCircleIcon className="size-5 text-base-content opacity-70" />
          <span>Profile</span>
        </Link>
      </nav>

      {/* USER PROFILE SECTION */}
      <div className="p-4 border-t border-base-300 mt-auto">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src={BASE_URL_PUBLIC + "/" + authUser?.profilePic}
                alt={authUser?.fullName}
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">{authUser?.fullName}</p>
            <p className="text-xs text-success flex items-center gap-1">
              <span className="size-2 rounded-full bg-success inline-block" />
              Online
            </p>
          </div>
          {/* Logout button */}
          <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
