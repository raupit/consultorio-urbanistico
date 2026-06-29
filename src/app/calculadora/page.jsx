import React, { useState } from 'react';

export default function CalculadoraSuelo() {
  const [formData, setFormData] = useState({
    municipio: '',
    superficie: '',
    coeficiente: '0.75',
    precioVenta: '',
    clasificacion: 'Urbano'
  });
  const [resultado, setResultado] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    
    const superficieParcela = parseFloat(formData.superficie);
    const coeficiente = parseFloat(formData.coeficiente);
    const precioVenta = parseFloat(formData.precioVenta);

    const techoMaximo = superficieParcela * coeficiente;

    let riesgo = "";
    if (formData.clasificacion === "Rustico") {
      riesgo = "🔴 RIESGO EXTREMO: Suelo Rústico. Edificabilidad probablemente nula o muy restringida.";
    } else if (formData.clasificacion === "Urbanizable") {
      riesgo = "🟡 PRECAUCIÓN: Suelo Urbanizable. Requiere desarrollo de Plan Parcial.";
    } else {
      riesgo = "🟢 VÍA LIBRE (Teórica): Suelo Urbano. Sujeto a ordenanzas particulares del POUM.";
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
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Simulador de Aprovechamiento y Riesgo Urbanístico</h1>
        <p className="text-lg text-gray-600">Descubre el valor oculto de tu suelo según el POUM. Matemática urbanística en tiempo real.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">1. Introduce los datos de la parcela</h2>
          <form onSubmit={handleCalculate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Clasificación del Suelo</label>
              <select 
                className={inputStyle}
                value={formData.clasificacion} 
                onChange={e => setFormData({...formData, clasificacion: e.target.value})}
              >
                <option value="Urbano">Suelo Urbano</option>
                <option value="Urbanizable">Suelo Urbanizable</option>
                <option value="Rustico">Suelo Rústico</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Superficie de la parcela (m²)</label>
              <input type="number" required placeholder="Ej: 500" className={inputStyle}
                value={formData.superficie} onChange={e => setFormData({...formData, superficie: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Coeficiente de edificabilidad (m² techo / m² parcela)</label>
              <input type="number" step="0.01" required placeholder="Ej: 0.75" className={inputStyle}
                value={formData.coeficiente} onChange={e => setFormData({...formData, coeficiente: e.target.value})} />
              <p className="text-xs text-gray-500 mt-1">*Consulta el POUM de tu municipio para saber este dato exacto.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Precio medio de venta en la zona (€/m² construido)</label>
              <input type="number" required placeholder="Ej: 2500" className={inputStyle}
                value={formData.precioVenta} onChange={e => setFormData({...formData, precioVenta: e.target.value})} />
            </div>
            <button type="submit" className="w-full bg-blue-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors">
              Calcular Valor Oculto 🔍
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">2. Resultados Orientativos</h2>
          
          {!resultado && (
            <div className="flex items-center justify-center h-full text-gray-400 text-center italic">
              <p>Introduce los datos y pulsa calcular para ver el aprovechamiento oculto y el valor residual del suelo.</p>
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
              <a href="mailto:tucorreo@consultoriourbanistico.com" className="inline-block bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors animate-pulse">
                Solicitar Informe Pericial de Viabilidad 📞
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
