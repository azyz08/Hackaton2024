import React from 'react';
import { Input } from "@material-tailwind/react";

export default function Murojaat() {

    return (
        <>
            <h1>Murojaat</h1>
            <div className="bigForm">
                <form>
                    <span>
                        <Input color="blue" label="Murojaat sababi" />
                        <Input color='blue' label='Telefon raqam'></Input>
                    </span>
                    
                </form>
            </div>
        </>
    )
}