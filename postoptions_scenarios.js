
// This is a typical post options for scenario runs (notice the scenario below is marked to true)
var scenario_increaseneeds = true;
var scenario_increaseneeds_amount = 5000;

var postoptions_scenarios = {
    "client_birthmonth": client_birthmonth,
    "client_birthday": client_birthday,
    "client_birthyear": client_birthyear,
    "coclient_birthmonth": coclient_birthmonth,
    "coclient_birthday": coclient_birthday,
    "coclient_birthyear": coclient_birthyear,
    "coclient_selected": coclient_selected,
    "maxagetoplan": maxagetoplan,
    "S0": 800000,
    "pa_useCustomPerc": false,
    "pa_selection": 0,
    "pa_stock": preretire_stockallocation,
    "pa_treasury": preretire_tbondallocation,
    "pa_corpbond": preretire_corpbondallocation,
    "pa_cash": preretire_cashallocation,
    "pa_selection_end": 2,
    "pa_stock_end": retire_stockallocation,
    "pa_treasury_end": retire_tbondallocation,
    "pa_corpbond_end": retire_corpbondallocation,
    "pa_cash_end": retire_cashallocation,
    "useCanadianFunds": false,
    "pa_stockCA": 70,
    "pa_treasuryCA": 10,
    "pa_cashCA": 5,
    "pa_stock_endCA": 70,
    "pa_treasury_endCA": 10,
    "pa_cash_endCA": 5,
    "age_to_start_adjust_pa": age_to_start_adjust_pa,
    "age_to_end_adjust_pa": age_to_end_adjust_pa,
    "desired_legacy_amount": 100000,

    "residence": "Ohio",
    "taxfilingstatus": 0, // Single (0), Married Filing Jointly (1), Married Filing Separately (2), Head of Household (3), Qualifying Widow(er) with Dependent Child (4)
    "currentlyretired": true,
    "agetoretire": 65,

    "annualwithdrawalneeds": 27000,
    "annualwithdrawalwants": 6000,
    "annualretirementwithdrawalneeds": 27000,
    "annualretirementwithdrawalwants": 6000,
    "bigexpenses": [0, 0, 10000, 0, 0, 0],
    "bigexpensesyear": [2022, 2024, 2025, 2026, 2025, 2021],
    "monthlyclientsocialsecurity": 500,
    "monthlycoclientsocialsecurity": 1000,
    "client_socialsecurityage": "62 + 1 month",
    "coclient_socialsecurityage": "62 + 2 months",
    "monthlyclientincome": 5000,
    "monthlyclientincome_startage": 0,
    "monthlyclientincome_stopage": 65,
    "monthlycoclientincome": 0,
    "monthlycoclientincome_startage": 0,
    "monthlycoclientincome_stopage": 65,
    "monthlyclientotherincome": 0,
    "monthlyclientotherincome_startage": 0,
    "monthlyclientotherincome_stopage": 70,
    "monthlycoclientotherincome": 750,
    "monthlycoclientotherincome_startage": 0,
    "monthlycoclientotherincome_stopage": 60,
    "monthlyrentalincome": 0,
    "monthlyrentalincome_startage": 65,
    "monthlyrentalincome_stopage": 70,

    "monthlyclientpensionincome": 0,
    "monthlyclientpensionincome_startage": 65,
    "monthlyclientpensionincome_stopage": 70,
    "monthlycoclientpensionincome": 0,
    "monthlycoclientpensionincome_startage": 65,
    "monthlycoclientpensionincome_stopage": 75,
    "client_pensionlumpsum_available": false,
    "coclient_pensionlumpsum_available": false,
    "client_pensionlumpsum_use": false,
    "coclient_pensionlumpsum_use": false,
    "client_pensionlumpsum": 0,
    "client_pensionlumpsum_age": 0,
    "coclient_pensionlumpsum": 0,
    "coclient_pensionlumpsum_age": 0,

    "scenario_lowreturns_enabled": false,
    "scenario_lowreturns_percreduction": 25,
    "scenario_highvolatility_enabled": false,
    "scenario_highvolatility_percincrease": 25,
    "scenario_cashzeroreturns_enabled": false,
    "scenario_lowstockreturns_enabled": false,
    "scenario_lowstockreturns_percreduction": 25,
    "scenario_lowbondreturns_enabled": false,
    "scenario_lowbondreturns_percreduction": 25,

    "scenario_sequencerisk": false,
    "scenario_sequencerisk_years": 1,

    "scenario_higherinflation": true,
    "scenario_higherinflation_percentinc": 30,

    "scenario_unexpectedexpense": false,
    "scenario_unexpectedexpense_amount": 10000,
    "scenario_unexpectedexpense_year": 2030,

    "scenario_medicalexpenses": false,
    "scenario_medicalexpenses_amountincrease": 100000,
    "scenario_medicalexpenses_age": 80,

    "scenario_increasedhealthexpenses": false,
    "scenario_increasedhealthexpenses_amountincrease": 300,

    "scenario_longtermcare": false,
    "scenario_longtermcare_amount": 2000,
    "scenario_longtermcare_startage": 80,
    "scenario_longtermcare_stopage": 83,

    "scenario_livelonger": false,
    "scenario_livelonger_years": 5,

    "scenario_socialsecuritycut": false,
    "scenario_socialsecurity_percdec": 25,

    "scenario_socialsecurityagechange": false,
    "scenario_socialsecurityagechange_clientnewage": '66 + 2 months',
    "scenario_socialsecurityagechange_coclientnewage": '66 + 5 months',

    "scenario_pension_cut": false,
    "scenario_pension_percdec": 25,


    "scenario_retireearly": false,
    "scenario_retireearly_client_years": 2,
    "scenario_retireearly_coclient_years": 2,
    "scenario_retirelate": false,
    "scenario_retirelate_client_years": 2,
    "scenario_retirelate_coclient_years": 2,

    "scenario_investdifferently": false,
    "scenario_investdifferently_beforeretire": 1,
    "scenario_investdifferently_duringretire": 2,

    "scenario_client_madeextramoney": false,
    "scenario_client_madeextramoney_amount": 600,
    "scenario_client_madeextramoney_startage": 65,
    "scenario_client_madeextramoney_stopage": 68,

    "scenario_mortagepaidoff": false,
    "scenario_mortagepaidoff_amounttoreducemonthly": 1500,

    "scenario_newmortage": false,
    "scenario_newmortage_amounttoincreasemonthly": 1500,

    "scenario_startretwithdiff": false,
    "scenario_startretwithdiff_amountpermonth": 200,

    "scenario_reducedneeds": false,
    "scenario_reduceneeds_amount": 3000,

    "scenario_increaseneeds": scenario_increaseneeds,
    "scenario_increaseneeds_amount": scenario_increaseneeds_amount,

    "scenario_needsvswants": false,
    "scenario_needsvswants_percentcutwants": 50,
    "scenario_needsvswants_preretire": false,
    "scenario_needsvswants_retire": false,

    "scenario_retirementincome_cut": false,
    "scenario_retirementincome_cut_amount": 500,

    "scenario_socialsecurity_benifit_client": false,
    "scenario_socialsecurity_benifit_client_age": 75,
    "scenario_socialsecurity_benifit_client_lifeinsurance": 0,
    "scenario_socialsecurity_benifit_coclient": false,
    "scenario_socialsecurity_benifit_coclient_age": 75,
    "scenario_socialsecurity_benifit_coclient_lifeinsurance": 0,

    "scenario_taxablevsroth_withdrawals": false,
    "scenario_taxablevsroth_withdrawals_amountoftax": 15,

    "scenario_2008_at_retirestart": false,
    "scenario_2000_at_retirestart": false,
    "scenario_greatdepression_at_retirestart": false,
    "scenario_2013_at_retirestart": false,

    "scenario_retirebalancelower": false,
    "scenario_retirebalancelower_percent": 15,


    "scenario_pensionlumpsum_client": false,
    "scenario_pensionlumpsum_coclient": false,

    "wr_preservation_enabled": false,
    "wr_preservation_percent": 25,
    "wr_preservation_redpercent": 25,
    "wr_preservation_maxage": 80,

    "wr_prosperity_enabled": false,
    "wr_prosperity_percent": 20,
    "wr_prosperity_incpercent": 25,
    "wr_prosperity_maxage": 85,

    "wr_pp_enabled": false,
    "wr_pp_preservation_percent": 25,
    "wr_pp_preservation_redpercent": 25,
    "wr_pp_prosperity_percent": 20,
    "wr_pp_prosperity_incpercent": 25,
    "wr_prosperity_presevervation_maxage": 80,

    "wr_boundaries_enabled": false,
    "wr_boundaries_percent_dec_trigger": 102,
    "wr_boundaries_percent_inc_trigger": 3,
    "wr_boundaries_decpercent": 50,
    "wr_boundaries_incpercent": 50,
    "wr_boundaries_yearstriggerdec": 1,
    "wr_boundaries_yearstriggerinc": 1,

    "wr_portfoliobalancedecinc_enabled": false,
    "wr_portfoliobalancedecinc_inc_percent": 120,
    "wr_portfoliobalancedecinc_inc_increase": 20,
    "wr_portfoliobalancedecinc_dec_percent": 90,
    "wr_portfoliobalancedecinc_dec_decrease": 50,

    "wr_ben_enabled": false,
    "wr_ben_decreaseyears": 2,
    "wr_ben_decreasepercent": 15,
    "wr_ben_spendingdecreasepercent": 10,
    "wr_ben_increaseyears": 2,
    "wr_ben_increasepercent": 20,
    "wr_ben_spendingincreasepercent": 10,
    "wr_ben_maxage": 80,

    "wr_getajob_enabled": false,
    "wr_getajob_maxage": 70,
    "wr_getajob_percentinitial": 90,
    "wr_getajob_percentoforiginal": 100,
    "wr_getajob_monthlyincome": 1000,

    "nsim": 1000
  };