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

import "./App.css"; // Importe seus estilos aqui

function App() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  // const [telefone, setTelefone] = useState("");
  // const [celular, setCelular] = useState("");
  // const [foto, setFoto] = useState<File | null>();
  const [foto] = useState<File | null>();
  // const [htmlCopy, setHtmlCopy] = useState("");
  const signatureRef = useRef<HTMLDivElement>(null);
  // Adicione mais estados conforme necessário

  // useEffect(() => {
  //   setHtmlCopy(`<table cellpadding="0" cellspacing="0" style="border-collapse: collapse;" width="400">
  //   <tbody>
  //     <tr>
  //       <td>
  //         <div style="width: 800px; display: flex; align-items: center;">
  //           <div>
  //             <img id="foto" src="${background_right}" style="display: block;" alt="Silva & Oliveira" title="Silva & Oliveira" />
  //             <!-- <img
  //               src="#"
  //               id="preview-image"
  //               alt="Foto"
  //               width="156"
  //               height="156"
  //               style="
  //                 aspect-ratio: 1/1;
  //                 object-fit: cover;
  //                 position: relative;
  //                 top: -205px;
  //                 right: -50px;
  //                 border-radius: 50%;
  //               "
  //               class="image"
  //             /> -->
  //             <img src="${divider_horizontal}" alt="Foto" style="aspect-ratio: 1/1; object-fit: cover; position: relative; top: -140px; right: -85%;" class="image" />
  //           </div>
  //           <div style="width: 325px; padding: 1rem;">
  //             <p>${nome}</p>
  //             <p>Contador/advogado</p>
  //             <div style="display: flex; align-items: center; gap: 0.5rem;">
  //               <img width="19" height="19" src="${whats}" /> <p>(11) 99999-9999</p>
  //             </div>
  //             <div style="display: flex; align-items: center; gap: 0.5rem;">
  //               <img width="19" height="19" src="${phone}" /> <p>(11) 99999-9999</p>
  //             </div>
  //             <div style="display: flex; gap: 0.5rem; width: 250px;">
  //               <img width="19" height="19" src="${pin}" /> <p>Av. Jabaquara, 2958 - 10º andar CJ 101/102 - Metrô São Judas São Paulo - SP</p>
  //             </div>
  //           </div>
  //           <div style="display: flex; align-items: center; width: 225px;">
  //             <img src="${divider_vertical}" />
  //             <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; gap: 1rem;">
  //               <img width="169" style="object-fit: cover;" src="${logo}" />
  //               <div style="display: flex; gap: 1rem;">
  //                 <img width="86" height="86" src="${qr_code}" />
  //                 <div style="display: flex; flex-direction: column; align-items: normal; justify-content: space-between;">
  //                   <img width="39" height="39" src="${insta}" />
  //                   <img width="39" height="39" src="${site}" />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </td>
  //     </tr>
  //   </tbody>
  // </table>`);
  // }, [foto, nome]);

  const handleCopiarAssinatura = () => {
    // const assinaturaElement = document.getElementById("assinatura");
    // if (assinaturaElement) {
    //   // const assinaturaTexto = assinaturaElement.value;
    //   navigator.clipboard
    //     .writeText(htmlCopy)
    //     .then(() => {
    //       // setAssinaturaCopiada(true);
    //       alert("Assinatura copiada!");
    //     })
    //     .catch((error) => {
    //       console.error("Erro ao copiar assinatura:", error);
    //     });
    //   // setAssinaturaCopiada(true);
    // }
    // if (window.getSelection) {
    //   const range = document.createRange();
    //   if (signatureRef.current) {
    //     range.selectNode(signatureRef?.current.querySelector("table") as Node);
    //   }
    //   window.getSelection()?.removeAllRanges();
    //   window.getSelection()?.addRange(range);
    //   document.execCommand("copy");
    //   // this.gaEventClick('copy as select')
    //   // this.showSuccessPromo = true
    // }

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
          {/* Outros campos de entrada aqui */}
        </ul>
        {/* <a
          href="#"
          onClick={handleTrocarFoto}
          id="btn"
          className="trocar-assinatura"
        >
          Trocar Assinatura
        </a> */}
      </div>
      <button className="btn-save" onClick={handleCopiarAssinatura}>
        Copiar assinatura
      </button>

      {/* inicio assinatura */}
      {/* <div
        className="content"
        dangerouslySetInnerHTML={{ __html: htmlCopy }}
      ></div> */}
      {/* <div ref="preview" className="email-preview"> */}
      <div ref={signatureRef} className="email-preview">
        <table
          cellPadding="0"
          cellSpacing="0"
          style={{
            borderCollapse: "collapse",
          }}
          width="400"
        >
          <tbody>
            <div
              style={{
                width: "800px",
                display: "flex",
                alignItems: "center",
                fontFamily: "Arial",
              }}
            >
              <div>
                <img
                  id="foto"
                  src={background_right}
                  style={{ display: "block" }}
                  alt="Silva & Oliveira"
                  title="Silva & Oliveira"
                />
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
                  alt="Foto"
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    position: "relative",
                    top: "-150px",
                    right: "-85%",
                  }}
                  className="image"
                ></img>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.50rem",
                  width: "325px",
                  padding: "1rem",
                  color: "#000",
                  fontSize: "14px",
                  fontWeight: "inherit",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "28px",
                    color: "#AC9254",
                  }}
                >
                  {nome || "Nome"}
                </p>
                <p>{cargo || "Contador/advogado"}</p>
                <div
                  style={{
                    display: "flex",
                    paddingTop: "0.5rem",
                    // justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img width={19} height={19} src={whats} />{" "}
                  <p>(11) 99999-9999</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img width={19} height={19} src={phone} />{" "}
                  <p>(11) 99999-9999</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    gap: "0.5rem",
                    width: "250px",
                  }}
                >
                  <img width={19} height={19} src={pin} />{" "}
                  <p>
                    Av. Jabaquara, 2958 - 10º andar CJ 101/102 - Metrô São Judas
                    São Paulo - SP
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "225px",
                }}
              >
                <img src={divider_vertical} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    gap: "1rem",
                  }}
                >
                  <img width={169} style={{ objectFit: "cover" }} src={logo} />
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <img width={86} height={86} src={qr_code} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "normal",
                        justifyContent: "space-between",
                      }}
                    >
                      <img width={39} height={39} src={insta} />
                      <img width={39} height={39} src={site} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
