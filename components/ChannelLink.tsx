"use client";
import * as Icons from "@/components/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  server: string;
  channel: { id: number; label: string; icon?: string | null; unread: boolean }; // Allow null
}

export const ChannelLink = ({ server, channel, ...props }: Props) => {
  const Icon =
    channel.icon && Object.prototype.hasOwnProperty.call(Icons, channel.icon)
      ? Icons[channel.icon as keyof typeof Icons]
      : Icons.HashtagIcon;
  const pathname = usePathname();
  const active = pathname === `/servers/${server}/channels/${channel.id}`;
  const state = active
    ? "active"
    : channel.unread
    ? "inactiveUnread"
    : "inactiveRead";

  const classes = {
    active: "text-white bg-gray-600/30",
    inactiveUnread: "text-white hover:bg-gray-600/15 active:bg-gray-600/30",
    inactiveRead: "text-gray-300 hover:text-gray-100 active:bg-gray-600/30",
  };
  return (
    <Link
      href={`/servers/${server}/channels/${channel.id}`}
      className={`${classes[state]} flex items-center group px-2 mx-2 py-1 rounded relative`}
      {...props}
    >
      {state === "inactiveUnread" && (
        <div className="absolute w-1 h-2 bg-white left-0 -ml-2 rounded-r-full"></div>
      )}
      <Icon className="w-5 h-5 text-gray-400 mr-1.5" />
      {channel.label}
      <Icons.AddPersonIcon className="w-4 h-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100" />
    </Link>
  );
};