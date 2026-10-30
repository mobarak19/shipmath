// Builds a PrivacyInfo.xcprivacy property list (XML plist).

export interface CollectedType {
  type: string; // suffix after NSPrivacyCollectedDataType, e.g. "CrashData"
  linked: boolean;
  tracking: boolean;
  purposes: string[]; // suffixes after NSPrivacyCollectedDataTypePurpose
}

export interface PrivacyManifest {
  tracking: boolean;
  domains: string[];
  collected: CollectedType[];
  apis: { key: string; reasons: string[] }[];
}

const xml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const bool = (b: boolean) => (b ? '<true/>' : '<false/>');

function strings(items: string[], indent: string): string {
  if (!items.length) return `${indent}<array/>`;
  return `${indent}<array>\n${items.map((s) => `${indent}\t<string>${xml(s)}</string>`).join('\n')}\n${indent}</array>`;
}

function dicts(items: string[][], indent: string): string {
  if (!items.length) return `${indent}<array/>`;
  return `${indent}<array>\n${items.map((lines) => `${indent}\t<dict>\n${lines.join('\n')}\n${indent}\t</dict>`).join('\n')}\n${indent}</array>`;
}

export function buildPrivacyManifest(m: PrivacyManifest): string {
  const t = '\t\t\t';
  const collected = m.collected.map((c) => [
    `${t}<key>NSPrivacyCollectedDataType</key>`,
    `${t}<string>NSPrivacyCollectedDataType${c.type}</string>`,
    `${t}<key>NSPrivacyCollectedDataTypeLinked</key>`,
    `${t}${bool(c.linked)}`,
    `${t}<key>NSPrivacyCollectedDataTypeTracking</key>`,
    `${t}${bool(c.tracking)}`,
    `${t}<key>NSPrivacyCollectedDataTypePurposes</key>`,
    strings(c.purposes.map((p) => `NSPrivacyCollectedDataTypePurpose${p}`), t),
  ]);
  const apis = m.apis.map((a) => [
    `${t}<key>NSPrivacyAccessedAPIType</key>`,
    `${t}<string>${a.key}</string>`,
    `${t}<key>NSPrivacyAccessedAPITypeReasons</key>`,
    strings(a.reasons, t),
  ]);
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
\t<key>NSPrivacyTracking</key>
\t${bool(m.tracking)}
\t<key>NSPrivacyTrackingDomains</key>
${strings(m.domains, '\t')}
\t<key>NSPrivacyCollectedDataTypes</key>
${dicts(collected, '\t')}
\t<key>NSPrivacyAccessedAPITypes</key>
${dicts(apis, '\t')}
</dict>
</plist>
`;
}
