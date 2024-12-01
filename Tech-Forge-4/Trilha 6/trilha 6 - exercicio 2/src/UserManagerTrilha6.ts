// 2. Gerenciamento de Usuários e Notificações
// Implemente uma classe UserManager que gerencie a criação de usuários e envie notificações por email.
//
//     Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
//     Em seguida, refatore para dividir a responsabilidade de envio de notificação em uma classe EmailNotification.
//     Objetivo: Aumentar a coesão separando a lógica de notificação e reduzir o acoplamento ao injetar EmailNotification na UserManager.



class EmailNotification {
    send(email: string, assunto: string, message: string): void {
        console.log(`Email enviado para ${email} \nAssunto: ${assunto} \nMensagem: ${message}`);
    }
}

class UserManager {
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser(nome: string, email: string): void {
        console.log(`Usuário ${nome} criado com sucesso.`);
        this.emailNotification.send(email, 'Bem-vindo!', 'Sua conta foi criada com sucesso.');
    }
}

const emailNotification = new EmailNotification();
const userManager = new UserManager(emailNotification);
userManager.createUser('Lucas', 'lucas@gmail.com');