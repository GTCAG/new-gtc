import React from "react";
import styled, { withTheme, DefaultTheme } from "styled-components";
import PageHeader from "../atoms/PageHeader";
import bgImg from "../../images/church1.jpg";
import Display from "../texts/Display";
import Text from "../texts/Text";
import Underlined from "../texts/Underlined";
import Accordion from "../texts/Accordion";

interface BeliefPageProps {
  theme: DefaultTheme;
}

const Root = styled.div`
  width: 100%;
`;

const ContentSection = styled.div`
  background-color: ${({ theme }) => theme.colors.lights.offWhite};
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const TitleBox = styled.div`
  position: absolute;
  top: -137px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: 274px;
  max-width: 587px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cta.default};
`;

const Beliefs = styled.div`
  width: 100%;
  margin-bottom: 100px;
  padding: 0 ${({ theme }) => theme.dimensions.margins.dekstop};
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
`;

const VerseList = styled.ul`
  margin-top: 16px;
  li {
    list-style-type: circle;
  }
`;

const Verse = styled.li`
  ${({ theme }) => theme.fonts.text};
  font-size: 16px;
  font-weight: bold;
  margin-left: 18px;
  color: ${({ theme }) => theme.colors.primary.dark};
  margin-bottom: 8px;
  list-style-type: none;
