import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import '@testing-library/jest-dom'



it("renders successfully", () => {
  render(<Carousel photos={TEST_IMAGES} title="Test Title" />);
})

it("matches snapshot", () => {
  const { asFragment } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="Test Title"
    />);
  expect(asFragment()).toMatchSnapshot();
})

// ****  Testing the Right Arrow  ****

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

//  **** Testing the Left Arrow ****

// it("works when you click on the left arrow", function () {
//   const { container } = render(
//     <Carousel
//       photos={TEST_IMAGES}
//       title="images for testing"
//     />
//   );
//   // expect the second image to show, but not the first
//   expect(
//     container.querySelector('img[alt="testing image 2"]')
//   ).toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).not.toBeInTheDocument();

//   // move backwards in the carousel
//   const leftArrow = container.querySelector(".bi-arrow-left-circle");
//   fireEvent.click(leftArrow);

//   // expect the first image to show, but not the second
//   expect(
//     container.querySelector('img[alt="testing image 2"]')
//   ).not.toBeInTheDocument();
//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).toBeInTheDocument();
// });

