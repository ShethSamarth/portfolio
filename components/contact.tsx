"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

interface ContactProps {
  pageInfo: PageInfo
}

const Contact = ({ pageInfo }: ContactProps) => {
  const mail = `mailto:${pageInfo.email}`
  const call = `tel:${pageInfo.phoneNumber}`
  const addressUrl = `${pageInfo.addressUrl}`

  const { register, handleSubmit, reset } = useForm<ContactInputs>()

  const onSubmit: SubmitHandler<ContactInputs> = (formData) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    reset()
  }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 md:top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <div className="py-3 pt-5">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <a
              href={call}
              className="text-xl text-gray-500 hover:text-white/70"
            >
              +91 {pageInfo.phoneNumber}
            </a>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <a
              href={mail}
              target="_blank"
              className="text-xl text-gray-500 hover:text-white/70"
              rel="noreferrer"
            >
              {pageInfo.email}
            </a>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <a
              href={addressUrl}
              target="_blank"
              className="text-xl text-gray-500 hover:text-white/70"
              rel="noreferrer"
            >
              {pageInfo.address}
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 sm:w-[500px] mx-auto"
        >
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />

          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
