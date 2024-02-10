import { Outlet } from "@remix-run/react";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/remix";

export default function Auth() {
    return (
        <div>
            <SignedIn>
                <Outlet />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    );
}
