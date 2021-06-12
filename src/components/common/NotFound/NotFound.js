import React from 'react';
import Layout from '../Layout/Layout';
import { useHistory } from 'react-router-dom';

function NotFound() {
    const history = useHistory();
    return (
        <Layout>
            <div>
                <div className="center">
                <h1>404</h1>
                <h2>UH OH! You're lost.</h2>
                <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.
                </p>
                <button onClick={() => history.push('/')}> Go to homepage</button>
              </div>
            </div>
        </Layout>
    )
}

export default NotFound;
