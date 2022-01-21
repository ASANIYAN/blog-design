import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer mt-4 py-4">
            <div class="container-fluid">
                <div className="row">
                <div className="footer-texts d-flex">
                            <Link className='col-sm-12 col-md-1 mt-2'>Home</Link>
                            <Link className='col-sm-12 col-md-1 mt-2'>Learn Design</Link>
                            <Link className="active col-sm-12 col-md-1 mt-2">Blog</Link>
                            <Link className='col-sm-12 col-md-1 mt-2'>Playlist</Link>
                            <Link className='col-sm-12 col-md-1 mt-2'>Bookmarks</Link>
                            <Link className='col-sm-12 col-md-1 mt-2'>FAQ</Link>
                            <Link className='col-sm-12 col-md-1 mt-2'>Elements</Link>
                        </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;