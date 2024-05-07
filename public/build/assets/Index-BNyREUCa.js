import{r as s,j as e}from"./app-Cu5QFIpX.js";import{D as o}from"./Dropdown-DaIL5ZQw.js";import{R as c}from"./ResponsiveNavLink-DmBCMqEi.js";import w from"./Dashboard-DhnJFahd.js";import k from"./ListaDePrecios-DlFx5Gwq.js";import j from"./Proyectos-CTcI4y2h.js";import v from"./Folios-CWkyukQf.js";import g from"./Clientes-Bdfy_0Ur.js";import y from"./Asesor-D9KkMN2x.js";import N from"./Productos-B2STvEHv.js";import I from"./DetallesYProductos-iH6_ZgFJ.js";import C from"./ImagenesYFotos-BGa0lhG2.js";import _ from"./VideosArmandoSilleria-B4PZF5Pp.js";import A from"./Comercializacion-BrGsup_A.js";import S from"./Oficial-L_rID0bz.js";import L from"./Complementos-BrGsup_A.js";import E from"./Inventarios-C9sDh_uK.js";import T from"./Top50-CYpLLBaa.js";import P from"./ExistenciasGenerales-CIfHGFMJ.js";import R from"./ExistenciasSilleria-kb6ARWvH.js";import $ from"./VideosSilleria-Cm6kyIpa.js";import M from"./Usuarios-DJG2N1tI.js";import"./transition-BDbrBAIP.js";import"./sweetalert2.all-BPyCEskY.js";function V({user:t,header:x,children:D}){const r=JSON.parse(t.priv),[n,a]=s.useState(null),[l,m]=s.useState(!1),p=i=>{switch(console.log("URL DE VISTA DESTINO: "+i),a(i),i){case"listaP":window.open("https://ventas.lineaitalia.mx/dym/Lista%20de%20Precios%20Septiembre%202023_VENTA%20DIRECTA.pdf","_blank"),a("index");break;case"FormatoRe":window.open("https://ventas.lineaitalia.mx/dym/24%20BC%20FormatodeRentabilidadVDirecta.xlsx","_blank"),a("index");break;case"CotizadorEn":window.open("https://ventas.lineaitalia.mx/dym/Catalogo2023web.pdf","_blank"),a("index");break;case"CotizadorAr":window.open("https://ventas.lineaitalia.mx/dym/Catalogo2023web.pdf","_blank"),a("index");break;case"Catalogo2023":window.open("https://ventas.lineaitalia.mx/dym/Catalogo2023web.pdf","_blank"),a("index");break;case"MuestrarioMa":window.open("https://ventas.lineaitalia.mx/dym/muestrario2023.pdf","_blank"),a("index");break;case"FolletoPro":window.open("https://ventas.lineaitalia.mx/dym/FolletoProspeccion_web.pdf","_blank"),a("index");break;case"FolletoTop50":window.open("https://ventas.lineaitalia.mx/dym/CatálogoTop50Marzo2022.pdf","_blank"),a("index");break;case"CurriculumPdf":window.open("https://ventas.lineaitalia.mx/dym/SEMBLANZA CORPORATIVA 2024.pdf","_blank"),a("index");break;case"CurriculumPdfIn":window.open("https://ventas.lineaitalia.mx/dym/cvingles.pdf","_blank"),a("index");break;case"CurriculumEd":window.open("https://ventas.lineaitalia.mx/dym/cv.pptx","_blank"),a("index");break;case"CartaMe":window.open("https://ventas.lineaitalia.mx/dym/","_blank"),a("index");break;case"SilleríaGeneral":window.open("https://ventas.lineaitalia.mx/dym/CapacitacionSilleria2021.pdf","_blank"),a("index");break;case"Sillería2023":window.open("https://ventas.lineaitalia.mx/dym/capacitacion_silleria_2022.pdf","_blank"),a("index");break;case"Vasari":window.open("https://ventas.lineaitalia.mx/dym/CapacitacionVASARI.pdf","_blank"),a("index");break;case"LineaItalia":window.open("https://ventas.lineaitalia.mx/dym/CapacitacionITALIA.pdf","_blank"),a("index");break;case"i-Work":window.open("https://ventas.lineaitalia.mx/dym/CapacitacionI-WORK.pdf","_blank"),a("index");break;case"Seven":window.open("https://ventas.lineaitalia.mx/dym/CapacitacionSEVEN.pdf","_blank"),a("index");break;case"E-Link":window.open("https://ventas.lineaitalia.mx/dym/CapacitacionE-LINK.pdf","_blank"),a("index");break;case"Urban":window.open("https://ventas.lineaitalia.mx/dym/CapacitacionURBAN.pdf","_blank"),a("index");break;case"Stark":window.open("https://ventas.lineaitalia.mx/dym/CapacitacionSTARK.pdf","_blank"),a("index");break;case"Wellness":window.open("https://ventas.lineaitalia.mx/dym/CapacitacionWELLNESS.pdf","_blank"),a("index");break;case"Attesa":window.open("https://ventas.lineaitalia.mx/dym/CapacitacionATTESA.pdf","_blank"),a("index");break;case"GeneradorSKU":window.open("https://ventas.lineaitalia.mx/dym/AnzioSku.pdf","_blank"),a("index");break;case"MaterialAn":window.open("https://ventas.lineaitalia.mx/dym/AnzioSku.pdf","_blank"),a("index");break;case"LayoutBasic":window.open("https://ventas.lineaitalia.mx/dym/basic.pptx","_blank"),a("index");break;case"LayoutMid":window.open("https://ventas.lineaitalia.mx/dym/mid.pptx","_blank"),a("index");break;case"LayoutTop":window.open("https://ventas.lineaitalia.mx/dym/top.pptx","_blank"),a("index");break}},h=i=>{console.log("URL DE APLICATIVO DESTINO: "+i)},[b,f]=s.useState([]),[u,O]=s.useState([]);return s.useEffect(()=>{fetch("/api/v_pventas").then(i=>i.json()).then(i=>{f(i)}).catch(i=>{console.error("Error al obtener datos de ventas:",i)})},[]),e.jsxs("div",{className:"max-w-full min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[e.jsx("div",{className:"max-w-full mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsx("div",{className:"flex",children:e.jsx("div",{class:"shrink-0 flex p-0 -m-6",children:e.jsx("img",{class:"w-5-6 h-9     m-auto ml-0",src:"img/logocompletonegro.png",alt:"LINEA ITALIA"})})}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative -m-6",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:" text-xs inline-flex items-center px-3 py-2 border border-transparent  leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[t.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(o.Content,{children:[e.jsx(o.Link,{href:route("profile.edit"),children:"Mi Perfil"}),e.jsx(o.Link,{href:route("logout"),method:"post",as:"button",children:"Cerrar Sesión"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>m(i=>!i),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:l?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:l?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(l?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(c,{href:route("dashboard"),active:route().current("dashboard")})}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:t.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:t.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(c,{href:route("profile.edit"),children:"Profile"}),e.jsx(c,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),x&&e.jsx("header",{className:"bg-gray shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:x})}),e.jsxs("div",{className:"flex min-h-screen",style:{backgroundColor:"#ecf0f5"},children:[e.jsx("div",{className:"flex flex-col w-auto bg-white",children:e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[e.jsx("h1",{className:"border-gray-60 border-b p-2 mt-3 font-bold text-xs",children:"APLICATIVOS"}),e.jsx("ul",{className:"p-1 mt-0 font-light text-xs cursor-pointer",children:u.map((i,d)=>{if(r.hasOwnProperty(i.id)&&i.id!==3)return e.jsx("li",{children:e.jsx("a",{onClick:()=>h(i.url),className:"text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-4 py-2 block","data-id":i.id,children:i.nombre})},d)})}),e.jsx("h1",{className:"border-gray-60 border-b p-2 mt-3 font-bold text-xs",children:"MENÚ PRINCIPAL"}),e.jsx("ul",{className:"p-1 mt-0 font-light  text-xs cursor-pointer",children:b.map((i,d)=>{if(r[i.id_aplicativo]&&r[i.id_aplicativo].includes(i.id))return e.jsx("li",{children:e.jsx("a",{onClick:()=>p(i.url),className:"text-gray-700 hover:bg-gray-300 hover:text-gray-900 px-4 py-2 block","data-id":i.id,"data-aplicativo_id":i.id_aplicativo,children:i.nombre})},d)})})]})}),e.jsx("div",{className:"flex flex-col flex-1",children:e.jsx("div",{className:"p-4",children:e.jsxs("main",{children:[n==="index"&&e.jsx(w,{}),n==="listaP"&&e.jsx(k,{}),n==="proyectos"&&e.jsx(j,{}),n==="folios"&&e.jsx(v,{}),n==="clientes"&&e.jsx(g,{}),n==="asesor"&&e.jsx(y,{}),n==="productos"&&e.jsx(N,{}),n==="detallesP"&&e.jsx(I,{}),n==="imagenesF"&&e.jsx(C,{}),n==="videosAS"&&e.jsx(_,{}),n==="comercializacion"&&e.jsx(A,{}),n==="oficial"&&e.jsx(S,{name:t.name}),n==="complementos"&&e.jsx(L,{}),n==="inventarios"&&e.jsx(E,{}),n==="consultarTOP"&&e.jsx(T,{}),n==="consultarEG"&&e.jsx(P,{}),n==="consultarES"&&e.jsx(R,{}),n==="VideosS"&&e.jsx($,{}),n==="Usuarios"&&e.jsx(M,{})]})})})]})]})}function ce({auth:t}){return e.jsx(V,{user:t.user,children:e.jsx("iframe",{title:"Desarrollo de Contenido Login",height:"1000px",width:"100%",src:"https://ranking.lineaitalia.net/ranking.php",frameborder:"0",allowFullScreen:"true"})})}export{ce as default};
