import type { LinksFunction } from "@remix-run/cloudflare";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";

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
import MDEditor from "@uiw/react-md-editor";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import externalStyles from "@uiw/react-md-editor/markdown-editor.css";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: externalStyles },
];

export const loader = async () => {
    const categories = await prisma.category.findMany();
    return { categories };
};

export default function Articles() {
    const data = useLoaderData();
    const [value, setValue] = useState("");

    return (
        <div className="grid gap-6">
            {/* <div className="grid w-full items-center gap-2">
                <Label htmlFor="title">タイトル</Label>
                <Input
                    className="w-full block placeholder:text-muted-foreground/60"
                    type="text"
                    id="title"
                    placeholder="title"
                />
            </div> */}

            <div className="grid justify-items-center items-stretch gap-2 grid-cols-3">
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="title">カテゴリ</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="投稿する学科" />
                        </SelectTrigger>
                        <SelectContent>
                            {data.categories.map((item, index) => {
                                return (
                                    <SelectItem key={index} value={item.title}>
                                        <div className="flex items-center gap-2">
                                            <span>{item.title}</span>
                                        </div>
                                    </SelectItem>
                                );
                            })}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="title">カテゴリ</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="title">カテゴリ</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid w-full items-center gap-2">
                <Label htmlFor="title">カテゴリ</Label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid w-full items-center gap-2">
                <Label htmlFor="title">タグ</Label>
                <Input
                    className="w-full block placeholder:text-muted-foreground/60"
                    type="text"
                    id="title"
                    placeholder="title"
                />
            </div>
            <div className="grid w-full items-center gap-2">
                <Label htmlFor="title">公開日</Label>
                <Input
                    className="w-full block placeholder:text-muted-foreground/60"
                    type="text"
                    id="title"
                    placeholder="title"
                />
            </div>

            <Tabs defaultValue="edit" className="w-full">
                <TabsList className="flex gap-4 justify-end">
                    <TabsTrigger value="edit">Edit</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent
                    value="edit"
                    className="bg-white p-4 rounded-lg shadow-md"
                >
                    <div>
                        <input
                            type="text"
                            className="block w-full outline-none focus:outline-none active:outline-none px-2.5 py-2 font-['HackGen'] text-lg placeholder:!text-[240_5%_64.9%] placeholder:font-light tracking-wider"
                            placeholder="タイトル"
                        />

                        <MDEditor
                            value={value}
                            onChange={(v) => setValue(v || "")}
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
                <TabsContent value="preview">
                    <h1>パスワード</h1>
                </TabsContent>
            </Tabs>

            <div className="flex justify-end gap-4">
                <Button className="">下書き保存</Button>
                <Button className="">次へ</Button>
            </div>
        </div>
    );
}
