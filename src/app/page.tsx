"use client";
import React, { useState } from 'react';

// --- BASE DE DATOS DE POUMs DEL BAGES (29 MUNICIPIOS) ---
// Coeficientes orientativos según normativa comarcal. Puedes ajustarlos tú como experta.
const POUMS = {
  "Manresa": { "Casco Urbano Consolidado": 0.75, "Ensanche / Eixample": 1.00, "Polígono Industrial": 1.20, "Suelo Rústico": 0.00 },
  "Cardona": { "Casco Histórico": 0.60, "Suelo Urbano": 0.70, "Suelo Urbanizable": 0.40, "Suelo Rústico": 0.00 },
  "Sallent": { "Suelo Urbano": 0.65, "Suelo Urbanizable": 0.45, "Suelo Rústico": 0.00 },
  "Artés": { "Suelo Urbano": 0.70, "Suelo Urbanizable": 0.50, "Suelo Rústico": 0.00 },
  "Navarcles": { "Suelo Urbano": 0.70, "Suelo Urbanizable": 0.50, "Suelo Rústico": 0.00 },
  "Sant Fruitós de Bages": { "Suelo Urbano": 0.70, "Suelo Urbanizable": 0.50, "Suelo Rústico": 0.00 },
  "Santpedor": { "Suelo Urbano": 0.70, "Suelo Urbanizable": 0.50, "Suelo Rústico": 0.00 },
  "Callús": { "Suelo Urbano": 0.65, "Suelo Urbanizable": 0.45, "Suelo Rústico": 0.00 },
  "Suria": { "Suelo Urbano": 0.65, "Suelo Urbanizable": 0.45, "Suelo Rústico": 0.00 },
  "Balsareny": { "Suelo Urbano": 0.65, "Suelo Urbanizable": 0.45, "Suelo Rústico": 0.00 },
  "Avinyó": { "Suelo Urbano": 0.60, "Suelo Urbanizable": 0.40, "Suelo Rústico": 0.00 },
  "Calders": { "Suelo Urbano": 0.60, "Suelo Rústico": 0.00 },
  "Mura": { "Suelo Urbano": 0.50, "Suelo Rústico Protegido": 0.00 },
  "Talamanca": { "Suelo Urbano": 0.50, "Suelo Rústico Protegido": 0.00 },
  "El Pont de Vilomara": { "Suelo Urbano": 0.65, "Suelo Urbanizable": 0.45, "Suelo Rústico": 0.00 },
  "Rajadell": { "Suelo Urbano": 0.60, "Suelo Rústico": 0.00 },
  "Sant Joan de Vilatorrada": { "Suelo Urbano": 0.75, "Suelo Urbanizable": 0.50, "Suelo Rústico": 0.00 },
  "Sant Vicenç de Castellet": { "Suelo Urbano": 0.70, "Polígono Industrial": 1.00, "Suelo Urbanizable": 0.50, "Suelo Rústico": 0.00 },
  "Fonollosa": { "Suelo Urbano": 0.60, "Suelo Rústico": 0.00 },
  "Gaià": { "Suelo Urbano": 0.50, "Suelo Rústico Protegido": 0.00 },
  "Santa Maria d'Oló": { "Suelo Urbano": 0.60, "Suelo Rústico": 0.00 },
  "Oristà": { "Suelo Urbano": 0.50, "Suelo Rústico": 0.00 },
  "Olost": { "Suelo Urbano": 0.60, "Suelo Rústico": 0.00 },
  "Prats de Lluçanès": { "Suelo Urbano": 0.65, "Suelo Urbanizable": 0.45, "Suelo Rústico": 0.00 },
  "Navàs": { "Suelo Urbano": 0.70, "Suelo Urbanizable": 0.50, "Suelo Rústico": 0.00 },
  "Castellbell i el Vilar": { "Suelo Urbano": 0.65, "Suelo Urbanizable": 0.45, "Suelo Rústico": 0.00 },
  "Castellgalí": { "Suelo Urbano": 0.65, "Suelo Urbanizable": 0.45, "Suelo Rústico": 0.00 },
  "Marganell": { "Suelo Urbano": 0.60, "Suelo Rústico": 0.00 },
  "Monistrol de Montserrat": { "Suelo Urbano": 0.65, "Suelo Rústico Protegido": 0.00 }
};

