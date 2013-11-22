Ascii Banner
============

> Create ASCII ART banners with ease!

```
            Marco Pegoraro <marco.pegoraro@gmail.com>
.______        ___      .__   __. .__   __.  _______ .______      
|   _  \      /   \     |  \ |  | |  \ |  | |   ____||   _  \     
|  |_)  |    /  ^  \    |   \|  | |   \|  | |  |__   |  |_)  |    
|   _  <    /  /_\  \   |  . `  | |  . `  | |   __|  |      /     
|  |_)  |  /  _____  \  |  |\   | |  |\   | |  |____ |  |\  \----.
|______/  /__/     \__\ |__| \__| |__| \__| |_______|| _| `._____|
                                                                  
                                                             0.0.1
```



## Simple Demos

```
var AsciiBanner = require('ascii-banner');	

// simple banner
AsciiBanner
.write('My Text')
.out();

// add color
AsciiBanner
.write('My Text')
.color('red')
.out();

// change font
AsciiBanner
.write('My Text')
.color('red')
.font('Thin')
.out();

// add app version number (aligned right)
AsciiBanner
.write('My Text')
.color('red')
.font('Thin')
.after('>v{{version}}', 'yellow')
.out();

// add app name before (centered)
AsciiBanner
.write('My Text')
.color('red')
.font('Thin')
.after('>v{{version}}', 'yellow')
.before('>[{{name}}<')
.out();
```

