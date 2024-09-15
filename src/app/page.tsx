"use client";

import Image from "next/image";
import Testimonials from "@/components/testimonials";
import Workflows from "@/components/workflows";

export default function Home() {
  return (
    <main className="">
      <Workflows />
      <Testimonials />
    </main>
  );
}
