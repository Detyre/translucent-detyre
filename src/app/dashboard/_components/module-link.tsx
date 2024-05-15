import Link from "next/link";
import { Button } from "~/components/ui/button";

function moduleNameToLinkPath(name?: string) {
  if (!name) return "/dashboard";
  return `/${name}`;
}

export function ModuleLink({ name }: { name: string }) {
  const to = moduleNameToLinkPath(name);
  return (
    <li className="w-full">
      <Link href={to}>
        <Button className="w-full" variant="outline">
          {name}
        </Button>
      </Link>
    </li>
  );
}
