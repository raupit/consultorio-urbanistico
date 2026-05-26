# -*- coding: utf-8 -*-
"""
Plan de Mejora Web - Ana Epitie
Diagnóstico comparativo con joes.homes y estrategia adaptada al Bages
"""
import os, sys, hashlib
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, cm, mm
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.lib import colors
from reportlab.platypus import (
    Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether,
    CondPageBreak, HRFlowable, Image
)
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.platypus import SimpleDocTemplate

# ── Font Registration ──
pdfmetrics.registerFont(TTFont('SarasaMono', '/usr/share/fonts/truetype/chinese/SarasaMonoSC-Regular.ttf'))
pdfmetrics.registerFont(TTFont('SarasaMonoBold', '/usr/share/fonts/truetype/chinese/SarasaMonoSC-Bold.ttf'))
pdfmetrics.registerFont(TTFont('Carlito', '/usr/share/fonts/truetype/english/Carlito-Regular.ttf'))
pdfmetrics.registerFont(TTFont('Carlito-Bold', '/usr/share/fonts/truetype/english/Carlito-Bold.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuSans', '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'))
pdfmetrics.registerFont(TTFont('LiberationSerif', '/usr/share/fonts/truetype/chinese/LiberationSerif-Regular.ttf'))

registerFontFamily('Carlito', normal='Carlito', bold='Carlito-Bold')
registerFontFamily('SarasaMono', normal='SarasaMono', bold='SarasaMonoBold')

# ── Color Palette ──
PAGE_BG       = colors.HexColor('#f4f4f3')
SECTION_BG    = colors.HexColor('#ebebe9')
CARD_BG       = colors.HexColor('#efedea')
TABLE_STRIPE  = colors.HexColor('#f1f0ee')
HEADER_FILL   = colors.HexColor('#645c46')
COVER_BLOCK   = colors.HexColor('#675f49')
BORDER        = colors.HexColor('#c7c0ab')
ICON          = colors.HexColor('#97803e')
ACCENT        = colors.HexColor('#2488aa')
ACCENT_2      = colors.HexColor('#42c042')
TEXT_PRIMARY   = colors.HexColor('#20201d')
TEXT_MUTED     = colors.HexColor('#8d8b84')
SEM_SUCCESS   = colors.HexColor('#46865b')
SEM_WARNING   = colors.HexColor('#a68a54')
SEM_ERROR     = colors.HexColor('#a85a53')
SEM_INFO      = colors.HexColor('#476d92')

# ── Page Setup ──
PAGE_W, PAGE_H = A4
LEFT_M = 2.0 * cm
RIGHT_M = 2.0 * cm
TOP_M = 2.2 * cm
BOTTOM_M = 2.2 * cm
CONTENT_W = PAGE_W - LEFT_M - RIGHT_M

# ── Styles ──
FONT = 'Carlito'
FONT_H = 'Carlito'

styles = getSampleStyleSheet()

s_title = ParagraphStyle('DocTitle', fontName=FONT_H, fontSize=28, leading=34, 
                          textColor=TEXT_PRIMARY, alignment=TA_LEFT, spaceAfter=6)
s_h1 = ParagraphStyle('H1', fontName=FONT_H, fontSize=20, leading=26,
                       textColor=ACCENT, spaceBefore=24, spaceAfter=12)
s_h2 = ParagraphStyle('H2', fontName=FONT_H, fontSize=15, leading=20,
                       textColor=HEADER_FILL, spaceBefore=18, spaceAfter=8)
s_h3 = ParagraphStyle('H3', fontName=FONT_H, fontSize=12, leading=16,
                       textColor=ICON, spaceBefore=12, spaceAfter=6)
s_body = ParagraphStyle('Body', fontName=FONT, fontSize=10.5, leading=17,
                         textColor=TEXT_PRIMARY, alignment=TA_JUSTIFY, spaceAfter=8)
s_body_indent = ParagraphStyle('BodyIndent', parent=s_body, leftIndent=20)
s_bullet = ParagraphStyle('Bullet', fontName=FONT, fontSize=10.5, leading=17,
                           textColor=TEXT_PRIMARY, alignment=TA_LEFT, spaceAfter=4,
                           leftIndent=20, bulletIndent=8, bulletFontSize=10)
s_caption = ParagraphStyle('Caption', fontName=FONT, fontSize=9, leading=13,
                            textColor=TEXT_MUTED, alignment=TA_CENTER, spaceAfter=12)
s_callout = ParagraphStyle('Callout', fontName=FONT_H, fontSize=11, leading=17,
                            textColor=ACCENT, alignment=TA_LEFT, spaceBefore=6, spaceAfter=6,
                            leftIndent=16, borderPadding=8, borderColor=ACCENT, borderWidth=2,
                            backcolor=colors.HexColor('#f0f7fa'))
s_table_header = ParagraphStyle('TH', fontName=FONT_H, fontSize=10, leading=14,
                                 textColor=colors.white, alignment=TA_CENTER)
s_table_cell = ParagraphStyle('TC', fontName=FONT, fontSize=9.5, leading=14,
                               textColor=TEXT_PRIMARY, alignment=TA_LEFT, wordWrap='CJK')
s_table_cell_c = ParagraphStyle('TCC', fontName=FONT, fontSize=9.5, leading=14,
                                 textColor=TEXT_PRIMARY, alignment=TA_CENTER)
s_footer = ParagraphStyle('Footer', fontName=FONT, fontSize=8, leading=10,
                           textColor=TEXT_MUTED, alignment=TA_CENTER)

