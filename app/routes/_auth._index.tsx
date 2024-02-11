import type { MetaFunction } from "@remix-run/cloudflare";

import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return <div></div>;
}
