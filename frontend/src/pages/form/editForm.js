import React, { Component, useState, useEffect, } from 'react';

// Import de libs de react.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import de componenets
import Navbar from '../../components/navbar/navbar';

// Import de API..
import api from "../../api";

// Import de CSS.
import './form.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

const EditForm = (props) => {
  const id = props.location.params;
  // Variáveis do formulário.
  const [nomeCoordenador, setNomeCoordenador] = useState(false);
  const [tipoCurso, setTipoCurso] = useState(false);
  const [semestre, setSemestre] = useState(false);
  const [aprovacaoGrad, setAprovacaoGrad] = useState(false);
  const [aprovacaoOpt, setAprovacaoOpt] = useState(false);
  const [conceitos, setConceitos] = useState(false);
  const [reprovadoTotal, setReprovadoTotal] = useState(false);
  const [reprovadoUltimoSemestre, setReprovadoUltimoSemestre] = useState(false);
  const [aprovaProef, setAprovaProef] = useState(false);
  const [exameQualificador, setExameQualificador] = useState(false);
  const [limiteQuali, setLimiteQuali] = useState(false);
  const [limiteTese, setLimiteTese] = useState(false);
  const [artigoAceito, setArtigoAceito] = useState(false);
  const [artigoAguardando, setArtigoAguardando] = useState(false);
  const [estagioArtigoSubmissao, setEstagioArtigoSubmissao] = useState(false);
  const [estagioPesquisa, setEstagioPesquisa] = useState(false);
  const [partiCongressoNacional, setPartiCongressoNacional] = useState(false);
  const [particiCongressoExterior, setParticiCongressoExterior] = useState(false);
  const [partiPesquisaExterior, setPartiPesquisaExterior] = useState(false);
  const [algoDeclarar, setAlgoDeclarar] = useState(false);
  const [idAluno, setIdAluno] = useState(false);

  // Objeto a ser enviado
  let form = {
    id_coordenador: '',
    tipo_curso: '',
    semestre: '',
    aprovacao_grad: '',
    aprovacao_opt: '',
    conceitos: '',
    reprova_total: '',
    reprova_ultimo_semestre: '',
    aprova_proef: '',
    exame_quali: '',
    limite_quali: '',
    limite_tese: '',
    artigos_aceito: '',
    artigos_aguardando: '',
    estagio_artigo_submissao: '',
    estagio_pesquisa: '',
    participou_congresso_nacional: '',
    participou_congresso_exterior: '',
    participou_pesquisa_exterior: '',
    algo_declarar: '',
    id_aluno: ''
  }

  // Métodos declarados
  function findCoordenador() {
    //TODO
    return undefined;
  }

  async function HandleSubmit() {
    try {
      await api
      .post(`/formulario/${form.id_aluno}`, {
        id_coordenador: '',
        tipo_curso: '',
        semestre: '',
        aprovacao_grad: '',
        aprovacao_opt: '',
        conceitos: '',
        reprova_total: '',
        reprova_ultimo_semestre: '',
        aprova_proef: '',
        exame_quali: '',
        limite_quali: '',
        limite_tese: '',
        artigos_aceito: '',
        artigos_aguardando: '',
        estagio_artigo_submissao: '',
        estagio_pesquisa: '',
        participou_congresso_nacional: '',
        participou_congresso_exterior: '',
        participou_pesquisa_exterior: '',
        algo_declarar: '',
        id_aluno: ''
      })
      .then((response) => {
        alert("Formulário enviado!!!");
      })
      //login(response.data.token);
      props.history.push("/dashboard");
    } catch (e) {
      console.log(e);
      console.log(e.res.status(400).json({ msg: e }));
    }
  }

  function findForm(id) {
    // TODO 
    // GET(id);
  }

  function submitNewForm() {
    // TODO
    // SUBMIT(id);
  }

  function HandleNomeCoordenador(e) {
    setNomeCoordenador(e.target.value);
  }

  function HandleTipoCurso(e) {
    setTipoCurso(e.target.value);
  }

  function HandleSemestre(e) {
    setSemestre(e.target.value);
  }

  function HandleAprovacaoGrad(e) {
    setAprovacaoGrad(e.target.value);
  }

  function HandleAprovacaoOpt(e) {
    setAprovacaoOpt(e.target.value);
  }

  function HandleConceitos(e) {
    setConceitos(e.target.value);
  }

  function HandleReprovadoTotal(e) {
    setReprovadoTotal(e.target.value);
  }

  function HandleReprovadoUltimoSemestre(e) {
    setReprovadoUltimoSemestre(e.target.value);
  }

  function HandleAprovaProef(e) {
    setAprovaProef(e.target.value);
  }

  function HandleExameQualificador(e) {
    setExameQualificador(e.target.value);
  }

  function HandleLimiteQuali(e) {
    setLimiteQuali(e.target.value);
  }

  function HandleLimiteTese(e) {
    setLimiteTese(e.target.value);
  }

  function HandleArtigoAceito(e) {
    setArtigoAceito(e.target.value);
  }

  function HandleArtigoAguardando(e) {
    setArtigoAguardando(e.target.value);
  }

  function HandleEstagioArtigoSubmissao(e) {
    setEstagioArtigoSubmissao(e.target.value);
  }

  function HandleEstagioPesquisa(e) {
    setEstagioPesquisa(e.target.value);
  }

  function HandlePesquisaExterior(e) {
    setPartiPesquisaExterior(e.target.value);
  }

  function HandlePartiCongressoNacional(e) {
    setPartiCongressoNacional(e.target.value);
  }

  function HandleParticiCongressoExterior(e) {
    setParticiCongressoExterior(e.target.value);
  }

  function HandleCoordenador(e) {
    setAlgoDeclarar(e.target.value);
  }

  function HandleIdAluno(e) {
    setIdAluno(e.target.value);
  }

  return (
    <>
      <div id="main-form">
        <Navbar isOnFormsPage={true} />
        <div id="container">
          <h1 className="text-center noselect">Formulário {id}</h1>
          <form className="form container" onSubmit={HandleSubmit}>
            <h2 className="noselect">Dados gerais<hr className="my-2"></hr></h2>
            <div className="form-wrapper">
              <div className="input-group form-floating">
                <input type="name" className="defaultInput form-control" id="floatingInput" placeholder="Nome" aria-label="Nome" />
                <label className="noselect" htmlFor="floatingInput">Nome do coordenador</label>
              </div>
            </div>
            <div className="content-checkbox noselect">
              <label className="noselect">Qual o tipo do seu curso ?</label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="cRadios1" value="doutorado" />
                  <label className="form-check-label" htmlFor="cRadios1">
                    Doutorado
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="cRadios2" value="mestrado" />
                  <label className="form-check-label" htmlFor="cRadios2">
                    Mestrado
                  </label>
                </li>
              </ul>
            </div>
            <h4 className="noselect">Referente ao ultimo semestre concluido.</h4>
            <div className="content-checkbox noselect">
              <label className="noselect">(Ignorar se for do mestrado) Semestre atual:</label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="bRadios1" value="semestre-1" />
                  <label className="form-check-label" htmlFor="bRadios1">
                    1° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="bRadios2" value="semestre-2" />
                  <label className="form-check-label" htmlFor="bRadios2">
                    2° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="bRadios3" value="semestre-3" />
                  <label className="form-check-label" htmlFor="bRadios3">
                    3° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="bRadios4" value="semestre-4" />
                  <label className="form-check-label" htmlFor="bRadios4">
                    4° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="bRadios5" value="semestre-5" />
                  <label className="form-check-label" htmlFor="bRadios5">
                    5° semestre
                  </label>
                </li>
              </ul>
            </div>

            <div className="content-checkbox noselect">
              <label className="noselect">(Apenas para quem é do mestrado) Semestre atual:</label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="mRadios1" value="semestre-1" />
                  <label className="form-check-label" htmlFor="mRadios1">
                    1° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="mRadios2" value="semestre-2" />
                  <label className="form-check-label" htmlFor="mRadios2">
                    2° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="mRadios3" value="semestre-3" />
                  <label className="form-check-label" htmlFor="mRadios3">
                    3° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="mRadios4" value="semestre-4" />
                  <label className="form-check-label" htmlFor="mRadios4">
                    4° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="mRadios5" value="semestre-5" />
                  <label className="form-check-label" htmlFor="mRadios5">
                    5° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="mRadios6" value="semestre-6" />
                  <label className="form-check-label" htmlFor="mRadios6">
                    6° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="mRadios7" value="semestre-7" />
                  <label className="form-check-label" htmlFor="mRadios7">
                    7° semestre
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="mRadios8" value="semestre-8" />
                  <label className="form-check-label" htmlFor="mRadios8">
                    8° semestre
                  </label>
                </li>
              </ul>
            </div>
            <h2 className="noselect">Atividades didáticas <hr className="my-2"></hr></h2>
            <div className="form-wrapper">
              <label>Em quantas disciplinas obrigatórias você já obteve aprovação ?</label>
              <div className="input-group form-floating">
                <input type="name" className="defaultInput form-control" id="floatingInput" placeholder="Nome" aria-label="Nome" />
                <label className="noselect" htmlFor="floatingInput">Resposta</label>
              </div>
            </div>
            <div className="form-wrapper">
              <label>Em quantas disciplinas optativas você já obteve aprovação ?</label>
              <div className="input-group form-floating">
                <input type="name" className="defaultInput form-control" id="floatingInput" placeholder="Nome" aria-label="Nome" />
                <label className="noselect" htmlFor="floatingInput">Resposta</label>
              </div>
            </div>

            <div className="content-checkbox">
              <label className="noselect">
                Todos os conceitos em disciplinas cursadas no último semestre já foram divulgados? Caso não, espere até 2 dias antes da data máxima definida no site do PPgSI para enviar o seu relatório.
              </label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="disciplinaRadios1" value="Sim" />
                  <label className="form-check-label" htmlFor="disciplinaRadios1">
                    Sim.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="disciplinaRadios2" value="Não" />
                  <label className="form-check-label" htmlFor="disciplinaRadios2">
                    Não.
                  </label>
                </li>
              </ul>
            </div>

            <div className="content-checkbox">
              <label className="noselect">Em quantas disciplinas você foi reprovado desde o início do mestrado/doutorado?</label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="repRadios1" value="0" />
                  <label className="form-check-label" htmlFor="repRadios1">
                    0
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="repRadios2" value="1" />
                  <label className="form-check-label" htmlFor="repRadios2">
                    1
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="repRadios3" value="2" />
                  <label className="form-check-label" htmlFor="repRadios3">
                    2
                  </label>
                </li>
              </ul>
            </div>

            <div className="content-checkbox">
              <label className="noselect">Em quantas disciplinas vocês foi reprovado no último semestre cursado?</label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="repSemestreRadios1" value="0" />
                  <label className="form-check-label" htmlFor="repSemestreRadios1">
                    0
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="repSemestreRadios2" value="1" />
                  <label className="form-check-label" htmlFor="repSemestreRadios2">
                    1
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="repSemestreRadios3" value="2" />
                  <label className="form-check-label" htmlFor="repSemestreRadios3">
                    2
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="repSemestreRadios4" value="terminado" />
                  <label className="form-check-label" htmlFor="repSemestreRadios4">
                    Já temrinei as disciplinas.
                  </label>
                </li>
              </ul>
            </div>

            <div className="content-checkbox">
              <label className="noselect">Você já foi aprovado no exame de proficiência em idiomas?</label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="idiomaRadios1" value="Sim" />
                  <label className="form-check-label" htmlFor="idiomaRadios1">
                    Sim.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="idiomaRadios2" value="Não" />
                  <label className="form-check-label" htmlFor="idiomaRadios2">
                    Não.
                  </label>
                </li>
              </ul>
            </div>

            <h2 className="noselect">Atividades de pesquisa <hr className="my-2"></hr></h2>
            <div className="content-checkbox">
              <label className="noselect">Você realizou o exame de qualificação ?</label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exameRadios1" value="Sim-Aprovado" />
                  <label className="form-check-label" htmlFor="exameRadios1">
                    Sim, fui aprovado.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exameRadios2" value="Sim-Reprovado" />
                  <label className="form-check-label" htmlFor="exameRadios2">
                    Sim, fui reprovado.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exameRadios3" value="Não" />
                  <label className="form-check-label" htmlFor="exameRadios3">
                    Não.
                  </label>
                </li>
              </ul>
            </div>

            <div className="content-checkbox">
              <label className="noselect">Se não qualificou, quanto tempo falta para o limite máximo de qualificação?</label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="repQualificarTempo1" value="menor-3-meses" />
                  <label className="form-check-label" htmlFor="repQualificarTempo1">
                    Menos de 3 meses.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="repQualificarTempo2" value="entre-3-6-meses" />
                  <label className="form-check-label" htmlFor="repQualificarTempo2">
                    Entre 3 a 6 meses.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="repQualificarTempo3" value="mais-de-6-meses" />
                  <label className="form-check-label" htmlFor="repQualificarTempo3">
                    Mais de 6 meses.
                  </label>
                </li>
              </ul>
            </div>

            <div className="content-checkbox">
              <label className="noselect">
                Se você já fez sua qualificação e foi aprovado, quanto tempo falta para o limite máximo do depósito da sua dissertação/tese?
              </label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="aprQualificarTempo1" value="menor-3-meses" />
                  <label className="form-check-label" htmlFor="aprQualificarTempo1">
                    Menos de 3 meses.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="aprQualificarTempo2" value="entre-3-6-meses" />
                  <label className="form-check-label" htmlFor="aprQualificarTempo2">
                    Entre 3 a 6 meses.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="aprQualificarTempo3" value="mais-de-6-meses" />
                  <label className="form-check-label" htmlFor="aprQualificarTempo3">
                    Mais de 6 meses.
                  </label>
                </li>
              </ul>
            </div>

            <div className="content-checkbox">
              <label className="noselect">
                Quantos artigos referentes a sua pesquisa de mestrado/doutorado você teve aceitos ou publicados? (Obs: Você deve inserir os artigos publicados no seu currículo Lattes)
              </label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="lattesRadios1" value="0" />
                  <label className="form-check-label" htmlFor="lattesRadios1">
                    0.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="lattesRadios2" value="1" />
                  <label className="form-check-label" htmlFor="lattesRadios2">
                    1.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="lattesRadios3" value="mais-de-2" />
                  <label className="form-check-label" htmlFor="lattesRadios3">
                    Mais de 2.
                  </label>
                </li>
              </ul>
            </div>

            <div className="content-checkbox">
              <label className="noselect">Quantos artigos você submeteu e ainda estão aguardando resposta?</label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="aguardoLattesRadios1" value="0" />
                  <label className="form-check-label" htmlFor="aguardoLattesRadios1">
                    0.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="aguardoLattesRadios2" value="1" />
                  <label className="form-check-label" htmlFor="aguardoLattesRadios2">
                    1.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="aguardoLattesRadios3" value="mais-de-2" />
                  <label className="form-check-label" htmlFor="aguardoLattesRadios3">
                    Mais de 2.
                  </label>
                </li>
              </ul>
            </div>

            <div className="content-checkbox">
              <label className="noselect">Você possui artigo em preparação para submissão? Qual o estágio dele?</label>
              <ul className="list-group list-group-check-box">
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="artigoRadios1" value="nao-possou" />
                  <label className="form-check-label" htmlFor="artigoRadios1">
                    Não possuo.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="artigoRadios2" value="em-elaboracao" />
                  <label className="form-check-label" htmlFor="artigoRadios2">
                    Experimentos em elaboração.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="artigoRadios3" value="em-coleta-de-dados" />
                  <label className="form-check-label" htmlFor="artigoRadios3">
                    Aguardando coleta de dados.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="artigoRadios4" value="em-fase-escrita" />
                  <label className="form-check-label" htmlFor="artigoRadios4">
                    Em fase de escrita.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="artigoRadios5" value="em-fase-traducao" />
                  <label className="form-check-label" htmlFor="artigoRadios5">
                    Em fase de tradução.
                  </label>
                </li>
                <li className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="artigoRadios6" value="em-preparo-repostas-revisores" />
                  <label className="form-check-label" htmlFor="artigoRadios6">
                    Preparando respostas para os revisores.
                  </label>
                </li>
              </ul>
            </div>

            <div className="form-wrapper">
              <label className="noselect">
                Qual o estágio atual de sua pesquisa? Apresente toda e qualquer atividade que já tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que ainda incompleta). Faça uma descrição detalhada.
              </label>
              <textarea type="name" className="defaultTextArea form-control" id="floatingInput" aria-label="Nome" />
            </div>

            <div className="form-wrapper">
              <label className="noselect">
                Você participou de algum congressos no país? Se sim, indicar local, se houve apresentação de trabalho e se o congresso é ou não internacional.
              </label>
              <textarea type="name" className="defaultTextArea form-control" id="floatingInput" aria-label="Nome" />
            </div>

            <div className="form-wrapper">
              <label className="noselect">
                Você participou de algum congresso no exterior? Se sim, indicar local e se houve apresentação de trabalho.
              </label>
              <textarea type="name" className="defaultTextArea form-control" id="floatingInput" aria-label="Nome" />
            </div>

            <div className="form-wrapper">
              <label className="noselect">
                Você realizou algum estágio de pesquisa ou visita de pesquisa no exterior (incluindo sanduíche)? Se sim, indique o nome da universidade e o período.
              </label>
              <textarea type="name" className="defaultTextArea form-control" id="floatingInput" aria-label="Nome" />
            </div>

            <div className="form-wrapper">
              <label className="noselect">Você tem algo a mais a declarar para a CCP - PPgSI?</label>
              <textarea type="name" className="defaultTextArea form-control" id="floatingInput" aria-label="Você tem algo a mais a declarar para a CCP - PPgSI?" />
            </div>

            <div className="btn-group">
              <div className="btn-div-size">
                <button type="submit" className="btn btnSubmitO" id="btnSubmit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditForm;