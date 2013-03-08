Ext.define('Справочники.СпособыОтраженияЗарплатыВУпрУчете.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 206,width: 404,
	iconCls: 'bogus',
	title: 'Способы отражения зарплаты в управленческом учете',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:302px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:176px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:176px;top:106px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъектСтроительства',
			style: 'position:absolute;left:176px;top:154px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатрат',
			style: 'position:absolute;left:176px;top:130px;width:220px;height:19px;',
		},
	]
});