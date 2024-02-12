import { useLocation } from "@remix-run/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

import type { LinksFunction } from "@remix-run/cloudflare";

import externalStyles from "@uiw/react-md-editor/markdown-editor.css";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: externalStyles },
];

export default function Articles() {
    const location = useLocation();
    const [value, setValue] = useState("# Hello World");

    return (
        <div className="py-6 px-4 grid gap-6">
            <h1>{location.pathname}</h1>
            <div className="grid w-full items-center gap-2">
                <Label htmlFor="title">title</Label>
                <Input
                    className="w-full block"
                    type="text"
                    id="title"
                    placeholder="title"
                />
            </div>

            <div className="grid w-full gap-2">
                <Label htmlFor="message">Your message</Label>
            </div>

            <div>
                <MDEditor
                    value={value}
                    onChange={(v) => setValue(v || "")}
                    hideToolbar={true}
                    preview="edit"
                    highlightEnable={true}
                    visibleDragbar={true}
                    height="auto"
                    className="[&>.w-md-editor-bar]:hidden !shadow-none !rounded-lg border min-h-[500px] bg-white p-4"
                />
            </div>
        </div>
    );
}
