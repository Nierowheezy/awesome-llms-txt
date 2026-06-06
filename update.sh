 #!/bin/bash
# update.sh - Update helper script
# Run: ./update.sh

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔄 Updating awesome-llms-txt...${NC}\n"

# Pull latest changes
echo -e "${BLUE}📥 Pulling latest from GitHub...${NC}"
git pull origin main

# Update dependencies
echo -e "\n${BLUE}📦 Updating validator dependencies...${NC}"
cd validator
npm update
cd ..

# Update registry
echo -e "\n${BLUE}🔍 Updating registry...${NC}"
node registry/check-sites.js

echo -e "\n${GREEN}✅ Update complete!${NC}"