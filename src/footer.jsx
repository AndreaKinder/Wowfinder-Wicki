import '../css/estilos.css'

export default function LinkPage ({href, text}) {
    return(
        <footer>
            <p>© 2024 <a className='linkFooter' href="https://github.com/WowFinder">WowFinder</a> . All rights reserved.</p>
        </footer>
    );
}