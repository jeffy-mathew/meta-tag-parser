# meta-tag-parser
POST api in Node.js to return all meta tags and open graph parameters in a given URL

Modify port parameter in config.json in the root folder to change the port to use

run ``` npm install ```

run ``` node app.js ``` to start the app.



Send a post request to 
http://hostName:portNo/get_meta_data


with body as
```
{
    "url" :  "https://sample_url_here"
} 
```
To fetch the metadata of the given url
