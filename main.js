const translations = {
  en: {
    pageTitle: 'Roberto Moreno - QA Automation & AI Quality',
    pageDescription: 'Roberto Moreno - QA automation engineer focused on reliable software and AI quality.',
    skip: 'Skip to content',
    toggleLabel: 'Switch to Spanish',
    heroEyebrow: 'QA AUTOMATION / AI QUALITY',
    heroRole: 'Senior QA Automation Engineer · AI Quality Specialist',
    heroIntro: "I'm a QA engineer from Monterrey with 9 years in software quality, including 4 years in test automation. I build browser tests and explore how AI can support testing while keeping results clear and useful.",
    scrollCue: 'Scroll to explore',
    location: 'MONTERREY, MEXICO',
    workLabel: 'MY WORK',
    workTitle: 'Selected work.',
    workIntro: 'Three projects in end-to-end automation, AI-assisted test generation, and agent evaluation.',
    agentLabKind: 'AGENTIC TESTING',
    agentLabDescription: 'An experiment that uses the official Playwright Test Agents to plan, generate, and triage cart tests on two Toolshop deployments. A rubric checks whether agent edits keep a known defect detectable.',
    agentLabNote: 'CUSTOM AGENT COMPARISON PENDING',
    aiKind: 'AI QUALITY',
    aiDescription: 'A personal prototype that pairs Playwright with Claude to explore an authorized web app and draft replayable specs plus a bug report.',
    aiNote: 'PERSONAL PROTOTYPE · NO PERFORMANCE CLAIMS',
    bbvaKind: 'E2E AUTOMATION',
    bbvaTitle: 'BBVA México Credit Card Journeys',
    bbvaDescription: 'An independent portfolio project using Playwright and TypeScript, with reusable page objects, fixtures and data-driven coverage for public credit-card journeys.',
    bbvaNote: 'INDEPENDENT PROJECT · NOT AFFILIATED WITH BBVA',
    outputsLabel: 'OUTPUTS & RESULTS',
    outputsTitle: 'Evidence from the work.',
    outputsIntro: 'Each card names the project, shows the output or result available, and explains what it demonstrates.',
    evidenceAgentLabKind: 'OFFICIAL PLAYWRIGHT TEST AGENTS',
    evidenceAgentLabTitle: 'Two generated tests caught a seeded cart defect',
    evidenceAgentLabDescription: 'Both tests passed on standard Toolshop and failed at the subtotal assertion on the deployment with seeded defects.',
    evidenceAgentLabProofLabel: 'Healer outcome',
    evidenceAgentLabProof: 'The Healer diagnosed the product defect and marked the failing test as skipped on the buggy deployment in an experimental copy. The original tests still run the assertion.',
    evidenceAgentLabLink: 'Read the run summary',
    evidenceAiProject: 'AI EXPLORATORY TESTER',
    evidenceAiKind: 'OUTPUT GENERATION IMPLEMENTED',
    evidenceAiTitle: 'Generated tests and findings report',
    evidenceAiDescription: 'The prototype can save browser flows as replayable Playwright specs and observed issues in a Markdown report.',
    evidenceAiProofLabel: 'What you can inspect',
    evidenceAiProof: 'The public repository contains the code that writes these outputs. It does not include a sample run with generated files to review.',
    evidenceBbvaProject: 'BBVA MÉXICO CREDIT CARD JOURNEYS',
    evidenceBbvaKind: 'COVERAGE IN THE TEST SUITE',
    evidenceBbvaTitle: '11 card-detail scenarios in the suite',
    evidenceBbvaDescription: 'Playwright coverage includes 11 credit-card detail entries, with case-specific metadata, as well as navigation, browser history, and not-found behavior.',
    evidenceBbvaProofLabel: 'What you can inspect',
    evidenceBbvaProof: 'The public repository documents the scenarios and test structure. This shows defined coverage, not a recorded passing run.',
    evidenceRepoLink: 'Inspect the public code',
    inProgressTitle: 'Work in progress.',
    heuristicPrivate: 'PRIVATE REPOSITORY',
    heuristicDescription: 'The project has 12 scripted Playwright tests and six acceptance cases for a planned rule-based explorer. The design specifies Markdown and JSON reports and replayable browser flows.',
    heuristicRunLabel: 'Scripted test baseline',
    heuristicRun: 'The project README reports 8 of 12 tests passed in the latest full Chrome run. The other four hit Automation Exercise’s queue-full page and passed in follow-up runs.',
    skillsLabel: 'WHAT I BRING',
    skillsTitle: 'The practice behind the work.',
    skillsIntro: 'A practical toolkit for testing user journeys, APIs and AI-powered behavior.',
    skillQualityTitle: 'Quality engineering',
    skillQualityText: 'Test strategy · Exploratory testing · Risk analysis · QA leadership',
    skillAutomationTitle: 'Automation & APIs',
    skillAutomationText: 'Playwright · TypeScript · Page Object Model · Fixtures · API testing',
    skillAiTitle: 'AI product quality',
    skillAiText: 'LLM evaluations · Hallucination checks · Prompt-injection testing · Output reliability',
    contactLabel: "LET'S TALK",
    contactTitle: "Let's compare notes.",
    contactDescription: "Have a QA challenge, an automation idea or an AI feature to evaluate? I'd be glad to talk.",
    emailLabel: 'Email',
    linkedinLabel: 'Connect professionally',
    githubLabel: 'Browse the repositories',
    footerText: 'Built in Monterrey, Mexico.'
  },
  es: {
    pageTitle: 'Roberto Moreno - Automatización QA y calidad de IA',
    pageDescription: 'Roberto Moreno - ingeniero de QA enfocado en automatización y calidad de software e IA.',
    skip: 'Saltar al contenido',
    toggleLabel: 'Switch to English',
    heroEyebrow: 'AUTOMATIZACIÓN QA / CALIDAD DE IA',
    heroRole: 'Senior QA Automation Engineer · Especialista en calidad de IA',
    heroIntro: 'Soy ingeniero de QA en Monterrey, con 9 años de experiencia en calidad de software, incluidos 4 años en automatización de pruebas. Creo pruebas de navegador y exploro cómo la IA puede apoyar el testing con resultados claros y útiles.',
    scrollCue: 'Desliza para explorar',
    location: 'MONTERREY, MÉXICO',
    workLabel: 'MIS PROYECTOS',
    workTitle: 'Trabajo seleccionado.',
    workIntro: 'Tres proyectos de automatización de extremo a extremo, generación de pruebas con IA y evaluación de agentes.',
    agentLabKind: 'PRUEBAS CON AGENTES',
    agentLabDescription: 'Experimento con los agentes oficiales de Playwright para planear, generar y diagnosticar fallos en pruebas del carrito en dos versiones de Toolshop. Una rúbrica evalúa si los cambios de los agentes permiten seguir detectando un defecto conocido.',
    agentLabNote: 'COMPARACIÓN CON AGENTES PERSONALIZADOS PENDIENTE',
    aiKind: 'CALIDAD DE IA',
    aiDescription: 'Prototipo personal que combina Playwright y Claude para explorar una aplicación autorizada y redactar pruebas reproducibles junto con un reporte de bugs.',
    aiNote: 'PROTOTIPO PERSONAL · SIN MÉTRICAS DE EFICACIA',
    bbvaKind: 'AUTOMATIZACIÓN E2E',
    bbvaTitle: 'BBVA México: flujos de tarjetas',
    bbvaDescription: 'Proyecto independiente de portafolio con Playwright y TypeScript; usa objetos de página reutilizables, fixtures y cobertura basada en datos para flujos públicos de tarjetas.',
    bbvaNote: 'PROYECTO INDEPENDIENTE · SIN AFILIACIÓN CON BBVA',
    outputsLabel: 'SALIDAS Y RESULTADOS',
    outputsTitle: 'Evidencia del trabajo.',
    outputsIntro: 'Cada tarjeta identifica el proyecto, muestra la salida o el resultado disponible y explica qué demuestra.',
    evidenceAgentLabKind: 'AGENTES OFICIALES DE PLAYWRIGHT',
    evidenceAgentLabTitle: 'Dos pruebas generadas detectaron un defecto introducido en el carrito',
    evidenceAgentLabDescription: 'Ambas pruebas pasaron en la versión estándar de Toolshop y fallaron en la validación del subtotal en la versión con defectos introducidos.',
    evidenceAgentLabProofLabel: 'Resultado del agente Healer',
    evidenceAgentLabProof: 'El agente Healer diagnosticó el defecto y, en una copia experimental, marcó la prueba fallida para omitirla en la versión con defectos. Las pruebas originales siguen validando el subtotal.',
    evidenceAgentLabLink: 'Leer el resumen de la ejecución',
    evidenceAiProject: 'AI EXPLORATORY TESTER',
    evidenceAiKind: 'GENERACIÓN DE SALIDAS IMPLEMENTADA',
    evidenceAiTitle: 'Pruebas generadas e informe de hallazgos',
    evidenceAiDescription: 'El prototipo puede guardar flujos del navegador como pruebas reproducibles de Playwright y los problemas observados en un informe Markdown.',
    evidenceAiProofLabel: 'Qué puedes revisar',
    evidenceAiProof: 'El repositorio público contiene el código que genera estas salidas. Todavía no incluye una ejecución de ejemplo con los archivos generados.',
    evidenceBbvaProject: 'BBVA MÉXICO: FLUJOS DE TARJETAS',
    evidenceBbvaKind: 'COBERTURA EN LA SUITE DE PRUEBAS',
    evidenceBbvaTitle: '11 escenarios de detalle de tarjetas en la suite',
    evidenceBbvaDescription: 'La cobertura de Playwright incluye 11 fichas de tarjetas con datos específicos, además de navegación, historial del navegador y rutas no encontradas.',
    evidenceBbvaProofLabel: 'Qué puedes revisar',
    evidenceBbvaProof: 'El repositorio público documenta los escenarios y la estructura de pruebas. Muestra la cobertura definida, no una ejecución aprobada registrada.',
    evidenceRepoLink: 'Revisar el código público',
    inProgressTitle: 'Trabajo en curso.',
    heuristicPrivate: 'REPOSITORIO PRIVADO',
    heuristicDescription: 'El proyecto cuenta con 12 pruebas de Playwright y seis casos de aceptación para un explorador basado en reglas todavía en fase de diseño. El diseño contempla informes en Markdown y JSON, así como recorridos reproducibles en el navegador.',
    heuristicRunLabel: 'Resultados de las pruebas de Playwright',
    heuristicRun: 'El README del proyecto registra que 8 de 12 pruebas pasaron en la última ejecución completa en Chrome. Las otras cuatro se toparon con la página de cola llena de Automation Exercise y pasaron en ejecuciones posteriores.',
    skillsLabel: 'LO QUE APORTO',
    skillsTitle: 'La práctica detrás del trabajo.',
    skillsIntro: 'Herramientas prácticas para probar flujos de usuario, APIs y comportamiento impulsado por IA.',
    skillQualityTitle: 'Ingeniería de calidad',
    skillQualityText: 'Estrategia de pruebas · Pruebas exploratorias · Análisis de riesgos · Liderazgo de QA',
    skillAutomationTitle: 'Automatización y APIs',
    skillAutomationText: 'Playwright · TypeScript · Page Object Model · Fixtures · Pruebas de API',
    skillAiTitle: 'Calidad de productos con IA',
    skillAiText: 'Evaluaciones de LLM · Revisión de alucinaciones · Pruebas de prompt injection · Confiabilidad de respuestas',
    contactLabel: 'CONVERSEMOS',
    contactTitle: 'Comparemos ideas.',
    contactDescription: '¿Tienes un reto de QA, una idea de automatización o una función de IA por evaluar? Me dará gusto conversar.',
    emailLabel: 'Correo',
    linkedinLabel: 'Conectemos profesionalmente',
    githubLabel: 'Explora mis repositorios',
    footerText: 'Hecho en Monterrey, México.'
  }
};
const languageButton = document.getElementById('language-toggle');
const metaDescription = document.querySelector('meta[name="description"]');
const year = document.getElementById('year');

function setLanguage(language, persist) {
  const selected = translations[language] ? language : 'en';
  const messages = translations[selected];
  document.documentElement.lang = selected;
  document.title = messages.pageTitle;
  metaDescription.setAttribute('content', messages.pageDescription);
  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    const key = element.getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(messages, key)) {
      element.innerHTML = messages[key];
    }
  });
  languageButton.textContent = selected.toUpperCase();
  languageButton.setAttribute('aria-label', messages.toggleLabel);
  languageButton.setAttribute('aria-pressed', String(selected === 'es'));
  if (persist) {
    try { window.localStorage.setItem('rm-portfolio-language', selected); } catch (error) { /* Preference storage is optional. */ }
  }
}

languageButton.addEventListener('click', function () {
  setLanguage(document.documentElement.lang === 'en' ? 'es' : 'en', true);
});

let savedLanguage = 'en';
try { savedLanguage = window.localStorage.getItem('rm-portfolio-language') || 'en'; } catch (error) { /* English remains the default. */ }
setLanguage(savedLanguage, false);
year.textContent = String(new Date().getFullYear());
