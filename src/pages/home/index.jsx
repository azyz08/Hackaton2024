import { Button } from "@material-tailwind/react"
import "./style.scss"
import { Link } from "react-router-dom"


export default function Home() {
    return (
        <>
            <div className="showcase">
                <h1 className="text-center">Tabiatga mehr bering <br />u sizga <span> boylik beradi</span></h1>
                <Link to={"murojaat"}><Button color="green">Murojaat qilish</Button></Link>
            </div>

            <div className="muammolar">
                <h6>Tabiat ifloslantirayotgan muammolar</h6>
                <div className="moammo">
                    <div className="text">
                        <h1 className="dark:text-white text-black">Havo ifloslanishi</h1>
                        <ul>
                            <li className="dark:text-white text-black">Sanoat chiqindilari va transport vositalaridan chiqayotgan gazlar havo sifatini pasaytiradi.</li>
                            <li className="dark:text-white text-black">Bu nafaqat atrof-muhitga, balki inson salomatligiga ham zarar keltiradi.</li>
                        </ul>
                    </div>
                    <div className="imgs">
                        <span>
                            <img src="/avto1.jpg" alt="" />
                            <img src="/avot2.jpg" alt="" />
                        </span>
                        <img className="enImg" src="/avto3.jpeg" alt="" />
                    </div>
                </div>

                <div className="moammo mb-[60px]">

                    <div className="imgs">
                        <span>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4c692wR3Hoe_IJPzcilQ3YLH1xqmgeZlHg&s" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DiZZI9w7RYMUq2egD3a1R3q8Iy6MBRz5Xw&s" alt="" />
                        </span>
                        <img className="enImg" src="https://www.wanhossolars.com/uploads/202210124/f8598d7b-45b7-40ef-8858-201fa28e7e4f.png" alt="" />
                    </div>
                    <div className="text">
                        <h1 className="dark:text-white text-black">Yechim:</h1>
                        <ul>
                            <li className="dark:text-white text-black">Toza energiya manbalarini, masalan, quyosh va shamol energiyasini rivojlantirish.</li>
                            <li className="dark:text-white text-black">Elektr transport vositalarini keng joriy etish va qo'llab-quvvatlash.</li>
                            <li className="dark:text-white text-black">Havo sifatini monitoring qilish va qat'iy me'yorlar belgilash.</li>
                        </ul>
                    </div>
                </div>

                <div className="moammo">

                    <div className="text">
                        <h1 className="dark:text-white text-black">Suv ifloslanishi</h1>
                        <ul>
                            <li className="dark:text-white text-black">Kimyoviy moddalar va plastmassa chiqindilari suv havzalarini ifloslaydi.</li>
                            <li className="dark:text-white text-black">Ifloslangan suv manbalari ichimlik suvi sifatiga ta'sir qiladi va suv ekotizimlarini zarar yetkazadi.</li>
                        </ul>
                    </div>

                    <div className="imgs">
                        <span>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAF1SUa6KAtSGY57MUD8E966PRNJNEkFv2w&s" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaiiGU_k2uJYZZcOyVP_RhXZRAPZ-Sx1RdYUxID9re2qnXZMsyHdkj_pm5RLF1Ll1laAQ&usqp=CAU" alt="" />
                        </span>
                        <img className="enImg" src="https://ekomaktab.uz/uchebnik/assets/images/screen-shot-2019-11-01-at-01.44.43-480x350.png" alt="" />
                    </div>
                </div>

                <div className="moammo mb-[60px]">
                    <div className="imgs">
                        <span>
                            <img src="https://xabar.uz/static/crop/2/0/920__95_2047720806.jpg" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhywJ38CFz99RhOWOlvVqrdcftAVHRkVeHgiz3vaZw4WtNQTdXzZylizw-PQ0-gJOL2s&usqp=CAU" alt="" />
                        </span>
                        <img className="enImg" src="https://sinaps.uz/wp-content/uploads/2023/07/oth-id-39.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h1 className="dark:text-white text-black">Yechim:</h1>
                        <ul>
                            <li className="dark:text-white text-black"> Sanoat chiqindilarini qayta ishlash va filtratsiya tizimlarini o'rnatish.</li>
                            <li className="dark:text-white text-black"> Plastik chiqindilarni kamaytirish va qayta ishlashni kengaytirish.</li>
                            <li className="dark:text-white text-black">Suv manbalarini himoya qilish va monitoring qilish tizimlarini kuchaytirish.</li>
                        </ul>
                    </div>

                </div>

                <div className="moammo">
                    <div className="text">
                        <h1 className="dark:text-white text-black">Tuproq degradatsiyasi va o'rmonlarning kesilishi</h1>
                        <ul>
                            <li className="dark:text-white text-black">Qishloq xo'jaligi va qurilish ishlari tuproq eroziyasiga olib keladi.</li>
                            <li className="dark:text-white text-black">O'rmonlarning kesilishi biologik xilma-xillikka zarar yetkazadi va karbonat angidrid miqdorini oshiradi.</li>
                        </ul>
                    </div>

                    <div className="imgs">
                        <span>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTssOToZeCvmC47ZWulVD4566CNkcFr7k6nSA&s" alt="" />
                            <img src="https://fermermaktab.uz/upload/maqolalar/maqola_0058.jpg" alt="" />
                        </span>
                        <img className="enImg" src="https://www.forestprotection.com/images/ormansizlasmanin-baslica-nedenleri.jpg" alt="" />
                    </div>
                </div>

                <div className="moammo mb-[60px]">

                    <div className="imgs">
                        <span>
                            <img src="https://cdn.uza.uz/2024/03/19/16/08/OMMtPVVCos1RVTrdog0eLaejbvUU6UIu_front.jpg" alt="" />
                            <img src="https://storage.kun.uz/source/9/UFM8DmyoSIG0SGOJDGkJs2Jf8ztiHdKI.jpg" alt="" />
                        </span>
                        <img className="enImg" src="https://m.media-amazon.com/images/I/81+nZ2iw8TL._AC_SL1500_.jpg" alt="" />
                    </div>

                    <div className="text">
                        <h1 className="dark:text-white text-black">Yechim:</h1>
                        <ul>
                            <li className="dark:text-white text-black">Barqaror qishloq xo'jaligi usullarini qo'llash va agrotexnika choralarini ko'rish.</li>
                            <li className="dark:text-white text-black">O'rmonlarni qayta tiklash va himoya qilish bo'yicha dasturlarni amalga oshirish.</li>
                            <li className="dark:text-white text-black">Yashil zonalarni kengaytirish va shahar landshaftlarini ekologik jihatdan rivojlantirish.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}