import { Component, OnInit } from '@angular/core';
import { Agent } from "src/app/model/agent.model";
import { AgentService} from 'src/app/service/agent.service';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {
  agents: Agent[];

  constructor(private agentService: AgentService) { }

  ngOnInit() {
    this.agentService.getAgents().subscribe(data =>{
      this.agents = data.map(e =>{
        return {
          aId:e.payload.doc.id,
          ...e.payload.doc.data()
        }as Agent;
      });
    });
  }

}
