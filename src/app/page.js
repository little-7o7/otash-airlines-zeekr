import {
    Kaushan_Script, Varela_Round
} from 'next/font/google'

import Image from 'next/image';
import qr from '../../public/qr.png';

const kuashan = Kaushan_Script({
    weight: ['400'],
    subsets: ['latin'],
})

const valera = Varela_Round({
    weight: ['400'],
    subsets: ['latin'],
})

export default function Home() {
    return (
        <div className={valera.className}>
            <div className='flex justify-center mt-[80px] md:mt-[120px] lg:mt-[160px]'>
                <div className='flex flex-col items-center justify-center w-full max-w-[800px] px-[60px]'>
                    <span className='text-3xl sm:text-4xl md:text-5xl font-900 text-[#daa520] mb-[30px] text-center'>
                        HISOB VARAQA
                    </span>
                    <div className={kuashan.className}>
                        <span className='text-xl sm:text-2xl border-b-[1px] border-[#daa520]'>CI-958304</span>
                    </div>
                    <span className='pt-[2px] text-[8px]'>Hujjat raqami</span>
                    <span className='mt-[20px] text-sm sm:text-base md:text-lg border-b-[1px] border-[#daa520] text-center'>
                        SOXIBNAZAROV OTABEK SAMATILLOYEVICH
                    </span>
                    <span className='pt-[2px] text-[8px]'>Mashina egasi</span>
                    <div className='flex justify-between w-full max-w-[600px] mt-[20px]'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-sm sm:text-base md:text-lg border-b-[1px] border-[#daa520]'>CHEVROLET TAHOE</span>
                            <span className='pt-[2px] text-[8px]'>Model nomi</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-sm sm:text-base md:text-lg border-b-[1px] border-[#daa520]'>QORA</span>
                            <span className='pt-[2px] text-[8px]'>Rangi</span>
                        </div>
                    </div>
                    <div className='flex flex-col leading-none items-center justify-center text-center text-gray-400 text-sm sm:text-base p-[10px] mt-[20px]'>
                        <span>Ro&apos;yxatdan o&apos;tgan tizim <br className='h-[0]' /> my-car.uz</span>
                    </div>
                    <div className='flex justify-between items-start w-full max-w-[700px] mt-[20px]'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-sm sm:text-base md:text-lg border-b-[1px] border-[#daa520]'>09.02.2026</span>
                            <span className='pt-[2px] text-[8px]'>Sana</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='border-b-[1px] border-[#daa520]'>
                                <Image
                                    src={qr}
                                    width={100}
                                    height={100}
                                    alt={''}
                                    className='border-[10px] border-[#ffffff]'
                                />
                            </div>
                            <span className='pt-[2px] text-[8px] text-center leading-none'>HUJJAT QR_CODE BILAN <br /> IMZOLANGAN</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}