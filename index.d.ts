// Your TypeScript file

// Import the types from the declaration file
import './scripts/vendors/phaser-types/index.d';

declare global {
  namespace Phaser {}
  namespace SpinePlugin {}
  namespace SpineFile {}
  namespace SpineGameObject {}
  namespace SpineContainer {}
}

// Now declare your global variable with the imported type
// declare var Phaser: Phaser; // Adjust `SomeType` based on your actual type definition

// import * as Phaser from './scripts/vendors/phaser-types/phaser.d.ts';
// /// <reference types="./scripts/vendors/phaser-types/index" />

// declare var Phaser: Phaser;
