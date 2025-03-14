---
sidebar_position: 1
title: Evaluations Overview
---

# Evaluations

LightningHire's Evaluation System is the core of our AI-powered matching technology, allowing you to automatically assess candidate fit for specific job positions.

## Overview

The Evaluation System:

- Compares candidate skills, experience, and qualifications against job requirements
- Generates match scores and insights
- Provides detailed analysis of candidate strengths and weaknesses
- Helps recruiters make data-driven hiring decisions

## How Evaluations Work

When you create an evaluation, LightningHire:

1. **Analyzes the job requirements** - Extracts required skills, experience level, education, and other criteria
2. **Processes candidate information** - Reviews the candidate's skills, work history, education, and other attributes
3. **Calculates match scores** - Determines how well the candidate matches different aspects of the job
4. **Generates insights** - Provides specific observations about the candidate's fit for the role
5. **Ranks candidates** - Compares multiple candidates for the same position (when applicable)

## Matching Algorithm

LightningHire uses a sophisticated matching algorithm that considers:

| Factor | Weight | Description |
|--------|--------|-------------|
| Skills Match | 55% | How many required and preferred skills the candidate possesses |
| Experience Match | 25% | Relevance and duration of previous work experience |
| Education Match | 10% | Educational qualifications compared to job requirements |
| Semantic Match | 10% | Overall resume content relevance based on vector similarity |

:::info
Match weights can be customized by system administrators to reflect the priorities of your organization.
:::

## Evaluation Results

Evaluation results include:

- **Overall Score** - A numerical score (0-100) indicating candidate fit
- **Breakdown Scores** - Individual scores for skills, experience, education, and semantic match
- **Key Insights** - Specific observations about candidate strengths and weaknesses
- **Missing Skills** - Important skills from the job description that the candidate lacks
- **Recommendations** - Suggested next steps based on the evaluation

## Pre-Screening

For candidates with high match scores, LightningHire can automatically generate pre-screening questions based on the job requirements and candidate profile.

:::tip
Use pre-screening to quickly verify candidate skills before proceeding to the interview stage.
:::

## Bulk Evaluations

LightningHire supports bulk evaluations, allowing you to:

- Evaluate multiple candidates against a single job
- Evaluate a single candidate against multiple jobs
- Generate a comparative ranking of candidates for a position

## Next Steps

- Learn how to [create evaluations](creating.md) for your candidates
- Explore how to [interpret evaluation results](results.md) effectively