import {
  ButtonPrimaryArrowDisabled,
  ButtonPrimaryArrowFocus,
  ButtonPrimaryArrowHover,
} from "../modules/library/components/button/ButtonPrimary";
import {
  ButtonSecondaryArrowActive,
  ButtonSecondaryArrowDisabled,
  ButtonSecondaryArrowFocus,
  ButtonSecondaryArrowHover,
  ButtonSecondaryArrowRight,
} from "../modules/library/components/button/ButtonSecondary";
import {
  ButtonPrimaryArrowActive,
  ButtonPrimaryArrowRight,
} from "../modules/library/components/button/ButtonPrimary";
import {
  ButtonSecondary,
  ButtonSecondaryActive,
  ButtonSecondaryDisabled,
  ButtonSecondaryFocus,
  ButtonSecondaryHover,
} from "@/modules/library/components/button/ButtonSecondary";
import {
  ButtonPrimary,
  ButtonPrimaryHover,
  ButtonPrimaryActive,
  ButtonPrimaryFocus,
  ButtonPrimaryDisabled,
} from "../modules/library/components/button/ButtonPrimary";
import {
  ButtonText,
  ButtonTextActive,
  ButtonTextArrowActive,
  ButtonTextArrowDisabled,
  ButtonTextArrowFocus,
  ButtonTextArrowHover,
  ButtonTextArrowRight,
  ButtonTextDisabled,
  ButtonTextFocus,
  ButtonTextHover,
} from "@/modules/library/components/button/ButtonText";

export default function Home() {
  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        {/* NO ICON */}
        <h2>Primary</h2>
        <ButtonPrimary onClick={() => console.log("Primary clicked")}>
          Button
        </ButtonPrimary>
        <ButtonPrimaryHover onClick={() => console.log("Primary clicked")}>
          Button
        </ButtonPrimaryHover>
        <ButtonPrimaryActive onClick={() => console.log("Primary clicked")}>
          Button
        </ButtonPrimaryActive>
        <ButtonPrimaryFocus onClick={() => console.log("Primary clicked")}>
          Button
        </ButtonPrimaryFocus>
        <ButtonPrimaryDisabled onClick={() => console.log("Primary clicked")}>
          Button
        </ButtonPrimaryDisabled>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h2>Secondary</h2>
        <ButtonSecondary onClick={() => console.log("Secondary clicked")}>
          Button
        </ButtonSecondary>
        <ButtonSecondaryHover onClick={() => console.log("Secondary clicked")}>
          Button
        </ButtonSecondaryHover>
        <ButtonSecondaryActive onClick={() => console.log("Secondary clicked")}>
          Button
        </ButtonSecondaryActive>
        <ButtonSecondaryFocus onClick={() => console.log("Secondary clicked")}>
          Button
        </ButtonSecondaryFocus>
        <ButtonSecondaryDisabled
          onClick={() => console.log("Secondary clicked")}
        >
          Button
        </ButtonSecondaryDisabled>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h2>Text</h2>
        <ButtonText onClick={() => console.log("Primary clicked")}>
          Button
        </ButtonText>
        <ButtonTextHover onClick={() => console.log("Text clicked")}>
          Button
        </ButtonTextHover>
        <ButtonTextActive onClick={() => console.log("Text clicked")}>
          Button
        </ButtonTextActive>
        <ButtonTextFocus onClick={() => console.log("Text clicked")}>
          Button
        </ButtonTextFocus>
        <ButtonTextDisabled onClick={() => console.log("Text clicked")}>
          Button
        </ButtonTextDisabled>
      </div>

      {/* RIGHT ICON */}
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h2>Primary</h2>
        <ButtonPrimaryArrowRight onClick={() => console.log("Primary clicked")}>
          Button
        </ButtonPrimaryArrowRight>
        <ButtonPrimaryArrowHover onClick={() => console.log("Primary clicked")}>
          Button
        </ButtonPrimaryArrowHover>
        <ButtonPrimaryArrowActive
          onClick={() => console.log("Primary clicked")}
        >
          Button
        </ButtonPrimaryArrowActive>
        <ButtonPrimaryArrowFocus onClick={() => console.log("Primary clicked")}>
          Button
        </ButtonPrimaryArrowFocus>
        <ButtonPrimaryArrowDisabled
          onClick={() => console.log("Primary clicked")}
        >
          Button
        </ButtonPrimaryArrowDisabled>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h2>Secundary</h2>
        <ButtonSecondaryArrowRight
          onClick={() => console.log("Secondary clicked")}
        >
          Button
        </ButtonSecondaryArrowRight>
        <ButtonSecondaryArrowHover
          onClick={() => console.log("Secondary clicked")}
        >
          Button
        </ButtonSecondaryArrowHover>
        <ButtonSecondaryArrowActive
          onClick={() => console.log("Secondary clicked")}
        >
          Button
        </ButtonSecondaryArrowActive>
        <ButtonSecondaryArrowFocus
          onClick={() => console.log("Secondary clicked")}
        >
          Button
        </ButtonSecondaryArrowFocus>
        <ButtonSecondaryArrowDisabled
          onClick={() => console.log("Secondary clicked")}
        >
          Button
        </ButtonSecondaryArrowDisabled>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h2>Text</h2>
        <ButtonTextArrowRight onClick={() => console.log("Text clicked")}>
          Button
        </ButtonTextArrowRight>
        <ButtonTextArrowHover onClick={() => console.log("Text clicked")}>
          Button
        </ButtonTextArrowHover>
        <ButtonTextArrowActive onClick={() => console.log("Text clicked")}>
          Button
        </ButtonTextArrowActive>
        <ButtonTextArrowFocus onClick={() => console.log("Text clicked")}>
          Button
        </ButtonTextArrowFocus>
        <ButtonTextArrowDisabled onClick={() => console.log("Text clicked")}>
          Button
        </ButtonTextArrowDisabled>
      </div>
    </div>
  );
}
