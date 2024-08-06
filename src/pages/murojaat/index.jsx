import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Input } from '@material-tailwind/react';
import "./style.scss"

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
    return (
        <>
            <h1>Murojaat</h1>
            <div className="bigForm">
                <form>
                    <span>
                        <Input color="blue" label="Murojaat sababi" />
                        <Input color='blue' label='Telefon raqam'></Input>
                    </span>

                    <span className='span2'>
                        <p className='text-black dark:text-white'>Tabiat buzilishi haqida <br /> rasm yoki videoni kiriting</p>
                        <ImgCrop rotationSlider>
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
                    <textarea placeholder='Muammo haqida yozing' className='text-black dark:text-white bg-transparent' name="" id="" rows="6"></textarea>
                </form>
            </div>
        </>
    )
}