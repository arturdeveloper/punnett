
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This is an interactive that illustrates Mendel's Laws relating to pea plant inheritance. You select two pea plants with different features (green and yellow) in the Punnett square and get visualization for Phenotypic Ratio and Genotypic Ratio.

Some background information:
* Mendel’s Laws [ wikipedia url ](https://en.wikipedia.org/wiki/Mendelian_inheritance)
* Punnett square [ wikipedia url ](https://en.wikipedia.org/wiki/Punnett_square)



## Design decisions

Application is broken into several **components** such as BarChart, Punnett and RatioDisplay using "mobile first" approach. Responsivness achieved by using **Flexbox** **Grid** and relative CSS units. Used **@media** query to display Ratios below Punnett diagram for mobile and side-by-side when on wider screens.
Genotypic Ratio flashes red background to indicate value has changed.

## Development decisions

Most of data processing happens in Punnett component, some state data is moved to parent App component. Two more general functions moved to separate utilities module.

## Future improvement

* Add additional UI/UX interactions.
* Add accessibility approaches.
