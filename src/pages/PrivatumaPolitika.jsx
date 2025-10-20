// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function PrivatumaPolitika() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 py-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Privātuma politika</h1>
        <p>
          Šī privātuma politika izskaidro, kā Tirilogi.lv apstrādā un aizsargā jūsu
          personas datus, kad izmantojat mūsu mājaslapu un pakalpojumus.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">1. Datu pārzinis</h2>
          <p>
            Personas datu pārzinis ir Tirilogi.lv komanda. Jautājumiem par datu apstrādi
            rakstiet uz e-pastu: <a href="mailto:info@tirilogi.lv" className="text-blue-600 underline">info@tirilogi.lv</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">2. Kādi dati tiek apkopoti</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Vārds, e-pasts un tālrunis (no kontaktformas);</li>
            <li>IP adrese un pārlūka informācija (sīkdatnes);</li>
            <li>Atsauksmes saturs, ja tāda tiek iesniegta.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">3. Kā tiek izmantoti dati</h2>
          <p>
            Dati tiek izmantoti, lai atbildētu uz jūsu jautājumiem, nodrošinātu pakalpojumus
            un uzlabotu mūsu mājaslapas darbību.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">4. Datu glabāšana</h2>
          <p>
            Personas dati tiek glabāti tikai tik ilgi, cik nepieciešams iepriekš minētajiem
            mērķiem, vai saskaņā ar normatīvajiem aktiem.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">5. Sīkdatnes</h2>
          <p>
            Šī vietne var izmantot sīkdatnes, lai uzlabotu lietotāja pieredzi un analizētu
            apmeklējumu statistiku. Jūs varat atteikties no sīkdatnēm pārlūka iestatījumos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">6. Lietotāja tiesības</h2>
          <p>
            Jums ir tiesības pieprasīt informāciju par jūsu datiem, to dzēšanu vai labošanu.
            Lai to izdarītu, rakstiet uz e-pastu: <a href="mailto:info@tirilogi.lv" className="text-blue-600 underline">info@tirilogi.lv</a>.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
