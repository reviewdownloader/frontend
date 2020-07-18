import gql from "graphql-tag";
import { PLAN_PROP } from "./plan.query";

const INVESTMENT_PROP = gql`
    fragment InvestmentProp on Investment {
        id
        approved
        balance
        closed
        created_at
        date
        declined
        investment_made
        last_fund_date
        next_fund_date
        paid
        payout_sum
        payout_weekly
        plan {
            ...PlanProp
        }
        compounded {
            status
            payout
            payoutDate
        }
    }
    ${PLAN_PROP}
`;

export const GET_YOUR_INVESTMENT = gql`
    query GetInvestmentListing($page: Int, $limit: Int) {
        GetUserInvestments(page: $page, limit: $limit) {
            docs {
                ...InvestmentProp
            }
            page
            limit
            totalDocs
            totalPages
            prevPage
            nextPage
        }
    }
    ${INVESTMENT_PROP}
`;

export const NEW_INVESTMENT = gql`
    mutation NewInvestment($model: InvestmentInput!) {
        NewInvestment(model: $model) {
            message
            doc {
                ...InvestmentProp
            }
        }
    }
    ${INVESTMENT_PROP}
`;

export const MAKE_PAYMENT = gql`
    mutation MakeInvestmentPayment($id: ID!, $wallet: String!) {
        PaidForInvestment(id: $id, wallet: $wallet) {
            message
            doc {
                ...InvestmentProp
            }
        }
    }
    ${INVESTMENT_PROP}
`;
export const CLOSE_INVESTMENT = gql`
    mutation CloseInvestment($id: ID!) {
        CloseInvestment(id: $id) {
            message
        }
    }
`;

export const GET_HISTORY = gql`
    query GetInvestmentHistories($id: ID!, $page: Int!, $limit: Int!) {
        GetInvestmentHistory(id: $id, page: $page, limit: $limit) {
            page
            limit
            docs {
                id
                amount
                date
                reason
            }
            totalPages
            totalDocs
            prevPage
            nextPage
        }
    }
`;

export const REINVESTMENT = gql`
    mutation Reinvestment($id: ID!, $payout: Int!, $weeks: Int!) {
        Reinvestment(id: $id, payout: $payout, weeks: $weeks) {
            message
        }
    }
`;
export const COMPOUND_INVESTMENT = gql`
    mutation CompoundInvestment($id: ID!, $payout: String!, $nextDate: String!) {
        CompoundInvestment(id: $id, payout: $payout, nextFund: $nextDate) {
            message
        }
    }
`;
