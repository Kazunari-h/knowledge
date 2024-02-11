import type { MetaFunction } from "@remix-run/cloudflare";
import { SignIn } from "@clerk/remix";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Signin() {
    return (
        <div className="w-screen h-screen grid place-items-center">
            <SignIn />
        </div>
    );
}
