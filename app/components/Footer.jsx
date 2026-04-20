export default function Footer() {
  return (
    <footer className="mx-auto mb-8 max-w-6xl px-4 md:px-6">
      <div className="rounded-[28px] bg-[#0b8b80] px-8 py-10 text-white shadow-2xl md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <div className="text-3xl font-black leading-none">ANASTAMAR</div>
            <div className="text-xs tracking-[0.35em] text-white/80">DENTAL CLINIC</div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/80">
              Anastamar Dental Clinic is a leading dental clinic in Istanbul for aesthetic and restorative dental care,
              known for premium service, advanced technology and patient-focused treatment planning.
            </p>
            <div className="mt-6 flex gap-4 text-sm text-white/85">
              <span>IG</span>
              <span>FB</span>
              <span>TIKTOK</span>
              <span>YT</span>
            </div>
          </div>

          <div>
            <div className="text-xl font-bold">Useful Links</div>
            <div className="mt-5 space-y-3 text-white/85">
              <div>Home</div>
              <div>Services</div>
              <div>Papers and Documents</div>
              <div>Why Us</div>
              <div>Contact</div>
              <div>FAQs</div>
            </div>
          </div>

          <div>
            <div className="text-xl font-bold">Support</div>
            <div className="mt-5 space-y-3 text-white/85">
              <div>+90 850 000 00 00</div>
              <div>info@anastamar.com</div>
              <div className="pt-3 text-xl font-bold text-white">Join Us</div>
              <div>Vacancies</div>
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-5 text-center text-sm text-white/70">
          © 2026 Anastamar Dental Clinic. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