# ── TOC Document Template ──
class TocDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if hasattr(flowable, 'bookmark_name'):
            level = getattr(flowable, 'bookmark_level', 0)
            text = getattr(flowable, 'bookmark_text', '')
            key = getattr(flowable, 'bookmark_key', '')
            self.notify('TOCEntry', (level, text, self.page, key))

# ── Helpers ──
def heading(text, style, level=0):
    key = 'h_%s' % hashlib.md5(text.encode()).hexdigest()[:8]
    p = Paragraph('<a name="%s"/>%s' % (key, text), style)
    p.bookmark_name = text
    p.bookmark_level = level
    p.bookmark_text = text
    p.bookmark_key = key
    return p

def body(text):
    return Paragraph(text, s_body)

def bullet(text, symbol='\u2022'):
    return Paragraph('%s %s' % (symbol, text), s_bullet)

def callout(text):
    return Paragraph(text, s_callout)

def make_table(headers, rows, col_widths=None):
    if col_widths is None:
        col_widths = [CONTENT_W / len(headers)] * len(headers)
    else:
        total = sum(col_widths)
        col_widths = [w / total * CONTENT_W for w in col_widths]
    
    data = [[Paragraph('<b>%s</b>' % h, s_table_header) for h in headers]]
    for row in rows:
        data.append([Paragraph(str(c), s_table_cell) if not isinstance(c, Paragraph) else c for c in row])
    
    t = Table(data, colWidths=col_widths, hAlign='CENTER')
    style_cmds = [
        ('BACKGROUND', (0, 0), (-1, 0), HEADER_FILL),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
    ]
    for i in range(1, len(data)):
        bg = colors.white if i % 2 == 1 else TABLE_STRIPE
        style_cmds.append(('BACKGROUND', (0, i), (-1, i), bg))
    t.setStyle(TableStyle(style_cmds))
    return t

def priority_badge(p):
    color_map = {'Alta': SEM_ERROR, 'Media': SEM_WARNING, 'Baja': SEM_SUCCESS}
    c = color_map.get(p, TEXT_MUTED)
    return Paragraph('<b><font color="%s">%s</font></b>' % (c.hexval(), p), s_table_cell_c)

# ── Build Document ──
OUTPUT = '/home/z/my-project/download/Plan_Mejora_Web_Ana_Epitie.pdf'

doc = TocDocTemplate(
    OUTPUT, pagesize=A4,
    leftMargin=LEFT_M, rightMargin=RIGHT_M,
    topMargin=TOP_M, bottomMargin=BOTTOM_M,
    title='Plan de Mejora Web - Ana Epitie',
    author='Z.ai',
    creator='Z.ai',
)

story = []

# ══════════════════════════════════════════════════════════
# COVER (placeholder - will be replaced by HTML cover)
# ══════════════════════════════════════════════════════════
story.append(Spacer(1, 80))
story.append(Paragraph('Plan de Mejora Web', s_title))
story.append(Spacer(1, 12))
story.append(Paragraph('Ana Epitie Inmobiliaria &amp; Consultorio Urbanistico', 
    ParagraphStyle('Sub', fontName=FONT_H, fontSize=16, leading=22, textColor=TEXT_MUTED)))
story.append(Spacer(1, 24))
story.append(HRFlowable(width='60%', thickness=2, color=ACCENT, spaceAfter=20))
story.append(Paragraph('Diagnostico comparativo con joes.homes y estrategia de posicionamiento adaptada a Manresa, Bages, Cataluna', 
    ParagraphStyle('Desc', fontName=FONT, fontSize=12, leading=18, textColor=TEXT_PRIMARY)))
story.append(Spacer(1, 36))
story.append(Paragraph('Mayo 2026', ParagraphStyle('Date', fontName=FONT, fontSize=11, textColor=TEXT_MUTED)))
story.append(Paragraph('Preparado por Z.ai', ParagraphStyle('Auth', fontName=FONT, fontSize=11, textColor=TEXT_MUTED)))
story.append(PageBreak())

# ══════════════════════════════════════════════════════════
# TABLE OF CONTENTS
# ══════════════════════════════════════════════════════════
story.append(Paragraph('<b>Indice</b>', s_h1))
toc = TableOfContents()
toc.levelStyles = [
    ParagraphStyle('TOC1', fontName=FONT_H, fontSize=12, leftIndent=20, leading=20, spaceBefore=4, textColor=TEXT_PRIMARY),
    ParagraphStyle('TOC2', fontName=FONT, fontSize=10.5, leftIndent=40, leading=18, spaceBefore=2, textColor=TEXT_MUTED),
]
story.append(toc)
story.append(PageBreak())

# ══════════════════════════════════════════════════════════
# 1. RESUMEN EJECUTIVO
# ══════════════════════════════════════════════════════════
story.append(heading('1. Resumen Ejecutivo', s_h1, 0))
story.append(body(
    'Tras analizar en profundidad la web de referencia <b>joes.homes</b> (Joe Luciano, Realtor en Massachusetts) '
    'y compararla con tus dos plataformas actuales - <b>ana-epitie-inmobiliaria-z.vercel.app</b> y '
    '<b>consultorio-urbanistico.vercel.app</b> - hemos identificado oportunidades significativas de mejora en '
    'posicionamiento SEO, contenido hiperlocal, datos estructurados y experiencia de usuario. '
    'La buena noticia es que tus webs tienen una base solida: diseno profesional, propuestas de valor claras y '
    'una diferenciacion real en el mercado (API + Perito Judicial Urbanistico + SaaS). Lo que falta no es vision, '
    'sita infraestructura tecnica y estrategia de contenido.'
))
story.append(Spacer(1, 8))
story.append(callout(
    '<b>Conclusion clave:</b> Joe Luciano posiciona su web como una maquina de captacion porque combina '
    'SEO tecnico profesional + contenido hiperlocal + datos MLS en tiempo real + accesibilidad personal directa. '
    'Tu ventaja competitiva es aun mayor (eres la unica Perito Judicial Urbanistico del Bages con web propia), '
    'pero tu infraestructura SEO actual no esta a la altura de tu diferenciacion.'
))
story.append(Spacer(1, 12))

