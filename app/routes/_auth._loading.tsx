import { useLocation } from "@remix-run/react";
import { Outlet, Link } from "@remix-run/react";

export default function Articles() {
    const location = useLocation();

    return (
        <div>
            <h1>_auth._loading.tsx</h1>
            <h2>{location.pathname}</h2>
            <Outlet />
        </div>
    );
}
