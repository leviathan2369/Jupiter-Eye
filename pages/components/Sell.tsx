import React, { useRef, useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import Button from './Button';

const Result = () => {
  return <p>Your message has been successfully sent. We will contact you soon.</p>;
};

function BoxContactUs() {
  const [result, showResult] = useState(false);
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
		  emailjs
			.sendForm('service_2lxpak4', 'template_9cujjpg', form.current, 'PlrtTkDhu9dWgQui9')
			.then(
			  (result: any) => {
				console.log(result.text);
				showResult(true);
			  },
			  (error: any) => {
				console.log(error.text);
			  }
			);

		  form.current.reset();
		}
	  };

  const [name, setName] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [showPhone, setShowPhone] = useState(false);
  const [phone, setPhone] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [showButton, setShowButton] = useState(false);

  const handleNameChange = (event:any) => {
    setName(event.target.value);
    setShowEmail(true);
  };

  const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
    setShowPhone(true);
  };

  const handlePhoneChange = (event:any) => {
    setPhone(event.target.value);
    setShowMessage(true);
  };

  const handleMessageChange = (event:any) => {
    setMessage(event.target.value);
    if (event.target.value.length > 0) {
      setShowButton(true);
    }
  };

  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
	<div className="box-contact-us  -mt-60 sticky ml-[720px] inline-flex sm:h-[450px] sm:mt-12 sm:ml-[38px] md:w-[350px] 2xl:ml-[360px] md:h-[420px]  md:ml-[220px] xl:ml-[360px] lg:ml-[120px]  flex-col items-center justify-center px-8 py-4 bg-orange rounded-md text-white font-medium text-center animate-float ">

      <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1  bg-violet-300 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>

      <div className="relative z-10 space-x-3 space-y-3 md:space-y-1 sm:space-y-0 ">
        <h2 className=" text-lg md:text-sm sm:text-sm">We will be happy to contact you</h2>
        <h2 className=" md:text-sm sm:text-sm">

If you have a desire to sell your art, invest in our project, or simply have an ambition to change the world, let&apos;s collaborate to accomplish this project together.
        </h2>
        <button className="headerLink h-8 w-12">
          <AiOutlineArrowDown className="headerIcon text-white " />
        </button>
        <form className="flex flex-col space-y-4 mt-4" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            id="name"
					  name="fullName"
					  className='text-violet-700  sm:w-24 sm:text-sm '
            placeholder="QUEL EST VOTRE NOM/NOM DE LA SOCIETE"
            value={name}
            onChange={handleNameChange}
            required
          />
          {showEmail && (
            <input
              type="email"
              id="email"
						  name="email "
						  className='text-violet-700 sm:w-38 sm:text-sm  '
              placeholder="VOTRE ADRESSE EMAIL ?"
              value={email}
              onChange={handleEmailChange}
              required
            />
          )}
          {showPhone && (
            <input
              type="tel"
						  id="phone "
						  className='text-violet-700 sm:w-24 sm:text-sm '
              name="phone"
              placeholder="QUEL EST VOTRE N° DE TELEPHONE ?"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          )}
          {showMessage && (
            <textarea
						  name="message"
						  className='text-violet-700 sm:w-36 sm:h-10 sm:text-sm '
              id="message"
              placeholder="LAISSEZ-NOUS VOTRE MESSAGE  !"
              value={message}
              onChange={handleMessageChange}
              required
            />
          )}
          {showButton && <Button width='10px' title="C'est partie !" />}
          <div className="row">{result ? <Result /> : null}</div>
        </form>
      </div>
    </div></section>
  );
}

export default BoxContactUs;