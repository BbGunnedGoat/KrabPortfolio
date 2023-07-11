const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
document.head.appendChild(script);

const nav = document.createElement('nav');
nav.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');

const container = document.createElement('div');
container.classList.add('container-fluid');

const brand = document.createElement('a');
brand.classList.add('navbar-brand');
brand.href = '#';
brand.textContent = 'Krabí portfolio';

const button = document.createElement('button');
button.classList.add('navbar-toggler');
button.type = 'button';
button.dataset.toggle = 'collapse';
button.dataset.target = '#navbarNav';
button.innerHTML = '<span class="navbar-toggler-icon"></span>';

const collapse = document.createElement('div');
collapse.classList.add('collapse', 'navbar-collapse');
collapse.id = 'navbarNav';

const list = document.createElement('ul');
list.classList.add('navbar-nav');

const items = [
  { text: 'Domů', href: 'index.html' },
  { text: 'Povstání krabů', href: 'povstaniKrabu.html' }, 
  { text: 'Krabí kultura', href: 'krabiKultura.html' }, 
  { text: 'Hrdinové krabstva', href: 'hrdinoveKrabstva.html' }
];

items.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.classList.add('nav-item');

  const link = document.createElement('a');
  link.classList.add('nav-link');
  link.href = item.href;
  link.textContent = item.text;

  listItem.appendChild(link);
  list.appendChild(listItem);
});
// Vytvoření elementu <li> s třídou "nav-item" a "dropdown"
const liElement = document.createElement("li");
liElement.classList.add("nav-item", "dropdown");

// Vytvoření elementu <a> s třídou "nav-link dropdown-toggle" a atributy "href", "id", "role", "data-toggle", "aria-haspopup" a "aria-expanded"
const aElement = document.createElement("a");
aElement.classList.add("nav-link", "dropdown-toggle");
//aElement.setAttribute("href", "#");
aElement.setAttribute("id", "navbarDropdownMenuLink");
aElement.setAttribute("role", "button");
aElement.setAttribute("data-toggle", "dropdown");
aElement.setAttribute("aria-haspopup", "true");
aElement.setAttribute("aria-expanded", "false");
aElement.textContent = "Krabí kultura";

// Vytvoření elementu <div> s třídou "dropdown-menu" a atributem "aria-labelledby"
const divElement = document.createElement("div");
divElement.classList.add("dropdown-menu");
aElement.setAttribute("for", "navbarDropdownMenuLink");
divElement.setAttribute("aria-labelledby", "navbarDropdownMenuLink");

// Vytvoření tří elementů <a> s třídou "dropdown-item" a atributem "href"
const a1Element = document.createElement("a");
a1Element.classList.add("dropdown-item");
a1Element.setAttribute("href", "#");
a1Element.textContent = "Symbolika krabů";

const a2Element = document.createElement("a");
a2Element.classList.add("dropdown-item");
a2Element.setAttribute("href", "#");
a2Element.textContent = "Krabí festivaly";

const a3Element = document.createElement("a");
a3Element.classList.add("dropdown-item");
a3Element.setAttribute("href", "#");
a3Element.textContent = "Kraby v umění";

// Připojení elementů <a> k elementu <div>
divElement.appendChild(a1Element);
divElement.appendChild(a2Element);
divElement.appendChild(a3Element);

// Připojení elementů <a> a <div> k elementu <li>
liElement.appendChild(aElement);
liElement.appendChild(divElement);

// Vložení vytvořeného elementu <li> do HTML dokumentu
list.appendChild(liElement);

collapse.appendChild(list);
container.appendChild(brand);
container.appendChild(button);
container.appendChild(collapse);
nav.appendChild(container);


document.getElementById("nav").appendChild(nav);
