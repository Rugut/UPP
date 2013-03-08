Ext.define('Справочники.ТСДФорматыДанных.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 400,
	iconCls: 'bogus',
	title: 'Форматы выгрузки для терминалов сбора данных',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:330px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:90px;top:33px;width:200px;height:19px;',
		},
	]
});