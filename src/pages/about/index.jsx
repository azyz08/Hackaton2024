import "./style.scss"
import React from 'react';
import { Carousel } from 'antd';

export default function About() {
    return (
        <>
            <div className="about">
                <div className="text">
                    <h1>Bizning izlanishlarimiz</h1>
                    <p>Biz jamoamiz bilan tabiat ifloslanishini eng global muammo deb bildik. Shu sababli, ekologik muammolarga qarshi kurashishni asosiy vazifamiz qilib oldik.</p>
                    <p>Bizning maqsadimiz — atrof-muhitni himoya qilish, toza havo va suvni saqlab qolish, hamda kelajak avlodlar uchun yashashga yaroqli bir sayyorani qoldirishdir.</p>
                    <p>Bu yo'lda biz ko'plab loyihalarni amalga oshirishni rejalashtiryapmiz, jumladan, chiqindilarni qayta ishlash, daraxt ekish va aholini ekologik savodxonlikka o'rgatish bo'yicha tadbirlar o‘tkazishni boshladik.</p>
                </div>
                <Carousel autoplay className="carousel">
                    <div className="w-full h-full">
                        <img className="w-full h-full" src="https://storage.kun.uz/source/6/VjfIO50ZOSfUd4NstANg5BGWvvbYJ_yK.jpg" alt="" />
                    </div>
                    <div className="w-full h-full">
                        <img className="w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Litter.JPG" alt="" />
                    </div>
                    <div className="w-full h-full">
                        <img className="w-full h-full" src="https://cdn.beta.qalampir.uz/uploads/g1/f_y6xPlrNZDdSZIUnvf45BgtS9WnUk61.jpg" alt="" />
                    </div>
                    <div className="w-full h-full">
                        <img className="w-full h-full" src="https://www.gozetim.com/images/cevresel-sorunlar.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
            <br /><br />
            <div className="aboutH1">
                <h1 className="text-black dark:text-white aboutText">O'zbekiston Respublikasi Ekologiya Atrof-Muhitni Muhofoza qilish va iqlim o'zgarishi vazirligi</h1>
            </div>
            <div className="aboutCard">
                <div class="card-client">
                    <div class="user-picture">
                        <img src="./jamshid.jpg" alt="" />
                    </div>
                    <p class="name-client"> Abduxakimov Aziz Abdukaxarovich
                        <span>info@eco.gov.uz</span>
                    </p>
                    <div class="social-media flex items-center">
                        <a href="#">
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <span class="tooltip-social">Twitter</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <span class="tooltip-social">Instagram</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                            <span class="tooltip-social">Facebook</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-solid fa-paper-plane"></i></a>
                            <span class="tooltip-social">Telegram</span>
                        </a>
                    </div>
                </div>
                <div class="card-client">
                    <div class="user-picture">
                        <img src="./azizbek.jpg" alt="" />
                    </div>
                    <p class="name-client">Qudratov Obidjon Nematovich
                        <span>info@eco.gov.uz</span>
                    </p>
                    <div class="social-media flex items-center">
                        <a href="#">
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <span class="tooltip-social">Twitter</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <span class="tooltip-social">Instagram</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                            <span class="tooltip-social">Facebook</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-solid fa-paper-plane"></i></a>
                            <span class="tooltip-social">Telegram</span>
                        </a>
                    </div>
                </div>
                <div class="card-client">
                    <div class="user-picture">
                        <img src="./Abduxabir.jpg" alt="" />
                    </div>
                    <p class="name-client">Kazbekov Jusipbek Sdikbekovich
                        <span>info@eco.gov.uz</span>
                    </p>
                    <div class="social-media flex items-center">
                        <a href="#">
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <span class="tooltip-social">Twitter</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <span class="tooltip-social">Instagram</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                            <span class="tooltip-social">Facebook</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-solid fa-paper-plane"></i></a>
                            <span class="tooltip-social">Telegram</span>
                        </a>
                    </div>
                </div>
                <div class="card-client">
                    <div class="user-picture">
                        <img src="./shoxzamon.jpg" alt="" />
                    </div>
                    <p class="name-client">Qutbiddinov Iskandar Alisher o‘g‘li
                        <span>info@eco.gov.uz</span>
                    </p>
                    <div class="social-media flex items-center">
                        <a href="#">
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <span class="tooltip-social">Twitter</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <span class="tooltip-social">Instagram</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                            <span class="tooltip-social">Facebook</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-solid fa-paper-plane"></i></a>
                            <span class="tooltip-social">Telegram</span>
                        </a>
                    </div>
                </div>
                <div class="card-client">
                    <div class="user-picture">
                        <img src="./farhot.jpg" alt="" />
                    </div>
                    <p class="name-client">Kusherbayev Rasul Xidraliyevich
                        <span>info@eco.gov.uz</span>
                    </p>
                    <div class="social-media flex items-center">
                        <a href="#">
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <span class="tooltip-social">Twitter</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <span class="tooltip-social">Instagram</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                            <span class="tooltip-social">Facebook</span>
                        </a>
                        <a href="#">
                            <a href=""><i class="fa-solid fa-paper-plane"></i></a>
                            <span class="tooltip-social">Telegram</span>
                        </a>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}