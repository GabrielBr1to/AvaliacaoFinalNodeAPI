import Atendimento from '../model/atendimento.js'


class ServiceAtendimento {

    async Buscar() {
        return Atendimento.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Atendimento.findByPk(id)
    }
    
    async Criar(id, dia, hora, valor, concluido) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
        await Atendimento.create({id, dia, hora, valor, concluido})
    }
    
    async Alterar(id, dia, hora, valor, concluido) {
        if(!id || isNaN(id) ) {
            throw new Error("Favor informar todos os dados")
        }
        const AtendimentoAlterar = Atendimento.findByPk(id)
        if(!AtendimentoAlterar){
            throw new Error("Atendimento não encontrada")
        }
        AtendimentoAlterar.nome = nome

        await AtendimentoAlterar.save()
        
       await Atendimento.Alterar(id, dia, hora, valor, concluido)
    }

    async AlterarStatus(id) {
         if (!id || isNaN(id)) {
            throw new Error ("Por favor informar todos dados")
        }
        await Service.AlterarStatus(id)
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const atendimentodelete = await Atendimento.findByPk(id)
        if(!atendimentodelete){
            throw new Error("Favor informar o id corretamente")
        }
       await Atendimento.destroy(id)
    }
    
}

export default new ServiceAtendimento()