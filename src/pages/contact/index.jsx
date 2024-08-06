import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Input } from '@material-tailwind/react';
import "./style.scss"

export default function Contact() {
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
    return (
        <>
            <div className="bigForm">
                <form>
                    <h1 className='text-[25px] text-center'>Biz bilan bog'laning</h1>
                    <span>
                        <Input color="teal" label="Ism familiya" />
                        <Input color='teal' label='Telefon raqam'></Input>
                    </span>
                    <Input type='email' color="teal" label="Emailingiz" />
                    <textarea placeholder='Xabar' className='text-white bg-transparent' name="" id="" rows="6"></textarea>
                </form>
            </div>
        </>
    )
}