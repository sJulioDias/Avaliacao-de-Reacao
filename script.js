
    // ===============================
    // Dados dos itens por seção
    // ===============================
    // 1. Desempenho do Educador
    const itensDesempenho = [
      {id:"dominio", texto:"O educador demonstrou domínio dos conteúdos abordados no curso."},
      {id:"clareza", texto:"O educador expôs suas ideias com clareza."},
      {id:"fundamentacao", texto:"Os argumentos apresentados pelo educador foram bem fundamentados."},
      {id:"estímulo", texto:"O educador estimulou os participantes para a aprendizagem."},
      {id:"teoria-realidade", texto:"O educador relacionou a teoria apresentada no curso com a realidade do Banco."},
      {id:"questoes", texto:"As questões formuladas pelo educador foram adequadas para a aprendizagem."},
      {id:"experiencia", texto:"O educador aproveitou a experiência dos participantes para enriquecer o processo de aprendizagem."},
      {id:"flexibilidade", texto:"O educador demonstrou flexibilidade para atender às necessidades dos participantes."},
      {id:"criticas", texto:"O educador recebeu as críticas e sugestões oferecidas pelos participantes de forma positiva, no decorrer do curso."},
      {id:"feedbacks", texto:"Os “feedbacks” oferecidos pelo educador sobre o desempenho dos participantes, durante o curso, foram adequados."},
      {id:"verificacao", texto:"O educador verificou periodicamente o grau de compreensão da turma sobre os conteúdos abordados."},
      {id:"recursos-ensino", texto:"Os recursos de ensino (ex.: projetores, vídeos, flip-charts e quadros) foram utilizados adequadamente pelo educador."},
      {id:"tempo", texto:"O educador administrou o tempo de forma produtiva."},
      {id:"objetivos", texto:"O educador apresentou adequadamente os objetivos do curso."},
      {id:"linguagem", texto:"A linguagem utilizada pelo educador facilitou a compreensão dos conteúdos."},
    ];

    // 2 Procedimentos de ensino
    const itensProcedimento = [
      {id:"conteudos-adequacao", texto:"Os conteúdos abordados foram adequados para o alcance dos objetivos de aprendizagem do curso."},
      {id:"conteudos-profundidade", texto:"Os conteúdos foram abordados em profundidade condizente com minhas necessidades profissionais."},
      {id:"casos-praticos", texto:"Os casos e exemplos práticos apresentados no curso relacionaram a teoria com a prática de forma adequada."},
      {id:"atividades-facilidade", texto:"As atividades de ensino (ex.: aulas expositivas, trabalhos em grupo e leituras) facilitaram minha aprendizagem."},
      {id:"atividades-diversificacao", texto:"As atividades de ensino foram diversificadas."},
      {id:"atividades-sequencia", texto:"A seqüência das atividades do curso facilitou a minha aprendizagem."},
      {id:"estrategia-aprendizagem", texto:"As estratégias de acompanhamento da aprendizagem (testes, exercícios, simulações) foram adequadas para promover o meu desenvolvimento."},      
      {id:"carga-horaria", texto:"A carga horária total recomendada foi suficiente para a realização do curso."},
      {id:"verificacao-aprendiz", texto:"A verificação de aprendizagem apresentou grau de profundidade adequado aos conteúdos abordados no curso."},
    ];
    // 3 Processo de Aprendizagem
    const itensProcesso = [
      {id:"integracao-participantes", texto:"O nível de integração entre os participantes foi satisfatório."},
      {id:"motivacao-turma", texto:"A turma manteve-se motivada durante o curso."},
      {id:"integracao-educador", texto:"O nível de integração entre os participantes e o educador foi satisfatório."},
      {id:"igualdade-participacao", texto:"Houve igualdade de oportunidades para a participação dos treinandos."},
      {id:"facilidade-compreensao", texto:"Tive facilidade para compreender os conteúdos do curso durante a sua realização."},
      {id:"feedbacks-colegas", texto:"Os “feedbacks” que recebi dos colegas de treinamento, no decorrer do curso, foram pertinentes para o meu desenvolvimento."},
      {id:"horarios-treinamento", texto:"Cumpri os horários definidos para o treinamento."},
    ];

    // 4 Recursos e Apoio
    const itensRecursos = [
      {id:"material-qualidade", texto:"O material didático era de boa qualidade."},
      {id:"recursos-audiovisuais", texto:"Os recursos audiovisuais (exemplo: filmes, transparências e projetores) eram de boa qualidade."},
      {id:"recursos-ensino", texto:"Os recursos de ensino (exemplo: projetores, vídeos, flip-charts e quadros) foram adequados para o atingimento dos objetivos do curso."},
      {id:"equipamentos-quantidade", texto:"Os equipamentos (micro, impressora, etc) foram disponibilizados em quantidade e qualidade adequados para a realizaçãodas atividades do curso."},
      {id:"ambiente-fisico", texto:"O ambiente físico quanto à temperatura, iluminação e nível de ruído foi apropriado para a realização das atividades do curso."},
      {id:"apoio-gerencia", texto:"O gerente da minha equipe prestou apoio adequado para a realização do treinamento."},
      {id:"apoio-colegas", texto:"Os colegas da minha dependência me apoiaram para a realização do curso."},
      {id:"apoio-regional", texto:"O apoio administrativo prestado pela Gepes Regional para a realização do curso foi adequado."},
    ];

    // 5. Resultados e Aplicabilidade
    const itensResultados = [
      {id:"dominio-pre", texto:"Antes do curso, eu já dominava os conteúdos descritos nos objetivos do treinamento."},
      {id:"dominio-pos", texto:"Ao final do curso, tenho domínio dos conteúdos abordados."},
      {id:"transmitir", texto:"Sou capaz de transmitir os conteúdos adquiridos no curso a outros colegas de trabalho."},
      {id:"aplicar", texto:"Sou capaz de aplicar o que aprendi no curso em diferentes situações de trabalho."},
      {id:"motivado-aplicar", texto:"Sinto-me motivado(a) para aplicar, em minhas atividades de trabalho, o que aprendi no treinamento."},
      {id:"utilidade", texto:"Os conteúdos tratados no curso são úteis para a realização das minhas atividades de trabalho."},
      {id:"relevancia-desempenho", texto:"O curso mostrou-se relevante para aprimorar o meu desempenho no trabalho atual."},
      {id:"aplicavel-futuro", texto:"Os conteúdos tratados no curso podem ser aplicados na execução de futuras atividades de trabalho."},
      {id:"relevancia-carreira", texto:"O que aprendi no curso é relevante para o alcance dos meus objetivos de desenvolvimento profissional (carreira)."},
      {id:"indicar-curso", texto:"Pretendo indicar este curso para os meus colegas de trabalho."},
    ];

    // ===============================
    // Utilidades de UI (estrelas)
    // ===============================
    /** Cria um componente de estrelas 1-10 e devolve o container. */
    function createStarControl({onChange, initialValue, ariaLabel}) {
      const wrap = document.createElement('div');
      wrap.className = 'star-rating';
      const stars = document.createElement('div');
      stars.className = 'stars';
      stars.setAttribute('role', 'radiogroup');
      stars.setAttribute('aria-label', ariaLabel || 'Avaliação em estrelas');
      // Controle de foco via teclado
      stars.tabIndex = 0;

      let value = (initialValue ?? 0);
      const buttons = [];
      for (let i = 1; i <= 10; i++) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'star';
        b.setAttribute('aria-label', i + (i === 1 ? ' estrela' : ' estrelas'));
        b.dataset.value = String(i);
        b.textContent = '★';
        if (i <= value) b.classList.add('filled');
        b.addEventListener('click', () => {
          value = i;
          update();
          onChange?.(value);
        });
        buttons.push(b);
        stars.appendChild(b);
      }

      const naWrap = document.createElement('div');
      naWrap.className = 'na-row';
      const naLabel = document.createElement('label');
      naLabel.className = 'na-toggle';
      const naInput = document.createElement('input');
      naInput.type = 'checkbox';
      naInput.addEventListener('change', () => {
        if (naInput.checked) {
          value = 'NA';
          update();
          onChange?.('NA');
        } else {
          value = 0;
          update();
          onChange?.(0);
        }
      });
      naLabel.appendChild(naInput);
      naLabel.appendChild(document.createTextNode('NA – Não se aplica'));
      naWrap.appendChild(naLabel);

      function update() {
        buttons.forEach(btn => {
          const v = parseInt(btn.dataset.value, 10);
          btn.classList.toggle('filled', typeof value === 'number' && v <= value);
          btn.disabled = (value === 'NA');
        });
        stars.style.opacity = value === 'NA' ? '0.5' : '1';
      }

      // Acessibilidade: setas esquerda/direita ajustam o valor
      stars.addEventListener('keydown', (e) => {
        if (naInput.checked) return; // desabilitado
        if (['ArrowRight','ArrowUp'].includes(e.key)) {
          e.preventDefault();
          value = Math.min(10, (typeof value === 'number' ? value + 1 : 1));
          update(); onChange?.(value);
        } else if (['ArrowLeft','ArrowDown'].includes(e.key)) {
          e.preventDefault();
          value = Math.max(0, (typeof value === 'number' ? value - 1 : 0));
          update(); onChange?.(value);
        } else if (e.key === '0') { e.preventDefault(); value = 0; update(); onChange?.(value); }
      });

      // Métodos auxiliares expostos
      wrap.getValue = () => value;
      wrap.setValue = (v) => {
        value = v;
        naInput.checked = (v === 'NA');
        update();
      };

      wrap.appendChild(stars);
      wrap.appendChild(naWrap);
      return wrap;
    }

