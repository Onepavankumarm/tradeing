import React from "react";
import Header from "./Header"
import { configure, shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("<Header /> Unit test for input search", () => {
    it("Unit test for input search", () => {
        const mockFn = jest.fn();
        const props = {
            searchHandler: mockFn,
            filterVal: ''
        }
        const component = shallow(<Header {...props} />);
        expect(component).toHaveLength(1);
        expect(component.find('input')).toHaveLength(1);

    })
})