module.exports = (componentName) => ({
    content: `
  import React from "react";
  import { render } from "@testing-library/react";  
  import {${componentName}, ${componentName}Props} from "../${componentName}";
  
  describe("Test Component", () => {
    let props: ${componentName}Props;  
    beforeEach(() => {
      props = {
        foo: "bar"
      };
    });
  
    const renderComponent = () => render(<${componentName} {...props} />);
  
    it("should render foo text correctly", () => {
      props.foo = "It is us";
      const { getByTestId } = renderComponent();  
      const component = getByTestId("${componentName}");  
      expect(component).toHaveTextContent("It is us");
    });
  });
  `,
    directory: `./src/components/${componentName}/__tests__`,
    extension: `.test.tsx`,
});
