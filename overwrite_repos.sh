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
    https://github.com/mattphelps/spotify-downloader
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
