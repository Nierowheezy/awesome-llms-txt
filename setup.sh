#!/bin/bash
# setup.sh - One-command setup for awesome-llms-txt
# Run: ./setup.sh

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Setting up awesome-llms-txt...${NC}\n"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found. Please install Node.js v18+${NC}"
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version must be 18 or higher. Found: $(node -v)${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Node.js $(node -v) found${NC}"

# Install validator dependencies
echo -e "\n${BLUE}📦 Installing validator dependencies...${NC}"
cd validator
npm install --silent
cd ..
echo -e "${GREEN}✅ Dependencies installed${NC}"

# Test validator
echo -e "\n${BLUE}🧪 Testing validator on valid example...${NC}"
node validator/cli.js examples/valid-llms.txt
echo -e "${GREEN}✅ Validator test passed${NC}"

# Test validator on invalid example (should fail)
echo -e "\n${BLUE}🧪 Testing validator on invalid example (expected to fail)...${NC}"
if node validator/cli.js examples/invalid-llms.txt 2>/dev/null; then
    echo -e "${RED}❌ Validator incorrectly passed on invalid file${NC}"
    exit 1
else
    echo -e "${GREEN}✅ Validator correctly rejected invalid file${NC}"
fi

# Test registry checker
echo -e "\n${BLUE}🔍 Testing registry checker...${NC}"
node registry/check-sites.js
echo -e "${GREEN}✅ Registry checker test passed${NC}"

# Final summary
echo -e "\n${GREEN}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ Setup complete!${NC}"
echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}\n"

echo -e "${YELLOW}📋 Next steps:${NC}"
echo ""
echo "  1. Validate a local file:"
echo -e "     ${BLUE}node validator/cli.js examples/valid-llms.txt${NC}"
echo ""
echo "  2. Validate a live URL:"
echo -e "     ${BLUE}node validator/cli.js https://zod.dev/llms.txt${NC}"
echo ""
echo "  3. Check the registry:"
echo -e "     ${BLUE}cat registry/sites.json${NC}"
echo ""
echo "  4. Publish validator to npm (optional):"
echo -e "     ${BLUE}cd validator && npm publish${NC}"
echo ""
echo -e "${YELLOW}📚 Documentation: https://github.com/Nierowheezy/awesome-llms-txt${NC}\n"