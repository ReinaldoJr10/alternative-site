let body = {
    render: async () => {
        let view =  /*html*/`
        <body>
            <div id="header_container"></div>
    
            <div id="page_container" class="container pageEntry" >
                <article> Loading....</article>
            </div>
    
             <div id="footer_container"></div>
        </body>`
        return view
    },
    after_render: async () => { }

}
export default body;