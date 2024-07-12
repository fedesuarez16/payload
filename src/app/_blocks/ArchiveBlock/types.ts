export interface ArchiveBlockProps {
    relationTo: 'products';
    populateBy: 'collection' | 'selection';
    limit: number;
    populatedDocs: Array<{ relationTo: string; value: unknown }>;
    populatedDocsTotal: number;
    categories: string[];
    sort?: string;
  }
  
