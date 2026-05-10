/**
 * Representa um estágio da metodologia de trabalho.
 */
export interface MethodStage {
  id: string;
  tab: string;
  title: string;
  description: string;
  bullet?: string;
  impact?: string;
  signature?: string;
}
