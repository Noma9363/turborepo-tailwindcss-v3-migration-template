import React from "react";
import {cn} from "@workspace/ui/lib/utils";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@workspace/ui/components/ui/card";
import {Field, FieldLabel} from "@workspace/ui/components/ui/field";
import {Input} from "@workspace/ui/components/ui/input";
import {Textarea} from "@workspace/ui/components/ui/textarea";
import {Button} from "@workspace/ui/components/ui/button";
import {typography} from "@workspace/ui/components/ui/tailwind-variations";

export const ContactField = (
    {
        className,
        ...props
    }:React.ComponentProps<"div">
) => {
    return (
        <div className={cn("", className)} {...props}>
            <Card variant="glass" className="max-w-md mx-auto">
                <CardHeader className="pb-4">
                    <CardDescription className={cn("w-fit ", typography.inlineCodeTypo)}>Contact field, Enter your email.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col justify-between gap-6">
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                className=""
                                id="email"
                                typeof="email"
                                placeholder="m@example.com"
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="comments">
                                Comments
                            </FieldLabel>
                            <Textarea
                                id="comments"
                                placeholder="Add any comments"
                                className={cn("resize-none")}
                            />
                        </Field>
                        <Field>
                            <Button typeof="submit">Submit.</Button>
                        </Field>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
