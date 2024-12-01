abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}
class WarehouseInventory extends Inventory {
    private inventory: Record<string, number> = {};
    addItem(item: string, quantity: number): void {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
    }
    removeItem(item: string): void {
        delete this.inventory[item];
    }
    getInventory(): Record<string, number> {
        return this.inventory;
    }


}

class StoreInventory extends Inventory {
    private inventory: Record<string, number> = {};
    addItem(item: string, qtd: number): void {
        if (this.inventory[item]) {
            this.inventory[item] += qtd;
        } else {
            this.inventory[item] = qtd;
        }
        if (this.inventory[item] > 10) {
            this.inventory[item] = 10;
        }
    }
    removeItem(item: string): void {
        delete this.inventory[item];
    }
    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

const warehouse = new WarehouseInventory();
warehouse.addItem('maça', 10);
warehouse.addItem('maça', 10);
warehouse.addItem('banana', 5);
warehouse.removeItem('maça');
console.log(warehouse.getInventory());

const store = new StoreInventory();
store.addItem('mamão', 13);
store.addItem('ameixa', 3);
store.addItem('kiwi', 5);
store.removeItem('ameixa');
console.log(store.getInventory());