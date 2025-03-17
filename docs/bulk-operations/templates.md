---
sidebar_position: 3
title: Templates
---

# Bulk Import Templates

Recruiters Assistant provides standardized templates for all bulk operations to ensure consistent data structure and successful imports. This guide explains how to use these templates effectively.

## Available Templates

We offer the following templates for bulk operations:

1. **Job Import Template** - For importing multiple job listings
2. **Candidate Import Template** - For importing multiple candidate profiles

Each template is available in both Excel (.xlsx) and CSV (.csv) formats to accommodate your preference and workflow.

## Accessing Templates

You can access these templates in several ways:

1. **From the Documentation** - Download directly from this page
2. **During Import** - Templates are available on the respective import pages
3. **From Bulk Operations Home** - All templates are listed on the main bulk operations page

## Job Import Template

The job import template contains fields that match our database schema for job listings.

### Template Structure

| Field                  | Required | Type   | Description                                      |
|------------------------|----------|--------|--------------------------------------------------|
| title                  | Yes      | Text   | Job title                                        |
| description            | Yes      | Text   | Full job description                             |
| responsibilities       | No       | Text   | Comma-separated list of responsibilities          |
| required_qualifications| No       | Text   | Comma-separated list of must-have skills/qualifications |
| preferred_qualifications| No      | Text   | Comma-separated list of nice-to-have skills/qualifications |
| base_salary            | No       | Number | Base compensation amount                         |
| salary_range_min       | No       | Number | Minimum salary range                             |
| salary_range_max       | No       | Number | Maximum salary range                             |
| additional_notes       | No       | Text   | Any extra information about the position         |

### Sample Data

```
title,description,responsibilities,required_qualifications,preferred_qualifications,base_salary,salary_range_min,salary_range_max,additional_notes
Senior Software Engineer,"We are looking for a senior software engineer to join our team.","Lead frontend development,Mentor junior developers,Participate in code reviews","JavaScript,React,5+ years experience","TypeScript,GraphQL,AWS",120000,110000,140000,"Remote position available"
Product Manager,"Seeking an experienced product manager for our SaaS platform.","Define product roadmap,Work with stakeholders,Analyze market trends","3+ years product management,Agile methodologies,Market research experience","SaaS experience,Technical background,MBA",110000,100000,130000,"Hybrid work environment"
```


> **Note:** For text fields with commas inside the content, make sure to enclose the entire field in quotes to prevent parsing errors.

## Candidate Import Template

The candidate template contains fields aligned with our candidate database schema.

### Template Structure

| Field          | Required | Type   | Description                  |
|----------------|----------|--------|------------------------------|
| name           | Yes      | Text   | Candidate's full name        |
| email          | Yes      | Text   | Valid email address          |
| phone          | No       | Text   | Contact phone number         |
| skills         | No       | Text   | Comma-separated list of skills|
| experience     | No       | Text   | Work experience summary      |
| education      | No       | Text   | Education history            |
| certifications | No       | Text   | Professional certifications  |

### Sample Data

```
name,email,phone,skills,experience,education,certifications
John Smith,john.smith@example.com,(555) 123-4567,"JavaScript, React, Node.js, TypeScript","Senior Developer at TechCorp (2018-Present), Frontend Developer at WebSolutions (2015-2018)","Bachelor of Science, Computer Science - State University (2015)","AWS Certified Developer, React Certification"
Emily Johnson,emily.johnson@example.com,(555) 987-6543,"Product Management, Agile, User Research, Wireframing","Product Manager at SaaS Inc (2016-Present), Associate PM at Tech Solutions (2014-2016)","MBA, Business Administration - Business School (2014)","Certified Scrum Product Owner, Agile Certified Practitioner"
```


## Template Usage Best Practices

Follow these guidelines for successful imports:

### General Tips

1. **Don't modify column headings** - The system expects the exact field names
2. **Don't remove columns** - Keep all columns even if some are empty
3. **Don't add columns** - Additional fields won't be processed
4. **Use proper formatting** - Ensure dates, numbers, and text are properly formatted

### Working with CSV Files

1. **Use text qualifiers** - Enclose text with commas in quotes
2. **Watch for special characters** - Some special characters may cause parsing issues
3. **UTF-8 encoding** - Save your CSV with UTF-8 encoding for proper character handling
4. **Line endings** - Use standard line endings (avoid manual line breaks in cells)

### Working with Excel Files

1. **Use first sheet only** - Only data on the first worksheet will be processed
2. **Avoid formulas** - Convert formulas to values before importing
3. **Simple formatting** - Remove complex formatting, colors, or conditional formatting
4. **No macros** - Don't include macros or VBA code

## Handling Lists in Templates

Several fields in both templates accept comma-separated lists (skills, qualifications, etc.). Follow these guidelines:

1. **Use simple commas** - Separate items with a single comma
2. **Avoid trailing commas** - Don't end your list with a comma
3. **Consistency** - Use consistent terminology for better matching later
4. **Escape commas in text** - If a list item contains a comma, enclose the entire field in quotes

Example of properly formatted skills list:

```
"JavaScript, React, CSS, HTML, Node.js"
```


## Download Templates

You can download the latest versions of our templates here:

- [Job Import Template (CSV)](/templates/jobs_import_template.csv)
- [Candidate Import Template (CSV)](/templates/candidates_import_template.csv)

> **Warning:** Always use the latest version of templates. Older versions may not be compatible with current system requirements.

## Template Customization

While we recommend using the standard templates, you may have specific organizational needs. If you need customized templates:

1. Contact our support team
2. Explain your specific requirements
3. We'll work with you to develop a custom import solution

Enterprise customers can request custom fields and import processes as part of their service agreement.