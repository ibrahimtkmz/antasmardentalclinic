import './globals.css';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './components/LanguageProvider';
import Script from 'next/script';
import MaintenanceNotice from './components/MaintenanceNotice';

export const metadata = {
  title: 'Anastamar Dental Clinic',
  description:
    'Anastamar Dental Clinic Istanbul - Premium smile design, implants, veneers and modern cosmetic dentistry solutions.',
};

const MAINTENANCE_MODE = false;

export default function RootLayout({ children }) {
  const pageContent = MAINTENANCE_MODE ? <MaintenanceNotice /> : children;

  return (
    <html lang="en">
      <body>
        <div id="google_translate_element" className="hidden" />
        <LanguageProvider>{pageContent}{!MAINTENANCE_MODE && <WhatsAppButton />}</LanguageProvider>
        <Script id="google-translate-init" strategy="afterInteractive">
          {`window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({
              pageLanguage: 'tr',
              autoDisplay: false,
              includedLanguages: 'tr,en,ru,uk'
            }, 'google_translate_element');
          };`}
        </Script>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
      </body>
    </html>
  );
}
