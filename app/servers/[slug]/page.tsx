import { CheckIcon, ChevronIcon, VerifiedIcon } from "@/components/icons";

interface Props {
  params: Promise<{ slug: string }>;
}

const Server1 = async (props: Props) => {
  const { slug } = await props.params;

  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <button className="px-4 h-12 flex items-center shadow-sm shrink-0 font-ginto text-[15px] text-white hover:bg-gray-500/15">
          <div className="relative w-4 h-4 mr-1">
            <VerifiedIcon className="absolute w-4 h-4 text-gray-600/15 transition-all" />
            <CheckIcon className="absolute w-4 h-4" />
          </div>
          Server {slug}
          <ChevronIcon className="w-[18px] h-[18px] ml-auto opacity-80" />
        </button>
        <div className="text-gray-300 p-3 flex-1 overflow-y-scroll space-y-2 scroll-thin font-medium">
          <p className={"text-white"}>channel (unread)</p>
          <p className={"text-white"}>channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p key={i}>Channels {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-sm">Generals</div>
        <div className="px-3 flex-1 space-y-4 overflow-y-scroll scroll-thin">
          {[...Array(40)].map((_, i) => (
            <p key={i}>Message {i}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Server1;