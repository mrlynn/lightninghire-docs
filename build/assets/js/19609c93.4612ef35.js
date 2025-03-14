"use strict";(self.webpackChunklightning_hire_docs=self.webpackChunklightning_hire_docs||[]).push([[563],{2774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"advanced/api","title":"API Reference","description":"LightningHire offers a comprehensive API for integrating the platform with your existing systems and workflows.","source":"@site/docs/advanced/api.md","sourceDirName":"advanced","slug":"/advanced/api","permalink":"/docs/advanced/api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"API Reference"},"sidebar":"tutorialSidebar","previous":{"title":"Evaluations Overview","permalink":"/docs/features/evaluations/"},"next":{"title":"Custom Documentation Components","permalink":"/docs/advanced/custom-components"}}');var a=t(4848),i=t(8453);const r={sidebar_position:1,title:"API Reference"},d="API Reference",o={},c=[{value:"Authentication",id:"authentication",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Jobs",id:"jobs",level:3},{value:"Candidates",id:"candidates",level:3},{value:"Matching",id:"matching",level:3},{value:"Messages",id:"messages",level:3},{value:"Request Format",id:"request-format",level:2},{value:"Response Format",id:"response-format",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Search and Filtering",id:"search-and-filtering",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2},{value:"Example API Usage",id:"example-api-usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{APIEndpoint:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("APIEndpoint",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"api-reference",children:"API Reference"})}),"\n",(0,a.jsx)(n.p,{children:"LightningHire offers a comprehensive API for integrating the platform with your existing systems and workflows."}),"\n",(0,a.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,a.jsx)(n.p,{children:"All API routes are protected using NextAuth.js. You must include a valid authentication token in the headers of your requests."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const headers = {\n  'Content-Type': 'application/json',\n  'Authorization': `Bearer ${accessToken}`\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,a.jsx)(n.h3,{id:"jobs",children:"Jobs"}),"\n",(0,a.jsx)(t,{method:"GET",path:"/api/jobs",description:"List all jobs for the current user.",auth:!0}),"\n",(0,a.jsx)(t,{method:"POST",path:"/api/jobs",description:"Create a new job.",auth:!0}),"\n",(0,a.jsx)(t,{method:"GET",path:"/api/jobs/:id",description:"Get job details.",auth:!0}),"\n",(0,a.jsx)(t,{method:"PUT",path:"/api/jobs/:id",description:"Update job.",auth:!0}),"\n",(0,a.jsx)(t,{method:"DELETE",path:"/api/jobs/:id",description:"Delete job.",auth:!0}),"\n",(0,a.jsx)(t,{method:"POST",path:"/api/jobs/bulk",description:"Bulk import jobs.",auth:!0}),"\n",(0,a.jsx)(n.h3,{id:"candidates",children:"Candidates"}),"\n",(0,a.jsx)(t,{method:"GET",path:"/api/candidates",description:"List all candidates.",auth:!0}),"\n",(0,a.jsx)(t,{method:"POST",path:"/api/candidates",description:"Create a new candidate.",auth:!0}),"\n",(0,a.jsx)(t,{method:"GET",path:"/api/candidates/:id",description:"Get candidate details.",auth:!0}),"\n",(0,a.jsx)(t,{method:"PUT",path:"/api/candidates/:id",description:"Update candidate.",auth:!0}),"\n",(0,a.jsx)(t,{method:"DELETE",path:"/api/candidates/:id",description:"Delete candidate.",auth:!0}),"\n",(0,a.jsx)(t,{method:"POST",path:"/api/candidates/bulk",description:"Bulk import candidates.",auth:!0}),"\n",(0,a.jsx)(t,{method:"POST",path:"/api/candidates/parse",description:"Parse resume data.",auth:!0}),"\n",(0,a.jsx)(n.h3,{id:"matching",children:"Matching"}),"\n",(0,a.jsx)(t,{method:"GET",path:"/api/matching/:jobId",description:"Get matches for a job.",auth:!0}),"\n",(0,a.jsx)(t,{method:"GET",path:"/api/matching/job/:jobId/candidate/:candidateId",description:"Get specific match details.",auth:!0}),"\n",(0,a.jsx)(t,{method:"POST",path:"/api/matching/evaluate",description:"Manually evaluate a match.",auth:!0}),"\n",(0,a.jsx)(n.h3,{id:"messages",children:"Messages"}),"\n",(0,a.jsx)(t,{method:"GET",path:"/api/messages",description:"Get all messages.",auth:!0}),"\n",(0,a.jsx)(t,{method:"GET",path:"/api/messages/unread",description:"Get unread messages count.",auth:!0}),"\n",(0,a.jsx)(t,{method:"PUT",path:"/api/messages/:id/read",description:"Mark message as read.",auth:!0}),"\n",(0,a.jsx)(n.h2,{id:"request-format",children:"Request Format"}),"\n",(0,a.jsx)(n.p,{children:"All requests with a body should be sent as JSON:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const response = await fetch('/api/jobs', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n    'Authorization': `Bearer ${accessToken}`\n  },\n  body: JSON.stringify({\n    title: 'Software Engineer',\n    description: 'We are looking for a software engineer...',\n    requirements: 'At least 3 years of experience...',\n    skills: [\n      { name: 'JavaScript', importance: 5 },\n      { name: 'React', importance: 5 },\n      { name: 'Node.js', importance: 4 }\n    ]\n  })\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"response-format",children:"Response Format"}),"\n",(0,a.jsx)(n.p,{children:"All API responses follow a consistent format:"}),"\n",(0,a.jsx)(n.p,{children:"For successful operations:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "data": { ... },\n  "message": "Operation successful",\n  "pagination": {\n    "page": 1,\n    "limit": 10,\n    "total": 100,\n    "pages": 10\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"For errors:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "success": false,\n  "error": "Error type",\n  "message": "Human-readable error message",\n  "code": "ERROR_CODE"\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"pagination",children:"Pagination"}),"\n",(0,a.jsx)(n.p,{children:"List endpoints support pagination with query parameters:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"/api/resource?page=1&limit=10&sort=createdAt&order=desc\n"})}),"\n",(0,a.jsx)(n.h2,{id:"search-and-filtering",children:"Search and Filtering"}),"\n",(0,a.jsx)(n.p,{children:"List endpoints support search and filtering:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"/api/resource?search=keyword&filter[field]=value\n"})}),"\n",(0,a.jsx)(n.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Error Code"}),(0,a.jsx)(n.th,{children:"HTTP Status"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"UNAUTHORIZED"})}),(0,a.jsx)(n.td,{children:"401"}),(0,a.jsx)(n.td,{children:"Authentication required"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"FORBIDDEN"})}),(0,a.jsx)(n.td,{children:"403"}),(0,a.jsx)(n.td,{children:"Not authorized to access the resource"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"NOT_FOUND"})}),(0,a.jsx)(n.td,{children:"404"}),(0,a.jsx)(n.td,{children:"Resource not found"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"INVALID_ID"})}),(0,a.jsx)(n.td,{children:"400"}),(0,a.jsx)(n.td,{children:"Invalid ID format"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"VALIDATION_ERROR"})}),(0,a.jsx)(n.td,{children:"400"}),(0,a.jsx)(n.td,{children:"Input validation failed"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"SERVER_ERROR"})}),(0,a.jsx)(n.td,{children:"500"}),(0,a.jsx)(n.td,{children:"Internal server error"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,a.jsx)(n.p,{children:"API requests are rate limited to 100 requests per minute per user. Exceeding this limit will result in a 429 Too Many Requests response."}),"\n",(0,a.jsx)(n.h2,{id:"example-api-usage",children:"Example API Usage"}),"\n",(0,a.jsx)(n.p,{children:"This example shows how to fetch all jobs and create a new candidate:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// Fetch all jobs\nasync function getJobs() {\n  const response = await fetch('/api/jobs', {\n    headers: {\n      'Authorization': `Bearer ${accessToken}`\n    }\n  });\n  \n  const result = await response.json();\n  \n  if (!result.success) {\n    throw new Error(result.message);\n  }\n  \n  return result.data;\n}\n\n// Create a new candidate\nasync function createCandidate(candidateData) {\n  const response = await fetch('/api/candidates', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': `Bearer ${accessToken}`\n    },\n    body: JSON.stringify(candidateData)\n  });\n  \n  const result = await response.json();\n  \n  if (!result.success) {\n    throw new Error(result.message);\n  }\n  \n  return result.data;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);