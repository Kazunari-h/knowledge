import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/remix";
import { Bell, Search } from "lucide-react";

import { TooltipButton } from "./TooltipButton";

// import logo from "app/assets/images/logo.png";

export const Header = () => {
    return (
        <div className="flex justify-between w-screen px-8 lg:px-0 h-16 items-center mx-auto max-w-6xl">
            <h1 className="text-4xl text-zinc-700 font-extrabold tracking-wide first-letter:text-cyan-500">
                <Link to="/">Knowledge</Link>
            </h1>
            <div className="flex gap-6 items-center">
                <TooltipButton
                    trigger={
                        <Button variant="ghost" size="icon">
                            <Search className="h-6 w-6 stroke-[1.5px]" />
                        </Button>
                    }
                    content={<p>検索</p>}
                />

                <TooltipButton
                    trigger={
                        <Button variant="ghost" size="icon">
                            <Bell className="h-6 w-6 stroke-[1.5px]" />
                        </Button>
                    }
                    content={<p>通知</p>}
                />
                <UserButton />
                <Button className=" rounded-full bg-cyan-500" asChild>
                    <Link to="/articles/new">投稿する</Link>
                </Button>
            </div>
        </div>
    );
};
