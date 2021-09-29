echo 'Move to source directoy and Update Project Version.'

# cd src && npm version minor

echo 'Build Webslate App'
# npm run build

echo "Add to Git and Commit for Release version: $PACKAGE_VERSION"
# cd .. && ga . && gcmsg $PACKAGE_VERSION

echo "Create Tag v.$PACKAGE_VERSION"
# git tag v.$PACKAGE_VERSION

# git push origin --tags