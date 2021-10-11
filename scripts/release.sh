echo 'Move to source directoy and do minor Release.'
# cd src && npm version minor

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo 'Build Webslate App'
# npm run build

echo "Add to Git and Commit for Release version: $PACKAGE_VERSION"
# cd .. && git add . && git commit -m "Release $PACKAGE_VERSION"

cd ..

# echo "Create Tag v.$PACKAGE_VERSION"
git tag v.$PACKAGE_VERSION

git push origin --tags