'use client' // this is a client component 👈🏽

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const guestName = searchParams.get('for') ?? 'Tamu Undangan'
  const [guestGreeting, setGuestGreeting] = useState('Selamat')
  const audio = new Audio('./sound/golden-hour.mp3')
  const playAudio = () => {
    audio.volume = 0.4
    audio.play()
  }

  const [isInvitationOpen, setInvitationOpen] = useState(false)
  const toggleInvitation = () => setInvitationOpen(!isInvitationOpen)

  const [isStoryOpen, setStoryOpen] = useState(false)
  const toggleStory = () => setStoryOpen(!isStoryOpen)

  const [partyTime, setPartyTime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const dateNow = new Date()
    const dateNowHour = dateNow.getHours()

    if (dateNowHour <= 3) {
      setGuestGreeting('Selamat Malam')
    } else if (dateNowHour <= 9) {
      setGuestGreeting('Selamat Pagi')
    } else if (dateNowHour <= 15) {
      setGuestGreeting('Selamat Siang')
    } else if (dateNowHour <= 18) {
      setGuestGreeting('Selamat Sore')
    } else if (dateNowHour <= 24) {
      setGuestGreeting('Selamat Malam')
    }

    const target = new Date('05/11/2023 23:59:59')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      {!isInvitationOpen && (
        <div className="fixed max-w-[380px] w-full min-h-screen flex flex-col items-center justify-center bg-secondary-light/70 backdrop-blur-2xl z-10">
          <span className="text-[#485058]">
            Assalamu’alaikum Warohmatullahi Wabarokatuh
          </span>
          <span className="text-[#485058] mt-5">
            {guestGreeting}, {guestName}
          </span>
          <p className="text-[#485058] text-center mt-7">
            Pada kesempatan kali ini
            <br />
            kami mengharap kehadiran {guestName}
            <br />
            dalam acara pernikahan kami
          </p>

          <button
            type="button"
            className="w-[152px] p-2 bg-primary border-2 border-primary text-secondary-light flex items-center justify-center rounded-md mt-11"
            onClick={() => {
              toggleInvitation()
              playAudio()
            }}
          >
            Buka Undangan
          </button>

          <button
            type="button"
            className="w-[152px] p-2 bg-secondary-light border-2 border-primary text-primary flex items-center justify-center rounded-md mt-3"
            onClick={toggleInvitation}
          >
            Buka Tanpa Musik
          </button>
        </div>
      )}

      <div className="max-w-[380px] w-full bg-secondary-light">
        <div className="min-h-[600px] bg-[url('/img/illustration-bg.png')] bg-[center_bottom_1rem] bg-[length:516px_728px] bg-no-repeat py-8">
          <div className="w-full h-full flex flex-col items-center justify-start">
            <span className="text-secondary-light text-xs">The wedding of</span>
            <div className="text-secondary-light flex flex-row items-center justify-center gap-2">
              <h5 className="font-cream-candy text-[56px] leading-none">
                Retno
              </h5>
              <span className="font-cookie text-sm mt-2">&</span>
              <h5 className="font-cream-candy text-[56px] leading-none">
                Rizqi
              </h5>
            </div>
            <span className="text-secondary-light text-sm">
              Jumat, 12 Mei 2023
            </span>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/img/illustration-person.png"
                alt="Retno Rizqi Illustration"
                width={258}
                height={366}
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-start">
          <h5 className="text-primary text-2xl py-4">Cerita Kami</h5>
          <div className="w-4/5 flex flex-col gap-4 pl-4">
            <div className="text-secondary-dark flex flex-row items-stretch justify-start gap-3">
              <div className="w-[24px] self-center">
                <span className="text-sm">2018</span>
              </div>
              <div className="w-0.5 bg-secondary-dark rounded-lg"></div>
              <p className="text-[10px]">
                Awal mengenal sejak masuk smk di jurusan yg sama
                <br />
                dan masuk di organisasi yg sama selama 3 tahun sekolah
                <br />
                merasa biasa saja seperti teman pada umumnya.
                <br />
                <br />
                Namun di penghujung masa tersebut
                <br />
                terdapat momen yg tak pernah disangka
                <br />
                momen yang menjadi awal kedekatan kami
                <br />
                membuat kami merasa saling tertarik
                <br />
                dan menjadi nyaman satu sama lain.
                <br />
                <br />
                didukung dengan sering adanya kebersamaan
                <br />
                sebab memiliki satu circle yg sama
                <br />
                membuat kami semakin dekat lebih dari teman biasa.
              </p>
            </div>
          </div>
          {!isStoryOpen && (
            <div className="flex flex-col gap-4 text-center mt-4">
              <button
                type="button"
                className="w-[120px] p-2 bg-transparent border-2 border-secondary-dark text-secondary-dark text-xs flex items-center justify-center rounded-md"
                onClick={toggleStory}
              >
                Baca Lebih Lanjut
              </button>
            </div>
          )}
          {isStoryOpen && (
            <div className="w-4/5 flex flex-col gap-4 pl-4 mt-4">
              <div className="text-secondary-dark flex flex-row items-stretch justify-start gap-3">
                <div className="w-[24px] self-center">
                  <span className="text-sm">20XX</span>
                </div>
                <div className="w-0.5 bg-secondary-dark rounded-lg"></div>
                <p className="text-[10px]">
                  Namun berakhirnya masa sekolah, keadaan meminta kami
                  <br />
                  untuk meninggalkan kampung halaman masing2
                  <br />
                  kami terpisah jarak yang tak dapat saling bertemu.
                  <br />
                  <br />
                  Bertukar kabar dan rindu melalui telepon seluler
                  <br />
                  bertengkar dan berkompromi dengan karakter pribadi
                  <br />
                  kami tetap berkomitmen pada orang yg sama
                  <br />
                  dan seiring waktu berdetik, semula hari telah berganti tahun.
                </p>
              </div>
              <div className="text-primary flex flex-row items-stretch justify-start gap-3">
                <div className="w-[24px] self-center">
                  <span className="text-sm">2022</span>
                </div>
                <div className="w-0.5 bg-primary rounded-lg"></div>
                <p className="text-[10px]">
                  Hingga telah 4th kami berdua menjalani komitmen ini
                  <br />
                  dimana tak menyangka tetap berjalan beriringan
                  <br />
                  dan beserta lika likunya kami bersama meyakinkan diri.
                  <br />
                  <br />
                  Pada akhirnya kami melaksanakan pertunangan
                  <br />
                  sebagai bukti keseriusan kami untuk hidup bersama.
                </p>
              </div>
              <div className="text-secondary-dark flex flex-row items-stretch justify-start gap-3">
                <div className="w-[24px] self-center">
                  <span className="text-sm">2023</span>
                </div>
                <div className="w-0.5 bg-secondary-dark rounded-lg"></div>
                <p className="text-[10px]">
                  Sampai pada akhir waktu tunggu
                  <br />
                  penantian dan persiapan atas keseriusan kami
                  <br />
                  hanya tinggal menghitung hari
                  <br />
                  <br />
                  kami akan melangsungkan pernikahan
                  <br />
                  di hari Jumat 12 Mei 2023.
                </p>
              </div>
            </div>
          )}
          <div className="w-4/5 flex flex-col items-center justify-center p-4 mt-4">
            <p className="text-primary text-[10px] text-center">
              Menjadi suatu kehormatan dan kebahagiaan bagi kami
              <br />
              apabila <span className="underline">{guestName}</span> berkenan
              hadir untuk memberikan doa dan restu
              <br />
              serta menjadi bagian cerita dalam pernikahan kami.
            </p>
          </div>
        </div>

        <div className="min-h-[600px] bg-[url('/img/illustration-bg-rotated.png')] bg-center bg-[length:852px_644px] bg-no-repeat py-4">
          <div className="w-full h-full flex flex-col items-center justify-start">
            <span className="text-secondary-light text-[10px] mt-8">
              Pernikahan kami Insyaallah akan dilaksanakan pada
            </span>
            <p className="text-secondary-light text-center mt-4 text-sm">
              HARI JUMAT, 12 MEI 2023
              <br />
              WAKTU BEBAS
            </p>
            {partyTime ? (
              <div className="text-secondary-light w-4/5 flex flex-row items-center justify-center gap-3 mt-7 mb-11">
                <div className="w-[76px] h-[52px] flex flex-col items-center justify-center border border-secondary-light rounded-md">
                  <span className="text-xl">0</span>
                  <span className="text-[10px]">Hari</span>
                </div>
                <div className="w-[76px] h-[52px] flex flex-col items-center justify-center border border-secondary-light rounded-md">
                  <span className="text-xl">0</span>
                  <span className="text-[10px]">Jam</span>
                </div>
                <div className="w-[76px] h-[52px] flex flex-col items-center justify-center border border-secondary-light rounded-md">
                  <span className="text-xl">0</span>
                  <span className="text-[10px]">Menit</span>
                </div>
                <div className="w-[76px] h-[52px] flex flex-col items-center justify-center border border-secondary-light rounded-md">
                  <span className="text-xl">0</span>
                  <span className="text-[10px]">Detik</span>
                </div>
              </div>
            ) : (
              <div className="text-secondary-light w-4/5 flex flex-row items-center justify-center gap-3 mt-7 mb-11">
                <div className="w-[76px] h-[52px] flex flex-col items-center justify-center border border-secondary-light rounded-md">
                  <span className="text-xl">{days}</span>
                  <span className="text-[10px]">Hari</span>
                </div>
                <div className="w-[76px] h-[52px] flex flex-col items-center justify-center border border-secondary-light rounded-md">
                  <span className="text-xl">{hours}</span>
                  <span className="text-[10px]">Jam</span>
                </div>
                <div className="w-[76px] h-[52px] flex flex-col items-center justify-center border border-secondary-light rounded-md">
                  <span className="text-xl">{minutes}</span>
                  <span className="text-[10px]">Menit</span>
                </div>
                <div className="w-[76px] h-[52px] flex flex-col items-center justify-center border border-secondary-light rounded-md">
                  <span className="text-xl">{seconds}</span>
                  <span className="text-[10px]">Detik</span>
                </div>
              </div>
            )}

            <span className="text-secondary-light text-center text-[10px]">
              Bertempat di
            </span>
            <p className="text-secondary-light text-center text-sm mt-3">
              Kediaman Mempelai Wanita
              <br />
              Dsn. Pilangbangu RT/RW 07/02 Ds. Gunung Sari
              <br />
              Kec. Beji, Pasuruan
            </p>
            <div className="text-secondary-light flex items-center justify-center mt-7 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d811.3359857874179!2d112.74672015297169!3d-7.610087810452326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzYnMzYuMiJTIDExMsKwNDQnNDguMyJF!5e0!3m2!1sid!2sid!4v1683378454561!5m2!1sid!2sid"
                width="80%"
                height="128px"
                className="border-2 border-secondary-light rounded-md"
                loading="lazy"
              ></iframe>
            </div>
            <a
              href="https://goo.gl/maps/LrRfPRrvSTjFrcCv5"
              target="_blank"
              className="w-[120px] p-2 bg-secondary-light border-2 border-secondary-light text-primary text-xs flex items-center justify-center rounded-md"
            >
              Buka Maps
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <span className="text-secondary-dark text-[10px] text-center">
            Berikut merupakan denah lokasi tempat acara kami
          </span>
          <h5 className="text-primary text-2xl leading-none text-center mt-3">
            Denah Lokasi
          </h5>
          <div className="relative w-full h-full flex items-center justify-center mt-4 mb-5">
            <Image
              src="/img/site-plan.png"
              alt="Site plan"
              width={280}
              height={270}
            />
          </div>
          <a
            href="https://goo.gl/maps/LrRfPRrvSTjFrcCv5"
            target="_blank"
            className="text-primary text-xs underline text-center"
          >
            https://goo.gl/maps/LrRfPRrvSTjFrcCv5
          </a>
          <p className="text-secondary-dark text-center mt-8 mb-5 text-[10px]">
            Sekian undangan yang telah kami sampaikan, semoga Allah SWT
            senantiasa
            <br />
            melimpahkan rahmat, taufik,dan hidayah-Nya kepada kita semua.
          </p>
          <span className="text-secondary-dark text-center text-[10px]">
            Wassalamu’alaikum Warohmatullahi Wabarokatuh
          </span>
        </div>
        <div className="min-h-[72px] bg-[url('/img/illustration-bg.png')] bg-[center_top] bg-[length:516px_728px] bg-no-repeat pt-12 pb-2">
          <div className="w-full h-full flex flex-col items-center justify-start">
            <span className="text-secondary-light text-center text-[10px]">
              made with love by
              <a href="https://www.instagram.com/rizqirakun" target="_blank">
                {' '}
                @rizqirakun
              </a>
              <a href="https://www.instagram.com/ukhtayya__" target="_blank">
                {' '}
                @ukhtayya__
              </a>
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
