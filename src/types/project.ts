import type { ButtonProps } from "ui/components/Button";
import type React from "react";
import type { ImageProps as NextImageComponentProps } from "next/image";
import type { DivProps } from "./react";
import type { HoverCardContent, HoverCardTrigger } from "ui/components/Hover";
import type { TailwindClassname } from "./tailwind";

/**
 * A utility type that matches the props for each element in a given object.
 * The keys of the object correspond to the names of the child elements in the JSX.
 * The values of the object are the corresponding props for each element.
 */
export type MatchElementProps<T> = {
  [K in keyof T]?: T[K];
};

/**
 * Props for an <img> element that uses the Next.js Image component.
 */
export type NextImageProps = Pick<
  NextImageComponentProps,
  "width" | "height" | "className"
>;

/**
 *
 * Slug
 *
 * The slug.
 *
 */
export type Slug = {
  slug: string;
};

/**
 *
 * ClassName
 *
 * Custom class names passed to the root element.
 */
export type ClassName = {
  className?: TailwindClassname;
};

/**
 * Props for the nested elements.
 * The keys of this object must match the names of the corresponding child elements in the JSX.
 */
export type ChildrenComponentProps = {
  childrenProps?: NestedComponentProps;
};

/**
 * Props for the nested elements.
 * The keys of this object must match the names of the corresponding child elements in the JSX.
 */
export type NestedComponentProps = MatchElementProps<{
  /**
   * Props for a <button> element.
   */
  Button: ButtonProps;

  /**
   * Props for an <img> element that uses the Next.js Image component.
   *
   * @todo: This type could be inside a union of a more general ImageComponent type.
   */
  NextImage: NextImageProps;

  /**
   * Props for a <div> element.
   */
  div: DivProps;

  /**
   * Props for a HoverCard component.
   */
  HoverCardContent: React.ComponentProps<typeof HoverCardContent>;
  /**
   * Props for a HoverCard component.
   */
  HoverCardTrigger: React.ComponentProps<typeof HoverCardTrigger>;
}>;

/**
 * Defines the type of the `children` prop in a React component.
 * `children` can be a single JSX element or an array of JSX elements.
 * If `children` is not provided, it defaults to `undefined`.
 */
type ChildrenProps = JSX.Element | JSX.Element[] | undefined;

/**
 * Defines the props for a React component that accepts children.
 * The `children` prop is optional and can accept a single JSX element or an array of JSX elements.
 */
export type Children = {
  children?: ChildrenProps;
};

/**
 *
 */
export type CustomComponent = ClassName & ChildrenComponentProps;

/**
 * Creates a new object of the `HoverCardWrapperProps` type with the specified values.
 * @param props The properties to include in the object.
 * @returns A new object of the `HoverCardWrapperProps` type with the specified values.
 */
export function createCustomComponentProps(
  props?: CustomComponent,
): CustomComponent {
  return {
    className: props?.className || "",
    childrenProps: props?.childrenProps || {},
  };
}

export const customComponentProps = { ...createCustomComponentProps() };
