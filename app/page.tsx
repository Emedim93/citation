import Image from "next/image";
import { buttonVariants } from "@/src/components/ui/button";
import Link from "next/link";
import { 
    Card, 
    CardTitle,
    CardContent,
    CardHeader 
  } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import { DeleteCitationButton } from "./admin/citations/new/delete-citations-button";



export default async function Page() {
  const citations = await prisma.citation.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
   <Card>
      <CardHeader>
        <CardTitle>URL : /</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {citations.map((citation) => (
          <Card className="p-4 flex items-start gap-4" key={citation.id}>
            <div className="flex flex-col gap-2 flex-1">
              <p className="relative pl-8 italic before:content-['´´'] before:absolute before:left-0 bottom-0 after:text-4xl after:text-gray-400">
                {citation.text}
              </p>
              <p>-- {citation.author}</p>
            </div>
           <DeleteCitationButton />
          </Card>
        ))}
        <Link
          href="/admin"
          className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Create citation
          </Link>
      </CardContent>
    </Card>
  );
}
