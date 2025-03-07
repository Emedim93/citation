"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useFormStatus } from "react-dom";
import { createCitationAction } from "./citations.action";
import { CitationForm } from "./citation-form";
//import Form from "next/form";


export default function Page() {
    return <CitationForm />
}

