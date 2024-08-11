import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Button, Input } from '@material-tailwind/react';
import "./style.scss"
import { inctance } from '../../utils/axios';
import { toast } from 'react-toastify';

export default function Murojaat() {
    const [fileList, setFileList] = useState([
    ]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    let [muroj, setMuroj] = useState("")
    let [telefon, setTelefon] = useState("")
    let [rasm, setRasm] = useState("")
    let [lokatsiya, setLokatsiya] = useState("")
    let [xabar, setXabar] = useState("")

    const Murojaat = (e) => {
        e.preventDefault();
        inctance.post("/murojaat", {
            muroj: muroj,
            telefon: telefon,
            rasm: rasm,
            lokatsiya: lokatsiya,
            xabar: xabar,
        }).then((r) => toast.success("Message deleted"))
            .catch((er) => toast.error("Something went wrong"))
    };
    return (
        <>
            <div className="bigForm">
                <form onSubmit={(e) => Murojaat(e)}>
                    <h1 className='text-[25px] text-center'>Qanday muammo bor</h1>
                    <span>
                        <Input value={muroj} onChange={(e) => setMuroj(e.target.value)} required color="teal" label="Murojaat sababi" />
                        <Input value={telefon} onChange={(e) => setTelefon(e.target.value)} required color='teal' label='Telefon raqam'></Input>
                    </span>

                    <span className='span2'>
                        <p className='dark:text-white'>Tabiat buzilishi haqida <br /> rasm yoki videoni kiriting</p>
                        <ImgCrop value={rasm} onChange={(e) => setRasm(e.target.value)} rotationSlider>
                            <Upload className='upload'
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                            >
                                {fileList.length < 5 && '+ Upload'}
                            </Upload>
                        </ImgCrop>

                    </span>
                    <Input value={lokatsiya} onChange={(e) => setLokatsiya(e.target.value)} required color="teal" label="Lokatsiya" />
                    <textarea value={xabar} onChange={(e) => setXabar(e.target.value)} placeholder='Muammo haqida yozing' className='text-white bg-transparent' name="" id="" rows="6"></textarea>
                    <div className="btns flex items-center justify-between w-full gap-5">
                        <Button className='w-full' type='submit'>Jo'natish</Button>
                        {/* <Button className='w-full btn2' type='reset'>Reset</Button> */}
                    </div>
                </form>
            </div>
        </>
    )
}