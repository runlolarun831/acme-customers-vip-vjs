const customerList = document.querySelector('#customerList');


let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];

customerList.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    const idx= [...event.target.parentNode.parentNode.children].indexOf(event.target.parentNode);
    customers = customers.filter((customer, _index) => {
      return _index !== idx;
    });
    render();
  }
});

const render = () => {
  const html = customers.map((customer, idx) => {
    return `
      <li>
        ${customer.name} (${customer.email})
        <button idx='${idx}'>Destroy</button>
      </li>
    `
  }).join('');
  customerList.innerHTML = html;
};

render();
