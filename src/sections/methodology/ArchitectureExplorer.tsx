import gsap from 'gsap';
import architectureImg from '@/assets/image.png';

interface ArchitectureExplorerProps {
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function ArchitectureExplorer({ onMouseMove, onMouseLeave }: ArchitectureExplorerProps) {
  return (
    <div className="architecture-img-wrapper" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="architecture-img">
        <img src={architectureImg} alt="Architecture Tree" className="architecture-tree-asset" />
      </div>
      
      <div className="arch-callout callout-top">
        <div className="callout-label">SISTEMA ATIVO</div>
        <div className="callout-line-v"></div>
        <div className="callout-dot"></div>
      </div>

      <div className="arch-callout callout-right">
        <div className="callout-label">ALTA PERFORMANCE</div>
        <div className="callout-line-h"></div>
        <div className="callout-dot"></div>
      </div>

      <div className="arch-callout callout-bottom">
        <div className="callout-label">ARQUITETURA</div>
        <div className="callout-line-v-up"></div>
        <div className="callout-dot"></div>
      </div>
    </div>
  );
}
