/* Banco de Dados de Produtos */
const products = [
  {
    id: "nova-eclipse",
    name: "NØVA Eclipse",
    collection: "Classic",
    price: 18500,
    formattedPrice: "CHF 18.500",
    description: "Inspirado no alinhamento cósmico, o NØVA Eclipse apresenta um mostrador em ônix negro com fases da lua em ouro branco 18k e caixa em ouro amarelo.",
    specs: {
      "Movimento": "Calibre NVT-01 Automático (72h reserva)",
      "Material da Caixa": "Ouro Amarelo 18k (41mm)",
      "Mostrador": "Ônix Polido com Detalhes em Ouro",
      "Pulseira": "Couro de Aligátor Costurado à Mão",
      "Resistência à Água": "50 metros (5 ATM)"
    },
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="85" fill="#111" stroke="#C9A45C" stroke-width="4"/>
      <circle cx="100" cy="100" r="70" fill="#080808" stroke="#262626" stroke-width="1"/>
      <circle cx="100" cy="100" r="4" fill="#C9A45C"/>
      <line x1="100" y1="100" x2="100" y2="50" stroke="#C9A45C" stroke-width="3" stroke-linecap="round"/>
      <line x1="100" y1="100" x2="135" y2="100" stroke="#C9A45C" stroke-width="2" stroke-linecap="round"/>
      <line x1="100" y1="30" x2="100" y2="38" stroke="#C9A45C" stroke-width="3"/>
      <line x1="170" y1="100" x2="162" y2="100" stroke="#C9A45C" stroke-width="3"/>
      <line x1="100" y1="170" x2="100" y2="162" stroke="#C9A45C" stroke-width="3"/>
      <line x1="30" y1="100" x2="38" y2="100" stroke="#C9A45C" stroke-width="3"/>
      <path d="M85 130 Q100 145 115 130" stroke="#C9A45C" stroke-width="1.5" fill="none"/>
    </svg>`
  },
  {
    id: "nova-chronos",
    name: "NØVA Chronos",
    collection: "Sport",
    price: 24000,
    formattedPrice: "CHF 24.000",
    description: "Um cronógrafo de alta performance com escala taquimétrica gravada no bezel e submostradores inspirados nos instrumentos de bordo de bólidos clássicos.",
    specs: {
      "Movimento": "Calibre Cronógrafo Flyback NVT-03",
      "Material da Caixa": "Aço Inoxidável 904L (43mm)",
      "Mostrador": "Azul Abyss com Acabamento Sunburst",
      "Pulseira": "Pulseira de Aço 904L Escovado",
      "Resistência à Água": "100 metros (10 ATM)"
    },
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="85" fill="#111" stroke="#8A8A8A" stroke-width="5"/>
      <circle cx="100" cy="100" r="68" fill="#0d161a" stroke="#C9A45C" stroke-width="1"/>
      <circle cx="75" cy="100" r="16" fill="#080808" stroke="#C9A45C" stroke-width="1"/>
      <circle cx="125" cy="100" r="16" fill="#080808" stroke="#C9A45C" stroke-width="1"/>
      <circle cx="100" cy="100" r="3" fill="#C9A45C"/>
      <line x1="100" y1="100" x2="100" y2="45" stroke="#E5E5E5" stroke-width="2.5"/>
      <line x1="100" y1="100" x2="140" y2="110" stroke="#C9A45C" stroke-width="2"/>
    </svg>`
  },
  {
    id: "nova-obsidian",
    name: "NØVA Obsidian",
    collection: "Avant-Garde",
    price: 32000,
    formattedPrice: "CHF 32.000",
    description: "Completamente escurecido com revestimento DLC de alta resistência, o Obsidian é uma obra-prima monocromática para connaisseurs modernos.",
    specs: {
      "Movimento": "Calibre Esqueleto NVT-05 Manual",
      "Material da Caixa": "Titânio com Revestimento DLC Negro (44mm)",
      "Mostrador": "Esqueleto com Pontes Anodizadas",
      "Pulseira": "Borracha Vulcanizada de Alta Durabilidade",
      "Resistência à Água": "100 metros (10 ATM)"
    },
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="85" fill="#050505" stroke="#333" stroke-width="6"/>
      <circle cx="100" cy="100" r="65" fill="#0a0a0a" stroke="#C9A45C" stroke-width="1"/>
      <path d="M100 40 L115 100 L100 160 L85 100 Z" fill="none" stroke="#C9A45C" stroke-width="1.5"/>
      <circle cx="100" cy="100" r="6" fill="#C9A45C"/>
      <line x1="100" y1="100" x2="130" y2="70" stroke="#E5E5E5" stroke-width="2"/>
    </svg>`
  },
  {
    id: "nova-aurora",
    name: "NØVA Aurora",
    collection: "Classic",
    price: 21000,
    formattedPrice: "CHF 21.000",
    description: "O mostrador em madrepérola verde evoca as luzes boreais sobre os fiordes, encapsulado em uma caixa esbelta de ouro rosa 18k.",
    specs: {
      "Movimento": "Calibre Ultra-Fino NVT-02 (2.8mm espessura)",
      "Material da Caixa": "Ouro Rosa 18k (39mm)",
      "Mostrador": "Madrepérola Verde Natural",
      "Pulseira": "Couro de Crocodilo Verde Escuro",
      "Resistência à Água": "30 metros (3 ATM)"
    },
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="85" fill="#111" stroke="#E0A96D" stroke-width="4"/>
      <circle cx="100" cy="100" r="70" fill="#0b1a12" stroke="#1c3b2b" stroke-width="2"/>
      <circle cx="100" cy="100" r="4" fill="#E0A96D"/>
      <line x1="100" y1="100" x2="70" y2="70" stroke="#E0A96D" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="100" y1="100" x2="120" y2="130" stroke="#E0A96D" stroke-width="2" stroke-linecap="round"/>
      <line x1="100" y1="30" x2="100" y2="38" stroke="#E0A96D" stroke-width="2"/>
      <line x1="170" y1="100" x2="162" y2="100" stroke="#E0A96D" stroke-width="2"/>
      <line x1="100" y1="170" x2="100" y2="162" stroke="#E0A96D" stroke-width="2"/>
      <line x1="30" y1="100" x2="38" y2="100" stroke="#E0A96D" stroke-width="2"/>
    </svg>`
  },
  {
    id: "nova-titanium",
    name: "NØVA Titanium",
    collection: "Avant-Garde",
    price: 15500,
    formattedPrice: "CHF 15.500",
    description: "Leveza extrema e robustez inigualável. O NØVA Titanium é construído em liga de titânio aeroespacial com acabamento acetinado à mão.",
    specs: {
      "Movimento": "Calibre Automático NVT-04",
      "Material da Caixa": "Titânio Grade 5 (42mm)",
      "Mostrador": "Cinza Metálico com Textura Graneada",
      "Pulseira": "Titânio Articulado com Fecho Deployant",
      "Resistência à Água": "200 metros (20 ATM)"
    },
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,15 170,55 170,145 100,185 30,145 30,55" fill="none" stroke="#6E7A8A" stroke-width="4"/>
      <circle cx="100" cy="100" r="65" fill="#1A1D24" stroke="#6E7A8A" stroke-width="2"/>
      <circle cx="100" cy="100" r="4" fill="#C9A45C"/>
      <line x1="100" y1="100" x2="100" y2="55" stroke="#C9A45C" stroke-width="3"/>
      <line x1="100" y1="100" x2="130" y2="130" stroke="#C9A45C" stroke-width="2"/>
    </svg>`
  },
  {
    id: "nova-heritage",
    name: "NØVA Heritage",
    collection: "Classic",
    price: 19800,
    formattedPrice: "CHF 19.800",
    description: "Uma reinterpretação contemporânea dos relógios de bolso do século XIX, com ponteiros Breguet bluing e numeração romana clássica.",
    specs: {
      "Movimento": "Calibre de Corda Manual NVT-06",
      "Material da Caixa": "Ouro Amarelo 18k (38mm)",
      "Mostrador": "Esmalte Branco Grand Feu",
      "Pulseira": "Couro de Bezerro Mel com Textura Vintage",
      "Resistência à Água": "30 metros (3 ATM)"
    },
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="82" fill="#FAF9F5" stroke="#C9A45C" stroke-width="4"/>
      <circle cx="100" cy="100" r="70" fill="#FFF" stroke="#E5E5E5" stroke-width="1"/>
      <circle cx="100" cy="100" r="3" fill="#111"/>
      <line x1="100" y1="100" x2="100" y2="42" stroke="#1C3144" stroke-width="2.5"/>
      <line x1="100" y1="100" x2="135" y2="115" stroke="#1C3144" stroke-width="2"/>
      <text x="96" y="42" font-family="Cinzel" font-size="10" fill="#111">XII</text>
      <text x="155" y="104" font-family="Cinzel" font-size="10" fill="#111">VI</text>
      <text x="96" y="166" font-family="Cinzel" font-size="10" fill="#111">VI</text>
      <text x="38" y="104" font-family="Cinzel" font-size="10" fill="#111">IX</text>
    </svg>`
  }
];

