import type { LinksFunction, LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData, useNavigate, Form } from "@remix-run/react";
import { ArrowLeft, AlertCircle } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { TooltipButton } from "~/components/TooltipButton";
import { DateTimePicker } from "~/components/DateTimePicker";
import { Footer } from "~/components/Footer";

import MDEditor from "@uiw/react-md-editor";
import externalStyles from "@uiw/react-md-editor/markdown-editor.css";

import { Category, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

import {
    useForm,
    useInputControl,
    getFormProps,
    getInputProps,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { PostSchema } from "../../prisma/generated/zod/modelSchema/PostSchema";

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
    // const [content, setContent] = useState("");
    const navigate = useNavigate();

    const [form, fields] = useForm({
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: PostSchema });
        },
    });

    const title = useInputControl(fields.title);
    const content = useInputControl(fields.content);
    const publishedAt = useInputControl(fields.publishedAt);
    const categoryId = useInputControl(fields.categoryId);

    console.log("errors", fields.title.errors);
    console.log("errors", fields.content.errors);
    console.log("errors", fields.publishedAt.errors);
    console.log("errors", fields.categoryId.errors);

    return (
        <Form
            method="POST"
            {...getFormProps(form)}
            className="w-screen min-h-screen flex flex-col bg-zinc-100"
        >
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
                    <Button
                        disabled={
                            !!(
                                fields.title.errors ||
                                fields.content.errors ||
                                fields.publishedAt.errors ||
                                fields.categoryId.errors
                            )
                        }
                        {...form.validate.getButtonProps()}
                        className="rounded-full bg-cyan-500"
                    >
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
                                        {...getInputProps(fields.title, {
                                            type: "text",
                                        })}
                                        value={title.value}
                                        onChange={(e) =>
                                            title.change(e.target.value)
                                        }
                                        onFocus={title.focus}
                                        onBlur={title.blur}
                                        className="block w-full outline-none focus:outline-none active:outline-none px-2.5 py-2 font-['HackGen'] text-lg placeholder:!text-[240_5%_64.9%] placeholder:font-light tracking-wider"
                                        placeholder="タイトル"
                                    />

                                    <MDEditor
                                        value={content.value}
                                        onChange={(v) => content.change(v)}
                                        hideToolbar={true}
                                        preview="edit"
                                        highlightEnable={true}
                                        visibleDragbar={true}
                                        height="auto"
                                        textareaProps={{
                                            placeholder: "記事の内容",
                                            // ...getTextareaProps(fields.content),
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
                                    {title.value}
                                </h1>
                                {content && (
                                    <MDEditor.Markdown
                                        source={content.value}
                                        className="[&>.w-md-editor-bar]:hidden !shadow-none !rounded-lg min-h-[500px] bg-white tracking-wider prose-sm w-full max-w-full"
                                    />
                                )}
                            </TabsContent>
                        </Tabs>
                        {/* <div className="grid w-full items-center gap-2">
                            <Label htmlFor="tag">タグ</Label>
                            <Input
                                className="w-full block placeholder:text-muted-foreground/60"
                                type="text"
                                id="tag"
                                placeholder="タグ"
                            />
                        </div> */}

                        <div className="grid justify-items-center items-stretch gap-2 grid-cols-2">
                            <div className="grid w-full items-center gap-2">
                                <Label htmlFor="title">公開日</Label>
                                <DateTimePicker
                                    date={
                                        fields.publishedAt.value
                                            ? new Date(fields.publishedAt.value)
                                            : new Date()
                                    }
                                    setDate={(date) => {
                                        publishedAt.change(date.toISOString());
                                    }}
                                    // defaultDate={
                                    //     fields.publishedAt.value
                                    //         ? new Date(fields.publishedAt.value)
                                    //         : new Date()
                                    // }
                                />
                            </div>

                            <div className="grid w-full items-center gap-2">
                                <Label htmlFor="title">カテゴリ</Label>
                                <Select
                                    onValueChange={(v) => categoryId.change(v)}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="投稿する学科" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {data.categories.map((item, index) => {
                                            return (
                                                <SelectItem
                                                    key={index}
                                                    value={`${item.id}`}
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
                    <div className=" mt-6">
                        <Alert
                            variant="destructive"
                            className="rounded-lg bg-rose-100"
                        >
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>エラーが発生しました。</AlertTitle>
                            <AlertDescription>
                                全ての項目を入力してください。
                            </AlertDescription>
                        </Alert>
                    </div>
                </main>
            </div>
            <Footer />
        </Form>
    );
}
