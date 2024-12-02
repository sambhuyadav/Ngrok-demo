# Ngrok Setup Guide

This guide provides step-by-step instructions for setting up **ngrok** to expose your local server to the internet, making it accessible via a public URL.

---

## What is ngrok?
Ngrok is a tunneling tool that provides a secure and publicly accessible URL for your locally hosted applications. It is commonly used for testing webhooks, sharing projects, or debugging remote APIs.

---

## Installation and Setup

### 1. Install ngrok
Download and install ngrok from the official website:
- [Download ngrok](https://ngrok.com/download)
- Get your authtoken
- Run ngrok config add-authtoken <your-authtoken>
-Run the following command
```bash
  -ngrok http <PORT(The port your server is running.)>
