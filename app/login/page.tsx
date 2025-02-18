import LoginForm from "@/app/ui/login-form";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";
import Link from "next/link";
import { libre } from "../ui/fonts";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main
      className={`${libre.className} flex items-center md:h-screen bg-gradient-to-br from-zinc-500 from-10% via-zinc-700 via-50% to-zinc-900 to-90%`}
    >
      <div className="relative mx-auto w-1/4 h-1/2 bg-zinc-800 flex-col p-4 mb-0 rounded-2xl space-y-4">
        <Link className="w-full flex justify-end" href="/">
          <ArrowUturnLeftIcon className="h-8 text-gray-50 pr-4" />
        </Link>
        <LoginForm />
      </div>
    </main>
  );
}
