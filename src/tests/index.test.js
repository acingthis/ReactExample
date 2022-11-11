import{ render, screen, cleanup} from '@testing-library/react';
import renderer  from 'react-test-renderer';
import Index from '../index';
import '@testing-library/jest-dom'


afterEach(() => {
    cleanup();
});


test('should render todo component', () => {
    render(<Index/>);
    const testElement = screen.getByTestId('PageHeading');
    expect(testElement).toBeInTheDocument();
})


test('matches snapshot', () => {
    const tree = renderer.create(<Index/>).toJSON();
    expect(tree).toMatchSnapshot();
})
