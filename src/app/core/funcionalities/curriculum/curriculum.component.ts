import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../shared/models/skills.model';

@Component( {
  selector: 'ns-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: [ './curriculum.component.scss' ]
} )
export class CurriculumComponent implements OnInit {
  skillOrder = false;
  skillList: Skill[] = [
    { tech: "Angular V( 2 - 9 )", level: 8 },
    { tech: "Developer Tools", level: 8 },
    { tech: "Ionic 4", level: 7 },
    { tech: "Typescript / Javascript", level: 9 },
    { tech: "HTML5", level: 9 },
    { tech: "CSS3 / SASS / SCSS", level: 8 },
    { tech: "NGRX / Redux", level: 8 },
    { tech: "ReactiveX / Rxjs", level: 8 },
    { tech: "Git / Github, Gitlab, Bitbucket", level: 7 },
    { tech: "Svn", level: 6 },
    { tech: "Bootstrap", level: 8 },
    { tech: "Jquery", level: 7 },
    { tech: "Jasmine / Karma", level: 5 },
    { tech: "Reactive forms", level: 7 },
    { tech: "Jenkins", level: 1 },
    { tech: "Webpack", level: 5 },
    { tech: "Npm", level: 6 }
  ];

  constructor() {
    this.switchSortSkillListBy();
  }


  ngOnInit(): void {
  }

  switchSortSkillListBy( prop: 'tech' | 'level' = 'tech' ) {
    this.skillOrder = !this.skillOrder;
    this.skillList = this.skillList.sort( ( a, b ) => {
      return this.skillOrder === true
        ? ( a[prop] > b[prop] ) ? 1 : -1
        : ( a[prop] < b[prop] ) ? 1 : -1
    } )
  };

}
