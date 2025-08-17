import posthog from "posthog-js";

if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  throw new Error("NEXT_PUBLIC_POSTHOG_KEY is not defined");
}

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: "2025-05-24",
  persistence: "memory",
  disable_session_recording: true,
  autocapture: false,
  capture_pageview: false,
  debug: process.env.NODE_ENV === "development",
  loaded: (posthog) => {
    posthog.capture("page_view", { path: window.location.pathname });
  },
});
