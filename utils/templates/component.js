module.exports = (componentName) => ({
    content: `
  import React from "react";
  import { Box } from "components/Box";
  
  export interface ${componentName}Props {
    foo: string;
  }
  
  export const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
      <Box data-testid="${componentName}" className="foo-bar" backgroundColor="primary">{foo}</Box>
  );
  
  `,
    extension: `.tsx`,
});
