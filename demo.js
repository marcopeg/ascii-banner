var asciiBanner = require('./src/ascii-banner');


asciiBanner
.write('ASCII-BANNER')
.color('red')
.font('starwars')
.after('>v{{version}}', 'yellow').after(5)
.before(5).before('>[{{name}}]<')
.out();

