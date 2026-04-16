import { EventData } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const EventCard = ({ title, image, slug, location, date, time }: EventData): React.ReactNode => {
    return (
        <Link id="event-card" href={`/events/${title}`}>
            <Image src={image} alt={title} height={480} width={320} className="poster" />

            <div className="flex gap-1">
                <Image src="/icons/pin.svg" alt="location" height={12} width={12} />
                <p>{location}</p>
            </div>

            <p className="title">{title}</p>

            <div className="datetime">
                <div>
                    <Image src="/icons/calendar.svg" alt="location" height={12} width={12} />
                    <p>{date}</p>
                </div>
                <div>
                    <Image src="/icons/clock.svg" alt="location" height={12} width={12} />
                    <p>{time}</p>
                </div>
            </div>

        </Link>
    );
}


export default EventCard;