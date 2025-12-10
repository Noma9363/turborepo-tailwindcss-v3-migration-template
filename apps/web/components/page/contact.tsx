'use client'

import React from "react";
import {collection, addDoc} from 'firebase/firestore';
import {db} from "@/lib/firebase";
import {cn} from "@workspace/ui/lib/utils";
import {Headline} from "@/components/common/headline/headline";
import {ContactField} from "@/components/page-module/contact/contact-field/contact-field";

export const ContactPage = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
    });

    // used in sending
    const [loading, setLoading] = React.useState(false);
    // form status
    const [statues, setStatues] = React.useState<'idle' | 'success' | 'error'>('idle');

    // handler
    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault(); // block refreshing
        setLoading(true); // loading phase
        setStatues('idle'); // set Form Status

        try{
            await addDoc(collection(db, 'contacts'), {
                ...formData,
                timestamp: new Date(),
            });

            // successes case
            setStatues('success');
            setFormData({name: '', email: '', message: ''});
        } catch (error){
            // case: error
            console.error('Error submitting: ', error);
            setStatues('error');
        } finally {
            setLoading(false); // finish phase
        }
    }

    const handleChange = (
        e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return(
        <div id="contact" className={cn("w-full pb-16")}>

            <div className={cn("flex rounded flex-col justify-center items-center page-container gap-2 ")}>
                <Headline level="h2" className="text-center">Contact.</Headline>
                <Headline level="lead" className="text-center break-all">관심이 있으시다면...</Headline>
            </div>
            <ContactField
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                loading={loading}
                status={statues}
            />
        </div>
    )
}
