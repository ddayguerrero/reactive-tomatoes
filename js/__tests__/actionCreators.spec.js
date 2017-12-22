// @flow
import moxios from "moxios";
import { setSearchTerm, addAPIData, getAPIDetails } from "../actionCreators";

const testShow = {
  title: "Stranger Things",
  year: "2016–",
  description:
    "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",
  poster: "st.jpg",
  imdbID: "tt4574334",
  trailer: "9Egf5U8xLo8",
  rating: "8.6"
};

test("setSearchTerm", () => {
  expect(setSearchTerm("New York")).toMatchSnapshot();
});

test("addAPIData", () => {
  expect(addAPIData(testShow)).toMatchSnapshot();
});

test("getAPIDetails", (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getAPIDetails(testShow.imdbID)(dispatchMock); // call the thunk
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: testShow
        })
        .then(() => {
          expect(request.url).toEqual(
            `http://localhost:3000/${testShow.imdbID}`
          );
          expect(dispatchMock).toBeCalledWith(addAPIData(testShow));
          done();
        });
    });
  });
});