export default function CalculadoraSuelo() {
  // Municipio por defecto al entrar en la web
  const [formData, setFormData] = useState({
    municipio: 'Manresa',
    zona: 'Casco Urbano Consolidado',
    superficie: '',
    precioVenta: '',
  });
  const [resultado, setResultado] = useState(null);

  // Obtiene las zonas disponibles para el municipio seleccionado
  const zonasDisponibles = POUMS[formData.municipio] ? Object.keys(POUMS[formData.municipio]) : [];

  const handleCalculate = (e) => {
    e.preventDefault();
    
    const superficieParcela = parseFloat(formData.superficie);
    const coeficiente = POUMS[formData.municipio][formData.zona]; // Se extrae de la base de datos
    const precioVenta = parseFloat(formData.precioVenta);

    const techoMaximo = superficieParcela * coeficiente;

    let riesgo = "";
    if (coeficiente === 0) {
      riesgo = `🔴 RIESGO EXTREMO: Has seleccionado la calificación 'Suelo Rústico' en ${formData.municipio}. En esta zona la edificabilidad es nula y cualquier nueva obra es ilegal.`;
    } else if (formData.zona.includes("Urbanizable")) {
      riesgo = `🟡 PRECAUCIÓN: Has seleccionado 'Suelo Urbanizable' en ${formData.municipio}. Requiere desarrollo de Plan Parcial y cesiones antes de edificar.`;
    } else {
      riesgo = `🟢 VÍA LIBRE (Teórica): Has seleccionado 'Suelo Urbano' en ${formData.municipio}. Sujeto a ordenanzas particulares, retranqueos y alineaciones.`;
    }

    const valorMercadoTerminado = techoMaximo * precioVenta;
    const costeConstruccion = techoMaximo * 800;
    const beneficioPromotor = valorMercadoTerminado * 0.10;
    const gastosVarios = valorMercadoTerminado * 0.08;
    const valorResidualSuelo = valorMercadoTerminado - costeConstruccion - beneficioPromotor - gastosVarios;

    setResultado({
      techoMaximo: techoMaximo.toFixed(0),
      riesgo: riesgo,
      valorResidualSuelo: valorResidualSuelo > 0 ? valorResidualSuelo.toFixed(0) : 0
    });
  };

  const inputStyle = "w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900";

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen font-sans">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Auditor Urbanístico Automático</h1>
        <p className="text-lg text-gray-600">Descubre el valor oculto de tu suelo según el POUM de tu municipio. Matemática urbanística en tiempo real.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">1. Introduce los datos de la parcela</h2>
          <form onSubmit={handleCalculate} className="space-y-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Municipio (POUM del Bages)</label>
              <select 
                className={inputStyle}
                value={formData.municipio} 
                onChange={e => setFormData({...formData, municipio: e.target.value, zona: Object.keys(POUMS[e.target.value])[0]})}
              >
                {Object.keys(POUMS).map(muni => <option key={muni} value={muni}>{muni}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zona / Calificación Urbanística</label>
              <select 
                className={inputStyle}
                value={formData.zona} 
                onChange={e => setFormData({...formData, zona: e.target.value})}
              >
                {zonasDisponibles.map(zona => <option key={zona} value={zona}>{zona}</option>)}
              </select>
              <p className="text-xs text-gray-500 mt-1">*El coeficiente de edificabilidad se aplica automáticamente.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Superficie de la parcela (m²)</label>
              <input type="number" required placeholder="Ej: 500" className={inputStyle}
                value={formData.superficie} onChange={e => setFormData({...formData, superficie: e.target.value})} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Precio medio de venta en la zona (€/m² construido)</label>
              <input type="number" required placeholder="Ej: 2500" className={inputStyle}
                value={formData.precioVenta} onChange={e => setFormData({...formData, precioVenta: e.target.value})} />
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors">
              Auditar Valor Oculto 🔍
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">2. Resultados Orientativos</h2>
          
          {!resultado && (
            <div className="flex items-center justify-center h-full text-gray-400 text-center italic">
              <p>Selecciona tu municipio, introduce los m² y pulsa auditar para descubrir el aprovechamiento oculto y el valor residual del suelo.</p>
            </div>
          )}

          {resultado && (
            <div className="space-y-4 flex-grow">
              <div className={`p-4 rounded-lg border-l-4 ${resultado.riesgo.includes('🔴') ? 'bg-red-50 border-red-500' : resultado.riesgo.includes('🟡') ? 'bg-yellow-50 border-yellow-500' : 'bg-green-50 border-green-500'}`}>
                <h3 className="font-bold text-gray-800">Análisis de Riesgo Urbanístico</h3>
                <p className="text-sm text-gray-700 mt-1">{resultado.riesgo}</p>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <h3 className="font-bold text-gray-800">Aprovechamiento Oculto</h3>
                <p className="text-2xl font-extrabold text-blue-900 mt-1">{resultado.techoMaximo} m²</p>
                <p className="text-sm text-gray-600">de techo edificable máximo teórico.</p>
              </div>

              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <h3 className="font-bold text-gray-800">Valor Residual Bruto del Suelo</h3>
                <p className="text-3xl font-extrabold text-green-700 mt-1">{Number(resultado.valorResidualSuelo).toLocaleString('es-ES')} €</p>
                <p className="text-xs text-gray-500 mt-1">*(Fórmula: Valor Mercado - Costes Construcción - Beneficio Promotor - Gastos)</p>
              </div>
            </div>
          )}

          {resultado && (
            <div className="mt-6 bg-orange-100 border-2 border-orange-400 p-4 rounded-lg text-center">
              <h3 className="font-extrabold text-orange-800 text-lg">⚠️ Ojo, esto es solo matemáticas</h3>
              <p className="text-sm text-gray-700 mt-2 mb-4">El POUM puede tener servidumbres, retranqueos, afecciones de vuelo o catálogos que reduzcan este valor a cero. No te arriesgues a comprar o vender a ciegas.</p>
              <a href="mailto:ana@consultoriourbanistico.com" className="inline-block bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors animate-pulse">
                Solicitar Informe Pericial de Viabilidad 📞
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
