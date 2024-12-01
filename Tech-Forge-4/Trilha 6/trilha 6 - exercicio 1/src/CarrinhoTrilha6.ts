
class Cart {
    private items: { item: string; price: number }[] = [];

    addItem(item: string, price: number): void {
        this.items.push({ item, price });
    }

    calcularTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}


class Payment {
    processarPagamento(): void {
        console.log("Pagamento efetuado");
    }
}

class Shipping {
    atualizarStatus(): void {
        console.log("Pedido enviado para entrega");
    }
}

class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;

    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }

    addItem(item: string, price: number): void {
        this.cart.addItem(item, price);
    }

    calcularTotal(): number {
        return this.cart.calcularTotal();
    }

    processarPagamento(): void {
        this.payment.processarPagamento();
    }

    atualizarStatus(): void {
        this.shipping.atualizarStatus();
    }
}

const order = new Order();
order.addItem('Camisa', 50);
order.addItem('Calça', 60);
const total = order.calcularTotal();
console.log(`O total da compra é: ${total} reais`);
order.processarPagamento();
order.atualizarStatus();
