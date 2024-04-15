This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**VUPICO SDP V2**
VUPICO SDP enables organizations to execute their sustainable business strategy based on data and insights to drive sustainable transformation. We do this by providing a sustainability data platform that enables businesses to enrich, manage, and govern data, building a framework for efficient sustainability data models to support:

**Development**
Prerequisites:

- Node.js (version 20 or above)
- Node Package Manager (NPM)

**Getting Started:**

1. Add .env in the root folder of the project (Get the env contents on developers)
2. Install dependencies: npm install
3. Start the development server: npm run dev

**Deployment**
Building the Docker Image:

```bash
docker build -t vupico-frontend .
```

Creating Docker container with selected environment variable

```bash
docker run -d -p 3000:3000 --name vupico-frontend-dev --env-file .env.production vupico-frontend
```

Doing this will enable us to create only 1 image of the application and use that image to promote it to multiple environments without us building a new one for each environments.

During your deployment pipeline, use the --env-file flag with docker run to inject the appropriate file's variables into the container.
Example above (Deployment to dev):

**Environment Variables**
The project uses environment variables for configuration across different environments (development, staging, production).

**Server-Side Environment Variables:** Accessed directly using process.env.[VARIABLE_NAME] within server-side code. These are kept confidential.

**Client-Side Environment Variables:** For client-side needs, fetch environment variables from the /api/env endpoint (see section below).

Exposing Environment Variables to the Client
The API route /api/env allows fetching environment variables on the client-side. **Use with caution, as this exposes variables in the browser's network tab.**

**Option 1: Use of useVariableHook()**

```bash
const { getEnvironmentVariables } = useVariableHook();
useEffect(() => {
    const asyncFunction = async () => {
      const data = await getEnvironmentVariables('NEXT_API_BASE_URL');
    };
    asyncFunction();
  }, []);
```

**Option 2: Using Fetch**

```bash
fetch('/api/env?keys=APP_ENVIRONMENT,API_BASE_URL')
  .then(response => response.json())
  .then(data => console.log(data));
```

**IMPORTANT: Use this method only for non-confidential environment variables.**

Additional Notes
[Consider using a secrets manager for sensitive production credentials.]
[Explore Next.js's build-time environment variables with the NEXT_PUBLIC_ prefix if applicable.]
