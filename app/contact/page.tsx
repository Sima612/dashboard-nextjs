"use client";

import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import NavbarPage from "../navbar/page";
import { Button } from "../ui/button";

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <NavbarPage />
      <div>Contact sales</div>
    </>
  );
}
