export default function createDefaultLogo(text: string) {
  // Function to generate a consistent color based on the company name
  const getColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Generate a hue between 0 and 360
    const hue = hash % 360;
    return `hsl(${hue}, 65%, 55%)`;
  };

  // Get first letters of each word
  const initials = text
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  const svgContent = `
    <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" fill="${getColor(text)}" rx="8" />
      <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">
        ${initials}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svgContent).toString(
    'base64'
  )}`;
}
