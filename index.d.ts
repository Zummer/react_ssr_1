declare module '*.less' {
    interface IClassNames {
        [className: string]: string;
    }

  const classNames: IClassNames;
  export = classNames;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}