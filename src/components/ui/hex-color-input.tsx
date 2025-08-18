"use client";

import { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<typeof Input>;

export interface HexColorInputProps
  extends Omit<InputProps, "onChange" | "value"> {
  value: string;
  onChange: (newColor: string) => void;
}

const HexColorInput = forwardRef<HTMLInputElement, HexColorInputProps>(
  ({ value, onChange, className, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      const sanitizedValue = rawValue.startsWith("#")
        ? rawValue.slice(1)
        : rawValue;
      const hexOnlyValue = sanitizedValue.replace(/[^0-9a-fA-F]/g, "");
      const limitedValue = hexOnlyValue.slice(0, 6);

      onChange(`#${limitedValue.toUpperCase()}`);
    };

    const displayValue = (value || "").replace("#", "").toUpperCase();

    return (
      <div className="relative w-full">
        <span className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
          #
        </span>
        <Input
          value={displayValue}
          onChange={handleChange}
          ref={ref}
          className={cn("pl-7", className)}
          {...props}
        />
      </div>
    );
  },
);
HexColorInput.displayName = "HexColorInput";

export { HexColorInput };
