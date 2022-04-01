import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Tabs, { TabList, Tab, TabPanel } from './../elements/Tabs';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class FeaturesTabs extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tabs section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tabs-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: "How We Can Serve You",
      paragraph: 'Click the icons to see the different services we provide.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Tabs active="tab-a">
              <TabList>
                <Tab tabId="tab-a">
                  <div className="features-tiles-item-image mb-12">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Politicians"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Political Services
                  </div>
                </Tab>
                <Tab tabId="tab-b">
                  <div className="features-tiles-item-image mb-12">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Businesses"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Business Services
                  </div>                  
                </Tab>
                <Tab tabId="tab-c">
                  <div className="features-tiles-item-image mb-12">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Influencer"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Influencer Services
                  </div>                  
                </Tab>
                {/*<Tab tabId="tab-d">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/features-tabs-icon-04.svg')}
                      alt="Tab icon 04"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Internal Feedback
                  </div>
                </Tab>*/}                
              </TabList>
              <TabPanel id="tab-b">
                <div className={tilesClasses}>

                  <div className="tiles-item reveal-from-bottom">
                    <div className="tiles-item-inner has-shadow">
                      <figure className="news-item-image m-0">
                        <Image
                          src={require('./../../assets/images/news-image-01.jpg')}
                          alt="News 01"
                          width={344}
                          height={194} />
                      </figure>
                      <div className="news-item-content">
                        <div className="news-item-body">
                          <h3 className="news-item-title h4 mt-0 mb-8">
                            <a href="https://cruip.com">Optimize Marketing Strategies</a>
                          </h3>
                          <p className="mb-16 text-sm">
                            By analyzing trends in your public sentiment over specified periods of times, we help you understand which marketing initiatives are effective—and which ones can be improved. We’ll scrape the entire internet to give you a large-scale picture on your marketing strategies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                    <div className="tiles-item-inner has-shadow">
                      <figure className="news-item-image m-0">
                        <Image
                          src={require('./../../assets/images/news-image-02.jpg')}
                          alt="News 02"
                          width={344}
                          height={194} />
                      </figure>
                      <div className="news-item-content">
                        <div className="news-item-body">
                          <h3 className="news-item-title h4 mt-0 mb-8">
                            <a href="https://cruip.com">Analyze Interactions With Customers</a>
                          </h3>
                          <p className="mb-16 text-sm">
                            We help you understand how your important stakeholders feel about your product, providing key-information for product-development and company image. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                    <div className="tiles-item-inner has-shadow">
                      <figure className="news-item-image m-0">
                        <Image
                          src={require('./../../assets/images/news-image-03.jpg')}
                          alt="News 03"
                          width={344}
                          height={194} />
                      </figure>
                      <div className="news-item-content">
                        <div className="news-item-body">
                          <h3 className="news-item-title h4 mt-0 mb-8">
                            <a href="https://cruip.com">Provide industry-level takeaways </a>
                          </h3>
                          <p className="mb-16 text-sm">
                            We don’t stop just at your business. We’ll give you a macro-picture of your entire industry to show you which marketing strategies, innovative features, and business tactics are working and which ones aren’t. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </TabPanel>
              <TabPanel id="tab-c">
                <div className={tilesClasses}>

                  <div className="tiles-item reveal-from-bottom">
                    <div className="tiles-item-inner has-shadow">
                      <figure className="news-item-image m-0">
                        <Image
                          src={require('./../../assets/images/news-image-01.jpg')}
                          alt="News 01"
                          width={344}
                          height={194} />
                      </figure>
                      <div className="news-item-content">
                        <div className="news-item-body">
                          <h3 className="news-item-title h4 mt-0 mb-8">
                            <a href="https://cruip.com">Optimize For Your Virality</a>
                          </h3>
                          <p className="mb-16 text-sm">
                          We scour your content and similar creators’ content to give you ideas that will blow up. Ultimately, your increased visibility converts to more followers, fans, and fame. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                    <div className="tiles-item-inner has-shadow">
                      <figure className="news-item-image m-0">
                        <Image
                          src={require('./../../assets/images/news-image-02.jpg')}
                          alt="News 02"
                          width={344}
                          height={194} />
                      </figure>
                      <div className="news-item-content">
                        <div className="news-item-body">
                          <h3 className="news-item-title h4 mt-0 mb-8">
                            <a href="https://cruip.com">Control Your Public Image</a>
                          </h3>
                          <p className="mb-16 text-sm">
                          The longevity and sustainability of your brand relies on committed fans who support you. We will identify your distribution of committed fans and devise strategies to improve your support base.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                    <div className="tiles-item-inner has-shadow">
                      <figure className="news-item-image m-0">
                        <Image
                          src={require('./../../assets/images/news-image-03.jpg')}
                          alt="News 03"
                          width={344}
                          height={194} />
                      </figure>
                      <div className="news-item-content">
                        <div className="news-item-body">
                          <h3 className="news-item-title h4 mt-0 mb-8">
                            <a href="https://cruip.com">Place Ads Without Upsetting Fans </a>
                          </h3>
                          <p className="mb-16 text-sm">
                          We recognize that placing ads often comes at the cost of lowered public sentiment towards your brand. We can help you optimize ad placement without upsetting fans. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </TabPanel>
              <TabPanel id="tab-a">
                <div className={tilesClasses}>

                  <div className="tiles-item reveal-from-bottom">
                    <div className="tiles-item-inner has-shadow">
                      <figure className="news-item-image m-0">
                        <Image
                          src={require('./../../assets/images/news-image-01.jpg')}
                          alt="News 01"
                          width={344}
                          height={194} />
                      </figure>
                      <div className="news-item-content">
                        <div className="news-item-body">
                          <h3 className="news-item-title h4 mt-0 mb-8">
                            <a href="https://cruip.com">Understand People's Sentiments on Issues</a>
                          </h3>
                          <p className="mb-16 text-sm">
                            Using ground-breaking stance detection AI, we give you immediate insight on any issues that concern your campaign. Legacy polling data is expensive and inefficient, and at crucial moments, you often do not have enough time to run a poll. Our AI instantly reveals how your base, the general public, and other stakeholder feel about issues. We compile the entire internet into your fingerprints.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                    <div className="tiles-item-inner has-shadow">
                      <figure className="news-item-image m-0">
                        <Image
                          src={require('./../../assets/images/news-image-02.jpg')}
                          alt="News 02"
                          width={344}
                          height={194} />
                      </figure>
                      <div className="news-item-content">
                        <div className="news-item-body">
                          <h3 className="news-item-title h4 mt-0 mb-8">
                            <a href="https://cruip.com">Understand Your Base</a>
                          </h3>
                          <p className="mb-16 text-sm">
                            By leveraging trained sentiment analysis on emails, comments, or any other content, we help you gauge your standing with your base or other stakeholders. Our data helps you create optimized marketing strategies, campaign plans, and fundraising tactics. Ultimately, our data helps you run the best campaign you can. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                    <div className="tiles-item-inner has-shadow">
                      <figure className="news-item-image m-0">
                        <Image
                          src={require('./../../assets/images/news-image-03.jpg')}
                          alt="News 03"
                          width={344}
                          height={194} />
                      </figure>
                      <div className="news-item-content">
                        <div className="news-item-body">
                          <h3 className="news-item-title h4 mt-0 mb-8">
                            <a href="https://cruip.com">Improve Social Media Outreach</a>
                          </h3>
                          <p className="mb-16 text-sm">
                            Through our holistic approach to social media analytics, we help optimize your reach, consolidate your message to what works, and out-campaign your opponents online. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </TabPanel>
              {/*<TabPanel id="tab-d">
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/features-tabs-image.png')}
                  alt="Features tabs image 04"
                  width={896}
                  height={504} />
              </TabPanel>     */}         
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTabs.propTypes = propTypes;
FeaturesTabs.defaultProps = defaultProps;

export default FeaturesTabs;