// ===============================
// Estado de avaliação
// ===============================
const estado = {
  desempenho: { A: {}, B: {} }, // por educador
  procedimento: {},
  processo: {},
  recursos: {},
  resultados: {}
};

// ===============================
// Montagem dinâmica das tabelas
// ===============================
function montarTabelaGenerica(tbodyId, itens, grupo, isPorEducador=false, educador=null) {
  const tbody = document.getElementById(tbodyId);
  itens.forEach(item => {
    const tr = document.createElement('tr');
    const tdLabel = document.createElement('td');
    tdLabel.className = 'item-label';
    tdLabel.textContent = item.texto;

    const tdCtrl = document.createElement('td');
    const ctrl = createStarControl({
      ariaLabel: item.texto,
      initialValue: 0,
      onChange: (val) => {
        if (isPorEducador && educador) {
          estado[grupo][educador][item.id] = val;
        } else {
          estado[grupo][item.id] = val;
        }
      }
    });
    tdCtrl.appendChild(ctrl);

    tr.appendChild(tdLabel);
    tr.appendChild(tdCtrl);
    tbody.appendChild(tr);
  });
}

//Calcula as médias:
function calcularMedia(obj) {
  const valores = Object.values(obj).filter(v => typeof v === "number");
  if (valores.length === 0) return null;
  const soma = valores.reduce((a,b) => a+b, 0);
  return soma / valores.length;
}

