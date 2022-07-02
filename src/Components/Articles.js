const Articles = () => {
    return(
        <section class="articles">
        <div class="container">
          <h2>Latest Articles</h2>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
              <div class="card">
                <div class="card-img"><img src="./images/image-currency.jpg" alt="Receive money in any currency with no fees" /></div>
                <div class="card-details">
                  <div class="card-author"><span>By Claire Robinson</span></div>
                  <h4 class="card-title"><a href="#">Receive money in any currency with no fees</a></h4>
                  <p class="card-summary">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
              <div class="card">
                <div class="card-img"><img src="./images/image-restaurant.jpg" alt="" /></div>
                <div class="card-details">
                  <div class="card-author"><span>By Wilson Hutton</span></div>
                  <h4 class="card-title"><a href="#">Treat yourself without worrying about money</a></h4>
                  <p class="card-summary">Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
              <div class="card">
                <div class="card-img"><img src="./images/image-plane.jpg" alt="" /></div>
                <div class="card-details">
                  <div class="card-author"><span>By Wilson Hutton</span></div>
                  <h4 class="card-title"><a href="#">Take your Easybank card wherever you go</a></h4>
                  <p class="card-summary">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
              <div class="card">
                <div class="card-img"><img src="./images/image-confetti.jpg" alt="" /></div>
                <div class="card-details">
                  <div class="card-author"><span>By Claire Robinson</span></div>
                  <h4 class="card-title"><a href="#">Our invite-only Beta accounts are now live!</a></h4>
                  <p class="card-summary">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}


export default Articles