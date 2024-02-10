import { useLocation } from "@remix-run/react";

export default function Articles() {
    const location = useLocation();

    return (
        <div>
            <h1>{location.pathname}</h1>
        </div>
    );
}
