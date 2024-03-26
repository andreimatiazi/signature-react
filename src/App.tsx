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
import background from "./assets/Background.png";

import "./App.css"; // Importe seus estilos aqui

function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  // const [foto, setFoto] = useState<File | null>();
  const [foto] = useState<File | null>();
  // const [htmlCopy, setHtmlCopy] = useState("");
  const signatureRef = useRef<HTMLDivElement>(null);
  // Adicione mais estados conforme necessário

  const handleCopiarAssinatura = () => {
    const copyBoxElement = signatureRef.current;
    if (copyBoxElement) {
      copyBoxElement.contentEditable = "true";
      copyBoxElement.focus();
      navigator.clipboard.writeText(String(copyBoxElement.innerHTML));
    }
  };

  useEffect(() => {
    const img = document.getElementById("preview-image");
    if (foto && img) {
      const reader = new FileReader();
      reader.onload = function () {
        // img.src = e.target.result;// descomentar depois
      };
      reader.readAsDataURL(foto);
    }
  }, [foto]);

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
            <label>Nome: </label>
            {/* <input
              type="file"
              value={foto}
              onChange={(e) => {
                setFoto(e.target.value);
              }}
              placeholder="Nome:"
              maxLength={40}
              onKeyUp={handleMaiuscula}
            /> */}
            {/* <input
              type="file"
              id="photo"
              name="photo"
              onChange={(e) => {
                console.log(e);
                setFoto(e?.target?.files[0]);
              }}
              accept="image/*"
            /> */}
          </li>
        </ul>
      </div>
      <button
        style={{ marginBottom: "1rem" }}
        className="btn-save"
        onClick={handleCopiarAssinatura}
      >
        Copiar assinatura
      </button>
      <div ref={signatureRef} className="email-preview">
        <table
          cellPadding="0"
          cellSpacing="0"
          style={{
            borderCollapse: "collapse",
            background: `url(${background})`,
          }}
          width="800"
        >
          <tbody>
            <tr>
              <td width={126.5}>
                <img id="foto" src={background_right} />
                {/* <img
                src="#"
                id="preview-image"
                alt="Foto"
                width={156}
                height={156}
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  position: "relative",
                  top: "-205px",
                  right: "-50px",
                  borderRadius: "50%",
                }}
                className="image"
              ></img> */}
                <img
                  src={divider_horizontal}
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    position: "relative",
                    top: "-160px",
                    right: "-67%",
                  }}
                ></img>
              </td>
              <td width={250}>
                <table width={250}>
                  <tbody>
                    <tr>
                      <td
                        valign="top"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "bold",
                          fontSize: "28px",
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
                          fontSize: "14px",
                          fontWeight: "inherit",
                        }}
                      >
                        {cargo || "Contador/advogado"}
                      </td>
                    </tr>
                    <tr>
                      <td width={162.5} valign="top" height="23"></td>
                    </tr>
                    <tr>
                      <td
                        style={{ display: "flex", gap: "8px" }}
                        valign="top"
                        height="23"
                      >
                        <img width={19} height={19} src={whats} />
                        {celular || "(11) 99999-9999"}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ display: "flex", gap: "8px" }}
                        valign="top"
                        height="23"
                      >
                        <img width={19} height={19} src={phone} />
                        {telefone || "(11) 99999-9999"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ display: "flex", gap: "8px" }} valign="top">
                        <img width={19} height={19} src={pin} />
                        Av. Jabaquara, 2958 - 10º andar CJ 101/102 - Metrô São
                        Judas São Paulo - SP
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width={50}>
                <img src={divider_vertical} />
              </td>
              <td width={225} valign="middle">
                <table>
                  <tr>
                    <img
                      width={169}
                      style={{ objectFit: "cover" }}
                      src={logo}
                    />
                  </tr>
                  <tr>
                    <td height="16"></td>
                  </tr>
                  <tr>
                    <td>
                      <img width={86} height={86} src={qr_code} />
                    </td>
                    <td>
                      <table>
                        <tr>
                          <td>
                            <img width={39} height={39} src={insta} />
                          </td>
                        </tr>
                        <tr>
                          <td valign="baseline">
                            <img width={39} height={39} src={site} />
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
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
