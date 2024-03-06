import { Button } from "@/components/ui/button";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export const TooltipButton = ({
    content,
    trigger,
}: {
    content: JSX.Element;
    trigger: JSX.Element;
}) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{trigger}</TooltipTrigger>
                <TooltipContent className="bg-white">{content}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
