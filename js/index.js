
// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function () {
    // Scrolls to the selected menu item on the page
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            const target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
});

$(function () {
    add_block('postdoc');
    add_block('phd-students');
    add_block('ms-students');
    add_block('ra');
    add_block('undergraduates');
});

$(function () {
    const re_block = research['Research'].map(re => {
        return `<div class="col-md-4">
                    <div class="research-item">
                        <span class="fa-stack fa-5x">
                            <i class="fa ${re.fa} text-primary"></i>
                        </span>
                        <h3><strong>${re.name_zh}</strong></h3>
                        <h3><strong>${re.name_en}</strong></h3>
                    </div>
                </div>`;
    });

    $('div.research').append(re_block.join(''));
});

$(function () {
    const proj_blocks = projects.map(proj => {
        const label = proj.label ? `<div class="extra project content center aligned">
                                        <a href="${proj.label_link}" target="_blank">
                                            <div class="label project">${proj.label}</div>
                                        </a>
                                    </div>` : '';

        return `<div class="ui raised link card">
                    <div class="project content title">
                        <div class="header">${proj.title}</div>
                    </div>
                    <div class="blurring dimmable project image content">
                        <a class="ui dimmer" href="${proj.link}" target="_blank">
                            <div class="content">
                                <div class="center">
                                    <div class="ui primary button">Go to</div>
                                </div>
                            </div>
                        </a>
                        <img src="${proj.img}">
                    </div>
                    <div class="project content description text-justify">
                        <div class="description">
                            <p>${proj.descrip_zh}</p>
                            <p>${proj.descrip_en}</p>
                        </div>
                    </div>
                    ${label}
                </div>`
    });

    $('div.projects').append(`<div class="ui three doubling stackable special cards">${proj_blocks.join('')}</div>`);
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
});


function add_block(member_type) {
    blocks = members[member_type].map(member => {
        const name = escapeHtml(member.name);
        const alias = escapeHtml(member.alias);
        const img = escapeHtml(encodeURI(member.img));
        const research_area = escapeHtml(member.research);
        const link = (member.link) ? `href="${encodeURI(member.link)}" target="_blank"` : '';

        // return `<div class="ui fluid card ${member.color}">
        //             <div class="blurring dimmable image">
        //                 <a class="ui dimmer" ${link}>
        //                     <div class="content">
        //                         <div class="center">
        //                             <div class="ui">${member.intro}</div>
        //                         </div>
        //                     </div>
        //                 </a>
        //                 <img src="${img}">
        //             </div>

        //             <div class="content">
        //                 <div class="header">${name}</div>
        //                 <div class="meta"><span>${alias}</span></div>
        //                 <div class="description">${research_area}</div>
        //             </div>
        //         </div>` 
        return `<div class="test">
        <div class="col-md-2">
            <img class="people-img" alt="..." src="./${member.img}" >
        </div>
        <div class="col-md-10">
            <div>
                <h5>${name}</h5>
                <p>${alias}</p>
                <p>${member.intro}</p>
                <p class="people-interest">Interests: ${research_area}</p>
                <p><small class="text-muted">
                        <a class="people-ref"><i class="fa fa-calendar"></i> events&emsp;</a>
                        <a class="people-ref"><i class="fa fa-newspaper-o"></i> publications&emsp;</a>
                        <a class="people-ref"><i class="fa fa-search"></i> research</a>
                </small></p>
            </div>
        </div>
    </div>`
    });

    $('div.' + member_type).append(`<div class="ui four doubling stackable special member cards">${blocks.join('')}</div>`);
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
}
