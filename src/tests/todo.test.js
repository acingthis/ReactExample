import{ render, screen, cleanup} from '@testing-library/react';
import renderer  from 'react-test-renderer';
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

/* 

// Example test

test('should render todo component', () => {
    render(<Todo/>);
    const todoElement = screen.getByTestId('todo1');
    expect(todoElement).toBeInTheDocument();
})

// Example Snapshots

test('matches snapshot', () => {
    const tree = renderer.create(<Todo/>).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
})
*/