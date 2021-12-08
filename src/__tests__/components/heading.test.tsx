import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Heading from "../../components/Heading/Heading";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Heading>Title</Heading>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h2
<<<<<<< HEAD
        class="sc-bdfBQB sc-gsTEea exQCXx jXxUvG"
=======
        class="sc-bdfBQB sc-gsTEea exQCXx cQqiih"
>>>>>>> ce669727216ef854f09da8d91647e08f35596c7e
        color="text"
      >
        Title
      </h2>
    </DocumentFragment>
  `);
});
