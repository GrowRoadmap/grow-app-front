module.exports = (componentName) => ({
    content: `
  import React from "react";
  
  export interface ${componentName}Props {
    foo: string;
  }
  
  export const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
      <div data-testid="${componentName}" className="foo-bar">{foo}</div>
  );
  
  `,
    extension: `.tsx`,
});
