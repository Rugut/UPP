Ext.define('Справочники.РегламентированныеОтчеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 534,width: 470,
	iconCls: 'bogus',
	title: 'Параметры отчета',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:35px;width:368px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникОтчета',
			style: 'position:absolute;left:95px;top:98px;width:367px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:8px;width:368px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникОтчетаФайл',
			style: 'position:absolute;left:94px;top:125px;width:368px;height:19px;',
		},
	]
});