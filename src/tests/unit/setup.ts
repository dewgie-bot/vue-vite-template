import { config } from "@vue/test-utils";

// Avoid Vue warnings when optional features (like RouterView) are not enabled in unit tests.
config.global.stubs = {
  ...config.global.stubs,
  RouterView: true,
};
