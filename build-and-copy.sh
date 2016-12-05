jekyll build; 
echo 'finished building';
cp ~/projects/slam-alphas-proto/_site/css/main.css /Applications/MAMP/htdocs/wordpress/wp-content/themes/slamalphas/css/main.css
cp ~/projects/slam-alphas-proto/_site/js/main.js /Applications/MAMP/htdocs/wordpress/wp-content/themes/slamalphas/js/main.js
echo 'finished coyiing';
echo 'starting upload';
scp -r /Applications/MAMP/htdocs/wordpress/wp-content/themes/slamalphas/ alphas@shaula.uberspace.de:~/html/wp-content/themes/slamalphas;
echo 'finished upload';
