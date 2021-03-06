# Note: This script only works if Gmail "Less Secure App Access" is set to on
# https://myaccount.google.com/lesssecureapps

import get_recent_vids
import smtplib

def gen_message():
	message = 'Here are your weekly '+ get_recent_vids.inputUsername+' YouTube Notifications! You reported interest in '+ get_recent_vids.inputInterest + ', here are videos pertaining to that. You can always add new interests on the extension or the app!\n\n'

	for url in get_recent_vids.email_vids:
		message += '\n'
		message += url
		message += '\n'

	message += '\n\n' + 'See you next week!'
	return message

mail = smtplib.SMTP('smtp.gmail.com',587) #standard Google port
mail.ehlo() #
mail.starttls() #
mail.login('rohankms@gmail.com','censor')
mail.sendmail('rohankms@gmail.com','rohankms@gmail.com',gen_message()) #replace second email with whoever you want receiver to be
mail.close()









