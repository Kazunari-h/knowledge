import type { LinksFunction, LoaderFunction } from "@remix-run/cloudflare";
import { useState } from "react";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { TooltipButton } from "~/components/TooltipButton";

import MDEditor from "@uiw/react-md-editor";

import { Category, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

import externalStyles from "@uiw/react-md-editor/markdown-editor.css";
import { DatePicker } from "~/components/DatePicker";
import { Footer } from "~/components/Footer";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: externalStyles },
];

export interface ENV {
    DATABASE_URL: string;
    CLERK_FRONTEND_API: string;
    CLERK_SIGN_IN_ID: string;
    CLERK_API: string;
    CLERK_PUBLIC_API: string;
    CLERK_PUBLIC_FRONTEND_API: string;
    CLERK_PUBLIC_SIGN_IN_ID: string;
}

type LoaderData = { categories: Array<Category> };

export const loader: LoaderFunction = async ({ context }) => {
    const prisma = new PrismaClient({
        datasources: {
            db: {
                url: (context.env as ENV).DATABASE_URL,
            },
        },
    }).$extends(withAccelerate());

    const categories = await prisma.category.findMany({
        cacheStrategy: { ttl: 60 * 60 * 24 },
    });

    return { categories };
};

export default function Articles() {
    const data = useLoaderData<LoaderData>();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-between w-screen px-8 lg:px-0 h-16 items-center mx-auto max-w-6xl">
                <TooltipButton
                    trigger={
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            <ArrowLeft className="h-6 w-6 stroke-[1.5px]" />
                        </Button>
                    }
                    content={<p>戻る</p>}
                />
                <div className="flex gap-6 items-center">
                    {/* <TooltipButton
                        trigger={
                            <Button variant="ghost" size="icon">
                                <SlidersHorizontal className="h-6 w-6 stroke-[1.5px]" />
                            </Button>
                        }
                        content={<p>設定</p>}
                    /> */}

                    <Button className="rounded-full bg-teal-500">
                        下書き保存
                    </Button>
                    <Button className="rounded-full bg-cyan-500">
                        公開する
                    </Button>
                </div>
            </div>
            <div className="flex-1 p-8 bg-zinc-100">
                <main className="max-w-6xl w-full leading-6 tracking-wider mx-auto">
                    <div className="grid gap-6">
                        <Tabs defaultValue="edit" className="w-full">
                            <TabsList className="flex gap-4 justify-end">
                                <TabsTrigger value="edit">Edit</TabsTrigger>
                                <TabsTrigger value="preview">
                                    Preview
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent
                                value="edit"
                                className="bg-white p-4 rounded-lg shadow-md"
                            >
                                <div>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        className="block w-full outline-none focus:outline-none active:outline-none px-2.5 py-2 font-['HackGen'] text-lg placeholder:!text-[240_5%_64.9%] placeholder:font-light tracking-wider"
                                        placeholder="タイトル"
                                    />

                                    <MDEditor
                                        value={content}
                                        onChange={(v) => setContent(v || "")}
                                        hideToolbar={true}
                                        preview="edit"
                                        highlightEnable={true}
                                        visibleDragbar={true}
                                        height="auto"
                                        textareaProps={{
                                            placeholder: "記事の内容",
                                        }}
                                        className="[&>.w-md-editor-bar]:hidden !shadow-none !rounded-lg min-h-[500px] bg-white tracking-wider font-medium opacity-100 text-lg"
                                    />
                                </div>
                            </TabsContent>
                            <TabsContent
                                value="preview"
                                className="bg-white py-6 px-8 rounded-lg shadow-md w-full"
                            >
                                <h1 className=" text-4xl font-bold leading-8 tracking-wider mt-4 mb-6">
                                    {title}
                                </h1>
                                {content && (
                                    <MDEditor.Markdown
                                        source={content}
                                        className="[&>.w-md-editor-bar]:hidden !shadow-none !rounded-lg min-h-[500px] bg-white tracking-wider prose-sm w-full max-w-full"
                                    />
                                )}
                            </TabsContent>
                        </Tabs>
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="tag">タグ</Label>
                            <Input
                                className="w-full block placeholder:text-muted-foreground/60"
                                type="text"
                                id="tag"
                                placeholder="タグ"
                            />
                        </div>

                        <div className="grid justify-items-center items-stretch gap-2 grid-cols-3">
                            <div className="grid w-full items-center gap-2">
                                <Label htmlFor="title">公開日</Label>
                                <DatePicker />
                            </div>
                            <div className="grid w-full items-center gap-2">
                                <Label htmlFor="title">公開時間</Label>
                                <div className="flex items-center">
                                    <Select>
                                        <SelectTrigger className="w-20">
                                            <SelectValue placeholder="HH" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from(
                                                { length: 24 },
                                                (_, i) => {
                                                    return (
                                                        <SelectItem
                                                            key={i}
                                                            value={`${i}`}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <span>
                                                                    {`${i}`.padStart(
                                                                        2,
                                                                        "0",
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </SelectItem>
                                                    );
                                                },
                                            )}
                                        </SelectContent>
                                    </Select>
                                    <span className="px-1 text-lg">:</span>
                                    <Select>
                                        <SelectTrigger className="w-20">
                                            <SelectValue placeholder="mm" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from(
                                                { length: 60 },
                                                (_, i) => {
                                                    return (
                                                        <SelectItem
                                                            key={i}
                                                            value={`${i}`}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <span>
                                                                    {`${i}`.padStart(
                                                                        2,
                                                                        "0",
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </SelectItem>
                                                    );
                                                },
                                            )}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid w-full items-center gap-2">
                                <Label htmlFor="title">カテゴリ</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="投稿する学科" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {data.categories.map((item, index) => {
                                            return (
                                                <SelectItem
                                                    key={index}
                                                    value={item.name}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span>{item.name}</span>
                                                    </div>
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
