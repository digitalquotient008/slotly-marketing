#!/bin/bash

# Script to push MeetVault Marketing website to GitHub
# Make sure you've created the repository at https://github.com/digitalquotient008/meetvault-marketing first

echo "🚀 Pushing MeetVault Marketing website to GitHub..."
echo ""

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote 'origin' already configured"
    git remote -v
else
    echo "📝 Adding remote 'origin'..."
    git remote add origin https://github.com/digitalquotient008/meetvault-marketing.git
fi

# Ensure we're on main branch
git branch -M main

# Push to GitHub
echo ""
echo "📤 Pushing code to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 View your repository at: https://github.com/digitalquotient008/meetvault-marketing"
else
    echo ""
    echo "❌ Push failed. Make sure:"
    echo "   1. Repository exists at https://github.com/digitalquotient008/meetvault-marketing"
    echo "   2. You have push access to the repository"
    echo "   3. You're authenticated with GitHub (check: git config --global user.name)"
fi
