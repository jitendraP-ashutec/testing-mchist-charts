var currentmonthval = new Date().getMonth() + 1;
var currentdayval = new Date().getDate() ;
var currentyearval = new Date().getFullYear();

var getoptionsforoverview = {
    maxage: 90, // max age to plan
    usecan: 0, // use canandian funds
    coclient: 0, // co client selected (0=false, 1=true)
    c_birthd: currentdayval, // client birth day
    c_birthm: currentmonthval, // client birth month
    c_birthy: currentyearval - 60, // client birth year
    co_birthd: 30, // client birth day
    co_birthm: 1, // client birth month
    co_birthy: 1960, // client birth year
    S0_tas: 1000000, // Account Sizes
    S0_oas: 0,
    S0_trs: 0,
    S0_ntrs: 0,
    usecustom: 1, // use custom portfolio checkbox (0=false, 1=true)
    pa_adjust_s: 60, // age of client to start adjusting portfolio
    pa_adjust_e: 70, // age of client to end adjusting portfolio
    pr_port: "Aggressive", // pre-retirement portfolio selected (0=Very Aggressive, 1=Aggressive, 2=Balanced, 3=Conservative, 4=Very conservative)
    r_port: "Aggressive", // retirement portfolio selected (0=Very Aggressive, 1=Aggressive, 2=Balanced, 3=Conservative, 4=Very conservative)
    pr_stock: 60, // pre-retirement stock/bond/cash allocation for custom portfolio only
    pr_tbond: 20,
    pr_corpbond: 20,
    pr_cash: 0,
    r_stock: 60, // retirement stock/bond/cash allocation for custom portfolio only
    r_tbond: 20,
    r_corpbond: 20,
    r_cash: 0,
    pr_castock: 75, // CANADA: pre-retirement stock/bond/cash allocation for custom portfolio only
    pr_catbond: 10,
    pr_cacash: 5,
    r_castock: 60, // CANADA: retirement stock/bond/cash allocation for custom portfolio only
    r_catbond: 15,
    r_cacash: 10,
    ss_c_amt: 0, // Social Security: Client Amount
    ss_co_amt: 0, // Social Security: Co-Client Amount
    ss_c_age: '65', // Social Security: Client Age to take SS
    ss_co_age: '65', // Social Security: Co-Client Age to take SS
    pr_needs: 0, // (Yearly) Needs calculated in Pre-Retirement
    pr_wants: 0, // (Yearly) Wants calculated in Pre-Retirement
    r_needs: 40000, // (Yearly) Needs calculated in Retirement
    r_wants: 0, // (Yearly) Wants calculated in Retirement
    res: "Ohio",
    tfs: 0, // Single (0), Married Filing Jointly (1), Married Filing Separately (2), Head of Household (3), Qualifying Widow(er) with Dependent Child (4)
    curret: true,
    ageret: 60
  }