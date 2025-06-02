import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
    showText?: boolean;
}

export function ThemeToggle({ showText = false }: ThemeToggleProps) {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (theme === "dark") {
            setIsDark(true);
        } else if (theme === "light") {
            setIsDark(false);
        } else if (theme === "system") {
            // Für System-Theme prüfen wir die tatsächliche Präferenz
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDark(systemPrefersDark);
        }
    }, [theme]);

    const handleThemeChange = (checked: boolean) => {
        setTheme(checked ? "dark" : "light");
        setIsDark(checked);
    };

    const currentModeText = isDark ? "Dunkler Modus" : "Heller Modus";
    const switchLabel = `Theme wechseln zu ${isDark ? "hellem" : "dunklem"} Modus`;

    return (
        <div className="flex items-center gap-3">
            {/* Icon für aktuellen Modus */}
            <div
                className="flex items-center justify-center w-8 h-8"
                aria-hidden="true"
            >
                {isDark ? (
                    <Moon className="h-4 w-4 text-soft-blue-600 dark:text-soft-blue-400" />
                ) : (
                    <Sun className="h-4 w-4 text-soft-blue-600 dark:text-soft-blue-400" />
                )}
            </div>

            {/* Switch Element */}
            <div className="flex items-center gap-2">
                <Switch
                    checked={isDark}
                    onCheckedChange={handleThemeChange}
                    aria-label={switchLabel}
                    aria-describedby={showText ? "theme-description" : undefined}
                    className="data-[state=checked]:bg-soft-blue-600 data-[state=unchecked]:bg-gray-300 dark:data-[state=unchecked]:bg-gray-600"
                />

                {/* Text-Label wenn gewünscht */}
                {showText && (
                    <div className="flex flex-col">
                        <span
                            id="theme-description"
                            className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            {currentModeText}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            Tippen zum Wechseln
                        </span>
                    </div>
                )}
            </div>

            <span className="sr-only">
                Aktueller Modus: {currentModeText}.
                {isDark ? "Wechseln Sie zum hellen Modus für bessere Lesbarkeit bei Tageslicht." : "Wechseln Sie zum dunklen Modus für bessere Lesbarkeit bei schwachem Licht."}
            </span>
        </div>
    );
}