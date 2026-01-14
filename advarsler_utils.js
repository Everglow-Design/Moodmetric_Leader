// Advarsler/flags logik og tærskelstyring
// Kan importeres i advarsler.html

export const DEFAULT_THRESHOLDS = {
    low: 3.5, // Rød
    medium: 5.5 // Gul
};

export function getRiskLevel(value, thresholds = DEFAULT_THRESHOLDS) {
    if (value < thresholds.low) return 'high'; // Rød
    if (value < thresholds.medium) return 'medium'; // Gul
    return 'low'; // Grøn
}

export function riskEmoji(level) {
    if (level === 'high') return '🔴';
    if (level === 'medium') return '🟡';
    return '🟢';
}
