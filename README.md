# Facebook Quote

Using quote api to post daily facebook status

## How to use

```
git clone https://github.com/raabbajam/facebook-quote.git
cd facebook-quote
npm i
echo "FACEBOOK_TOKEN=YOUR_ACTIVE_ACCESS_TOKEN" > .env
node .
#write out current crontab
crontab -l > mycron
#echo new cron into cron file
#set daily job except on sunday
echo "30 15 * * 1-6 node `pwd`" >> mycron
#install new cron file
crontab mycron
rm mycron
```
