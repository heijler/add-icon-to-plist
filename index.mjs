import fs from 'fs';
import path from 'path';
import plist from 'plist';

async function main() {

    const plistExtension = 'Contents/Info.plist';

    try {
        const pkgPath = process.argv[2];
        if (fs.existsSync(pkgPath) && fs.existsSync(path.resolve(pkgPath, plistExtension))) {
            let plistPath = path.resolve(pkgPath, 'Contents/Info.plist');
            let obj = plist.parse(fs.readFileSync(plistPath, 'utf8'));
            if (!obj.hasOwnProperty('CFBundleIconFile')) {
                obj.CFBundleIconFile = process.argv[3];
                let newPlist = plist.build(obj);
                fs.writeFileSync(plistPath, newPlist, {encoding: 'utf8'});
                console.log("Plist updated with provided icon");
            } else {
                console.log("The plist already contains the CFBundleIconFile key with value:", obj.CFBundleIconFile);
                return;
            }
        }
    } catch (err) {
        console.error(err.message);
        return;
    }
}
main();