`;

const BeliefPage: React.FC<BeliefPageProps> = ({ theme }) => {
  const textVariant = "x-small"; // For accordion content text
  return (
    <Root>
      <PageHeader
        filter="grayscale(100%) brightness(1.7)"
        img={bgImg}
        height="800px">
        <Display variant="medium" color={theme.colors.lights.white}>
          What We Believe
        </Display>
      </PageHeader>

      <ContentSection>
        <TitleBox>
          <Display
            color={theme.colors.lights.offWhite}
            variant="medium"
            style={{ maxWidth: 418, padding: 40 }}
            weight="bold">
            Doctrines and Statements
          </Display>
        </TitleBox>
        <Text
          variant="medium"
          weight="500"
          style={{
            maxWidth: 800,
            marginTop: 240,
            marginBottom: 70,
            padding: "0px 70px",
            boxSizing: "border-box",
          }}>
          Our Statements and Doctrines align and reflect with the beliefs of the
          Assemblies of God. You can visit{" "}
          <Underlined href="https://ag.org/beliefs">ag.org/beliefs</Underlined>{" "}
          for a more detailed version of the Doctrines for Assemblies of God.
          You can also read the statements below (most of which come from{" "}
          <Underlined href="https://ag.org/">ag.org</Underlined>)
        </Text>

        <Beliefs>
          <Accordion title="The Scriptures Inspired">
            <Text variant={textVariant}>
              The Scriptures, both the Old and New Testaments, are verbally
              inspired of God and are the revelation of God to man, the
              infallible, authoritative rule of faith and conduct.
            </Text>
            <VerseList>
              <Verse>2 Timothy 3:15-17</Verse>
              <Verse>1 Thessalonians 2:13</Verse>
              <Verse>2 Peter 1:21</Verse>
            </VerseList>
          </Accordion>
          <Accordion title="The One True God">
            <Text variant={textVariant}>
              The one true God has revealed Himself as the eternally
              self-existent "I AM," the Creator of heaven and earth and the
              Redeemer of mankind. He has further revealed Himself as embodying
              the principles of relationship and association as Father, Son and
              Holy Spirit.
            </Text>
            <VerseList>
              <Verse>Deuteronomy 6:4</Verse>
              <Verse>Isaiah 43:10,11</Verse>
              <Verse>Matthew 28:19</Verse>
              <Verse>Luke 3:22</Verse>
            </VerseList>
          </Accordion>
          <Accordion title="The Deity of The Lord Jesus Christ">
            <Text variant={textVariant}>
              The Lord Jesus Christ is the eternal Son of God. The Scriptures
              declare:
              <br /> His virgin birth,
            </Text>
            <VerseList>
              <Verse>Matthew 1:23</Verse>
            </VerseList>
            <Text variant={textVariant}>His sinless life,</Text>
            <VerseList>
              <Verse>Hebrews 7:26</Verse>
              <Verse>1 Peter 2:22</Verse>
            </VerseList>
            <Text variant={textVariant}>His miracles,</Text>
            <VerseList>
              <Verse>Acts 2:22</Verse>
              <Verse>Acts 10:38</Verse>
            </VerseList>
            <Text variant={textVariant}>
              His susbtitutionary work on the cross,
            </Text>
            <VerseList>
              <Verse>1 Corinthians 15:3</Verse>
              <Verse>2 Corinthians 5:21</Verse>
            </VerseList>
            <Text variant={textVariant}>
              His bodily resurrection from the dead,
            </Text>
            <VerseList>
              <Verse>Matthew 28:6</Verse>
              <Verse>Luke 24:39</Verse>
              <Verse>1 Corinthians 15:4</Verse>
            </VerseList>
            <Text variant={textVariant}>
              His exaltation to the right hand of God.
            </Text>
            <VerseList>
              <Verse>Acts 1:9</Verse>
              <Verse>Acts 1:11</Verse>
              <Verse>Acts 2:33</Verse>
              <Verse>Philippians 2:9-11</Verse>
              <Verse>Hebrews 1:3</Verse>
            </VerseList>
          </Accordion>
          <Accordion title="The Fall of Man">
            <Text variant={textVariant}>
              Man was created good and upright; for God said, "Let us make man
              in our own image, after our likeness." However, man by voluntary
              transgression fell and thereby incurred not only physical death
              but also spiritual death, which is separation from God.
            </Text>
            <VerseList>
              <Verse>Genesis: 1:26,27</Verse>
              <Verse>Genesis 2:17</Verse>
              <Verse>Genesis 3:6</Verse>
              <Verse>Romans 5:12-19</Verse>
            </VerseList>
          </Accordion>
          <Accordion title="The Salvation of Man">
            <Text variant={textVariant}>
              Man's only hope of redemption is through the shed blood of Jesus
              Christ the Son of God.
              <br />
              <br />
              Conditions to Salvation
              <br />
              <br />
              Salvation is received through repentance toward God and faith
              toward the Lord Jesus Christ. By the washing of regeneration and
              renewing of the Holy Spirit, being justified by grace through
              faith, man becomes an heir of God, according to the hope of
              eternal life.
            </Text>
            <VerseList>
              <Verse>Luke 24:47</Verse>
              <Verse>John 3:3</Verse>
              <Verse>Romans 10:13-15</Verse>
              <Verse>Ephesians 2:8</Verse>
              <Verse>Titus 2:11</Verse>
              <Verse>Titus 3:5-7</Verse>
            </VerseList>
            <br />
            <Text variant={textVariant}>
              The Evidence of Salvation
              <br />
              <br />
              The inward evidence of salvation is the direct witness of the
              Spirit.
              <VerseList>
                <Verse>Romans 8:16</Verse>
              </VerseList>
              The outward evidence to all men is a life of righteousness and
              true holiness.
              <VerseList>
                <Verse>Ephesians 4:24</Verse>
                <Verse>Titus 2:12</Verse>
              </VerseList>
            </Text>
          </Accordion>
          <Accordion title="The Ordinances of The Church">
            <Text variant={textVariant}>
              BAPTISM IN WATER
              <br />
              <br />
              The ordinance of baptism by immersion is commanded by the
              Scriptures. All who repent and believe on Christ as Saviour and
              Lord are to be baptized. Thus they declare to the world that they
              have died with Christ and that they also have been raised with Him
              to walk in newness of life.
              <VerseList>
                <Verse>Matthew 28:19</Verse>
                <Verse>Mark 16:16</Verse>
                <Verse>Acts 10:47,48</Verse>
                <Verse>Romans 6:4</Verse>
              </VerseList>
              HOLY COMMUNION
              <br />
              <br />
              The Lord's Supper, consisting of the elements --bread and the
              fruit of the vine-- is the symbol expressing our sharing the
              divine nature of our Lord Jesus Christ ( 2 Peter 1:4), a memorial
              of his suffering and death (1 Corinthians 11:26), and a prophecy
              of His second coming (1 Corinthians 11:26), and is enjoined on all
              believers "till He come!"
            </Text>
          </Accordion>
          <Accordion title="The Baptism in The Holy Spirit">
            <Text variant={textVariant}>
              All believers are entitled to and should ardently expect and
              earnestly seek the promise of the Father, the baptism in the Holy
              Spirit and fire, according to the command of our Lord Jesus
              Christ. This was the normal experience of all in the early
              Christian Church. With it comes the enduement of power for life
              and service, the bestowment of the gifts and their uses in the
              work of the ministry.
              <VerseList>
                <Verse>Luke 24:49</Verse>
                <Verse>Acts 1:4</Verse>
                <Verse>Acts 1:8</Verse>
                <Verse>1 Corinthians 12:1-31</Verse>
              </VerseList>
              <br />
              This experience is distinct from and subsequent to the experience
              of the new birth.
              <VerseList>
                <Verse>Acts 8:12-17</Verse>
                <Verse>Acts 10:44-46</Verse>
                <Verse>Acts 11:14-16</Verse>
                <Verse>Acts 15:7-9</Verse>
              </VerseList>
              With the baptism in the Holy Spirit come such experiences as:
              <VerseList>
                <Verse>
                  an overflowing fullness of the Spirit, John 7:37-39, Acts 4:8
                </Verse>
                <Verse>
                  a deepened reverence for God, Acts 2:43, Hebrews 12:28
                </Verse>
                <Verse>
                  an intensified consecration to God and dedication to His work,
                  Acts 2:42{" "}
                </Verse>
                <Verse>
                  and a more active love for Christ, for His Word and for the
                  lost, Mark 16:20
                </Verse>
              </VerseList>
            </Text>
          </Accordion>
          <Accordion title="The Initial Physical Evidence of the Baptism in The Holy Spirit">
            <Text variant={textVariant}>
              The baptism of believers in the Holy Spirit is witnessed by the
              initial physical sign of speaking with other tongues as the Spirit
              of God gives them utterance.
              <VerseList>
                <Verse>Acts 2:4</Verse>
              </VerseList>
              <br />
              <br />
              The speaking in tongues in this instance is the same in essence as
              the gift of tongues, but is different in purpose and use.
              <VerseList>
                <Verse>1 Corinthians 12:4-10</Verse>
                <Verse>1 Corinthans 12:28</Verse>
              </VerseList>
            </Text>
          </Accordion>
          <Accordion title="Sanctification">
            <Text variant={textVariant}>
              Sanctification is an act of separation from that which is evil,
              and of dedication unto God.
              <VerseList>
                <Verse>Romans 12:1,2</Verse>
                <Verse>1 Thessalonians 5:23</Verse>
                <Verse>Hebrews 13:12</Verse>
              </VerseList>
              The Scriptures teach a life of "holiness without which no man
              shall see the Lord."
              <VerseList>
                <Verse>Hebrews 12:14</Verse>
              </VerseList>
              By the power of the Holy Spirit we are able to obey the command:
              "Be ye holy, for I am holy."
              <VerseList>
                <Verse>1 Peter 1:15,16</Verse>
              </VerseList>
              Sanctification is realized in the believer by recognizing his
              identification with Christ in His death and resurrection, and by
              the faith reckoning daily upon the fact of that union, and by
              offering every faculty continually to the dominion of the Holy
              Spirit.
              <VerseList>
                <Verse>Romans 6:1-11</Verse>
                <Verse>Romans 6:13</Verse>
                <Verse>Romans 8:1,2</Verse>
                <Verse>Romans 8:13</Verse>
                <Verse>Galatians 2:20</Verse>
                <Verse>Philippians 2:12,13</Verse>
                <Verse>1 Peter 1:5</Verse>
              </VerseList>
            </Text>
          </Accordion>
          <Accordion title="The Church and Its Mission">
            <Text variant={textVariant}>
              The Church is the Body of Christ, the habitation of God through
              the Spirit, with divine appointments for the fulfillment of her
              great commission. Each believer, born of the Spirit, is an
              integral part of the General Assembly and Church of the Firstborn,
              which are written in heaven.
              <VerseList>
                <Verse>Ephesians 1:22,23</Verse>
                <Verse>Ephesians 2:22</Verse>
                <Verse>Hebrews 12:23</Verse>
              </VerseList>
              <br />
              <br />
              Since God’s purpose concerning man is to seek and to save that
              which is lost, to be worshipped by man, to build a body of
              believers in the image of His Son, and to demonstrate His love and
              compassion for all the world, the priority reason for being of the
              Assemblies of God as part of the Church is:
              <br />
              <br />
              1. To be an agency of God for evangelizing the world.
              <VerseList>
                <Verse>Acts 1:8</Verse>
                <Verse>Matthew 28:19,20</Verse>
                <Verse>Mark 16:15,16</Verse>
              </VerseList>
              2. To be a corporate body in which man may worship God.
              <VerseList>
                <Verse>1 Corinthians 12:13</Verse>
              </VerseList>
              3. To be a channel of God’s purpose to build a body of saints
              being perfected in the image of His Son.
              <VerseList>
                <Verse>Ephesians 4:11-16</Verse>
                <Verse>1 Corinthians 12:28</Verse>
                <Verse>1 Corinthians 14:12</Verse>
              </VerseList>
              4. To be a people who demonstrate God’s love and compassion for
              all the world.
              <VerseList>
                <Verse>Psalms 112:9</Verse>
                <Verse>Galatians 2:12, 6:10</Verse>
                <Verse>James 1:27</Verse>
              </VerseList>
              <br />
              <br />
              The Assemblies of God exists expressly to give continuing emphasis
              to this reason for being in the New Testament apostolic pattern by
              teaching and encouraging believers to be baptized in the Holy
              Spirit. This experience:
              <br />
              <br />
              1. Enables them to evangelize in the power of the Spirit with
              accompanying supernatural signs.
              <VerseList>
                <Verse>Mark 16:15-20</Verse>
                <Verse>Acts 4:29-31</Verse>
                <Verse>Hebrews 2:3,4</Verse>
              </VerseList>
              2. Adds a necessary dimension to worshipful relationship with God.
              <VerseList>
                <Verse>1 Corinthians 2:10-16</Verse>
                <Verse>1 Corinthians 12</Verse>
                <Verse>1 Corinthians 13</Verse>
                <Verse>1 Corinthians 14</Verse>
              </VerseList>
              3. Enables them to respond to the full working of the Holy Spirit
              in expression of fruit and gifts and ministries as in New
              Testament times for the edifying of the body of Christ and care
              for the poor and needy of the world.
              <VerseList>
                <Verse>Galatians 5:22-26</Verse>
                <Verse>Matthew 25:37-40</Verse>
                <Verse>Galatians 6:10</Verse>
                <Verse>1 Corinthians 14:12</Verse>
                <Verse>Ephesians 4:11,12</Verse>
                <Verse>1 Corinthians 12:28</Verse>
                <Verse>Colossians 1:29</Verse>
              </VerseList>
            </Text>
          </Accordion>
          <Accordion title="The Ministry">
            <Text variant={textVariant}>
              A divinely called and scripturally ordained ministry has been
              provided by our Lord for the fourfold purpose of leading the
              Church in:
              <br />
              <br />
              Evangelization of the world.
              <VerseList>
                <Verse>Mark 16:15-20</Verse>
              </VerseList>
              Worship of God
              <VerseList>
                <Verse>John 4:23,24</Verse>
              </VerseList>
              Building a body of saints being perfected in the image of His Son.
              <VerseList>
                <Verse>Ephesians 4:11-16</Verse>
              </VerseList>
              Meeting human need with ministries of love and compassion.
              <VerseList>
                <Verse>Psalms 112:9</Verse>
                <Verse>Galatians 2:10,6:10</Verse>
                <Verse>James 1:27</Verse>
              </VerseList>
            </Text>
          </Accordion>
          <Accordion title="Divine Healing">
            <Text variant={textVariant}>
              Divine healing is an integral part of the gospel. Deliverance from
              sickness is provided for in the atonement, and is the privilege of
              all believers.
              <VerseList>
                <Verse>Isaiah 53:4,5</Verse>
                <Verse>Matthew 8:16,17</Verse>
                <Verse>James 5:14-16</Verse>
              </VerseList>
            </Text>
          </Accordion>
          <Accordion title="The Blessed Hope">
            <Text variant={textVariant}>
              The resurrection of those who have fallen asleep in Christ and
              their translation together with those who are alive and remain
              unto the coming of the Lord is the imminent and blessed hope of
              the church.
              <VerseList>
                <Verse>1 Thessalonians 4:16,17</Verse>
                <Verse>Romans 8:23</Verse>
                <Verse>Titus 2:13</Verse>
                <Verse>1 Corinthians 15:51,52</Verse>
              </VerseList>
            </Text>
          </Accordion>
          <Accordion title="The Millennial Reign of Christ">
            <Text variant={textVariant}>
              The second coming of Christ includes the rapture of the saints,
              which is our blessed hope, followed by the visible return of
              Christ with His saints to reign on earth for one thousand years.
              <VerseList>
                <Verse>Zechariah 14:5</Verse>
                <Verse>Matthew 24:27</Verse>
                <Verse>Matthew 24:30</Verse>
                <Verse>Revelation 1:7</Verse>
                <Verse>Revelation 19:11-14</Verse>
                <Verse>Revelation 20:1-6</Verse>
              </VerseList>
              This millennial reign will bring the salvation of national Israel,
              <VerseList>
                <Verse>Ezekiel 32:21,22</Verse>
                <Verse>Zephaniah 3:19,20</Verse>
                <Verse>Romans 11:26,27</Verse>
              </VerseList>
              and the establishment of the universal peace.
              <VerseList>
                <Verse>Isaiah 11:6-9</Verse>
                <Verse>Psalms 72:3-8</Verse>
                <Verse>Micah 4:3,4</Verse>
              </VerseList>
            </Text>
          </Accordion>
          <Accordion title="The Final Judgement">
            <Text variant={textVariant}>
              There will be a final judgment in which the wicked dead will be
              raised and judged according to their works. Whosoever is not found
              written in the Book of Life, together with the devil and his
              angels, the beast and the false prophet, will be consigned to the
              everlasting punishment in the lake which burneth with fire and
              brimstone, which is the second death.
              <VerseList>
                <Verse>Matthew 25:46</Verse>
                <Verse>Mark 9:43-48</Verse>
                <Verse>Revelation 19:20</Verse>
                <Verse>Revelation 20:11-15</Verse>
                <Verse>Revelation 21:8</Verse>
              </VerseList>
            </Text>
          </Accordion>
          <Accordion title="The New Heavens and The New Earth">
            <Text variant={textVariant}>
              "We, according to His promise, look for new heavens and a new
              earth wherein dwelleth righteousness."
              <VerseList>
                <Verse>2 Peter 3:13</Verse>
                <Verse>Revelation 21</Verse>
                <Verse>Revelation 22</Verse>
              </VerseList>
            </Text>
          </Accordion>
        </Beliefs>
      </ContentSection>
    </Root>
  );
};

export default withTheme(BeliefPage);
