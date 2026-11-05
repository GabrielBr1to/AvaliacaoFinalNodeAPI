import pessoa from '../model/cliente.js'
import Pessoa from '../model/atendimento.js'
import cliente from '../model/cliente.js'

class ServiceCliente {

    async Buscar() {
        return cliente.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return cliente.BuscarUm(id)
    }
    
    async Criar(nome, idade) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
        await cliente.create({nome, idade})
    }
    
    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        const clienteAlterar = cliente.findByPk(id)
        if(!clienteAlterar){
            throw new Error("cliente não encontrada")
        }
        clienteAlterar.nome = nome

        await clienteAlterar.save()
        
       await cliente.Alterar(id, nome)
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const clientedelete = await cliente.findByPk(id)
        if(!clientedelete){
            throw new Error("Favor informar o id corretamente")
        }
       await cliente.destroy(id)
    }
    
}

export default new ServiceCliente()