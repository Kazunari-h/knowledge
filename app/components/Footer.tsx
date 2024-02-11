export const Footer = () => {
    return (
        <footer className="p-8 bg-zinc-100 text-zinc-500">
            <div className="flex justify-center items-center gap-4">
                <small className="text-xs">&copy; 2024 hoge</small>
                <p className="text-xs">
                    Built by{" "}
                    <a
                        className="no-underline hover:underline text-cyan-500 text-bold"
                        href="https://remix.run/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Remix
                    </a>
                    . The source code is available on{" "}
                    <a
                        className="no-underline hover:underline text-cyan-500 text-bold"
                        href="https://github.com/Kazunari-h/knowledge"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
};
