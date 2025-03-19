interface Props {
  params: Promise<{ slug: string }>;
}

const Server1 = async (props: Props) => {
  const { slug } = await props.params;

  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md shrink-0 font-ginto text-white">
          Server {slug}
        </div>
        <div className="text-gray-300 p-3 flex-1 overflow-y-scroll space-y-2 scroll-thin font-medium">
          <p className={"text-white"}>channel (unread)</p>
          <p className={"text-white"}>channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p key={i}>Channels {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">Generals</div>
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