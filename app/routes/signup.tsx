import type { MetaFunction } from "@remix-run/cloudflare";
import { SignUp } from "@clerk/remix";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Signup() {
    return (
        <div className="w-screen h-screen grid place-items-center">
            <SignUp />
        </div>
    );
}
