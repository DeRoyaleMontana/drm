import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Rooms",
    href: "#",
  },
  {
    title: "Restaurants",
    href: "#",
  },
  {
    title: "Blogs",
    href: "#",
  },
  {
    title: "Wedding Space",
    href: "#",
  },
  {
    title: "Events",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

const rooms = [
  {
    title: "Cottages",
    href: "#",
  },
  {
    title: "Royale Suite",
    href: "#",
  },
  {
    title: "Mountain View Suite",
    href: "#",
  },
  {
    title: "Deluxe Suite",
    href: "#",
  },
  {
    title: "Standard Suite",
    href: "#",
  },
];

const contact = [
  {
    title: "montanareservations@deroyale.in",
    href: "#",
  },
  {
    title: "+91 8257277365 / 6364462511",
    href: "#",
  },
  {
    title: "Yennekal Village, Kukke Subramanya, Kadaba Taluk, Karnataka – 574238",
    href: "#",
  }
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-0 bg-primary text-ivory text-xxs mmd:text-xs font-body font-semibold divide-y divide-accent">

      <div className="flex flex-col gap-9 md:flex-row md:divide-x md:divide-accent">
        {/* Footer Menu */}
        <div className="w-full flex gap-9 mlg:flex-row  md:w-1/2  justify-between  fpx fpt">
          {/* Pages */}
          <div className="flex flex-col gap-y-6 ">
            <div className="border-l-3 border-accent pl-3  text-accent uppercase">Quick Links</div>
            <nav className="flex flex-col gap-y-4  uppercase">
              {quickLinks.map((link) => (
                <Link key={link.title} href={link.href} className="hover:text-accent transition-colors">
                  {link.title}
                </Link>
              ))}

            </nav>
          </div>
          {/* End of Pages */}

          {/* Rooms */}
          <div className="flex flex-col gap-y-6">
            <div className="border-l-3 border-accent pl-3 text-accent uppercase ">Rooms</div>
            <nav className="flex flex-col gap-y-4 uppercase">
              {rooms.map((room) => (
                <Link key={room.title} href={room.href} className="hover:text-accent transition-colors">
                  {room.title}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex flex-col gap-y-8">
              <div className="border-l-4 border-accent pl-4 text-accent uppercase">montanareservations@deroyale.in</div>
              <div className="border-l-4 border-accent pl-4 text-accent uppercase">+91 8257277365 / 6364462511</div>
            </div>

          </div>
          {/* End of Rooms */}
        </div>
        {/* End of Footer Menu */}

        {/* Newsletter and Logo */}
        <div className="flex flex-col-reverse items-center sm:items-start w-full  md:w-1/2 gap-y-9 fpx fpb">
          {/* <Image src="/images/footer-logo.png" alt="logo" width={250} height={115} className="w-[250px] h-[115px]" /> */}

          {/* Newsletter */}
          <div className="w-full flex flex-col gap-y-4">
            <div className="text-center uppercase text-accent">Sign Up For Alerts, News & insights</div>
            <input type="text" placeholder="Email" className="w-full pl-4 pb-2 bg-transparent border-b-[1.5px] border-ivory text-ivory  placeholder:text-ivory/50 placeholder:uppercase" />
            <button className="bg-secondary text-accent  px-6 py-3  uppercase ">Subscribe Now</button>
          </div>
          {/* End of Newsletter */}

          {/* Mobile Address */}
          <div className="flex flex-col gap-y-4 ">
            {contact.map((item, index) => (
              <div className="flex items-center gap-x-4">
                <div className="w-6 h-6 shrink-0 bg-ivory rounded-full"></div>
                <div className={`uppercase  ${index === 2 ? "text-ivory" : "text-accent"}`}>{item.title}</div>
              </div>
            ))}
          </div>
          {/* End of Mobile Address */}

          {/* Desktop Address */}
          <div className="hidden md:flex flex-col gap-y-4 ">
            <div className="border-l-4 border-ivory pl-4 text-ivory uppercase">Address</div>
            <div className="text-ivory  uppercase pl-4">Yennekal Village, Kukke Subramanya,<br></br> Kadaba Taluk, Karnataka – 574238</div>
          </div>
          {/* End of Desktop Address */}



        </div>
        {/* End of Newsletter and Logo */}
      </div>

      {/* Copyright and Social Media */}
      <div className="flex justify-center fp gap-6 items-stretch">
        <div className="w-px bg-ivory"></div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <div className="w-8 h-8 bg-ivory rounded-full"></div>
            <div className="w-8 h-8 bg-ivory rounded-full"></div>
            <div className="w-8 h-8 bg-ivory rounded-full"></div>
          </div>
          <div className="font-light text-xxs">© Copyright De Royale Montana.</div>
        </div>
        <div className="w-px bg-ivory"></div>

      </div>
      {/* End of Copyright and Social Media */}

    </footer>
  );
}
