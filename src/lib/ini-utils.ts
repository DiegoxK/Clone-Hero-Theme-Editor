/**
 * Parses a string in INI format into a nested object.
 * @param data The INI-formatted string.
 * @returns An object representing the INI data.
 */
export function parseINIString(
  data: string,
): Record<string, Record<string, string>> {
  const regex = {
    section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
    param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
    comment: /^\s*;.*$/,
  };

  const value: Record<string, Record<string, string>> = {};
  const lines = data.split(/[\r\n]+/);
  let currentSection: string | null = null;

  for (const line of lines) {
    if (regex.comment.test(line) || line.trim() === "") {
      continue;
    }

    const sectionMatch = regex.section.exec(line);
    if (sectionMatch?.[1]) {
      currentSection = sectionMatch[1];
      value[currentSection] = {};
      continue;
    }

    const paramMatch = regex.param.exec(line);

    if (currentSection && paramMatch?.[1] && paramMatch[2] !== undefined) {
      const key = paramMatch[1];
      const val = paramMatch[2];
      value[currentSection]![key] = val;
    }
  }
  return value;
}

/**
 * Converts a nested object into an INI-formatted string.
 * @param data The object to convert.
 * @returns A string in INI format.
 */
export function writeINIString(
  data: Record<string, Record<string, string>>,
): string {
  let iniString = "";
  for (const section in data) {
    if (Object.prototype.hasOwnProperty.call(data, section)) {
      iniString += `[${section}]\n`;
      const sectionData = data[section];
      for (const key in sectionData) {
        if (Object.prototype.hasOwnProperty.call(sectionData, key)) {
          iniString += `${key} = ${sectionData[key]}\n`;
        }
      }
      iniString += "\n";
    }
  }
  return iniString.trim();
}
