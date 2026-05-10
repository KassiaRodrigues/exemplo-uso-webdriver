import { describe, it } from 'node:test'; // Adicione esta linha
import { fazerLogin } from '../src/desafio2pontos.js'
import assert from 'node:assert';

describe('Testes do Desafio', function () {

    // 1) Sucesso
    it('Deve retornar valido quando informado email e senha válidos', function () {
        const retorno = fazerLogin('perola@gmail.com', 'perola123');
        assert.equal(retorno, 'Login realizado com sucesso.');
    });

    // 2) Credencial expirada
    it('Deve retornar que credenciais expiraram para usuario Amora', function () {
        const retorno = fazerLogin('amora@gmail.com', 'amora123');
        assert.strictEqual(retorno, 'Credenciais expiradas. Renove suas credenciais.');
    });

    // 3) Usuario não encontrado
    it('Deve retornar que credenciais não existem para o usuário informado', function () {
        const retorno = fazerLogin('kassia@gmail.com', 'amora123');
        assert.strictEqual(retorno, 'e-mail incorreto, usuário não encontrado.');
    });

    // 4) Senha incorreta para o usuário encontrado
    it('Deve retornar senha incorreta para o usuário encontrado', function () {
        const retorno = fazerLogin('dalila@gmail.com', 'amora123');
        assert.strictEqual(retorno, 'Senha incorreta para o usuário encontrado.');
    });

});
