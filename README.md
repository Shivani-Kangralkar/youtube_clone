# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



<!-- xxx -->

<!-- 1) Used cache : While calling api for example "iphone" . when we type back to
iphon
ipho
iph
ip
i
every time an api is getting called when we are pressing key back . So to avoid that we are using store cache -->


<!-- search cache -->

<!-- 1)When we type into serachBar , items are getting stored in cache , so that next time it takes data from cache . It do not make an api call -->
<!-- 2)Also when we press back items . It does not make an api call -->
<!-- 3)
if(searchState[searchQuery]) {
<!-- if item is present in  stored cache than just return that item. ex : "iphone"
        setSuggestResult(searchState[searchQuery])
      }else {
          // if item is not present than make an api call
        searchApiCall();
      }-->

<!-- 4) -->
<!-- dispatch(
        cache({
          [searchQuery] : res.data[1],
        }
      )); -->
<!-- After making an api call if item is not present in stored cache. Dispatch the updated item into cache
<!-- ie: ["iphone"] : res.data[1] this is all suggested 10 results 


-->
 <!--web socket examples : trading apps(zeroda)  -->
 <!-- App Polling examples: email, live chat. Perticular interval is set to display live messages on screen . (example) Later after 10 messages , pops . 1 messages is deleted from top -->

