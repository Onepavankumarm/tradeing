import React from "react";
import List from "./List"
import { configure, shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("<List/> unit testing for List", () => {
    const mockFn = jest.fn();
    const props = {
        detailsHandler: mockFn,
        list: [
            [
                "tBTCUSD",
                39196,
                15.812025460000001,
                39199,
                12.465028580000002,
                191.16321201,
                0.0049,
                39191,
                8142.96604076,
                40005.03139151,
                38168
            ],
            [
                "tBTCUSD",
                39196,
                15.812025460000001,
                39199,
                12.465028580000002,
                191.16321201,
                0.0049,
                39191,
                8142.96604076,
                40005.03139151,
                38168
            ]
        ],
    }
    it("should render one list component", () => {
        const component = shallow(<List {...props} />);
        expect(component).toHaveLength(2);
        expect(component.find('li')).toHaveLength(2)
    });
})