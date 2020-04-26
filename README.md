# [Number Slider](https://ronaksonigara.github.io/react-range-slider/?path=/story/slider--slider)

A React number slider app that helps to select a number from range.

[Hosted on github pages](https://ronaksonigara.github.io/react-range-slider/?path=/story/slider--slider)

| Props       | value Type | Defaut Value | Description                                                            |
| ----------- | ---------- | ------------ | ---------------------------------------------------------------------- |
| min         | number     | 0            | minimum value for number slider.                                       |
| max         | number     | 100          | maximum value for number slider.                                       |
| value       | number     | 0            | default value for slider. Should be >= to min and <=max                |
| step        | number     | 1            | the granularity of the slider.                                         |
| disabled    | bool       | false        | slider is disabled or not.                                             |
| isError     | bool       | false        | Is there any error.                                                    |
| helperText  | string     | ''           | Helper text used for error message or extra info.                      |
| showTooltip | bool       | true         | It shows tool tip with value.                                          |
| showInput   | bool       | false        | It Shows input box with current value and change the value with input. |
| label       | string     | ''           | Shows label for slider.                                                |

## Technologies and Packages Used

- React Js
- Styled-component

## To Install and Run the project

- Clone the repository at your machine with `git clone https://github.com/ronaksonigara/react-range-slider.git`.
- Go to the main folder `react-range-slider`.
- Open terminal in `react-range-slider` and run `npm install`.
- To run the project execute command `npm start` in terminal.
- To run storybook execute command `npm run storybook`.
