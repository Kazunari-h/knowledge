import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { SelectSingleEventHandler } from "react-day-picker";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { format, getHours, getMinutes, set } from "date-fns";

interface DateTimePickerProps {
    date: Date;
    setDate: (date: Date) => void;
}

export function DateTimePicker({ date, setDate }: DateTimePickerProps) {
    const [selectedDateTime, setSelectedDateTime] = React.useState<Date>(date);

    const handleSelect: SelectSingleEventHandler = (day, selected) => {
        const modifiedDay = set(selected, {
            hours: getHours(selectedDateTime),
            minutes: getMinutes(selectedDateTime),
        });

        setSelectedDateTime(modifiedDay);
        setDate(modifiedDay);
    };

    const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (
        e,
    ) => {
        const { value } = e.target;
        const hours = Number.parseInt(value.split(":")[0] || "00", 10);
        const minutes = Number.parseInt(value.split(":")[1] || "00", 10);
        const modifiedDay = set(selectedDateTime, {
            hours: hours,
            minutes: minutes,
        });

        setSelectedDateTime(modifiedDay);
        setDate(modifiedDay);
    };

    const footer = (
        <>
            <div className="grid w-full items-center gap-2 px-4 pt-3 pb-4">
                <Label>時刻</Label>
                <Input
                    type="time"
                    onChange={handleTimeChange}
                    value={format(selectedDateTime, "HH:mm")}
                />
            </div>
            {!selectedDateTime && <p>日付を選択</p>}
        </>
    );

    return (
        <Popover>
            <PopoverTrigger asChild className="z-10">
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                        format(selectedDateTime, "yyyy/MM/dd HH:mm")
                    ) : (
                        <span>日付を選択</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={selectedDateTime}
                    onSelect={handleSelect}
                    initialFocus
                />
                {footer}
            </PopoverContent>
        </Popover>
    );
}