/* Gerenciamento do Carrinho */
let cart = JSON.parse(localStorage.getItem('nova_cart')) || [];

function saveCart() {
  localStorage.setItem('nova_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function updateCartUI() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
  }

  const cartItemsContainer = document.getElementById('cart-items-list');
  const cartTotalContainer = document.getElementById('cart-total-price');
  
  if (cartItemsContainer && cartTotalContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p class="text-muted">Seu carrinho está vazio.</p>';
      cartTotalContainer.textContent = 'CHF 0';
      return;
    }

    let html = '';
    let total = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;
      html += `
        <div class="cart-item">
          <div class="cart-item-img">${item.svg}</div>
          <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">${item.formattedPrice} ${item.quantity > 1 ? `(x${item.quantity})` : ''}</div>
          </div>
          <button class="remove-item" onclick="removeFromCart('${item.id}')">&times;</button>
        </div>
      `;
    });

    cartItemsContainer.innerHTML = html;
    cartTotalContainer.textContent = `CHF ${total.toLocaleString('pt-BR')}`;
  }
}

function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

/* Injeção de Header e Footer Globais */
function renderLayout() {
  const headerContainer = document.getElementById('header-container');
  const footerContainer = document.getElementById('footer-container');
  const cartDrawerContainer = document.getElementById('cart-drawer');

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="site-header">
        <div class="container header-inner">
          <a href="index.html" class="brand-logo">NØVA<span>.</span></a>
          <nav class="nav-links">
            <a href="index.html" class="nav-link ${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}">Home</a>
            <a href="catalogo.html" class="nav-link ${currentPage === 'catalogo.html' ? 'active' : ''}">Catálogo</a>
            <a href="sobre.html" class="nav-link ${currentPage === 'sobre.html' ? 'active' : ''}">Sobre</a>
            <a href="contato.html" class="nav-link ${currentPage === 'contato.html' ? 'active' : ''}">Contato</a>
          </nav>
          <div class="header-actions">
            <button class="cart-btn" id="open-cart-btn">
              <span>Sacola</span>
              <div class="cart-badge">0</div>
            </button>
            <button class="mobile-menu-toggle" id="menu-toggle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>
    `;
  }

  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <a href="index.html" class="brand-logo" style="margin-bottom:16px;display:inline-block;">NØVA<span>.</span></a>
              <p>Haute Horlogerie suíça. A fusão definitiva entre precisão milimétrica e design arquitetônico minimalista.</p>
            </div>
            <div class="footer-col">
              <h4>Navegação</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="catalogo.html">Catálogo</a></li>
                <li><a href="sobre.html">Sobre Nós</a></li>
                <li><a href="contato.html">Contato</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Coleções</h4>
              <ul>
                <li><a href="catalogo.html?colecao=Classic">Classic Complications</a></li>
                <li><a href="catalogo.html?colecao=Avant-Garde">Avant-Garde</a></li>
                <li><a href="catalogo.html?colecao=Sport">Sport Performance</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Atelier</h4>
              <p>Rue du Rhône 42<br>1204 Genève, Suíça<br>concierge@nova-watches.ch</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} NØVA Watches S.A. Todos os direitos reservados.</p>
            <p>Design por Xantoss Builder</p>
          </div>
        </div>
      </footer>
    `;
  }

  if (cartDrawerContainer) {
    cartDrawerContainer.innerHTML = `
      <div class="cart-header">
        <h3>Sua Sacola</h3>
        <button class="close-cart" id="close-cart-btn">&times;</button>
      </div>
      <div class="cart-items" id="cart-items-list"></div>
      <div class="cart-footer">
        <div class="cart-total">
          <span>Subtotal</span>
          <span id="cart-total-price">CHF 0</span>
        </div>
        <button class="btn btn-primary btn-full" onclick="alert('Simulação de pedido concluída com sucesso! Obrigado por escolher a NØVA.')">Finalizar Aquisição</button>
      </div>
    `;
    
    // Adicionar overlay se não existir
    if (!document.getElementById('cart-overlay')) {
      const overlay = document.createElement('div');
      overlay.id = 'cart-overlay';
      overlay.className = 'cart-overlay';
      document.body.appendChild(overlay);
      overlay.addEventListener('click', closeCart);
    }
  }

  // Eventos do menu mobile e carrinho
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

  updateCartUI();
}

