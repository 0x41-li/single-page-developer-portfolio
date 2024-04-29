import React from "react";

type IconLinkProps = {
  of: string;
  link: string;
  ariaLabel: string;
};

const IconLink: React.FC<IconLinkProps> = ({ of, link, ariaLabel }) => {
  let SVGIcon;

  switch (of.toLowerCase()) {
    case "github":
      SVGIcon = (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.84282 0.800049C4.40466 0.800049 0 5.20471 0 10.6429C0 14.9983 2.81751 18.6771 6.73003 19.9812C7.22217 20.0674 7.40672 19.7721 7.40672 19.5137C7.40672 19.2799 7.39442 18.5048 7.39442 17.6805C4.92141 18.1357 4.28163 17.0776 4.08477 16.524C3.97404 16.241 3.4942 15.3674 3.07588 15.1337C2.73138 14.9491 2.23924 14.4939 3.06358 14.4816C3.8387 14.4693 4.39236 15.1952 4.57691 15.4905C5.46277 16.9792 6.87767 16.5609 7.44363 16.3025C7.52976 15.6627 7.78813 15.2321 8.07111 14.986C5.88109 14.7399 3.59263 13.891 3.59263 10.1261C3.59263 9.05571 3.97404 8.16986 4.60152 7.48086C4.50309 7.23479 4.15859 6.2259 4.69995 4.87252C4.69995 4.87252 5.52428 4.61414 7.40672 5.8814C8.19415 5.65994 9.03079 5.54921 9.86743 5.54921C10.7041 5.54921 11.5407 5.65994 12.3281 5.8814C14.2106 4.60184 15.0349 4.87252 15.0349 4.87252C15.5763 6.2259 15.2318 7.23479 15.1333 7.48086C15.7608 8.16986 16.1422 9.04341 16.1422 10.1261C16.1422 13.9033 13.8415 14.7399 11.6514 14.986C12.0082 15.2936 12.3158 15.8842 12.3158 16.8069C12.3158 18.1234 12.3035 19.1815 12.3035 19.5137C12.3035 19.7721 12.4881 20.0797 12.9802 19.9812C14.9341 19.3216 16.632 18.0657 17.8349 16.3906C19.0378 14.7153 19.6851 12.7051 19.6856 10.6429C19.6856 5.20471 15.281 0.800049 9.84282 0.800049Z"
            fill="currentColor"
          />
        </svg>
      );
      break;

    case "frontendmentor":
      SVGIcon = (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 19"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2673 0.78448C10.1101 0.787491 9.96029 0.85207 9.85016 0.964347C9.74003 1.07662 9.67835 1.22762 9.67838 1.38489V12.7976C9.67838 12.9569 9.74164 13.1096 9.85423 13.2222C9.96684 13.3348 10.1196 13.398 10.2788 13.398C10.438 13.398 10.5908 13.3348 10.7034 13.2222C10.816 13.1096 10.8792 12.9569 10.8792 12.7976V1.38489C10.8793 1.30515 10.8633 1.22619 10.8325 1.15264C10.8017 1.07909 10.7565 1.01242 10.6996 0.956522C10.6427 0.900625 10.5752 0.856627 10.5012 0.827089C10.4271 0.797551 10.3479 0.783062 10.2681 0.78448H10.2673ZM19.3523 4.20323C19.2738 4.20549 19.1966 4.22304 19.125 4.2549L13.9723 6.55483C13.8669 6.60246 13.7775 6.67948 13.7147 6.77667C13.652 6.87386 13.6186 6.98708 13.6186 7.10275C13.6186 7.21843 13.652 7.33165 13.7147 7.42884C13.7775 7.52602 13.8669 7.60304 13.9723 7.65067L19.125 9.95796C19.2025 9.9928 19.2862 10.011 19.3711 10.0113C19.5084 10.0109 19.6413 9.96337 19.7478 9.87685C19.8544 9.79024 19.9281 9.66976 19.9565 9.5355C19.9851 9.40121 19.9667 9.26123 19.9044 9.13885C19.8422 9.01647 19.74 8.91911 19.6147 8.86298L15.6891 7.10357L19.6147 5.35073C19.7597 5.28547 19.8728 5.16554 19.9297 5.01711C19.9866 4.86867 19.9825 4.70377 19.9182 4.55838C19.8695 4.44991 19.7898 4.35829 19.689 4.29509C19.5883 4.23188 19.4711 4.19991 19.3523 4.20323ZM0.629063 8.38832C0.712717 8.34871 0.804399 8.32896 0.896945 8.33065V8.33146C1.02776 8.33401 1.15415 8.37923 1.25691 8.46022C1.35966 8.5412 1.43315 8.65354 1.46619 8.78014C2.09462 11.1874 3.50383 13.3182 5.47307 14.8387C7.4423 16.3592 9.8603 17.1836 12.3482 17.1826C12.5075 17.1826 12.6602 17.2459 12.7728 17.3585C12.8854 17.4711 12.9486 17.6238 12.9486 17.783C12.9486 17.9423 12.8854 18.095 12.7728 18.2076C12.6602 18.3202 12.5075 18.3834 12.3482 18.3834C6.68206 18.3834 1.72866 14.5579 0.304736 9.08116C0.28158 8.99154 0.279458 8.89778 0.298536 8.80721C0.317613 8.71663 0.357374 8.6317 0.414711 8.55903C0.472049 8.48637 0.54541 8.42794 0.629063 8.38832Z"
            fill="currentColor"
          />
        </svg>
      );
      break;

    case "linkedin":
      SVGIcon = (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.84099 2.64336C3.92927 2.64336 3.18753 3.38413 3.18753 4.29466C3.18753 5.20579 3.92927 5.94704 4.84099 5.94704C5.75093 5.94704 6.49121 5.20579 6.49121 4.29466C6.49121 3.38413 5.75093 2.64336 4.84099 2.64336ZM3.41319 7.19855V16.3612H6.26328L6.26436 7.19855H3.41319ZM8.05167 7.19771V16.3603L10.8953 16.3614L10.8964 11.8276C10.8964 10.6639 11.0991 9.47431 12.6027 9.47431C14.0834 9.47431 14.0834 10.8781 14.0834 11.9032V16.3603L16.9303 16.3592V11.3351C16.9303 9.06782 16.5164 6.96979 13.5143 6.96979C12.1042 6.96979 11.1815 7.7668 10.8197 8.4494H10.7797L10.7797 7.19771H8.05167ZM18.3483 19.2H1.98544C1.20474 19.2 0.56958 18.5784 0.56958 17.8144V1.38454C0.56958 0.621101 1.20474 0 1.98544 0H18.3483C19.132 0 19.7696 0.621101 19.7696 1.38454V17.8144C19.7696 18.5784 19.132 19.2 18.3483 19.2Z"
            fill="currentColor"
          />
        </svg>
      );
      break;

    case "twitter":
      SVGIcon = (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 19 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9939 2.56447C18.309 2.86796 17.5733 3.07302 16.7997 3.1657C17.5979 2.68816 18.195 1.93655 18.4796 1.05114C17.7298 1.49652 16.9091 1.81002 16.0534 1.97801C15.4778 1.36354 14.7156 0.956256 13.8849 0.819402C13.0542 0.682547 12.2016 0.823762 11.4594 1.22114C10.7172 1.61851 10.127 2.2498 9.78033 3.017C9.43366 3.7842 9.35 4.64438 9.54233 5.464C8.02298 5.38772 6.53667 4.99282 5.17983 4.30493C3.823 3.61705 2.62596 2.65155 1.66642 1.4711C1.33833 2.03707 1.14967 2.69325 1.14967 3.39209C1.14931 4.02121 1.30423 4.64069 1.6007 5.19557C1.89717 5.75045 2.32602 6.22357 2.8492 6.57296C2.24245 6.55365 1.64909 6.38971 1.11851 6.09477V6.14398C1.11844 7.02634 1.42365 7.88155 1.98236 8.56451C2.54106 9.24741 3.31884 9.71602 4.18372 9.89083C3.62087 10.0431 3.03075 10.0655 2.45795 9.95638C2.70196 10.7157 3.17729 11.3796 3.81738 11.8553C4.45747 12.3309 5.23028 12.5945 6.02761 12.609C4.67409 13.6717 3.00249 14.248 1.28173 14.2454C0.976918 14.2455 0.672362 14.2277 0.369629 14.1921C2.1163 15.3152 4.14955 15.9112 6.2261 15.9088C13.2555 15.9088 17.0984 10.0868 17.0984 5.03748C17.0984 4.87343 17.0942 4.70775 17.0868 4.5437C17.8343 4.00314 18.4795 3.33377 18.9922 2.56694L18.9939 2.56447Z"
            fill="currentColor"
          />
        </svg>
      );
      break;

    default:
      break;
    //
  }

  if (SVGIcon) {
    return (
      <a
        href={link}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        className="h-5 w-5 text-white transition-colors duration-200 hover:text-green md:h-6 md:w-6"
      >
        {SVGIcon}
      </a>
    );
  }
};

export default IconLink;
