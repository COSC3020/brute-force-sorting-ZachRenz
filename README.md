[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Runtime Anaylsis Answer

In the best case (where the array comes sorted), our array would pass through one branch of our permutation tree (of length n), and then be checked by `checkSort()`, which has a complexity of $\Theta(n)$. Therefore our complexity in the best case is $\Theta(n^2)$. 

In the worse case our array would need to go through every single permutation systematically. This would lead to a complexity of $\Theta(n!)$, but we still have to check every case if it is sorted using `checkSort()`, which has a complexity of $\Theta(n)$, so our complexity in the worst case is $\Theta(n*n!)$. 

If we were to generate permutations randomly without remembering the cases we've tried, we cannot gaurantee that we will stumble upon the sorted permutation. Because of this the complexity here would have to be Infinite. 
