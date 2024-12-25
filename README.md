# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections in HTTP servers.  Improper error handling within asynchronous operations can lead to unexpected server crashes.  The `bug.js` file showcases the problem, while `bugSolution.js` provides a corrected version.

## Problem

The `bug.js` file shows an HTTP server that performs an asynchronous operation. If this operation fails, the promise rejects, but the rejection isn't caught, resulting in a process crash. This is particularly problematic in production environments. 

## Solution

The `bugSolution.js` demonstrates the proper way to handle such rejections using a `.catch` block within the asynchronous operation.  This ensures that errors are gracefully handled, preventing server crashes and providing a more robust application.