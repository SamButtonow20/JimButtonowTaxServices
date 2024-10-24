﻿import React from "react";

import DOMPurify from "dompurify";

import { Block, Item } from "../../types/dynamicPage";

export interface BlockProps {
    block?: Block;
    item?: Item;
}

export const HtmlBlock: React.FC<BlockProps> = ({ block, item }) => {
    const htmlContent = block?.body?.value ?? item?.body?.value ?? "No Content";

    return (
        <div className={`block html-block ${block?.slug?.value ?? ""}`} id={block?.slug?.value}>
            <div className="block-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }} />
        </div>
    );
};
