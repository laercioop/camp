/* ============================================================
   ACAMPAMENTO ASJ — comportamento da página
   Sem dependências externas.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Dados: cronograma ---------- */
  /* tipo: palestra | espiritual | atividade | rotina */
  var CRONOGRAMA = [
    {
      dia: '27', mes: 'Dez',
      itens: [
        { hora: '12:00–14:00', que: 'Chegada', tipo: 'rotina', marco: true },
        { hora: '15:30', que: 'Apresentação do Acampamento: o primeiro passo da caída do mundo e da Igreja', tipo: 'palestra', etiqueta: 'Palestra 1' },
        { hora: '16:30', que: 'Jogos', tipo: 'atividade' },
        { hora: '17:30', que: 'Lanche', tipo: 'rotina' },
        { hora: '19:00', que: 'Terço', tipo: 'espiritual' },
        { hora: '20:00', que: 'Jantar', tipo: 'rotina' },
        { hora: '21:00', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '22:00', que: 'Dormir', tipo: 'rotina' }
      ]
    },
    {
      dia: '28', mes: 'Dez',
      itens: [
        { hora: '06:45', que: 'Acordar', tipo: 'rotina' },
        { hora: '07:15', que: 'Missa', tipo: 'espiritual', marco: true },
        { hora: '08:30', que: 'Café da manhã', tipo: 'rotina' },
        { hora: '09:30', que: 'A História do Protestantismo', tipo: 'palestra', etiqueta: 'Palestra 2' },
        { hora: '11:30', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '12:30', que: 'Almoço', tipo: 'rotina' },
        { hora: '13:30', que: 'Trabalhos / Descanso', tipo: 'rotina' },
        { hora: '15:30', que: 'Os Princípios filosóficos da Revolução Protestante', tipo: 'palestra', etiqueta: 'Palestra 3' },
        { hora: '16:30', que: 'Jogos', tipo: 'atividade' },
        { hora: '17:30', que: 'Lanche', tipo: 'rotina' },
        { hora: '19:00', que: 'Terço', tipo: 'espiritual' },
        { hora: '20:00', que: 'Jantar', tipo: 'rotina' },
        { hora: '21:00', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '22:00', que: 'Dormir', tipo: 'rotina' }
      ]
    },
    {
      dia: '29', mes: 'Dez',
      itens: [
        { hora: '06:45', que: 'Acordar', tipo: 'rotina' },
        { hora: '07:15', que: 'Missa', tipo: 'espiritual', marco: true },
        { hora: '08:30', que: 'Café da manhã', tipo: 'rotina' },
        { hora: '09:30', que: 'A Missa Luterana', tipo: 'palestra', etiqueta: 'Palestra 4' },
        { hora: '10:30', que: 'Apresentação de trabalhos de membros ASJ', tipo: 'atividade' },
        { hora: '11:30', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '12:30', que: 'Almoço', tipo: 'rotina' },
        { hora: '13:30', que: 'Trabalhos / Descanso', tipo: 'rotina' },
        { hora: '15:30', que: 'A História do Movimento Litúrgico Católico', tipo: 'palestra', etiqueta: 'Palestra 5' },
        { hora: '16:30', que: 'Jogos', tipo: 'atividade' },
        { hora: '17:30', que: 'Lanche', tipo: 'rotina' },
        { hora: '19:00', que: 'Terço', tipo: 'espiritual' },
        { hora: '20:00', que: 'Jantar', tipo: 'rotina' },
        { hora: '21:00', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '22:00', que: 'Dormir', tipo: 'rotina' }
      ]
    },
    {
      dia: '30', mes: 'Dez',
      itens: [
        { hora: '06:45', que: 'Acordar', tipo: 'rotina' },
        { hora: '07:15', que: 'Missa', tipo: 'espiritual', marco: true },
        { hora: '08:30', que: 'Café da manhã', tipo: 'rotina' },
        { hora: '09:30', que: 'Os Princípios filosóficos da Revolução Litúrgica', tipo: 'palestra', etiqueta: 'Palestra 6' },
        { hora: '11:30', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '12:30', que: 'Almoço', obs: 'Início do retiro', tipo: 'rotina' },
        { hora: '13:30', que: 'Trabalhos / Descanso', tipo: 'rotina' },
        { hora: '15:30', que: 'A Morte ao Pecado', tipo: 'espiritual', etiqueta: 'Retiro', marco: true },
        { hora: '16:30', que: 'Confissões / Silêncio', tipo: 'espiritual' },
        { hora: '17:30', que: 'Lanche', tipo: 'rotina' },
        { hora: '19:00', que: 'Terço', tipo: 'espiritual' },
        { hora: '20:00', que: 'Jantar', tipo: 'rotina' },
        { hora: '21:00', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '22:00', que: 'Dormir', tipo: 'rotina' }
      ]
    },
    {
      dia: '31', mes: 'Dez',
      itens: [
        { hora: '06:45', que: 'Acordar', tipo: 'rotina' },
        { hora: '07:15', que: 'Missa', tipo: 'espiritual', marco: true },
        { hora: '08:30', que: 'Café da manhã', tipo: 'rotina' },
        { hora: '09:30', que: 'A Vida para Deus', tipo: 'espiritual', etiqueta: 'Retiro', marco: true },
        { hora: '11:30', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '12:30', que: 'Almoço', obs: 'Fim do retiro', tipo: 'rotina' },
        { hora: '15:30', que: 'Paintball', tipo: 'atividade', etiqueta: 'Passeio', marco: true },
        { hora: '17:30', que: 'Lanche', tipo: 'rotina' },
        { hora: '19:00', que: 'Terço', tipo: 'espiritual' },
        { hora: '20:00', que: 'Jantar', tipo: 'rotina' },
        { hora: '21:00', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '22:00', que: 'Dormir', tipo: 'rotina' }
      ]
    },
    {
      dia: '01', mes: 'Jan',
      itens: [
        { hora: '06:45', que: 'Acordar', tipo: 'rotina' },
        { hora: '07:15', que: 'Missa', tipo: 'espiritual', marco: true },
        { hora: '08:30', que: 'Café da manhã', tipo: 'rotina' },
        { hora: '09:30', que: 'A Missa Nova', tipo: 'palestra', etiqueta: 'Palestra 7' },
        { hora: '10:30', que: 'Apresentação de trabalhos de membros ASJ', tipo: 'atividade' },
        { hora: '11:30', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '12:30', que: 'Almoço', tipo: 'rotina' },
        { hora: '13:30', que: 'Trabalhos / Descanso', tipo: 'rotina' },
        { hora: '15:30', que: 'A Espiritualidade da Missa Tradicional', tipo: 'palestra', etiqueta: 'Palestra 8' },
        { hora: '16:30', que: 'Jogos', tipo: 'atividade' },
        { hora: '17:30', que: 'Lanche', tipo: 'rotina' },
        { hora: '19:00', que: 'Terço', tipo: 'espiritual' },
        { hora: '20:00', que: 'Jantar', tipo: 'rotina' },
        { hora: '21:00', que: 'Trabalhos', tipo: 'rotina' },
        { hora: '22:00', que: 'Dormir', tipo: 'rotina' }
      ]
    },
    {
      dia: '02', mes: 'Jan',
      itens: [
        { hora: '06:45', que: 'Acordar', tipo: 'rotina' },
        { hora: '07:15', que: 'Missa', obs: 'Horário previsto: 8:00', tipo: 'espiritual', marco: true },
        { hora: '08:30', que: 'Café da manhã', tipo: 'rotina' },
        { hora: '09:30', que: 'Trabalhos / Encerramento', tipo: 'rotina' },
        { hora: '12:15–13:15', que: 'Almoço e encerramento oficial', tipo: 'rotina', marco: true }
      ]
    }
  ];

  /* ---------- Dados: itens obrigatórios ---------- */
  var ITENS = [
    'Mochila para caminhadas',
    'Saco de dormir',
    'Tênis para caminhadas',
    'Tênis para praticar esportes',
    'Kit de higiene pessoal',
    'Toalha de banho',
    'Meias e cuecas extras',
    '1 traje adequado para assistir à missa',
    'Roupas esportivas',
    'Capa de chuva',
    'Chapéu',
    'Missal',
    'Rosário',
    'Canivete',
    'Lanterna (que não seja o celular)',
    'Relógio (que não seja o celular)',
    'Caderno para anotações e caneta',
    '3 sacos de lixo de 100 litros'
  ];

  var VISTAS = ['inicio', 'cronograma', 'trabalhos', 'mais', 'doar'];
  var CHAVE_LISTA = 'asj-acamp-itens';

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  /* ---------- Navegação entre vistas ---------- */
  function abrirVista(nome, semRolar) {
    if (VISTAS.indexOf(nome) === -1) { nome = 'inicio'; }

    $$('.vista').forEach(function (v) {
      v.classList.toggle('ativa', v.dataset.vista === nome);
    });
    $$('.nav-btn').forEach(function (b) {
      var ativo = b.dataset.vista === nome;
      b.classList.toggle('ativo', ativo);
      b.setAttribute('aria-current', ativo ? 'page' : 'false');
    });

    if (!semRolar) { window.scrollTo({ top: 0, behavior: 'auto' }); }
    if (location.hash.slice(1) !== nome) {
      history.replaceState(null, '', '#' + nome);
    }
  }

  $$('.nav-btn').forEach(function (b) {
    b.addEventListener('click', function () { abrirVista(b.dataset.vista); });
  });

  /* Atalhos internos. Com data-ancora, rola até o elemento indicado. */
  function seguirAtalho(el) {
    abrirVista(el.dataset.ir);

    var ancora = el.dataset.ancora;
    if (!ancora) { return; }

    var alvo = document.getElementById(ancora);
    if (!alvo) { return; }

    setTimeout(function () {
      var topo = alvo.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: topo, behavior: 'smooth' });
      alvo.classList.add('realce');
      setTimeout(function () { alvo.classList.remove('realce'); }, 1600);
    }, 60);
  }

  $$('[data-ir]').forEach(function (el) {
    el.addEventListener('click', function () { seguirAtalho(el); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); seguirAtalho(el); }
    });
  });

  window.addEventListener('hashchange', function () {
    abrirVista(location.hash.slice(1));
  });

  /* ---------- Cronograma ---------- */
  function montarDia(indice) {
    var dia = CRONOGRAMA[indice];
    var html = '<div class="linha-tempo">';

    dia.itens.forEach(function (item) {
      html += '<div class="momento tipo-' + item.tipo + (item.marco ? ' marco' : '') + '">';
      html += '<span class="hora">' + item.hora + '</span>';
      if (item.etiqueta) {
        html += '<span class="etiqueta ' + item.tipo + '">' + item.etiqueta + '</span>';
      }
      html += '<p class="que">' + item.que + '</p>';
      if (item.obs) { html += '<p class="obs">' + item.obs + '</p>'; }
      html += '</div>';
    });

    html += '</div>';
    $('#conteudo-dia').innerHTML = html;

    $$('#seletor-dias .dia').forEach(function (d, i) {
      d.classList.toggle('ativo', i === indice);
      d.setAttribute('aria-pressed', i === indice ? 'true' : 'false');
    });
  }

  function montarCronograma() {
    var alvo = $('#seletor-dias');
    if (!alvo) { return; }

    alvo.innerHTML = CRONOGRAMA.map(function (d, i) {
      return '<button class="dia" type="button" data-indice="' + i + '">' +
             '<span class="n">' + d.dia + '</span>' +
             '<span class="m">' + d.mes + '</span>' +
             '</button>';
    }).join('');

    $$('#seletor-dias .dia').forEach(function (b) {
      b.addEventListener('click', function () { montarDia(Number(b.dataset.indice)); });
    });

    montarDia(0);
  }

  /* ---------- Lista de itens ---------- */
  function lerMarcados() {
    try {
      var bruto = localStorage.getItem(CHAVE_LISTA);
      return bruto ? JSON.parse(bruto) : [];
    } catch (e) { return []; }
  }

  function salvarMarcados(lista) {
    try { localStorage.setItem(CHAVE_LISTA, JSON.stringify(lista)); } catch (e) { /* sem storage */ }
  }

  function atualizarProgresso() {
    var caixas = $$('#lista-itens input');
    var feitos = caixas.filter(function (c) { return c.checked; }).length;
    $('#progresso-texto').textContent = feitos + ' de ' + caixas.length;
    $('#progresso-barra').style.width = (caixas.length ? (feitos / caixas.length) * 100 : 0) + '%';
  }

  function montarLista() {
    var alvo = $('#lista-itens');
    if (!alvo) { return; }

    var marcados = lerMarcados();
    var visto = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>';

    alvo.innerHTML = ITENS.map(function (texto, i) {
      var marcado = marcados.indexOf(i) !== -1 ? ' checked' : '';
      return '<li><label>' +
             '<input type="checkbox" data-indice="' + i + '"' + marcado + '>' +
             '<span class="caixa">' + visto + '</span>' +
             '<span class="rotulo">' + texto + '</span>' +
             '</label></li>';
    }).join('');

    $$('#lista-itens input').forEach(function (c) {
      c.addEventListener('change', function () {
        var atuais = $$('#lista-itens input')
          .filter(function (x) { return x.checked; })
          .map(function (x) { return Number(x.dataset.indice); });
        salvarMarcados(atuais);
        atualizarProgresso();
      });
    });

    atualizarProgresso();
  }

  var limpar = $('#limpar-lista');
  if (limpar) {
    limpar.addEventListener('click', function () {
      salvarMarcados([]);
      $$('#lista-itens input').forEach(function (c) { c.checked = false; });
      atualizarProgresso();
    });
  }

  /* ---------- Copiar a chave PIX ---------- */
  function avisar(texto) {
    var t = $('#torrada');
    t.textContent = texto;
    t.classList.add('visivel');
    clearTimeout(avisar._id);
    avisar._id = setTimeout(function () { t.classList.remove('visivel'); }, 2200);
  }

  var botaoPix = $('#copiar-pix');
  if (botaoPix) {
    botaoPix.addEventListener('click', function () {
      var chave = $('#chave-pix').textContent.trim();

      function reserva() {
        var campo = document.createElement('textarea');
        campo.value = chave;
        campo.setAttribute('readonly', '');
        campo.style.position = 'fixed';
        campo.style.opacity = '0';
        document.body.appendChild(campo);
        campo.select();
        try { document.execCommand('copy'); avisar('Chave PIX copiada'); }
        catch (e) { avisar('Copie manualmente: ' + chave); }
        document.body.removeChild(campo);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(chave)
          .then(function () { avisar('Chave PIX copiada'); })
          .catch(reserva);
      } else {
        reserva();
      }
    });
  }

  /* ---------- Vidro da barra superior ---------- */
  /* A barra fica mais translúcida depois que a página rola. */
  var barraTopo = $('.barra-topo');
  function ajustarVidro() {
    if (barraTopo) { barraTopo.classList.toggle('rolou', window.scrollY > 12); }
  }
  window.addEventListener('scroll', ajustarVidro, { passive: true });
  ajustarVidro();

  /* ---------- Início ---------- */
  montarCronograma();
  montarLista();
  abrirVista(location.hash.slice(1) || 'inicio', true);
})();
