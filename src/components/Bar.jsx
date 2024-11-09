import { useEffect } from "react";

const Bar = ({ lan, change }) => {

    useEffect(() => {
        const allSections = document.querySelectorAll('.section');
        const allNavLicks = document.querySelectorAll('.navLink');

        let sec_view = 'about_me';

        window.addEventListener('scroll', () => {
            allSections.forEach(section => {
                if (window.scrollY >= (section.offsetTop - section.clientHeight / 2)) {
                    sec_view = section.id;
                }
            })

            allNavLicks.forEach(link => {
                if (link.href.includes(sec_view)) {
                    document.querySelector('.sectionSelect').classList.remove('sectionSelect')
                    link.classList.add('sectionSelect')
                }
            })
        })
    }, []);

    const mode = () => {
        const html = document.querySelector('html');
        const back = document.querySelector('.containerColor')
        if (html.classList.contains('dark')) {
          if (back.classList.contains('timeNight')) {
            back.classList.remove('timeNight')
          }
          html.classList.remove('dark')
          back.classList.add('timeDay')
        } else {
          if (back.classList.contains('timeDay')) {
            back.classList.remove('timeDay')
          }
          html.classList.add('dark')
          back.classList.add('timeNight')
        }
      }

    return (
        <div className="fixed flex flex-row w-full justify-center font-sans z-50">
            <div className="size-fit m-3 p-3 bg-white dark:bg-black dark:bg-opacity-40 bg-opacity-40 rounded-full shadow-lg">
                <a id='sec01' href='#about_me' className='navLink sectionLink sectionSelect'>{lan.bar.sec01}</a>
                <a id='sec02' href='#skills' className='navLink sectionLink'>{lan.bar.sec02}</a>
                <a id='sec03' href='#projects' className='navLink sectionLink'>{lan.bar.sec03}</a>
                <a id='sec04' href='#education' className='navLink sectionLink'>{lan.bar.sec04}</a>
                <a id='sec05' href='#contact' className='navLink sectionLink'>{lan.bar.sec05}</a>
                <button className="darkButton" onClick={mode}>D</button>
                <button className={(lan.lang === 'en') ? 'langButtonEsp' : 'langButtonEng'} onClick={change}>L</button>
            </div>
        </div>
    )
}

export default Bar;