// DOM integration checks, not browser or layout verification.
// Requires linkedom in development: NODE_PATH=/path/to/node_modules node tests/ui.cjs
const {parseHTML}=require('linkedom'),vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const {window}=parseHTML(fs.readFileSync('index.html','utf8'));
window.HTMLElement.prototype.focus=function(){};
window.HTMLElement.prototype.reportValidity=function(){return true};
const handlers={};
const location={hash:''};
class FormDataMock{constructor(form){this.entries=[...form.querySelectorAll('input,textarea,select')].filter(x=>x.getAttribute('name')).map(x=>[x.getAttribute('name'),x.value||x.querySelector('option')?.textContent||'']);} [Symbol.iterator](){return this.entries[Symbol.iterator]();}get(name){return this.entries.find(x=>x[0]===name)?.[1]||null;}}
const context=vm.createContext({document:window.document,window:{addEventListener:(name,fn)=>handlers[name]=fn},location,FormData:FormDataMock,console,Intl,Date});
for(const file of ['model.js','script.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
const run=code=>vm.runInContext(code,context),doc=window.document;
function route(hash){location.hash=hash;handlers.hashchange();assert.ok(doc.querySelector('h1'));assert.notEqual(doc.querySelector('h1').textContent,'Page not found.');}
assert.ok(doc.querySelector('h1').textContent.includes('A clear day ahead'));
for(const name of ['today','relationships','work','schedule','money','settings']){route('#'+name);assert.equal(doc.querySelectorAll('#navigation a').length,6);assert.equal(doc.querySelector('#navigation [aria-current]').getAttribute('href'),'#'+name);}
route('#relationships');doc.querySelector('#search').value='unmatched';doc.querySelector('#search').dispatchEvent(new window.Event('input'));assert.ok(doc.querySelector('#customerList').textContent.includes('No matching'));
doc.querySelector('#search').value='Sarah';doc.querySelector('#search').dispatchEvent(new window.Event('input'));assert.equal(doc.querySelectorAll('#customerList .record').length,1);
route('#relationship/c1/j1');assert.equal(doc.querySelectorAll('.job-switch a').length,2);
const submit=()=>doc.querySelector('#actionForm').dispatchEvent(new window.Event('submit',{cancelable:true}));
doc.querySelector('[name=email]').value='invalid';submit();assert.equal(doc.querySelector('#formError').hidden,false);assert.equal(run('state.jobs[0].stage'),0);
doc.querySelector('[name=email]').value='sarah.mitchell@example.com';submit();assert.equal(run('state.jobs[0].stage'),1,doc.querySelector('#formError')?.textContent);
doc.querySelector('[name=amount]').value='380.25';submit();assert.equal(run('state.jobs[0].stage'),2);
doc.querySelector('#revisedAmount').value='390.25';doc.querySelector('#revise').click();assert.equal(run('state.jobs[0].quote.amount'),39025);
submit();assert.equal(run('state.jobs[0].stage'),3);
doc.querySelector('[name=date]').value='2099-02-03';submit();assert.equal(run('state.jobs[0].stage'),4);
route('#schedule');assert.ok(doc.querySelector('#main').textContent.includes('2099-02-03'));
route('#relationship/c1/j1');submit();assert.equal(run('state.jobs[0].stage'),5);
for(const [name,value] of Object.entries({notes:'Complete',labor:'150',materials:'20.25',other:'0'}))doc.querySelector(`[name=${name}]`).value=value;
submit();assert.equal(run('state.jobs[0].stage'),6);submit();assert.equal(run('state.jobs[0].stage'),7);submit();assert.equal(run('state.jobs[0].stage'),8);
assert.ok(doc.querySelector('#main').textContent.includes('$220.00'));
route('#money');assert.ok(doc.querySelector('.money-strip').textContent.includes('$770.25'));
route('#settings');doc.querySelector('[name=business]').value='<img src=x onerror=bad()> Service';doc.querySelector('[name=rate]').value='200';doc.querySelector('#settingsForm').dispatchEvent(new window.Event('submit',{cancelable:true}));
route('#today');assert.equal(doc.querySelector('#businessName img'),null);assert.ok(doc.querySelector('#businessName').textContent.includes('<img'));
route('#relationship/c1/j4');assert.ok(doc.querySelector('#main').textContent.includes('Previous annual service'));
location.hash='#relationship/missing';handlers.hashchange();assert.ok(doc.querySelector('h1').textContent.includes('Page not found'));
doc.querySelector('#pin').click();assert.equal(doc.querySelector('#pin').getAttribute('aria-pressed'),'true');doc.querySelector('#pin').click();assert.equal(doc.querySelector('#pin').getAttribute('aria-pressed'),'false');
console.log('PASS: six DOM routes, relationship search, two jobs/customer, actual form event lifecycle, quote revision, cross-screen booking/money, escaped settings, missing route, pin toggles. No browser layout claims.');
