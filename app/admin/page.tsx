import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Link from "next/link";

export default async function Page() {
    await new Promise((r) => setTimeout(r, 1000));
    return (
        <Card>
            <CardHeader>
                <CardTitle>URL : /admin</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                
                <Link className={buttonVariants({size: "lg", variant: "outline"})} href="/admin/citations/new"
                >
                Create citation
                </Link>
            </CardContent>
        </Card>
    );
}