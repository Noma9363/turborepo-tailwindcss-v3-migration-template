import React from "react";
import {cn} from "@workspace/ui/lib/utils";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {Field, FieldLabel} from "@workspace/ui/components/ui/field";
import {Input} from "@workspace/ui/components/ui/input";
import {Textarea} from "@workspace/ui/components/ui/textarea";
import {Button} from "@workspace/ui/components/ui/button";
import {typography} from "@workspace/ui/components/ui/tailwind-variations";

interface ContactFieldProps{
    loading: boolean;
    formData: {
        name: string;
        email: string;
        message: string;
    };
    onSubmit: (e: React.FormEvent) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    status: 'idle' | 'success' | 'error';
}

export const ContactField = (
    {
        loading,
        formData,
        onSubmit,
        onChange,
        status,

    }:ContactFieldProps
) => {
    return (
        <div className={cn("page-container")} >
            <Card variant="glass" className="max-w-md mx-auto">
                <CardHeader className="pb-4">
                    <CardDescription className={cn("w-fit ", typography.inlineCodeTypo)}>Contact field, Enter your email.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        className="flex flex-col justify-between gap-6"
                        onSubmit={onSubmit}
                    >
                        <Field>
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input
                                className=""
                                id="name"
                                name="name"
                                type="text"
                                placeholder="example last name"
                                value={formData.name}
                                onChange={onChange}
                                disabled={loading}
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                className=""
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                value={formData.email}
                                onChange={onChange}
                                disabled={loading}
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="message">
                                Comments
                            </FieldLabel>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Add any comments"
                                className={cn("resize-none")}
                                value={formData.message}
                                onChange={onChange}
                                disabled={loading}
                                required
                            />
                        </Field>
                        <Field>
                            <Button type="submit" disabled={loading}>
                                {
                                    loading ? "Sending..." : "Submit."
                                }
                            </Button>
                        </Field>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
