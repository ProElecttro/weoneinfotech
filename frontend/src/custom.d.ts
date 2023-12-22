// custom.d.ts

declare module 'custom-global' {
  interface Window {
    Razorpay: any; // Replace 'any' with the appropriate type if available
  }
}

// If you don't want to use an external module, you can use the following instead:
// declare global {
//   interface Window {
//     Razorpay: any; // Replace 'any' with the appropriate type if available
//   }
// }
