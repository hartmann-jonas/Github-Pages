import{S as js,i as Bs,s as Ds,k as e,q as c,a as i,l as o,m as l,r as u,h as a,c as r,n as $,b as t,G as p,B as hs}from"./index-b0905f39.js";function Os(Ts){let k,g,F,h,ss,T,_,as,S,w,ns,A,y,ts,R,b,E,es,m,L,os,ps,q,ls,V,P,cs,j,I,is,B,U,us,D,x,rs,O,C,ks,Y,v,Ss=`<code class="language-ts"><span class="token comment">// Update the User table to have a relation to the Movie table</span>
model User <span class="token punctuation">&#123;</span>
    favourite_movies    Movie<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// create the Movie model to store the favourited movies</span>
<span class="token comment">// this model includes the id of the movie and the relation to the users</span>
model Movie <span class="token punctuation">&#123;</span>
    id    Int      <span class="token decorator"><span class="token at operator">@</span><span class="token function">id</span></span> @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">autoincrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">unique</span></span>
    favourited_by  User<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,G,M,fs,N,d,As=`<code class="language-ts"><span class="token comment">// when loading the movie page</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> load<span class="token operator">:</span> <span class="token function-variable function">PageServerLoad</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>params<span class="token punctuation">,</span>locals<span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> favourited <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token comment">// if a user is logged in query the database and check if the movie</span>
    <span class="token comment">// has a relation to the user</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>locals<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">const</span> movieId <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
        <span class="token keyword">const</span> userId <span class="token operator">=</span> locals<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id
        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> database<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">findUnique</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
            <span class="token comment">// go to currently logged in user</span>
            where<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
                id<span class="token operator">:</span> userId
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            select<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
                favourite_movies<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
                    where<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
                        id<span class="token operator">:</span> movieId
                    <span class="token punctuation">&#125;</span>
                <span class="token punctuation">&#125;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
        <span class="token comment">// if the user has that movie make favourited true</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token comment">// we do that by checking if the length of the results</span>
            <span class="token comment">// is greater 0</span>
            favourited <span class="token operator">=</span> result<span class="token punctuation">.</span>favourite_movies<span class="token punctuation">.</span>length<span class="token operator">></span><span class="token number">0</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>


<span class="token comment">// when hitting the save button</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> actions<span class="token operator">:</span> Action <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
    <span class="token function-variable function">saveMovie</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span> locals<span class="token punctuation">,</span> params <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// check if user is logged in - query database for the movie</span>
        <span class="token comment">// we can use connectOrCreate to connect or create the movie</span>
        <span class="token comment">// in the movie table and connect it to the user table</span>
        <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
        connectOrCreate<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            where<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
                id<span class="token operator">:</span> movieId
            <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
            create<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
                id<span class="token operator">:</span> movieId
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>
        <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
        <span class="token comment">// after that we are sure that the user is connected to the movie</span>
        <span class="token comment">// under all circumstances</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,z,J,K,Q,W,f,ms,X,H,vs;return{c(){k=e("h1"),g=c("Favourites"),F=i(),h=e("h2"),ss=c("Description"),T=i(),_=e("p"),as=c("Save the movies you want to watch for later. You can access them on your profile."),S=i(),w=e("h2"),ns=c("Changes"),A=i(),y=e("p"),ts=c("The following changes and implementations have been made in that version of the project:"),R=i(),b=e("ul"),E=e("li"),es=c("Added favourites to movies"),m=e("ul"),L=e("li"),os=c("Update Prisma schema to have favourited_by in the Movie table"),ps=i(),q=e("li"),ls=c("Each favourite is a User that gets connected to the favourited_by field of the movie. That way the website knows if you saved the movie and displays the button differently"),V=i(),P=e("h2"),cs=c("Features"),j=i(),I=e("p"),is=c("✅ Favourite movies ❤️"),B=i(),U=e("h2"),us=c("Code"),D=i(),x=e("p"),rs=c("In here some selected code will be explained more in depth."),O=i(),C=e("p"),ks=c("schema.prisma"),Y=i(),v=e("pre"),G=i(),M=e("p"),fs=c("movie/[id]/+page.server.ts"),N=i(),d=e("pre"),z=i(),J=e("hr"),K=i(),Q=e("br"),W=c(`
Commit: `),f=e("a"),ms=c("Version 0.1.2"),X=i(),H=e("p"),vs=c("Published: 2023-04-03"),this.h()},l(s){k=o(s,"H1",{});var n=l(k);g=u(n,"Favourites"),n.forEach(a),F=r(s),h=o(s,"H2",{});var _s=l(h);ss=u(_s,"Description"),_s.forEach(a),T=r(s),_=o(s,"P",{});var ws=l(_);as=u(ws,"Save the movies you want to watch for later. You can access them on your profile."),ws.forEach(a),S=r(s),w=o(s,"H2",{});var ys=l(w);ns=u(ys,"Changes"),ys.forEach(a),A=r(s),y=o(s,"P",{});var bs=l(y);ts=u(bs,"The following changes and implementations have been made in that version of the project:"),bs.forEach(a),R=r(s),b=o(s,"UL",{});var Es=l(b);E=o(Es,"LI",{});var ds=l(E);es=u(ds,"Added favourites to movies"),m=o(ds,"UL",{});var Z=l(m);L=o(Z,"LI",{});var Ps=l(L);os=u(Ps,"Update Prisma schema to have favourited_by in the Movie table"),Ps.forEach(a),ps=r(Z),q=o(Z,"LI",{});var Is=l(q);ls=u(Is,"Each favourite is a User that gets connected to the favourited_by field of the movie. That way the website knows if you saved the movie and displays the button differently"),Is.forEach(a),Z.forEach(a),ds.forEach(a),Es.forEach(a),V=r(s),P=o(s,"H2",{});var Us=l(P);cs=u(Us,"Features"),Us.forEach(a),j=r(s),I=o(s,"P",{});var xs=l(I);is=u(xs,"✅ Favourite movies ❤️"),xs.forEach(a),B=r(s),U=o(s,"H2",{});var Cs=l(U);us=u(Cs,"Code"),Cs.forEach(a),D=r(s),x=o(s,"P",{});var Ms=l(x);rs=u(Ms,"In here some selected code will be explained more in depth."),Ms.forEach(a),O=r(s),C=o(s,"P",{});var Hs=l(C);ks=u(Hs,"schema.prisma"),Hs.forEach(a),Y=r(s),v=o(s,"PRE",{class:!0});var Rs=l(v);Rs.forEach(a),G=r(s),M=o(s,"P",{});var Ls=l(M);fs=u(Ls,"movie/[id]/+page.server.ts"),Ls.forEach(a),N=r(s),d=o(s,"PRE",{class:!0});var Vs=l(d);Vs.forEach(a),z=r(s),J=o(s,"HR",{}),K=r(s),Q=o(s,"BR",{}),W=u(s,`
Commit: `),f=o(s,"A",{href:!0,target:!0});var qs=l(f);ms=u(qs,"Version 0.1.2"),qs.forEach(a),X=r(s),H=o(s,"P",{});var Fs=l(H);vs=u(Fs,"Published: 2023-04-03"),Fs.forEach(a),this.h()},h(){$(v,"class","language-ts"),$(d,"class","language-ts"),$(f,"href","https://github.com/hartmann-jonas/movie-db-two/commit/07fdee50f684c2a043ba4f1ba89fe64f684883d1"),$(f,"target","_blank")},m(s,n){t(s,k,n),p(k,g),t(s,F,n),t(s,h,n),p(h,ss),t(s,T,n),t(s,_,n),p(_,as),t(s,S,n),t(s,w,n),p(w,ns),t(s,A,n),t(s,y,n),p(y,ts),t(s,R,n),t(s,b,n),p(b,E),p(E,es),p(E,m),p(m,L),p(L,os),p(m,ps),p(m,q),p(q,ls),t(s,V,n),t(s,P,n),p(P,cs),t(s,j,n),t(s,I,n),p(I,is),t(s,B,n),t(s,U,n),p(U,us),t(s,D,n),t(s,x,n),p(x,rs),t(s,O,n),t(s,C,n),p(C,ks),t(s,Y,n),t(s,v,n),v.innerHTML=Ss,t(s,G,n),t(s,M,n),p(M,fs),t(s,N,n),t(s,d,n),d.innerHTML=As,t(s,z,n),t(s,J,n),t(s,K,n),t(s,Q,n),t(s,W,n),t(s,f,n),p(f,ms),t(s,X,n),t(s,H,n),p(H,vs)},p:hs,i:hs,o:hs,d(s){s&&a(k),s&&a(F),s&&a(h),s&&a(T),s&&a(_),s&&a(S),s&&a(w),s&&a(A),s&&a(y),s&&a(R),s&&a(b),s&&a(V),s&&a(P),s&&a(j),s&&a(I),s&&a(B),s&&a(U),s&&a(D),s&&a(x),s&&a(O),s&&a(C),s&&a(Y),s&&a(v),s&&a(G),s&&a(M),s&&a(N),s&&a(d),s&&a(z),s&&a(J),s&&a(K),s&&a(Q),s&&a(W),s&&a(f),s&&a(X),s&&a(H)}}}const Gs={title:"Version 0.1.2",date:"2023-04-03"};class Ns extends js{constructor(k){super(),Bs(this,k,null,Os,Ds,{})}}export{Ns as default,Gs as metadata};
