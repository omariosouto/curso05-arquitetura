import { customRender } from "@alura/test-commons/react-testing-library";
import { Text } from "./index";

const render = customRender();

describe("<Text />", () => {
  it("renders h1", () => {
    const { container } = render(<Text tag="h1">Sample text</Text>);
    // screen.debug();
    expect(container).toMatchSnapshot();
  });
});
