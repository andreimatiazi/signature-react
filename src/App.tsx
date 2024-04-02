import { useEffect, useRef, useState } from "react";
import background_right from "./assets/background_right.png";
import whats from "./assets/whats.png";
import phone from "./assets/phone.png";
import pin from "./assets/pin.png";
import divider_vertical from "./assets/divider_vertical.png";
import logo from "./assets/logo.png";
import qr_code from "./assets/qr_code.png";
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

function App() {
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
            <label>Selecione a foto: </label>
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
          width="400"
        >
          <tbody>
            <tr>
              <td width={126}>
                <div
                  id="preview-image"
                  style={{
                    width: "126px",
                    height: "126px",
                    backgroundSize: "113px 113px",
                    objectFit: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: `url(${imgLink})`,
                  }}
                >
                  <img src={background_right} />
                </div>
              </td>
              <td width={154}>
                <table width={154}>
                  <tbody>
                    <tr>
                      <td
                        valign="top"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          fontSize: "0.8rem",
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
                          fontSize: "0.5rem",
                          fontWeight: "inherit",
                        }}
                      >
                        {cargo || "Contador/advogado"}
                      </td>
                    </tr>
                    {/* <tr>
                      <td width={162.5} valign="top" height="23"></td>
                    </tr> */}
                    <tr>
                      <td valign="top" height="15">
                        <img
                          src={divider_horizontal}
                          // style={{
                          //   aspectRatio: "1/1",
                          //   objectFit: "cover",
                          // }}
                        ></img>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.46rem",
                        }}
                        valign="top"
                        height="15"
                      >
                        <img width={9.51} height={9.51} src={whats} />
                        {celular || "(11) 99999-9999"}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.46rem",
                        }}
                        valign="top"
                        height="15"
                      >
                        <img width={9.51} height={9.51} src={phone} />
                        {telefone || "(11) 99999-9999"}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.4275rem",
                        }}
                        valign="top"
                      >
                        <img width={9.51} height={9.51} src={pin} />
                        Av. Jabaquara, 2958 - 10º andar CJ 101/102 - Metrô São
                        Judas São Paulo - SP
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td valign="middle" width={20}>
                <table width={20}>
                  <tr>
                    <td valign="middle">
                      <img src={divider_vertical} />
                    </td>
                  </tr>
                </table>
              </td>
              <td width={100} valign="middle">
                <table width={100}>
                  <tr>
                    <td height={10}></td>
                  </tr>
                  <tr>
                    <td valign="baseline">
                      <img
                        width={84}
                        style={{ objectFit: "cover" }}
                        src={logo}
                      />
                    </td>
                  </tr>
                  {/* <tr>
                    <td height="16"></td>
                  </tr> */}
                  <table>
                    <tr>
                      <td>
                        <img width={43} height={43} src={qr_code} />
                      </td>
                      <td>
                        <table>
                          <tr>
                            <td>
                              <img width={19} height={19} src={insta} />
                            </td>
                          </tr>
                          <tr>
                            <td valign="middle">
                              <img width={19} height={19} src={site} />
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
