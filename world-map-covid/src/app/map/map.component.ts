import { Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor() { }
  

  ngOnInit(): void {
  }

  getElement(pathElemId: string){
    let path = document.getElementById(pathElemId)
    return path?.getAttribute('d')
  }
  
  getElementButton(){
    console.log(this.getElement("BR-AC"))
  }

}
