var getoptionsforoverview = {
    maxage: 90, // max age to plan
    usecan: 0, // use canandian funds
    coclient: 0, // co client selected (0=false, 1=true)
    c_birthd: 30, // client birth day
    c_birthm: 1, // client birth month
    c_birthy: 1960, // client birth year
    co_birthd: 30, // client birth day
    co_birthm: 1, // client birth month
    co_birthy: 1960, // client birth year
    S0: 1000000, // Value of accounts (sum of Taxable/Other/Retire/non-tax retire accounts)
    usecustom: 0, // use custom portfolio checkbox (0=false, 1=true)
    pa_adjust_s: 70, // age of client to start adjusting portfolio
    pa_adjust_e: 75, // age of client to end adjusting portfolio
    pr_port: 0, // pre-retirement portfolio selected (0=Very Aggressive, 1=Aggressive, 2=Balanced, 3=Conservative, 4=Very conservative)
    r_port: 0, // retirement portfolio selected (0=Very Aggressive, 1=Aggressive, 2=Balanced, 3=Conservative, 4=Very conservative)
    pr_stock: 75, // pre-retirement stock/bond/cash allocation for custom portfolio only
    pr_tbond: 10,
    pr_corpbond: 10,
    pr_cash: 5,
    r_stock: 60, // retirement stock/bond/cash allocation for custom portfolio only
    r_tbond: 15,
    r_corpbond: 15,
    r_cash: 10,
    pr_castock: 75, // CANADA: pre-retirement stock/bond/cash allocation for custom portfolio only
    pr_catbond: 10,
    pr_cacash: 5,
    r_castock: 60, // CANADA: retirement stock/bond/cash allocation for custom portfolio only
    r_catbond: 15,
    r_cacash: 10,
    ss_c_amt: 1000, // Social Security: Client Amount
    ss_co_amt: 1000, // Social Security: Co-Client Amount
    ss_c_age: '65 + 2 months', // Social Security: Client Age to take SS
    ss_co_age: '65 + 1 month', // Social Security: Co-Client Age to take SS
    pr_needs: 35000, // (Yearly) Needs calculated in Pre-Retirement
    pr_wants: 3000, // (Yearly) Wants calculated in Pre-Retirement
    r_needs: 30000, // (Yearly) Needs calculated in Retirement
    r_wants: 3000, // (Yearly) Wants calculated in Retirement
    res: "Ohio",
    tfs: 0, // Single (0), Married Filing Jointly (1), Married Filing Separately (2), Head of Household (3), Qualifying Widow(er) with Dependent Child (4)
    curret: false,
    ageret: 65,
  }