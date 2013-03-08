Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораОбъектовНедвижимости',
	{
	extend: 'Ext.window.Window',
	height: 303,width: 538,
	iconCls: 'bogus',
	title: 'Подбор объектов недвижимости',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппыУчетаОС',
			style: 'position:absolute;left:103px;top:7px;width:427px;height:19px;',
		},
	]
});