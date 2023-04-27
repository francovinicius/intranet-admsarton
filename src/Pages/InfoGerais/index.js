import styles from "./InfoGerais.css"
import Presentation from "./Presentation"


export default function () {
    return (
        <div>

            <Presentation />

            <section className="info-gerais" id="info-gerais">
                <h2>Selecione Seu Setor</h2>

                <div className="div-card-info d-flex justify-content-center" id="acuttis-tutoriais">

                    <div className="card mb-3 card-info card-style">
                        <div className="row div-column g-0">
                            <div className="div-img col-md-4">
                                <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id="normas-diretrizes">
                                    <a href="/treinamentogalpao">
                                        <h5 className="card-title text-center">Dep. Pessoal e Recursos Humanos</h5>
                                    </a>
                                    <p className="card-text">Neste card você encontrará todos os processos relacionados ao respectivo setor.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 25-04-2023</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 card-info card-style">
                        <div className="row div-column g-0">
                            <div className="div-img col-md-4">
                                <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id="normas-diretrizes">
                                    <a href="/treinamentogalpao">
                                        <h5 className="card-title text-center">Dep. Cruzamentos de Dados</h5>
                                    </a>
                                    <p className="card-text">Neste card você encontrará todos os processos relacionados ao respectivo setor.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 25-04-2023</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 card-info card-style">
                        <div className="row div-column g-0">
                            <div className="div-img col-md-4">
                                <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id="normas-diretrizes">
                                    <a href="/treinamentogalpao">
                                        <h5 className="card-title text-center">Dep. Financeiro e Compras</h5>
                                    </a>
                                    <p className="card-text">Neste card você encontrará todos os processos relacionados ao respectivo setor.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 25-04-2023</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 card-info card-style">
                        <div className="row div-column g-0">
                            <div className="div-img col-md-4">
                                <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id="normas-diretrizes">
                                    <a href="/treinamentogalpao">
                                        <h5 className="card-title text-center">Dep. de Serviços Patrimoniais</h5>
                                    </a>
                                    <p className="card-text">Neste card você encontrará todos os processos relacionados ao respectivo setor.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 25-04-2023</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 card-info card-style">
                        <div className="row div-column g-0">
                            <div className="div-img col-md-4">
                                <img src="./assets/img/logo.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" id="normas-diretrizes">
                                    <a href="/treinamentogalpao">
                                        <h5 className="card-title text-center">Dep. Tecnologia da Informação</h5>
                                    </a>
                                    <p className="card-text">Neste card você encontrará todos os processos relacionados ao respectivo setor.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 25-04-2023</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </section>
        </div>

    )
}