// import React from "react";
// import App from "./App";
// import List from "../components/List";
// import { tradeingAxios } from "./Api"
// import { configure, shallow, mount, render } from 'enzyme';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import "whatwg-fetch";
// import { rest } from "msw";
// import { setupServer } from "msw/node";

// Enzyme.configure({ adapter: new Adapter() });
// const server = setupServer(
//   rest.get(`/v2/tickers?symbols=ALL`, (_req, res, ctx) => {
//     return res(ctx.status(200));
//   })
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());
// describe("<App/> unit testing for App", () => {
//   it("To test number of component", () => {
//     const component = shallow(<App />);
//     expect(component).toHaveLength(1)
//     expect(component.find('.App')).toHaveLength(1)
//     const subcomponentone = component.find(List);
//     expect(subcomponentone).toHaveLength(1);
//   });
//   it("api testing", async () => {
//     const rate = await tradeingAxios()
//     expect(rate).toBe(200)
//   })
// });



import React from "react";
import App from "./App";
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
describe("<App/> unit testing for App", () => {
  let component
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("test app ", () => {
    // const component = shallow(<App />);
    expect(component).toHaveLength(1);
    expect(component.find('h1').text()).toContain('pavan kumar');
  })
  it("unit test for button", () => {
    // const component = shallow(<App />);
    expect(component.find('#incbutton').text()).toBe('Increment')
  })

  it("test of count initial", () => {
    // const component = shallow(<App />);
    expect(component.find("#counterval").text()).toBe("0")
  })

  it("test the click simulation", () => {
    // const component = shallow(<App />);
    component.find("#incbutton").simulate("click");
    expect(component.find("#counterval").text()).toBe("1");
    component.find("#decbutton").simulate("click");
    expect(component.find("#counterval").text()).toBe("0");
  })
});