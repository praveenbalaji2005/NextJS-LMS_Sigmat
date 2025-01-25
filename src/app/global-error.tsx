"use client";
export default function GlobalError({

                                    }:{
    Error: Error & { digest?: string };

}){
    return(
        <html>
        <body>
        <h2>Global Error</h2>
        </body>
        </html>
    )
};