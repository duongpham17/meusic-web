import styles from './Navigation.module.scss';
import React, {useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {ControlListLoggedOut, ControlListLoggedIn} from './ControlList';
import {connect} from 'react-redux';
import {utilsOpenContent} from 'redux/actions/utilsActions';

const Navigation = ({ auth, utilsOpenContent }) => {

  const {isLoggedIn} = auth;

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
      if(ctrl && key === "1") return utilsOpenContent("upload");
    });

    return () => {
      window.removeEventListener("keypress", EventHome);
      window.removeEventListener("keypress", EventSaved);
      window.removeEventListener("keypress", EventCustomise);
      window.removeEventListener("keypress", EventOthers);
      window.removeEventListener("keypress", EventDownload);
      window.removeEventListener("keypress", EventRoom);
    }
    
}, [navigate, utilsOpenContent]);

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
})

const mapDispatchToProps = {
  utilsOpenContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
