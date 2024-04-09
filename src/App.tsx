import { useRef, useState } from "react";
import background_right from "./assets/background_right.png";
import whats from "./assets/whats.png";
import phone from "./assets/phone.png";
import pin from "./assets/pin.png";
import divider_vertical from "./assets/divider_vertical.png";
import logo from "./assets/logo.png";
import logo_lawyer from "./assets/logo_lawyer.png";
import qr_code from "./assets/qr_code.png";
import qr_code_lawyer from "./assets/qr_code_lawyer.png";
import insta from "./assets/insta.png";
import site from "./assets/site.png";
import divider_horizontal from "./assets/divider_horizontal.png";
import background from "./assets/background_table.png";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

import "./App.css"; // Importe seus estilos aqui
import { Button } from "@mui/material";

const selectInfos = {
  lawyer: {
    qr_code: qr_code_lawyer,
    logo: logo_lawyer,
    cargo: "Advogado",
    site: "https://www.silvaeoliveiraadvogados.com.br/",
    insta: "https://www.instagram.com/silvaeoliveiraadv/",
    celular: "(11) 97649-7196",
    telefone: "(11) 2359-3409",
  },
  accountant: {
    qr_code: qr_code,
    logo: logo,
    cargo: "Contador",
    site: "https://silvaeoliveira.com.br/",
    insta: "https://www.instagram.com/contabilsilvaeoliveira/",
    celular: "(11) 99280-1287",
    telefone: "(11) 2359-3409",
  },
};

function App() {
  const [type, setType] = useState<"lawyer" | "accountant">("lawyer");
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [imgLink, setImgLink] = useState("");

  const signatureRef = useRef<HTMLDivElement>(null);
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_API_KEY,
    authDomain: import.meta.env.VITE_API_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_API_DATABASE_URL,
    projectId: import.meta.env.VITE_API_PROJECT_ID,
    storageBucket: import.meta.env.VITE_API_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_API_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_API_APP_ID,
    measurementId: import.meta.env.VITE_API_MEASUREMENT_ID,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const analytics = getAnalytics(app);
  analytics;

  return (
    <div className="wrap">
      <header className="header">
        <h1 className="page-title">
          Nova assinatura
          <br />
          Silva & Oliveira
        </h1>
        <h2 className="page-subtitle">
          Substitua sua antiga assinatura pelo novo modelo.
        </h2>
        <p className="text-explain"></p>
      </header>
      <div className="content">
        <ul className="list-steps">{/* Passos aqui */}</ul>
        <ul className="list-inputs">
          <li>
            <label>Nome: </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome:"
              maxLength={40}
            />
          </li>
          <li>
            <label>Cargo: </label>
            <input
              type="text"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              placeholder="Nome:"
              maxLength={40}
            />
          </li>
          <li>
            <label>Celular: </label>
            <input
              type="text"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              placeholder="Celular:"
              maxLength={40}
            />
          </li>
          <li>
            <label>Telefone: </label>
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Telefone:"
              maxLength={40}
            />
          </li>
          <li>
            <label>
              Selecione a foto em formato quadrado (ex.: 500px500px):
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={async (e) => {
                if (!e?.target?.files) {
                  return;
                }
                const storage = getStorage();
                const imageRef = storageRef(
                  storage,
                  `img-signatures/${e?.target?.files[0].name + Math.random()}`,
                );
                uploadBytes(imageRef, e?.target?.files[0])
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  .then((snapshot: { ref: any }) => {
                    getDownloadURL(snapshot.ref)
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      .then((url: any) => {
                        setImgLink(url);
                      })
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      .catch((error: { message: any }) => {
                        console.log(error.message);
                      });
                  })
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  .catch((error: { message: any }) => {
                    console.log(error.message);
                  });
              }}
              accept="image/*"
            />
          </li>
        </ul>
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#AC9254",
            color: "#fff",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
          onClick={() => {
            setType(type === "lawyer" ? "accountant" : "lawyer");
          }}
        >
          Alterar para {type === "lawyer" ? "Contabilidade" : "Advocacia"}
        </Button>
      </div>
      <div
        style={{
          marginBottom: "2rem",
          fontFamily: "Arial",
          textAlign: "center",
        }}
      >
        <h3>
          Ao finalizar selecione a assinatura copie e cole posteriormente no seu
          e-mail
        </h3>
      </div>

      <div ref={signatureRef} className="email-preview">
        <table
          cellPadding="0"
          cellSpacing="0"
          style={{
            borderCollapse: "collapse",
            background: `url(${background})`,
          }}
          width="530"
        >
          <tbody>
            <tr>
              <td width={166.62}>
                <div
                  id="preview-image"
                  style={{
                    width: "166.62px",
                    height: "166.32px",
                    backgroundSize: "90%",
                    objectFit: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: `url(${imgLink})`,
                  }}
                >
                  <img src={background_right} />
                </div>
              </td>
              <td width={200.38}>
                <table width={200.39}>
                  <tbody>
                    <tr>
                      <td
                        valign="top"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          fontSize: "1.117rem",
                          color: "#AC9254",
                        }}
                      >
                        {nome || "Nome"}
                      </td>
                    </tr>
                    <tr>
                      <td
                        valign="top"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          color: "#000",
                          fontSize: "0.9rem",
                          fontWeight: "inherit",
                        }}
                      >
                        {cargo || selectInfos[type].cargo}
                      </td>
                    </tr>
                    <tr>
                      <td valign="middle" height="15">
                        <img src={divider_horizontal} />
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.615rem",
                        }}
                        valign="top"
                        height="15"
                      >
                        <img width={11.68} height={12.3} src={whats} />
                        <a
                          href={
                            celular
                              ? `https://api.whatsapp.com/send?phone=55${celular.replace(
                                  /\D/g,
                                  "",
                                )}`
                              : `https://api.whatsapp.com/send?phone=55${selectInfos[
                                  type
                                ].celular.replace(/\D/g, "")}`
                          }
                        >
                          {celular || selectInfos[type].celular}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.615rem",
                        }}
                        valign="top"
                        height="15"
                      >
                        <img width={12.6} height={12.6} src={phone} />
                        {telefone || selectInfos[type].telefone}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.566rem",
                        }}
                        valign="top"
                      >
                        <img width={12.6} height={12.6} src={pin} />
                        <a href="https://maps.app.goo.gl/oVBuAv3i8oEoLjdz8">
                          Av. Jabaquara, 2958 - 10º andar CJ 101/102 - Metrô São
                          Judas São Paulo - SP
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td valign="middle" width={25}>
                <table width={25}>
                  <tr>
                    <td valign="middle">
                      <img src={divider_vertical} />
                    </td>
                  </tr>
                </table>
              </td>
              <td width={138} valign="middle">
                <table width={100}>
                  <tr>
                    <td height={10}></td>
                  </tr>
                  <tr>
                    <td valign="baseline">
                      <img
                        width={111.6}
                        style={{ objectFit: "cover" }}
                        src={selectInfos[type].logo}
                      />
                    </td>
                  </tr>
                  {/* <tr>
                    <td height="16"></td>
                  </tr> */}
                  <table>
                    <tr>
                      <td>
                        <img
                          width={57.18}
                          height={57.18}
                          src={selectInfos[type].qr_code}
                        />
                      </td>
                      <td>
                        <table>
                          <tr>
                            <td>
                              <a href={selectInfos[type].insta}>
                                <img width={25.52} height={26.13} src={insta} />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td valign="middle">
                              <a href={selectInfos[type].site}>
                                <img width={25.21} height={25.52} src={site} />
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
