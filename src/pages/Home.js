import Loading from "./Loading";
import Menu from "../components/Menu";
import foto from "./banner.png"

function Home() {
    const card = [
        {
            img: "https://fakeimg.pl/250x200",
            title: "Lorem Ipsum",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: "https://fakeimg.pl/250x200",
            title: "Lorem Ipsum",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: "https://fakeimg.pl/250x200",
            title: "Lorem Ipsum",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            img: "https://fakeimg.pl/250x200",
            title: "Lorem Ipsum",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },

    ];
    return (
        <>
            <Loading />
            <Menu />
            <div className="body">
                <div className="banner">
                    <div className="banner_title">
                        <div className="title">
                            Timeless Elegance
                        </div>
                        <div className="slogan">
                            Every Second Counts, Make Them Stylish
                        </div>
                    </div>
                    <div className="banner_img">
                        <img src={foto} alt=""></img>
                    </div>
                </div>

                <div className="body_card">
                    <div className="body_card_body">
                        {card.map((item, index) => (
                            <div className="card" key={index}>
                                <div className="card_img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="card_title"> {item.title} </div>
                                <div className="card_desc">
                                    {item.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;