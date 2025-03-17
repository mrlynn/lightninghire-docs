---
sidebar_position: 2
title: Importing
---

# Bulk Importing Guide

This guide walks you through the process of importing multiple records into Recruiters Assistant, whether you're uploading job listings or candidate profiles.

## Preparation

Before starting any bulk import:

1. **Prepare your data** - Organize your information in a structured format
2. **Download the appropriate template** - Use our provided templates for consistent formatting
3. **Verify data quality** - Check for missing or incorrect information
4. **Remove duplicates** - Ensure you're not importing the same records multiple times

## Job Bulk Import

### Step 1: Access the Import Tool

1. Navigate to the "Bulk Operations" section from the dashboard
2. Select "Import Jobs"

### Step 2: Download and Fill the Template

1. Click the "Download Template" button to get the jobs import template
2. Open the template in Excel, Google Sheets, or another spreadsheet application
3. Fill in the required fields:
   - `title` (required) - Job title
   - `description` (required) - Detailed job description
   - `responsibilities` - Comma-separated list of responsibilities
   - `required_qualifications` - Comma-separated list of required skills
   - `preferred_qualifications` - Comma-separated list of nice-to-have skills
   - `base_salary` - Base compensation amount
   - `salary_range_min` - Minimum salary range
   - `salary_range_max` - Maximum salary range
   - `additional_notes` - Any extra information
4. Save your file as an Excel (.xlsx) or CSV (.csv) file

> **Info:** For text fields that contain commas (like in the job description), make sure to properly escape or quote the text to prevent parsing errors.

### Step 3: Upload and Validate

1. Click "Select File" and choose your saved template
2. Click "Process File" to upload and validate the data
3. Review the validation results:
   - Valid entries will be marked with a green checkmark
   - Invalid entries will show error details
4. Fix any validation errors if needed

### Step 4: Import

1. After reviewing the data, click "Import Jobs"
2. The system will process your file
3. Wait for the import to complete
4. Review the import summary:
   - Total records processed
   - Successfully imported records
   - Failed imports (with reasons)

## Candidate Bulk Import

### Step 1: Access the Candidate Import Tool

1. Navigate to "Bulk Operations" from the dashboard
2. Select "Import Candidates"

### Step 2: Download and Fill the Template

1. Click "Download Template" to get the candidates import template
2. Open the template in your spreadsheet application
3. Fill in the required fields:
   - `name` (required) - Candidate's full name
   - `email` (required) - Valid email address
   - `phone` - Contact phone number
   - `skills` - Comma-separated list of skills
   - `experience` - Work experience description
   - `education` - Education details
   - `certifications` - Professional certifications
4. Save your file as Excel or CSV

> **Success:** For candidates, you can also include resume text in the template, but the preferred method is to upload actual resume files separately.

### Step 3: Upload and Validate

1. Click "Select File" and choose your saved template
2. Click "Process File" to validate the data
3. Review the validation results:
   - Valid records will proceed to import
   - Invalid records will be flagged with specific errors
4. Correct any issues in the original file if needed

### Step 4: Import

1. Click "Import Candidates" to begin the import process
2. Wait for the system to process your file
3. Review the import summary
4. Navigate to the Candidates section to see your imported profiles

## Common File Formats

Recruiters Assistant supports two primary file formats for imports:

### CSV Files

- Simple text format
- Universal compatibility
- Easily created from various sources
- Better for simple data structures

### Excel Files (.xlsx)

- Supports more complex data
- Better formatting options
- Multiple sheets capability
- Preferred for large datasets

## Handling Errors

If you encounter errors during import:

1. **Download the error log** if available
2. **Check common issues**:
   - Missing required fields
   - Incorrect data formats (e.g., text in number fields)
   - Special characters breaking CSV format
   - Extra commas in text fields
3. **Fix the issues** in your original file
4. **Try again** with the corrected file

> **Warning:** Always check for duplicate entries before importing. The system has duplicate detection, but manually reviewing beforehand can prevent potential issues.

## Import Limits

Be aware of the following limits based on your subscription:

| Plan          | Max Records per Import | Monthly Import Limit |
|---------------|------------------------|----------------------|
| Free          | 25                     | 100                  |
| Professional  | 200                    | 1,000                |
| Enterprise    | 500                    | Unlimited            |

## Next Steps

After successfully importing your data, you should:

1. **Verify the imports** - Check a sample of imported records
2. **Add missing details** - Some information may need to be added manually
3. **Begin evaluations** - Start matching candidates to job openings

For more information on working with templates, see our [Templates documentation](/docs/bulk-operations/templates).