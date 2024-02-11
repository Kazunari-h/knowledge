import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/remix";
import { Bell, Search } from "lucide-react";

import logo from "app/assets/images/logo.png";

export const Header = () => {
    return (
        <div className="flex justify-between w-screen px-8 lg:px-0 h-16 items-center mx-auto max-w-6xl">
            <h1 className="text-4xl text-zinc-700 font-extrabold tracking-wide first-letter:text-cyan-500">
                {/* <img src={logo} alt="logo" className="h-12" /> */}
                Knowledge
            </h1>
            <div className="flex gap-6 items-center">
                <Button variant="ghost" size="icon">
                    <Search className="h-6 w-6 stroke-[1.5px]" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Bell className="h-6 w-6 stroke-[1.5px]" />
                </Button>
                <UserButton />
                {/* <Button variant="outline">
                    <a href="https://ui.shadcn.com/docs">公式 Document</a>
                </Button> */}
                <Button className=" rounded-full bg-cyan-500">投稿する</Button>
            </div>
        </div>
    );
};
