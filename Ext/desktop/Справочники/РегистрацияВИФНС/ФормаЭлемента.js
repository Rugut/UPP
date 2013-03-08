Ext.define('Справочники.РегистрацияВИФНС.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 382,width: 480,
	iconCls: 'bogus',
	title: 'Регистрация в ИФНС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:144px;top:60px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:144px;top:137px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Кра��коеНаименование',
			style: 'position:absolute;left:144px;top:109px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Представитель',
			style: 'position:absolute;left:144px;top:187px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:144px;top:33px;width:328px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Доверенность',
			style: 'position:absolute;left:144px;top:330px;width:328px;height:19px;',
		},
	]
});