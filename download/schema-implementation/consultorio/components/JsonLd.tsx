/**
 * JsonLd Component — Consultorio Urbanístico
 * 
 * Componente React para inyectar Schema.org JSON-LD en las páginas.
 * Se usa en cada layout/página según el tipo de schema necesario.
 * 
 * Uso: <JsonLd data={localBusinessSchema} />
 */
import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
