import * as React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  getByTestId
} from "react-testing-library";
import { Inspector } from "../../";
import useBooleanKnob from "./index";

describe("Boolean Knob", () => {
  function BooleanExample() {
    const [value, setVaue] = useBooleanKnob("My Knob", true);
    return (
      <React.Fragment>
        <Inspector />
        <div data-testid="value">{value ? "True" : "False"}</div>
      </React.Fragment>
    );
  }

  it("should have the initial value", () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <BooleanExample />
    );
    expect(getByTestId("value").innerHTML).toBe("True");
  });

  it.skip("should change value when clicked", () => {
    const {
      getByText,
      container,
      asFragment,
      getByTestId: ComponentGetId
    } = render(<BooleanExample />);

    fireEvent.click(getByTestId(document as any, "My Knob"));
    expect(ComponentGetId("value").innerHTML).toBe("False");
  });
});
