/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

import { init } from "i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/ja/zod.json";

init({
    lng: "ja",
    resources: {
        ja: { zod: translation },
    },
});
z.setErrorMap(zodI18nMap);

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <RemixBrowser />
        </StrictMode>,
    );
});
