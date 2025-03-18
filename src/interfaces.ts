import { IconType } from 'react-icons';
import { Game, Platform } from './types';

export interface GameCardProps {
  game: Game;
}

export interface PlatformIconListProps {
  platforms: Platform[];
}

export interface CriticScoreProps {
  score: number;
}

export interface EmptyStateProps {
  message?: string;
  imageSrc?: IconType;
  onRetry?: () => void;
}