# ══════════════════════════════════════════════════════════
# 2. DIAGNOSTICO COMPARATIVO
# ══════════════════════════════════════════════════════════
story.append(heading('2. Diagnostico Comparativo', s_h1, 0))

story.append(heading('2.1. Comparativa tecnica general', s_h2, 1))
story.append(body(
    'La siguiente tabla muestra una comparacion directa entre las tres webs en los factores criticos '
    'que determinan el exito de posicionamiento en buscadores y la generacion de leads inmobiliarios. '
    'Cada elemento ha sido evaluado tras el analisis exhaustivo del codigo fuente, la estructura de contenido '
    'y las senales SEO de cada plataforma.'
))

comp_headers = ['Factor', 'Joes.homes', 'Ana Inmobiliaria', 'Consultorio']
comp_rows = [
    ['Meta description', Paragraph('<font color="#46865b"><b>Completa + OG</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>Ausente</b></font>', s_table_cell),
     Paragraph('<font color="#46865b"><b>Presente</b></font>', s_table_cell)],
    ['Schema / JSON-LD', Paragraph('<font color="#46865b"><b>6 tipos</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>Ninguno</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>Ninguno</b></font>', s_table_cell)],
    ['Open Graph tags', Paragraph('<font color="#46865b"><b>Completos</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>0</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>0</b></font>', s_table_cell)],
    ['Canonical URL', Paragraph('<font color="#46865b"><b>Si</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>No</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>No</b></font>', s_table_cell)],
    ['Blog / contenido', Paragraph('<font color="#46865b"><b>Activo</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>No visible</b></font>', s_table_cell),
     Paragraph('<font color="#a68a54"><b>7 articulos</b></font>', s_table_cell)],
    ['Listings en tiempo real', Paragraph('<font color="#46865b"><b>MLS/IDX</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>No</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>No aplica</b></font>', s_table_cell)],
    ['Enlaces internos', Paragraph('<font color="#46865b"><b>79</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>14</b></font>', s_table_cell),
     Paragraph('<font color="#a68a54"><b>26</b></font>', s_table_cell)],
    ['Favicon', Paragraph('<font color="#46865b"><b>Si</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>No</b></font>', s_table_cell),
     Paragraph('<font color="#46865b"><b>Si</b></font>', s_table_cell)],
    ['Google Analytics', Paragraph('<font color="#46865b"><b>Si (avanzado)</b></font>', s_table_cell),
     Paragraph('<font color="#46865b"><b>Si</b></font>', s_table_cell),
     Paragraph('<font color="#46865b"><b>Si</b></font>', s_table_cell)],
    ['Dominio propio', Paragraph('<font color="#46865b"><b>joes.homes</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>.vercel.app</b></font>', s_table_cell),
     Paragraph('<font color="#a85a53"><b>.vercel.app</b></font>', s_table_cell)],
]
story.append(Spacer(1, 6))
story.append(make_table(comp_headers, comp_rows, [1.3, 1.2, 1.2, 1.2]))
story.append(Spacer(1, 6))
story.append(Paragraph('Tabla 1: Comparativa tecnica entre las tres plataformas web analizadas', s_caption))

story.append(heading('2.2. Problemas criticos detectados', s_h2, 1))
story.append(body(
    'Mas alla de la comparativa numerica, existen problemas estructurales que limitan seriamente el '
    'posicionamiento de tus webs. Estos no son detalles menores: son barreras que impiden que Google '
    'entienda y posicione correctamente tu contenido. A continuacion se detallan los mas urgentes.'
))

story.append(heading('2.2.1. Dominio en .vercel.app', s_h3, 1))
story.append(body(
    'Ambas webs estan alojadas en subdominios de Vercel (.vercel.app), lo cual transmite dos problemas graves. '
    'En primer lugar, no tienes control total sobre la autoridad de dominio: estas construyendo equity SEO '
    'sobre un dominio de terceros. En segundo lugar, desde la perspectiva de marca y confianza, un dominio propio '
    'como <b>anaepitie.es</b> o <b>consultoriourbanistico.es</b> transmite mucha mas profesionalidad y credibility '
    'ante potenciales clientes y ante Google. Joe Luciano usa <b>joes.homes</b>, que es memorable, corto y '
    'refuerza su marca personal. Tu necesitas lo mismo: un dominio que diga exactamente quien eres y que haces.'
))

story.append(heading('2.2.2. Ausencia total de Schema markup', s_h3, 1))
story.append(body(
    'Joe usa 6 tipos de structured data (RealEstateAgent, Organization, WebSite, WebPage, Person, Article) '
    'que permiten a Google mostrar rich snippets en los resultados de busqueda: estrellas, datos de contacto, '
    'horarios, fotos, preguntas frecuentes. Tus dos webs tienen <b>cero</b> structured data. Esto significa '
    'que Google solo ve texto plano, sin entender que eres una agente inmobiliaria certificada, que eres perito '
    'judicial, donde operas, o que servicios ofreces. Es como tener una tienda sin cartel en la fachada.'
))

story.append(heading('2.2.3. Sin meta description en Ana Inmobiliaria', s_h3, 1))
story.append(body(
    'La web de Ana Inmobiliaria carece completamente de meta description. Cuando alguien busca "inmobiliaria '
    'lujo Manresa" o "asesora inmobiliaria Bages", Google mostrara un fragmento aleatorio de tu pagina en '
    'lugar del mensaje que tu quieres transmitir. El Consultorio si tiene meta description, y bien redactada, '
    'lo cual demuestra que ya conoces la importancia de este elemento. Pero la web inmobiliaria necesita '
    'este cambio urgente.'
))

