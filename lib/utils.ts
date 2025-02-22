import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { js_beautify } from "js-beautify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateCode = () => {
  let code = "";
  const length = 8;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);

    code += characters.charAt(index);
  }

  return code;
};

export const formatJSXCode = (code: string) => {
  return js_beautify(code, {
    indent_size: 2,
    indent_char: " ",
    max_preserve_newlines: 2,
    preserve_newlines: true,
    keep_array_indentation: false,
    break_chained_methods: false,
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: false,
    wrap_line_length: 0,
    comma_first: false,
    e4x: true,
    indent_empty_lines: false,
  });
};
