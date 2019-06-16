import { Document, model, Schema, SchemaTypes } from "mongoose";

export interface ILayoutItemDocument extends Document {
  key: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW?: number;
  maxW?: number;
  minH?: number;
  maxH?: number;
  data?: any;
}

export interface ILayoutDocument extends Document {
  name: string;
  width?: number;
  margin?: number[];
  containerPadding?: number[];
  rowHeight?: number;
}

export interface IStaticLayoutDocument extends ILayoutDocument {
  cols: number;
  items: ILayoutItemDocument[];
}

export interface IResponsiveLayoutDocument extends ILayoutDocument {
  cols: {
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
    xxs?: number;
  };
  items: {
    lg?: ILayoutItemDocument[];
    md?: ILayoutItemDocument[];
    sm?: ILayoutItemDocument[];
    xs?: ILayoutItemDocument[];
    xxs?: ILayoutItemDocument[];
  };
}

export const LayoutItemSchema = new Schema(
  {
    key: { type: String, required: true, unique: true },
    x: { type: Number, required: true, min: 0 },
    y: { type: Number, required: true, min: 0 },
    w: { type: Number, required: true, min: 0 },
    h: { type: Number, required: true, min: 0 },
    minW: Number,
    maxW: Number,
    minH: Number,
    maxH: Number,
    data: SchemaTypes.Mixed,
  },
  { _id: false },
);

export const LayoutSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    width: Number,
    margin: [Number],
    containerPadding: [Number],
    rowHeight: Number,
  },
  { discriminatorKey: "kind" },
);

export const StaticLayoutSchema = new Schema({
  cols: { type: Number, required: true, min: 1 },
  items: [LayoutItemSchema],
});

export const ResponsiveLayoutSchema = new Schema({
  cols: new Schema({
    lg: Number,
    md: Number,
    sm: Number,
    xs: Number,
    xxs: Number,
  }),
  items: new Schema({
    lg: [LayoutItemSchema],
    md: [LayoutItemSchema],
    sm: [LayoutItemSchema],
    xs: [LayoutItemSchema],
    xxs: [LayoutItemSchema],
  }),
});

export const LayoutModel = model<ILayoutDocument>("Layout", LayoutSchema);

export const StaticLayoutModel = LayoutModel.discriminator<
  IStaticLayoutDocument
>("StaticLayout", StaticLayoutSchema);

export const ResponsiveLayoutModel = LayoutModel.discriminator<
  IResponsiveLayoutDocument
>("ResponsiveLayout", ResponsiveLayoutSchema);
