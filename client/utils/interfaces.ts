export interface MemberProps {
  name: string;
  gitHub_id: string;
  handles?: { [handle: string]: string }[];
  img_url: string;
  tagline: string;
}

export interface ProjectProps {
  name: string;
  description: string;
  src: string;
  tags:string[]
}

export interface InputProps {
  type: "text" | "textarea" | "select" | "email";
  id: string;
  label?: string;
  placeholder?: string;
  selectOptions?: {
    options: { value: string; name: string }[];
    optionClassName?: string;
  };
  description?: { content: string; class?:string};
  textareaOptions?: { rows?: number; cols?: number };
  onError?: boolean;
  wrapperClassName?: { default?: string; onError?: string };
  inputClassName?: { default?: string; onError?: string };
  labelClassName?: { default?: string; onError?: string };
}