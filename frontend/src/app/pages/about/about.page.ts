import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
    public data: any = [
        { title: 'Author', desc: 'Philip Mayer'},
        { title: 'Contact', desc: 'philip.mayer@shadowsith.de'},
        { title: 'Year', desc: '2020-2021'},
        { title: 'License ', desc: 'MIT', url: 'https://choosealicense.com/licenses/mit/'},
        { title: 'Source Code', desc: 'GitHub', url: 'https://github.com/Shadowsith/FishSocializer/'}
    ];

    constructor() { }

    ngOnInit() {
    }

}
