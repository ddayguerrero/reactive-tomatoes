import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store";
import preload from "../../data.json";
import { Unwrapped as UnwrappedSearch } from "../search";
import ShowCard from "../showcard";
import { setSearchTerm } from "../actionCreators";

describe("Search", () => {
  it("renders correctly", () => {
    const component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm="" />
    );
    expect(component).toMatchSnapshot();
  });

  it("should should render the correct amount of shows", () => {
    const component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm="" />
    );
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it("should render the correct amount of shows based on search term", () => {
    const searchTerm = "black";
    store.dispatch(setSearchTerm(searchTerm));
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <UnwrappedSearch shows={preload.shows} searchTerm={searchTerm} />
        </MemoryRouter>
      </Provider>
    );
    const showCount = preload.shows.filter(
      show =>
        `${show.title} ${show.description}`
          .toUpperCase()
          .indexOf(searchTerm.toUpperCase()) >= 0
    );
    expect(component.find('.show-card').length).toEqual(showCount.length);
  });
});
