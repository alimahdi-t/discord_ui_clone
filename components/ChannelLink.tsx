import * as Icons from "@/components/icons";

interface Props {
  channel: { id: number; label: string; icon?: string | null }; // Allow null
}

export const ChannelLink = ({ channel, ...props }: Props) => {
  const Icon =
    channel.icon && Object.prototype.hasOwnProperty.call(Icons, channel.icon)
      ? Icons[channel.icon as keyof typeof Icons]
      : Icons.HashtagIcon;

  return (
    <a
      href="#"
      className="flex items-center group px-2 mx-2 py-1 rounded text-gray-300 hover:text-gray-100 hover:bg-gray-600/15"
      {...props}
    >
      <Icon className="w-5 h-5 text-gray-400 mr-1.5" />
      {channel.label}
      <Icons.AddPersonIcon className="w-4 h-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100" />
    </a>
  );
};