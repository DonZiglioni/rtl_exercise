const TEST_IMAGES = [
  {
    src: "test1.com",
    caption: "testing image 1"
  },
  {
    src: "test2.com",
    caption: "testing image 2"
  },
  {
    src: "test3.com",
    caption: "testing image 3"
  },
];

export default TEST_IMAGES

// //  **  Check that we hide left arrow when there is no previous pic **

// it("hides left arrow", () => {
//   const { container } = render(
//     <Carousel
//       photos={TEST_IMAGES}
//       title="images for testing"
//     />
//   );

//   expect(
//     container.querySelector('img[alt="testing image 1"]')
//   ).toBeInTheDocument();
//   expect(
//     container.querySelector('.bi bi-arrow-left-circle')
//   ).not.toBeInTheDocument();
// })

// //  **  Check that we hide right arrow when there is no more pics **

// it("hides right arrow", () => {
//   const { container } = render(
//     <Carousel
//       photos={TEST_IMAGES}
//       title="images for testing"
//     />
//   );

//   expect(
//     container.querySelector('img[alt="testing image 3"]')
//   ).toBeInTheDocument();
//   expect(
//     container.querySelector('.bi bi-arrow-right-circle')
//   ).not.toBeInTheDocument();
// })
