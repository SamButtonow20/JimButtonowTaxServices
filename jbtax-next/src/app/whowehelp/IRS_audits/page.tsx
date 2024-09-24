"use client";

import { Fragment } from "react";

import { CmsPage } from "@/views/cms/components/CmsPage";

import "../../../styles/articles.css"; // Assuming styles are in this file

// const PreviousContent = () => {
//     return (
//         <Fragment>
//             <div className="hero-section">
//                 <div className="hero-title">
//                     <h1>Title of the Article</h1>
//                 </div>
//                 <div className="hero-image">
//                     <img src="/images/peru-scaled.jpeg" alt="Hero" />
//                 </div>
//             </div>

//             <div className="author-section">
//                 <img src="/images/madisonwhitfieldphotoshot.jpg" alt="Article Image" className="article-image" />
//                 <span className="author-name">Written by John Doe</span>
//             </div>

//             <div className="content-wrapper">
//                 <div className="article-content">
//                     <section id="section1">
//                         <h2>Section 1</h2>
//                         <p>Content for section 1...</p>
//                     </section>
//                     <section id="section2">
//                         <h2>Section 2</h2>
//                         <p>Content for section 2...</p>
//                     </section>
//                     <section id="section3">
//                         <h2>Section 3</h2>
//                         <p>Content for section 3...</p>
//                     </section>
//                 </div>

//                 <aside className="table-of-contents">
//                     <h3>Table of Contents</h3>
//                     <ul>
//                         <li>
//                             <a href="#section1">Section 1</a>
//                         </li>
//                         <li>
//                             <a href="#section2">Section 2</a>
//                         </li>
//                         <li>
//                             <a href="#section3">Section 3</a>
//                         </li>
//                     </ul>
//                 </aside>
//             </div>
//         </Fragment>
//     );
// };

export default function Page() {
    return (
        <Fragment>
            <CmsPage
                pageSlug="IRS_Audits"
                showHero={true}
                heroClassName="hero"
                containerClassName="container"
                containerStyle={{}}
            />
        </Fragment>
    );
}
