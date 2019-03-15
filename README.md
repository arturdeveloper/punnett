Include a README.md file
i. Explain your design decisions
ii. Explain your development decisions
iii. Explain areas for future improvement
iv. Add anything else you think is important


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Design decisions

Application is broken into several **components** such as BarChart, Punnett and RatioDisplay. Responsivness achieved by using **flexbox** approach and relative CSS units. Used **@media** query to display right panel below Punnett diagram for mobile.

## Development decisions

Most of data processing happens in Punnett component, some state data is moved to parent.

## Future improvement

* Some element alignments are not responsive.
* Better code separation. Data manipulation can be moved to separate location and imported.
* Could use **grid** in some cases. Punnett for example.
* Add UI approaches (hover state).
* Add accessibility approaches.
