
# Setup project locally
Demo : https://fundingpips.vercel.app/

- Make sure node version is 20 or greater
- `npm intstall`
- `npm run dev` to run in dev environment
- `npm run build `to generate production next build
- `npm run start` to serve production next build
- http://localhost:3000 watch list table
- Click on view button to check history of specific stock

# Setup Docker locally
- Install Docker , i choose brew to install docker
- Build Image `docker build -t nextjs-app .`
- Run Container `docker run -p 3000:3000 nextjs-app`
- http://localhost:3000 watch list table
- Click on view button to check history of specific stock

# Stack
- Next 15
- React 19
- Zustand (state management)
- Tailwind Css
- Next theme

# Features 
- Search for tickers
- Watch List
- View History of specific stock
- Data is persisted in Zustand State
- Responsive Design
- Mocked Data Used to get mock real time updates on watch list
- Used Next theme for dark/light mode

# My Approach 
- I searched for realtime stock APP's but most of them were paid and i wanted to keep it free so i used mocked data
- Working with Mock data is fast to deliver and easy to implement due to time constraint
- I used Zustand for state management as it is easy to use and less boilerplate code
- I keep folder structure simple and easy to understand
- I used both Client side and Server side data fetching to achieve performance and SEO
- History page is server side rendered with initial data to send to client
- Search implemented to add ticker to watch list and than we can see their history

# Trade-offs
- Mock data VS Real time data ==> Real time data is always better but due to time constraint i used mock data
- Polling VS Websockets ==> Polling is easy to implement but websockets are better for real time data
- Zustand VS Redux ==> Zustand is easy to use and less boilerplate code but Redux is better for large scale applications
- Server side rendering VS Client side rendering ==> Server side rendering is better for SEO and performance but client side rendering is fast to implement
- Tailwind CSS VS Styled Components ==> Tailwind is easy to use and fast to implement but styled components are better for large scale applications
- Docker VS Vercel ==> Docker is better for local development but vercel is better for deployment

# Features to Add in Future that is missed
- Pagination
- Sorting , Filtering
- Search for stocks on client side
- Real time data with Websockets
- Add more data to history page
- Testing
- Proper Design
- Add more features to watch list
- Authentication for watch list

# Impressive things which I have covered
- Docker File for easy deployment
- Cached history response for optimize rendering
- Used SSR (Server-Side Rendering) effectively
