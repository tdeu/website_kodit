import React from 'react';
import { useTranslation } from 'react-i18next';

function Modal() {
    const { t } = useTranslation();

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" style={{ color: "black" }} id="exampleModalLabel">{t('kodit_ai')}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            {t('about_kodit_text')}
                        </p>
                        <br />
                        <h3>{t('our_mission')}</h3>
                        <p>
                            {t('mission_text')}
                        </p>
                        <br />
                        <h4>{t('our_approach')}</h4>
                        <p>
                            {t('approach_text')}
                        </p>
                        <br />
                        <h4>{t('our_commitment')}</h4>
                        <p>
                            {t('commitment_text')}
                        </p>
                        <br />
                        <a href="https://wa.me/2250700999990" className="btn btn-primary" target="_blank" rel="noreferrer">{t('contact_us_now')}</a>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{t('close')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;