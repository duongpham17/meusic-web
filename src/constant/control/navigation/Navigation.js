import styles from './Navigation.module.scss';
import React, {useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {ControlListLoggedOut, ControlListLoggedIn} from './ControlList';
import {connect} from 'react-redux';
import {openContent} from 'redux/actions/openActions';
import {BsDownload} from 'react-icons/bs';

const Navigation = ({ auth, upload, openContent }) => {

  const {isLoggedIn} = auth;
  const {open} = upload;

  const [location, navigate] = [useLocation(), useNavigate()];

  useEffect(() => {

    const keypress = (keyValue, link) => window.addEventListener("keypress", (event) => {
        const [ctrl, key] = [event.ctrlKey, event.key];
        if(ctrl && key === keyValue) return navigate(`/${link}`);
    });

    const EventHome = keypress("2", "");
    const EventSaved = keypress("3", "saved");
    const EventCustomise = keypress("4", "customise");
    const EventOthers = keypress("5", "others");
    const EventRoom = keypress("6", "room");

    const EventDownload = window.addEventListener("keypress", (event) => {
      const [ctrl, key] = [event.ctrlKey, event.key];
      if(ctrl && key === "1") return openContent("upload");
    });

    return () => {
      window.removeEventListener("keypress", EventHome);
      window.removeEventListener("keypress", EventSaved);
      window.removeEventListener("keypress", EventCustomise);
      window.removeEventListener("keypress", EventOthers);
      window.removeEventListener("keypress", EventDownload);
      window.removeEventListener("keypress", EventRoom);
    }
    
}, [navigate, openContent]);

  return (
    <div className={styles.container}>

      { !isLoggedIn && 
        <div className={styles.controls}>
          {ControlListLoggedOut.map(el => 
            <div key={el.id} className={styles.element}>
              <Link to={el.link} className={`${location.pathname === el.link && styles.selected}`}> {el.icon} </Link>
            </div>
          )}
        </div>
      } 

      { isLoggedIn &&
      <div className={styles.controls}>
          {ControlListLoggedIn.map(el => 
            <div key={el.id} className={styles.element}>
              <abbr title={el.keyboard}>

                {el.type === "link" &&
                  <Link className={`${location.pathname === el.link && styles.selected}`} to={el.link}> {el.icon} </Link>
                }

                {el.type === "button" &&
                  <button onClick={() => openContent("upload")} className={`${open && styles.selected}`}>
                    <BsDownload/>
                  </button>
                }

              </abbr>
            </div>
          )}
        </div>
      }
      
    </div>
  )
};

const mapStateToProps = state =>({
  auth: state.authReducers,
  upload: state.uploadReducers
})

const mapDispatchToProps = {
  openContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
