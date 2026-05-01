interface EnergyConnectorProps {
  variant?: 'p-p' | 'p-s' | 's-p' | 's-s';
}

/**
 * EnergyConnector — Linha energética vertical que conecta seções.
 * Ativada pelo RevealEngine via IntersectionObserver.
 */
export function EnergyConnector({ variant = 'p-s' }: EnergyConnectorProps) {
  return (
    <div className={`energy-connector energy-connector--${variant}`} aria-hidden="true">
      <div className="energy-connector__line" />
      <div className="energy-connector__glow" />
      <div className="energy-connector__dot" />
    </div>
  );
}
