"use client";
import * as Icons from "@/components/icons";

import data from "@/data/data.json";
import { ChannelLink } from "@/components/ChannelLink";
import { useState } from "react";
import { useParams } from "next/navigation";

const Server1 = () => {
  const params = useParams<{ channel: string; server: string }>();
  const { channel, server } = params;
  console.log(channel);

  const [closedCategories, setClosedCategories] = useState<number[]>([]);

  function toggleCategory(categoryId: number) {
    setClosedCategories((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId],
    );
  }

  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <button className="px-4 h-12 flex items-center shadow-sm shrink-0 font-ginto text-[15px] text-white hover:bg-gray-600/15">
          <div className="relative w-4 h-4 mr-1">
            <Icons.VerifiedIcon className="absolute w-4 h-4 text-gray-600/15 transition-all" />
            <Icons.CheckIcon className="absolute w-4 h-4" />
          </div>
          Server {server}
          <Icons.ChevronIcon className="w-[18px] h-[18px] ml-auto opacity-80" />
        </button>
        <div className="text-gray-300 flex-1 overflow-y-scroll  scroll-thin font-medium pt-3 space-y-5">
          {data["1"].categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex items-center px-0.5 text-xs font-ginto uppercase tracking-wide hover:text-gray-100"
                >
                  <Icons.ArrowComponent
                    className={`${
                      closedCategories.includes(category.id) ? "-rotate-90" : ""
                    } w-3 h-3 mr-0.5 transition duration-200`}
                  />
                  {category.label}
                </button>
              )}
              <div className="space-y-0.5 mt-[5px]">
                {category.channels
                  .filter((channel) => {
                    const categoryIsOpen = closedCategories.includes(
                      category.id,
                    );
                    return categoryIsOpen || channel.unread;
                  })
                  .map((channel) => (
                    <ChannelLink
                      key={channel.id}
                      channel={channel}
                      server={server}
                    />
                  ))}
              </div>
            </div>
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