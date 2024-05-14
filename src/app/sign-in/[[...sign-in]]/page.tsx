import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="grid h-full content-center justify-center">
      <SignIn forceRedirectUrl="/dashboard" />
    </section>
  );
}
