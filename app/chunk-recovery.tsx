"use client";

import { useEffect } from "react";

const CHUNK_ERROR = /failed to fetch dynamically imported module|importing a module script failed|loading chunk .* failed/i;
const RECOVERY_KEY = "lac-studio-chunk-recovery";

function reloadOnce() {
  const locationKey = window.location.href;
  if (window.sessionStorage.getItem(RECOVERY_KEY) === locationKey) return;
  window.sessionStorage.setItem(RECOVERY_KEY, locationKey);
  window.location.reload();
}

export function ChunkRecovery() {
  useEffect(() => {
    const onRejection = (event: PromiseRejectionEvent) => {
      if (CHUNK_ERROR.test(String(event.reason?.message ?? event.reason ?? ""))) reloadOnce();
    };
    const onError = (event: ErrorEvent) => {
      if (CHUNK_ERROR.test(event.message)) reloadOnce();
    };
    window.addEventListener("unhandledrejection", onRejection);
    window.addEventListener("error", onError);
    return () => {
      window.removeEventListener("unhandledrejection", onRejection);
      window.removeEventListener("error", onError);
    };
  }, []);

  return null;
}
