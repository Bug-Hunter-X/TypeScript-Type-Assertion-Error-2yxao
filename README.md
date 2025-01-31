# TypeScript Type Assertion Bug

This repository demonstrates a common type error in TypeScript where a function expects a numeric return type but attempts to return a string. The bug and its solution are provided in separate TypeScript files.

## Bug
The `combine` function in `bug.ts` attempts to add a number and a string, resulting in a type error because the + operator performs string concatenation in this context. 

## Solution
The `bugSolution.ts` file demonstrates how to fix the error by either explicitly ensuring the return type is a number or utilizing type assertion or type guard techniques to deal with potential string values.