import { Title } from "solid-start";


export default function Home() {
  return (
    <main>
      <Title>EURL CODIMOS</Title>
      <h1>EURL CODIMOS</h1>
      <h3>COMPTOIR DE DISTRIBUTION DU MATÉRIEL ET OUTILLAGE SONELGAZ</h3>
      <img src="public\codimos logo.png" alt="Codimos LOGO">
      <p>
        Cliquez sur le lien pour télécharger l'APK de l'application utilisateur {" "}
        <a href="https://main--startling-daifuku-bb8624.netlify.app/CodimosApp.apk" target="_blank">
          CodimosApp
        </a>{
      </p>
        <p>
          Cliquez sur le lien pour télécharger l'APK de l'application administrateur {" "}
          <a href="https://main--startling-daifuku-bb8624.netlify.app/CodimosAppAdmin.apk" target="_blank">
            CodimosAppAdmin
          </a>{
      </p>
    </main>
  );
}
