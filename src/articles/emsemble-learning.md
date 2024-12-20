---
title: "Ensemble learning"
category: "Intro to Machine Learning (CSE417T)"
date: "11/30/2024"
---

# Ensemble learning

Emsemble learning involves aggregating multiple hypotheses (decision trees) to make a prediction. There are two types of aggregation:

Uniform Aggregation:
Assign equal weight to all weak learners

Weighted Aggregation
Assign different weights to weak learners based on their importance or accuracy

![Commit Tree](/image.png)

TODO add the formulas and remove the image

## Bootstrapped Aggregating (aka Bagging)

Bagging helps reduce the variance and maintain low bias

### Bootstrapping

Works by taking a sample of points with replacement

The samples that were not used in the training can be used to calculate the out-of-bag (OOB) error. This means we don't need to split the dataset into training and validation

TODO elaborate on bagging and bootstrapping

## Random forest

## Boosting

Outline of algo
