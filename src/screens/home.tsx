import {
  InputBorder,
  InputDefault,
  InputLine,
} from "@/modules/library/components/input";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
} from "../modules/library/components/button/index";
import {
  TextAreaBorder,
  TextAreaNormal,
  TextAreaRounded,
} from "@/modules/library/components/textarea";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          {/* NO ICON */}
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimary>boton</ButtonPrimary.ButtonPrimary>
          <ButtonPrimary.ButtonPrimaryHover
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryActive
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryFocus
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryDisabled
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondary
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonText
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextHover
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextActive
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextFocus
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimaryArrowRight
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowHover
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowActive
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowFocus
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowDisabled
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secundary</h2>
          <ButtonSecondary.ButtonSecondaryArrowRight
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryArrowHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryArrowActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryArrowFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryArrowDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextArrowRight
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextArrowHover
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextArrowActive
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextArrowFocus
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextArrowDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimaryArrowLeft
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowLeftHover
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowLeftActive
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowLeftFocus
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowLeftDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondaryArrowLeftInitial
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryArrowLeftHover
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryArrowLeftActive
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryArrowLeftFocus
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryArrowLeftDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextArrowLeftInitial
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextArrowLeftHover
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextArrowLeftActive
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextArrowLeftFocus
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextArrowLeftDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimaryMedium
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondaryMedium
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextMedium
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimaryMediumArrow
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumArrowHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumArrowActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumArrowFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumArrowDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondaryMediumArrow
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumArrowHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumArrowActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumArrowFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumArrowDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextMediumArrow
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumArrowHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumArrowActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumArrowFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumArrowDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimaryMediumLeft
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumLeftHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumLeftActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumLeftFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryMediumLeftDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondaryMediumLeft
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumLeftHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumLeftActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumLeftFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryMediumLeftDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextMediumLeft
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumLeftHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumLeftActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumLeftFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextMediumLeftDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimarySmall
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimarySmallHover
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimarySmallActive
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimarySmallFocus
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimarySmallDisabled
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondarySmall
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallHover
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallActive
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallFocus
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallDisabled
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextSmall
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallHover
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallActive
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallFocus
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallDisabled
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimaryArrowSmall
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowSmallHover
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowSmallActive
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowSmallFocus
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryArrowSmallDisabled
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondarySmallRight
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallRightHover
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallRightActive
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallRightFocus
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallRightDisabled
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextSmallRight
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallRightHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallRightActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallRightFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallRightDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimarySmallLeft
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimarySmallLeftHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimarySmallLeftActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimarySmallLeftFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimarySmallLeftDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondarySmallLeft
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallLeftHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallLeftActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallLeftFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondarySmallLeftDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextSmallLeft
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallLeftHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallLeftActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallLeftFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextSmallLeftDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimaryNormal
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondaryNormal
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextNormalInitial
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalHover
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalActive
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalFocus
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimaryNormalLeft
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalLeftHover
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalLeftActive
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalLeftFocus
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalLeftDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondaryNormalLeft
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalLeftHover
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalLeftActive
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalLeftFocus
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalLeftDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextNormalLeft
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalLeftHover
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalLeftActive
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalLeftFocus
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalLeftDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Primary</h2>
          <ButtonPrimary.ButtonPrimaryNormalRight
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalRightHover
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalRightActive
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalRightFocus
            onClick={() => console.log("Primary clicked")}
            children="Button"
          />
          <ButtonPrimary.ButtonPrimaryNormalRightDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Secondary</h2>
          <ButtonSecondary.ButtonSecondaryNormalRight
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalRightHover
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalRightActive
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalRightFocus
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
          <ButtonSecondary.ButtonSecondaryNormalRightDisabled
            onClick={() => console.log("Secondary clicked")}
            children="Button"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Text</h2>
          <ButtonText.ButtonTextNormalRight
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalRightHover
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalRightActive
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalRightFocus
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
          <ButtonText.ButtonTextNormalRightDisabled
            onClick={() => console.log("Text clicked")}
            children="Button"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center max-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultSmall children="Label placeholder" />
          <InputDefault.InputDefaultHoverSmall children="Label placeholder" />
          <InputDefault.InputDefaultActiveSmall children="Label placeholder" />
          <InputDefault.InputDefaultDisabledSmall children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderSmall children="Label placeholder" />
          <InputBorder.InputBorderHoverSmall children="Label placeholder" />
          <InputBorder.InputBorderActiveSmall children="Label placeholder" />
          <InputBorder.InputBorderDisabledSmall children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLine children="Label placeholder" />
          <InputLine.InputLineHover children="Label placeholder" />
          <InputLine.InputLineActive children="Label placeholder" />
          <InputLine.InputLineDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultLarge children="Label placeholder" />
          <InputDefault.InputDefaultHoverLarge children="Label placeholder" />
          <InputDefault.InputDefaultActiveLarge children="Label placeholder" />
          <InputDefault.InputDefaultDisabledLarge children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderLarge children="Label placeholder" />
          <InputBorder.InputBorderHoverLarge children="Label placeholder" />
          <InputBorder.InputBorderActiveLarge children="Label placeholder" />
          <InputBorder.InputBorderDisabledLarge children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLine children="Label placeholder" />
          <InputLine.InputLineHover children="Label placeholder" />
          <InputLine.InputLineActive children="Label placeholder" />
          <InputLine.InputLineDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultNormal children="Label placeholder" />
          <InputDefault.InputDefaultHoverNormal children="Label placeholder" />
          <InputDefault.InputDefaultActiveNormal children="Label placeholder" />
          <InputDefault.InputDefaultDisabledNormal children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderNormal children="Label placeholder" />
          <InputBorder.InputBorderHoverNormal children="Label placeholder" />
          <InputBorder.InputBorderActiveNormal children="Label placeholder" />
          <InputBorder.InputBorderDisabledNormal children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLine children="Label placeholder" />
          <InputLine.InputLineHover children="Label placeholder" />
          <InputLine.InputLineActive children="Label placeholder" />
          <InputLine.InputLineDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultSmallIcon children="Label placeholder" />
          <InputDefault.InputDefaultHoverSmallIcon children="Label placeholder" />
          <InputDefault.InputDefaultActiveSmallIcon children="Label placeholder" />
          <InputDefault.InputDefaultDisabledSmallIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderSmallIcon children="Label placeholder" />
          <InputBorder.InputBorderHoverSmallIcon children="Label placeholder" />
          <InputBorder.InputBorderActiveSmallIcon children="Label placeholder" />
          <InputBorder.InputBorderDisabledSmallIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLineIcon children="Label placeholder" />
          <InputLine.InputLineHoverIcon children="Label placeholder" />
          <InputLine.InputLineActiveIcon children="Label placeholder" />
          <InputLine.InputLineDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultLargeIcon children="Label placeholder" />
          <InputDefault.InputDefaultHoverLargeIcon children="Label placeholder" />
          <InputDefault.InputDefaultActiveLargeIcon children="Label placeholder" />
          <InputDefault.InputDefaultDisabledLargeIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderLargeIcon children="Label placeholder" />
          <InputBorder.InputBorderHoverLargeIcon children="Label placeholder" />
          <InputBorder.InputBorderActiveLargeIcon children="Label placeholder" />
          <InputBorder.InputBorderDisabledLargeIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLineIcon children="Label placeholder" />
          <InputLine.InputLineHoverIcon children="Label placeholder" />
          <InputLine.InputLineActiveIcon children="Label placeholder" />
          <InputLine.InputLineDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultNormalIcon children="Label placeholder" />
          <InputDefault.InputDefaultHoverNormalIcon children="Label placeholder" />
          <InputDefault.InputDefaultActiveNormalIcon children="Label placeholder" />
          <InputDefault.InputDefaultDisabledNormalIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderNormalIcon children="Label placeholder" />
          <InputBorder.InputBorderHoverNormalIcon children="Label placeholder" />
          <InputBorder.InputBorderActiveNormalIcon children="Label placeholder" />
          <InputBorder.InputBorderDisabledNormalIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLineIcon children="Label placeholder" />
          <InputLine.InputLineHoverIcon children="Label placeholder" />
          <InputLine.InputLineActiveIcon children="Label placeholder" />
          <InputLine.InputLineDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center max-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultSmallError children="Label placeholder" />
          <InputDefault.InputDefaultHoverSmallError children="Label placeholder" />
          <InputDefault.InputDefaultActiveSmallError children="Label placeholder" />
          <InputDefault.InputDefaultDisabledSmallError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center max-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderSmallError children="Label placeholder" />
          <InputBorder.InputBorderHoverSmallError children="Label placeholder" />
          <InputBorder.InputBorderActiveSmallError children="Label placeholder" />
          <InputBorder.InputBorderDisabledSmallError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLineError children="Label placeholder" />
          <InputLine.InputLineHoverError children="Label placeholder" />
          <InputLine.InputLineActiveError children="Label placeholder" />
          <InputLine.InputLineDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultLargeError children="Label placeholder" />
          <InputDefault.InputDefaultHoverLargeError children="Label placeholder" />
          <InputDefault.InputDefaultActiveLargeError children="Label placeholder" />
          <InputDefault.InputDefaultDisabledLargeError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderLargeError children="Label placeholder" />
          <InputBorder.InputBorderHoverLargeError children="Label placeholder" />
          <InputBorder.InputBorderActiveLargeError children="Label placeholder" />
          <InputBorder.InputBorderDisabledLargeError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLineError children="Label placeholder" />
          <InputLine.InputLineHoverError children="Label placeholder" />
          <InputLine.InputLineActiveError children="Label placeholder" />
          <InputLine.InputLineDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultNormalError children="Label placeholder" />
          <InputDefault.InputDefaultHoverNormalError children="Label placeholder" />
          <InputDefault.InputDefaultActiveNormalError children="Label placeholder" />
          <InputDefault.InputDefaultDisabledNormalError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderNormalError children="Label placeholder" />
          <InputBorder.InputBorderHoverNormalError children="Label placeholder" />
          <InputBorder.InputBorderActiveNormalError children="Label placeholder" />
          <InputBorder.InputBorderDisabledNormalError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLineError children="Label placeholder" />
          <InputLine.InputLineHoverError children="Label placeholder" />
          <InputLine.InputLineActiveError children="Label placeholder" />
          <InputLine.InputLineDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultSmallIconError children="Label placeholder" />
          <InputDefault.InputDefaultHoverSmallIconError children="Label placeholder" />
          <InputDefault.InputDefaultActiveSmallIconError children="Label placeholder" />
          <InputDefault.InputDefaultDisabledSmallIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderSmallIconError children="Label placeholder" />
          <InputBorder.InputBorderHoverSmallIconError children="Label placeholder" />
          <InputBorder.InputBorderActiveSmallIconError children="Label placeholder" />
          <InputBorder.InputBorderDisabledSmallIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLineIconError children="Label placeholder" />
          <InputLine.InputLineHoverIconError children="Label placeholder" />
          <InputLine.InputLineActiveIconError children="Label placeholder" />
          <InputLine.InputLineDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultLargeIconError children="Label placeholder" />
          <InputDefault.InputDefaultHoverLargeIconError children="Label placeholder" />
          <InputDefault.InputDefaultActiveLargeIconError children="Label placeholder" />
          <InputDefault.InputDefaultDisabledLargeIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderLargeIconError children="Label placeholder" />
          <InputBorder.InputBorderHoverLargeIconError children="Label placeholder" />
          <InputBorder.InputBorderActiveLargeIconError children="Label placeholder" />
          <InputBorder.InputBorderDisabledLargeIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLineIconError children="Label placeholder" />
          <InputLine.InputLineHoverIconError children="Label placeholder" />
          <InputLine.InputLineActiveIconError children="Label placeholder" />
          <InputLine.InputLineDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.InputDefaultNormalIconError children="Label placeholder" />
          <InputDefault.InputDefaultHoverNormalIconError children="Label placeholder" />
          <InputDefault.InputDefaultActiveNormalIconError children="Label placeholder" />
          <InputDefault.InputDefaultDisabledNormalIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderNormalIconError children="Label placeholder" />
          <InputBorder.InputBorderHoverNormalIconError children="Label placeholder" />
          <InputBorder.InputBorderActiveNormalIconError children="Label placeholder" />
          <InputBorder.InputBorderDisabledNormalIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.InputLineIconError children="Label placeholder" />
          <InputLine.InputLineHoverIconError children="Label placeholder" />
          <InputLine.InputLineActiveIconError children="Label placeholder" />
          <InputLine.InputLineDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperTextSmall children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextSmallHover children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextSmallActive children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextSmallDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperTextSmall children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextSmallHover children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextSmallActive children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextSmallDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperText children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextHover children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextActive children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperTextLarge children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextLargeHover children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextLargeActive children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextLargeDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperTextLarge children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextLargeHover children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextLargeActive children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextLargeDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperText children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextHover children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextActive children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperTextNormal children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextNormalHover children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextNormalActive children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextNormalDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperTextNormal children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextNormalHover children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextNormalActive children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextNormalDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperText children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextHover children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextActive children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperTextSmallIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextSmallHoverIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextSmallActiveIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextSmallDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperTextSmallIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextSmallHoverIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextSmallActiveIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextSmallDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperTextIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextHoverIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextActiveIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperTextLargeIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextLargeHoverIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextLargeActiveIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextLargeDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperTextLargeIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextLargeHoverIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextLargeActiveIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextLargeDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperTextIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextHoverIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextActiveIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperTextNormalIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextNormalHoverIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextNormalActiveIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextNormalDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperTextNormalIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextNormalHoverIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextNormalActiveIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextNormalDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperTextIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextHoverIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextActiveIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperTextSmallIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextSmallHoverIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextSmallActiveIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextSmallDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperTextSmallIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextSmallHoverIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextSmallActiveIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextSmallDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperTextIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextHoverIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextActiveIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperTextLargeIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextLargeHoverIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextLargeActiveIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextLargeDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperTextLargeIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextLargeHoverIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextLargeActiveIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextLargeDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperTextIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextHoverIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextActiveIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperTextNormalIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextNormalHoverIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextNormalActiveIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperTextNormalDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperTextNormalIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextNormalHoverIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextNormalActiveIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperTextNormalDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperTextIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextHoverIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextActiveIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperTextDisabledIconError children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded</h2>
          <TextAreaRounded.TextAreaRoundedSmDefault children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmHover children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmActive children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderRoundedSmDefault children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedSmHover children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedSmActive children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedSmDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded</h2>
          <TextAreaNormal.TextAreaNormalSmDefault children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalSmHover children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalSmActive children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalSmDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderNormalSmDefault children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmHover children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmActive children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmDisabled children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded Medium</h2>
          <TextAreaRounded.TextAreaRoundedMdDefault children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdHover children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdActive children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border Medium</h2>
          <TextAreaBorder.TextAreaBorderRoundedMdDefault children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedMdHover children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedMdActive children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedMdDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Normal Medium</h2>
          <TextAreaNormal.TextAreaNormalMdDefault children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalMdHover children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalMdActive children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalMdDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border Medium</h2>
          <TextAreaBorder.TextAreaBorderNormalMdDefault children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdHover children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdActive children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdDisabled children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded Large</h2>
          <TextAreaRounded.TextAreaRoundedLgDefault children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgHover children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgActive children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border Large</h2>
          <TextAreaBorder.TextAreaBorderRoundedLgDefault children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedLgHover children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedLgActive children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedLgDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Normal Large</h2>
          <TextAreaNormal.TextAreaNormalLgDefault children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalLgHover children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalLgActive children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalLgDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border Large</h2>
          <TextAreaBorder.TextAreaBorderNormalLgDefault children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgHover children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgActive children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgDisabled children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded Small Error</h2>
          <TextAreaRounded.TextAreaRoundedSmDefaultError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmHoverError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmActiveError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderRoundedSmDefaultError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedSmHoverError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedSmActiveError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedSmDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded</h2>
          <TextAreaNormal.TextAreaNormalSmDefaultError children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalSmHoverError children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalSmActiveError children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalSmDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border Normal Small Error</h2>
          <TextAreaBorder.TextAreaBorderNormalSmDefaultError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmHoverError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmActiveError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmDisabledError children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded Small Error</h2>
          <TextAreaRounded.TextAreaRoundedMdDefaultError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdHoverError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdActiveError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderRoundedMdDefaultError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedMdHoverError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedMdActiveError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedMdDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Nrormal Error</h2>
          <TextAreaNormal.TextAreaNormalMdDefaultError children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalMdHoverError children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalMdActiveError children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalMdDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderNormalMdDefaultError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdHoverError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdActiveError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdDisabledError children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded Small Error</h2>
          <TextAreaRounded.TextAreaRoundedLgDefaultError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgHoverError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgActiveError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderRoundedLgDefaultError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedLgHoverError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedLgActiveError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderRoundedLgDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Nrormal Error</h2>
          <TextAreaNormal.TextAreaNormalLgDefaultError children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalLgHoverError children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalLgActiveError children="Label placeholder" />
          <TextAreaNormal.TextAreaNormalLgDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderNormalLgDefaultError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgHoverError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgActiveError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgDisabledError children="Label placeholder" />
        </div>
      </div>
    </div>
  );
}
