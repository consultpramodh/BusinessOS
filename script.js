'use strict';
const form = document.querySelector('#qualification');
const pin = document.querySelector('#pin');
const sidebar = document.querySelector('.sidebar');
const announcement = document.querySelector('#announcement');
let saved = null;
pin.addEventListener('click', () => {
  const pinned = sidebar.classList.toggle('pinned');
  pin.setAttribute('aria-pressed', String(pinned));
  pin.querySelector('.nav-label').textContent = pinned ? 'Unpin navigation' : 'Pin navigation';
});
function clearErrors() {
  form.querySelectorAll('.field-error').forEach(node => node.remove());
  form.querySelectorAll('[aria-invalid]').forEach(node => {
    node.removeAttribute('aria-invalid'); node.removeAttribute('aria-describedby');
  });
  document.querySelector('#errors').hidden = true;
}
function validate(data) {
  const errors = {};
  for (const field of ['service','issue','name','email','phone','city','address','postal']) {
    if (!data[field]) errors[field] = 'Enter ' + ({issue:'the service request',name:'the customer name',postal:'a postal code',service:'a service'}[field] || 'a valid ' + field) + '.';
  }
  if (data.email && !form.elements.email.validity.valid) errors.email = 'Enter a valid email address.';
  if (data.phone && (!/^\+?[\d\s().-]+$/.test(data.phone) || !/^\d{10,15}$/.test(data.phone.replace(/\D/g,'')))) errors.phone = 'Enter a phone number with 10–15 digits.';
  if (data.postal && !/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(data.postal)) errors.postal = 'Enter a Canadian postal code, e.g. L4Y 1A1.';
  if (!Number.isInteger(Number(data.count)) || Number(data.count)<1 || Number(data.count)>10) errors.count = 'Enter a whole number from 1 to 10.';
  return errors;
}
form.addEventListener('submit', event => {
  event.preventDefault(); clearErrors();
  const data = Object.fromEntries([...new FormData(form)].map(([key,value])=>[key,value.trim()]));
  const errors = validate(data);
  if (Object.keys(errors).length) {
    for (const [name,message] of Object.entries(errors)) {
      const input = form.elements[name];
      const error = document.createElement('span'); error.className = 'field-error';
      error.id = name + '-error'; error.textContent = message;
      input.setAttribute('aria-invalid','true'); input.setAttribute('aria-describedby',error.id);
      input.after(error);
    }
    const summary = document.querySelector('#errors');
    summary.textContent = 'Qualification not saved. Check ' + Object.keys(errors).length + ' highlighted fields.';
    summary.hidden = false; form.elements[Object.keys(errors)[0]].focus(); return;
  }
  saved = Object.freeze({...data});
  const summary = document.querySelector('#qualificationSummary'); summary.replaceChildren();
  const rows = [
    ['Customer',saved.name],['Contact',saved.email + ' · ' + saved.phone],
    ['Location',saved.address + ', ' + saved.city + ', ON ' + saved.postal.toUpperCase()],
    ['Service',saved.service + ' · ' + saved.count + (Number(saved.count)===1?' fireplace':' fireplaces')],
    ['Request',saved.issue],['Equipment',[saved.fuel,saved.brand,saved.model,saved.room].filter(Boolean).join(' · ') || 'Not yet recorded']
  ];
  for (const [label,value] of rows) {
    const dt = document.createElement('dt'), dd = document.createElement('dd');
    dt.textContent = label; dd.textContent = value; summary.append(dt,dd);
  }
  let entry = document.querySelector('#qualifiedEvent');
  if (!entry) {
    entry = document.createElement('li'); entry.id = 'qualifiedEvent';
    const title = document.createElement('strong'), detail = document.createElement('span');
    title.textContent = 'Enquiry qualified'; detail.textContent = 'Details saved · this session only';
    entry.append(title,detail); document.querySelector('#timeline').append(entry);
  }
  document.querySelector('h1').firstChild.textContent = saved.name;
  document.querySelector('.topbar strong').textContent = saved.name;
  document.querySelector('.context span').textContent = saved.service;
  document.querySelector('.context span:nth-child(2)').textContent = saved.city + ', Ontario';
  document.querySelector('#stage').textContent = 'Ready for quote';
  document.querySelector('#actionTitle').textContent = 'Qualification complete';
  document.querySelector('#actionIntro').textContent = 'The next step is quote preparation.';
  form.hidden = true; document.querySelector('#quote').hidden = false;
  announcement.textContent = 'Qualification saved. Ready for quote preparation. No quote has been created.';
  document.querySelector('#actionTitle').focus();
});
document.querySelector('#edit').addEventListener('click',()=>{
  form.hidden = false; document.querySelector('#quote').hidden = true;
  document.querySelector('#actionTitle').textContent = 'Review qualification';
  document.querySelector('#actionIntro').textContent = 'Update the details, then save to continue.';
  form.elements.service.focus();
});
