export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  keywords: string[];
  content: string; // HTML content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "legalizacion-obras-sin-licencia-manresa",
    title: "Legalización de Obras sin Licencia en Manresa: Lo que Nadie le Cuenta",
    description: "Si tiene una construcción sin licencia en Manresa o el Bages, el reloj está corriendo. Descubra por qué actuar ahora puede salvar su propiedad.",
    category: "Legalización",
    categorySlug: "legalizacion",
    date: "2026-05-20",
    readTime: "8 min",
    keywords: ["legalización obras sin licencia", "Manresa", "Bages", "obra ilegal", "permiso obras"],
    content: `
      <p>Manresa y toda la comarca del Bages esconden un problema silencioso que afecta a miles de propietarios: construcciones realizadas sin la licencia pertinente. Ampliaciones de masías, naves agrícolas convertidas en viviendas, porches cerrados sin permiso, piscinas instaladas de forma irregular... La lista es larga y las consecuencias, devastadoras.</p>

      <h2>¿Por qué es tan peligroso tener una obra sin licencia?</h2>
      <p>Una construcción sin licencia no es simplemente un "trámite pendiente". Es una vulneración de la normativa urbanística que puede derivar en sanciones económicas de hasta el 6% del valor de la obra, órdenes de demolición, o la imposibilidad de transmitir la propiedad. Y lo que muchos no saben es que el tiempo no cura este problema: en muchos casos, la administración puede actuar incluso décadas después de la construcción.</p>
      <p>Cuando un propietario intenta vender una finca con construcciones irregulares, el comprador se encuentra con una sorpresa: el registro de la propiedad no refleja esa realidad, el banco no financia, y la operación se cae. O peor aún, se cierra a un precio de derribo que puede suponer una pérdida del 40% del valor real del inmueble.</p>

      <h2>La realidad del Bages: un territorio especialmente vulnerable</h2>
      <p>El Bages es una comarca con una particularidad urbanística muy marcada: una alta densidad de masías, fincas rústicas y urbanizaciones que crecieron de forma desordenada durante décadas. El POUM (Plan de Ordenación Urbanística Municipal) de cada municipio establece qué se puede construir y dónde, pero la realidad del terreno muchas veces no coincide con lo que el papel dice.</p>
      <p>Esto significa que una construcción que "siempre ha estado ahí" puede estar incumpliendo la normativa vigente. Y el problema se agrava cuando el propietario ni siquiera es consciente de la irregularidad hasta que intenta vender, heredar o solicitar una licencia para otra obra.</p>

      <h2>¿Qué puede pasar si no hace nada?</h2>
      <p>La inacción es la peor estrategia. Las consecuencias de ignorar una obra sin licencia incluyen:</p>
      <ul>
        <li><strong>Sanciones económicas</strong> que pueden alcanzar cifras de cinco o seis dígitos según la gravedad de la infracción y el valor de lo construido.</li>
        <li><strong>Órdenes de demolición</strong> que obligan al propietario a derribar la construcción a su costa, con los costes que ello implica.</li>
        <li><strong>Inmovilización del patrimonio</strong>: no puede vender, no puede hipotecar, no puede transmitir. Su propiedad se convierte en un activo bloqueado.</li>
        <li><strong>Pérdida de valor</strong>: una propiedad con irregularidades urbanísticas pierde entre un 30% y un 50% de su valor de mercado.</li>
        <li><strong>Problemas hereditarios</strong>: cuando la propiedad pasa a los herederos, estos heredan también el problema urbanístico, que puede bloquear la partición de la herencia durante años.</li>
      </ul>

      <h2>Cada caso es completamente distinto</h2>
      <p>No existe una solución única para la legalización de obras. Cada propiedad tiene su propia realidad urbanística: el tipo de suelo en el que se ubica, la normativa municipal aplicable, la antigüedad de la construcción, el uso que se le da, la posición del ayuntamiento... Son tantas las variables que lo que funciona en un caso puede ser inviable en otro aparentemente similar.</p>
      <p>Es por eso que el primer paso imprescindible es un estudio personalizado de viabilidad. Sin ese análisis, cualquier actuación es una lotería que puede complicar aún más la situación.</p>

      <h2>El tiempo es un factor crítico</h2>
      <p>Los plazos administrativos en urbanística son estrictos y no perdonan. Un error en la documentación, un formulario mal presentado, o una alegación fuera de plazo pueden arruinar meses de trabajo y miles de euros invertidos. Además, la normativa urbanística cambia, y un caso que hoy es viable puede no serlo mañana si se aprueba una modificación del plan.</p>

      <h2>¿Qué debe hacer ahora?</h2>
      <p>Si tiene una construcción sin licencia en Manresa o cualquier municipio del Bages, la mejor decisión que puede tomar es solicitar una consulta profesional antes de que la administración actúe de oficio. Una Consulta Exprés le permitirá conocer la situación real de su propiedad y las opciones disponibles, sin compromiso.</p>
      <p>No espere a que le notifiquen una sanción. Para entonces, las opciones se habrán reducido drásticamente y los costes se habrán multiplicado.</p>
    `
  },
  {
    slug: "asimilacion-fuera-de-ordenacion-bages",
    title: "Asimilación a Fuera de Ordenación en el Bages: La Última Opción para Salvar su Propiedad",
    description: "Cuando la legalización no es posible, la asimilación a fuera de ordenación puede ser la diferencia entre conservar y perder su propiedad. Descubra si aplica a su caso.",
    category: "Legalización",
    categorySlug: "legalizacion",
    date: "2026-05-15",
    readTime: "7 min",
    keywords: ["asimilación fuera de ordenación", "AFO", "Bages", "obra ilegal", "conservación propiedad"],
    content: `
      <p>Hay construcciones que no se pueden legalizar. No importa cuánto se intente, la normativa es clara: ciertas edificaciones en suelo no urbanizable, o que incumplen de forma flagrante los parámetros del plan, simplemente no tienen cabida en el marco legal vigente. Para estos casos existe una figura que puede salvar su patrimonio: la asimilación a fuera de ordenación (AFO).</p>

      <h2>¿Qué significa exactamente "fuera de ordenación"?</h2>
      <p>Una construcción asimilada a fuera de ordenación es aquella que, sin ajustarse a la normativa urbanística, puede mantenerse en uso bajo condiciones muy específicas. No es una legalización: la construcción sigue siendo irregular. Pero es un reconocimiento administrativo de que la edificación puede seguir existiendo, con limitaciones importantes que es fundamental conocer antes de tomar cualquier decisión.</p>
      <p>Las limitaciones de una construcción en situación de AFO son significativas: no se pueden realizar obras de ampliación, no se puede reconstruir en caso de siniestro, y el uso está condicionado a la vida útil del edificio. Pero a cambio, se evita la demolición y se mantiene el valor de uso de la propiedad.</p>

      <h2>¿Cuándo es viable la asimilación a fuera de ordenación?</h2>
      <p>No todas las construcciones irregulares pueden acogerse a esta figura. Existen requisitos específicos que varían según el municipio y el tipo de suelo, y que requieren un análisis detallado de cada caso particular. Lo que en un municipio del Bages puede ser viable, en el municipio vecino puede ser imposible.</p>
      <p>Los factores determinantes son múltiples: la antigüedad de la construcción, el tipo de suelo, la intensidad de la infracción, la existencia de planes especiales, los informes técnicos disponibles... Y cada uno de estos factores puede ser interpretado de formas distintas por la administración.</p>

      <h2>Los riesgos de intentar la AFO sin asesoramiento</h2>
      <p>Muchos propietarios creen que solicitar la asimilación a fuera de ordenación es simplemente rellenar un formulario y esperar. Nada más lejos de la realidad. Un expediente de AFO mal planteado puede tener consecuencias catastróficas:</p>
      <ul>
        <li><strong>Denegación del expediente</strong>: si la documentación no es correcta o la argumentación es débil, la administración rechazará la solicitud, y la construcción quedará en una situación de indefensión total.</li>
        <li><strong>Activación de expediente sancionador</strong>: al presentar la solicitud, el propietario está reconociendo la existencia de la irregularidad. Si el expediente de AFO se deniega, el ayuntamiento tiene todos los elementos para abrir un procedimiento sancionador.</li>
        <li><strong>Pérdida de opciones alternativas</strong>: un intento fallido de AFO puede cerrar la puerta a otras soluciones que habrían sido viables con una estrategia diferente.</li>
        <li><strong>Alertar a la administración</strong>: antes de pasar desapercibida, la construcción ahora está en el radar del ayuntamiento.</li>
      </ul>

      <h2>La importancia del orden de las actuaciones</h2>
      <p>El orden en que se plantean las soluciones urbanísticas es determinante. En muchos casos, la AFO no debe ser la primera opción sino la última, después de haber agotado las vías de legalización. Y en otros casos, es exactamente al revés. Solo un análisis profundo de la situación particular puede determinar la secuencia correcta de actuaciones.</p>
      <p>La experiencia en el Bages demuestra que los ayuntamientos de la comarca tienen criterios muy distintos entre sí. Lo que en Manresa es una práctica habitual, en Sallent o Navàs puede ser una vía muerta. Conocer la posición de cada administración es clave para elegir la estrategia correcta.</p>

      <h2>¿Le afecta este problema?</h2>
      <p>Si tiene una construcción en el Bages que sabe o sospecha que es irregular, no asuma que la asimilación a fuera de ordenación es la solución — ni que no lo es. Cada caso requiere un estudio individualizado que determine las opciones reales disponibles y la secuencia de actuaciones más favorable para sus intereses.</p>
      <p>Una Consulta Exprés puede marcar la diferencia entre conservar su propiedad y perderla. No tome decisiones sin información profesional.</p>
    `
  },
  {
    slug: "herencia-con-conflicto-urbanistico-bages",
    title: "Herencias con Conflicto Urbanístico en el Bages: Cuando el Patrimonio se Convierte en Problema",
    description: "El 73% de las herencias con inmuebles en el Bages presentan conflictos urbanísticos. Descubra cómo desbloquear su herencia antes de que sea demasiado tarde.",
    category: "Herencias",
    categorySlug: "herencias",
    date: "2026-05-10",
    readTime: "9 min",
    keywords: ["herencia urbanística", "conflicto herencia", "Bages", "peritación herencia", "partición herencia"],
    content: `
      <p>La herencia de una propiedad en el Bages debería ser un trámite de transmisión patrimonial. Pero cuando el inmueble tiene irregularidades urbanísticas — y la realidad es que la mayoría las tienen — la herencia se convierte en un laberinto legal que puede bloquear la partición durante años y enfrentar a los herederos entre sí.</p>

      <h2>La realidad de las herencias en el Bages</h2>
      <p>Las masías, fincas rústicas y urbanizaciones del Bages son herencias que arrastran décadas, y en muchos casos siglos, de modificaciones realizadas sin la licencia pertinente. Ampliaciones, cambios de uso, naves adaptadas, segundas viviendas... Lo que en su día fue una mejora se convierte, al transmitir la propiedad, en un obstáculo insalvable para los herederos.</p>
      <p>El problema se manifiesta cuando los herederos intentan formalizar la transmisión: el notario requiere certificaciones urbanísticas, el registro de la propiedad exige que la descripción catastral coincida con la realidad, y los bancos condicionan la financiación a la regularidad urbanística completa. Si algo no cuadra, todo se para.</p>

      <h2>Tipos de conflictos urbanísticos en herencias</h2>
      <p>Los escenarios más frecuentes que encontramos en el Bages incluyen:</p>
      <ul>
        <li><strong>Discrepancia entre catastro y registro</strong>: la descripción de la propiedad no coincide entre ambas instituciones, lo que imposibilita la inscripción de la herencia.</li>
        <li><strong>Construcciones no declaradas</strong>: ampliaciones o edificaciones que figuran en el terreno pero no en la documentación registral.</li>
        <li><strong>Cambios de uso no autorizados</strong>: una masía agrícola transformada en vivienda sin el cambio de uso correspondiente.</li>
        <li><strong>Suelo con calificación incompatible</strong>: la construcción se encuentra en un suelo cuyo plan no permite el uso actual.</li>
        <li><strong>Procedimientos sancionadores abiertos</strong>: el causante dejó pendientes expedientes urbanísticos que ahora pasan a los herederos.</li>
      </ul>
      <p>Cada uno de estos escenarios requiere un abordaje específico, y la combinación de varios de ellos en una misma herencia es lo más habitual.</p>

      <h2>Las consecuencias de no actuar</h2>
      <p>Cuando una herencia queda bloqueada por conflictos urbanísticos, los efectos se multiplican con el tiempo:</p>
      <ul>
        <li><strong>Impuestos sin beneficio</strong>: los herederos deben pagar el impuesto de sucesiones por un patrimonio que no pueden disponer.</li>
        <li><strong>Deterioro del inmueble</strong>: mientras la herencia está bloqueada, nadie asume el mantenimiento y la propiedad se degrada.</li>
        <li><strong>Conflictos familiares</strong>: la falta de resolución genera tensiones entre herederos que pueden derivar en litigios costosos.</li>
        <li><strong>Pérdida de oportunidades de venta</strong>: los compradores interesados se retiran al descubrir las irregularidades.</li>
        <li><strong>Agravamiento del problema urbanístico</strong>: la administración puede actuar de oficio mientras la propiedad está en situación de indefensión.</li>
      </ul>

      <h2>Por qué necesita un perito judicial urbanístico</h2>
      <p>En procedimientos de herencia con conflicto urbanístico, el juzgado requiere un informe pericial emitido por un profesional homologado. Un perito judicial urbanístico no solo valora la situación: determina las opciones reales de regularización, cuantifica el impacto de las irregularidades en el valor del inmueble, y proporciona al juez los elementos técnicos necesarios para resolver la partición.</p>
      <p>Sin un informe pericial, el juez carece de la información técnica para tomar decisiones, el procedimiento se alarga indefinidamente, y los herederos soportan los costes de un litigio que podría resolverse en meses con el asesoramiento adecuado.</p>

      <h2>¿Tiene una herencia bloqueada?</h2>
      <p>Si está esperando la partición de una herencia que incluye inmuebles con irregularidades urbanísticas en el Bages, cada día que pasa es un día de costes y riesgos innecesarios. Una Consulta Exprés le permitirá conocer la situación real de la propiedad y las opciones para desbloquearla. No espere a que el conflicto se agrande: la solución existe, pero requiere actuación profesional inmediata.</p>
    `
  },
  {
    slug: "comprar-masia-obras-ilegales-riesgos",
    title: "Comprar una Masía con Obras Ilegales en Cataluña: Los Riesgos que el Vendedor no le Contará",
    description: "Las masías del Bages son una oportunidad de inversión, pero muchas esconden irregularidades urbanísticas que pueden convertir su sueño en una pesadilla legal.",
    category: "Compra-venta",
    categorySlug: "compra-venta",
    date: "2026-05-05",
    readTime: "8 min",
    keywords: ["comprar masía", "obras ilegales", "riesgo compra", "Bages", "irregularidad urbanística", "peritación previa"],
    content: `
      <p>Comprar una masía en el Bages es, para muchos, la materialización de un sueño: naturaleza, espacio, tranquilidad. Pero detrás de la piedra vista y los vigas de madera se esconde una realidad que pocos compradores conocen y menos vendedores están dispuestos a revelar: un porcentaje alarmante de masías en la comarca del Bages presenta irregularidades urbanísticas de diversa gravedad.</p>

      <h2>Lo que el vendedor no le dice</h2>
      <p>El vendedor de una masía le mostrará los encantos de la propiedad: los gruesos muros de piedra, la vista al Montserrat, el huerto, la posibilidad de reforma. Lo que probablemente no le contará es que la ampliación de los años 90 se hizo sin licencia, que la segunda vivienda anexa está en suelo rústico no urbanizable, o que el pozo y la piscina carecen de los permisos correspondientes.</p>
      <p>Y es que, en la mayoría de los casos, el propio vendedor desconoce la gravedad de estas irregularidades. Heredó la propiedad, la ha usado durante años sin problemas, y asume que si "siempre ha estado así", no puede haber nada malo. El problema aparece cuando usted, como comprador, intenta formalizar la operación y descubre que el banco no financia, el notario requiere documentación que no existe, y el registro no puede inscribir la realidad física de la finca.</p>

      <h2>Las irregularidades más frecuentes en masías del Bages</h2>
      <ul>
        <li><strong>Ampliaciones sin licencia</strong>: la masía original ocupaba 150 m², pero hoy tiene 350 m² gracias a ampliaciones que nunca se legalizaron.</li>
        <li><strong>Cambio de uso no autorizado</strong>: una masía agrícola transformada en vivienda de uso residencial sin el correspondiente cambio de calificación.</li>
        <li><strong>Construcciones auxiliares irregulares</strong>: naves, almacenes, porches o segundas viviendas construidas sin permiso en suelo rústico.</li>
        <li><strong>Instalaciones sin legalizar</strong>: piscinas, pozos, fosas sépticas, instalaciones eléctricas que no cuentan con la autorización pertinente.</li>
        <li><strong>Accesos no registrados</strong>: caminos de acceso a la finca que atraviesan suelo público o de terceros sin servidumbre registrada.</li>
      </ul>

      <h2>El coste real de las irregularidades</h2>
      <p>Una masía con irregularidades urbanísticas puede parecer una ganga en el precio, pero el coste real es muy otro:</p>
      <ul>
        <li><strong>Imposibilidad de financiación</strong>: los bancos no conceden hipotecas sobre inmuebles con discrepancias urbanísticas significativas.</li>
        <li><strong>Descuento obligado</strong>: si encuentra un comprador que acepte las irregularidades, el precio se reducirá entre un 30% y un 50%.</li>
        <li><strong>Costes de legalización</strong>: el proceso de regularización, si es viable, puede tardar de 6 a 18 meses y tiene un coste que depende de múltiples factores.</li>
        <li><strong>Riesgo de demolición</strong>: en los peores casos, la administración puede ordenar el derribo de las construcciones irregulares.</li>
        <li><strong>Impuestos y sanciones</strong>: las legalizaciones conllevan pagos al ayuntamiento que pueden ser sustanciales.</li>
      </ul>

      <h2>La peritación previa: la mejor inversión antes de comprar</h2>
      <p>Antes de firmar cualquier arras sobre una masía en el Bages, una peritación urbanística previa puede salvarle de una decisión desastrosa. Un informe pericial determinará la situación real de la propiedad: qué construcciones son regulares, cuáles no, cuáles son legalizables, y cuáles representan un riesgo insalvable.</p>
      <p>Este informe le dará la posición de negociación necesaria para ajustar el precio a la realidad urbanística de la finca, o para retirarse de la operación si los riesgos son demasiado grandes. En cualquier caso, la inversión en una peritación previa es una fracción de lo que perdería si comprara a ciegas.</p>

      <h2>¿Está pensando en comprar una masía?</h2>
      <p>Si está considerando la compra de una masía o finca rústica en Manresa o cualquier municipio del Bages, no firme nada sin antes conocer la situación urbanística real de la propiedad. Una Consulta Exprés le dará la información que necesita para tomar una decisión con seguridad. No arriesgue su inversión: la información profesional es su mejor herramienta de negociación.</p>
    `
  },
  {
    slug: "suelo-urbanizable-rustico-diferencias-bages",
    title: "Suelo Urbanizable vs Suelo Rústico en el Bages: Por Qué esta Diferencia le Puede Costar la Propiedad",
    description: "La calificación del suelo determina qué puede hacer con su propiedad. Un error de interpretación puede llevarle a construir donde no debe o a perder lo que ya tiene.",
    category: "Urbanismo",
    categorySlug: "urbanismo",
    date: "2026-04-28",
    readTime: "8 min",
    keywords: ["suelo urbanizable", "suelo rústico", "calificación suelo", "Bages", "POUM", "plan urbanístico"],
    content: `
      <p>Una de las confusiones más costosas en el ámbito urbanístico es la que rodea a la calificación del suelo. Muchos propietarios en el Bages creen tener suelo urbanizable cuando en realidad tienen suelo rústico, o viceversa. Y las consecuencias de esta confusión no son un simple error administrativo: pueden traducirse en sanciones, demoliciones y pérdidas patrimoniales de cientos de miles de euros.</p>

      <h2>¿Por qué es tan importante la calificación del suelo?</h2>
      <p>La calificación del suelo determina absolutamente todo lo que puede y no puede hacer con su propiedad: qué tipo de construcciones permite, qué usos son admisibles, qué edificabilidad máxima tiene, qué retranqueos debe respetar, qué infraestructuras son necesarias... Es, en definitiva, la regla del juego. Y si no conoce la regla, no puede jugar.</p>
      <p>El problema es que la calificación del suelo no es estática: cambia con las revisiones de los planes urbanísticos. Un suelo que era rústico puede pasar a urbanizable, y uno urbanizable puede revertir a rústico. Estos cambios pueden convertir una inversión sensata en un desastre o, afortunadamente, multiplicar el valor de un terreno. Pero solo si se sabe interpretar correctamente.</p>

      <h2>Las consecuencias de construir en suelo equivocado</h2>
      <p>Las sanciones por construir en un suelo cuya calificación no lo permite son de las más graves en el ámbito urbanístico:</p>
      <ul>
        <li><strong>Orden de demolición</strong>: la administración puede ordenar la demolición de lo construido a costa del propietario.</li>
        <li><strong>Restitución del terreno</strong>: además del derribo, se puede exigir la reposición del terreno a su estado original.</li>
        <li><strong>Multas coercitivas</strong>: si no cumple la orden de demolición, se le imponen multas periódicas hasta que la ejecute.</li>
        <li><strong>Inhabilitación para licencias</strong>: en casos graves, el propietario puede ser inhabilitado para obtener nuevas licencias.</li>
        <li><strong>Responsabilidad penal</strong>: en determinados supuestos de grave atentado contra la ordenación urbanística, puede haber responsabilidad penal.</li>
      </ul>

      <h2>El POUM: el documento que todo propietario debe conocer (pero no interpretar solo)</h2>
      <p>El Plan de Ordenación Urbanística Municipal (POUM) es el documento que establece la calificación del suelo y las normas que lo regulan en cada municipio. Cada municipio del Bages tiene su propio POUM, y las diferencias entre ellos son significativas. Lo que el POUM de Manresa permite puede estar prohibido en el de Sant Fruitós de Bages, y viceversa.</p>
      <p>El POUM es un documento técnico complejo que incluye normas urbanísticas, catálogos de protección, estudios de detalle, y normativa sectorial. Su interpretación requiere formación específica y experiencia práctica. Un propietario que intente interpretar el POUM por su cuenta puede llegar a conclusiones erróneas con consecuencias gravísimas.</p>

      <h2>Los cambios de calificación: una oportunidad o una trampa</h2>
      <p>Las revisiones del POUM pueden cambiar la calificación del suelo de una finca. Esto puede ser una oportunidad extraordinaria — un suelo rústico que pasa a urbanizable multiplica su valor — o una trampa mortal — un suelo urbanizable que revierte a rústico pierde la mayor parte de su valor. En ambos casos, la clave está en anticiparse a los cambios y actuar en consecuencia.</p>
      <p>Pero anticiparse requiere conocer los procesos de revisión del plan, las alegaciones que se pueden presentar, y los plazos para hacerlo. Todo un universo técnico que escapa al propietario no especializado y que, mal gestionado, puede suponer la pérdida de derechos valiosos.</p>

      <h2>¿Conoce la calificación real de su suelo?</h2>
      <p>Si tiene una propiedad en el Bages y no está completamente seguro de su calificación urbanística, no asuma nada. La consulta de la calificación del suelo es el primer paso para cualquier decisión sobre su propiedad, y requiere un análisis profesional que tenga en cuenta no solo el POUM vigente sino también las modificaciones en trámite y la práctica administrativa del municipio.</p>
      <p>Una Consulta Exprés le permitirá conocer la situación urbanística real de su finca y las opciones disponibles. No construya, no venda, no compre sin antes verificar la calificación del suelo con un profesional.</p>
    `
  },
  {
    slug: "informe-pericial-judicial-cuando-necesitas-uno",
    title: "Informe Pericial Judicial Urbanístico: Cuándo lo Necesita y Por Qué no Puede Prescindir de Él",
    description: "En procedimientos judiciales que involucran inmuebles, el informe pericial urbanístico no es opcional: es la prueba que determina el resultado del caso.",
    category: "Peritación",
    categorySlug: "peritacion",
    date: "2026-04-20",
    readTime: "7 min",
    keywords: ["informe pericial judicial", "perito urbanístico", "peritación judicial", "Manresa", "Bages", "LEC"],
    content: `
      <p>Cuando un procedimiento judicial involucra una propiedad inmobiliaria con cuestiones urbanísticas — y en el Bages, son la mayoría — el informe pericial judicial urbanístico se convierte en la pieza clave del caso. Sin él, el juez carece de los elementos técnicos para tomar una decisión fundamentada, y las partes litigan a ciegas con consecuencias económicas que pueden ser devastadoras.</p>

      <h2>¿Qué es un informe pericial judicial urbanístico?</h2>
      <p>Es un documento técnico emitido por un perito judicial homologado que analiza la situación urbanística de un inmueble y emite conclusiones con validez jurídica. A diferencia de un informe técnico ordinario, el informe pericial judicial se rige por la Ley de Enjuiciamiento Civil y tiene consideración de prueba pericial en un procedimiento judicial.</p>
      <p>Esto significa que sus conclusiones son vinculantes para el juez salvo que se demuestre lo contrario mediante contradicción pericial, y que el perito que lo emite puede ser llamado a ratificarlo en el juicio. No es un simple documento: es una prueba judicial.</p>

      <h2>Situaciones que requieren un informe pericial</h2>
      <p>Los escenarios más frecuentes en los que un informe pericial urbanístico es imprescindible incluyen:</p>
      <ul>
        <li><strong>Procedimientos de herencia</strong>: cuando la herencia incluye inmuebles con irregularidades y los herederos no se ponen de acuerdo sobre el valor o la viabilidad de regularización.</li>
        <li><strong>Divisiones de cosa común</strong>: cuando varios copropietarios quieren dividir una finca y es necesario determinar las posibilidades urbanísticas de cada parcela resultante.</li>
        <li><strong>Ejecuciones hipotecarias</strong>: cuando el banco ejecuta una hipoteca sobre un inmueble con irregularidades y es necesario determinar su valor real.</li>
        <li><strong>Procedimientos de responsabilidad</strong>: cuando una construcción defectuosa o una irregularidad urbanística causa daños a terceros.</li>
        <li><strong>Contiendas administrativas</strong>: cuando el propietario recurre una sanción urbanística o una orden de demolición.</li>
        <li><strong>Procesos de expropiación</strong>: cuando la administración expropia total o parcialmente una finca y es necesario determinar el justiprecio.</li>
      </ul>

      <h2>Lo que un informe pericial puede cambiar en su caso</h2>
      <p>Un informe pericial bien elaborado puede ser la diferencia entre ganar y perder un procedimiento judicial. Determina el valor real del inmueble — no el valor catastral, que suele ser muy inferior, ni el valor de mercado, que no tiene en cuenta las irregularidades — y cuantifica el impacto de las cuestiones urbanísticas en el precio.</p>
      <p>En procesos de herencia, un informe pericial puede acelerar la partición en meses o años. En ejecuciones hipotecarias, puede evitar que el deudor pierda la propiedad por una valoración incorrecta. En recursos de sanciones, puede demostrar que la infracción no es tan grave como la administración sostiene.</p>

      <h2>El riesgo de un informe pericial deficiente</h2>
      <p>No todos los informes periciales son iguales. Un informe deficiente — incompleto, mal argumentado, o emitido por un profesional sin la cualificación adecuada — puede ser contraproducente: el juez lo desestima, la parte contraria lo desacredita fácilmente, y el resultado es peor que si no se hubiera presentado.</p>
      <p>El perito judicial urbanístico debe estar homologado por el correspondiente colegio profesional y debe contar con experiencia demostrable en el tipo de caso de que se trate. En el ámbito del urbanismo, la experiencia en el territorio — conocer los POUM, la práctica administrativa, las particularidades de cada municipio — es un valor incalculable que no se sustituye con formación teórica.</p>

      <h2>¿Tiene un procedimiento judicial que involucra un inmueble?</h2>
      <p>Si está involucrado en un procedimiento judicial que afecta a una propiedad en el Bages, no espere a que el juez le requiera un informe pericial. La preparación anticipada del informe le dará ventaja procesal y le permitirá tomar decisiones estratégicas con información completa. Una Consulta Exprés le permitirá evaluar la pertinencia y el alcance del informe pericial que su caso necesita.</p>
    `
  },
  {
    slug: "disciplina-urbanistica-sanciones-manresa",
    title: "Disciplina Urbanística y Sanciones en Manresa: Lo que la Administración Puede Hacerle y Cómo Defenderse",
    description: "Si ha recibido una notificación del ayuntamiento por una infracción urbanística, el tiempo corre en su contra. Conozca los mecanismos de defensa antes de que sea tarde.",
    category: "Disciplina",
    categorySlug: "disciplina",
    date: "2026-04-15",
    readTime: "9 min",
    keywords: ["disciplina urbanística", "sanción urbanística", "Manresa", "Bages", "infracción urbanística", "orden demolición"],
    content: `
      <p>Recibir una notificación del ayuntamiento por una supuesta infracción urbanística es una de las experiencias más estresantes que puede vivir un propietario. Y la razón es sencilla: las sanciones urbanísticas están entre las más severas del ordenamiento jurídico administrativo, y los plazos para defenderse son breves e improrrogables.</p>

      <h2>¿Qué puede hacer la administración?</h2>
      <p>Los poderes de la administración en materia de disciplina urbanística son amplios y contundentes:</p>
      <ul>
        <li><strong>Inspección</strong>: la administración puede inspeccionar su propiedad sin necesidad de autorización judicial, con las limitaciones que marca la ley pero con un alcance amplio.</li>
        <li><strong>Suspensión de obras</strong>: si detecta obras en curso sin licencia, puede ordenar su suspensión inmediata.</li>
        <li><strong>Orden de demolición</strong>: puede ordenar el derribo de construcciones irregulares a costa del propietario.</li>
        <li><strong>Multas coercitivas</strong>: si no cumple la orden, se le imponen multas periódicas que se acumulan hasta la ejecución.</li>
        <li><strong>Restitución</strong>: puede exigir la reposición del terreno a su estado anterior a la construcción.</li>
        <li><strong>Inscripción registral</strong>: puede inscribir la infracción en el registro de la propiedad, bloqueando cualquier operación sobre el inmueble.</li>
      </ul>

      <h2>Los plazos: su peor enemigo</h2>
      <p>En los procedimientos de disciplina urbanística, los plazos son el factor más crítico. Las alegaciones y recursos deben presentarse en ventanas temporales muy cortas, y un solo día de retraso puede cerrar una vía de defensa de forma irreversible. El problema se agrava porque la notificación puede llegar en cualquier momento, y si no la recoge personalmente, los plazos empiezan a contar igualmente.</p>
      <p>Muchos propietarios pierden sus opciones de defensa simplemente por no actuar a tiempo. O por actuar sin la información adecuada: presentar una alegación genérica cuando se necesitaba una argumentación técnica específica, o recurrir por la vía equivocada cuando existía una opción más favorable.</p>

      <h2>Las fases del procedimiento sancionador</h2>
      <p>Un procedimiento de disciplina urbanística atraviesa varias fases, cada una con sus propias oportunidades de defensa y sus plazos críticos. La estrategia de defensa debe adaptarse a cada fase, y las decisiones tomadas en una condicionan las opciones disponibles en las siguientes. Un error en la fase inicial puede cerrar todas las vías de defensa posteriores.</p>
      <p>Es fundamental comprender que cada fase requiere un tipo de respuesta distinta: alegaciones técnicas en la propuesta de resolución, argumentos jurídicos en el recurso de reposición, pruebas periciales en la vía contencioso-administrativa. Presentar la respuesta equivocada en la fase equivocada es como tomar el medicamento incorrecto: no solo no cura, puede empeorar el problema.</p>

      <h2>¿Tiene más opciones de las que cree?</h2>
      <p>Aunque una notificación de infracción urbanística parece una sentencia, en la práctica existen múltiples vías de defensa que un profesional con experiencia puede articular. Desde la discrepancia en la calificación de la infracción hasta la prescripción del procedimiento, desde la viabilidad de legalización alternativa hasta la negociación con la administración para una solución consensuada.</p>
      <p>Pero estas opciones solo están disponibles si se actúa con rapidez y con el asesoramiento adecuado. Cada día que pasa sin actuar es un día menos para preparar la defensa, y una opción más que se cierra.</p>

      <h2>¿Ha recibido una notificación urbanística?</h2>
      <p>Si ha recibido cualquier tipo de notificación del ayuntamiento de Manresa o cualquier municipio del Bages relacionada con una infracción urbanística, no espere. Los plazos son cortos y las consecuencias, graves. Una Consulta Exprés le permitirá conocer sus opciones de defensa y actuar antes de que sea tarde. Recuerde: en disciplina urbanística, el que llama primero, tiene más opciones.</p>
    `
  },
  {
    slug: "vender-propiedad-irregularidades-urbanisticas",
    title: "Vender una Propiedad con Irregularidades Urbanísticas: Por Qué el Precio de Derribo No es su Única Opción",
    description: "Le dijeron que su propiedad vale un 40% menos por las irregularidades. Pero nadie le explicó que existen alternativas que pueden recuperar ese valor.",
    category: "Compra-venta",
    categorySlug: "compra-venta",
    date: "2026-04-10",
    readTime: "8 min",
    keywords: ["vender propiedad irregular", "descuento urbanístico", "valoración inmueble", "Bages", "irregularidad urbanística"],
    content: `
      <p>Cuando un propietario descubre que su inmueble tiene irregularidades urbanísticas, la primera reacción suele ser el pánico. La segunda, resignarse a vender con un descuento que puede alcanzar el 40% del valor de mercado. Lo que nadie le explica es que, en muchos casos, ese descuento es completamente evitable si se actúa con la estrategia correcta y en el momento adecuado.</p>

      <h2>Por qué los compradores piden un 40% de descuento</h2>
      <p>Un comprador informado sabe que una propiedad con irregularidades urbanísticas arrastra un conjunto de riesgos: imposibilidad de financiación, costes de legalización inciertos, riesgo de sanciones, y limitaciones de uso. Para compensar esos riesgos, aplica un descuento que, en el mercado del Bages, se sitúa habitualmente entre el 30% y el 50% del valor que tendría la propiedad regularizada.</p>
      <p>El problema es que muchos vendedores aceptan este descuento sin cuestionarlo, creyendo que no tienen alternativas. Y en algunos casos, efectivamente, el descuento está justificado porque la irregularidad no tiene solución. Pero en muchos otros casos, la irregularidad es legalizable, y el descuento es completamente innecesario.</p>

      <h2>La estrategia que marca la diferencia</h2>
      <p>La diferencia entre vender con un 40% de descuento y vender a precio de mercado puede estar en el orden de las actuaciones. En muchos casos, la secuencia correcta es: primero resolver la irregularidad, después vender. Y aunque esto implica esperar, el resultado económico es dramáticamente superior.</p>
      <p>Pero hay casos en los que la legalización no es viable o el propietario no puede esperar. En estos escenarios, existen estrategias intermedias que permiten obtener un precio significativamente superior al precio de derribo, como la venta condicionada a la legalización en curso, o la transmisión con compromiso de regularización.</p>
      <p>La elección de la estrategia correcta depende de factores que solo un análisis profesional puede determinar: el tipo de irregularidad, su gravedad, la viabilidad de legalización, los plazos del proceso, la posición del ayuntamiento, y las circunstancias personales del vendedor.</p>

      <h2>El valor que se pierde por no actuar</h2>
      <p>Para poner las cifras en perspectiva: una masía en el Bages con un valor de mercado de 300.000€ puede venderse con un descuento del 40% (180.000€) si tiene irregularidades urbanísticas significativas. Pero si esas irregularidades son legalizables, el coste de la legalización suele ser una fracción de los 120.000€ de diferencia. En la mayoría de los casos, la inversión en legalización se recupera multiplicada por tres o por cuatro en el precio de venta.</p>

      <h2>El ciclo completo: peritaje, legalización, venta</h2>
      <p>Como Perito Judicial Urbanístico y asesora inmobiliaria, Ana Epitie ofrece un servicio integral que cubre todo el ciclo: desde la evaluación de la situación urbanística hasta la venta de la propiedad ya regularizada. Este enfoque permite al propietario maximizar el valor de su patrimonio con un único interlocutor que conoce el proceso de principio a fin.</p>
      <p>Este ciclo completo no está disponible en otro despacho del Bages, y es una ventaja competitiva que puede suponer la diferencia entre una venta a precio de derribo y una venta a precio de mercado.</p>

      <h2>¿Tiene una propiedad que no puede vender al precio que merece?</h2>
      <p>Si está considerando vender una propiedad con irregularidades urbanísticas en Manresa o el Bages, no acepte el primer descuento que le ofrezcan. Una Consulta Exprés le permitirá conocer las opciones reales para maximizar el valor de su propiedad. En muchos casos, la solución está más cerca de lo que piensa — pero requiere la estrategia correcta y el asesoramiento adecuado.</p>
    `
  },
  {
    slug: "por-que-necesita-perito-interpretar-poum",
    title: "Por Qué Necesita un Perito para Interpretar el POUM de su Municipio",
    description: "El POUM determina el futuro de su propiedad, pero su interpretación no es intuitiva. Un error puede costarle más que la propia consulta profesional.",
    category: "Urbanismo",
    categorySlug: "urbanismo",
    date: "2026-04-05",
    readTime: "7 min",
    keywords: ["POUM", "plan urbanístico", "interpretación POUM", "Manresa", "Bages", "normativa urbanística"],
    content: `
      <p>El Plan de Ordenación Urbanística Municipal (POUM) es, para su propiedad, lo que la Constitución es para un país: la norma suprema que determina qué puede y qué no puede hacer con su terreno. Y, como la Constitución, su interpretación no es tarea de aficionados. Los errores en la interpretación del POUM se pagan con sanciones, demoliciones y pérdidas patrimoniales que superan con creces el coste de una consulta profesional.</p>

      <h2>Lo que el POUM contiene (y lo que no le dicen)</h2>
      <p>Un POUM no es simplemente un mapa con colores que indican el tipo de suelo. Es un documento normativo complejo que incluye normas urbanísticas generales y particulares, ordenanzas de edificación, catálogos de bienes protegidos, estudios de detalle, programas de actuación, y normativa sectorial. Cada una de estas piezas interactúa con las demás, y una interpretación aislada de cualquiera de ellas puede llevar a conclusiones erróneas.</p>
      <p>Además, el POUM no es estático: se modifica mediante modificaciones puntuales, revisiones parciales, y estudios de detalle que pueden cambiar sustancialmente las condiciones de una parcela sin que el propietario sea consciente. Una interpretación basada en una versión desactualizada del plan es tan peligrosa como no tener interpretación alguna.</p>

      <h2>Los errores más costosos de la autointerpretación</h2>
      <p>Los propietarios que intentan interpretar el POUM por su cuenta suelen cometer errores que tienen un coste directo:</p>
      <ul>
        <li><strong>Confundir suelo urbanizable con urbanizado</strong>: el primero tiene posibilidad de desarrollo futuro, el segundo ya cuenta con infraestructuras. Construir en suelo urbanizable como si fuera urbanizado es una infracción grave.</li>
        <li><strong>Ignorar las ordenanzas particulares</strong>: las normas generales dicen una cosa, pero las ordenanzas de cada zona pueden decir otra muy distinta.</li>
        <li><strong>No considerar los planes especiales</strong>: existen planes de protección de paisaje, de prevención de riesgos, de infraestructuras, que limitan las posibilidades del suelo independientemente del POUM.</li>
        <li><strong>Desconocer la normativa sectorial</strong>: la legislación de costas, montes, aguas, patrimonio cultural, pueden imponer restricciones que el POUM no recoge explícitamente.</li>
        <li><strong>Aplicar versiones desactualizadas</strong>: los POUM se modifican constantemente, y una interpretación basada en la versión equivocada es una interpretación errónea.</li>
      </ul>

      <h2>El valor de la experiencia local</h2>
      <p>Conocer el POUM de un municipio no es solo leer el documento: es comprender cómo lo aplica la administración, qué criterios sigue en la interpretación de dudosas, qué precedentes administrativos existen, y cuál es la práctica real del departamento de urbanismo. Esta experiencia solo se adquiere trabajando en el territorio durante años, tratando con los servicios técnicos de cada ayuntamiento, y resolviendo casos reales.</p>
      <p>En el Bages, cada municipio tiene su propia idiosincrasia urbanística. Manresa no es Sallent, Navàs no es Balsareny. Lo que funciona en uno puede no funcionar en el vecino, y solo un profesional con experiencia en la comarca puede navegar estas diferencias con seguridad.</p>

      <h2>¿Debe consultar el POUM antes de actuar?</h2>
      <p>Si está pensando en construir, ampliar, cambiar de uso, subdividir, o realizar cualquier actuación sobre su propiedad en el Bages, la consulta del POUM es el paso previo imprescindible. Y no basta con leerlo: necesita una interpretación profesional que considere todas las variables aplicables a su caso particular.</p>
      <p>Una Consulta Exprés le proporcionará una interpretación profesional de la calificación y las condiciones urbanísticas de su parcela, con las implicaciones prácticas para su proyecto. No arriesgue su patrimonio ahorrando en el paso más importante del proceso.</p>
    `
  },
  {
    slug: "plazos-legalizacion-obras-cataluna",
    title: "Los Plazos de Legalización de Obras en Cataluña: Por Qué el Tiempo Juega en su Contra",
    description: "Los plazos urbanísticos no perdonan. Un error de timing puede convertir un caso viable en un problema sin solución. Conozca los plazos críticos antes de actuar.",
    category: "Legalización",
    categorySlug: "legalizacion",
    date: "2026-03-28",
    readTime: "7 min",
    keywords: ["plazos legalización", "prescripción urbanística", "Cataluña", "plazos administrativos", "obra sin licencia"],
    content: `
      <p>En el ámbito de la legalización de obras, el tiempo no es solo dinero: es la diferencia entre conservar su propiedad y perderla. Los plazos urbanísticos son estrictos, improrrogables, y en muchos casos, desconocidos por los propietarios hasta que es demasiado tarde. Y lo más paradójico es que actuar demasiado tarde es tan peligroso como actuar demasiado pronto con la estrategia equivocada.</p>

      <h2>Los plazos que condicionan su caso</h2>
      <p>Existen múltiples plazos que interactúan en un expediente de legalización, y cada uno tiene sus propias reglas:</p>
      <ul>
        <li><strong>Plazo de prescripción de la infracción</strong>: las infracciones urbanísticas graves prescriben a los 4 años, y las muy graves a los 8. Pero este plazo se interrumpe por cualquier actuación administrativa, y hay excepciones que muchos desconocen.</li>
        <li><strong>Plazo de contestación a requerimientos</strong>: cuando la administración le requiere documentación, el plazo es de 10 a 15 días hábiles. Si no contesta, se le tiene por desistido.</li>
        <li><strong>Plazo de alegaciones</strong>: ante una propuesta de resolución, tiene un plazo breve para presentar alegaciones. Fuera de plazo, no se admiten.</li>
        <li><strong>Plazo de recursos</strong>: los recursos de reposición y las demandas contencioso-administrativas tienen plazos perentorios que, si se pierden, cierran la vía de defensa.</li>
        <li><strong>Plazo de ejecución</strong>: si la administración ordena una demolición, el plazo para ejecutarla es de unos meses. Si no la ejecuta, impone multas coercitivas.</li>
      </ul>

      <h2>El mito de la prescripción</h2>
      <p>Uno de los errores más extendidos es creer que, si ha pasado suficiente tiempo, la infracción ha prescrito y ya no hay problema. La realidad es mucho más compleja: la prescripción de la infracción no implica la legalización de la obra. Aunque la administración ya no pueda sancionar, la construcción sigue siendo irregular y puede ser objeto de actuaciones de restitución. Además, la obra ilegal no prescrita impide cualquier operación registral o notarial sobre la propiedad.</p>
      <p>Y hay otro factor que muchos desconocen: la interrupción del plazo de prescripción. Cualquier actuación administrativa relacionada con la infracción — una inspección, un requerimiento, la apertura de un expediente — interrumpe el plazo y lo reinicia desde cero. Así, una infracción que parecía prescrita puede no estarlo si la administración actuó en algún momento.</p>

      <h2>Cuándo actuar y cuándo esperar</h2>
      <p>La decisión de cuándo iniciar un procedimiento de legalización es estratégica y depende de factores que varían en cada caso. En determinadas circunstancias, iniciar el proceso de forma anticipada puede activar la atención de la administración sobre una propiedad que había pasado desapercibida. En otras, esperar demasiado puede cerrar ventanas de oportunidad que se habrían podido aprovechar.</p>
      <p>La elección del momento correcto requiere un análisis de la situación completa: la posición de la administración, el estado del expediente si existe, las condiciones del POUM vigente, las modificaciones en trámite, y la situación registral y catastral. Ninguno de estos factores es intuitivo, y su interacción es lo que determina la estrategia óptima.</p>

      <h2>¿El tiempo está corriendo en su contra?</h2>
      <p>Si tiene una obra sin licencia o está pendiente de un procedimiento urbanístico, cada día cuenta. Una Consulta Exprés le permitirá evaluar la situación de plazos de su caso y determinar el momento óptimo para actuar. No deje que los plazos decidan por usted: la información profesional es la mejor inversión cuando el tiempo juega en su contra.</p>
    `
  },
  {
    slug: "perito-judicial-urbanistico-que-hace",
    title: "Perito Judicial Urbanístico: Qué Hace, Cuándo lo Necesita y Por Qué es Diferente de un Arquitecto",
    description: "El perito judicial urbanístico es una figura clave en procedimientos legales que involucran inmuebles. Conozca qué puede hacer por usted y por qué no puede sustituirlo.",
    category: "Peritación",
    categorySlug: "peritacion",
    date: "2026-03-20",
    readTime: "8 min",
    keywords: ["perito judicial urbanístico", "que hace un perito", "diferencia perito arquitecto", "Manresa", "Bages", "ASPEJURE"],
    content: `
      <p>Cuando un procedimiento judicial o administrativo involucra cuestiones urbanísticas, surge una figura que muchos propietarios desconocen: el perito judicial urbanístico. No es un arquitecto, no es un abogado, no es un aparejador. Es un profesional con una formación y una habilitación específica que lo capacita para emitir dictámenes con validez judicial en materia de urbanismo. Y en el Bages, la figura del perito judicial urbanístico es especialmente relevante dada la complejidad urbanística del territorio.</p>

      <h2>¿Qué hace exactamente un perito judicial urbanístico?</h2>
      <p>Su función principal es analizar la situación urbanística de un inmueble y emitir un informe técnico con conclusiones que el juez o la administración puede utilizar como base para sus decisiones. Pero esto es solo la punta del iceberg de un trabajo que abarca mucho más:</p>
      <ul>
        <li><strong>Análisis de la calificación del suelo</strong>: determina qué tipo de suelo es, qué usos permite, y qué edificabilidad autoriza.</li>
        <li><strong>Evaluación de la legalidad de las construcciones</strong>: identifica qué construcciones son regulares y cuáles no, y cuantifica el grado de irregularidad.</li>
        <li><strong>Estudio de viabilidad de legalización</strong>: determina si una construcción irregular puede ser legalizada y bajo qué condiciones.</li>
        <li><strong>Valoración del impacto urbanístico</strong>: cuantifica cómo las irregularidades afectan al valor del inmueble.</li>
        <li><strong>Emisión de dictámenes periciales</strong>: produce informes con validez judicial para procedimientos de herencia, ejecución hipotecaria, contencioso administrativo, etc.</li>
        <li><strong>Asistencia judicial</strong>: comparece ante el juzgado para ratificar el informe y responder a las preguntas de las partes.</li>
      </ul>

      <h2>Por qué un arquitecto no puede sustituir a un perito judicial</h2>
      <p>Es una confusión frecuente: si necesito un informe sobre un edificio, llamo a un arquitecto. Pero un arquitecto y un perito judicial urbanístico tienen funciones, formaciones y habilitaciones distintas. El arquitecto proyecta y dirige obras: su formación se centra en el diseño, la técnica constructiva y la dirección de edificación. El perito judicial urbanístico analiza, evalúa y dictamina: su formación se centra en la normativa urbanística, el derecho administrativo y la peritación judicial.</p>
      <p>Un arquitecto puede emitir un informe técnico sobre el estado de un edificio, pero no está habilitado para emitir un dictamen pericial con validez judicial en materia urbanística. Y un juez, en un procedimiento judicial, requiere precisamente esto: una prueba pericial emitida por un profesional habilitado que pueda ser ratificada en juicio.</p>
      <p>Además, la experiencia del perito judicial urbanístico en la interpretación del POUM, la normativa urbanística, y la práctica administrativa de los municipios es un activo que no se adquiere con la formación arquitectónica. Son profesiones complementarias, no sustitutivas.</p>

      <h2>La habilitación que marca la diferencia</h2>
      <p>Un perito judicial urbanístico está habilitado por los juzgados para actuar como perito en procedimientos judiciales. Esta habilitación requiere una formación específica y una colegiación que garantiza la competencia profesional. En el caso de Ana Epitie, su Diploma Numerario ASPEJURE N.º 02659 acredita su condición de perito judicial habilitado para emitir informes periciales con plena validez jurídica.</p>
      <p>Sin esta habilitación, un informe técnico carece de la consideración de prueba pericial y su valor ante el juzgado es limitado. En procedimientos donde lo que está en juego es el valor de una propiedad, una herencia, o incluso la conservación de un hogar, la diferencia entre un informe técnico y un dictamen pericial puede ser la diferencia entre ganar y perder el caso.</p>

      <h2>¿Podría necesitar un perito judicial urbanístico?</h2>
      <p>Si está involucrado en cualquier situación que afecte a la situación urbanística de su propiedad en el Bages — una herencia, una compra-venta, una sanción, una duda sobre la legalidad de una construcción — un perito judicial urbanístico puede proporcionar la información técnica que necesita para tomar decisiones con seguridad. Una Consulta Exprés le permitirá determinar si su caso requiere un informe pericial y cuál sería su alcance y coste.</p>
    `
  }
];

export const blogCategories = [
  { name: "Legalización", slug: "legalizacion" },
  { name: "Peritación", slug: "peritacion" },
  { name: "Herencias", slug: "herencias" },
  { name: "Compra-venta", slug: "compra-venta" },
  { name: "Urbanismo", slug: "urbanismo" },
  { name: "Disciplina", slug: "disciplina" },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(p => p.categorySlug === categorySlug);
}

export function getLatestPosts(count: number = 3): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}

export function getRelatedPosts(currentSlug: string, count: number = 3): BlogPost[] {
  const current = getBlogPost(currentSlug);
  if (!current) return [];
  return blogPosts
    .filter(p => p.slug !== currentSlug && p.categorySlug === current.categorySlug)
    .slice(0, count);
}
