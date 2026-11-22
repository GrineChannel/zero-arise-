import { world, system } from "@minecraft/server";
import { readConfig, saveConfig } from "./config.js";

let initialized = false;
let config;
function initialize() {
  if (initialized) return;
  initialized = true;
  config = readConfig(world);
  try { saveConfig(world, config); }
  catch (error) { console.warn("[ZERO: Arise] Config save failed: " + String(error)); }
  console.warn("[ZERO: Arise] Core initialized. Target day duration: " + config.clock.dayMinutes + " minutes.");
}
system.run(initialize);
