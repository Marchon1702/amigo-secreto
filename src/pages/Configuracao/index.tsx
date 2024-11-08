import Card from "../../components/Card"
import Footer from "../../components/Footer"
import Formulario from "../../components/Formulario"
import ListaParticipantes from "../../components/ListaParticipantes"

const Configuracao = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Footer />
            </section>
        </Card>
    )
}

export default Configuracao