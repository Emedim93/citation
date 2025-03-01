"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useState } from "react";
//import Form from "next/form";


export default function Page() {
    const [isLoading, setIsLoading] = useState(false)

    const createCitation = async (FormData: FormData) => {
        const result = await fetch(`/api/citations`, {
            body: JSON.stringify({
                citation: FormData.get("citation"),
                author: FormData.get("author"),
            }),
            method: "POST",
        });
        const json = await result.json();
        setIsLoading(false);

        console.log(json);
    }

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
            <Button disabled={isLoading} type="submit">
                {isLoading ? "Loading..." : "Submit"}
            </Button>
        </form>
        </CardContent>
        </Card>
    );
}