import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <Image
          className="dark:invert w-96"
          src="/img/logo-eleva-care.svg"
          alt="Eleva Care"
          width={740}
          height={195}
          priority
        />
        <h1 className="text-2xl font-bold text-[#40514e] text-center sm:text-3xl">
          Physical Therapy for Your Pelvic Floor & Whole Body
        </h1>
        <ul className="list-inside text-[#11999e] text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Expert care for pregnancy, postpartum, menopause, and sexual health.
          </li>
          <li>
            Not sure if pelvic floor PT is right for you? We have a quiz for
            that.
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row ">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#1999e] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://patimota.typeform.com/to/XNQHJbgT?utm_source=eleva-care&utm_medium=website&utm_campaign=ongoing&utm_term=physical%2Btherapy&utm_content=temp_home_btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/img/clipboard-icon.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Take the Quiz
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://cal.com/patimota/consulta-de-fisioterapia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/patimota/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/img/linkedin-icon.svg"
            alt="LinkedIn logomark"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/patricia_mota_pt_phd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/img/instagram-icon.svg"
            alt="Instagram logomark"
            width={16}
            height={16}
          />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://scholar.google.pt/citations?user=fNJsrScAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/img/book-bookmarked.svg"
            alt="Google Scholar logomark"
            width={16}
            height={16}
          />
          Google Schoolar
        </a>
      </footer>
    </div>
  );
}
