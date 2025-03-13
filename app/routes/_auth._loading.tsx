import { useLocation, Outlet, Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";

export default function Articles() {
    return (
        <div className="flex gap-4 justify-center ">
            <main className="max-w-6xl w-full leading-6 tracking-wider">
                <Outlet />
            </main>
            {/* <aside className="p-4 bg-white rounded-xl border max-w-sm w-full">
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
            </aside> */}
        </div>
    );
}
