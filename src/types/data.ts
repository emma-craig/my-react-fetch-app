export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    title: string;
    description: string;
    user: number;
    alt: string;
    avg_color: string;
    liked:boolean;
    photograper: string;
    photographer_id: number;
    photographer_url: string;
  }

export interface responseType {
    per_page: number;
    page: string;
    next_page: string;
    photos: Photo[];
    total_results: number;
}