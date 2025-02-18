import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
//import Form from "next/form";


export default function Page() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create citation</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
        <form action="/api/citations" 
        method="post"
        className="flex flex-col gap-2"
        >
            <Label>
                Citation
            <Input name="citation" />
            </Label>
            <Label>
                Author
            <Input  name="author" />
            </Label>
            <Button type="submit">Submit</Button>
        </form>
        </CardContent>
        </Card>
    );
}