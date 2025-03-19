"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const ServerButton = ({
  href,
  children,
  label,
}: {
  href: string;
  label: string;
  children?: React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className="block relative group">
      <div className="absolute flex items-center flex-1 h-full -left-3">
        <div
          className={`${
            pathname === href
              ? "h-10"
              : "h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100"
          } absolute bg-white w-1 rounded-r  transition-all duration-200 origin-left`}
        ></div>
      </div>
      <div className="group-active:translate-y-px">
        <div
          className={`${
            pathname === href
              ? "rounded-2xl bg-brand text-white"
              : "group- hover:rounded-2xl group- hover:bg-brand group- hover:text-white bg-gray-700 rounded-3xl"
          } text-gray-100 w-12 h-12 flex items-center justify-center
              transition-all duration-200`}
        >
          {children ? children : label}
        </div>
      </div>
    </Link>
  );
};