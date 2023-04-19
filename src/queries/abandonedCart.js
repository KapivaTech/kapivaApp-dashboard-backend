// Abandoned Leads
const abandoned_Total_Leads=`SELECT COUNT(*) as total_leads FROM abandoned_cart_data WHERE date_updated=?`
const abandoned_Cart_Value=`SELECT SUM(cart_value) as total_cart_value FROM abandoned_cart_data WHERE date_updated=?`
const total_Cart_Value_Cur_Month=`SELECT COUNT(id) as total_leads_currMonth, SUM(cart_value) as total_cart_value_currMonth FROM abandoned_cart_data WHERE MONTH(date_updated)=?`
const total_Cart_Value_Last_Month=`SELECT COUNT(id) as total_leads_lastMonth, SUM(cart_value) as total_cart_value_lastMonth FROM abandoned_cart_data WHERE MONTH(date_updated) =? AND YEAR(date_updated)=?`
const total_Customer =`SELECT COUNT(*) as total_customers FROM abandoned_cart_data WHERE date_updated=? AND customer_id<>'0'`
const total_Guest =`SELECT COUNT(*) as total_guests FROM abandoned_cart_data WHERE date_updated=? AND customer_id='0'`

// Get Stats
const current_Cart_stats =`SELECT DISTINCT(acd.campaign_source), COUNT(*)  as campaign_source_counts FROM abandoned_cart_data acd WHERE acd.date_updated =? GROUP BY acd.campaign_source ORDER BY campaign_source_counts DESC`

// Get Cart 
const current_Date_Cart = `select * from abandoned_cart_data WHERE date_updated = ? ORDER BY date_added DESC LIMIT 10`