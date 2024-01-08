#!/bin/bash

# Commands:
# chmod +x overwrite_repos.sh - run once to execute permissions
# ./overwrite_repos.sh

# Path to the JSON file containing repo configurations
CONFIG_DATA="site-config-data.json"

# Path to the siteConfig containing all the variables
CONFIG_FILE="siteConfig.js"

# List of repositories to overwrite
repos=(
    # Add more repositories as needed
    https://github.com/mattphelps/youtube-converter
https://github.com/mattphelps/dood-downloader
https://github.com/mattphelps/reddit-downloader
https://github.com/mattphelps/bilibili-downloader
https://github.com/mattphelps/mixcloud-downloader
https://github.com/mattphelps/dailymotion-downloader
https://github.com/mattphelps/vk-downloader
https://github.com/mattphelps/twitch-downloader
https://github.com/mattphelps/smule-downloader
https://github.com/mattphelps/bandcamp-downloader
https://github.com/mattphelps/tumblr-downloader
https://github.com/mattphelps/douyin-downloader
https://github.com/mattphelps/streamable-downloader
https://github.com/mattphelps/einthusan-downloader
https://github.com/mattphelps/imgur-downloader
https://github.com/mattphelps/bitchute-downloader
https://github.com/mattphelps/patreon-downloader
https://github.com/mattphelps/rumble-downloader
https://github.com/mattphelps/pixiv-downloader
https://github.com/mattphelps/hotstar-downloader
https://github.com/mattphelps/niconico-downloader
https://github.com/mattphelps/vlive-downloader
https://github.com/mattphelps/medal-downloader
https://github.com/mattphelps/newgrounds-downloader
https://github.com/mattphelps/tubitv-downloader
https://github.com/mattphelps/videa-downloader
https://github.com/mattphelps/soundgasm-downloader
https://github.com/mattphelps/iwara-downloader
https://github.com/mattphelps/weibo-downloader
https://github.com/mattphelps/myvidster-downloader
https://github.com/mattphelps/loom-downloader
https://github.com/mattphelps/okru-downloader
https://github.com/mattphelps/viki-downloader
https://github.com/mattphelps/scribd-downloader
https://github.com/mattphelps/123movies-downloader
https://github.com/mattphelps/soap2day-downloader
https://github.com/mattphelps/deezer-downloader
https://github.com/mattphelps/streamtape-downloader
https://github.com/mattphelps/fansly-downloader
https://github.com/mattphelps/hitomi-downloader
https://github.com/mattphelps/crunchyroll-downloader
https://github.com/mattphelps/keep2share-downloader
https://github.com/mattphelps/likee-downloader
https://github.com/mattphelps/flixtor-downloader
https://github.com/mattphelps/kwai-downloader
https://github.com/mattphelps/bunkr-downloader
https://github.com/mattphelps/deviantart-downloader
https://github.com/mattphelps/beatport-downloader
https://github.com/mattphelps/imdb-downloader
)

# Loop through each repository
for repo in "${repos[@]}"; do
    echo "Working on $repo..."

    # Update siteConfig using Python
    python3 -c "
import json

with open('$CONFIG_DATA', 'r') as f:
    data = json.load(f)

if '$repo' in data:
    with open('$CONFIG_FILE', 'w') as f:
        f.write('const siteConfig = {\n')
        for key, value in data['$repo'].items():
            if isinstance(value, str):
                f.write(f'  {key}: \"{value}\",\n')
            else:
                f.write(f'  {key}: {value},\n')
        f.write('};\n\nexport default siteConfig;')
else:
    print('Repo data not found in JSON!')
"

    # Commit the changes
    git add $CONFIG_FILE
    git commit -m "Updated siteConfig for $repo"

    # Add the remote repository
    git remote add temp_remote $repo

    # Push the local changes (including siteConfig update) to the remote repository
    git push -f temp_remote master

    # Remove the temporary remote
    git remote remove temp_remote

    echo "$repo updated successfully!"
done