story.append(heading('2.2.4. Escasez de enlaces internos', s_h3, 1))
story.append(body(
    'Joe tiene 79 enlaces internos que conectan listings, comunidades, barrios, blog posts y paginas de servicio. '
    'Esto crea una red de contenido que Google puede rastrear facilmente y que mantiene al usuario navegando. '
    'Tu web inmobiliaria solo tiene 14 enlaces totales y el Consultorio 26. La falta de enlaces internos '
    'significa que Google no descubre todo tu contenido y que los usuarios tienen menos razones para quedarse '
    'en tu web. Cada pagina de municipio del Bages que crees deberia enlazar con tu pagina de servicios, '
    'con el blog, con casos de exito y con el formulario de contacto.'
))

# ══════════════════════════════════════════════════════════
# 3. LO QUE JOE HACE Y TU DEBES REPLICAR
# ══════════════════════════════════════════════════════════
story.append(heading('3. Lo que Joe hace y tu debes replicar', s_h1, 0))

story.append(heading('3.1. SEO tecnico profesional', s_h2, 1))
story.append(body(
    'Joe usa Rank Math PRO, el plugin SEO mas avanzado de WordPress, que automaticamente genera schema markup, '
    'gestiona sitemaps, canonicals, Open Graph, redirecciones y analisis de legibilidad. Tu usas Next.js/Vercel, '
    'lo cual es incluso mejor desde el punto de vista tecnico (mas rapido, mas control), pero necesitas '
    'implementar manualmente lo que los plugins de WordPress automatizan. A continuacion, la lista completa '
    'de lo que debes implementar en tu sitio Next.js.'
))

seo_headers = ['Elemento SEO', 'Estado actual', 'Que hacer', 'Prioridad']
seo_rows = [
    ['Schema JSON-LD (LocalBusiness, RealEstateAgent, Person)', Paragraph('<font color="#a85a53">Ausente</font>', s_table_cell), 
     'Implementar con next-schema o manualmente en layout.tsx', priority_badge('Alta')],
    ['Open Graph + Twitter Cards', Paragraph('<font color="#a85a53">Ausente</font>', s_table_cell), 
     'Usar next-seo o metadata API de Next.js', priority_badge('Alta')],
    ['Sitemap.xml dinamico', Paragraph('<font color="#a85a53">Probablemente ausente</font>', s_table_cell), 
     'Generar con next-sitemap', priority_badge('Alta')],
    ['Robots.txt optimizado', Paragraph('<font color="#a85a53">Por verificar</font>', s_table_cell), 
     'Configurar en public/robots.txt', priority_badge('Alta')],
    ['Canonical URLs', Paragraph('<font color="#a85a53">Ausente</font>', s_table_cell), 
     'Agregar en metadata de cada pagina', priority_badge('Alta')],
    ['Meta description unica por pagina', Paragraph('<font color="#a85a53">Parcial</font>', s_table_cell), 
     'Escribir para cada ruta con keywords locales', priority_badge('Alta')],
    ['Hreflang (es/ca)', Paragraph('<font color="#a85a53">Ausente</font>', s_table_cell), 
     'Si quieres posicionar en catalan, es esencial', priority_badge('Media')],
    ['Breadcrumbs con schema', Paragraph('<font color="#a85a53">Ausente</font>', s_table_cell), 
     'Implementar con BreadcrumbList schema', priority_badge('Media')],
    ['FAQ schema en servicios', Paragraph('<font color="#a85a53">Ausente</font>', s_table_cell), 
     'Agregar preguntas frecuentes con FAQPage schema', priority_badge('Media')],
]
story.append(Spacer(1, 6))
story.append(make_table(seo_headers, seo_rows, [1.4, 0.9, 1.5, 0.7]))
story.append(Spacer(1, 6))
story.append(Paragraph('Tabla 2: Elementos SEO tecnicos a implementar, priorizados por impacto', s_caption))

story.append(heading('3.2. Contenido hiperlocal: la estrategia del Bages', s_h2, 1))
story.append(body(
    'Joe tiene paginas individuales para cada comunidad de condos del North Shore y cada barrio de Boston. '
    'Estas paginas posicionan para busquedas como "North Shore condos" o "Newburyport real estate" porque '
    'ofrecen informacion que nadie mas tiene: datos de mercado, fotos propias, mapas interactivos y contexto '
    'local. Tu tienes una ventaja que Joe no tiene: ya has creado <b>paginas individuales para los 29 municipios '
    'del Bages</b> en tu Consultorio, con referencia a sus POUM vigentes. Esto es oro puro para SEO. Pero '
    'necesitas ampliar y conectar esta estrategia.'
))
story.append(body(
    'La estrategia hiperlocal no se limita a listar municipios. Se trata de crear contenido de decision para '
    'cada tipo de busqueda que un propietario o comprador podria hacer. Por ejemplo, alguien que busca '
    '"legalizar masia Manresa" o "comprar masia Bages" o "urbanizaciones Sant Fruitos" deberia aterrizar '
    'en una pagina de tu web que responda exactamente a esa necesidad. Cada pagina de municipio deberia '
    'incluir no solo el POUM, sino informacion sobre el mercado inmobiliario local, tipos de propiedades '
    'mas comunes, problematicas urbanisticas frecuentes y enlaces a tus servicios relevantes.'
))

