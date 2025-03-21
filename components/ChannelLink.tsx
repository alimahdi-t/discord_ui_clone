"use client";
import * as Icons from "@/components/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  server: string;
  channel: { id: number; label: string; icon?: string | null }; // Allow null
}

export const ChannelLink = ({ server, channel, ...props }: Props) => {
  const Icon =
    channel.icon && Object.prototype.hasOwnProperty.call(Icons, channel.icon)
      ? Icons[channel.icon as keyof typeof Icons]
      : Icons.HashtagIcon;
  const pathname = usePathname();
  const active = pathname === `/servers/${server}/channels/${channel.id}`;
  return (
    <Link
      href={`/servers/${server}/channels/${channel.id}`}
      className={`${
        active
          ? "text-white bg-gray-600/30"
          : "text-gray-300 hover:text-gray-100 hover:bg-gray-600/15"
      } flex items-center group px-2 mx-2 py-1 rounded`}
      {...props}
    >
      <Icon className="w-5 h-5 text-gray-400 mr-1.5" />
      {channel.label}
      <Icons.AddPersonIcon className="w-4 h-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100" />
    </Link>
  );
};