const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const Layout = require('../components/layouts/article');

function renderMarkdownFiles() {
    const dataDir = path.join(__dirname, 'blog');
    const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.md'));

    files.forEach(file => {
        const filePath = path.join(dataDir, file);
        const markdown = fs.readFileSync(filePath, 'utf-8');
        const html = ejs.render(Layout, { content: markdown });
        const outputFilePath = path.join(__dirname, 'public', `${file}.html`);
        fs.writeFileSync(outputFilePath, html);
    });
}

renderMarkdownFiles();