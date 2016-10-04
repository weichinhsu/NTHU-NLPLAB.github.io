
$(function() {
    // Scrolls to the selected menu item on the page
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
            scrollTop: target.offset().top-50
            }, 1000);
            return false;
        }
        }
    });
});

function add_block(member_type) {
  console.log(member_type);
  var block = '';
  for( i in members[member_type]) {
      member = members[member_type][i];
      name = escapeHtml(member.name);
      alias = escapeHtml(member.alias);
      img = escapeHtml(encodeURI(member.img));
      research_area = escapeHtml(member.research);
      color = escapeHtml(member.color);
      intro = escapeHtml(member.intro);
      link = (member.link) ? 'href="' + encodeURI(member.link) + '" target="_blank"': '';

      block +=  `<div class="col-md-3">
                      <div class="ui special cards">
                        <div class="card ` + color + `">
                          <div class="blurring dimmable image">
                            <a class="ui dimmer" ` + link + `>
                              <div class="content">
                                <div class="center">
                                  <div class="ui">` + intro + `</div>
                                </div>
                              </div>
                            </a>
                            <img src="` + img + `">
                          </div>
                          <div class="content">
                            <div class="header">` + name + `</div>
                            <div class="meta"><span>` + alias + `</span></div>
                            <div class="description">` + research_area + `</div>
                          </div>
                        </div>
                      </div>
                    </div>`;
  }
  $('div.' + member_type).append(block);
  $('.special.cards .image').dimmer({
    on: 'hover'
  });
}

$(function () {
  console.log('test');
  add_block('phd-students');
  add_block('ms-students');
  add_block('ra');
  add_block('undergraduates');
});

// $(function() {
//     var phd_block = '';
//     for( i in members['PhD Students']) {
//         member = members['PhD Students'][i];
//         name = escapeHtml(member.name);
//         alias = escapeHtml(member.alias);
//         img = escapeHtml(encodeURI(member.img));
//         research_area = escapeHtml(member.research);
//         color = escapeHtml(member.color);
//         intro = escapeHtml(member.intro);
//         link = (member.link) ? 'href="' + encodeURI(member.link) + '" target="_blank"': '';
//         // <div class="image">
//         //   <img src="` + img + `">
//         // </div>
//         phd_block +=  `<div class="col-md-3">
//                         <div class="ui special cards">
//                           <div class="card ` + color + `">
//                             <div class="blurring dimmable image">
//                               <a class="ui dimmer" ` + link + `>
//                                 <div class="content">
//                                   <div class="center">
//                                     <div class="ui">` + intro + `</div>
//                                   </div>
//                                 </div>
//                               </a>
//                               <img src="` + img + `">
//                             </div>
//                             <div class="content">
//                               <div class="header">` + name + `</div>
//                               <div class="meta"><span>` + alias + `</span></div>
//                               <div class="description">` + research_area + `</div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>`;
//     }
//     // <div class="extra content">
//     //   <div><i class="users icon"></i>text</div>
//     // </div>
//     $('div.phd-students').append(phd_block);
//     $('.special.cards .image').dimmer({
//       on: 'hover'
//     });
//
// });
//
//
//
// $(function() {
//     var ms_block = '';
//     for( i in members['Master Students']) {
//         member = members['Master Students'][i];
//         name = escapeHtml(member.name);
//         alias = escapeHtml(member.alias);
//         img = escapeHtml(encodeURI(member.img));
//         research_area = escapeHtml(member.research);
//         color = escapeHtml(member.color);
//         intro = escapeHtml(member.intro);
//         link = (member.link) ? 'href="' + encodeURI(member.link) + '" target="_blank"': '';
//
//         ms_block += `<div class="col-md-3">
//                         <div class="ui special cards">
//                           <div class="card ` + color + `">
//                             <div class="blurring dimmable image">
//                               <a class="ui dimmer" ` + link + `>
//                                 <div class="content">
//                                   <div class="center">
//                                     <div class="ui">` + intro + `</div>
//                                   </div>
//                                 </div>
//                               </a>
//                               <img src="` + img + `">
//                             </div>
//                             <div class="content">
//                               <div class="header">` + name + `</div>
//                               <div class="meta"><span>` + alias + `</span></div>
//                               <div class="description">` + research_area + `</div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>`;
//     }
//     // console.log(ms_block);
//     // <div class="extra content">
//     //   <div><i class="users icon"></i>text</div>
//     // </div>
//     $('div.ms-students').append(ms_block);
//     $('.special.cards .image').dimmer({
//       on: 'hover'
//     });
// });
//
// $(function() {
//     var ra_block = '';
//     for( i in members['Research Assistant']) {
//         member = members['Research Assistant'][i];
//         ra_block += `<div class="col-md-3">
//                         <div class="ui special cards">
//                           <div class="card ` + member.color + `">
//                             <div class="image">
//                               <img src="` + member.img + `">
//                             </div>
//                             <div class="content">
//                               <div class="header">` + member.name + `</div>
//                               <div class="meta"><span>` + member.alias + `</span></div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>`;
//     }
//     console.log(ra_block);
//     // <div class="extra content">
//     //   <div><i class="users icon"></i>text</div>
//     // </div>
//     $('div.ra').append(ra_block);
//     $('.special.cards .image').dimmer({
//       on: 'hover'
//     });
// });

// $(function() {
//     var und_block = '';
//     for( i in members['Undergraduates']) {
//         member = members['Undergraduates'][i];
//         und_block +=  `<div class="col-md-3">
//         <div class="thumbnail flipbox und">
//             <div class="member-info front">
//                 <h3>` + member.name + `<br><small>` + member.alias + `</small></h3>
//                         <div class="caption">
//                           <p>` + member.research + `</p>
//                         </div>
//                  </div></div>
//                        </div>`;
//     }
//     $('div.undergrad > div:first-child').append(und_block);
// });

$(function() {
    var re_block = '';
    for( i in research['Research']) {
        re = research['Research'][i];

        re_block +=  `<div class="col-md-4">
            <div class="research-item">
                <span class="fa-stack fa-5x">
                  <i class="fa ` + re.fa + ` text-primary"></i>
                </span>
                <h3><strong>` + re.name_zh + `</strong></h3>
                <h3><strong>` + re.name_en + `</strong></h3>
                </div>
            </div>`;
        // console.log(re_block)
    }
    $('div.research').append(re_block);
});

$(function() {
    var proj_block = '';
    for( i in projects['Projects']) {
        proj = projects['Projects'][i];

        proj_block +=  `<div class="col-md-4">
            <div class="project-item">
                <a href="` + proj.link + `" target="_blank">
                  <img class="img-project img-responsive" src="` + proj.img + `">
                </a><br>
                <p>` + proj.descrip_zh + `</p>
                <p>` + proj.descrip_en + `</p>
                </div>
            </div>`;
    }
    // console.log(proj_block)
    $('div.projects').append(proj_block);
});
