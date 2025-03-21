
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundState: React.FC = () => {
  return (
    <div className="container-custom py-20">
      <h1 className="text-2xl font-medium mb-4">Case Study Not Found</h1>
      <p className="mb-6">The case study you're looking for could not be found.</p>
      <Button asChild>
        <Link to="/#case-studies">
          <ArrowLeft size={16} />
          Back to Case Studies
        </Link>
      </Button>
    </div>
  );
};

export default NotFoundState;
