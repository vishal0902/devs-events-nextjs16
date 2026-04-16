import EventCard from "@/components/Event-Card"
import Event from "@/components/Event-Card"
import ExploreBtn from "@/components/ExploreBtn"
import { events } from "@/lib/constants"

const page = () => {




  return (
    <section>
      <h1 className="text-center leading-15">The Hub For Every Dev <br /> Event You Can&apos;t Afford To Miss.    </h1>
      <p className="text-center mt-5">Hackathons, Meetups, Conferences and more, all in one place.</p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <ol className="events">
          {events.map(event => (
            <li key={event.slug}>
              <EventCard {...event} />

            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}

export default page