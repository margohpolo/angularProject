import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.css']
})
export class SearchPostsComponent implements OnInit {

  public searchPosts:any = '';
  public query:any = '';

  allPosts = [
    {
      id: 1,
      title:'Article 1',
      heading:'Lorem Ipsum is simply dummy',
      description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book.`
    },    
    {
      id: 2,
      title:'Article 2',
      heading:'Lorem ipsum dolor sit amet',
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh quam, semper nec magna id, lobortis volutpat nibh. 
      Nam laoreet vel ipsum nec consectetur. Etiam pellentesque, risus non blandit aliquet, magna est rhoncus elit, nec rhoncus purus nisl at velit. 
      Phasellus non rutrum arcu. Nam ut lobortis quam, at consequat arcu. Nam maximus lobortis mollis. Quisque euismod, augue et dignissim elementum, 
      massa ligula mattis massa, sed eleifend enim purus eget purus. Praesent metus enim, feugiat sed mauris ullamcorper, pharetra imperdiet neque. 
      Praesent consequat, diam vitae mattis sodales, urna nunc scelerisque ligula, quis gravida urna risus quis leo. Maecenas sollicitudin ut justo vitae tempor. 
      Vestibulum consectetur luctus viverra. Suspendisse sit amet interdum urna. Etiam at ligula ut urna gravida efficitur. 
      Suspendisse ac arcu vulputate, porttitor felis vitae, rutrum velit. Fusce in facilisis nisl. Donec feugiat in eros at rutrum.`
    },
    
    {
      id: 3,
      title:'Article 3',
      heading:'Praesent nec lacus a eros fermentum',
      description:`Praesent nec lacus a eros fermentum sollicitudin sit amet sed leo. Nulla elementum placerat pulvinar. Praesent sodales a arcu eu congue. 
      Vestibulum justo quam, tempor vitae finibus ac, pharetra vel mauris. Morbi varius dolor ex, eu bibendum dui lobortis quis. 
      Nullam nisl nisl, condimentum eget justo at, sagittis mollis nisi. Sed commodo, nunc vel convallis egestas, justo enim molestie felis, tincidunt convallis felis nunc et eros. 
      Cras nisi elit, fermentum aliquam finibus vitae, viverra sit amet justo. Fusce placerat tristique maximus. Aenean consectetur interdum dui at elementum. 
      Praesent feugiat rhoncus tellus vitae elementum. Aenean mi tellus, eleifend quis bibendum vel, aliquet quis nunc. 
      Nullam tincidunt magna viverra lectus suscipit, eu pulvinar massa fermentum. Ut ante tortor, molestie et mollis quis, commodo ut est.`
    },    
    {
      id: 4,
      title:'Article 4',
      heading:'Vivamus cursus molestie leo',
      description:`Vivamus cursus molestie leo, eu vestibulum nisl congue sit amet. In nulla elit, auctor nec ex id, pretium feugiat justo. 
      Vivamus a erat elementum, pretium quam vitae, auctor massa. Suspendisse porttitor faucibus erat, id tincidunt lectus convallis vel. 
      Donec vel dui eget lectus accumsan facilisis non et nunc. Curabitur tincidunt orci et dui tristique, ut vestibulum metus ornare. 
      Maecenas fermentum quam nec orci imperdiet tincidunt. Mauris pellentesque quis ligula sit amet vehicula. Mauris faucibus auctor fermentum. 
      Vestibulum tempor mauris lobortis, scelerisque erat quis, finibus lectus. Vivamus pharetra cursus nisl. 
      Nullam porta, nisl vitae rutrum pulvinar, lacus metus maximus nibh, nec consectetur augue velit in sapien. 
      Vivamus nisl magna, tincidunt eu pretium sit amet, convallis id massa. Vivamus quis nisi in tellus finibus commodo at sed dolor. 
      Maecenas vel nisl urna.`
    },    
    {
      id: 5,
      title:'Article 5',
      heading:'Proin in consectetur justo',
      description:`Proin in consectetur justo. In commodo in orci vitae auctor. Maecenas ullamcorper ac nisl id lobortis. 
      Maecenas commodo id nisl quis lacinia. Fusce tempus ante sit amet congue scelerisque. Nunc ac leo vitae justo blandit pharetra eget id est. 
      Maecenas lacus risus, egestas a viverra eu, finibus pellentesque lorem. Etiam at velit non velit sodales tempus. 
      Interdum et malesuada fames ac ante ipsum primis in faucibus.`
    },
    {
      id: 6,
      title:'Article 6',
      heading:'Fusce leo felis',
      description:`Fusce leo felis, bibendum id rhoncus eu, suscipit tincidunt nisl. Aenean interdum dignissim condimentum. Mauris pretium nisl in gravida faucibus. 
      Pellentesque condimentum, odio nec consequat eleifend, neque augue faucibus quam, convallis commodo nulla urna scelerisque libero. 
      Duis dictum fermentum turpis nec dignissim. Nullam ultricies et ipsum quis auctor. 
      Nulla suscipit, elit ac fringilla condimentum, eros erat scelerisque dolor, sed vestibulum mi mauris nec nulla. Nullam facilisis magna non lectus pretium venenatis. 
      Aliquam quis facilisis nunc, eget euismod leo. Duis consectetur varius commodo.`
    },
    {
      id: 7,
      title:'Article 7',
      heading:'Lorem ipsum dolor sit amet',
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida porttitor libero ut hendrerit. Vestibulum at suscipit urna. 
      Sed sodales luctus erat vitae pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat justo id ex maximus, at condimentum arcu tempus. 
      Suspendisse nec neque in erat suscipit laoreet a a lacus. Aliquam vehicula interdum nunc molestie eleifend. Cras tristique non odio vitae tincidunt. 
      Curabitur euismod tortor a molestie ultricies. Sed at arcu leo.`
    },
    {
      id: 8,
      title:'Article 8',
      heading:'Nam sem ipsum',
      description:`Nam sem ipsum, venenatis id fringilla vel, cursus et justo. Phasellus ultrices erat nisl, eu finibus ligula ultricies sit amet. 
      Nulla consequat scelerisque ante ac interdum. Fusce imperdiet pulvinar euismod. Mauris sed diam placerat lorem vestibulum semper. 
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ullamcorper magna a eros sodales, sed auctor magna rutrum. 
      Nulla tempor fringilla mauris. Suspendisse efficitur eleifend ligula, eu ultricies orci gravida a. Ut nec nibh nec urna euismod fermentum. 
      Sed sapien ligula, volutpat in urna in, bibendum dignissim velit. Donec pretium ante eu porta molestie. 
      Vestibulum sagittis leo orci, vitae ultrices elit euismod vitae. Suspendisse vitae dapibus felis.`
    },
    {
      id: 9,
      title:'Article 9',
      heading:'Proin posuere tortor at justo eleifend consequat',
      description:`Proin posuere tortor at justo eleifend consequat. Fusce vel leo turpis. Donec eu lacus tempus, congue lacus eu, mattis ligula. 
      Nullam iaculis at est quis hendrerit. Nullam vehicula, enim quis congue fringilla, sem metus maximus odio, ac pellentesque erat purus at purus. 
      Mauris commodo sit amet tellus eget imperdiet. Ut eget leo eu urna ullamcorper viverra ac vel justo. Aliquam et nisi vitae nulla euismod laoreet quis a nisl. 
      Nulla arcu lectus, ultrices et tincidunt in, elementum semper diam. Vestibulum accumsan augue sodales tortor imperdiet maximus. Suspendisse potenti.`
    },
    {
      id: 10,
      title:'Article 10',
      heading:'Class aptent taciti sociosqu ad litora torquent per conubia nostra',
      description:`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent dui sapien, mollis eu consectetur ac, 
      sagittis ac mi. Sed laoreet felis non porta hendrerit. Integer euismod blandit nibh vel mollis. Quisque rhoncus massa vitae facilisis tincidunt. 
      Nulla vel dignissim quam, vel aliquet felis. Donec mattis, tellus in commodo vestibulum, nulla risus eleifend ante, eu sollicitudin eros turpis ac est. 
      Nullam cursus mollis purus non efficitur. Integer tempus tempor arcu ullamcorper gravida. Ut euismod, mauris a dapibus tempus, dui quam congue magna, 
      vitae tempor tortor orci at ante.`
    },
    {
      id: 11,
      title:'Article 11',
      heading:'Suspendisse pretium massa eget magna feugiat',
      description:`Suspendisse pretium massa eget magna feugiat, nec vehicula tortor aliquam. Suspendisse sit amet purus a nisl fermentum ultrices a non nunc. 
      In et lectus sit amet nulla aliquam dignissim. Nullam porttitor consectetur urna et commodo. Morbi ante velit, rutrum luctus pellentesque quis, rutrum et sapien. 
      In hac habitasse platea dictumst. Nulla ut feugiat diam. Fusce hendrerit odio venenatis, volutpat libero at, elementum augue. 
      Aenean eget libero pellentesque, aliquam nulla quis, pretium sem. Integer non euismod odio. Vestibulum felis sapien, efficitur ut ultricies ac, 
      tincidunt varius neque. Vestibulum mattis libero at orci convallis interdum.`
    },
    {
      id: 12,
      title:'Article 12',
      heading:'Integer non ligula ac justo placerat sollicitudin quis et diam',
      description:`Integer non ligula ac justo placerat sollicitudin quis et diam. Integer non ligula ullamcorper, dictum neque sed, elementum magna. 
      Morbi pulvinar eros sed placerat fermentum. Curabitur neque elit, luctus a pharetra sollicitudin, imperdiet vitae lorem. Integer porttitor dictum volutpat. 
      Nunc viverra dolor a ante commodo auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
      Vivamus vel dui faucibus, porttitor risus hendrerit, semper nibh. In euismod orci eu felis congue congue. Duis condimentum nibh iaculis purus sollicitudin, 
      a volutpat lorem eleifend. Cras rhoncus bibendum dolor, ac auctor nulla egestas non. Etiam in fringilla lectus, quis euismod nisi. 
      Duis convallis et ex sagittis ornare. Sed non magna metus. Phasellus molestie fringilla commodo. Sed porttitor fringilla urna vel commodo.`
    }
    ];

  constructor() { }

  ngOnInit() {
  }

}
