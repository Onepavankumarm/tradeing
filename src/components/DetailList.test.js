import React from "react";
import DetailList from "./DetailList"
import { configure, shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("<DetailList /> Unit test particular detail", () => {
    const props = [
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
    it("Particular detail", () => {
        const component = shallow(<DetailList detals={props} />);
        expect(component).toHaveLength(1);
        expect(component.find('tbody')).toHaveLength(1);
    })
})