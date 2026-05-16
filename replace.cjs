const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = content.replace(/SmartSplit/g, 'IndiaBudgetPlanner');
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

const files = [
  'src/components/HomeContent.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/PrivacyPage.tsx',
  'src/pages/TermsPage.tsx',
  'src/pages/BlogListPage.tsx',
  'src/pages/CityGuidesPage.tsx',
  'src/data/posts.tsx'
];

files.forEach(f => replaceInFile(path.join(__dirname, f)));
