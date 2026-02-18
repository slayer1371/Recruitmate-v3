import { prisma } from "@/lib/prisma";
import ConferenceList from "./ConferenceList";

export const dynamic = 'force-dynamic';

export default async function ResourcesPage() {
  const conferences = await prisma.conference.findMany({
    include: {
      schools: true
    },
    orderBy: {
      name: 'asc'
    }
  });

  return <ConferenceList conferences={conferences} />;
}
