import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FullWidthText`.
 */
export type FullWidthTextProps =
  SliceComponentProps<Content.FullWidthTextSlice>;

/**
 * Component for "FullWidthText" Slices.
 */
const FullWidthText = ({ slice }: FullWidthTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.text} />
    </Bounded>
  );
};

export default FullWidthText;
