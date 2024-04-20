"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[693],{9693:e=>{e.exports=JSON.parse('{"graphContent":[{"id":"LWGP-IIUX-RZBZ","license":"Material-Accordion","name":"Accordion","use":true,"hook":[],"style":{"accordion":{},"accordionSummary":{"font":{"fontSize":"14","fontWeight":900,"fontFamily":""}},"accordionDetails":{"padding":["24","24","24","24"]}},"property":{"summary":"Input From & Submit","customSummary":false,"expanded":true,"expandIcon":true,"divider":true,"disabled":false,"disableGutters":false,"square":false},"children":{"accordionSummary":[],"accordionDetails":[{"id":"TASA-S94E-UCGH","license":"Material-TextField","name":"Text Field Name","use":true,"hook":[],"property":{"type":"text","value":"","placeholder":"","variant":"outlined","fullWidth":true,"color":"primary","label":"Name","size":"medium","disabled":false,"multiline":false,"rows":"auto"},"monitor":[],"trigger":[{"id":"LI72-7KCZ-LJDF","name":"Data Interface Name","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"onChange","linkId":["VWRE-A3GE-FUW0"]}]},{"id":"BCYU-68SA-07L3","license":"Material-Select","name":"Select Age","use":true,"hook":[],"property":{"value":"","options":[{"label":"Option A","value":"A"},{"label":"Option B","value":"B"}],"label":"Age","variant":"outlined","fullWidth":true,"size":"medium","disabled":false,"multiple":false},"monitor":[],"trigger":[{"id":"H810-H0VE-FKW9","name":"Input Age","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"onChange","linkId":["RYRK-GOH2-LC3V"]}]},{"id":"LFU5-QFWN-SJ2R","license":"Box-Basic","name":"Box","use":true,"hook":[],"style":{"content":{"display":"flex","flex":{"flexDirection":"row","flexWrap":"nowrap","justifyContent":"flex-start","alignItems":"center","alignContent":"flex-start","flexGrow":0,"flexShrink":1,"flexBasis":"auto"}}},"children":{"content":[{"id":"QO4P-BYT8-R114","license":"Material-Checkbox","name":"Checkbox Like Dog","use":true,"hook":[],"property":{"color":"primary","size":"medium","checked":false,"disabled":false},"monitor":[],"trigger":[{"id":"FD5F-D2DG-CBIM","name":"Input Like Dog","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"onChange","linkId":["JH2E-SFZB-X9N9"]}]},{"id":"BINF-8R9T-RJB7","license":"Basic-Text","name":"Text","use":true,"hook":[],"style":{"content":{"font":{"fontSize":16,"fontWeight":800,"fontFamily":""}}},"property":{"text":"Like Dog"},"monitor":[],"trigger":[]},{"id":"EHSA-5YFC-CU32","license":"Material-Checkbox","name":"Checkbox Like Cat","use":true,"hook":[],"property":{"color":"primary","size":"medium","checked":false,"disabled":false},"monitor":[],"trigger":[{"id":"Z7AA-86JA-979S","name":"Input Like Cat","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"onChange","linkId":["QLLY-1AD3-X1LC"]}]},{"id":"3OE7-OZEG-NULX","license":"Basic-Text","name":"Text","use":true,"hook":[],"style":{"content":{"font":{"fontSize":16,"fontWeight":800,"fontFamily":""}}},"property":{"text":"Like Cat"},"monitor":[],"trigger":[]}]},"monitor":[],"trigger":[]},{"id":"7LIZ-4ZFY-4NYQ","license":"Material-Button","name":"Button","use":true,"hook":[],"property":{"value":"Submit","variant":"contained","color":"primary","href":"","disabled":false,"fullWidth":false},"monitor":[],"trigger":[{"id":"0ILN-PQ1X-FIWM","name":"Button","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"onClick","linkId":["Y2HZ-5XSM-KJZU"]}],"style":{"content":{}}}]},"monitor":[],"trigger":[]},{"id":"IAMA-4JBG-5LK1","license":"Tool-HttpRequest","name":"Http Request","use":true,"hook":[],"property":{"mode":"fetch","method":"post","bodyType":"json","baseUrl":"http://example.graphor/api/submit"},"monitor":[{"id":"ZXWL-DLN5-DYKH","name":"Submit Request","use":true,"monitorType":"default","monitorEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","monitorKey":"request"}],"trigger":[{"id":"2305-RDN6-LYA0","name":"Submit Request Success","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"onResponse","linkId":[]}]},{"id":"ZHK8-GR6Q-QFKL","license":"Tool-DataStore","name":"Data Store","use":true,"hook":[],"property":{"value":{"name":"","age":"","likeDog":false,"likeCat":false},"initValue":{"name":"","age":"","likeDog":false,"likeCat":false},"immediateOuput":false,"useWindow":false,"windowName":""},"monitor":[{"id":"GYMQ-NVHE-PALB","name":"Data Store","use":true,"monitorType":"default","monitorEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","monitorKey":"assignValue"},{"id":"Y2HZ-5XSM-KJZU","name":"Data Store Output","use":true,"monitorType":"default","monitorEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","monitorKey":"triggerOutput"}],"trigger":[{"id":"VGHW-U1MY-QW6K","name":"Output","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"output","linkId":["9SMS-SJWB-PTCN"]}]},{"id":"A22W-L80G-1W7Q","license":"Tool-DataInterface","name":"Data Interface Name","use":true,"hook":[],"property":{"transformType":"key2object","transformValue":["name"]},"monitor":[{"id":"VWRE-A3GE-FUW0","name":"Data Interface Name","use":true,"monitorType":"default","monitorEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","monitorKey":"triggerOutput"}],"trigger":[{"id":"Z9WN-1LFB-W2LZ","name":"Data Interface Name","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"output","linkId":["GYMQ-NVHE-PALB"]}]},{"id":"5HNX-JDT8-90HC","license":"Tool-DataInterface","name":"Data Interface Age","use":true,"hook":[],"property":{"transformType":"key2object","transformValue":["Age"]},"monitor":[{"id":"RYRK-GOH2-LC3V","name":"Data Interface Age","use":true,"monitorType":"default","monitorEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","monitorKey":"triggerOutput"}],"trigger":[{"id":"BUZ7-HDKZ-N4KV","name":"Data Interface Age","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"output","linkId":["GYMQ-NVHE-PALB"]}]},{"id":"3GOS-0X21-RBNM","license":"Tool-DataInterface","name":"Data Interface Like Dog","use":true,"hook":[],"property":{"transformType":"key2object","transformValue":["likeDog"]},"monitor":[{"id":"JH2E-SFZB-X9N9","name":"Data Interface Like Dog","use":true,"monitorType":"default","monitorEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","monitorKey":"triggerOutput"}],"trigger":[{"id":"CO9P-HNRY-7UZR","name":"Data Interface Like Dog","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"output","linkId":["GYMQ-NVHE-PALB"]}]},{"id":"4CEY-LRJ5-U16V","license":"Tool-DataInterface","name":"Data Interface Like Cat","use":true,"hook":[],"property":{"transformType":"key2object","transformValue":["likeCat"]},"monitor":[{"id":"QLLY-1AD3-X1LC","name":"Data Interface Like Cat","use":true,"monitorType":"default","monitorEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","monitorKey":"triggerOutput"}],"trigger":[{"id":"2R1T-0ESM-21O2","name":"Data Interface Like Cat","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"output","linkId":["GYMQ-NVHE-PALB"]}]},{"id":"GNDO-M4YW-7NBC","license":"Tool-DataInterface","name":"Data Interface Request","use":true,"hook":[],"property":{"transformType":"key2object","transformValue":["body"]},"monitor":[{"id":"9SMS-SJWB-PTCN","name":"Data Interface Request","use":true,"monitorType":"default","monitorEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","monitorKey":"triggerOutput"}],"trigger":[{"id":"FO87-GS9W-HXOW","name":"Data Interface Request","use":true,"triggerType":"default","triggerEval":"function(data, env) {\\n  const { property, style, prop, update } = env\\n}","triggerKey":"output","linkId":["ZXWL-DLN5-DYKH"]}]}],"graphEvent":[{"eventType":"monitor","elementId":"IAMA-4JBG-5LK1","eventId":"ZXWL-DLN5-DYKH","translateX":-199,"translateY":-480},{"eventType":"trigger","elementId":"IAMA-4JBG-5LK1","eventId":"2305-RDN6-LYA0","translateX":-200,"translateY":-603},{"eventType":"monitor","elementId":"A22W-L80G-1W7Q","eventId":"VWRE-A3GE-FUW0","translateX":-169,"translateY":283},{"eventType":"trigger","elementId":"A22W-L80G-1W7Q","eventId":"Z9WN-1LFB-W2LZ","translateX":133,"translateY":284},{"eventType":"monitor","elementId":"ZHK8-GR6Q-QFKL","eventId":"GYMQ-NVHE-PALB","translateX":658,"translateY":20},{"eventType":"monitor","elementId":"ZHK8-GR6Q-QFKL","eventId":"Y2HZ-5XSM-KJZU","translateX":659,"translateY":-101},{"eventType":"trigger","elementId":"ZHK8-GR6Q-QFKL","eventId":"VGHW-U1MY-QW6K","translateX":660,"translateY":-222},{"eventType":"monitor","elementId":"5HNX-JDT8-90HC","eventId":"RYRK-GOH2-LC3V","translateX":-171,"translateY":166},{"eventType":"trigger","elementId":"5HNX-JDT8-90HC","eventId":"BUZ7-HDKZ-N4KV","translateX":134,"translateY":166},{"eventType":"trigger","elementId":"BCYU-68SA-07L3","eventId":"H810-H0VE-FKW9","translateX":-872,"translateY":16},{"eventType":"trigger","elementId":"QO4P-BYT8-R114","eventId":"FD5F-D2DG-CBIM","translateX":-879,"translateY":645},{"eventType":"trigger","elementId":"EHSA-5YFC-CU32","eventId":"Z7AA-86JA-979S","translateX":-877,"translateY":528},{"eventType":"trigger","elementId":"7LIZ-4ZFY-4NYQ","eventId":"0ILN-PQ1X-FIWM","translateX":-21,"translateY":-103},{"eventType":"trigger","elementId":"TASA-S94E-UCGH","eventId":"LI72-7KCZ-LJDF","translateX":-872,"translateY":138},{"eventType":"monitor","elementId":"3GOS-0X21-RBNM","eventId":"JH2E-SFZB-X9N9","translateX":-170,"translateY":519},{"eventType":"monitor","elementId":"4CEY-LRJ5-U16V","eventId":"QLLY-1AD3-X1LC","translateX":-170,"translateY":400},{"eventType":"trigger","elementId":"3GOS-0X21-RBNM","eventId":"CO9P-HNRY-7UZR","translateX":133,"translateY":515},{"eventType":"trigger","elementId":"4CEY-LRJ5-U16V","eventId":"2R1T-0ESM-21O2","translateX":132,"translateY":401},{"eventType":"monitor","elementId":"GNDO-M4YW-7NBC","eventId":"9SMS-SJWB-PTCN","translateX":189,"translateY":-358},{"eventType":"trigger","elementId":"GNDO-M4YW-7NBC","eventId":"FO87-GS9W-HXOW","translateX":187,"translateY":-481}],"graphConfig":{"screenGraph":{"width":375,"height":667,"scale":1,"translateX":0,"translateY":0},"screenEvent":{"scale":0.66,"translateX":-2,"translateY":1},"dependenciesMap":{"React":"https://unpkg.com/react@17.0.2/umd/react.production.min.js","ReactDOM":"https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js","MaterialUI":"https://unpkg.com/@mui/material@5.14.3/umd/material-ui.production.min.js","Hls":"https://unpkg.com/hls.js@1.1.5/dist/hls.min.js","echarts":"https://unpkg.com/echarts@5.4.1/dist/echarts.common.min.js"},"document":{"title":"Graphor","icon":"","viewport":"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"},"project":{"renderId":"$render","updateId":"$update","sourceOrigin":"https://wvooovw.github.io/20220805x001/build-package"}}}')}}]);