story.append(heading('3.3. La estrategia de contenido de decision', s_h2, 1))
story.append(body(
    'Joe escribe articulos como "Millennium Tower vs Winthrop Center" o "Top 5 Luxury Condo Buildings in Back Bay". '
    'Estos no son posts genericos sobre bienes raices: son <b>contenidos de decision</b>. La persona que busca '
    '"Millennium Tower vs Winthrop Center" esta comparando opciones con intencion de compra. Tu Consultorio '
    'ya tiene 7 articulos de este tipo (como legalizar una masia, certificado de habilitacion urbanistica, '
    'casas prefabricadas en suelo rustico), lo cual es excelente. Pero la web inmobiliaria necesita el mismo '
    'enfoque. Ejemplos de contenido de decision que deberias crear para el mercado del Bages:'
))

blog_items = [
    '<b>"Las 10 masias mas codiciadas del Bages: precios y caracteristicas 2026"</b> - Captura a quien busca masia con intencion de compra.',
    '<b>"Urbanizaciones con mas plusvalia en la comarca del Bages"</b> - Atrae a inversores y propietarios que quieren vender.',
    '<b>"Comprar en Manresa vs Sant Cugat: comparativa de precios y calidad de vida"</b> - Contenido comparativo que posiciona para multiples keywords.',
    '<b>"Guia completa para comprar una masia en Cataluna: errores comunes y como evitarlos"</b> - Long-form SEO que captura todo el funnel de busqueda.',
    '<b>"Que vale realmente una masia con obras ilegales en el Bages"</b> - Conecta inmobiliaria con peritaje, tu diferenciacion unica.',
    '<b>"Suelo rustico en el Bages: oportunidades de inversion tras las recalificaciones 2024-2026"</b> - Atrae a inversores y desarrolladores.',
    '<b>"Herencias con propiedades ilegales en Cataluna: guia paso a paso"</b> - Conecta peritaje judicial + inmobiliaria.',
]
for item in blog_items:
    story.append(bullet(item))

story.append(Spacer(1, 8))
story.append(callout(
    '<b>Regla de oro de Joe:</b> "El contenido se escribe para humanos primero, pero funciona para Google tambien." '
    'No escribas para posicionamiento, escribe para responder la pregunta que tu cliente ideal esta buscando. '
    'El SEO llega solo cuando el contenido es genuinamente util.'
))

# ══════════════════════════════════════════════════════════
# 4. PLAN DE ACCION - ANA INMOBILIARIA
# ══════════════════════════════════════════════════════════
story.append(heading('4. Plan de Accion: Ana Epitie Inmobiliaria', s_h1, 0))

story.append(heading('4.1. Dominio y marca', s_h2, 1))
story.append(body(
    'Lo primero y mas urgente: migrar de ana-epitie-inmobiliaria-z.vercel.app a un dominio propio. '
    'Las opciones recomendadas, por orden de preferencia, son: <b>anaepitie.es</b> (directo, profesional, facil de recordar), '
    '<b>anaepitie.homes</b> (siguiendo el modelo de Joe, sectorial y memorable), o <b>epitie.es</b> (corto, elegante, '
    'funciona como marca paraguas para inmobiliaria + consultorio + SaaS). El dominio .es es esencial porque '
    'refuerza tu posicionamiento en Espana y Google lo prioriza para busquedas locales. Si quieres tambien '
    'posicionar en catalan, considera registrar la variante .cat como redireccion.'
))

story.append(heading('4.2. Schema markup para inmobiliaria', s_h2, 1))
story.append(body(
    'Debes implementar al menos los siguientes tipos de schema markup en tu web inmobiliaria. Estos son los '
    'que mayor impacto tendran en como Google muestra tus paginas en los resultados de busqueda, y los que '
    'Joe utiliza con exito en joes.homes. La implementacion en Next.js se hace a traves del objeto metadata '
    'o mediante componentes que inyectan JSON-LD en el head de cada pagina.'
))

schema_headers = ['Tipo de Schema', 'Donde implementarlo', 'Que incluye']
schema_rows = [
    ['RealEstateAgent', 'Pagina principal y /sobre-mi', 'Nombre, foto, telefono, area de servicio (Bages), horarios, colegiacion API, logo'],
    ['LocalBusiness', 'Pagina principal', 'Direccion (Manresa), geo-coordenadas, area de servicio, tipo de negocio'],
    ['Person', '/sobre-mi', 'Nombre, credential (API, PJU), sameAs (LinkedIn, redes), worksFor'],
    ['Service', 'Cada pagina de servicio', 'Tipo de servicio, descripcion, area de servicio, precio (si aplica)'],
    ['FAQPage', 'Paginas de servicio', 'Preguntas frecuentes sobre venta de masias, urbanizaciones, peritaje'],
    ['BreadcrumbList', 'Todas las paginas', 'Ruta de navegacion: Inicio > Servicios > Venta de Masias'],
]
story.append(Spacer(1, 6))
story.append(make_table(schema_headers, schema_rows, [1.2, 1.3, 2.5]))
story.append(Spacer(1, 6))
story.append(Paragraph('Tabla 3: Tipos de Schema markup recomendados para la web inmobiliaria', s_caption))

story.append(heading('4.3. Paginas de municipio/barrio', s_h2, 1))
story.append(body(
    'Joe demuestra que el contenido hiperlocal es el motor principal de captacion. Tu debes crear paginas '
    'individuales para cada municipio del Bages en la web inmobiliaria, no solo en el Consultorio. Cada pagina '
    'deberia seguir esta estructura para maximizar el valor SEO y la conversion de visitantes a leads. '
    'La clave es que cada pagina responda a las preguntas que un comprador o vendedor real se haria sobre ese '
    'municipio, y que conecte naturalmente con tus servicios profesionales.'
))

