export default function Home() {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll scroll-thin">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center"
          >
            {i}
          </div>
        ))}
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md shrink-0">
          Tailwind CSS
        </div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 scroll-thin">
          {[...Array(40)].map((_, i) => (
            <p key={i}>Channels {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">Generals</div>
        <div className="px-3 flex-1 space-y-4 overflow-y-scroll scroll-thin">
          {[...Array(40)].map((_, i) => (
            <p key={i}>Message {i}</p>
          ))}
        </div>
      </div>
    </div>
  );
}