/* Renderização da Home */
function initHome() {
  const featuredContainer = document.getElementById('featured-products');
  if (featuredContainer) {
    const featured = products.slice(0, 3);
    let html = '';
    featured.forEach(p => {
      html += `
        <div class="product-card">
          <a href="produto.html?id=${p.id}" class="product-image-wrap">
            ${p.svg}
          </a>
          <div class="product-info">
            <div>
              <span class="product-collection">${p.collection}</span>
              <h3 class="product-name"><a href="produto.html?id=${p.id}">${p.name}</a></h3>
              <div class="product-price">${p.formattedPrice}</div>
            </div>
            <button class="btn btn-outline btn-full" onclick="addToCart('${p.id}')">Adicionar à Sacola</button>
          </div>
        </div>
      `;
    });
    featuredContainer.innerHTML = html;
  }
}

/* Renderização do Catálogo */
function initCatalog() {
  const catalogGrid = document.getElementById('catalog-grid');
  if (!catalogGrid) return;

  const searchInput = document.getElementById('search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('sort-select');
  const noResults = document.getElementById('no-results');
  const resetFiltersBtn = document.getElementById('reset-filters');

  let currentFilter = 'all';
  let currentSearch = '';
  let currentSort = 'featured';

  // Verificar parâmetros de URL na carga inicial
  const urlParams = new URLSearchParams(window.location.search);
  const urlColecao = urlParams.get('colecao');
  if (urlColecao) {
    currentFilter = urlColecao;
    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-filter').toLowerCase() === urlColecao.toLowerCase()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function renderProducts() {
    let filtered = products.filter(p => {
      const matchesCollection = currentFilter === 'all' || p.collection.toLowerCase() === currentFilter.toLowerCase();
      const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) || p.description.toLowerCase().includes(currentSearch.toLowerCase());
      return matchesCollection && matchesSearch;
    });

    if (currentSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (filtered.length === 0) {
      catalogGrid.innerHTML = '';
      noResults.classList.remove('hidden');
      return;
    }

    noResults.classList.add('hidden');
    let html = '';
    filtered.forEach(p => {
      html += `
        <div class="product-card">
          <a href="produto.html?id=${p.id}" class="product-image-wrap">
            ${p.svg}
          </a>
          <div class="product-info">
            <div>
              <span class="product-collection">${p.collection}</span>
              <h3 class="product-name"><a href="produto.html?id=${p.id}">${p.name}</a></h3>
              <div class="product-price">${p.formattedPrice}</div>
            </div>
            <button class="btn btn-outline btn-full" onclick="addToCart('${p.id}')">Adicionar à Sacola</button>
          </div>
        </div>
      `;
    });
    catalogGrid.innerHTML = html;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-filter');
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      currentFilter = 'all';
      currentSearch = '';
      if (searchInput) searchInput.value = '';
      filterBtns.forEach(b => b.classList.remove('active'));
      if (filterBtns[0]) filterBtns[0].classList.add('active');
      renderProducts();
    });
  }

  renderProducts();
}

