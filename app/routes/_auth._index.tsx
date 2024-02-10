import type { MetaFunction } from "@remix-run/cloudflare";

import { Outlet, Link } from "@remix-run/react";

import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    UserButton,
} from "@clerk/remix";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/articles">Articles</Link>
            </li>

            <li>
                <Link to="/articles/new">Articles New</Link>
            </li>
            <li>
                <Link to="/articles/1">articles/userid1</Link>
            </li>
            <li>
                <Link to="/articles/2">articles/userid2</Link>
            </li>
            <li>
                <Link to="/articles/3">articles/userid3</Link>
            </li>
            <li>
                <Link to="/articles/1/1">articles/userid1/articleid</Link>
            </li>
            <li>
                <Link to="/articles/2/1">articles/userid2/articleid</Link>
            </li>
            <li>
                <Link to="/articles/3/1">articles/userid3/articleid</Link>
            </li>

            <li>
                <Link to="/mypage">My Page</Link>
            </li>
            <li>
                <Link to="/mypage/settings">Settings</Link>
            </li>
            <li>
                <Link to="/mypage/notifications">Notifications</Link>
            </li>
            <li>
                <Link to="/mypage/friends">Friends</Link>
            </li>
            <li>
                <Link to="/mypage/messages">Messages</Link>
            </li>
        </ul>
    );
}
