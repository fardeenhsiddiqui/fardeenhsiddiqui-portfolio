#WELCOME TO FARDEEN H Siddiqui Portfolio

#Required Command For Project
1. Create React App (npx create-react-app fardeen-portfolio)
    When you getting that error 
       ( npm ERR! code ENOTFOUND
        npm ERR! syscall getaddrinfo
        npm ERR! errno ENOTFOUND
        npm ERR! network request to http://registry.npmmirror.com/create-react-app failed, reason: getaddrinfo ENOTFOUND your.proxy.server
        npm ERR! network This is a problem related to network connectivity.
        npm ERR! network In most cases you are behind a proxy or have bad network settings.
        npm ERR! network
        npm ERR! network If you are behind a proxy, please make sure that the
        npm ERR! network 'proxy' config is set properly.  See: 'npm help config' )
        
    --> then
        npm config rm proxy
        npm config rm https-proxy
        npm config set registry https://registry.npmjs.org/