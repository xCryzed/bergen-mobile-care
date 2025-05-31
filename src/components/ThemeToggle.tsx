import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Monitor, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ThemeToggleProps {
    showText?: boolean;
}

export function ThemeToggle({ showText = false }: ThemeToggleProps) {
    const { theme, setTheme } = useTheme();

    const getIcon = () => {
        switch (theme) {
            case "light":
                return <Sun className="h-4 w-4" />;
            case "dark":
                return <Moon className="h-4 w-4" />;
            case "system":
                return <Monitor className="h-4 w-4" />;
            default:
                return <Sun className="h-4 w-4" />;
        }
    };

    const getThemeText = () => {
        switch (theme) {
            case "light":
                return "Hell";
            case "dark":
                return "Dunkel";
            case "system":
                return "System";
            default:
                return "Hell";
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-soft-blue-100 dark:hover:bg-gray-700"
                >
                    {getIcon()}
                    {showText && <span className="text-sm font-medium">{getThemeText()}</span>}
                    <ChevronDown className="h-3 w-3" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                >
                    <Sun className="h-4 w-4" />
                    <span>Hell</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                >
                    <Moon className="h-4 w-4" />
                    <span>Dunkel</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                >
                    <Monitor className="h-4 w-4" />
                    <span>System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}