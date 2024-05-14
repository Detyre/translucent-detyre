import { Button } from "~/components/ui/button";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const sections = await db.query.sections.findMany();

  return (
    <main className="flex flex-col gap-8 p-4">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        M&oacute;dulos
      </h4>
      <ul className="flex w-full flex-col gap-4 ">
        {sections.map((section) => (
          <li key={section.id} className="w-full">
            <Button className="w-full" variant="outline">
              {section.name}
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
}
