import{W as n,j as e,a as c}from"./app-Cnaq85K1.js";import{G as d}from"./GuestLayout-qsd8ttcN.js";import{T as u,I as x}from"./TextInput-pKjXpVUH.js";import{P as p}from"./PrimaryButton-BtF_FRMS.js";function b({status:a}){const{data:t,setData:r,post:m,processing:i,errors:o}=n({email:""}),l=s=>{s.preventDefault(),m(route("password.email"))};return e.jsxs(d,{children:[e.jsx(c,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600 mt-3",children:"¿Olvidaste tu contraseña? Ningún problema. Simplemente háganos saber su dirección de correo electrónico y le enviaremos una contraseña por correo electrónico."}),a&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e.jsxs("form",{onSubmit:l,children:[e.jsx(u,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(x,{message:o.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(p,{className:"ms-4",disabled:i,children:"Enviame el email"})})]})]})}export{b as default};