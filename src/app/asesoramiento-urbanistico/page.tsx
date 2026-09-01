from pathlib import Path

src = Path("/mnt/data/Text enganxat(20260901-211110).text").read_text(encoding="utf-8")

# Replace the full WhatsApp block with a more robust current-tab redirect
old = ''' const whatsappUrl = `https://api.whatsapp.com/send?phone=34632831009&text=${encodeURIComponent(
  texto
)}`;

window.open(whatsappUrl, "_blank");'''

new = '''    const whatsappUrl = `https://api.whatsapp.com/send?phone=34632831009&text=${encodeURIComponent(
      texto
    )}`;

    window.location.assign(whatsappUrl);'''

src = src.replace(old, new)

# Improve indentation of the handler declaration
src = src.replace(
'''const enviarWhatsApp = async (e: React.FormEvent<HTMLFormElement>) => {''',
'''  const enviarWhatsApp = async (e: React.FormEvent<HTMLFormElement>) => {''',
1
)

# Add accepted privacy field to Formspree payload
src = src.replace(
'''    origen: "Landing asesoramiento urbanístico",
  };''',
'''    origen: "Landing asesoramiento urbanístico",
    privacidad: "Aceptada",
  };''',
1
)

# Prefill the direct WhatsApp CTA too
src = src.replace(
'''href="https://wa.me/34632831009"''',
'''href="https://api.whatsapp.com/send?phone=34632831009&text=Hola%20Ana%2C%20quisiera%20hacerte%20una%20consulta%20urban%C3%ADstica."''',
1
)

out = Path("/mnt/data/page-corregido.tsx")
out.write_text(src, encoding="utf-8")
print(f"Archivo corregido creado: {out}")
