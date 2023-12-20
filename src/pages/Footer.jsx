const Footer = () => {
  return (
    <footer className='footer'>
      {/* <hr className='border-slate-200' /> */}

      {/* <div className='footer-container'> */}
      <p className="text-center text-darkTeal-500 text-sm sm:text-base font-medium tracking-wide mt-6">
              Developed with{" "}
              <button className="link heart-btn">
                <span role="img" aria-label="heart" className="animate-pulse">
                  ❤️
                </span>
              </button>{" "}
              by <span className="text-darkTeal-500 text-bold">Roshini Swetha</span>
        </p>

      {/* </div> */}
    </footer>
  );
};

export default Footer;
