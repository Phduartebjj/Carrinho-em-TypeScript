import { startCatalog } from "./catalog/catalog.js";
import { loadReceipt, loadStorage, loadStorageCart } from "./storage/storage.js";

await loadStorage();
await loadStorageCart();
await startCatalog();
await loadReceipt()
