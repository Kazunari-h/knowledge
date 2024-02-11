import type { LinksFunction, LoaderFunction } from "@remix-run/cloudflare";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/globals.css";
import { cssBundleHref } from "@remix-run/css-bundle";

import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
    // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader: LoaderFunction = (args) => rootAuthLoader(args);
export const ErrorBoundary = ClerkErrorBoundary();

function App() {
    return (
        <html lang="ja" className="w-screen min-h-screen">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="w-screen min-h-screen flex flex-col">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

export default ClerkApp(App);
