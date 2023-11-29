import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h2 className="text-3xl font-semibold">Welcome To Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;