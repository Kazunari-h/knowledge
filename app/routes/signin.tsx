import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Signin() {
    return <p>Signin</p>;
}
