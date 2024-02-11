import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";

export default function Articles() {
    return (
        <article className="mx-auto max-w-6xl leading-6 tracking-wide">
            <header className="text-center py-16">
                <p className="text-8xl">😀</p>
                <h1 className="text-4xl font-bold py-4">Welcome to Remix!</h1>
                <p>
                    Get started by editing
                    <code className="bg-gray-100 text-gray-900 rounded-md p-1">
                        app/routes/index.tsx
                    </code>
                </p>
                <p className="grid">
                    <time dateTime="2024-02-11">2024/02/11に公開</time>
                    <time dateTime="2024-02-11">2024/02/11に公開</time>
                </p>
            </header>
            <div className="flex gap-6">
                <div className=" w-full grid gird-col-1 gap-8">
                    <div className="bg-white border px-4 py-8 rounded-lg">
                        <h1 className="text-2xl">Home</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quos, quia! Quisquam, voluptatum. Quisquam,
                            voluptatum.
                        </p>
                    </div>
                    <div className="bg-white border px-4 py-8 rounded-lg"></div>
                    <div className="bg-white border px-4 py-8 rounded-lg"></div>
                    <div className="bg-white border px-4 py-8 rounded-lg"></div>
                </div>
                <aside className=" bg-white border max-w-sm w-full p-6 rounded-xl lg:block hidden ">
                    <ul className="grid gap-2">
                        <li className="aa">
                            <Button asChild variant={"link"}></Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/">Home</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/articles">Articles</Link>
                            </Button>
                        </li>

                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/articles/new">Articles New</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/articles/1">articles/userid1</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/articles/2">articles/userid2</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/articles/3">articles/userid3</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/articles/1/1">
                                    articles/userid1/articleid
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/articles/2/1">
                                    articles/userid2/articleid
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/articles/3/1">
                                    articles/userid3/articleid
                                </Link>
                            </Button>
                        </li>

                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/mypage">My Page</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/mypage/settings">Settings</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/mypage/notifications">
                                    Notifications
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/mypage/friends">Friends</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"link"}>
                                <Link to="/mypage/messages">Messages</Link>
                            </Button>
                        </li>
                    </ul>
                </aside>
            </div>
        </article>
    );
}
