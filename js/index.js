
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

$(function () {
  console.log('test');
  add_block('phd-students');
  add_block('ms-students');
  add_block('ra');
  add_block('undergraduates');
});

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
    var proj_block = '<div class="ui three doubling stackable special cards">';
    for( i in projects) {
        proj = projects[i];

        proj_block +=  '<div class="ui raised link card" href="http://www.dog.com">';
        proj_block +=  `<div class="project content title">
                          <div class="header">` + proj.title + `</div>
                        </div>`;
        proj_block +=  `<div class="blurring dimmable project image content">
                          <a class="ui  dimmer" href="` + proj.link + `" target="_blank">
                            <div class="content">
                              <div class="center">
                                <div class="ui primary button">Go to</div>
                              </div>
                            </div>
                          </a>
                          <img src="` + proj.img + `">
                        </div>`;
        proj_block +=  `<div class="project content description">
                          <div class="description">
                            <p>` + proj.descrip_zh + `</p>
                            <p>` + proj.descrip_en + `</p>
                          </div>
                        </div>`;
        if(proj.label) {
            proj_block +=  `<div class="extra project content center aligned">
                              <a href="` + proj.label_link + `" target="_blank">
                                <div class="label project">` + proj.label + `</div>
                              </a>
                            </div>`;
        }
        proj_block +=  '</div>';
    }
    proj_block +=  '</div>';
    // console.log(proj_block)
    $('div.projects').append(proj_block);
    $('.special.cards .image').dimmer({
      on: 'hover'
    });
});


function add_block(member_type) {
  console.log(member_type);
  var block = '<div class="ui four doubling stackable special cards">';
  for( i in members[member_type]) {
      member = members[member_type][i];
      name = escapeHtml(member.name);
      alias = escapeHtml(member.alias);
      img = escapeHtml(encodeURI(member.img));
      research_area = escapeHtml(member.research);
      color = escapeHtml(member.color);
      intro = escapeHtml(member.intro);
      link = (member.link) ? 'href="' + encodeURI(member.link) + '" target="_blank"': '';

      block +=  `<div class="ui fluid card ` + color + `">
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
                </div>`;
  }
  block +=  `</div>`;
  $('div.' + member_type).append(block);
  $('.special.cards .image').dimmer({
    on: 'hover'
  });
}
