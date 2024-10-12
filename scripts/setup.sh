#!/usr/bin/env bash

function usage() {
    echo -e "Usage: $0 <repo-name>\n\n  repo-name: The name of the repository"
    exit 1
}

function check_dependencies() {
    command -v realpath > /dev/null || { echo "realpath is required. Please install it"; exit 1; }
    command -v sed > /dev/null || { echo "sed is required. Please install it"; exit 1; }
    command -v grep > /dev/null || { echo "grep is required. Please install it"; exit 1; }
    command -v find > /dev/null || { echo "find is required. Please install it"; exit 1; }
}

[[ $# -eq 0 ]] && usage

# Check dependencies
check_dependencies

# Handle repo name
SETUP_NAME="hacker_news"
REPO_NAME=${1}
[[ ! $REPO_NAME =~ ^[a-zA-Z-]+$ ]] && echo "Invalid repo name. Only letters and dashes are allowed" && exit 1
echo -e "Setting up the project with the repo name: ${REPO_NAME}\n"

# Get files
SCRIPTS_DIR=$(dirname $(realpath $0))
FILES=$(find ${SCRIPTS_DIR}/.. -type f -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/.next/*" -not -path "*/dist/*" -not -name "bun.lockb" -not -name "setup.sh" -exec realpath {} +)
[ -z "$FILES" ] && echo "No files found" && exit 1

 # Update files
for FILE in $FILES; do grep -q $SETUP_NAME $FILE && echo "Updating file: $FILE" && sed -i "s/$SETUP_NAME/$REPO_NAME/g" $FILE; done

# Clean up bun lockfile to avoid conflicts and install dependencies
echo -e "\nCleaning up bun lockfile and installing dependencies"
rm ${SCRIPTS_DIR}/../bun.lockb
bun install

echo -ne "\n\033[0;32mSetup complete\033[0m\n"