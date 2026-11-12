import { useEffect } from 'react';
import { profile } from '../data/profile';

const SUFFIX = `${profile.name} · ${profile.title}`;

// Updates the document title and description for client-side navigation.
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} · ${profile.name}` : `${SUFFIX} · Java & Spring Boot`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
  return null;
}
