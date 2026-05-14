export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About", "Contact"],
    Legal: ["Privacy", "Terms"]
  };

  return (
    <div className="flex flex-col p-10 justify-between w-screen min-h-80 bg-linear-to-b from-transparent from-30% to-light-blue border-t-2"> {/* Remove top border later */}
      <div>{/* Row 1 */}
        Ezhuvelil Gardens
      </div>
      <div className="flex flex-row justify-between items-center mx-[10%]"> {/* Connect */}
        <div className="flex flex-col gap-5">
          <p>
            Gallery
          </p>
          <p>
            Instagram
          </p>
          <p>
            Facebook
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p>
            Gallery
          </p>
          <p>
            Instagram
          </p>
          <p>
            Facebook
          </p>
        </div>
        <div className="w-auto h-auto border-2 border-black">{/* Map */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.413424590933!2d76.69469967515094!3d9.559584080457766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0633d734cb6f89%3A0xba86cbd51adc2f1f!2sEZHUVELIL%20GARDENS!5e0!3m2!1sen!2sin!4v1778774245630!5m2!1sen!2sin" width="250" height="250" loading="lazy"></iframe>
        </div>
      </div>
      <div className="flex justify-center items-center text-sm font-bold mt-8">
        Ezhuvelil Gardens &copy; 2026
      </div>
    </div>
  )
}
