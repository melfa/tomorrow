Web page just show how many days counts from born date. Usage: <yourdomain>/tomorrow/1990-01-25

Named «tomorrow» because of Edge Of Tomorrow movie.

# Requirements

* nodejs 4.4.5

# Installation

```
sudo apt-get install nginx
sudo apt-get install supervisor
npm install
sudo ln -s /home/melfa/tomorrow/environment/nginx.conf /etc/nginx/sites-enabled/tomorrow
sudo ln -s /home/melfa/tomorrow/environment/supervisor.conf /etc/supervisor/conf.d/tomorrow.conf
sudo restart supervisor
sudo restart nginx
```
