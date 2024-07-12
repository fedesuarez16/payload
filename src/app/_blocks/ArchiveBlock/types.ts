/* eslint-disable */

export interface ArchiveBlockProps {
    introContent?: RichTextContent;
    relationTo: 'products';
    populateBy: 'collection' | 'selection';
    limit: number;
    populatedDocs: Array<{ relationTo: string; value: unknown }>;
    populatedDocsTotal: number;
    categories: string[];
    sort?: string;
  }
  
  // Define el tipo RichTextContent si no está definido en otra parte
  export type RichTextContent = string; // Cambia esto según la estructura real de RichTextContent
  
  
