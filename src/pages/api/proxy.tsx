import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: 'Missing "url" parameter' });
    }

    const targetUrl = url as string;
    const controller = new AbortController();

    // Respond to the abort signal
    req.connection.addListener('close', () => controller.abort());

    const response:any = await fetch(targetUrl, { signal: controller.signal });
    
    // Forward headers and status code
    res.status(response.status);
    for (const [key, value] of response.headers.entries()) {
      res.setHeader(key, value);
    }

    // Stream the response body to the client
    await pipelineAsync(response.body, res);

  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
