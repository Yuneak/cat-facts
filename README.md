# HNG Profile API – /me Endpoint

This project is a simple **RESTful API** built with **Node.js** and **Express** for the HNG Internship.  
The API exposes a single endpoint `/me` which returns:
- Your profile information (email, name, stack)
- A dynamic random **cat fact** fetched from the [Cat Facts API](https://catfact.ninja/fact)
- The current **UTC timestamp** in ISO 8601 format

---

## Installation

Clone the repository and install dependencies with [npm](https://www.npmjs.com/):

```bash
git clone https://github.com/<your-username>/hng-profile-api.git
cd hng-profile-api
npm install

```

## Usage

Run the development server locally:
npm start

By Default, API will run at 
http://localhost:3000/me

```

```
## Example Request

curl http://localhost:3000/me

## Example Response
{
  "status": "success",
  "user": {
    "email": "ezerichardugo@gmail.com",
    "name": "Richard Eze",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}


# Dependencies


This project uses the following NPM packages:

express
 → Web server framework

axios
 → Fetch cat facts


Install them with:
``` bash
npm install express axios
```
## Environment Variables

This project does not require any environment variables to run.

Optional:

PORT → Port number for the server (default: 3000)

Example:
``` bash 
PORT=4000 node index.js
```
## Error Handling

If the Cat Facts API is down or times out:

A fallback message is returned for the fact field

The API still responds with 200 OK and "status": "success"

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)