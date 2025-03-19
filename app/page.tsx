export default function Home() {
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md shrink-0 font-ginto text-white">
          Dashboard
        </div>
        <div className="text-gray-300 p-3 flex-1 overflow-y-scroll space-y-2 scroll-thin font-medium">
          <p className={"text-white"}>Friends</p>
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        {/*<div className="px-3 h-12 flex items-center shadow-md">Generals</div>*/}
        {/*<div className="px-3 flex-1 space-y-4 overflow-y-scroll scroll-thin">*/}
        {/*  {[...Array(40)].map((_, i) => (*/}
        {/*    <p key={i}>Message {i}</p>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </>
  );
}