import SidebarItem from "../components/elements/list-item/SidebarItem";
import AuthorizedNavbar from "../components/fragments/AuthorizedNavbar";
import Sidebar from "../components/fragments/SideBar";
import modulIconImg from '../assets/images/modul-icon.png';
import pencatatanIconImg from '../assets/images/pencatatan-icon.png';
import savingIconImg from '../assets/images/saving-icon.png';
import kuisIconImg from '../assets/images/kuis-icon.png';
import profilePictureImg from "../assets/images/profile-picture.png";
import goldenShieldImg from "../assets/images/golden-shield.png";
import treasureImg from "../assets/images/treasure.png";
import othersImg from "../assets/images/others.png";
import aceFunImg from "../assets/images/ace-fun.png"
import aceSmartImg from "../assets/images/ace-smart.png"
import aceWandImg from "../assets/images/ace-wand.png"
import ProgressBar from "../components/elements/bar/ProgressBar";
import RoadmapCard from "../components/elements/card/RoadmapCard";
import RoadmapItem from "../components/elements/list-item/RoadmapItem";

const Course = ({  }) => {

    const treasure = (
        <svg className="h-full" viewBox="0 0 80 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_142_8385)">
            <path opacity="0.3" d="M76.125 23.1875H4.125C1.91586 23.1875 0.125 24.9784 0.125 27.1875V59.1875C0.125 61.3966 1.91586 63.1875 4.125 63.1875H76.125C78.3341 63.1875 80.125 61.3966 80.125 59.1875V27.1875C80.125 24.9784 78.3341 23.1875 76.125 23.1875Z" fill="#AFAFAF"/>
            <path d="M8.41406 24.9241C8.41406 19.3876 12.9022 14.8994 18.4387 14.8994H60.8809C66.4174 14.8994 70.9056 19.3876 70.9056 24.9241V51.5078C70.9056 53.7224 69.1103 55.5177 66.8957 55.5177H12.4239C10.2093 55.5177 8.41406 53.7224 8.41406 51.5078V24.9241Z" fill="#9A9A9A"/>
            <path d="M6.24707 10.4148C6.24707 4.87834 10.7353 0.390137 16.2718 0.390137H63.3879C68.9244 0.390137 73.4127 4.87834 73.4127 10.4148V40.2384H6.24707V10.4148Z" fill="#9A9A9A"/>
            <path d="M77.0433 27.959H3.23438V39.4874H77.0433V27.959Z" fill="#D8D8D8"/>
            <path d="M67.1455 10.6646H75.042C76.1493 10.6646 77.0469 11.5622 77.0469 12.6695V30.9646H67.1455V10.6646Z" fill="#D8D8D8"/>
            <path d="M3.23438 12.6695C3.23438 11.5622 4.13201 10.6646 5.23932 10.6646H11.632C12.7393 10.6646 13.637 11.5622 13.637 12.6695V28.9597C13.637 30.0669 12.7393 30.9646 11.632 30.9646H5.23932C4.13201 30.9646 3.23438 30.0669 3.23438 28.9597V12.6695Z" fill="#D8D8D8"/>
            <path d="M6.24707 -0.8076C6.24707 -1.9149 7.14471 -2.8125 8.25201 -2.8125H18.7779C19.8852 -2.8125 20.7829 -1.9149 20.7829 -0.8076V19.6902H6.24707V-0.8076Z" fill="#D8D8D8"/>
            <path d="M58.877 -0.8076C58.877 -1.9149 59.7747 -2.8125 60.882 -2.8125H71.4079C72.5152 -2.8125 73.4129 -1.9149 73.4129 -0.8076V19.6902H58.877V-0.8076Z" fill="#D8D8D8"/>
            <path d="M6.37891 9.33207L20.727 5.75977V18.4097L6.37891 18.2339V9.33207Z" fill="#EDEDED"/>
            <path d="M6.24707 16.9126H20.7829V31.4073H6.24707V16.9126Z" fill="#BFBFBF"/>
            <path d="M6.24707 37.7311C6.24707 36.6238 7.14471 35.7261 8.25201 35.7261H18.7779C19.8852 35.7261 20.7829 36.6238 20.7829 37.7311V55.5778C20.7829 56.6851 19.8852 57.5828 18.7779 57.5828H8.25201C7.14471 57.5828 6.24707 56.6851 6.24707 55.5778V37.7311Z" fill="#BFBFBF"/>
            <path d="M57.5596 37.7311C57.5596 36.6238 58.4573 35.7261 59.5646 35.7261H70.0905C71.1978 35.7261 72.0955 36.6238 72.0955 37.7311V55.5778C72.0955 56.6851 71.1978 57.5828 70.0905 57.5828H59.5646C58.4573 57.5828 57.5596 56.6851 57.5596 55.5778V37.7311Z" fill="#BFBFBF"/>
            <path d="M73.4128 16.9126H58.877V31.4073H73.4128V16.9126Z" fill="#BFBFBF"/>
            <path d="M42.5868 35.1001H37.0732V44.8115H42.5868V35.1001Z" fill="#C4C4C4"/>
            <path d="M20.7829 40.4956H6.24707V45.3827H20.7829V40.4956Z" fill="#9A9A9A"/>
            <path d="M72.0954 40.4956H57.5596V45.3827H72.0954V40.4956Z" fill="#9A9A9A"/>
            <path d="M57.5565 49.0054H20.7783V51.6369H57.5565V49.0054Z" fill="#898989"/>
            <path d="M58.8722 8.82715H20.7783V11.4586H58.8722V8.82715Z" fill="#898989"/>
            <path opacity="0.92" d="M57.5565 40.4956H20.7783V45.3827H57.5565V40.4956Z" fill="#888888"/>
            <path opacity="0.92" d="M58.8722 20.4922H20.7783V27.9579H58.8722V20.4922Z" fill="#898989"/>
            <path d="M3.23438 31.4033H77.0433V40.4882C77.0433 41.5955 76.1456 42.4932 75.0383 42.4932H5.23932C4.13201 42.4932 3.23438 41.5955 3.23438 40.4882V31.4033Z" fill="#BFBFBF"/>
            <path d="M46.97 23.5703H32.0582C30.3972 23.5703 29.0508 24.9168 29.0508 26.5777V38.7636C29.0508 40.4245 30.3972 41.771 32.0582 41.771H46.97C48.6309 41.771 49.9774 40.4245 49.9774 38.7636V26.5777C49.9774 24.9168 48.6309 23.5703 46.97 23.5703Z" fill="#D8D8D8"/>
            <path d="M33.7267 23.5703H32.0582C30.3973 23.5703 29.0508 24.9167 29.0508 26.5777V38.7636C29.0508 40.4245 30.3973 41.771 32.0582 41.771H33.0622C33.5876 41.771 34.0103 41.3391 33.999 40.8138L33.7267 28.1602V23.5703Z" fill="#EDEDED"/>
            <path d="M46.97 28.0508H32.0582C30.3972 28.0508 29.0508 29.3973 29.0508 31.0582V42.9841C29.0508 44.645 30.3972 45.9915 32.0582 45.9915H46.97C48.6309 45.9915 49.9774 44.645 49.9774 42.9841V31.0582C49.9774 29.3973 48.6309 28.0508 46.97 28.0508Z" fill="#BFBFBF"/>
            <path d="M39.1689 38.4381C41.3489 38.4381 43.1161 36.851 43.1161 34.8934C43.1161 32.9357 41.3489 31.3486 39.1689 31.3486C36.9889 31.3486 35.2217 32.9357 35.2217 34.8934C35.2217 36.851 36.9889 38.4381 39.1689 38.4381Z" fill="#8A8A8A"/>
            <path d="M38.2716 36.7909C38.641 36.0521 39.6954 36.0521 40.0648 36.7909L41.8611 40.3833C42.1944 41.0498 41.7098 41.8341 40.9645 41.8341H37.3719C36.6267 41.8341 36.142 41.0498 36.4753 40.3833L38.2716 36.7909Z" fill="#8A8A8A"/>
            <path d="M58.9102 1.57227L73.3809 -1.91943V6.04527L58.9102 9.53707V1.57227Z" fill="#EDEDED"/>
            <path d="M29.0517 27.5454H20.6094V31.3484H29.0517V27.5454Z" fill="#EDEDED"/>
            </g>
            <defs>
            <clipPath id="clip0_142_8385">
            <rect width="80" height="63" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    );

    const lock = (
        <svg className="h-full" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_142_8416)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8731 -0.149414C6.94492 -0.149414 3.76042 2.83646 3.76042 6.51973V8.79543C3.76042 8.85103 3.76122 8.90653 3.76262 8.96173H3.70492C1.85401 8.96173 0.353516 10.4622 0.353516 12.3131V21.2542C0.353516 23.1051 1.85401 24.6056 3.70492 24.6056H18.0455C19.8965 24.6056 21.397 23.1051 21.397 21.2542V12.3132C21.397 10.4622 19.8965 8.96173 18.0455 8.96173H17.9837C17.9851 8.90653 17.9858 8.85103 17.9858 8.79543V6.51973C17.9858 2.83645 14.8014 -0.149414 10.8731 -0.149414ZM14.4812 8.96173C14.484 8.90662 14.4855 8.85123 14.4855 8.79543V6.51973C14.4855 4.64908 12.8682 3.13265 10.8731 3.13265C8.87812 3.13265 7.26081 4.64908 7.26081 6.51973V8.79543C7.26081 8.85123 7.26222 8.90662 7.26512 8.96173H14.4812Z" fill="#AFAFAF"/>
        </g>
        <defs>
        <clipPath id="clip0_142_8416">
        <rect width="21" height="25" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    );

    const trophy = (
        <svg className="h-full" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0867 1.18741C10.241 -0.0359426 6.97179 2.0351 6.97179 5.19271V13.9402C6.97179 20.3415 11.3546 25.6956 17.2181 27.0338C18.2287 27.4138 18.5393 27.925 18.5793 28.3324V28.421V28.4268V28.507C18.5687 28.759 18.4591 29.1012 18.1536 29.3782H14.9409C14.1526 29.3782 13.5136 30.0172 13.5136 30.8055C13.5136 30.9661 13.5401 31.1204 13.5889 31.2644H12.0182C11.2272 31.2644 10.5859 31.9057 10.5859 32.6968C10.5859 33.4879 11.2272 34.1291 12.0182 34.1291H27.7601C28.5512 34.1291 29.1925 33.4879 29.1925 32.6968C29.1925 31.9057 28.5512 31.2644 27.7601 31.2644H26.4615C26.5103 31.1204 26.5368 30.9661 26.5368 30.8055C26.5368 30.0172 25.8978 29.3782 25.1095 29.3782H21.8507C21.5685 29.1552 21.4241 28.881 21.3681 28.6444V28.362C21.4457 27.9037 21.8765 27.3361 23.2268 26.9686C28.9533 25.5291 33.2011 20.2421 33.2011 13.9402V5.19271C33.2011 2.0351 29.9319 -0.0359416 27.0862 1.18741C24.4325 2.32818 21.5919 3.37263 20.0864 3.37263C18.581 3.37263 15.7403 2.32818 13.0867 1.18741ZM3.35009 16.9059C1.6223 15.9975 0.682223 13.9796 1.20034 12.0198C1.30684 11.617 1.71874 11.3805 2.12034 11.4916L2.25989 11.5302C3.46034 11.8623 4.40222 12.6809 4.93 13.7152C5.27824 13.9177 5.50967 14.2974 5.50263 14.7288C5.48629 15.7308 5.65091 17.4386 6.20872 19.1796C6.76885 20.9278 7.68562 22.5876 9.0855 23.6531C9.5909 24.0377 9.6887 24.7592 9.3041 25.2646C9.2195 25.3757 9.1187 25.4671 9.0075 25.538C8.05615 27.3752 5.86647 28.2316 3.88711 27.4589C3.50596 27.3102 3.31291 26.8788 3.45591 26.4954L3.57108 26.1867C4.00725 25.0174 4.91081 24.1685 5.98825 23.7712C5.67974 23.369 5.40435 22.9475 5.15877 22.5158C3.26086 22.8722 1.32119 21.8673 0.556683 19.9996C0.399113 19.6147 0.581323 19.1699 0.963653 19.0061L1.11386 18.9418C1.9626 18.5783 2.85995 18.516 3.68935 18.7073C3.53785 18.0814 3.42727 17.4734 3.35009 16.9059ZM34.6154 13.777C34.3208 13.9896 34.1315 14.338 34.1379 14.7288C34.1542 15.7308 33.9896 17.4386 33.4318 19.1796C32.8717 20.9278 31.9549 22.5876 30.555 23.6531C30.0496 24.0377 29.9518 24.7592 30.3364 25.2646C30.4351 25.3943 30.556 25.4972 30.6897 25.5719C31.6503 27.3857 33.8252 28.2268 35.7924 27.4589C36.1735 27.3102 36.3666 26.8788 36.2236 26.4954L36.1084 26.1867C35.6681 25.0064 34.7516 24.1525 33.6608 23.7601C33.9786 23.3445 34.2612 22.9085 34.5122 22.462C36.4859 22.9573 38.5623 21.9479 39.3598 19.9996C39.5174 19.6147 39.3352 19.1699 38.9528 19.0061L38.8026 18.9418C37.852 18.5346 36.8405 18.5054 35.9317 18.787C36.0997 18.1067 36.2193 17.4463 36.3 16.8346C38.0398 15.8684 38.9272 13.7738 38.3135 11.8079C38.1894 11.4103 37.7679 11.1929 37.372 11.3222L37.2291 11.3689C36.0073 11.768 35.0835 12.6725 34.6154 13.777Z" fill="#AFAFAF"/>
        </svg>
    );

    const dumbell = (
        <svg className="h-full" viewBox="0 0 43 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_142_8265)">
        <path d="M16.875 21.2933L25.6339 16.2363" stroke="#AFAFAF" stroke-width="4"/>
        <path d="M28.7973 4.02208C27.5405 1.84526 24.757 1.09942 22.5802 2.35621C20.4033 3.613 19.6575 6.39651 20.9143 8.57333L29.5111 23.4634C30.7679 25.6403 33.5514 26.3861 35.7282 25.1293C37.905 23.8725 38.6509 21.089 37.3941 18.9122L28.7973 4.02208Z" fill="#AFAFAF"/>
        <path d="M13.9076 12.6188C12.6509 10.4419 9.86735 9.6961 7.69052 10.9529C5.51369 12.2097 4.76786 14.9932 6.02465 17.17L14.6214 32.0601C15.8782 34.2369 18.6617 34.9828 20.8386 33.726C23.0154 32.4692 23.7612 29.6857 22.5044 27.5089L13.9076 12.6188Z" fill="#AFAFAF"/>
        <path d="M36.9516 3.9879C35.6948 1.81107 32.9113 1.06524 30.7345 2.32203C28.5576 3.57882 27.8118 6.36232 29.0686 8.53915L33.6198 16.4221C34.8766 18.599 37.6601 19.3448 39.837 18.088C42.0138 16.8312 42.7596 14.0477 41.5028 11.8709L36.9516 3.9879Z" fill="#AFAFAF"/>
        <path d="M9.79827 19.6617C8.54148 17.4849 5.75798 16.7391 3.58115 17.9959C1.40432 19.2527 0.658481 22.0362 1.91527 24.213L6.46652 32.096C7.72332 34.2728 10.5068 35.0186 12.6836 33.7619C14.8605 32.5051 15.6063 29.7216 14.3495 27.5447L9.79827 19.6617Z" fill="#AFAFAF"/>
        <path opacity="0.2" d="M4.99939 20.5247L4.99938 20.5247C4.27377 20.9436 4.02516 21.8714 4.44409 22.597L5.45548 24.3488C5.87441 25.0744 6.80224 25.323 7.52785 24.9041L7.52786 24.9041C8.25346 24.4852 8.50208 23.5573 8.08315 22.8317L7.07175 21.0799C6.65282 20.3543 5.72499 20.1057 4.99939 20.5247Z" fill="white"/>
        <path opacity="0.2" d="M33.3187 5.35376L33.3187 5.35376C32.5931 5.77269 32.3445 6.70053 32.7634 7.42613L33.7748 9.17791C34.1937 9.90352 35.1216 10.1521 35.8472 9.7332L35.8472 9.7332C36.5728 9.31427 36.8214 8.38644 36.4025 7.66083L35.3911 5.90905C34.9722 5.18344 34.0443 4.93483 33.3187 5.35376Z" fill="white"/>
        <path opacity="0.2" d="M9.04528 13.4456L9.04528 13.4456C8.31967 13.8645 8.07105 14.7923 8.48998 15.5179L10.0071 18.1456C10.426 18.8712 11.3538 19.1198 12.0794 18.7009L12.0794 18.7009C12.8051 18.282 13.0537 17.3541 12.6347 16.6285L11.1177 14.0008C10.6987 13.2752 9.77089 13.0266 9.04528 13.4456Z" fill="white"/>
        <path opacity="0.2" d="M24.2162 5.35376L24.2162 5.35376C23.4906 5.77269 23.242 6.70053 23.6609 7.42613L25.178 10.0538C25.5969 10.7794 26.5247 11.028 27.2503 10.6091L27.2503 10.6091C27.976 10.1902 28.2246 9.26233 27.8056 8.53672L26.2886 5.90905C25.8696 5.18344 24.9418 4.93483 24.2162 5.35376Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_142_8265">
        <rect width="42" height="34" fill="white" transform="translate(0.875 0.96875)"/>
        </clipPath>
        </defs>
        </svg>
    );

    const star = (
        <svg className="h-full" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7521 1.50532C13.6598 -0.376773 16.3402 -0.376773 17.2479 1.50532L19.8539 6.90892C20.225 7.67845 20.9639 8.20465 21.8125 8.30365L27.7906 9.00135C29.9269 9.25065 30.7684 11.9051 29.1658 13.3396L24.8845 17.1722C24.224 17.7634 23.9267 18.6607 24.1035 19.5294L25.2468 25.1467C25.6684 27.2177 23.4857 28.8424 21.6228 27.8443L16.1786 24.9276C15.4424 24.5332 14.5576 24.5332 13.8214 24.9276L8.3772 27.8443C6.5143 28.8424 4.3316 27.2177 4.7532 25.1467L5.8965 19.5294C6.0733 18.6607 5.776 17.7634 5.1155 17.1722L0.834151 13.3396C-0.768379 11.9051 0.0730705 9.25065 2.20939 9.00135L8.1875 8.30365C9.0361 8.20465 9.775 7.67845 10.1461 6.90892L12.7521 1.50532Z" fill="white"/>
        </svg>
    );

    const playButton = (active) => {
        return (
            <svg className={`h-full ${active ? 'fill-white' : 'fill-lightText' }`} viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_244_284)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0423 7.99912C18.4698 8.87512 18.4698 10.9493 17.0423 11.8252L3.91839 19.8785C2.42288 20.7962 0.5 19.7201 0.5 17.9655V1.85887C0.5 0.104228 2.42288 -0.971872 3.9184 -0.0541619L17.0423 7.99912Z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4534 7.99912C31.8809 8.87512 31.8809 10.9493 30.4534 11.8252L17.3295 19.8785C15.834 20.7962 13.9111 19.7201 13.9111 17.9655V1.85887C13.9111 0.104228 15.834 -0.971872 17.3295 -0.0541619L30.4534 7.99912Z"/>
            </g>
            <defs>
            <clipPath id="clip0_244_284">
            <rect width="32" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            );
    }

    return (
        <>
        <AuthorizedNavbar />
        <Sidebar>
            <SidebarItem isActive={true} link="/course" image={modulIconImg}>BELAJAR</SidebarItem>
            <SidebarItem link="/" image={kuisIconImg}>SKOR</SidebarItem>
            <SidebarItem link="/" image={pencatatanIconImg}>PENGELUARAN</SidebarItem>
            <SidebarItem link="/" image={savingIconImg}>TABUNG</SidebarItem>
            <SidebarItem link="/profile" image={profilePictureImg}>PROFIL</SidebarItem>
            <SidebarItem link="/" image={othersImg}>LAINNYA</SidebarItem>
        </Sidebar>
        <div className="fixed h-screen w-[25%] right-0 top-0 flex flex-col bg-white">
            <div className="mt-10 w-full flex gap-5 items-center flex-col justify-center">
                <div className="rounded-2xl border-2 p-4 flex flex-col gap-3 w-[80%]">
                    <p className="text-darkText text-lg font-bold">Buka seluruh modul!</p>
                    <div className="w-full gap flex items-center justify-between gap-4">
                        <img src={goldenShieldImg} class="h-9" />
                        <p className="text-sm text-longText">Selesaikan lebih dari 6 langkah dan siap untuk berkompetisi</p>
                    </div>
                </div>
                <div className="rounded-2xl border-2 p-4 flex flex-col gap-3 w-[80%]">
                    <div className="w-full rounded-xl bg-primary text-white text-sm font-bold px-2 py-1">Hasil Petualangan</div>
                    <p className="text-sm text-darkText font-bold">Modul 1</p>
                    <div className="w-full gap flex items-end justify-between gap-4">
                        <img src={treasureImg} class="h-9" />
                        <div className="flex flex-col flex-grow text-xs text-longText gap-2">
                            <p>10%</p>
                            <div className="w-full flex gap-2 items-end">
                                <ProgressBar percentage={20} height={0.75} />
                                <p>2/20</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center relative">
            <ul className="w-[50%] mt-10">
                <li className="relative">
                    <img src={aceFunImg} className="w-28 absolute top-[50%] -translate-y-1/2 right-[10%]" />
                    <RoadmapCard moduleOrder={1} link="#">Ayo mengenal uang!</RoadmapCard>
                    <ul className="w-full py-12">
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <RoadmapItem activeText="MULAI">
                                    {star}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[45%]">
                                <RoadmapItem disabled={true}>
                                    {playButton(false)}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[40%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[45%]">
                                <div className="w-20">
                                    {treasure}
                                </div>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <RoadmapItem disabled={true}>
                                    {trophy}
                                </RoadmapItem>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="relative">
                    <img src={aceWandImg} className="w-28 absolute top-[30%] -translate-y-1/2 left-[10%]" />
                    <img src={aceSmartImg} className="w-28 absolute top-[60%] -translate-y-1/2 right-[10%]" />
                    <RoadmapCard moduleOrder={2} link="#">Uangku bisa untuk apa ya?</RoadmapCard>
                    <ul className="w-full py-12">
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <RoadmapItem activeText="TONTON">
                                    {playButton(true)}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[55%]">
                                <RoadmapItem disabled={true}>
                                    {dumbell}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[60%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[55%]">
                                <div className="w-20">
                                    {treasure}
                                </div>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[45%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[40%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[45%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <div className="w-20">
                                    {treasure}
                                </div>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[55%]">
                                <RoadmapItem disabled={true}>
                                    {dumbell}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <RoadmapItem disabled={true}>
                                    {trophy}
                                </RoadmapItem>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="relative">
                    <img src={aceFunImg} className="w-28 absolute top-[65%] -translate-y-1/2 left-[10%]" />
                    <RoadmapCard moduleOrder={2} link="#">Uangku bisa untuk apa ya?</RoadmapCard>
                    <ul className="w-full py-12">
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <RoadmapItem activeText="TONTON">
                                    {playButton(true)}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[45%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[40%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[45%]">
                                <div className="w-20">
                                    {treasure}
                                </div>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[55%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[60%]">
                                <div className="w-20">
                                    {treasure}
                                </div>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[55%]">
                                <RoadmapItem disabled={true}>
                                    {dumbell}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <RoadmapItem disabled={true}>
                                    {lock}
                                </RoadmapItem>
                            </div>
                        </li>
                        <li className="w-full relative h-28">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[50%]">
                                <RoadmapItem disabled={true}>
                                    {trophy}
                                </RoadmapItem>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        </>
    );
};
export default Course;