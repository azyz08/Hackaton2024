import { Button, Input } from '@material-tailwind/react';
import "./style.scss"
import { useState } from 'react';
import { inctance } from '../../utils/axios';
import { toast } from 'react-toastify';

export default function Contact() {
    let [ism, setIsm] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState("");
    let [messag, setmessag] = useState("");

    const SendXabar = (e) => {
        e.preventDefault();
        inctance.post("/ecoSwapXabar", {
            ism: ism,
            phone: phone,
            email: email,
            messag: messag,
        })
            .then((r) => toast.success("Sent successfully"))
            .catch((er) => toast.error("Something went wrong"))
    };

    return (
        <>
            <div className="bigForm bigForm2">
                <form onSubmit={(e) => SendXabar(e)}>
                    <h1 className='text-[25px] text-center'>Biz bilan bog'laning</h1>
                    <span>
                        <Input required value={ism} onChange={(e) => setIsm(e.target.value)} color="teal" label="Ism familiya" />
                        <Input required value={phone} onChange={(e) => setPhone(e.target.value)} color='teal' label='Telefon raqam'></Input>
                    </span>
                    <Input required value={email} onChange={(e) => setEmail(e.target.value)} type='email' color="teal" label="Emailingiz" />
                    <textarea required value={messag} onChange={(e) => setmessag(e.target.value)} placeholder='Xabar' className='text-white bg-transparent' name="" id="" rows="6"></textarea>
                    <Button type='submit'>Send</Button>
                </form>
            </div>
        </>
    )
}