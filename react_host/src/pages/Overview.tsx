import React from 'react';
import { RemoteAppWithErrorBoundary } from '../moduleFederation/modules';
import CardSection from '../components/CardSection';

const Overview: React.FC = () => {
   return (
      <>
         <CardSection />

         <div id="micro-frontend-container">
            <RemoteAppWithErrorBoundary />
         </div>
      </>
   );
};

export default Overview;
