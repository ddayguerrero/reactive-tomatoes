import React from "react";
import { shallow } from "enzyme";
import preload from "../../data.json";
import Search from "../search";
import ShowCard from "../showcard";

describe("Search", () => {
  it("renders correctly", () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });
  
  it("should should render the correct amount of shows", () => {
    const component = shallow(<Search />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });
  
  it("should render the correct amount of shows based on search term", () => {
    const component = shallow(<Search />);
    const searchTerm = 'black';
    expect(component.find('input').simulate('change', {target:{value:searchTerm}}))
    const showCount = preload.shows.filter(show => 
      `${show.title} ${show.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0);
    expect(component.find(ShowCard).length).toEqual(showCount.length);
  });
});