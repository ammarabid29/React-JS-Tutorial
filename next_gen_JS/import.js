// to include exported file use import keyword  

// with default 
import academy from "./export.js";
console.log(academy);

// without default
import { subject } from "./export.js";
console.log(subject);
import { status } from "./export.js";
status();