page_structure = [
    '<b>Titulo:</b> "Inmobiliaria en [Municipio] - Masias, Urbanizaciones y Propiedades de Lujo | Ana Epitie"',
    '<b>Descripcion del municipio:</b> Contexto geografico, poblacion, conexion con Manresa/Barcelona, atractivos.',
    '<b>Mercado inmobiliario local:</b> Rango de precios, tipo de propiedades mas demandadas, tendencias.',
    '<b>Propiedades destacadas:</b> Si tienes listings en ese municipio, mostrarlos. Si no, mostrar propiedades similares.',
    '<b>Problematica urbanistica comun:</b> Enlace al Consultorio con la informacion del POUM de ese municipio.',
    '<b>Testimonios/Casos de exito:</b> Si has operado en ese municipio, mostrar el caso.',
    '<b>CTA:</b> "Buscas vender tu propiedad en [Municipio]? Agenda consulta gratuita."',
]
for item in page_structure:
    story.append(bullet(item))

story.append(Spacer(1, 8))
story.append(body(
    'Esto genera 29+ paginas indexables, cada una optimizada para keywords como "inmobiliaria Manresa", '
    '"comprar masia Sallent", "vender propiedad Sant Fruitos de Bages", etc. Es exactamente lo que Joe '
    'hace con sus comunidades de condos, pero adaptado al mercado de masias y urbanizaciones del interior '
    'de Cataluna. La diferencia es que tu contenido sera aun mas valioso porque nadie mas esta haciendo esto '
    'para el Bages.'
))

# ══════════════════════════════════════════════════════════
# 5. PLAN DE ACCION - CONSULTORIO URBANISTICO
# ══════════════════════════════════════════════════════════
story.append(heading('5. Plan de Accion: Consultorio Urbanistico', s_h1, 0))

story.append(heading('5.1. Dominio propio', s_h2, 1))
story.append(body(
    'Igual que la web inmobiliaria, el Consultorio necesita un dominio propio. Opciones recomendadas: '
    '<b>consultoriourbanistico.es</b> (descriptivo y directo, perfecto para SEO), <b>peritourbanistico.es</b> '
    '(mas centrado en tu rol profesional), o <b>peritobages.es</b> (ultralocal, memorable, refuerza tu nicho). '
    'El dominio .es es especialmente importante aqui porque las busquedas de peritos judiciales y legalizacion '
    'de obras son inherentemente locales: la gente busca "perito judicial urbanistico Manresa" o '
    '"legalizar obras Bages", y un dominio .es refuerza esa senal de localidad para Google Espana.'
))

story.append(heading('5.2. Schema markup especializado', s_h2, 1))
story.append(body(
    'El Consultorio tiene una oportunidad unica con el schema markup porque ofrece servicios muy especificos '
    'que pocas webs en Espana estan marcando. Mientras que la mayoria de peritos judiciales no tienen siquiera '
    'web propia, tu puedes ser el primero en aparecer con rich snippets en Google. Los tipos de schema '
    'recomendados son los siguientes, priorizados por impacto potencial en los resultados de busqueda.'
))

cons_schema = [
    '<b>LegalService</b> - Para la pagina principal, con subtipo Perito Judicial. Incluye numero de colegiacion ASPEJURE, area de servicio (Bages), tipos de casos que atiendes.',
    '<b>ProfessionalService</b> - Para cada servicio individual (legalizacion, peritaje, disciplina urbanistica). Incluye precio, duracion estimada, area de cobertura.',
    '<b>FAQPage</b> - Para cada servicio. Las preguntas frecuentes generan rich snippets en Google que aumentan el CTR hasta en un 30-50%. Ejemplo: "Se puede legalizar una masia sin licencia en Manresa?"',
    '<b>HowTo</b> - Para los procesos de 4 pasos que ya tienes (Consulta, Estudio, Resolucion, Venta). Google puede mostrar estos pasos directamente en los resultados.',
    '<b>Review / AggregateRating</b> - Si tienes testimonios verificables, mostrar las valoraciones en los resultados de busqueda multiplica el CTR.',
    '<b>LocalBusiness</b> - Con geo-coordenadas de Manresa y radio de cobertura de 30km (todo el Bages).',
]
for item in cons_schema:
    story.append(bullet(item))

story.append(heading('5.3. Ampliar la estrategia de contenido', s_h2, 1))
story.append(body(
    'Los 7 articulos que ya tienes son un excelente punto de partida, pero necesitas escalar significativamente. '
    'Joe publica contenido de decision regularmente, y eso es lo que mantiene su web relevante para Google. '
    'La estrategia de contenido del Consultorio debe cubrir tres ejes fundamentales que se refuerzan mutuamente: '
    'problematica (que le pasa al propietario), solucion (que haces tu) y resultado (cuanto valor recuperas). '
    'Cada articulo debe seguir esta estructura narrativa para maximizar tanto el valor SEO como la conversion.'
))

story.append(heading('5.3.1. Calendario de contenido sugerido (3 meses)', s_h2, 1))

