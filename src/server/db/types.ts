import { InferSelectModel } from "drizzle-orm";
import { users, sections, sectionRights } from "./schema";

export type UserSelection = InferSelectModel<typeof users>;
export type SectionSelection = InferSelectModel<typeof sections>;
export type SectionRightSelection = InferSelectModel<typeof sectionRights>;
