import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b p-4 text-xl font-semibold">
      <div>T. Detyre</div>

      <div className="flex gap-4">
        <ThemeToggle />
        <SignedOut>
          <SignInButton>
            <Button variant="link"> Iniciar sesi&oacute;n</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{ elements: { footer: "hidden" } }}
            afterSignOutUrl="/"
          />
        </SignedIn>
      </div>
    </nav>
  );
}
