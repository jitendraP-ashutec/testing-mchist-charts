
var currentmonthval = new Date().getMonth() + 1;
var currentdayval = new Date().getDate() ;
var currentyearval = new Date().getFullYear();
// This is a typical post options for non-scenario runs (notice the scenarios are marked to false)
var postoptions = {
    "client_birthmonth": currentmonthval,
    "client_birthday": currentdayval,
    "client_birthyear": currentyearval - 60, // To get 30 years (max age of 90)
    "coclient_birthmonth": 1,
    "coclient_birthday": 1,
    "coclient_birthyear": 1960,
    "coclient_selected": 0,
    "maxagetoplan": 90,
    "S0_tas": 1000000,
    "S0_oas": 0,
    "S0_trs": 0,
    "S0_ntrs": 0,
    "pa_useCustomPerc": true,
    "pa_selection": "Aggressive",
    "pa_stock": 60,
    "pa_treasury": 20,
    "pa_corpbond": 20,
    "pa_cash": 0,
    "pa_selection_end": "Aggressive",
    "pa_stock_end": 60,
    "pa_treasury_end": 20,
    "pa_corpbond_end": 20,
    "pa_cash_end": 0,
    "useCanadianFunds": false,
    "pa_stockCA": 70,
    "pa_treasuryCA": 10,
    "pa_cashCA": 5,
    "pa_stock_endCA": 70,
    "pa_treasury_endCA": 10,
    "pa_cash_endCA": 5,
    "age_to_start_adjust_pa": 0,
    "age_to_end_adjust_pa": 0,
    "desired_legacy_amount": 0,

    "residence": "Ohio",
    "taxfilingstatus": 0, // Single (0), Married Filing Jointly (1), Married Filing Separately (2), Head of Household (3), Qualifying Widow(er) with Dependent Child (4)
    "currentlyretired": true,
    "agetoretire": 60,

    "annualwithdrawalneeds": 27000,
    "annualwithdrawalwants": 0,
    "annualretirementwithdrawalneeds": 27000,
    "annualretirementwithdrawalwants": 0,
    "bigexpenses": [0, 0, 0, 0, 0, 0],
    "bigexpensesyear": [currentyearval, currentyearval, currentyearval, currentyearval, currentyearval, currentyearval],
    "monthlyclientsocialsecurity": 0,
    "monthlycoclientsocialsecurity": 0,
    "client_socialsecurityage": "70",
    "coclient_socialsecurityage": "70",
    "monthlyclientincome": 0,
    "monthlyclientincome_startage": 0,
    "monthlyclientincome_stopage": 0,
    "monthlycoclientincome": 0,
    "monthlycoclientincome_startage": 0,
    "monthlycoclientincome_stopage": 0,
    "monthlyclientotherincome": 0,
    "monthlyclientotherincome_startage": 0,
    "monthlyclientotherincome_stopage": 0,
    "monthlycoclientotherincome": 0,
    "monthlycoclientotherincome_startage": 0,
    "monthlycoclientotherincome_stopage": 0,
    "monthlyrentalincome": 0,
    "monthlyrentalincome_startage": 0,
    "monthlyrentalincome_stopage": 0,

    "monthlyclientpensionincome": 0,
    "monthlyclientpensionincome_startage": 0,
    "monthlyclientpensionincome_stopage": 0,
    "monthlycoclientpensionincome": 0,
    "monthlycoclientpensionincome_startage": 0,
    "monthlycoclientpensionincome_stopage": 0,
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
    "scenario_unexpectedexpense_year": 2090,

    "scenario_medicalexpenses": false,
    "scenario_medicalexpenses_amountincrease": 0,
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
    "scenario_socialsecurityagechange_clientnewage": "65",
    "scenario_socialsecurityagechange_coclientnewage": "65",

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
    "scenario_client_madeextramoney_amount": 0,
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

    "scenario_increaseneeds": false,
    "scenario_increaseneeds_amount": 3000,

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

    "nsim": 700
  };