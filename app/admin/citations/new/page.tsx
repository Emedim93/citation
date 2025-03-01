"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useFormStatus } from "react-dom";
import { createCitationAction } from "./citations.action";
//import Form from "next/form";


export default function Page() {

    const createCitation = async (FormData: FormData) => {
        const json = await createCitationAction({
            author: String(FormData.get("author")),
            text: String(FormData.get("text")),
        });

        if (json.error)
            alert(json.error)
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Create citation</CardTitle>
            </CardHeader>
            <CardContent>
                <form 
                    action={async (formData) => {
                        createCitation(formData);
                }} 
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
            <SubmitButton />
        </form>
        </CardContent>
        </Card>
    );
}

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button disabled={pending} type="submit">
            {pending ? "Loading..." : "Submit"}
        </Button>
    )
}