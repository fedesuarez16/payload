export interface ArchiveBlockProps {
    introContent?: RichTextContent;
    relationTo: 'products'; // Cambia esto si puede ser otro valor
    populateBy: 'collection' | 'selection';
    limit: number;
    populatedDocs: Array<{ relationTo: string; value: unknown }>;
    populatedDocsTotal: number;
    categories: string[];
    sort?: string;
  }
  