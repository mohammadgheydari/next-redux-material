import Link from 'next/link'
import Fab from '@material-ui/core/Fab';

export default function Index() {
    return (
        <div className="container">
            <div className="row">
                <div className="col card">
                <h1>درباره ما</h1>
            <h2>PetID چیست؟</h2>
            <p>
                PetID شناسه الکترونیک حیوانات خانگی است.
                  به کمک این شناسه دسترسی به مشخصات حیوان، پرونده پزشکی و اطلاعات صاحب آن امکانپذیر می باشد.
                  این شناسه برای اولین بار در ایران به همت گروهی متشکل از متخصصین دامپزشکی و فناوری اطلاعات، راه اندازی شده است.
                </p>
                    </div> 
            </div>
        </div>
    )
}