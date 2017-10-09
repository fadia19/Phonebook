import { Component } from '@angular/core';
import { NgModule , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public addName : any ;
  public addPhone : any ;
  public addEmail : any ;
  public searchName : any;
  public searchPhone : any;
  public contactsPerPage : any;
  public page : any;
  public listedContacts =[];
  public newContacts=[];
  public data : any;

  public start : boolean = true;
  public listing : boolean = false;
  public searching : boolean = false;
  public added : boolean = false;

  constructor(private formbuilder: FormBuilder){
}

public contacts =[{"name":"Yorke","phone":"20-908-5007","email":"yhargess0@moonfruit.com"},
{"name":"Lila","phone":"40-086-0452","email":"lalbrook1@wikia.com"},
{"name":"Audrey","phone":"17-818-2184","email":"adonisi2@yellowpages.com"},
{"name":"Hugues","phone":"65-735-8610","email":"hjustun3@npr.org"},
{"name":"Ophelie","phone":"67-241-9782","email":"ominor4@sfgate.com"},
{"name":"Hildagarde","phone":"35-742-8037","email":"hbrosh5@hexun.com"},
{"name":"Terencio","phone":"80-188-9159","email":"tdykes6@intel.com"},
{"name":"Kendre","phone":"52-054-2814","email":"kalday7@list-manage.com"},
{"name":"Marcie","phone":"76-138-0301","email":"mkik8@csmonitor.com"},
{"name":"Annalee","phone":"69-940-7598","email":"arushmere9@bbc.co.uk"},
{"name":"Cordey","phone":"97-323-1607","email":"clyddiatta@quantcast.com"},
{"name":"Jacqui","phone":"16-840-9673","email":"jbangiardb@upenn.edu"},
{"name":"Zeke","phone":"82-122-8569","email":"zlidsterc@newsvine.com"},
{"name":"Jasen","phone":"36-214-6879","email":"jderisleyd@vinaora.com"},
{"name":"Winne","phone":"66-876-3985","email":"wewene@mapy.cz"},
{"name":"Terry","phone":"39-259-5222","email":"tscrivenerf@cpanel.net"},
{"name":"Arlee","phone":"58-317-7477","email":"adudsong@multiply.com"},
{"name":"Kitty","phone":"63-930-0853","email":"kgiacobazzih@ucsd.edu"},
{"name":"Ashley","phone":"68-581-7186","email":"adelacroixi@google.it"},
{"name":"Lavinie","phone":"48-065-4778","email":"lcollissonj@ox.ac.uk"},
{"name":"Rickey","phone":"50-735-6716","email":"reglintonk@scientificamerican.com"},
{"name":"Kipper","phone":"63-113-2201","email":"ksevierl@histats.com"},
{"name":"Miguel","phone":"95-259-5686","email":"mbundym@deviantart.com"},
{"name":"Mabelle","phone":"33-290-8221","email":"mubsdelln@yahoo.co.jp"},
{"name":"Jere","phone":"22-441-9415","email":"jmullendero@vimeo.com"},
{"name":"Bernadette","phone":"31-837-8928","email":"bnieassp@spiegel.de"},
{"name":"Anette","phone":"15-551-5975","email":"amccoishq@nifty.com"},
{"name":"Esra","phone":"60-970-0558","email":"egrishinr@home.pl"},
{"name":"Cornela","phone":"33-257-2999","email":"crichards@narod.ru"},
{"name":"Raimondo","phone":"73-572-0698","email":"rcundet@nih.gov"},
{"name":"Ronica","phone":"10-431-1815","email":"rwhitebrooku@amazon.co.jp"},
{"name":"Conny","phone":"34-384-5628","email":"cmillionsv@paypal.com"},
{"name":"Alica","phone":"85-278-4014","email":"aheitzw@weebly.com"},
{"name":"Kellyann","phone":"27-593-0297","email":"kfrizzellx@dot.gov"},
{"name":"Julita","phone":"63-997-1113","email":"jhunnamy@zimbio.com"},
{"name":"Malinde","phone":"87-629-9929","email":"medmondsonz@scribd.com"},
{"name":"Shannan","phone":"07-528-8274","email":"srichardet10@state.tx.us"},
{"name":"Perry","phone":"80-812-0349","email":"pthickett11@networkadvertising.org"},
{"name":"Bobine","phone":"85-741-8817","email":"bfollet12@twitpic.com"},
{"name":"Mariska","phone":"78-864-9519","email":"mianilli13@businessinsider.com"},
{"name":"Amity","phone":"50-793-5003","email":"aalston14@list-manage.com"},
{"name":"Sonnie","phone":"29-081-1789","email":"sloxly15@photobucket.com"},
{"name":"Serge","phone":"70-368-2140","email":"ssebborn16@jigsy.com"},
{"name":"Lindsay","phone":"58-909-2389","email":"lbateman17@marriott.com"},
{"name":"Desmond","phone":"57-575-1039","email":"dkermon18@ucla.edu"},
{"name":"Stefan","phone":"87-919-6979","email":"shamon19@ucoz.ru"},
{"name":"Viva","phone":"41-736-8114","email":"vbonsall1a@boston.com"},
{"name":"Abbye","phone":"93-331-6123","email":"ajohantges1b@theglobeandmail.com"},
{"name":"Dehlia","phone":"12-343-9269","email":"daugustin1c@nyu.edu"},
{"name":"Benoit","phone":"11-078-1327","email":"bblaszczyk1d@accuweather.com"},
{"name":"Terrell","phone":"49-019-8704","email":"tsivior1e@liveinternet.ru"},
{"name":"Elladine","phone":"97-660-5123","email":"ecantu1f@rakuten.co.jp"},
{"name":"Roxy","phone":"75-660-4626","email":"rensten1g@photobucket.com"},
{"name":"Gratia","phone":"93-325-4823","email":"gwhittuck1h@npr.org"},
{"name":"Tilly","phone":"24-277-4285","email":"tellam1i@vistaprint.com"},
{"name":"Doyle","phone":"40-754-2907","email":"dverry1j@cafepress.com"},
{"name":"Alis","phone":"81-312-8417","email":"anoraway1k@google.ca"},
{"name":"Joelie","phone":"84-558-3556","email":"jredfield1l@macromedia.com"},
{"name":"Perry","phone":"97-243-6146","email":"pdumphry1m@state.gov"},
{"name":"Ottilie","phone":"04-809-2394","email":"ogrevatt1n@cdbaby.com"},
{"name":"Melitta","phone":"45-518-6267","email":"mcroot1o@altervista.org"},
{"name":"Blondie","phone":"86-191-2039","email":"bgaymar1p@ucla.edu"},
{"name":"Jasper","phone":"00-030-7191","email":"jasson1q@alexa.com"},
{"name":"Grete","phone":"76-846-0754","email":"gpinel1r@i2i.jp"},
{"name":"Mikol","phone":"69-447-3052","email":"mbengal1s@examiner.com"},
{"name":"Averil","phone":"95-943-5545","email":"aclaypool1t@latimes.com"},
{"name":"Judd","phone":"01-626-6734","email":"jsalter1u@imgur.com"},
{"name":"Henka","phone":"61-459-6060","email":"hvasiliu1v@pbs.org"},
{"name":"Sally","phone":"36-597-9319","email":"speris1w@a8.net"},
{"name":"Blair","phone":"84-650-3933","email":"bmaddern1x@bbc.co.uk"},
{"name":"Braden","phone":"18-753-5645","email":"btournie1y@dot.gov"},
{"name":"Kassia","phone":"46-312-9470","email":"kmosedale1z@imageshack.us"},
{"name":"Dalis","phone":"22-893-3064","email":"dbruntje20@feedburner.com"},
{"name":"Anthea","phone":"81-129-5619","email":"adeverock21@merriam-webster.com"},
{"name":"Cathrin","phone":"73-918-4896","email":"cenevold22@usatoday.com"},
{"name":"Alva","phone":"39-224-6874","email":"aegle23@imgur.com"},
{"name":"Carlota","phone":"42-755-9035","email":"ctolhurst24@exblog.jp"},
{"name":"Evangelia","phone":"75-776-4065","email":"esitch25@disqus.com"},
{"name":"Jennie","phone":"93-353-6488","email":"jwhisker26@amazonaws.com"},
{"name":"Phineas","phone":"77-049-8666","email":"papplewhite27@harvard.edu"},
{"name":"Gilles","phone":"62-548-5146","email":"gteasell28@virginia.edu"},
{"name":"Pyotr","phone":"76-876-9760","email":"ppostlethwaite29@e-recht24.de"},
{"name":"Thea","phone":"16-415-5232","email":"tsilcock2a@ycombinator.com"},
{"name":"Albrecht","phone":"93-416-1129","email":"abrettoner2b@studiopress.com"},
{"name":"Gay","phone":"59-192-6986","email":"gbaribal2c@exblog.jp"},
{"name":"Glenda","phone":"56-906-4310","email":"gweekes2d@bloglovin.com"},
{"name":"Dev","phone":"76-462-3225","email":"dlawtie2e@vistaprint.com"},
{"name":"Perceval","phone":"35-869-4771","email":"pbunny2f@hhs.gov"},
{"name":"Tobi","phone":"91-255-5085","email":"trosser2g@dot.gov"},
{"name":"Tova","phone":"70-499-6108","email":"theiden2h@bloglines.com"},
{"name":"Virgie","phone":"03-086-7841","email":"vkeir2i@desdev.cn"},
{"name":"Vivianna","phone":"33-807-1872","email":"vdegenhardt2j@ehow.com"},
{"name":"Ivar","phone":"78-026-0357","email":"itrayte2k@auda.org.au"},
{"name":"Pepito","phone":"89-719-1562","email":"pprozescky2l@cornell.edu"},
{"name":"Mattias","phone":"52-455-1548","email":"mchesser2m@oaic.gov.au"},
{"name":"Abba","phone":"18-686-5533","email":"alomasney2n@51.la"},
{"name":"Sonya","phone":"21-486-3926","email":"spibworth2o@nps.gov"},
{"name":"Kendal","phone":"81-725-7595","email":"krousby2p@networkadvertising.org"},
{"name":"Rori","phone":"45-592-0868","email":"rlevington2q@usatoday.com"},
{"name":"Carl","phone":"75-064-7079","email":"cmarsay2r@spiegel.de"},
{"name":"Laurella","phone":"52-361-0335","email":"lmacgiany2s@instagram.com"},
{"name":"Lanita","phone":"76-950-3906","email":"lcoldham2t@wix.com"},
{"name":"Brandie","phone":"51-637-6664","email":"bbowling2u@lycos.com"},
{"name":"Martie","phone":"51-841-7112","email":"mgiovannacci2v@wufoo.com"},
{"name":"Lyndy","phone":"28-060-9046","email":"lwinnett2w@hp.com"},
{"name":"Aleta","phone":"32-015-0455","email":"aodevey2x@sohu.com"},
{"name":"Roanne","phone":"26-977-4070","email":"rklesel2y@hugedomains.com"},
{"name":"Felicia","phone":"21-599-6849","email":"fhellmer2z@smugmug.com"},
{"name":"Lila","phone":"84-837-0153","email":"loherlihy30@tuttocitta.it"},
{"name":"Laverne","phone":"37-568-5079","email":"lwilkowski31@ameblo.jp"},
{"name":"Bent","phone":"62-134-5098","email":"bchapling32@craigslist.org"},
{"name":"Michail","phone":"04-641-5174","email":"mmaccauley33@wired.com"},
{"name":"Daffy","phone":"34-649-0307","email":"dsimony34@is.gd"},
{"name":"Janaye","phone":"96-223-9023","email":"jkingsnod35@gmpg.org"},
{"name":"Tobi","phone":"97-806-7762","email":"tlieb36@barnesandnoble.com"},
{"name":"Jocko","phone":"13-191-8119","email":"jsaffe37@livejournal.com"},
{"name":"Trula","phone":"40-617-7749","email":"thanhard38@studiopress.com"},
{"name":"Gonzalo","phone":"25-830-4608","email":"gshepland39@wsj.com"},
{"name":"Ferdinande","phone":"33-362-5994","email":"fsutor3a@paypal.com"},
{"name":"Glyn","phone":"33-042-2367","email":"gketcher3b@arstechnica.com"},
];

  ngOnInit(){
  }


  public addContact(){
    this.data = {name : this.addName , phone : this.addPhone , email: this.addEmail};
    this.newContacts = this.contacts;
    this.newContacts.push(this.data);
    this.start=false;
    this.added = true;
    console.log(this.newContacts);
  }

  public remove(contact){
    let x= this.contacts.indexOf(contact);
    console.log(x);
    this.contacts.splice(x ,1);
  }

  public search(){
    this.searching=true;
    this.start=false;
    console.log(this.searchName);
  }

  public list(){
    this.listedContacts = [];
    let start = (this.contactsPerPage*this.page);
    let stop = start+this.contactsPerPage;
    for(let i=start ; i<stop ; i++ ){
      this.listedContacts.push(this.contacts[i]);
    }
    this.start = false;
    this.listing=true;
    console.log(this.listedContacts);
  }

}
