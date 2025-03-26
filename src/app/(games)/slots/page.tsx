"use client"

import Image from "next/image"
import "./styles.css"
import slot1 from "/src/images/slots/1.png"
import slot2 from "/src/images/slots/2.png"
import slot3 from "/src/images/slots/3.png"
import slot4 from "/src/images/slots/4.png"
import slot5 from "/src/images/slots/5.png"
import slot6 from "/src/images/slots/6.png"
import slot7 from "/src/images/slots/7.png"
import slot8 from "/src/images/slots/8.png"
import slot9 from "/src/images/slots/9.png"
import header from "/src/images/slots/header.png"
import frame from "/src/images/slots/frame.png"

import { useSlots } from "@/app/store/slots"
import { useIOStore } from "@/app/store/store";
import { useRef } from "react"

export default function Slots() {
    const slots1 = useRef<HTMLDivElement | null>(null);
    const slots2 = useRef<HTMLDivElement | null>(null);
    const slots3 = useRef<HTMLDivElement | null>(null);
    const announcement = useRef<HTMLDivElement | null>(null);


    const { SlotSpin } = useSlots()
    const userInput = useIOStore((state) => state.userInput);
    const setBetNumber = useIOStore((state) => state.setBetNumber)
    const setWager = useIOStore((state) => state.setWager)

    return (
        // Game animation and display section
        <div id="gameContainer" className="flex flex-col lg:flex-row lg:w-[1500px] lg:mt-[50px] mx-auto p-3 gap-3">
            <div id="theGame" className="rounded-lg flex-1 max-md:w-[100%] bg-cover border-[1px] border-gray-700 w-full ">
                <div id="slots" className=" flex items-start justify-center sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] w-[300px] h-[300px] mx-auto">
                    <div className=" relative">
                        <div id="slots" className="absolute top-[38%] left-[12%] md:h-[140px] md:w-[380px] bg-transparent grid grid-cols-3 divide-x-0">
                            <div ref={slots1} id="box1" className="overflow-hidden md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot1" className="w-full h-full" src={slot1} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot2" className="w-full h-full" src={slot2} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot3" className="w-full h-full" src={slot3} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot4" className="w-full h-full" src={slot4} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot5" className="w-full h-full" src={slot5} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot6" className="w-full h-full" src={slot6} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot7" className="w-full h-full" src={slot7} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot8" className="w-full h-full" src={slot8} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot9" className="w-full h-full" src={slot9} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot1" className="w-full h-full" src={slot1} />
                                </div>
                            </div>
                            <div ref={slots2} id="box2" className="overflow-hidden md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot1" className="w-full h-full" src={slot1} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot2" className="w-full h-full" src={slot2} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot3" className="w-full h-full" src={slot3} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot4" className="w-full h-full" src={slot4} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot5" className="w-full h-full" src={slot5} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot6" className="w-full h-full" src={slot6} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot7" className="w-full h-full" src={slot7} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot8" className="w-full h-full" src={slot8} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot9" className="w-full h-full" src={slot9} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot1" className="w-full h-full" src={slot1} />
                                </div>
                            </div>
                            <div id="box3" ref={slots3} className="overflow-hidden md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot1" className="w-full h-full" src={slot1} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot2" className="w-full h-full" src={slot2} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot3" className="w-full h-full" src={slot3} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot4" className="w-full h-full" src={slot4} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot5" className="w-full h-full" src={slot5} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot6" className="w-full h-full" src={slot6} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot7" className="w-full h-full" src={slot7} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot8" className="w-full h-full" src={slot8} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot9" className="w-full h-full" src={slot9} />
                                </div>
                                <div className=" md:h-[140px] md:w-[126px] sm:w-[101px] sm:h-[112px] w-[75px] h-[84px]">
                                    <Image alt="slot1" className="w-full h-full" src={slot1} />
                                </div>
                            </div>
                        </div>
                        <Image alt="frame" src={frame} />

                    </div>
                </div>
                <h3 ref={announcement} className=" text-center text-white font-semibold bg-[#5c506b] rounded-lg m-3 p-1" id="announcement"> TRY YOUR LUCK</h3>
            </div>

            {/* User input section */}
            <div id="userInput" className="flex flex-col justify-around  rounded-lg flex-none lg:w-[360px]  border-[1px] border-gray-700 p-5">
            <div className="">
              {" "}
              <Image
                alt="banner"
                src={header}
              />
            </div>
                <div id="wager ">
                    <h3 id="wager" className=" text-white font-bold">Bet Amount </h3>
                    <input type="number" min={1} className=" bg-[#171120] block wd-auto border-solid border-2 rounded-lg w-full border-[#6600ff] text-white p-2 focus:outline-none  focus:border-[#6600ff]" onChange={(e) => setWager(Number(e.target.value))}
                    />
                </div>
                <div id="betNumber">
                    <h3 id="betNumber" className=" text-white font-bold">Multiple Bets:<span>{userInput.betNumber}</span></h3>
                    <input className="w-full accent-[#6600ff]" type="range" id="volume" name="volume" defaultValue='1' min="1" max="100" onChange={(e) => setBetNumber(Number(e.target.value))}
                    />
                </div>

                <div id="flip" className="mb-5">
                    <button className="block rounded-lg p-4 text-white font-bold bg-[#6600ff] w-[100%] mt-5" onClick={() => SlotSpin(slots1.current, slots2.current, slots3.current, announcement.current)} >Spin Your Money Goodbye</button>
                </div>
                <div id="keyway" className="bg-[#1f1a24] p-2 rounded-lg h-[130px] overflow-scroll" >
                    <div className="flex justify-between">
                        <div className="flex">
                            <Image className="w-[60px] h-[60px]" alt="slot9" src={slot9}/>
                            <Image className="w-[60px] h-[60px]" alt="slot9" src={slot9}/>
                            <Image className="w-[60px] h-[60px]" alt="slot9" src={slot9}/>
                        </div>
                        <h2 className="text-[#B9FF69] font-semibold  content-center mr-2">100x</h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <Image className="w-[60px] h-[60px]" alt="slot1" src={slot1}/>
                            <Image className="w-[60px] h-[60px]" alt="slot1" src={slot1}/>
                            <Image className="w-[60px] h-[60px]" alt="slot6" src={slot6}/>
                        </div>
                        <h2 className="text-[#B9FF69] font-semibold  content-center mr-2">45x</h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <Image className="w-[60px] h-[60px]" alt="slot3" src={slot3}/>
                            <Image className="w-[60px] h-[60px]" alt="slot3" src={slot3}/>
                            <Image className="w-[60px] h-[60px]" alt="slot7" src={slot7}/>
                        </div>
                        <h2 className="text-[#B9FF69] font-semibold  content-center mr-2">20x</h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <Image className="w-[60px] h-[60px]" alt="slot4" src={slot4}/>
                            <Image className="w-[60px] h-[60px]" alt="slot3" src={slot3}/>
                            <Image className="w-[60px] h-[60px]" alt="slot8" src={slot8}/>
                        </div>
                        <h2 className="text-[#B9FF69] font-semibold  content-center mr-2">10x</h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <Image className="w-[60px] h-[60px]" alt="slot5" src={slot5}/>
                            <Image className="w-[60px] h-[60px]" alt="slot6" src={slot6}/>
                            <Image className="w-[60px] h-[60px]" alt="slot4" src={slot4}/>
                        </div>
                        <h2 className="text-[#B9FF69] font-semibold  content-center mr-2">2x</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}