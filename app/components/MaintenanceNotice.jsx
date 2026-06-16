export default function MaintenanceNotice() {
  return (
    <main className="maintenance-page">
      <section className="maintenance-card" aria-labelledby="maintenance-title">
        <div className="maintenance-logo-wrap">
          <img
            src="/Anastamar.Dental.Clinic.png"
            alt="Anastamar Dental Clinic"
            className="maintenance-logo"
          />
        </div>
        <p className="maintenance-kicker">Anastamar Dental Clinic</p>
        <h1 id="maintenance-title">Şu anda hizmet verilemiyor</h1>
        <p className="maintenance-text">
          Web sitemizde geçici bir bakım çalışması yapılmaktadır. Kısa süre sonra tekrar hizmetinizde olacağız.
        </p>
        <p className="maintenance-note">Anlayışınız için teşekkür ederiz.</p>
      </section>
    </main>
  );
}
