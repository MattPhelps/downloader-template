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
https://github.com/mattphelps/camwhores-downloader
https://github.com/mattphelps/pornhub-downloader
https://github.com/mattphelps/xhamster-downloader
https://github.com/mattphelps/spankbang-downloader
https://github.com/mattphelps/xvideos-downloader
https://github.com/mattphelps/xnxx-downloader
https://github.com/mattphelps/onlyfans-downloader
https://github.com/mattphelps/pornhub-converter
https://github.com/mattphelps/youporn-downloader
https://github.com/mattphelps/redgifs-downloader
https://github.com/mattphelps/thisvid-downloader
https://github.com/mattphelps/xfantazy-downloader
https://github.com/mattphelps/recurbate-downloader
https://github.com/mattphelps/eporner-downloader
https://github.com/mattphelps/txxx-downloader
https://github.com/mattphelps/thothub-downloader
https://github.com/mattphelps/pornez-downloader
https://github.com/mattphelps/daftsex-downloader
https://github.com/mattphelps/erome-downloader
https://github.com/mattphelps/pornzog-downloader
https://github.com/mattphelps/porntrex-downloader
https://github.com/mattphelps/peekvids-downloader
https://github.com/mattphelps/redtube-downloader
https://github.com/mattphelps/iporntv-downloader
https://github.com/mattphelps/beeg-downloader
https://github.com/mattphelps/nhentai-downloader
https://github.com/mattphelps/tnaflix-downloader
https://github.com/mattphelps/pornone-downloader
https://github.com/mattphelps/manyvids-downloader
https://github.com/mattphelps/vjav-downloader
https://github.com/mattphelps/javhd-downloader
https://github.com/mattphelps/hentaihaven-downloader
https://github.com/mattphelps/youjizz-downloader
https://github.com/mattphelps/thumbzilla-downloader
https://github.com/mattphelps/missav-downloader
https://github.com/mattphelps/rule34-downloader
https://github.com/mattphelps/okxxx-downloader
https://github.com/mattphelps/playvids-downloader
https://github.com/mattphelps/biqle-downloader
https://github.com/mattphelps/upornia-downloader
https://github.com/mattphelps/boyfriendtv-downloader
https://github.com/mattphelps/sxyprn-downloader
https://github.com/mattphelps/giphy-downloader
https://github.com/mattphelps/motherless-downloader
https://github.com/mattphelps/pornhits-downloader
https://github.com/mattphelps/youku-downloader
https://github.com/mattphelps/kuaishou-downloader
https://github.com/mattphelps/xozilla-downloader
https://github.com/mattphelps/porntn-downloader
https://github.com/mattphelps/hdzog-downloader

    # Add more repositories as needed
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
