import * as React from "react";
import { cn } from "../../lib/utils";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          className={cn(
            "h-4 w-4 rounded border-zinc-800 bg-zinc-900 text-zinc-100 accent-zinc-100 focus:ring-zinc-800 focus:ring-offset-zinc-950",
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <label className="text-sm font-medium leading-none text-zinc-400 select-none cursor-pointer">
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
