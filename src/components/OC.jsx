const Contact = () => (
  <div className="mt-20 w-3/4 min-w-[320px] mx-auto">
    <span className="section-title" id="contact">
      Contact US
    </span>
    <div className="flex flex-wrap justify-evenly gap-5 gap-x-10">
      <button
        className="contact"
        onClick={() => window.open("https://wa.me/94707284384")}
      >
        Nethula Peiris
      </button>
      <button
        className="contact"
        onClick={() => window.open("https://wa.me/94757688424")}
      >
        Parinda Pathirana
      </button>
    </div>
  </div>
);

export default Contact;
