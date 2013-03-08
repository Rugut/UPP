Ext.define('Справочники.СохраненныеНастройки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 336,width: 343,
	iconCls: 'bogus',
	title: 'Вариант отчета',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:95px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Описание',
			style: 'position:absolute;left:95px;top:30px;width:240px;height:72px;',
		},
	]
});