/* Renderização da Página de Produto */
function initProductDetail() {
  const mainContainer = document.getElementById('product-detail-main');
  if (!mainContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const product = products.find(p => p.id === productId) || products[0];

  let specsHtml = '';
  for (const [key, value] of Object.entries(product.specs)) {
    specsHtml += `
      <div class="spec-row">
        <span class="spec-label">${key}</span>
        <span class="spec-value">${value}</span>
      </div>
    `;
  }

  mainContainer.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-gallery">
        ${product.svg}
      </div>
      <div class="product-detail-info">
        <span class="tag">${product.collection} Collection</span>
        <h1>${product.name}</h1>
        <div class="product-detail-price">${product.formattedPrice}</div>
        <p>${product.description}</p>
        
        <div style="margin: 28px 0;">
          <button class="btn btn-primary btn-full" onclick="addToCart('${product.id}')">Adicionar à Sacola</button>
        </div>

        <div class="product-specs">
          <h3>Especificações Técnicas</h3>
          ${specsHtml}
        </div>
      </div>
    </div>
  `;
}

/* Validação do Formulário de Contato */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const successDiv = document.getElementById('form-success');

    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

    if (!name.value.trim()) {
      document.getElementById('name-error').textContent = 'Por favor, insira seu nome completo.';
      isValid = false;
    }

    if (!email.value.trim() || !email.value.includes('@')) {
      document.getElementById('email-error').textContent = 'Por favor, insira um e-mail válido.';
      isValid = false;
    }

    if (!subject.value) {
      document.getElementById('subject-error').textContent = 'Por favor, selecione um assunto.';
      isValid = false;
    }

    if (!message.value.trim()) {
      document.getElementById('message-error').textContent = 'Por favor, escreva sua mensagem.';
      isValid = false;
    }

    if (isValid) {
      form.reset();
      successDiv.classList.remove('hidden');
      setTimeout(() => {
        successDiv.classList.add('hidden');
      }, 6000);
    }
  });
}

/* Inicialização Geral */
document.addEventListener('DOMContentLoaded', () => {
  renderLayout();
  initHome();
  initCatalog();
  initProductDetail();
  initContactForm();
});