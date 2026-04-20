import './globals.css';

export const metadata = {
  title: 'Anastamar Dental Clinic',
  description:
    'Anastamar Dental Clinic Istanbul - Premium smile design, implants, veneers and modern cosmetic dentistry solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
