import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageHeader({ title, description }: { title: string; description: string }) {
  return <><div className="breadcrumb"><Link to="/"><ArrowLeft size={12} /> Home</Link></div><div className="page-heading"><h1>{title}</h1><p>{description}</p></div></>;
}
