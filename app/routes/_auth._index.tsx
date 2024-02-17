import type { MetaFunction } from "@remix-run/cloudflare";

import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";
import {
    ChevronRight,
    Gamepad2,
    Bot,
    Palette,
    Car,
    Music,
    Briefcase,
    Ticket,
    Heart,
} from "lucide-react";

import { badgeVariants } from "@/components/ui/badge";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <>
            {[
                // {
                //     title: "ランキング",
                //     titleEn: "Rankings",
                //     description:
                //         "学生たちが日々の学習や研究で役立つ情報を共有し合うこのサービスでは、皆さんの貢献や活用の度合いに応じてランキングが形成されています。最も注目された記事や、最も貢献の大きかったユーザーを紹介することで、知識の発見と共有のサイクルをより活発にしています。",
                // },
                {
                    title: "記事一覧",
                    titleEn: "Articles",
                    description:
                        "学生たちの間で知識と経験を共有し、学びを深めるためのプラットフォームです。ここでは、最新の研究成果や学習テクニック、効率的なノートの取り方から試験対策まで、幅広いトピックに関する記事が共有されています。皆で協力して学問の壁を乗り越え、目指す未来への一歩を踏み出しましょう。この共有サービスを通じて、学生一人ひとりが持つポテンシャルを最大限に引き出し、知識の輪を広げていくことができます。",
                    children: (
                        <ul className="grid gap-4 grid-cols-2">
                            {Array.from({ length: 10 }).map((_, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="bg-white border p-6 rounded-lg"
                                    >
                                        <article className="flex gap-3">
                                            <div>
                                                <div className="rounded-full w-10 h-10 border grid place-items-center">
                                                    <Bot className="h-6 w-6 stroke-1 stroke-cyan-500" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-zinc-500 text-xs flex gap-2">
                                                    <Link
                                                        to="/"
                                                        className=" hover:text-cyan-500 transition hover:underline underline-offset-2"
                                                    >
                                                        hirosawak
                                                    </Link>
                                                </p>
                                                <div className="text-zinc-500 text-xs flex justify-between items-center mb-2">
                                                    <time>2021/10/10</time>
                                                </div>
                                                <Link
                                                    to="/"
                                                    className="my-3 block"
                                                >
                                                    <h2 className="text-xl text-zinc-800 hover:text-cyan-500 font-bold line-clamp-2 leading-7 transition">
                                                        タイトルが入ります
                                                        タイトルが入ります
                                                        タイトルが入ります
                                                        タイトルが入ります
                                                        タイトルが入ります
                                                    </h2>
                                                </Link>
                                                <p className="text-zinc-500 text-xs my-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="group"
                                                    >
                                                        <Heart className=" transition group-hover:fill-pink-500 stroke-pink-500 inline-block w-4 h-4 mr-1" />
                                                        <p>120</p>
                                                    </Button>
                                                </p>
                                            </div>
                                        </article>
                                    </li>
                                );
                            })}
                        </ul>
                    ),
                },

                // {
                //     title: "ユーザ一覧",
                //     titleEn: "Users",
                //     description:
                //         "このセクションでは、アクティブなユーザーたちのプロフィールを紹介しています。彼らは多岐にわたる分野で知識を共有し、コミュニティ内での学び合いを促進しています。気になるユーザーをフォローして、最新の投稿や活動をチェックしましょう。",
                // },

                {
                    title: "カテゴリ一覧",
                    titleEn: "Categories",
                    description:
                        "このプラットフォームは、科学、文学、技術、芸術など、多様な学問分野にわたるカテゴリを提供しています。学生たちは自分の興味や専攻に応じて情報を探索し、知識を深めることができます。",
                    children: (
                        <>
                            <ul className="grid gap-4 grid-cols-3">
                                {[
                                    {
                                        title: "ゲーム",
                                        icon: Gamepad2,
                                        to: "/",
                                    },
                                    {
                                        title: "IT",
                                        icon: Bot,
                                        to: "/",
                                    },
                                    {
                                        title: "CG・アニメ",
                                        icon: Palette,
                                        to: "/",
                                    },
                                    {
                                        title: "ミュージック",
                                        icon: Music,
                                        to: "/",
                                    },
                                    {
                                        title: "カーデザイン",
                                        icon: Car,
                                        to: "/",
                                    },
                                    {
                                        title: "資格試験",
                                        icon: Ticket,
                                        to: "/",
                                    },
                                    {
                                        title: "就活",
                                        icon: Briefcase,
                                        to: "/",
                                    },
                                ].map((category, index) => {
                                    return (
                                        <li key={index}>
                                            <Button variant="secondary" asChild>
                                                <Link
                                                    to={category.to}
                                                    className="grid place-items-center gap-4 h-auto bg-white border px-4 py-8 rounded-lg"
                                                >
                                                    <category.icon className="h-16 w-16 stroke-1 stroke-cyan-500" />
                                                    <h2 className="text-lg font-bold">
                                                        {category.title}
                                                    </h2>
                                                </Link>
                                            </Button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    ),
                },
                {
                    title: "タグ一覧",
                    titleEn: "Tags",
                    description:
                        "このプラットフォームでは、様々なタグを通じて記事を簡単に分類し、検索することができます。学問の領域、関心のあるトピック、研究方法など、幅広いタグが用意されており、ユーザーは自分に合った情報を迅速に見つけることが可能です。",
                    children: (
                        <div className="flex flex-wrap gap-x-2 gap-y-4">
                            {Array.from({ length: 40 }).map((_, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to="/"
                                        className={badgeVariants({
                                            variant: "outline",
                                            className: " bg-white",
                                        })}
                                    >
                                        <span className="w-5 h-5 -ml-2 mr-2 rounded-full bg-zinc-200 grid place-items-center">
                                            ?
                                        </span>
                                        Badge {index}
                                    </Link>
                                );
                            })}
                        </div>
                    ),
                },
            ].map((section, index) => {
                return (
                    <section
                        key={index}
                        className="mx-auto max-w-6xl leading-6 tracking-wider py-8"
                    >
                        <header className="mb-8">
                            <p className="text-sm text-zinc-500">
                                {section.title}
                            </p>
                            <h1 className="scroll-m-20 text-2xl font-bold lg:text-3xl mb-4 text-zinc-900">
                                {section.titleEn}
                            </h1>
                            <p className="text-zinc-600 leading-7">
                                {section.description}
                            </p>
                        </header>
                        {section.children}
                        <p className="p-8 text-center">
                            <Button variant="ghost" asChild>
                                <Link
                                    className=" hover:text-cyan-500 text-primary-500 flex justify-center items-center"
                                    to={`/${section.titleEn.toLowerCase()}`}
                                >
                                    {section.title}をもっと見る
                                    <ChevronRight className="h-5 w-5 stroke-[1.5px]" />
                                </Link>
                            </Button>
                        </p>
                    </section>
                );
            })}
        </>
    );
}
