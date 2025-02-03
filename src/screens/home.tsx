import { ChipsComponents } from "@/modules/library/components/chips";
import { Tooltip } from "../modules/library/components/tooltip/Tooltip";
import { Badge } from "@/modules/library/components/badge/Badge";

import {
  AlertFilled,
  AlertOutlined,
  AlertStandard,
} from "@/modules/library/components/alert";

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
          <InputDefault.InputDefSm children="Label placeholder" />
          <InputDefault.InputDefHoverSm children="Label placeholder" />
          <InputDefault.InputDefActiveSm children="Label placeholder" />
          <InputDefault.InputDefDisabledSm children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderSm children="Label placeholder" />
          <InputBorder.InputBorderHoverSm children="Label placeholder" />
          <InputBorder.InputBorderActiveSm children="Label placeholder" />
          <InputBorder.InputBorderDisabledSm children="Label placeholder" />
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
          <InputDefault.InputDefLg children="Label placeholder" />
          <InputDefault.InputDefHoverLg children="Label placeholder" />
          <InputDefault.InputDefActiveLg children="Label placeholder" />
          <InputDefault.InputDefDisabledLg children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderLg children="Label placeholder" />
          <InputBorder.InputBorderHoverLg children="Label placeholder" />
          <InputBorder.InputBorderActiveLg children="Label placeholder" />
          <InputBorder.InputBorderDisabledLg children="Label placeholder" />
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
          <InputDefault.InputDefNm children="Label placeholder" />
          <InputDefault.InputDefHoverNm children="Label placeholder" />
          <InputDefault.InputDefActiveNm children="Label placeholder" />
          <InputDefault.InputDefDisabledNm children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderNm children="Label placeholder" />
          <InputBorder.InputBorderHoverNm children="Label placeholder" />
          <InputBorder.InputBorderActiveNm children="Label placeholder" />
          <InputBorder.InputBorderDisabledNm children="Label placeholder" />
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
          <InputDefault.InputDefSmIcon children="Label placeholder" />
          <InputDefault.InputDefHoverSmIcon children="Label placeholder" />
          <InputDefault.InputDefActiveSmIcon children="Label placeholder" />
          <InputDefault.InputDefDisabledSmIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderSmIcon children="Label placeholder" />
          <InputBorder.InputBorderHoverSmIcon children="Label placeholder" />
          <InputBorder.InputBorderActiveSmIcon children="Label placeholder" />
          <InputBorder.InputBorderDisabledSmIcon children="Label placeholder" />
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
          <InputDefault.InputDefLgIcon children="Label placeholder" />
          <InputDefault.InputDefHoverLgIcon children="Label placeholder" />
          <InputDefault.InputDefActiveLgIcon children="Label placeholder" />
          <InputDefault.InputDefDisabledLgIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderLgIcon children="Label placeholder" />
          <InputBorder.InputBorderHoverLgIcon children="Label placeholder" />
          <InputBorder.InputBorderActiveLgIcon children="Label placeholder" />
          <InputBorder.InputBorderDisabledLgIcon children="Label placeholder" />
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
          <InputDefault.InputDefNmIcon children="Label placeholder" />
          <InputDefault.InputDefHoverNmIcon children="Label placeholder" />
          <InputDefault.InputDefActiveNmIcon children="Label placeholder" />
          <InputDefault.InputDefDisabledNmIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderNmIcon children="Label placeholder" />
          <InputBorder.InputBorderHoverNmIcon children="Label placeholder" />
          <InputBorder.InputBorderActiveNmIcon children="Label placeholder" />
          <InputBorder.InputBorderDisabledNmIcon children="Label placeholder" />
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
          <InputDefault.InputDefSmError children="Label placeholder" />
          <InputDefault.InputDefHoverSmError children="Label placeholder" />
          <InputDefault.InputDefActiveSmError children="Label placeholder" />
          <InputDefault.InputDefDisabledSmError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center max-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderSmError children="Label placeholder" />
          <InputBorder.InputBorderHoverSmError children="Label placeholder" />
          <InputBorder.InputBorderActiveSmError children="Label placeholder" />
          <InputBorder.InputBorderDisabledSmError children="Label placeholder" />
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
          <InputDefault.InputDefLgError children="Label placeholder" />
          <InputDefault.InputDefHoverLgError children="Label placeholder" />
          <InputDefault.InputDefActiveLgError children="Label placeholder" />
          <InputDefault.InputDefDisabledLgError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderLgError children="Label placeholder" />
          <InputBorder.InputBorderHoverLgError children="Label placeholder" />
          <InputBorder.InputBorderActiveLgError children="Label placeholder" />
          <InputBorder.InputBorderDisabledLgError children="Label placeholder" />
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
          <InputDefault.InputDefNmError children="Label placeholder" />
          <InputDefault.InputDefHoverNmError children="Label placeholder" />
          <InputDefault.InputDefActiveNmError children="Label placeholder" />
          <InputDefault.InputDefDisabledNmError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderNmError children="Label placeholder" />
          <InputBorder.InputBorderHoverNmError children="Label placeholder" />
          <InputBorder.InputBorderActiveNmError children="Label placeholder" />
          <InputBorder.InputBorderDisabledNmError children="Label placeholder" />
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
          <InputDefault.InputDefSmIconError children="Label placeholder" />
          <InputDefault.InputDefHoverSmIconError children="Label placeholder" />
          <InputDefault.InputDefActiveSmIconError children="Label placeholder" />
          <InputDefault.InputDefDisabledSmIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderSmIconError children="Label placeholder" />
          <InputBorder.InputBorderHoverSmIconError children="Label placeholder" />
          <InputBorder.InputBorderActiveSmIconError children="Label placeholder" />
          <InputBorder.InputBorderDisabledSmIconError children="Label placeholder" />
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
          <InputDefault.InputDefLgIconError children="Label placeholder" />
          <InputDefault.InputDefHoverLgIconError children="Label placeholder" />
          <InputDefault.InputDefActiveLgIconError children="Label placeholder" />
          <InputDefault.InputDefDisabledLgIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderLgIconError children="Label placeholder" />
          <InputBorder.InputBorderHoverLgIconError children="Label placeholder" />
          <InputBorder.InputBorderActiveLgIconError children="Label placeholder" />
          <InputBorder.InputBorderDisabledLgIconError children="Label placeholder" />
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
          <InputDefault.InputDefNmIconError children="Label placeholder" />
          <InputDefault.InputDefHoverNmIconError children="Label placeholder" />
          <InputDefault.InputDefActiveNmIconError children="Label placeholder" />
          <InputDefault.InputDefDisabledNmIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.InputBorderNmIconError children="Label placeholder" />
          <InputBorder.InputBorderHoverNmIconError children="Label placeholder" />
          <InputBorder.InputBorderActiveNmIconError children="Label placeholder" />
          <InputBorder.InputBorderDisabledNmIconError children="Label placeholder" />
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
          <InputDefault.LabeledInputHelperSm children="Label placeholder" />
          <InputDefault.LabeledInputHelperSmHover children="Label placeholder" />
          <InputDefault.LabeledInputHelperSmActive children="Label placeholder" />
          <InputDefault.LabeledInputHelperSmDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperSm children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperSmHover children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperSmActive children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperSmDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelper children="Label placeholder" />
          <InputLine.LabeledInputLineHelperHover children="Label placeholder" />
          <InputLine.LabeledInputLineHelperActive children="Label placeholder" />
          <InputLine.LabeledInputLineHelperDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperLg children="Label placeholder" />
          <InputDefault.LabeledInputHelperLgHover children="Label placeholder" />
          <InputDefault.LabeledInputHelperLgActive children="Label placeholder" />
          <InputDefault.LabeledInputHelperLgDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperLg children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperLgHover children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperLgActive children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperLgDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelper children="Label placeholder" />
          <InputLine.LabeledInputLineHelperHover children="Label placeholder" />
          <InputLine.LabeledInputLineHelperActive children="Label placeholder" />
          <InputLine.LabeledInputLineHelperDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperNm children="Label placeholder" />
          <InputDefault.LabeledInputHelperNmHover children="Label placeholder" />
          <InputDefault.LabeledInputHelperNmActive children="Label placeholder" />
          <InputDefault.LabeledInputHelperNmDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperNm children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperNmHover children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperNmActive children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperNmDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelper children="Label placeholder" />
          <InputLine.LabeledInputLineHelperHover children="Label placeholder" />
          <InputLine.LabeledInputLineHelperActive children="Label placeholder" />
          <InputLine.LabeledInputLineHelperDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperSmIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperSmHoverIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperSmActiveIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperSmDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperSmIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperSmHoverIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperSmActiveIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperSmDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperHoverIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperActiveIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperLgIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperLgHoverIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperLgActiveIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperLgDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperLgIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperLgHoverIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperLgActiveIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperLgDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperHoverIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperActiveIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperNmIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperNmHoverIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperNmActiveIcon children="Label placeholder" />
          <InputDefault.LabeledInputHelperNmDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperNmIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperNmHoverIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperNmActiveIcon children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperNmDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperHoverIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperActiveIcon children="Label placeholder" />
          <InputLine.LabeledInputLineHelperDisabledIcon children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperSmIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperSmHoverIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperSmActiveIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperSmDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperSmIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperSmHoverIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperSmActiveIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperSmDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperHoverIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperActiveIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperLgIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperLgHoverIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperLgActiveIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperLgDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperLgIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperLgHoverIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperLgActiveIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperLgDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperHoverIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperActiveIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Default</h2>
          <InputDefault.LabeledInputHelperNmIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperNmHoverIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperNmActiveIconError children="Label placeholder" />
          <InputDefault.LabeledInputHelperNmDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <InputBorder.LabeledInputBorderHelperNmIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperNmHoverIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperNmActiveIconError children="Label placeholder" />
          <InputBorder.LabeledInputBorderHelperNmDisabledIconError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Line</h2>
          <InputLine.LabeledInputLineHelperIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperHoverIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperActiveIconError children="Label placeholder" />
          <InputLine.LabeledInputLineHelperDisabledIconError children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded</h2>
          <TextAreaRounded.TextAreaRoundedSmDef children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmHover children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmActive children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderRoundedSmDef children="Label placeholder" />
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
          <TextAreaBorder.TextAreaBorderNormalSmDef children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmHover children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmActive children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmDisabled children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded Medium</h2>
          <TextAreaRounded.TextAreaRoundedMdDef children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdHover children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdActive children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border Medium</h2>
          <TextAreaBorder.TextAreaBorderRoundedMdDef children="Label placeholder" />
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
          <TextAreaBorder.TextAreaBorderNormalMdDef children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdHover children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdActive children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdDisabled children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded Large</h2>
          <TextAreaRounded.TextAreaRoundedLgDef children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgHover children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgActive children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgDisabled children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border Large</h2>
          <TextAreaBorder.TextAreaBorderRoundedLgDef children="Label placeholder" />
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
          <TextAreaBorder.TextAreaBorderNormalLgDef children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgHover children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgActive children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgDisabled children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded Small Error</h2>
          <TextAreaRounded.TextAreaRoundedSmDefError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmHoverError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmActiveError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedSmDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderRoundedSmDefError children="Label placeholder" />
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
          <TextAreaBorder.TextAreaBorderNormalSmDefError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmHoverError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmActiveError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalSmDisabledError children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded Small Error</h2>
          <TextAreaRounded.TextAreaRoundedMdDefError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdHoverError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdActiveError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedMdDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderRoundedMdDefError children="Label placeholder" />
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
          <TextAreaBorder.TextAreaBorderNormalMdDefError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdHoverError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdActiveError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalMdDisabledError children="Label placeholder" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Rounded Small Error</h2>
          <TextAreaRounded.TextAreaRoundedLgDefError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgHoverError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgActiveError children="Label placeholder" />
          <TextAreaRounded.TextAreaRoundedLgDisabledError children="Label placeholder" />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <h2>Border</h2>
          <TextAreaBorder.TextAreaBorderRoundedLgDefError children="Label placeholder" />
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
          <TextAreaBorder.TextAreaBorderNormalLgDefError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgHoverError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgActiveError children="Label placeholder" />
          <TextAreaBorder.TextAreaBorderNormalLgDisabledError children="Label placeholder" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center min-h-screen space-x-3">
        <ChipsComponents.ChipsNeutral children="Chip" />
        <ChipsComponents.ChipsPrimary children="Chip" />
        <ChipsComponents.ChipsSecondary children="Chip" />
        <ChipsComponents.ChipsDanger children="Chip" />
        <ChipsComponents.ChipsWarning children="Chip" />
        <ChipsComponents.ChipsInfo children="Chip" />
        <ChipsComponents.ChipsSuccess children="Chip" />
        <ChipsComponents.ChipsNeutralIcon children="Chip" />
        <ChipsComponents.ChipsPrimaryIcon children="Chip" />
        <ChipsComponents.ChipsSecondaryIcon children="Chip" />
        <ChipsComponents.ChipsDangerIcon children="Chip" />
        <ChipsComponents.ChipsWarningIcon children="Chip" />
        <ChipsComponents.ChipsInfoIcon children="Chip" />
        <ChipsComponents.ChipsSuccessIcon children="Chip" />
      </div>
      <div className="flex items-center gap-9 justify-center min-h-screen">
        <Tooltip trianglePosition="bottom" text="Lorem Ipsum" variant="neutral">
          <button className="px-4 py-2 text-white bg-blue-950 rounded">
            Neutral
          </button>
        </Tooltip>
        <Tooltip trianglePosition="bottom" text="Lorem Ipsum" variant="primary">
          <button className="px-4 py-2 text-white bg-blue-900 rounded">
            Neutral
          </button>
        </Tooltip>
        <Tooltip trianglePosition="bottom" text="Lorem Ipsum" variant="danger">
          <button className="px-4 py-2 text-white bg-red-900 rounded">
            danger
          </button>
        </Tooltip>
        <Tooltip
          trianglePosition="bottom"
          text="Lorem Ipsum"
          variant="secondary"
        >
          <button className="px-4 py-2 text-white bg-green-900 rounded">
            Neutral
          </button>
        </Tooltip>
        <Tooltip trianglePosition="bottom" text="Lorem Ipsum" variant="warning">
          <button className="px-4 py-2 text-white bg-orange-700 rounded">
            Neutral
          </button>
        </Tooltip>
        <Tooltip trianglePosition="bottom" text="Lorem Ipsum" variant="info">
          <button className="px-4 py-2 text-white bg-pink-700 rounded">
            Neutral
          </button>
        </Tooltip>
        <Tooltip trianglePosition="bottom" text="Lorem Ipsum" variant="success">
          <button className="px-4 py-2 text-white bg-purple-900 rounded">
            Neutral
          </button>
        </Tooltip>
        <Tooltip
          trianglePosition="bottom"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          variant="success"
        >
          <button className="px-4 py-2 text-white bg-purple-900 rounded">
            Tooltip Large
          </button>
        </Tooltip>
      </div>
      <div className="flex justify-center mb-10">
        <Badge
          variant="pink"
          title="PlaceHolder Title"
          text="PlaceHolder"
          children="lorem"
          size="small"
        />
        <Badge
          variant="green"
          title="PlaceHolder Title"
          text="PlaceHolder"
          children="lorem"
          size="medium"
        />
        <Badge
          variant="black"
          title="PlaceHolder Title"
          text="PlaceHolder"
          children="lorem"
          size="large"
        />
      </div>
      <div className="grid grid-cols-3 gap-10 min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <AlertFilled.ErrorAlert description="{Description}" title="{Title}" />
          <AlertFilled.WarningAlert
            description="{Description}"
            title="{Title}"
          />
          <AlertFilled.InfoAlert description="{Description}" title="{Title}" />
          <AlertFilled.SuccessAlert
            description="{Description}"
            title="{Title}"
          />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <AlertOutlined.ErrorAlertOutlined
            description="{Description}"
            title="{Title}"
          />
          <AlertOutlined.WarningAlertOutlined
            description="{Description}"
            title="{Title}"
          />
          <AlertOutlined.InfoAlertOutlined
            description="{Description}"
            title="{Title}"
          />
          <AlertOutlined.SuccessAlertOutlined
            description="{Description}"
            title="{Title}"
          />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <AlertStandard.ErrorAlertStandard
            description="{Description}"
            title="{Title}"
          />
          <AlertStandard.WarningAlertStandard
            description="{Description}"
            title="{Title}"
          />
          <AlertStandard.InfoAlertStandard
            description="{Description}"
            title="{Title}"
          />
          <AlertStandard.SuccessAlertStandard
            description="{Description}"
            title="{Title}"
          />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertFilled.ErrorAlertSimple title="{Title}" />
          <AlertFilled.WarningAlertSimple title="{Title}" />
          <AlertFilled.InfoAlertSimple title="{Title}" />
          <AlertFilled.SuccessAlertSimple title="{Title}" />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertOutlined.ErrorAlertOutlinedSimple title="{Title}" />
          <AlertOutlined.WarningAlertOutlinedSimple title="{Title}" />
          <AlertOutlined.InfoAlertOutlinedSimple title="{Title}" />
          <AlertOutlined.SuccessAlertOutlinedSimple title="{Title}" />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertStandard.ErrorAlertStandardSimple title="{Title}" />
          <AlertStandard.WarningAlertStandardSimple title="{Title}" />
          <AlertStandard.InfoAlertStandardSimple title="{Title}" />
          <AlertStandard.SuccessAlertStandardSimple title="{Title}" />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertFilled.ErrorAlertDescription />
          <AlertFilled.WarningAlertDescription />
          <AlertFilled.InfoAlertDescription />
          <AlertFilled.SuccessAlertDescription />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertOutlined.ErrorAlertOutlinedDescription />
          <AlertOutlined.WarningAlertOutlinedDescription />
          <AlertOutlined.InfoAlertOutlinedDescription />
          <AlertOutlined.SuccessAlertOutlinedDescription />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertStandard.ErrorAlertStandardDescription />
          <AlertStandard.WarningAlertStandardDescription />
          <AlertStandard.InfoAlertStandardDescription />
          <AlertStandard.SuccessAlertStandardDescription />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <AlertFilled.ErrorAlertClose
            description="{Description}"
            title="{Title}"
          />
          <AlertFilled.WarningAlertClose
            description="{Description}"
            title="{Title}"
          />
          <AlertFilled.InfoAlertClose
            description="{Description}"
            title="{Title}"
          />
          <AlertFilled.SuccessAlertClose
            description="{Description}"
            title="{Title}"
          />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <AlertOutlined.ErrorAlertOutlinedClose
            description="{Description}"
            title="{Title}"
          />
          <AlertOutlined.WarningAlertOutlinedClose
            description="{Description}"
            title="{Title}"
          />
          <AlertOutlined.InfoAlertOutlinedClose
            description="{Description}"
            title="{Title}"
          />
          <AlertOutlined.SuccessAlertOutlinedClose
            description="{Description}"
            title="{Title}"
          />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
          <AlertStandard.ErrorAlertStandardClose
            description="{Description}"
            title="{Title}"
          />
          <AlertStandard.WarningAlertStandardClose
            description="{Description}"
            title="{Title}"
          />
          <AlertStandard.InfoAlertStandardClose
            description="{Description}"
            title="{Title}"
          />
          <AlertStandard.SuccessAlertStandardClose
            description="{Description}"
            title="{Title}"
          />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertFilled.ErrorAlertSimpleClose />
          <AlertFilled.WarningAlertSimpleClose />
          <AlertFilled.InfoAlertSimpleClose />
          <AlertFilled.SuccessAlertSimpleClose />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertOutlined.ErrorAlertOutlinedSimpleClose />
          <AlertOutlined.WarningAlertOutlinedSimpleClose />
          <AlertOutlined.InfoAlertOutlinedSimpleClose />
          <AlertOutlined.SuccessAlertOutlinedSimpleClose />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertStandard.ErrorAlertStandardSimpleClose />
          <AlertStandard.WarningAlertStandardSimpleClose />
          <AlertStandard.InfoAlertStandardSimpleClose />
          <AlertStandard.SuccessAlertStandardSimpleClose />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertFilled.ErrorAlertDescriptionClose />
          <AlertFilled.WarningAlertDescriptionClose />
          <AlertFilled.InfoAlertDescriptionClose />
          <AlertFilled.SuccessAlertDescriptionClose />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertOutlined.ErrorAlertOutlinedDescriptionClose />
          <AlertOutlined.WarningAlertOutlinedDescriptionClose />
          <AlertOutlined.InfoAlertOutlinedDescriptionClose />
          <AlertOutlined.SuccessAlertOutlinedDescriptionClose />
        </div>
        <div className="flex flex-col items-center justify-center mb-10 space-y-4">
          <AlertStandard.ErrorAlertStandardDescriptionClose />
          <AlertStandard.WarningAlertStandardDescriptionClose />
          <AlertStandard.InfoAlertStandardDescriptionClose />
          <AlertStandard.SuccessAlertStandardDescriptionClose />
        </div>
      </div>
    </div>
  );
}
