---
title: "HTTP Protocol: Overview"
date: "2025"
description: []
---

## Servers in Web Development

- **Web Server**: Serves static assets (HTML, images, JS, CSS, etc).
- **Backend Server**: Handles client requests involving data (e.g., DB communication, API responses).

> Note: This is a simplified distinction and not always strictly true, but helps in understanding HTTP.

- Both use **HTTP** for communication.
  - Web servers: serve documents, images, etc.
  - Backend servers: serve JSON, XML, etc.

---

## Key HTTP Protocol Features

- **Stateless**: No memory of past requests → scalable and duplicable.
- **Client-Server model**
- Uses **TCP** (or **QUIC** in HTTP/3)

### HTTP Message Format

- **Request**: Method + Endpoint + HTTP Version
- **Response**: HTTP Version + Status Code

### Common Headers

- **Request Headers**: `Host`, `User-Agent`, `Content-Type`, `Content-Length`, `Authorization`, `Accept`, `Accept-Encoding`, `Cookie`, ...
- **Response Headers**: `Date`, `Content-Type`, `Content-Length`, `Server`, `Cache-Control`, `Set-Cookie`, `Connection`, ...

### Body: Actual content (HTML, JSON, etc.)

---

## Status Codes

### 1xx – Informational

### 2xx – Success
- `200`: OK
- `201`: Created
- `204`: No Content

### 3xx – Redirection
- `301`: Moved Permanently (SEO friendly)
- `302`: Temporary Redirect
- `304`: Not Modified (client cache used)

### 4xx – Client Errors
- `400`: Bad Request
- `401`: Unauthorized (no auth provided)
- `403`: Forbidden (auth provided but not allowed)
- `404`: Not Found
- `405`: Method Not Allowed
- `409`: Conflict (e.g. duplicate creation)
- `429`: Too Many Requests

### 5xx – Server Errors
- `500`: Internal Server Error
- `501`: Not Implemented
- `502`: Bad Gateway (proxy error)
- `503`: Service Unavailable
- `504`: Gateway Timeout

---

## HTTP Internals

- Requests/Responses → Frames (in HTTP/2/3)
  - Includes `HEADERS`, `DATA`, etc.

### Cache-Control
- `no-store`: Do not cache response.
- `max-age=3600`: Cache for 1 hour.

### Connection
- `keep-alive`: Persistent connections.

---

## Multiplexing (HTTP/2+)

- **Stream Multiplexing**: Multiple requests/responses in parallel via stream IDs.
- **Time Division Multiplexing**
