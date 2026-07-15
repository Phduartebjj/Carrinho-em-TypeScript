import { startCatalog } from "./catalog/catalog.js";
import { loadStorage } from "./storage/storage.js";

await loadStorage();
await startCatalog();
