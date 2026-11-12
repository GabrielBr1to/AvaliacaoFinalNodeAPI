import ServiceAtendimento from '../service/atendimento.js'

class ControllerCliente {

    async Buscar(req, res) {
        try {
            const nomes = await ServiceAtendimento.Buscar()

            res.send({ nomes })
        } catch (e) {
            res.send({ message: e.message })
        }
    }


    async Criar(req, res) {
        try {
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluido
            await ServiceAtendimento.Criar(dia, hora, valor, concluido)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            ServiceAtendimento.Alterar(id, nome)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    

}

export default new ControllerCliente()