// Constrói as seções
montarTabelaGenerica('body-desempenho-A', itensDesempenho, 'desempenho', true, 'A');
montarTabelaGenerica('body-desempenho-B', itensDesempenho, 'desempenho', true, 'B');
montarTabelaGenerica('body-procedimento', itensProcedimento, 'procedimento', false);
montarTabelaGenerica('body-processo', itensProcesso, 'processo', false);
montarTabelaGenerica('body-recursos', itensRecursos, 'recursos', false);
montarTabelaGenerica('body-resultados', itensResultados, 'resultados', false);

// ===============================
// Exportar para JSON
// ===============================
function coletarAvaliacao() {
  const dados = {
    treinamento: {
      curso: document.getElementById('curso').value || null,
      local: document.getElementById('local').value || null,
      data: document.getElementById('data').value || null,
    },
    educadores: {
      A: {
        nome: document.getElementById('educadorA').value || null,
        notas: estado.desempenho.A,
        media: calcularMedia(estado.desempenho.A)
      },
      B: {
        nome: document.getElementById('educadorB').value || null,
        notas: estado.desempenho.B,
        media: calcularMedia(estado.desempenho.B)
      }
    },
    procedimentos: {
      notas: estado.procedimento,
      media: calcularMedia(estado.procedimento)
    },
    processo: {
      notas: estado.processo,
      media: calcularMedia(estado.processo)
    },
    recursos: {
      notas: estado.recursos,
      media: calcularMedia(estado.recursos)
    },
    resultados: {
      notas: estado.resultados,
      media: calcularMedia(estado.resultados)
    },
    comentarios: document.getElementById('comentarios').value || null
  };
  return dados;
}


function baixarJSON() {
  const dados = coletarAvaliacao();
  const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'avaliacao.json';
  a.click();
  URL.revokeObjectURL(url);
}

