import { startCatalog } from "./catalog/catalog.js";
import { loadStorage, loadStorageCart } from "./storage/storage.js";


await loadStorage();
await loadStorageCart()
await startCatalog();
