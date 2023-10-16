function Conta(){
var nomeCorretista
var banco
var numConta
var saldo

    this.setNomeCorretista = function(nome){
        this.nomeCorretista = nome
    }

    this.setBanco = function(banco){
        this.banco = banco
    }

    this.setNumConta = function(numConta){
        this.numConta = numConta
    }

    this.setSaldo = function(saldo){
        this.saldo = saldo
    }

    this.getNomeCorretista = function(){
        return this.nomeCorretista
    }

    this.getBanco = function(){
        return this.banco
    }

    this.getNumConta = function(){
        return this.numConta
    }

    this.getSaldo = function(){
        return this.saldo
    }
}

function ContaCorrente(){
    var saldoEspecial
    
    this.setSaldoEspecial = function(saldo){
        this.saldoEspecial = saldo
    }

    this.getSaldoEspecial = function(){
        return this.saldoEspecial
    }
}

function ContaPoupanca(){
    var juros
    var dataVencimento

    this.setJuros = function(juros){
        this.juros = juros
    }

    this.getJuros = function(){
        return this.juros
    }

    this.setDataVencimento = function(dataVencimento){
        this.dataVencimento = dataVencimento
    }

    this.getDataVencimento = function(){
        return this.dataVencimento
    }


}

function rodar(){
    ContaCorrente.prototype = new Conta()
    ContaPoupanca.prototype = new Conta()

    var conta = new Conta()
    conta.setNomeCorretista('Afonso')
    conta.setBanco('GBank')
    conta.setNumConta(1010)
    conta.setSaldo(0.00)

    var contaCorrente = new ContaCorrente()
    contaCorrente.setNomeCorretista('Julia')
    contaCorrente.setBanco('GBank')
    contaCorrente.setNumConta(2020)
    contaCorrente.setSaldo(10000.00)
    contaCorrente.setSaldoEspecial(100.00)

    var contaPoupanca = new ContaPoupanca()
    contaPoupanca.setNomeCorretista('Rarissa')
    contaPoupanca.setBanco('Falhido')
    contaPoupanca.setNumConta(3030)
    contaPoupanca.setSaldo(999999999999999.00)
    contaPoupanca.setJuros(0.1)
    contaPoupanca.setDataVencimento('10/12/2023')

    document.getElementById('Conta').innerHTML = conta.getNomeCorretista() + "<br>" + conta.getBanco() + "<br>" + conta.getNumConta() + "<br>" + conta.getSaldo()
    document.getElementById('ContaCorrente').innerHTML = contaCorrente.getNomeCorretista() + "<br>" + contaCorrente.getBanco() + "<br>" + contaCorrente.getNumConta() + "<br>" + contaCorrente.getSaldo() + "<br>" + contaCorrente.getSaldoEspecial()
    document.getElementById('ContaPoupanca').innerHTML = contaPoupanca.getNomeCorretista() + "<br>" + contaPoupanca.getBanco() + "<br>" + contaPoupanca.getNumConta() + "<br>" + contaPoupanca.getSaldo() + "<br>" + contaPoupanca.getJuros() + "<br>" + contaPoupanca.getDataVencimento()
}