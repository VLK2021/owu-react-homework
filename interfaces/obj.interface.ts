export interface ISpaceX {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
    },
    links: ILinks,
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: [
                ICores
            ]
        },
        second_stage: ISecond_stage
    }
}

interface ILinks {
    article_link: null,
    video_link: string
}

interface ISecond_stage {
    payloads: [
        {
            payload_type: string,
            payload_mass_kg: number,
            payload_mass_lbs: number
        }
    ]
}

interface ICores {
    flight: number,
    core: {
        reuse_count: number,
        status?: string
    }
}