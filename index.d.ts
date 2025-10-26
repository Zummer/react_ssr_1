declare module '*.less' {
    interface IClassNames {
        [className: string]: string;
    }

  const classNames: IClassNames;
  export = classNames;
}

declare module '*.jpg';
declare module '*.webp';

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}