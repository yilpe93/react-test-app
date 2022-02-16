import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter start at 0', () => {
  render(<App />);

  // screen object를 사용해서 원하는 엘레멘트에 접근(접근할 때 ID로)
  const counterElement = screen.getByTestId("counter");
  // console.log("counterElement", counterElement)

  // ID가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent("0");
})

test("minus button has correct text", () => {
  render(<App />);

  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);

  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent("+");
});

test(`When the '+' button is pressed, the counter changes to 1`, () => {
  render(<App />);

  const buttonElement = screen.getByTestId("plus-button");

  fireEvent.click(buttonElement);
  
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
})

test(`When the '-' button is pressed, the counter changes to -1`, () => {
  render(<App />);

  const buttonElement = screen.getByTestId("minus-button");

  fireEvent.click(buttonElement);
  
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
})

test("on/off button has bue color", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
})

// test.only() => 해당 테스트만 진행
// test.skip() => 해당 테스트 스킵
test(`Prevent the '-', '+' button from being pressed when the on/off button is clicked`, () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");

  fireEvent.click(onOffButtonElement);

  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
})
