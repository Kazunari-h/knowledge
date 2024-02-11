import { Outlet } from "@remix-run/react";

import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/remix";

export default function Auth() {
    return (
        <>
            <SignedIn>
                <Header />
                <div className="flex-1 p-8 bg-zinc-100">
                    <Outlet />
                </div>
                <Footer />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}
