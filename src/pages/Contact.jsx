import { useState, useEffect } from 'react';
import { Loader } from '../components';
import Robot from '../models/robot';

const Contact = () => {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 8000);
  // }, []);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setStatusError('');

    if (sending) return;

    try {
      setSending(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/message`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email.value,
          message: form.message.value,
        }),
      });

      const responseMessage = await response.json();

      if (statusError) throw new Error(statusError);

      setComplete(true);
      setSending(false);
    } catch (error) {
      setSending(false);
      setStatusError(error.message);
    }
  };

  return (
    <section className='text-darkTeal-500 relative flex lg:flex-row flex-col max-container lg:items-center h-full'>
    {/* {isLoading ? (
          <Loader />
        ) : (
          <> */}

      <div className='seq lg:mb-56'>
        <h1 className='lg:text-6xl md:text-4xl xs:text-3xl mt-2 seq mb-10'>Get in Touch</h1>

        <h2 className="lg:text-2xl md:text-xl xs:text-lg font-medium md:max-w-lg w-full mt-2 seq text-justify">If you want to work together on a project or just have a chat, please don't hesitate to contact me via email below.</h2>

        <button
            type='submit'
            className='uppercase btn tracking-widest text-gray-light-1 seq mt-20'
          >
            <a href="mailto:contact@swetharavindran24@gmail.com" target="_blank" rel="noopener noreferrer">
            Send a Message
            </a>
          </button>
        {/* <form
          className='flex flex-col w-full gap-7'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input tracking-widest seq'
              placeholder='Enter Your Name'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input tracking-widest text-gray-light-1 seq'
              placeholder='name@email.com'
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea tracking-widest text-gray-light-1 seq'
              placeholder='Enter Your Message...'
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            type='submit'
            className='btn tracking-widest text-gray-light-1 seq'
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form> */}
      </div>

      <div className='lg:w-1/2 w-full lg:h-[650px] md:h-[500px] h-[350px]'>
            <Robot scale={2.5} position-y={0} rotation-y={0}/>
      </div>
      {/* </>)} */}
    </section>
  );
};

export default Contact;
