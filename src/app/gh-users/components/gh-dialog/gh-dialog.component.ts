import { Component, Input, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { GhRepos } from '../../models/gh-repos';
import { GhUser } from '../../models/ghUser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null

  repos: GhRepos[] | undefined;





  constructor(private ghService: GhApiService) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
        this.user = gUser
      }
    )
    this.ghService.getRepos(this.username).subscribe(
      (ghRepos) => {
        this.repos = ghRepos
      }
    )
  }

}
