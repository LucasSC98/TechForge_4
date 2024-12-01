
//
// 3. Sistema de Envio de Emails e Validação de Contato
// Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.
//
//     Implemente a validação e o envio de email na mesma classe.
//     Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
//     Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento.


class EmailSender {
    enviarEmail(contato: { nome: string; email: string }, mensagem: string) {
        if (this.validarContato(contato)) {
            console.log(`Enviando email para ${contato.email}`);
            console.log(`Mensagem: ${mensagem}`);
        } else {
            console.error('Contato inválido. Email não enviado.');
        }
    }

    private validarContato(contato: { nome: string; email: string }) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar email
        return contato.nome.trim().length > 0 && emailRegex.test(contato.email); // valida nome e email
    }
}

class ContactValidator {
    validar(contato: { nome: string; email: string }): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return contato.nome.trim().length > 0 && emailRegex.test(contato.email);
    }
}

class EmailSenderRefatorado {
    private validador: ContactValidator;

    constructor(validador: ContactValidator) {
        this.validador = validador;
    }

    enviarEmail(contato: { nome: string; email: string }, mensagem: string) {
        if (this.validador.validar(contato)) {
            console.log(`Enviando email para ${contato.email}...`);
            console.log(`Mensagem: ${mensagem}`);
        } else {
            console.error('Contato inválido. Email não enviado.');
        }
    }
}
// sem refatoração:
const emailSenderMonolitico = new EmailSender();
emailSenderMonolitico.enviarEmail({ nome: 'Lucas', email: 'lucas@email.com' }, 'Bem-vindo!');
emailSenderMonolitico.enviarEmail({ nome: 'Arlindo', email: 'emailemail' }, 'Teste');

// com refatoração:
const validador = new ContactValidator();
const emailSenderRefatorado = new EmailSenderRefatorado(validador);

emailSenderRefatorado.enviarEmail({ nome: 'Carlos', email: 'carlos@email.com' }, 'Bem-vindo!');
emailSenderRefatorado.enviarEmail({ nome: 'João', email: 'emailteste' }, 'Teste de refatoração');
