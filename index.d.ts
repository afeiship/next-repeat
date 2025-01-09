type NxRepeatOptions = {
  joinChar?: string
}

interface NxStatic {
  repeat: (str: string, n: number, optionts?: NxRepeatOptions) => string;
}
