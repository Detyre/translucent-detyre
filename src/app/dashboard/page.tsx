import { db } from "~/server/db";
import { ModuleLink } from "./_components/module-link";

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
          <ModuleLink key={section.id} name={section.name} />
        ))}
      </ul>
    </main>
  );
}