cal_headers = ['Semana', 'Articulo', 'Keyword objetivo', 'Tipo']
cal_rows = [
    ['1', 'Guia para legalizar una masia en Cataluna 2026', 'legalizar masia Cataluna', 'Guia'],
    ['2', 'Certificado de habilitacion urbanistica: todo lo que necesitas saber', 'certificado habilitacion urbanistica', 'Educativo'],
    ['3', 'Casa prefabricada en suelo rustico: lo que nadie te cuenta', 'casa prefabricada suelo rustico', 'Alerta'],
    ['4', 'Como vender una propiedad con obras ilegales en el Bages', 'vender propiedad obras ilegales', 'Decision'],
    ['5', 'Suelo rustico recalificado en el Bages: mapa de oportunidades', 'suelo rustico Bages recalificacion', 'Datos'],
    ['6', 'Perito judicial urbanistico: cuando lo necesitas y como trabaja', 'perito judicial urbanistico', 'Autoridad'],
    ['7', 'Herencia con propiedad ilegal: 5 pasos para resolverlo', 'herencia propiedad ilegal', 'Proceso'],
    ['8', 'Asimilacion a fuera de ordenacion: la via para conservar tu edificacion', 'asimilacion fuera de ordenacion', 'Tecnico'],
    ['9', 'Precios de masias en el Bages 2026: informe de mercado', 'precios masias Bages', 'Mercado'],
    ['10', 'Legalizar nave industrial en Sant Fruitos: caso real', 'legalizar nave industrial Bages', 'Caso de exito'],
    ['11', 'IBI de suelo rustico: por que pagas si no puedes construir', 'IBI suelo rustico Cataluna', 'Problema'],
    ['12', 'Que hace que una masia del Bages valga 500.000 o 2 millones', 'valor masia Bages', 'Decision'],
]
story.append(Spacer(1, 6))
story.append(make_table(cal_headers, cal_rows, [0.5, 2.0, 1.8, 0.7]))
story.append(Spacer(1, 6))
story.append(Paragraph('Tabla 4: Calendario de contenido sugerido para las primeras 12 semanas', s_caption))

# ══════════════════════════════════════════════════════════
# 6. CONECTAR LAS DOS WEBS
# ══════════════════════════════════════════════════════════
story.append(heading('6. Conectar las dos webs: la estrategia paraguas', s_h1, 0))
story.append(body(
    'Joe Luciano tiene una sola web que integra todo. Tu tienes dos, lo cual puede ser incluso mejor si '
    'las conectas estrategicamente. La clave es que funcionen como un ecosistema, no como islas separadas. '
    'Cada web debe alimentar a la otra, creando un circulo virtuoso donde un visitante del Consultorio '
    'descubre tus servicios inmobiliarios y viceversa. Esto multiplica el valor de cada visitante y '
    'refuerza tu posicionamiento como la experta integral del mercado inmobiliario del Bages.'
))

story.append(heading('6.1. Flujo de conexion recomendado', s_h2, 1))
story.append(body(
    'El flujo ideal funciona asi: un propietario descubre el Consultorio buscando como legalizar su masia. '
    'Tras leer tu articulo y usar la IA, solicita un estudio de viabilidad. Descubre que su masia vale '
    'un 40% menos de lo que deberia por el problema urbanistico. Cuando se resuelve, la pagina de resultado '
    'del Consultorio enlaza directamente con tu servicio de venta en la inmobiliaria: "Ahora que tu propiedad '
    'esta regularizada, quieres venderla al precio real?". En paralelo, un comprador que busca masias en tu '
    'web inmobiliaria encuentra una propiedad con "situacion urbanistica verificada por perito judicial" '
    '(tu propia certificacion), lo cual genera confianza y diferenciacion frente a cualquier otra inmobiliaria.'
))

conn_items = [
    '<b>Desde el Consultorio a la Inmobiliaria:</b> "Tu propiedad ya esta legalizada. Vendela al precio real con nuestra inmobiliaria asociada." Enlace en cada caso de exito y en la pagina de resultado del proceso de 4 pasos.',
    '<b>Desde la Inmobiliaria al Consultorio:</b> "Esta propiedad tiene situacion urbanistica verificada" con enlace al informe pericial. Badge de verificacion en cada listing que haya pasado por tu peritaje.',
    '<b>Contenido cruzado:</b> Cada articulo del Consultorio sobre legalizacion debe mencionar el impacto en el valor de venta (con enlace a inmobiliaria). Cada articulo de la inmobiliaria sobre masias debe mencionar la importancia de verificar la legalidad urbanistica (con enlace al Consultorio).',
    '<b>Menu de navegacion:</b> Ambas webs deben tener un enlace visible a la otra en el menu principal: "Consultorio Urbanistico" en la inmobiliaria y "Inmobiliaria de Lujo" en el Consultorio.',
]
for item in conn_items:
    story.append(bullet(item))

story.append(Spacer(1, 8))
story.append(callout(
    '<b>Tu ventaja unica:</b> Eres la unica persona en el Bages (probablemente en toda Cataluna) que puede '
    'ofrecer el ciclo completo: detectar el problema urbanistico, resolverlo, y vender la propiedad al precio '
    'real. Ningun agente inmobiliario puede hacer lo primero. Ningun perito judicial ofrece lo tercero. '
    'Tu webs deben reflejar esta cadena de valor de forma que Google la entienda y los visitantes la perciban.'
))

# ══════════════════════════════════════════════════════════
# 7. HOJA DE RUTA PRIORITARIA
# ══════════════════════════════════════════════════════════
story.append(heading('7. Hoja de Ruta Prioritaria', s_h1, 0))
story.append(body(
    'A continuacion se presenta el plan de accion ordenado por prioridad e impacto estimado. Cada fase '
    'se basa en la anterior, por lo que es importante seguir el orden propuesto. Los plazos son estimaciones '
    'basadas en la complejidad de cada tarea y el impacto esperado en el posicionamiento. Las tareas marcadas '
    'como de alta prioridad son aquellas que representan mejoras inmediatas y significativas en como Google '
    'indexa y muestra tus webs en los resultados de busqueda.'
))

