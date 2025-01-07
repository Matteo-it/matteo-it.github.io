import React, {useEffect, useState} from 'react'
import Layout from "../components/layout/Layout.jsx"
import {useData} from "../providers/DataProvider.jsx"
import {useLanguage} from "../providers/LanguageProvider.jsx"
import {useLocation} from "../providers/LocationProvider.jsx"
import {useNavigation} from "../providers/NavigationProvider.jsx"
import LayoutNavigation from "../components/layout/LayoutNavigation.jsx"
import LayoutImageCache from "../components/layout/LayoutImageCache.jsx"
import LayoutSlideshow from "../components/layout/LayoutSlideshow.jsx"

function Portfolio() {
    const data = useData()
    const language = useLanguage()
    const location = useLocation()
    const navigation = useNavigation()

    if(!data || !language || !location || !navigation) {
        window.location.reload()
        return
    }

    const profile = data.getProfile()
    const settings = data.getSettings()
    const sections = data.getSections()

    const animatedBackgroundEnabled = settings.templateSettings.animatedBackground

    const currentSection = navigation.targetSection
    const previousSection = navigation.previousSection
    const sectionLinks = navigation.sectionLinks
    const categoryLinks = navigation.categoryLinks

    return (
        <Layout id={"react-portfolio"}
                animatedBackgroundEnabled={animatedBackgroundEnabled}>
            <LayoutImageCache profile={profile}
                              settings={settings}
                              sections={sections}/>

            <LayoutNavigation profile={profile}
                              sectionLinks={sectionLinks}
                              categoryLinks={categoryLinks}>
                <LayoutSlideshow sections={sections}
                                 currentSection={currentSection}
                                 previousSection={previousSection}/>
            </LayoutNavigation>
        </Layout>
    )
}

export default Portfolio