---
sidebar_position: 1
title: API Reference
---

# API Reference

LightningHire offers a comprehensive API for integrating the platform with your existing systems and workflows.

## Authentication

All API routes are protected using NextAuth.js. You must include a valid authentication token in the headers of your requests.

```javascript
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${accessToken}`
};
```

## API Endpoints

### Jobs

<APIEndpoint 
  method="GET" 
  path="/api/jobs" 
  description="List all jobs for the current user." 
  auth={true} 
/>

<APIEndpoint 
  method="POST" 
  path="/api/jobs" 
  description="Create a new job." 
  auth={true} 
/>

<APIEndpoint 
  method="GET" 
  path="/api/jobs/:id" 
  description="Get job details." 
  auth={true} 
/>

<APIEndpoint 
  method="PUT" 
  path="/api/jobs/:id" 
  description="Update job." 
  auth={true} 
/>

<APIEndpoint 
  method="DELETE" 
  path="/api/jobs/:id" 
  description="Delete job." 
  auth={true} 
/>

<APIEndpoint 
  method="POST" 
  path="/api/jobs/bulk" 
  description="Bulk import jobs." 
  auth={true} 
/>

### Candidates

<APIEndpoint 
  method="GET" 
  path="/api/candidates" 
  description="List all candidates." 
  auth={true} 
/>

<APIEndpoint 
  method="POST" 
  path="/api/candidates" 
  description="Create a new candidate." 
  auth={true} 
/>

<APIEndpoint 
  method="GET" 
  path="/api/candidates/:id" 
  description="Get candidate details." 
  auth={true} 
/>

<APIEndpoint 
  method="PUT" 
  path="/api/candidates/:id" 
  description="Update candidate." 
  auth={true} 
/>

<APIEndpoint 
  method="DELETE" 
  path="/api/candidates/:id" 
  description="Delete candidate." 
  auth={true} 
/>

<APIEndpoint 
  method="POST" 
  path="/api/candidates/bulk" 
  description="Bulk import candidates." 
  auth={true} 
/>

<APIEndpoint 
  method="POST" 
  path="/api/candidates/parse" 
  description="Parse resume data." 
  auth={true} 
/>

### Matching

<APIEndpoint 
  method="GET" 
  path="/api/matching/:jobId" 
  description="Get matches for a job." 
  auth={true} 
/>

<APIEndpoint 
  method="GET" 
  path="/api/matching/job/:jobId/candidate/:candidateId" 
  description="Get specific match details." 
  auth={true} 
/>

<APIEndpoint 
  method="POST" 
  path="/api/matching/evaluate" 
  description="Manually evaluate a match." 
  auth={true} 
/>

### Messages

<APIEndpoint 
  method="GET" 
  path="/api/messages" 
  description="Get all messages." 
  auth={true} 
/>

<APIEndpoint 
  method="GET" 
  path="/api/messages/unread" 
  description="Get unread messages count." 
  auth={true} 
/>

<APIEndpoint 
  method="PUT" 
  path="/api/messages/:id/read" 
  description="Mark message as read." 
  auth={true} 
/>

## Request Format

All requests with a body should be sent as JSON:

```javascript
const response = await fetch('/api/jobs', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  },
  body: JSON.stringify({
    title: 'Software Engineer',
    description: 'We are looking for a software engineer...',
    requirements: 'At least 3 years of experience...',
    skills: [
      { name: 'JavaScript', importance: 5 },
      { name: 'React', importance: 5 },
      { name: 'Node.js', importance: 4 }
    ]
  })
});
```

## Response Format

All API responses follow a consistent format:

For successful operations:

```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful",
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10
  }
}
```

For errors:

```json
{
  "success": false,
  "error": "Error type",
  "message": "Human-readable error message",
  "code": "ERROR_CODE"
}
```

## Pagination

List endpoints support pagination with query parameters:

```
/api/resource?page=1&limit=10&sort=createdAt&order=desc
```

## Search and Filtering

List endpoints support search and filtering:

```
/api/resource?search=keyword&filter[field]=value
```

## Error Codes

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| `UNAUTHORIZED` | 401 | Authentication required |
| `FORBIDDEN` | 403 | Not authorized to access the resource |
| `NOT_FOUND` | 404 | Resource not found |
| `INVALID_ID` | 400 | Invalid ID format |
| `VALIDATION_ERROR` | 400 | Input validation failed |
| `SERVER_ERROR` | 500 | Internal server error |

## Rate Limiting

API requests are rate limited to 100 requests per minute per user. Exceeding this limit will result in a 429 Too Many Requests response.

## Example API Usage

This example shows how to fetch all jobs and create a new candidate:

```javascript
// Fetch all jobs
async function getJobs() {
  const response = await fetch('/api/jobs', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.message);
  }
  
  return result.data;
}

// Create a new candidate
async function createCandidate(candidateData) {
  const response = await fetch('/api/candidates', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(candidateData)
  });
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.message);
  }
  
  return result.data;
}
```