---
title: "SSL/TLS: Workflow and Setting Up"
date: "2025"
description: []
---

## Certificate Authority: Let's Encrypt

## Certificate Generation

- **ACME** (Automatic Certificate Management Environment) protocol automates certificate issuance and renewal via a Certificate Authority (CA).
- To issue a certificate, the CA provides **challenges** to verify domain ownership:
  - `HTTP-01 Challenge`
  - `DNS Challenge`
  - `TLS Challenge`
- Once verified, the certificate is issued containing:
  - Public Key
  - Domain Name
  - Validity Period
  - Signature from CA

## Certificate Integration

- The certificate is integrated into the server to enable **HTTPS**.
- During communication:
  - The server provides the certificate to the client.
  - Client uses it to verify identity and derive a **session key** for secure data exchange.

## Certificate Verification

- **Client (browser)** verifies the server's certificate using trusted CA data.
- Checks include:
  - Domain name match
  - Certificate expiration
  - Certificate chain validation
  - Digital signature verification
- If verified, SSL/TLS **handshake** proceeds.

## SSL/TLS Handshake Steps

### 1. Client Hello
- Client sends:
  - Supported cipher suites
  - Pre-master key encrypted using server’s **public key**

### 2. Server Hello
- Server sends:
  - Chosen cipher suite
  - Random value

### 3. Session Key Generation
- Both client and server:
  - Use exchanged random values and the pre-master key
  - Derive a **common session key** via a predefined algorithm
  - Use this session key for encrypted communication
