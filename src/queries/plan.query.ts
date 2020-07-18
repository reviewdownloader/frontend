import gql from "graphql-tag";

export const PLAN_PROP = gql`
    fragment PlanProp on Plan {
        id
        amount
        can_reinvestment
        percent
        created_at
        days_to_payout
        title
        weekly_payout_interval
    }
`;
export const GET_PLANS = gql`
    query GetPlans {
        GetPlans {
            docs {
                ...PlanProp
            }
        }
    }
    ${PLAN_PROP}
`;
