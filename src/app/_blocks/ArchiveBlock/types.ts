export interface ArchiveBlockProps {
    introContent?: any;
    relationTo: string;
    populateBy: 'collection' | 'selection';
    limit: number;
    populatedDocs: any[];
    populatedDocsTotal: number;
    categories: string[];
    sort?: string; // Añadir esta línea
  }
  