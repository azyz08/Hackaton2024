import "./style.scss"


export default function Home() {
    return (
        <>
            <div className="">
                <div className="bg-[url(../../../public/tabiat.jpg)] px-[160px] py-[250px]">
                    <div>
                        <p className="text-5xl flex items-center text-white">Tabiatga mehr bering, u sizga boylik beradi.</p>
                    </div>

                    <div className="pl-[400px] pt-[30px]">
                        <button className=" border border-green-500 bg-green-500 text-white rounded-[15px] px-[20px] py-[10px] hover:bg-green-900 hover:border-green-900 ease-in duration-300"><a href="http://localhost:5173/murojaat">Murajat uchun</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}