export const FilteringCode = () => {
  return (
    <div>
      <div className="image-filler"></div>
      <div className="pre project-image">
        &lt;<span className="pre-blue">div</span>{" "}
        <span className="pre-light-blue">className</span>=
        <span className="pre-coral">"dashboard-body-container"</span>&gt;
        <br />
        &emsp; &emsp; <span className="pre-blue">&#123;</span>
        <span className="pre-coral">" "</span>
        <span className="pre-blue">&#125;</span>
        <br />
        &emsp; &emsp; &lt;<span className="pre-light-blue">h2</span>&gt;
        <span className="pre-white">All messages</span>
        &lt;/<span className="pre-light-blue">h2</span>&gt;
        <br />
        &emsp; &emsp; &#123;<span className="pre-blue">messages</span>
        <br />
        &emsp; &emsp; &emsp; &emsp;.<span className="pre-yellow">filter</span>
        <span className="pre-amber">&#40;</span>
        <span className="pre-purple">&#40;</span>
        <span className="pre-light-blue">message</span>
        <span className="pre-purple">&#41;</span>{" "}
        <span className="pre-blue">=&gt;</span>{" "}
        <span className="pre-purple">&#123;</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp;{" "}
        <span className="pre-purple">return</span>{" "}
        <span className="pre-blue">search</span>.
        <span className="pre-yellow">toLocaleLowerCase</span>
        <span className="pre-blue">&#40;&#41;</span>.
        <span className="pre-yellow">trim</span>
        <span className="pre-blue">&#40;&#41;</span>{" "}
        <span className="pre-white">===</span>{" "}
        <span className="pre-coral">""</span>
        <br /> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ?{" "}
        <span className="pre-light-blue">message</span> &emsp;
        <br /> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; :
        <span className="pre-light-blue"> message.content</span>.
        <span className="pre-yellow">toLocaleLowerCase</span>
        <span className="pre-blue">&#40;&#41;</span>.
        <span className="pre-yellow">includes</span>
        <span className="pre-blue">&#40;search&#41;</span>{" "}
        <span className="pre-white">||</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <span className="pre-light-blue">message.name</span>.
        <span className="pre-yellow">toLocaleLowerCase</span>
        <span className="pre-blue">&#40;&#41;</span>.
        <span className="pre-yellow">includes</span>
        <span className="pre-blue">&#40;search&#41;</span>;
        <br />
        &emsp; &emsp; &emsp; &emsp; <span className="pre-purple">&#125;</span>
        <span className="pre-amber">&#41;</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; .<span className="pre-yellow">map</span>
        <span className="pre-amber">&#40;</span>
        <span className="pre-purple">&#40;</span>
        <span className="pre-light-blue">message</span>
        <span className="pre-purple">&#41;</span>{" "}
        <span className="pre-blue">=&gt;</span>{" "}
        <span className="pre-purple">&#123;</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp;{" "}
        <span className="pre-purple">return</span>{" "}
        <span className="pre-blue">&#40;</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &lt;{" "}
        <span className="pre-cyan">DashboardArticle</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{" "}
        <span className="pre-light-blue">key</span>=
        <span className="pre-amber">&#123;</span>
        <span className="pre-light-blue">message.id</span>
        <span className="pre-amber">&#125;</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{" "}
        <span className="pre-light-blue">ArticlePicture</span>=
        <span className="pre-amber">&#123;</span>
        <span className="pre-light-blue">message.picture</span>
        <span className="pre-amber">&#125;</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;{" "}
        <span className="pre-light-blue">ArticleName</span>=
        <span className="pre-amber">&#123;</span>
        <span className="pre-light-blue">message.name</span>
        <span className="pre-amber">&#125;</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <span className="pre-light-blue"> ArticleChat</span>=
        <span className="pre-amber">&#123;</span>
        <span className="pre-light-blue">message.content</span>
        <span className="pre-amber">&#125;</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
        <span className="pre-light-blue"> TimeAgo</span>=
        <span className="pre-amber">&#123;</span>
        <span className="pre-light-blue">message.TimeAgo</span>
        <span className="pre-amber">&#125;</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; /&gt;
        <br />
        &emsp; &emsp; &emsp; &emsp; &emsp;{" "}
        <span className="pre-blue">&#41;</span>
        <span className="pre-white">;</span>
        <br />
        &emsp; &emsp; &emsp; &emsp; <span className="pre-purple">&#125;</span>
        <span className="pre-yellow">&#41;</span>
        <span className="pre-blue">&#125;</span>
        <br />
        &lt;/<span className="pre-blue">div</span>&gt;
      </div>
      <div className="filter-p">
        <p>
          <i>
            <br />
            The code above displays collection of different messages. The code
            filters messages based on user input within the text field - in
            other words, a search query. The filtered message will match the
            content or name (name of sender) of the message the user has
            inputted in the text field. The code then renders each message by
            returning a custom component &lt;DashboardArticle /&gt;, displaying
            the properties (props) of each message, such as content, name (of
            sender), and a small profile picture.
          </i>
        </p>
      </div>
    </div>
  );
};
