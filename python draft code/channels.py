# setup, imports, and API key
from apiclient.discovery import build

api_key = "AIzaSyAHUITXF9oo2Ed24HO1IrDRtYqNLv15_b8"
youtube = build('youtube', 'v3', developerKey = api_key)

# first retrieve channel ID of "username"
username = "Netflix"
index = 0 # really up to user on which channel to pick
channel = youtube.search().list(part = 'snippet', maxResults = 5, q = username, type = 'channel').execute()
currentId = channel['items'][index]['id']['channelId']

# use channel ID to get most recent video
res = youtube.search().list(part='snippet', channelId = currentId, maxResults = '5', order = 'date',
type = 'video').execute()
result = res['items'][0]['snippet']['title']
print(result)






