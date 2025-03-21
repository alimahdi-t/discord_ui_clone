import Image from "next/image";

export const Message = () => {
  return (
    <div className="max-w-lg">
      <div className="flex hover:bg-gray-800/30 px-4 py-1">
        <Image
          src={"/images/profiles/user-1.jpg"}
          width={40}
          height={40}
          alt=""
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="flex items-baseline">
            <span className="text-green-500 mr-2 text-sm font-medium">
              adamwathan
            </span>
            <span className="text-xs text-gray-500">01/15/2021</span>
          </p>
          <p className="text-gray-300">
            You should never use something like leading relaxed with a big font
            size, it goes against all typography best practices. Line height
            should decrease as font size gets bigger
          </p>
        </div>
      </div>
      <div className="mt-1 hover:bg-gray-800/30 px-4 py-1">
        <p className="text-gray-300 pl-14">
          You can override it in your config if you want but ultimately we chose
          the defaults they did because they let you get results closet to what
          a professional designer would do more easily
        </p>
      </div>
      <div className="mt-1 hover:bg-gray-800/30 px-4 py-1">
        <p className="text-gray-300 pl-14">
          Since we changed this in tailwind 2 I&apos;ve almost never used a
          leading class at all
        </p>
      </div>
    </div>
  );
};