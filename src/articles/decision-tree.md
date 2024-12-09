---
title: "Decision Tree"
category: "Intro to Machine Learning (CSE417T)"
date: "11/27/2024"
---
# Decision Tree
Most decision tree learning algorithms follows this template with with a different choices of heuristics:
DecisionTreeLearn(𝐷): Input a dataset 𝐷, output a decision tree hypothesis
    Create a root node
    If termination conditions are met
        return a single node tree with leaf prediction based on 𝐷
    Else: Greedily find a feature 𝐴 (assigned as root) to split according to split criteria
        For each possible value 𝑣 of 𝐴
            Let 𝐷_i be the dataset containing data with value 𝑣_i for feature 𝐴
            Create a subtree DecisionTreeLearn(𝐷) that being the child of root
TODO understand this template better

## Split criteria
One split criteria is the Iterative Dichotomiser 3 (ID3) algorithm:
TODO: discuss information entropy adn information gain to show algo

## To Address Overfitting
 • More Regularization (Constrain 𝐻)
    • Do not split leaves past a fixed depth
    • Do not split leaves with fewer than 𝑐 labels
    • Do not split leaves where the maximal information gain is less than 𝜏
 • Pruning (removing leaves)
    • Evaluate each split using a validation set and compare the validation error with and 
    without that split (replacing it with the most common label at that point)
    • Use statistical test to examine whether the split is “informative” (leads to different enough subtrees)