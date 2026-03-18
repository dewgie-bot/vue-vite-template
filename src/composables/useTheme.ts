import { computed, ref } from "vue";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const theme = ref<Theme>("light");
let initialized = false;

function getIsClient() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function getSystemTheme(): Theme {
  if (!getIsClient() || typeof window.matchMedia !== "function") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStoredTheme(): Theme | null {
  if (!getIsClient()) return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "light" || raw === "dark") return raw;
  } catch {
    return null;
  }

  return null;
}

function applyTheme(nextTheme: Theme) {
  if (!getIsClient()) return;

  document.documentElement.classList.toggle("dark", nextTheme === "dark");
  // Helps built-in form controls match the chosen theme.
  document.documentElement.style.colorScheme = nextTheme;
}

/**
 * Initializes theme state.
 * - If a user preference exists, use it.
 * - Otherwise, fall back to system preference.
 */
export function initTheme(): Theme {
  if (initialized) return theme.value;

  const initialTheme = readStoredTheme() ?? getSystemTheme();
  theme.value = initialTheme;
  applyTheme(initialTheme);
  initialized = true;

  return initialTheme;
}

export function setTheme(nextTheme: Theme) {
  theme.value = nextTheme;
  applyTheme(nextTheme);

  if (!getIsClient()) return;

  try {
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  } catch {
    // Ignore storage write failures (private mode, disabled storage, etc.)
  }
}

export function toggleTheme() {
  setTheme(theme.value === "dark" ? "light" : "dark");
}

export function useTheme() {
  if (!initialized) initTheme();

  return {
    theme,
    isDark: computed(() => theme.value === "dark"),
    label: computed(() => (theme.value === "dark" ? "Dark" : "Light")),
    setTheme,
    toggleTheme,
  };
}