road_headers = ['Fase', 'Accion', 'Web', 'Impacto SEO', 'Plazo']
road_rows = [
    ['1', Paragraph('Migrar a dominio propio (.es)', s_table_cell), 'Ambas', priority_badge('Alta'), '1-2 sem'],
    ['1', Paragraph('Implementar Schema JSON-LD basico (LocalBusiness, Person, Service)', s_table_cell), 'Ambas', priority_badge('Alta'), '1 sem'],
    ['1', Paragraph('Agregar meta descriptions unicas por pagina', s_table_cell), 'Inmobiliaria', priority_badge('Alta'), '2 dias'],
    ['1', Paragraph('Configurar Open Graph + Twitter Cards', s_table_cell), 'Ambas', priority_badge('Alta'), '2 dias'],
    ['1', Paragraph('Generar sitemap.xml + robots.txt', s_table_cell), 'Ambas', priority_badge('Alta'), '1 dia'],
    ['1', Paragraph('Agregar canonical URLs', s_table_cell), 'Ambas', priority_badge('Alta'), '1 dia'],
    ['2', Paragraph('Crear 5 paginas de municipio optimizadas', s_table_cell), 'Inmobiliaria', priority_badge('Alta'), '2-3 sem'],
    ['2', Paragraph('Agregar FAQPage schema en servicios', s_table_cell), 'Consultorio', priority_badge('Media'), '3 dias'],
    ['2', Paragraph('Conectar ambas webs (menu + enlaces cruzados)', s_table_cell), 'Ambas', priority_badge('Media'), '1 sem'],
    ['2', Paragraph('Publicar 4 articulos de contenido de decision', s_table_cell), 'Ambas', priority_badge('Alta'), '4 sem'],
    ['3', Paragraph('Crear las 29 paginas de municipio restantes', s_table_cell), 'Inmobiliaria', priority_badge('Media'), '6-8 sem'],
    ['3', Paragraph('Implementar HowTo schema en procesos', s_table_cell), 'Consultorio', priority_badge('Media'), '1 sem'],
    ['3', Paragraph('Agregar sistema de busqueda de propiedades', s_table_cell), 'Inmobiliaria', priority_badge('Media'), '4-6 sem'],
    ['3', Paragraph('Implementar hreflang (es/ca)', s_table_cell), 'Ambas', priority_badge('Baja'), '2 sem'],
    ['3', Paragraph('Crear perfiles Google Business Profile', s_table_cell), 'Ambas', priority_badge('Alta'), '1 dia'],
]
story.append(Spacer(1, 6))
story.append(make_table(road_headers, road_rows, [0.5, 2.5, 0.9, 0.7, 0.7]))
story.append(Spacer(1, 6))
story.append(Paragraph('Tabla 5: Hoja de ruta priorizada por fase, impacto y plazo estimado', s_caption))

# ══════════════════════════════════════════════════════════
# 8. VENTAJA COMPETITIVA LOCAL
# ══════════════════════════════════════════════════════════
story.append(heading('8. Tu ventaja competitiva en el Bages', s_h1, 0))
story.append(body(
    'Es fundamental entender que tu posicion en el mercado del Bages es mucho mas fuerte de lo que tu web '
    'refleja actualmente. Joe Luciano compite en un mercado saturado (North Shore de Massachusetts esta lleno '
    'de agentes con webs profesionales). Tu operas en un mercado donde la competencia digital es practicamente '
    'nula. A continuacion se detallan las ventajas competitivas que tienes y que tu web debe comunicar '
    'de forma que tanto Google como los clientes potenciales las entiendan claramente.'
))

adv_headers = ['Tu ventaja', 'Competencia en el Bages', 'Como reflejarlo en la web']
adv_rows = [
    ['Unica Perito Judicial Urbanistico con web propia', Paragraph('Ningun otro perito del Bages tiene posicionamiento web', s_table_cell), 
     'Schema LegalService + caso de exito + posicionamiento ASPEJURE'],
    ['API colegiada + PJU + SaaS', Paragraph('Otros agentes solo tienen API', s_table_cell), 
     'Triple credencial visible + badges + enlaces a SmartValora/ValoraFiscal'],
    ['Ciclo completo: peritaje + legalizacion + venta', Paragraph('Agentes solo venden, peritos solo informan', s_table_cell), 
     'Proceso visual de 4 pasos + enlaces cruzados entre webs'],
    ['29 municipios mapeados con POUM', Paragraph('Nadie mas tiene esta informacion centralizada', s_table_cell), 
     'Paginas individuales + mapa interactivo + schema por municipio'],
    ['IA consultorio urbanistico', Paragraph('Nadie ofrece esto en Espana', s_table_cell), 
     'FAQPage schema + CTA prominente + caso de uso en homepage'],
    ['Red internacional (Nest Seekers, Colibree)', Paragraph('Inmobiliarias locales sin reach global', s_table_cell), 
     'Schema con sameAs + logos de partners + seccion de red internacional'],
]
story.append(Spacer(1, 6))
story.append(make_table(adv_headers, adv_rows, [1.5, 1.5, 2.0]))
story.append(Spacer(1, 6))
story.append(Paragraph('Tabla 6: Ventajas competitivas de Ana Epitie en el mercado del Bages', s_caption))

story.append(Spacer(1, 12))
story.append(callout(
    '<b>Reflexion final:</b> Joe Luciano construyo joes.homes desde cero, con sus propias manos, y ahora '
    'domina su mercado local. Tu tienes algo que Joe no tiene: una diferenciacion profesional que nadie mas '
    'puede replicar (Perito Judicial + API + SaaS + red internacional). Lo que te falta no es diferenciacion, '
    'es visibilidad. Implementa los cambios de la Fase 1 y en 4-6 semanas veras resultados tangibles en '
    'como Google indexa y muestra tus webs. El mercado del Bages te esta esperando. Solo necesitas que te encuentren.'
))

# ── Build ──
doc.multiBuild(story)
print('PDF generated:', OUTPUT)
