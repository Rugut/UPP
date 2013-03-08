Ext.define('Справочники.ПоказателиСхемМотивации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 393,width: 413,
	iconCls: 'bogus',
	title: 'Показатели схем мотивации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:39px;width:309px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипПоказателя',
			style: 'position:absolute;left:166px;top:104px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВозможностьИзменения',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПоказателя',
			style: 'position:absolute;left:166px;top:132px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Идентификатор',
			style: 'position:absolute;left:96px;top:65px;width:309px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРасчетаСуммы',
			style: 'position:absolute;left:166px;top:132px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммируемыйПоказатель',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСтажа',
			style: 'position:absolute;left:166px;top:161px;width:230px;height:19px;',
		},
	]
});