"use client";

import { DesignProvider } from "@/design-system/engine/provider";
import { DesignLab } from "../page";

export default function LabPage() {
  return <DesignProvider scope="lab"><DesignLab /></DesignProvider>;
}
