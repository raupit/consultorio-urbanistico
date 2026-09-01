"use client";

import { useState } from "react";
import Link from "next/link";

export default function AsesoramientoUrbanisticoPage() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [problema, setProblema] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [privacidad, setPrivacidad] = useState(false);

  const enviarWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!privacidad) return;

    const texto = `Hola Ana, solicito asesoramiento urbanístico.

Nombre: ${nombre}
Teléfono: ${telefono}
Municipio: ${municipio}
Consulta: ${problema}

Mi caso:
${mensaje}`;

    window.open(
      `https://wa.me/34632831009?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#071827",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "70px 22px 35px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#d4af67",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            marginBottom: "18px",
          }}
        >
          CONSULTORIO URBANÍSTICO
        </div>

        <h1
          style={{
            fontSize: "clamp(34px, 5vw, 58px)",
            lineHeight: 1.08,
            margin: "0 auto 22px",
            maxWidth: "900px",
          }}
        >
          ¿Tienes un problema urbanístico con tu inmueble?
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "clamp(17px, 2vw, 21px)",
            lineHeight: 1.65,
            color: "#d8e0e6",
          }}
        >
          Terrenos · Catastro–Registro · Requerimientos del Ayuntamiento ·
          Cambios de uso · Herencias · Incendios · Due diligence
        </p>

        <p
          style={{
            maxWidth: "720px",
            margin: "25px auto 0",
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          Cuéntame tu caso. Revisaré la situación y te indicaré cómo podemos
          actuar.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "32px",
          }}
        >
          <a
            href="https://wa.me/34632831009"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#071827",
              textDecoration: "none",
              fontWeight: 800,
              padding: "17px 27px",
              borderRadius: "8px",
            }}
          >
            ESCRÍBEME POR WHATSAPP
          </a>

          <a
            href="tel:+34632831009"
            style={{
              border: "1px solid #d4af67",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
              padding: "16px 27px",
              borderRadius: "8px",
            }}
          >
            LLAMAR: 632 831 009
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: "720px",
          margin: "15px auto 70px",
          padding: "0 22px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            color: "#102231",
            borderRadius: "14px",
            padding: "clamp(24px, 5vw, 42px)",
            boxShadow: "0 20px 50px rgba(0,0,0,.25)",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginTop: 0,
              marginBottom: "8px",
            }}
          >
            Solicita asesoramiento
          </h2>

          <p
            style={{
              color: "#56636d",
              lineHeight: 1.55,
              marginTop: 0,
              marginBottom: "28px",
            }}
          >
            Explícame brevemente qué ocurre con el inmueble y podré valorar
            mejor tu caso.
          </p>

          <form onSubmit={enviarWhatsApp}>
            <label style={labelStyle}>
              Nombre
              <input
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                style={inputStyle}
                type="text"
                autoComplete="name"
              />
            </label>

            <label style={labelStyle}>
              Teléfono
              <input
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                style={inputStyle}
                type="tel"
                autoComplete="tel"
              />
            </label>

            <label style={labelStyle}>
              Municipio
              <input
                required
                value={municipio}
                onChange={(e) => setMunicipio(e.target.value)}
                style={inputStyle}
                type="text"
              />
            </label>

            <label style={labelStyle}>
              ¿Qué necesitas revisar?
              <select
                required
                value={problema}
                onChange={(e) => setProblema(e.target.value)}
                style={inputStyle}
              >
                <option value="">Selecciona una opción</option>
                <option>Terreno</option>
                <option>Catastro y Registro</option>
                <option>Requerimiento del Ayuntamiento</option>
                <option>Cambio de uso</option>
                <option>Herencia</option>
                <option>Incendio o daños en inmueble</option>
                <option>Revisión antes de comprar</option>
                <option>Otro problema urbanístico</option>
              </select>
            </label>

            <label style={labelStyle}>
              Cuéntame brevemente tu caso
              <textarea
                required
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                style={{
                  ...inputStyle,
                  minHeight: "125px",
                  resize: "vertical",
                }}
              />
            </label>

            <label
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
                fontSize: "13px",
                lineHeight: 1.5,
                margin: "4px 0 22px",
              }}
            >
              <input
                required
                type="checkbox"
                checked={privacidad}
                onChange={(e) => setPrivacidad(e.target.checked)}
                style={{ marginTop: "3px" }}
              />

              <span>
                He leído y acepto la{" "}
                <Link
                  href="/Privacidad"
                  style={{ color: "#775b22", fontWeight: 700 }}
                >
                  Política de Privacidad
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              style={{
                width: "100%",
                border: 0,
                background: "#d4af67",
                color: "#071827",
                fontWeight: 900,
                fontSize: "16px",
                padding: "18px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              SOLICITA ASESORAMIENTO
            </button>
          </form>

          <p
            style={{
              fontSize: "12px",
              color: "#68747d",
              lineHeight: 1.5,
              marginBottom: 0,
              marginTop: "18px",
            }}
          >
            Al enviar el formulario se abrirá WhatsApp con los datos de tu
            consulta para que puedas enviármelos directamente.
          </p>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,.12)",
          padding: "25px 20px 35px",
          textAlign: "center",
          color: "#aab6be",
          fontSize: "13px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          Ana Epitié · Perito Judicial Urbanístico · Manresa y Bages
        </div>

        <div>
          <Link
            href="/Aviso-legal"
            style={{ color: "#d4af67", marginRight: "18px" }}
          >
            Aviso legal
          </Link>

          <Link href="/Privacidad" style={{ color: "#d4af67" }}>
            Privacidad
          </Link>
        </div>
      </footer>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontWeight: 700,
  fontSize: "14px",
  marginBottom: "18px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  display: "block",
  marginTop: "7px",
  border: "1px solid #cbd2d7",
  borderRadius: "7px",
  padding: "13px",
  background: "#ffffff",
  color: "#102231",
  fontSize: "16px",
};
