import { setupOtel } from "./setup-otel";
setupOtel();

import * as api from "@opentelemetry/api";

const tracer = api.trace.getTracer("manual-trace");

tracer.startActiveSpan("my-custom-span", (span) => {
  span.end();
});
